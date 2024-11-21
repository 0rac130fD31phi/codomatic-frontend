import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useFont } from '../contexts/FontContext';
import { Github, Twitter, ExternalLink } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const { settings } = useFont();

  // Define styles using font settings with safe fallbacks
  const headingStyle = {
    fontFamily: `${settings.heading.font.name || 'sans-serif'}, ${settings.heading.font.fallback || 'sans-serif'}`,
    fontWeight: settings.heading.weight || '600',
  };

  const textStyle = {
    fontFamily: `${settings.primary.font.name || 'sans-serif'}, ${settings.primary.font.fallback || 'sans-serif'}`,
    fontWeight: settings.primary.weight || '400',
  };

  const sections: FooterSection[] = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Documentation', href: '/docs', external: true },
        { label: 'API Reference', href: '/api', external: true },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Community', href: '/community' },
        { label: 'Marketplace', href: '/marketplace' },
        { label: 'GitHub', href: 'https://github.com/haive', external: true },
        { label: 'Status', href: '/status' },
      ],
    },
  ];

  return (
    <footer className={`border-t ${theme.border.color}`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4">
            <h3 className={`text-xl ${theme.text.primary} mb-4`} style={headingStyle}>
              Haive
            </h3>
            <p className={`${theme.text.secondary} mb-6`} style={textStyle}>
              The future of creation with automated digital entities.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: 'https://github.com/haive' },
                { icon: Twitter, href: 'https://twitter.com/haive' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2 rounded-lg
                    ${theme.surfaces.interactive}
                    hover:${theme.states.hover}
                    transition-colors
                  `}
                >
                  <social.icon className={`w-5 h-5 ${theme.text.secondary}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {sections.map((section) => (
            <div key={section.title} className="col-span-2 md:col-span-2">
              <h4
                className={`text-sm font-semibold ${theme.text.primary} mb-4`}
                style={headingStyle}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className={`
                        text-sm ${theme.text.secondary}
                        hover:${theme.text.primary}
                        transition-colors
                        flex items-center gap-1
                      `}
                      style={textStyle}
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink className="w-3 h-3" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 mt-8 border-t ${theme.border.color} flex flex-col md:flex-row justify-between items-center gap-4`}
        >
          <div className={`text-sm ${theme.text.secondary}`} style={textStyle}>
            © {new Date().getFullYear()} Haive. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Cookies', href: '/cookies' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`
                  text-sm ${theme.text.secondary}
                  hover:${theme.text.primary}
                  transition-colors
                `}
                style={textStyle}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
