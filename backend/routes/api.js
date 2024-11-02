const express = require('express');
const contentController = require('../controllers/contentController');

const router = express.Router();

router.post('/generate', contentController.generateContent);

module.exports = router;