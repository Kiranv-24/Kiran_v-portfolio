
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin, Send, Copy } from 'lucide-react';
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
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Email address copied to clipboard.",
    });
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
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">
              <span className="text-blue-400">{'<'}</span>
              Get In Touch
              <span className="text-blue-400">{' />'}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's build something amazing together.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="scroll-reveal stagger-1">
              <h3 className="text-2xl font-bold text-glow mb-6">
                Let's Connect
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index} 
                    className="group terminal-bg hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => window.open(method.href, '_blank')}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          <method.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {method.label}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="scroll-reveal stagger-2">
              <div className="glassmorphic p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">
                      Quick Contact
                    </h4>
                    <p className="text-gray-300 font-mono">{personal.email}</p>
                  </div>
                  <Button
                    onClick={() => copyToClipboard(personal.email)}
                    size="sm"
                    variant="outline"
                    className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal stagger-3">
            <Card className="terminal-bg hover:border-blue-500 transition-all duration-500 card-glow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-2">contact-form.jsx</span>
                </div>
                <CardTitle className="text-2xl font-bold text-white">
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
                      className="bg-gray-800 border-gray-600 focus:border-blue-500 text-white"
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
                      className="bg-gray-800 border-gray-600 focus:border-blue-500 text-white"
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
                      className="bg-gray-800 border-gray-600 focus:border-blue-500 text-white resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white border-glow hover:scale-105 transition-all duration-300"
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
