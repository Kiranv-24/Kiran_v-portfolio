
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              {personal.name}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Aspiring developer passionate about creating innovative solutions 
              through code and artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['Projects', 'Skills', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} {personal.name}. Built with React & Tailwind CSS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
