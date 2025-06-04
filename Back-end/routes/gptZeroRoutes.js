// routes/gptZeroRoutes.js

const express = require('express');
const router = express.Router();
const { detectAIGeneratedText } = require('../controllers/gptZeroController');

// Route to detect AI generated text
router.post('/detect', detectAIGeneratedText);

module.exports = router;
