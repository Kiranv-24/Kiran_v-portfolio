
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioConfig';

const ProjectsSection = () => {
  const { projects } = portfolioConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      rotateY: 5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
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
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="text-yellow-400" size={32} />
            <div className="font-mono text-yellow-400 text-lg">
              &lt;section id="projects"&gt;
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono"
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
            Featured Projects
          </motion.h2>
          
          <motion.div 
            className="font-mono text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            // Building the future, one project at a time
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative perspective-1000"
            >
              <motion.div
                variants={hoverVariants}
                className="relative bg-black/60 border border-yellow-500/20 rounded-2xl p-8 backdrop-blur-sm h-full overflow-hidden preserve-3d"
                style={{
                  background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)"
                }}
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(255, 193, 7, 0.3), transparent)",
                    backgroundSize: "400% 400%"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Project number */}
                  <motion.div 
                    className="font-mono text-yellow-400 text-sm mb-4 flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    project_{String(index + 1).padStart(2, '0')}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 font-mono group-hover:text-yellow-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-mono border border-yellow-500/30 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: "0 0 20px rgba(255, 193, 7, 0.3)"
                        }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors font-mono text-sm group/link"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} className="group-hover/link:rotate-12 transition-transform" />
                      source_code
                    </motion.a>
                    
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors font-mono text-sm group/link"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} className="group-hover/link:rotate-12 transition-transform" />
                        live_demo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 5 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400/50 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        y: [0, -50],
                        x: [0, Math.random() * 100 - 50]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity
                      }}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: "80%"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 font-mono text-yellow-400 text-lg"
        >
          &lt;/section&gt;
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
