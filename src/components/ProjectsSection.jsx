
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioConfig';

const ProjectsSection = () => {
  const { projects } = portfolioConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-cyan-400">{'{'}</span> projects <span className="text-cyan-400">{'}'}</span>
          </h2>
          <p className="text-gray-400 font-mono">// Recent development work</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-gray-900 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px rgba(6, 182, 212, 0.1)"
              }}
            >
              <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded text-sm font-mono border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github size={16} />
                  code
                </motion.a>
                
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={16} />
                    demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
