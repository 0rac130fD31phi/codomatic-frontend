import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
//import { AuthProvider } from './contexts/AuthContext';
//import { WalletProvider } from './contexts/WalletContext';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);
