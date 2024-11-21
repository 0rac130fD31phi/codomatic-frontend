import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useFont } from '../../contexts/FontContext';
import { ArrowRight } from 'lucide-react';

export const LandingPage = () => {
  const { theme } = useTheme();
  const { settings } = useFont();
  console.log('Theme:', theme);
  console.log('Font Settings:', settings);
  return (
    <div className={`min-h-screen flex flex-col ${theme.bgPrimary}`}>
      {/* Navbar */}
      <nav className={`border-b ${theme.border.color} backdrop-blur-lg bg-opacity-80`}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className={`text-xl font-bold ${theme.text.primary}`}>
            DevIDE
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className={theme.text.secondary}>Docs</a>
            <a href="#" className={theme.text.secondary}>Blog</a>
            <button
              className={`px-4 py-2 rounded-lg ${theme.accent.DEFAULT} hover:${theme.states.hover} transition-colors`}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            {/* Hero Title */}
            <h1
              className={`text-4xl md:text-6xl font-bold mb-6 ${theme.text.primary}`}
              style={{
                fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
                fontWeight: settings.heading.weight,
              }}
            >
              Build better software with AI assistance
            </h1>

            {/* Hero Subtitle */}
            <p className={`text-xl mb-8 ${theme.text.secondary}`}>
              Experience the next generation of development with integrated AI, 
              real-time collaboration, and powerful developer tools.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex items-center gap-4">
              <button
                className={`px-6 py-3 rounded-lg ${theme.accent.DEFAULT} hover:${theme.states.hover} transition-colors flex items-center gap-2`}
              >
                Start Coding <ArrowRight size={16} />
              </button>
              <button
                className={`px-6 py-3 rounded-lg ${theme.surfaces.interactive} hover:${theme.states.hover} transition-colors ${theme.text.primary}`}
              >
                View Demo
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-16">
              <FeatureCard
                title="AI Assistance"
                description="Get intelligent code suggestions and autocompletions as you type."
              />
              <FeatureCard
                title="Real-time Collaboration"
                description="Code together with your team in real-time with built-in chat."
              />
              <FeatureCard
                title="Cloud Development"
                description="Develop directly in the cloud with zero setup required."
              />
              <FeatureCard
                title="Instant Deployment"
                description="Deploy your applications with a single click."
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-8 border-t ${theme.border.color}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className={theme.text.secondary}>
            © 2024 DevIDE. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className={theme.text.secondary}>Twitter</a>
            <a href="#" className={theme.text.secondary}>GitHub</a>
            <a href="#" className={theme.text.secondary}>Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`
        p-6 rounded-lg
        ${theme.surfaces.secondary}
        border ${theme.border.color}
        hover:${theme.states.hover}
        transition-all duration-200
      `}
    >
      <h3 className={`text-lg font-semibold mb-2 ${theme.text.primary}`}>
        {title}
      </h3>
      <p className={theme.text.secondary}>{description}</p>
    </div>
  );
};

export default LandingPage;