import { AppContextProvider } from './context/AppContext.jsx';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

// ...existing code...

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
  
)