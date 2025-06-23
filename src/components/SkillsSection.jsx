
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../data/portfolioConfig';

const SkillsSection = () => {
  const { skills } = portfolioConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      rotateY: -90, 
      scale: 0.8,
      z: -100
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      z: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100, rotateY: -45 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      rotateY: 15,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(255, 193, 7, 0.3)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="font-mono text-yellow-400 mb-6 text-lg"
            whileHover={{ scale: 1.05 }}
          >
            const skills = &#123;
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              background: "linear-gradient(45deg, #ffffff, #ffc107, #ff8f00, #ffffff)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Technical Arsenal
          </motion.h2>
          
          <motion.div 
            className="font-mono text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            // Technologies that power my solutions
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Languages */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={hoverVariants}
            viewport={{ once: true }}
            className="group perspective-1000"
          >
            <motion.div 
              className="bg-black/60 border border-yellow-500/20 rounded-2xl p-8 backdrop-blur-sm h-full preserve-3d relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(255,193,7,0.05) 100%)"
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(255,193,7,0.1) 0%, transparent 70%)"
                }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-3xl font-bold text-yellow-400 mb-8 font-mono flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-2xl"
                  >
                    💻
                  </motion.span>
                  languages: [
                </motion.h3>
                
                <motion.div 
                  className="grid grid-cols-1 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skills.languages.map((lang, index) => (
                    <motion.div
                      key={index}
                      variants={skillVariants}
                      className="group/skill perspective-1000"
                    >
                      <motion.div
                        className="bg-black/40 border border-yellow-500/20 rounded-xl p-4 font-mono text-white hover:border-yellow-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                        whileHover={{ 
                          scale: 1.02,
                          rotateY: 5,
                          boxShadow: "0 10px 30px rgba(255, 193, 7, 0.2)",
                          borderColor: "rgba(255, 193, 7, 0.6)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-yellow-400">"</span>
                        <motion.span
                          className="relative z-10"
                          whileHover={{ color: "#ffc107" }}
                        >
                          {lang}
                        </motion.span>
                        <span className="text-yellow-400">",</span>
                        
                        {/* Hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Skill level indicator */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "85%" }}
                          transition={{ delay: index * 0.1, duration: 1 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <div className="font-mono text-yellow-400 mt-6 text-xl">]</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={hoverVariants}
            viewport={{ once: true }}
            className="group perspective-1000"
          >
            <motion.div 
              className="bg-black/60 border border-yellow-500/20 rounded-2xl p-8 backdrop-blur-sm h-full preserve-3d relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(255,193,7,0.05) 100%)"
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(255,193,7,0.1) 0%, transparent 70%)"
                }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-3xl font-bold text-yellow-400 mb-8 font-mono flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl"
                  >
                    🛠️
                  </motion.span>
                  tools: [
                </motion.h3>
                
                <motion.div 
                  className="grid grid-cols-1 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skills.tools.map((tool, index) => (
                    <motion.div
                      key={index}
                      variants={skillVariants}
                      className="group/skill perspective-1000"
                    >
                      <motion.div
                        className="bg-black/40 border border-yellow-500/20 rounded-xl p-4 font-mono text-white hover:border-yellow-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                        whileHover={{ 
                          scale: 1.02,
                          rotateY: -5,
                          boxShadow: "0 10px 30px rgba(255, 193, 7, 0.2)",
                          borderColor: "rgba(255, 193, 7, 0.6)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-yellow-400">"</span>
                        <motion.span
                          className="relative z-10"
                          whileHover={{ color: "#ffc107" }}
                        >
                          {tool}
                        </motion.span>
                        <span className="text-yellow-400">",</span>
                        
                        {/* Hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-l from-yellow-400/5 to-orange-500/5"
                          initial={{ x: "100%" }}
                          whileHover={{ x: "-100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Skill level indicator */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-400"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "80%" }}
                          transition={{ delay: index * 0.1, duration: 1 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <div className="font-mono text-yellow-400 mt-6 text-xl">]</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Closing brace */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16 font-mono text-yellow-400 text-xl"
        >
          &#125;;
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
