
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-800 border-t border-cyan-500/20 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 font-mono">
          <span className="text-cyan-400">©</span> 2024 Kiran V. 
          <span className="text-cyan-400 mx-2">|</span> 
          Built with React + Tailwind
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
