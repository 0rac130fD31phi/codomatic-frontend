// components/landing/sections/FAQ.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFont } from '../../../contexts/FontContext';
import type { DesignTheme } from '../../../types/design_theme';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: keyof DesignTheme['text'];
}

export const FAQSection: React.FC = () => {
  const { theme } = useTheme();
  const { settings } = useFont();
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 'what-is',
      question: 'What is Haive?',
      answer: 'Haive is a platform that uses automated digital entities (AI agents) to build software, conduct research, and automate business operations. Our AI agents collaborate to turn your ideas into reality with minimal human intervention.',
      category: 'primary'
    },
    {
      id: 'how-works',
      question: 'How does Haive work?',
      answer: 'Simply describe what you want to build in natural language. Haive\'s AI agents will break down your goal into actionable steps, collaborate to execute them, and continuously improve the solution based on feedback.',
      category: 'success'
    },
    {
      id: 'experience',
      question: 'Do I need coding experience?',
      answer: 'No coding experience is required. Haive is designed for both technical and non-technical users. Our AI agents handle the technical implementation while you focus on your vision and goals.',
      category: 'accent'
    },
    {
      id: 'customization',
      question: 'Can I customize the AI agents?',
      answer: 'Yes, you can customize agent behaviors, set specific requirements, and create custom workflows. Advanced users can also integrate their own agents and tools through our API.',
      category: 'warning'
    },
    {
      id: 'security',
      question: 'How secure is my data?',
      answer: 'We implement enterprise-grade security measures including end-to-end encryption, secure data isolation, and compliance with major security standards. Your data and intellectual property are always protected.',
      category: 'success'
    },
    {
      id: 'pricing',
      question: 'How does pricing work?',
      answer: 'We offer flexible pricing tiers based on your needs. Start with our free tier to explore the platform, then upgrade to access more features, agents, and computing resources as your needs grow.',
      category: 'primary'
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 
          className={`text-4xl mb-6 ${theme.text.primary}`}
          style={{
            fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
            fontWeight: settings.heading.weight,
          }}
        >
          Frequently Asked Questions
        </h2>
        <p className={`text-xl max-w-2xl mx-auto ${theme.text.secondary}`}>
          Everything you need to know about Haive and automated digital entities.
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`
              rounded-xl overflow-hidden
              ${theme.surfaces.secondary}
              border ${theme.border.color}
              hover:${theme.states.hover}
              transition-all duration-200
            `}
          >
            <button
              onClick={() => handleToggle(faq.id)}
              className={`
                w-full px-6 py-4 text-left
                flex items-center justify-between
                ${theme.surfaces.interactive}
              `}
            >
              <span 
                className={`text-lg ${theme.text[faq.category]}`}
                style={{
                  fontFamily: `${settings.heading.font.name}, ${settings.heading.font.fallback}`,
                  fontWeight: settings.heading.weight,
                }}
              >
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openId === faq.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className={theme.text.tertiary} />
              </motion.div>
            </button>

            <AnimatePresence>
              {openId === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 py-4">
                    <p className={theme.text.secondary}>
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Support CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`
          mt-12 p-6 rounded-xl text-center
          ${theme.surfaces.interactive}
          border ${theme.border.color}
        `}
      >
        <p className={`mb-4 ${theme.text.secondary}`}>
          Still have questions?
        </p>
        <button
          className={`
            inline-flex items-center gap-2 px-6 py-3 rounded-lg
            ${theme.accent.DEFAULT}
            hover:${theme.states.hover}
            transition-colors
          `}
        >
          <MessageCircle className="w-5 h-5" />
          <span>Contact Support</span>
        </button>
      </motion.div>
    </div>
  );
};