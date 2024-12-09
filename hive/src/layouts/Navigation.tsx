import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Navigation: React.FC = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-200
        ${isScrolled ? `
          ${theme.surfaces.elevated} 
          shadow-md
          border-b ${theme.border.color}
          backdrop-blur-md
        ` : ''}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className={`text-2xl font-bold ${theme.text.primary} tracking-wide`}
          >
            Haive
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Features', href: '#features' },
              { label: 'How it Works', href: '#how-it-works' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Documentation', href: '/docs' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`
                  text-sm font-medium
                  ${theme.text.secondary}
                  hover:${theme.text.primary}
                  transition-colors
                  py-2
                `}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/login"
              className={`
                px-5 py-2 rounded-lg
                text-sm font-medium
                ${theme.accent.DEFAULT}
                hover:${theme.states.hover}
                text-white
                shadow-md
                transition-all
              `}
            >
              Login
            </a>

            <a
              href="/signup"
              className={`
                px-5 py-2 rounded-lg
                text-sm font-medium
                ${theme.accent.DEFAULT}
                hover:${theme.states.hover}
                text-white
                shadow-md
                transition-all
              `}
            >
              Signup
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${theme.text.primary}`} />
            ) : (
              <Menu className={`w-6 h-6 ${theme.text.primary}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`
              md:hidden
              ${theme.surfaces.primary}
              border-t ${theme.border.color}
              shadow-md
            `}
          >
            <div className="px-6 py-4 space-y-4">
              {[
                { label: 'Features', href: '#features' },
                { label: 'How it Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Documentation', href: '/docs' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    block py-2 text-sm font-medium
                    ${theme.text.secondary}
                    hover:${theme.text.primary}
                    transition-colors
                  `}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/login"
                className={`
                  w-full px-4 py-2 rounded-lg
                  text-sm font-medium
                  ${theme.accent.DEFAULT}
                  hover:${theme.states.hover}
                  text-white
                  transition-all
                `}
              >
                Login
              </a>

              <a
                href="/signup"
                className={`
                  w-full px-4 py-2 rounded-lg
                  text-sm font-medium
                  ${theme.accent.DEFAULT}
                  hover:${theme.states.hover}
                  text-white
                  transition-all
                `}
              >
                Signup
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
