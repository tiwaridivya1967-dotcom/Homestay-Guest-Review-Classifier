import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- 1. Add this import line!
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- 2. Put this opening tag here */}
      <App />
    </BrowserRouter> {/* <-- 3. Put this closing tag here */}
  </React.StrictMode>,
);