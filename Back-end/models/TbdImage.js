const mongoose = require('mongoose');

const tbdImageSchema = new mongoose.Schema({
  isTuberculosis: { type: Boolean, required: true },
  detectionResult: { type: Object, required: true }, // Full Flask response
  createdAt: { type: Date, default: Date.now }
});

const TbdImage = mongoose.model('TbdImage', tbdImageSchema);

module.exports = TbdImage;
