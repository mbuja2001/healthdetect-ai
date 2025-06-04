// backend/routes/webSearchRoutes.js
const express = require('express');
const { performWebSearch } = require('../controllers/webSearchController');

const router = express.Router();

router.post('/websearch', performWebSearch);

module.exports = router;
