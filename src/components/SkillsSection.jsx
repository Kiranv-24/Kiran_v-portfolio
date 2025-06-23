
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
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-cyan-400">{'<'}</span> skills <span className="text-cyan-400">{'/>'}</span>
          </h2>
          <p className="text-gray-400 font-mono">// Technical expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">languages:</h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.languages.map((lang, index) => (
                <motion.div
                  key={index}
                  variants={skillVariants}
                  className="bg-gray-800 border border-cyan-500/20 rounded p-4 text-center hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 5px 15px rgba(6, 182, 212, 0.1)"
                  }}
                >
                  <span className="text-white font-mono">{lang}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">tools:</h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.tools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={skillVariants}
                  className="bg-gray-800 border border-cyan-500/20 rounded p-4 text-center hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 5px 15px rgba(6, 182, 212, 0.1)"
                  }}
                >
                  <span className="text-white font-mono">{tool}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
