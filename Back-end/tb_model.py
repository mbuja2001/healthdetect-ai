# tb_model.py

import os
import cv2
import numpy as np
from PIL import Image
import torch
import torch.nn as nn
import torchvision.transforms as transforms
import torchvision.models as models
import joblib

# ----------------------------
# Load Saved Model Components
# ----------------------------
model_bundle_path = r"C:\Users\Vulindlela Qaba\Downloads\tb_detector2.pkl"
bundle = joblib.load(model_bundle_path)
extractor_state = bundle['feature_extractor_state']
selector = bundle['feature_selector']
clf = bundle['svm_classifier']

# ----------------------------
# Feature Extractors
# ----------------------------
class FeatureExtractorOriginal(nn.Module):
    def __init__(self):
        super().__init__()
        base = models.resnet18(weights=models.ResNet18_Weights.DEFAULT)
        self.backbone = nn.Sequential(*list(base.children())[:-1])
    def forward(self, x):
        f = self.backbone(x)
        return f.view(f.size(0), -1)

class HeatmapExtractor(nn.Module):
    def __init__(self):
        super().__init__()
        base = models.resnet18(weights=models.ResNet18_Weights.DEFAULT)
        self.features = nn.Sequential(*list(base.children())[:-2])
        self.pool = nn.AdaptiveAvgPool2d((1, 1))
    def forward(self, x):
        conv_feat = self.features(x)
        pooled_feat = self.pool(conv_feat)
        flat_feat = pooled_feat.view(pooled_feat.size(0), -1)
        return flat_feat, conv_feat

# ----------------------------
# Setup
# ----------------------------
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

extractor = FeatureExtractorOriginal().to(device)
extractor.load_state_dict(extractor_state)
extractor.eval()

heatmap_extractor = HeatmapExtractor().to(device)
heatmap_extractor.eval()

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225]),
])

# ----------------------------
# Heatmap Generation
# ----------------------------
def generate_heatmap(conv_feat, image_path, out_dir="outputs"):
    os.makedirs(out_dir, exist_ok=True)
    base = os.path.splitext(os.path.basename(image_path))[0]

    heatmap = conv_feat.squeeze(0).mean(0).cpu().numpy()
    heatmap = np.maximum(heatmap, 0)
    heatmap /= heatmap.max()
    heatmap = cv2.resize(heatmap, (224, 224))
    heatmap_img = np.uint8(255 * heatmap)
    heatmap_color = cv2.applyColorMap(heatmap_img, cv2.COLORMAP_JET)

    raw_path = os.path.join(out_dir, f"heatmap_{base}.png")
    cv2.imwrite(raw_path, heatmap_color)

    original = cv2.imread(image_path)
    original = cv2.resize(original, (224, 224))
    overlay = cv2.addWeighted(original, 0.5, heatmap_color, 0.5, 0)

    overlay_path = os.path.join(out_dir, f"overlay_{base}.png")
    cv2.imwrite(overlay_path, overlay)

# ----------------------------
# Prediction Function
# ----------------------------
def predict_tb(image_path, out_dir="outputs"):
    img = Image.open(image_path).convert("RGB")
    img_tensor = transform(img).unsqueeze(0).to(device)

    with torch.no_grad():
        feats = extractor(img_tensor).cpu().numpy()
        feats_sel = selector.transform(feats)
        prob = clf.predict_proba(feats_sel)[0, 1]
        label = clf.predict(feats_sel)[0]
        _, conv_feat = heatmap_extractor(img_tensor)

    generate_heatmap(conv_feat, image_path, out_dir)
    return prob, label
