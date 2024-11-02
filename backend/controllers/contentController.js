const contentModel = require('../models/contentModel');
const logger = require('../utils/logger');

exports.generateContent = async (req, res) => {
  try {
    const { topic } = req.body;
    const content = await contentModel.generateContent(topic);
    res.json({ content });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Failed to generate content' });
  }
};