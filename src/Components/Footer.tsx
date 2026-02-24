// components/Footer.tsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com', icon: '𝕏' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
    { name: 'GitHub', href: 'https://github.com', icon: 'GH' },
  ];

  const mainLinks = [
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ];

  return (
    <footer className="w-full bg-[#0f1728] border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section - Logo & Social */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
            <span className="text-xl font-bold text-white">YourBrand</span>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-sm font-semibold text-white transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="border-t border-gray-800 pt-8">
          <nav className="mb-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section - Legal & Copyright */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-400">
            <div>
              <p>© {currentYear} YourBrand. All rights reserved.</p>
            </div>

            <ul className="flex gap-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-gray-300 hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div >
      </div >
    </footer >
  );
};

export default Footer;