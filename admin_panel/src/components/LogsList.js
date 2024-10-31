// admin_panel/src/components/LogsList.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function LogsList() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const socket = io(`${process.env.REACT_APP_API_URL}`);

    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    socket.on('log', (message) => {
      setLogs((prevLogs) => [...prevLogs, message]);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default LogsList;