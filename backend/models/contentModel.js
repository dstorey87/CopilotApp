const axios = require('axios');

exports.generateContent = async (topic) => {
  // Replace with actual API call to a free AI content generation service
  const response = await axios.post('https://api.example.com/generate', { topic });
  return response.data.content;
};