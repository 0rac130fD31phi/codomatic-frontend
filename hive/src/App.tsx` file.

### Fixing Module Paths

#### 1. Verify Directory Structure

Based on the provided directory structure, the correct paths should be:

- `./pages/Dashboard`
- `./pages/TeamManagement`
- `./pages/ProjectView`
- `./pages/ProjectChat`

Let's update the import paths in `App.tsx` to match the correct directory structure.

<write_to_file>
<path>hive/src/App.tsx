import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage3 from './pages/Landing/LandingPage3';
import Dashboard from './pages/Dashboard';
import TeamManagement from './pages/TeamManagement';
import ProjectView from './pages/ProjectView';
import ProjectChat from './pages/ProjectChat';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage3 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teams/:teamId" element={<TeamManagement />} />
        <Route path="/projects/:projectId" element={<ProjectView />} />
        <Route path="/chat/:projectId" element={<ProjectChat />} />
      </Routes>
    </Router>
  );
};

export default App;
