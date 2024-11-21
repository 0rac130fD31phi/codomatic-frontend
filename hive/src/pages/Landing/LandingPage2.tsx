import React, { useState } from "react";
import { ArrowRight, Bot, Terminal, Code, Settings } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useFont } from "../../contexts/FontContext";
import { themes } from "../../design/theme_data";

const LandingPage: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { settings, updateSettings, fonts } = useFont(); // Access fonts properly
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const features = [
    {
      icon: <Bot className="w-12 h-12 text-teal-400" />,
      title: "No-Code Orchestration",
      description: "Deploy AI systems without technical barriers.",
    },
    {
      icon: <Terminal className="w-12 h-12 text-teal-400" />,
      title: "Autonomous Scaling",
      description: "Let your ideas evolve and scale independently.",
    },
    {
      icon: <Code className="w-12 h-12 text-teal-400" />,
      title: "Parallel Execution",
      description: "Run multiple AI agents for faster innovation.",
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${theme.bgPrimary}`}>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 border-b ${theme.border.color} backdrop-blur-lg bg-opacity-80`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className={`text-xl font-bold ${theme.text.primary}`}>Haive</div>
          <div className="flex items-center gap-6">
            <a href="#" className={theme.text.secondary}>
              Docs
            </a>
            <a href="#" className={theme.text.secondary}>
              Blog
            </a>
            <button
              className={`px-4 py-2 rounded-lg ${theme.accent.DEFAULT} hover:${theme.states.hover} transition-colors`}
            >
              Try Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Theme & Font Selector Sidebar */}
      <div className="fixed top-20 right-6 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
        >
          <Settings className="text-white" />
        </button>
        {isSidebarOpen && (
          <div
            className={`p-4 bg-gray-900 text-white rounded-lg shadow-lg border ${theme.border.color}`}
          >
            <h3 className="text-lg font-semibold mb-3">Theme Selector</h3>
            <div className="space-y-2">
              {Object.values(themes).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`
                    w-full text-left px-4 py-2 rounded-lg 
                    ${theme.id === t.id ? t.accent.DEFAULT : t.surfaces.interactive}
                    hover:${t.states.hover} transition-colors
                  `}
                >
                  {t.name}
                </button>
              ))}
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-3">Font Selector</h3>
            <div className="space-y-2">
              {Object.keys(fonts).map((fontKey) => (
                <button
                  key={fontKey}
                  onClick={() =>
                    updateSettings({
                      heading: {
                        font: fonts[fontKey][0], // Access the correct font object
                        weight: "600",
                        style: "normal",
                      },
                    })
                  }
                  className="w-full text-left px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700"
                >
                  {fonts[fontKey][0].name} {/* Display font name */}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 ${theme.text.primary}`}
              style={{
                fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
                fontWeight: settings.heading.weight,
              }}
            >
              Autonomous Digital <span className="text-teal-400">Entities</span>
            </h1>
            <p className={`text-lg md:text-xl text-gray-300 mb-8`}>
              Build, deploy, and scale AI-driven systems without writing code.
            </p>
            <div className="flex gap-4">
              <button
                className={`px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-black rounded-lg hover:scale-105`}
              >
                Try Demo
              </button>
              <button className="px-6 py-3 bg-gray-800 text-white rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-white font-bold mb-12 text-center">
            Why Choose Haive?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all`}
              >
                <div>{feature.icon}</div>
                <h3 className="text-xl text-white font-bold mt-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${theme.border.color}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className={theme.text.secondary}>
            © 2024 Haive. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className={theme.text.secondary}>
              Twitter
            </a>
            <a href="#" className={theme.text.secondary}>
              GitHub
            </a>
            <a href="#" className={theme.text.secondary}>
              Discord
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
