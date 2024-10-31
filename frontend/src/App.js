// App.js - Main entry point for the React frontend
// - Renders the Home, Trends, and Admin pages
// - Sets up routing and handles global states
// - Uses "Choose Your AI" dropdown to control AI model selection
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Trends from './pages/Trends';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div>
        <h1>Affiliate Marketing AI Platform</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trends" component={Trends} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;