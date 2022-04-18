import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOMClient from 'react-dom/client';


const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
  
    <App />

  </BrowserRouter>
);