// src/components/layout/Layout.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useFont } from '@/context/FontContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();
  const { currentFont } = useFont();

  return (
    <div className={`
      min-h-screen flex flex-col
      ${theme.bgPrimary}
      ${theme.textPrimary}
      ${currentFont.sans}
    `}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// src/components/landing/HeroSection.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { Terminal, Braces, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { theme, isGradientEnabled } = useTheme();

  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className={`
          absolute inset-0 
          ${isGradientEnabled && theme.gradient?.enabled 
            ? `bg-gradient-to-r ${theme.gradient.from} ${theme.gradient.to} opacity-5`
            : ''
          }
        `} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className={`
            text-4xl md:text-6xl font-bold mb-6
            ${isGradientEnabled && theme.gradient?.enabled 
              ? `bg-gradient-to-r ${theme.gradient.from} ${theme.gradient.to} text-transparent bg-clip-text`
              : theme.textPrimary
            }
          `}>
            Build Better Software
            <br />
            With AI-Powered IDE
          </h1>
          
          <p className={`text-xl mb-12 ${theme.textSecondary}`}>
            Experience the next generation of coding with integrated AI assistance,
            real-time collaboration, and powerful developer tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                px-8 py-4 rounded-lg font-medium
                ${isGradientEnabled && theme.gradient?.enabled 
                  ? `bg-gradient-to-r ${theme.gradient.from} ${theme.gradient.to} text-black`
                  : `${theme.accent} bg-white/10`
                }
                hover:shadow-lg transition-all duration-200
              `}
            >
              Try For Free
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                px-8 py-4 rounded-lg font-medium
                border border-white/10
                hover:bg-white/5 transition-all duration-200
              `}
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Feature Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <div className={`
            relative rounded-xl overflow-hidden
            ${theme.surfaces.secondary} border ${theme.border}
          `}>
            {/* Editor Preview */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              
              <pre className={`
                font-mono text-sm p-4 rounded-lg
                ${theme.surfaces.primary}
              `}>
                <code className={theme.textPrimary}>
                  {`function generateComponent() {
  const ai = new AIAssistant();
  const suggestions = await ai.suggest();
  
  return suggestions.map(idea => 
    <Component key={idea.id}>
      {idea.content}
    </Component>
  );
}`}
                </code>
              </pre>
            </div>

            {/* Feature Highlights */}
            <div className={`
              absolute bottom-0 left-0 right-0
              backdrop-blur-xl bg-black/30
              p-6 border-t ${theme.border}
            `}>
              <div className="flex justify-around">
                <FeatureHighlight 
                  icon={<Terminal size={20} />}
                  text="Smart Completions"
                />
                <FeatureHighlight 
                  icon={<Braces size={20} />}
                  text="AI Suggestions"
                />
                <FeatureHighlight 
                  icon={<Sparkles size={20} />}
                  text="Real-time Collab"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureHighlight: React.FC<{
  icon: React.ReactNode;
  text: string;
}> = ({ icon, text }) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <div className={`p-2 rounded-lg ${theme.surfaces.primary}`}>
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </div>
  );
};