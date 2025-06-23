
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioConfig';

const ContactSection = () => {
  const { personal } = portfolioConfig;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      action: copyEmail,
      color: "from-red-400 to-red-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Profile",
      action: () => window.open(personal.github, '_blank'),
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect",
      action: () => window.open(personal.linkedin, '_blank'),
      color: "from-blue-400 to-blue-600"
    }
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative">
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
            <Send className="text-yellow-400" size={32} />
            <div className="font-mono text-yellow-400 text-lg">
              &lt;section id="contact"&gt;
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
            Let's Connect
          </motion.h2>
          
          <motion.div 
            className="font-mono text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            // Ready to bring ideas to life
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-8 font-mono"
              whileHover={{ color: "#ffc107" }}
            >
              Get In Touch
            </motion.h3>
            
            <motion.p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm currently looking for new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my best to
              get back to you!
            </motion.p>
            
            {/* Contact Methods Grid */}
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  onClick={method.action}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-black/60 border border-yellow-500/20 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-yellow-500/50 relative overflow-hidden">
                    <div className="flex items-center gap-6 relative z-10">
                      <motion.div 
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 0 30px rgba(255, 193, 7, 0.3)"
                        }}
                      >
                        <method.icon size={24} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-white group-hover:text-yellow-400 transition-colors text-lg font-mono">
                          {method.label}
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                          {method.value}
                        </p>
                        {method.label === "Email" && emailCopied && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-green-400 text-sm mt-1"
                          >
                            <Check size={16} />
                            Copied to clipboard!
                          </motion.div>
                        )}
                      </div>
                      
                      {method.label === "Email" && (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="text-yellow-400"
                        >
                          <Copy size={20} />
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Status Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-6 bg-gradient-to-r from-green-500/10 to-yellow-500/10 border border-green-500/20 rounded-2xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h4 className="text-green-400 font-semibold font-mono">Available for Work</h4>
              </div>
              <p className="text-gray-300">
                Currently seeking full-time opportunities in software development,
                particularly interested in AI/ML and web development roles.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="perspective-1000"
          >
            <motion.div
              className="bg-black/60 border border-yellow-500/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
              whileHover={{ 
                borderColor: "rgba(255, 193, 7, 0.4)",
                boxShadow: "0 0 50px rgba(255, 193, 7, 0.1)"
              }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-3xl font-bold text-white mb-8 font-mono"
                  whileHover={{ color: "#ffc107" }}
                >
                  Send Message
                </motion.h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="group"
                  >
                    <label className="block text-gray-300 font-mono mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 border border-yellow-500/20 rounded-xl px-4 py-3 text-white font-mono focus:border-yellow-500/50 focus:outline-none transition-all duration-300 group-hover:border-yellow-500/30"
                      placeholder="Enter your name"
                    />
                  </motion.div>
                  
                  {/* Email Input */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="group"
                  >
                    <label className="block text-gray-300 font-mono mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 border border-yellow-500/20 rounded-xl px-4 py-3 text-white font-mono focus:border-yellow-500/50 focus:outline-none transition-all duration-300 group-hover:border-yellow-500/30"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                  
                  {/* Message Input */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="group"
                  >
                    <label className="block text-gray-300 font-mono mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-black/50 border border-yellow-500/20 rounded-xl px-4 py-3 text-white font-mono focus:border-yellow-500/50 focus:outline-none transition-all duration-300 resize-none group-hover:border-yellow-500/30"
                      placeholder="Your message here..."
                    />
                  </motion.div>
                  
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-mono font-semibold transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(255, 193, 7, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </span>
                    
                    {/* Button hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Closing tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16 font-mono text-yellow-400 text-lg"
        >
          &lt;/section&gt;
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
