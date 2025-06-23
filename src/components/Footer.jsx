
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      className="bg-slate-900/50 border-t border-cyan-500/20 py-8 backdrop-blur-sm relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono text-gray-400 mb-4 md:mb-0">
            <span className="text-cyan-400">const</span> footer = &#123;
            <br />
            <span className="ml-4">year: <span className="text-yellow-400">2024</span>,</span>
            <br />
            <span className="ml-4">author: <span className="text-green-400">"Kiran V"</span>,</span>
            <br />
            <span className="ml-4">built_with: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Tailwind"</span>, <span className="text-green-400">"❤️"</span>]</span>
            <br />
            &#125;;
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-6 py-3 rounded font-mono hover:bg-cyan-500/20 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            return_to_top()
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
