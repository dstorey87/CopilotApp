// App.js - Main entry point for the React admin panel
// TODO: Set up dropdown for AI model selection and log display
import React from 'react';
import ModelSelector from './components/ModelSelector';
import LogsList from './components/LogsList';

function App() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <ModelSelector />
      <LogsList />
    </div>
  );
}

export default App;