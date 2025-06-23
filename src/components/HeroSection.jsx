
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../data/portfolioConfig';

const HeroSection = () => {
  const { personal } = portfolioConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Terminal grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 144 }, (_, i) => (
            <div key={i} className="border border-cyan-500/20" />
          ))}
        </div>
      </div>

      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <img 
            src={personal.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-cyan-500/30 mb-6"
          />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-4 font-mono"
        >
          {personal.name}
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="text-xl md:text-2xl text-cyan-400 mb-8 font-mono"
        >
          <span className="text-gray-500">{">"}</span> {personal.tagline}
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
        >
          {personal.about}
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-8 py-3 rounded font-mono font-semibold transition-all duration-200"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            ./contact
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded font-mono transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ./projects
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
