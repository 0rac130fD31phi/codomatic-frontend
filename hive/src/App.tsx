import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard';
import { LandingPage } from './pages/Landing/LandingPage3';
import ErrorBoundary from './components/ErrorBoundary';
import { ProtectedRoute } from './components/shared/ProtectedRoute';
import { ThemeProvider } from './contexts/ThemeContext';
import { FontProvider } from './contexts/FontContext';
import { BaseLayout } from './layouts/BaseLayout';
const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <FontProvider>
          <ErrorBoundary>
            <Router>
              <Routes>
                <Route path="/" element={
                  <BaseLayout>
                    <LandingPage />
                  </BaseLayout>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </ErrorBoundary>
        </FontProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
