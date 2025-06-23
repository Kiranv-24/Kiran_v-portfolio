
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../data/portfolioConfig';

const TypeWriter = ({ text, delay = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const HeroSection = () => {
  const { personal } = portfolioConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
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

  const codeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix-style grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 h-full">
          {Array.from({ length: 400 }, (_, i) => (
            <motion.div 
              key={i} 
              className="border border-cyan-500/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.01 
              }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Code-style name declaration */}
        <motion.div 
          variants={codeVariants}
          className="mb-8 bg-slate-900/50 border border-cyan-500/30 rounded-lg p-6 font-mono text-left max-w-2xl mx-auto"
        >
          <div className="text-gray-500 text-sm mb-2">// Developer Profile</div>
          <div className="text-cyan-400">const</div>
          <div className="text-white inline"> developer = () =&gt; &#123;</div>
          <div className="ml-4 text-white">name: <span className="text-green-400">"{personal.name}"</span>,</div>
          <div className="ml-4 text-white">role: <span className="text-green-400">"Software Developer"</span>,</div>
          <div className="ml-4 text-white">passion: <span className="text-green-400">"AI & Web Development"</span></div>
          <div className="text-white">&#125;;</div>
        </motion.div>

        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.img 
            src={personal.profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto border-4 border-cyan-500/50 shadow-2xl"
            whileHover={{ 
              scale: 1.1, 
              rotateY: 15,
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Animated tagline */}
        <motion.div 
          variants={itemVariants}
          className="text-xl md:text-2xl text-cyan-400 mb-8 font-mono h-8"
        >
          <TypeWriter text={personal.tagline} delay={100} />
        </motion.div>

        {/* About section */}
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="bg-slate-900/30 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm"
          >
            <div className="text-gray-500 font-mono text-sm mb-2">/* About Me */</div>
            <p className="text-lg text-gray-300 leading-relaxed">
              {personal.about}
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 py-3 rounded font-mono font-semibold transition-all duration-200 shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 25px rgba(6, 182, 212, 0.5)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            contact.execute()
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded font-mono transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            projects.view()
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
