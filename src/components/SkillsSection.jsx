
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
    hidden: { opacity: 0, rotateY: -90, scale: 0.8 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-cyan-400 mb-4">
            const skills = &#123;
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            Technical Arsenal
          </h2>
          <div className="font-mono text-gray-400">
            // Technologies I work with
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/30 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
              languages: [
            </h3>
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
                  className="group"
                >
                  <motion.div
                    className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-4 font-mono text-white hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-cyan-400">"</span>
                    {lang}
                    <span className="text-cyan-400">",</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <div className="font-mono text-cyan-400 mt-4">]</div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/30 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
              tools: [
            </h3>
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
                  className="group"
                >
                  <motion.div
                    className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-4 font-mono text-white hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: -5,
                      boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-cyan-400">"</span>
                    {tool}
                    <span className="text-cyan-400">",</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <div className="font-mono text-cyan-400 mt-4">]</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 font-mono text-cyan-400"
        >
          &#125;;
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
