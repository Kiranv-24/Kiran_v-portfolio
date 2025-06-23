
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../data/portfolioConfig';

const AcademicSection = () => {
  const { academic } = portfolioConfig;

  return (
    <section id="academic" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="font-mono text-cyan-400 mb-4">
              class Education &#123;
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
              Academic Profile
            </h2>
          </div>
          
          <motion.div 
            className="bg-slate-900/30 border border-cyan-500/20 rounded-lg p-8 backdrop-blur-sm"
            whileHover={{ 
              borderColor: "rgba(6, 182, 212, 0.5)",
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Terminal-style header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 font-mono text-gray-400 text-sm">
                ~/academic-profile.edu
              </div>
            </div>

            <div className="font-mono space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-cyan-400 mb-2">degree:</div>
                  <div className="text-white text-lg pl-4">
                    <span className="text-green-400">"</span>
                    {academic.degree}
                    <span className="text-green-400">"</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-cyan-400 mb-2">cgpa:</div>
                  <div className="text-white text-lg pl-4">
                    <span className="text-yellow-400">{academic.cgpa}</span>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <div className="text-cyan-400 mb-2">focus:</div>
                <div className="text-gray-300 pl-4 leading-relaxed">
                  <span className="text-green-400">"</span>
                  {academic.note}
                  <span className="text-green-400">"</span>
                </div>
              </motion.div>

              {/* Achievement highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <div className="text-cyan-400 mb-4">achievements: [</div>
                <div className="pl-4 space-y-2">
                  <div className="text-gray-300">
                    <span className="text-green-400">"</span>Consistent academic performance<span className="text-green-400">",</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-green-400">"</span>Strong foundation in CS fundamentals<span className="text-green-400">",</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-green-400">"</span>Active in coding competitions<span className="text-green-400">"</span>
                  </div>
                </div>
                <div className="text-cyan-400 mt-2">]</div>
              </motion.div>
            </div>

            {/* Closing brace */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="font-mono text-cyan-400 mt-6"
            >
              &#125;
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicSection;
