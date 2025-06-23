
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalNav = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.pageYOffset;
      setScrollProgress((currentProgress / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadSource = () => {
    // Create a link to download source code
    const link = document.createElement('a');
    link.href = 'https://github.com/yourusername/portfolio/archive/refs/heads/main.zip';
    link.download = 'portfolio-source.zip';
    link.click();
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm border-b border-cyan-500/20 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-cyan-400 font-mono text-lg"
            whileHover={{ scale: 1.05 }}
          >
            ~/kiran-dev
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
            {['about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                ./{item}
              </button>
            ))}
            <button
              onClick={downloadSource}
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 border border-cyan-500/30 px-3 py-1 rounded"
            >
              download src
            </button>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-800 mt-2">
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

export default TerminalNav;
