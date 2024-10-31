import React, { useState, useEffect } from 'react';

function ModelSelector() {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');

  useEffect(() => {
    fetch('/model_config.json')
      .then(response => response.json())
      .then(data => {
        setModels(data.content_generation.options);
        setSelectedModel(data.content_generation.default);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedModel(event.target.value);
    fetch(`${process.env.REACT_APP_API_URL}/api/models`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model: event.target.value }),
    });
  };

  return (
    <div>
      <label>Select AI Model:</label>
      <select value={selectedModel} onChange={handleChange}>
        {models.map(model => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>
    </div>
  );
}

export default ModelSelector;