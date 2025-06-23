
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.pageYOffset;
      setScrollProgress((currentProgress / totalScroll) * 100);

      // Update active section
      const sections = ['hero', 'projects', 'skills', 'academic', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'home()' },
    { id: 'projects', label: 'projects[]' },
    { id: 'skills', label: 'skills{}' },
    { id: 'academic', label: 'education' },
    { id: 'contact', label: 'contact()' }
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-cyan-400 font-mono text-lg font-bold"
            whileHover={{ scale: 1.05 }}
          >
            &lt;KiranDev /&gt;
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-1 bg-slate-800 mt-2">
          <motion.div 
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
