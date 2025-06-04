const express = require('express');
const router = express.Router();
const multer = require('../middleware/multerMiddleware'); // your multer config
const { detectTuberculosis } = require('../controllers/tbDetectionController');

router.post('/detect-tb', multer.single('image'), detectTuberculosis);

module.exports = router;
