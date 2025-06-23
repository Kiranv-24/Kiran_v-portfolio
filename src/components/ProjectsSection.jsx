
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
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-cyan-400 mb-4">
            &lt;section id="projects"&gt;
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            Featured Projects
          </h2>
          <div className="font-mono text-gray-400">
            // Recent development work
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm h-full hover:border-cyan-500/50 transition-all duration-300">
                {/* Project number */}
                <div className="font-mono text-cyan-400 text-sm mb-2">
                  project_{String(index + 1).padStart(2, '0')}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded text-sm font-mono border border-cyan-500/30"
                      whileHover={{ scale: 1.05 }}
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
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={16} />
                    source_code
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
                      live_demo
                    </motion.a>
                  )}
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 font-mono text-cyan-400"
        >
          &lt;/section&gt;
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
