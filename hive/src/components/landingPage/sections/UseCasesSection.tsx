import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFont } from '../../../contexts/FontContext';

export const UseCasesSection: React.FC = () => {
  const { theme } = useTheme();
  const { settings } = useFont();

  const cases = [
    {
      title: 'Software Development',
      description: 'Build and deploy applications faster than ever with AI-powered development teams.',
      metrics: {
        'Dev Time': '-70%',
        'Code Quality': '95%',
        'Cost Savings': '60%'
      }
    },
    {
      title: 'Research & Analysis',
      description: 'Process vast amounts of data and generate actionable insights automatically.',
      metrics: {
        'Data Processed': '10TB+',
        'Accuracy': '99.9%',
        'Time Saved': '85%'
      }
    },
    {
      title: 'Business Operations',
      description: 'Automate complex workflows and optimize business processes with intelligent agents.',
      metrics: {
        'Efficiency': '+80%',
        'Error Rate': '-95%',
        'ROI': '300%'
      }
    }
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 
          className={`text-4xl mb-6 ${theme.text.primary}`}
          style={{
            fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
            fontWeight: settings.heading.weight,
          }}
        >
          Transform Any Industry
        </h2>
        <p className={`text-xl max-w-2xl mx-auto ${theme.text.secondary}`}>
          See how Haive is revolutionizing different sectors with AI-powered automation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((useCase, idx) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className={`
              p-6 rounded-xl
              ${theme.surfaces.secondary}
              border ${theme.border.color}
              hover:${theme.states.hover}
              transition-all duration-200
            `}
          >
            <h3 
              className={`text-xl mb-4 ${theme.text.primary}`}
              style={{
                fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
                fontWeight: settings.heading.weight,
              }}
            >
              {useCase.title}
            </h3>
            <p className={`${theme.text.secondary} mb-6`}>
              {useCase.description}
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(useCase.metrics).map(([key, value]) => (
                <div 
                  key={key}
                  className={`
                    p-3 rounded-lg
                    ${theme.surfaces.interactive}
                    text-center
                  `}
                >
                  <div className={`text-lg font-bold ${theme.text.accent}`}>
                    {value}
                  </div>
                  <div className={`text-xs ${theme.text.tertiary}`}>
                    {key}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
