const axios = require('axios');
const FormData = require('form-data');
const TbdImage = require('../models/TbdImage'); // your Mongo model

const detectTuberculosis = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        const form = new FormData();
        form.append('image', req.file.buffer, {
            filename: req.file.originalname,
            contentType: req.file.mimetype,
        });

        // Call your local Flask AI model API
        const response = await axios.post('http://127.0.0.1:5000/api/tb/detect-tb', form, {
            headers: form.getHeaders(),
        });

        const { type } = response.data;

        // Use original filename as a placeholder URL for now
        const publicUrl = req.file.originalname;

        // Save the result to MongoDB
        const newRecord = new TbdImage({
            imageUrl: publicUrl,
            isTuberculosis: type.label === 'TB',
            detectionResult: type
        });

        await newRecord.save();

        res.json({
        type: {
        ai_generated: type.ai_generated,
        label: type.label
            }
        });

    } catch (error) {
        console.error('TB detection failed:', error.message);
        res.status(500).json({ error: 'An error occurred during TB detection' });
    }
};

module.exports = { detectTuberculosis };
