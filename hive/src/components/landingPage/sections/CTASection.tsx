import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFont } from '../../../contexts/FontContext';

export const CTASection: React.FC = () => {
  const { theme } = useTheme();
  const { settings } = useFont();

  return (
    <div
      className="py-20 text-center"
      style={{
        background: theme.bgPrimary,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 
          className={`text-4xl mb-6 text-white`}
          style={{
            fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
            fontWeight: settings.heading.weight,
          }}
        >
          Ready to Transform Your Business?
        </h2>
        <p className={`text-xl mb-8 text-white`}>
          Join thousands of businesses using AI to innovate and grow. Start your journey with us today.
        </p>
        <button
          className={`
            px-8 py-4 rounded-full
            bg-white text-blue-600
            hover:bg-blue-100
            transition-all duration-200
          `}
        >
          Get Started
        </button>
      </motion.div>
    </div>
  );
};
