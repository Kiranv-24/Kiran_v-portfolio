
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
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
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <GraduationCap className="text-yellow-400" size={32} />
              <div className="font-mono text-yellow-400 text-lg">
                class Education &#123;
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-bold text-white mb-4 font-mono"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                background: "linear-gradient(45deg, #ffffff, #ffc107, #ffffff)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Academic Excellence
            </motion.h2>
          </div>
          
          {/* Main Academic Card */}
          <motion.div 
            className="relative group perspective-1000"
            initial={{ opacity: 0, y: 100, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ 
              rotateY: 2,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-3xl p-1"
              style={{
                background: "conic-gradient(from 0deg, #ffc107, #ff8f00, #ffc107, #ffeb3b, #ffc107)"
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full bg-black rounded-3xl"></div>
            </motion.div>
            
            {/* Card Content */}
            <div className="relative bg-black/80 border border-yellow-500/30 rounded-3xl p-10 backdrop-blur-sm overflow-hidden">
              {/* Terminal-style header */}
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="w-4 h-4 rounded-full bg-red-500"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="w-4 h-4 rounded-full bg-yellow-500"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div 
                  className="w-4 h-4 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                />
                <div className="ml-4 font-mono text-gray-400 text-sm">
                  ~/academic-profile.edu
                </div>
              </div>

              <div className="font-mono space-y-8">
                {/* Main Academic Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Degree */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="group/item"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="text-yellow-400" size={24} />
                      <div className="text-yellow-400 text-lg">degree:</div>
                    </div>
                    <motion.div 
                      className="text-white text-xl pl-4 group-hover/item:text-yellow-400 transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-green-400">"</span>
                      {academic.degree}
                      <span className="text-green-400">"</span>
                    </motion.div>
                  </motion.div>
                  
                  {/* CGPA */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="group/item"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="text-yellow-400" size={24} />
                      <div className="text-yellow-400 text-lg">cgpa:</div>
                    </div>
                    <motion.div 
                      className="text-white text-xl pl-4 group-hover/item:text-yellow-400 transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      <motion.span 
                        className="text-yellow-400 font-bold"
                        animate={{ 
                          textShadow: [
                            "0 0 0px rgba(255, 193, 7, 0)",
                            "0 0 20px rgba(255, 193, 7, 0.8)",
                            "0 0 0px rgba(255, 193, 7, 0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {academic.cgpa}
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Focus Note */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="group/focus"
                >
                  <div className="text-yellow-400 mb-4 text-lg">focus:</div>
                  <motion.div 
                    className="text-gray-300 pl-4 leading-relaxed text-lg group-hover/focus:text-white transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-green-400">"</span>
                    {academic.note}
                    <span className="text-green-400">"</span>
                  </motion.div>
                </motion.div>

                {/* Achievement highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="text-yellow-400 mb-6 text-lg">achievements: [</div>
                  <div className="pl-4 space-y-3">
                    {[
                      "Consistent academic performance with high CGPA",
                      "Strong foundation in Computer Science fundamentals",
                      "Active participation in coding competitions",
                      "Hands-on experience with real-world projects"
                    ].map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="text-gray-300 group/achievement cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        whileHover={{ 
                          x: 10,
                          color: "#ffffff",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <span className="text-green-400">"</span>
                        {achievement}
                        <span className="text-green-400">"{index < 3 ? ',' : ''}</span>
                        
                        {/* Hover indicator */}
                        <motion.div
                          className="w-2 h-2 bg-yellow-400 rounded-full inline-block ml-2 opacity-0 group-hover/achievement:opacity-100"
                          animate={{ scale: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-yellow-400 mt-4 text-lg">]</div>
                </motion.div>
              </div>

              {/* Background animated elements */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1], 
                  rotate: [0, 180, 360],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1], 
                  rotate: [360, 180, 0],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Closing brace */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            className="text-center mt-12 font-mono text-yellow-400 text-xl"
          >
            &#125;
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicSection;
