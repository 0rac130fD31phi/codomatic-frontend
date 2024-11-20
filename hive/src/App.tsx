import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './pages/HomePage';
//import SignIn from './pages/auth/SignIn';
//import Register from './pages/auth/Register';
//import ProtectedRoute from './components/ProtectedRoute';
//import Layout from './components/Layout';
//import Profile from './pages/Profile';
//import Marketplace from './pages/Marketplace';
//  import NeuralNetworkAnimation from './components/NeuralNetworkAnimation';
import { ThemeProvider } from './contexts/ThemeContext'; // Import the ThemeProvider
import { FontProvider } from './contexts/FontContext';  // Import the FontProvider
import LandingPage from './pages/LandingPage2';
import { ThemeSelector } from './components/shared/design/ThemeSelector';
import { FontSelector } from './components/shared/design/FontSelector';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <FontProvider>
        <ThemeSelector />
        <FontSelector />
        <div>
          <LandingPage />
        </div>
       </FontProvider>
    </ThemeProvider>
  );
};

export default App;
