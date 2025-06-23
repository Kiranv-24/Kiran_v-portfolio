
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Kiran V
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Contact
            </button>
          </div>

          <Button
            onClick={toggleDarkMode}
            variant="outline"
            size="sm"
            className="ml-4"
          >
            {darkMode ? '☀️' : '🌙'}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
