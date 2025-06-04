// routes/voiceRoutes.js
const express = require('express');
const router = express.Router();
const voiceController = require('../controllers/voiceController');

router.post('/clone', voiceController.cloneVoice);

module.exports = router;
