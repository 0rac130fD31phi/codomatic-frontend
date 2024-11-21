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
import { LandingPage } from './pages/Landing/LandingPage3';
import { ThemeSelector } from './components/shared/design/ThemeSelector';
import { FontSelector } from './components/shared/design/FontSelector';
import HaiveCommand from './pages/showcase';
import { BaseLayout } from './layouts/BaseLayout';
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <FontProvider>
        <ThemeSelector />
        <FontSelector />
       <BaseLayout>
          <LandingPage />
          {/*<HaiveCommand />*/}
          </BaseLayout>   
       </FontProvider>
    </ThemeProvider>
  );
};

export default App;
