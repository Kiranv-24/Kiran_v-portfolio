
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioConfig';

const ContactSection = () => {
  const { personal } = portfolioConfig;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (integrate with Formspree or similar)
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const contactLinks = [
    { 
      icon: Mail, 
      href: `mailto:${personal.email}`, 
      label: 'email.send()', 
      onClick: copyEmail,
      copyable: true 
    },
    { 
      icon: Github, 
      href: personal.github, 
      label: 'github.profile()',
      copyable: false 
    },
    { 
      icon: Linkedin, 
      href: personal.linkedin, 
      label: 'linkedin.connect()',
      copyable: false 
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-cyan-400 mb-4">
            function initContact() &#123;
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            Get In Touch
          </h2>
          <div className="font-mono text-gray-400">
            // Let's build something amazing together
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-slate-900/30 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyan-400 mb-8 font-mono">
                connect() &#123;
              </h3>
              
              {contactLinks.map((link, index) => (
                <motion.div
                  key={index}
                  className="mb-4 last:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 p-4 bg-slate-800/50 border border-cyan-500/20 rounded hover:border-cyan-500/50 transition-all duration-300 group">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-cyan-400 group-hover:text-cyan-300"
                    >
                      <link.icon size={24} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-mono group-hover:text-cyan-400 transition-colors block"
                      >
                        {link.label}
                      </a>
                    </div>

                    {link.copyable && (
                      <motion.button
                        onClick={copyEmail}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {emailCopied ? <Check size={20} /> : <Copy size={20} />}
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
              
              <div className="font-mono text-cyan-400 mt-6">&#125;</div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-900/30 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 font-mono text-gray-400 text-sm">
                  message-composer.js
                </div>
              </div>

              <h3 className="text-2xl font-bold text-cyan-400 mb-8 font-mono">
                sendMessage() &#123;
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="font-mono text-cyan-400 text-sm mb-2">const name =</div>
                  <input
                    type="text"
                    name="name"
                    placeholder="your_name_here"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-cyan-500/20 rounded p-4 text-white font-mono placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="font-mono text-cyan-400 text-sm mb-2">const email =</div>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-cyan-500/20 rounded p-4 text-white font-mono placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="font-mono text-cyan-400 text-sm mb-2">const message =</div>
                  <textarea
                    name="message"
                    placeholder="// Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-slate-800/50 border border-cyan-500/20 rounded p-4 text-white font-mono placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors resize-none"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 py-4 rounded font-mono font-semibold transition-colors"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(6, 182, 212, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    message.send()
                  </motion.button>
                </motion.div>
              </form>

              <div className="font-mono text-cyan-400 mt-6">&#125;</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 font-mono text-cyan-400"
        >
          &#125;
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
