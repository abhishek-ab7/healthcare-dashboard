import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // <-- Make sure this is App.jsx
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
