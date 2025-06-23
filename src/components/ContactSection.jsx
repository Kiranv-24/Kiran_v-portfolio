
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioConfig';

const ContactSection = () => {
  const { personal } = portfolioConfig;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const contactLinks = [
    { icon: Mail, href: `mailto:${personal.email}`, label: 'email' },
    { icon: Github, href: personal.github, label: 'github' },
    { icon: Linkedin, href: personal.linkedin, label: 'linkedin' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-cyan-400">{'('}</span> contact <span className="text-cyan-400">{')'}</span>
          </h2>
          <p className="text-gray-400 font-mono">// Let's connect</p>
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
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 font-mono">reach_out():</h3>
            
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800 border border-cyan-500/20 rounded hover:border-cyan-500/50 transition-all duration-300 group"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <link.icon className="text-cyan-400 group-hover:text-cyan-300" size={24} />
                <span className="text-white font-mono group-hover:text-cyan-400 transition-colors">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 font-mono">send_message():</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-cyan-500/20 rounded p-4 text-white font-mono placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-cyan-500/20 rounded p-4 text-white font-mono placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-800 border border-cyan-500/20 rounded p-4 text-white font-mono placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 py-4 rounded font-mono font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                execute_send()
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
