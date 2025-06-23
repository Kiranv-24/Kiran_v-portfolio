
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demo purposes, we'll just show a success message
    // In a real implementation, you'd integrate with a service like Formspree
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: "from-red-400 to-red-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: "from-green-400 to-green-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Profile",
      href: personal.github,
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect",
      href: personal.linkedin,
      color: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 cursor-pointer"
                  onClick={() => window.open(method.href, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                        <method.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                          {method.label}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Open to Opportunities
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Currently seeking full-time positions in software development, 
                with particular interest in AI/ML and web development roles.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send a Message
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
