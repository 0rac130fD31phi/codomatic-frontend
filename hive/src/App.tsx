import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { FontProvider } from './contexts/FontContext';
import { BaseLayout } from './layouts/BaseLayout';
import Dashboard from './pages/Dashboard';
import TeamManagement from './pages/TeamManagement';
import ProjectView from './pages/ProjectView';
import ProjectChat from './pages/ProjectChat';
import { LandingPage } from './pages/Landing/LandingPage3';

const App = () => {
  return (
    <ThemeProvider>
      <FontProvider>
        <Router>
          <BaseLayout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team-management" element={<TeamManagement />} />
              <Route path="/project-view" element={<ProjectView />} />
              <Route path="/project-chat" element={<ProjectChat />} />
            </Routes>
          </BaseLayout>
        </Router>
      </FontProvider>
    </ThemeProvider>
  );
};

export default App;
