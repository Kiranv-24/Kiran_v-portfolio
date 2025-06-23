
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const HeroSection: React.FC = () => {
  const { personal } = portfolioData;
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Aspiring Software Developer | AI & Web Explorer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personal.resumeUrl;
    link.download = 'Kiran_V_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image */}
          <div className="scroll-reveal mb-8">
            <div className="w-32 h-32 mx-auto rounded-full border-glow bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold hover:scale-110 transition-transform duration-300 cursor-pointer">
              KV
            </div>
          </div>
          
          {/* Terminal-style Name */}
          <div className="scroll-reveal stagger-1">
            <div className="terminal-bg p-6 rounded-lg max-w-2xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-2">terminal</span>
              </div>
              <div className="text-left font-mono">
                <span className="text-green-400">const</span>{' '}
                <span className="text-blue-400">developer</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-yellow-400">{`{`}</span>
                <br />
                <span className="ml-4 text-purple-400">name:</span>{' '}
                <span className="text-orange-400">"{personal.name}"</span>,
                <br />
                <span className="ml-4 text-purple-400">role:</span>{' '}
                <span className="text-orange-400">"Full Stack Developer"</span>,
                <br />
                <span className="ml-4 text-purple-400">passion:</span>{' '}
                <span className="text-orange-400">"AI & Innovation"</span>
                <br />
                <span className="text-yellow-400">{`};`}</span>
              </div>
            </div>
          </div>
          
          {/* Typing Animation */}
          <div className="scroll-reveal stagger-2">
            <div className="text-xl md:text-2xl text-blue-400 font-mono min-h-[2.5rem] flex items-center justify-center">
              {displayedText}
              {isTyping && <span className="animate-pulse ml-1">|</span>}
            </div>
          </div>
          
          {/* About Me */}
          <div className="scroll-reveal stagger-3">
            <div className="glassmorphic p-8 rounded-xl max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-glow mb-4">About Me</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a highly motivated developer with a strong grasp of AI, deep learning, 
                and full-stack web development. I enjoy writing elegant code and solving 
                real-world problems with scalable tech solutions.
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="scroll-reveal stagger-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleDownloadResume}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg border-glow hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-lg border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="scroll-reveal stagger-5">
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 border-glow"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 border-glow"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 border-glow"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
