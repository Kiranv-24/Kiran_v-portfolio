
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../data/portfolioConfig';

const TypeWriter = ({ text, delay = 50, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [currentIndex, text, delay, onComplete, isComplete]);

  return (
    <span>
      {displayText}
      <motion.span
        className="text-yellow-400"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        |
      </motion.span>
    </span>
  );
};

const HeroSection = () => {
  const { personal } = portfolioConfig;
  const [showAbout, setShowAbout] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Code-style name declaration */}
        <motion.div 
          variants={itemVariants}
          className="mb-12 bg-black/60 border border-yellow-500/30 rounded-2xl p-8 font-mono text-left max-w-4xl mx-auto backdrop-blur-sm"
          whileHover={{ 
            boxShadow: "0 0 50px rgba(255, 193, 7, 0.2)",
            borderColor: "rgba(255, 193, 7, 0.5)"
          }}
        >
          <div className="text-gray-500 text-sm mb-4">// Welcome to my digital space</div>
          <div className="text-yellow-400 text-lg">const</div>
          <div className="text-white inline text-lg"> developer = () =&gt; &#123;</div>
          <div className="ml-6 text-white text-lg">name: <span className="text-green-400">"{personal.name}"</span>,</div>
          <div className="ml-6 text-white text-lg">role: <span className="text-green-400">"Software Developer"</span>,</div>
          <div className="ml-6 text-white text-lg">passion: <span className="text-green-400">"AI & Web Development"</span>,</div>
          <div className="ml-6 text-white text-lg">status: <span className="text-green-400">"Available for opportunities"</span></div>
          <div className="text-white text-lg">&#125;;</div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </motion.div>

        {/* Profile Image with enhanced effects */}
        <motion.div 
          variants={itemVariants} 
          className="mb-12"
          whileHover="animate"
        >
          <motion.div
            className="relative inline-block"
            variants={floatingVariants}
          >
            <div className="w-48 h-48 rounded-full mx-auto border-4 border-yellow-400/50 shadow-2xl relative overflow-hidden bg-gradient-to-br from-yellow-400/20 to-orange-500/20 backdrop-blur-sm">
              <img 
                src={personal.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Rotating border */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent"
              style={{
                background: "conic-gradient(from 0deg, transparent, #ffc107, transparent)",
                WebkitMask: "radial-gradient(circle, transparent 88px, black 92px)",
                mask: "radial-gradient(circle, transparent 88px, black 92px)"
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl scale-110 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </motion.div>

        {/* Animated tagline */}
        <motion.div 
          variants={itemVariants}
          className="text-2xl md:text-3xl text-white mb-12 font-mono h-12 flex items-center justify-center"
        >
          <TypeWriter 
            text={personal.tagline} 
            delay={80} 
            onComplete={() => setShowAbout(true)}
          />
        </motion.div>

        {/* About section with reveal animation */}
        {showAbout && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto mb-12"
            onAnimationComplete={() => setShowButtons(true)}
          >
            <motion.div
              className="bg-black/40 border border-yellow-500/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
              whileHover={{ 
                borderColor: "rgba(255, 193, 7, 0.4)",
                boxShadow: "0 0 30px rgba(255, 193, 7, 0.1)" 
              }}
            >
              <div className="text-gray-500 font-mono text-sm mb-4">/* About Me */</div>
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {personal.about}
              </motion.p>
              
              {/* Subtle animated background */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-full"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        )}

        {/* CTA Buttons with stagger animation */}
        {showButtons && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-mono font-semibold transition-all duration-300 overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 193, 7, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">contact.execute()</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            
            <motion.button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="group relative border-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 px-8 py-4 rounded-xl font-mono transition-all duration-300 overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(255, 193, 7, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">projects.explore()</span>
              <motion.div
                className="absolute inset-0 bg-yellow-400/5"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;
