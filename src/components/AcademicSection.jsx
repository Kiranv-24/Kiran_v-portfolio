
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../data/portfolioConfig';

const AcademicSection = () => {
  const { academic } = portfolioConfig;

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-mono text-center">
            <span className="text-cyan-400">{'['}</span> academic <span className="text-cyan-400">{']'}</span>
          </h2>
          
          <div className="bg-gray-900 border border-cyan-500/20 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">degree:</h3>
                <p className="text-white text-lg">{academic.degree}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">cgpa:</h3>
                <p className="text-white text-lg">{academic.cgpa}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">focus:</h3>
              <p className="text-gray-300">{academic.note}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicSection;
