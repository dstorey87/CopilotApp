import React, { useState, useEffect } from 'react';

function Trends() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/trends`)
      .then(response => response.json())
      .then(data => setTrends(data.trends));
  }, []);

  const handleApprove = (trendId) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/trends/approve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ trend_id: trendId }),  // Ensure it matches the backend expectation
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        // Optionally, update UI or state based on response
      });
  };

  const handleDeny = (trendId) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/trends/deny`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ trend_id: trendId }),  // Ensure it matches the backend expectation
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        // Optionally, update UI or state based on response
      });
  };

  return (
    <div>
      <h2>Trends Page</h2>
      <ul>
        {trends.map(trend => (
          <li key={trend.id}>
            {trend.name}
            <button onClick={() => handleApprove(trend.id)}>Approve</button>
            <button onClick={() => handleDeny(trend.id)}>Deny</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trends;