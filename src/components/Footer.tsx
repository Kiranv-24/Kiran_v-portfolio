
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12 relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 border-glow"
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-glow">
              <span className="text-blue-400">{'<'}</span>
              {personal.name}
              <span className="text-blue-400">{' />'}</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Aspiring developer passionate about creating innovative solutions 
              through code and artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
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
                    className="text-gray-400 hover:text-blue-400 transition-colors hover:translate-x-2 block"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 border-glow"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 border-glow"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 border-glow"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-mono">
              © {currentYear} {personal.name}. Built with React & Tailwind CSS.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Made with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
