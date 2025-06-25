
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const HeroSection: React.FC = () => {
  const { personal } = portfolioData;
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [terminalText, setTerminalText] = useState('');
  const [currentTerminalLine, setCurrentTerminalLine] = useState(0);

  const fullText = "Aspiring Software Developer | AI & Web Explorer";
  
  const terminalLines = [
    'name: "Kiran V",',
    'role: "Full Stack Developer",',
    'passion: "AI & Innovation"'
  ];

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

  useEffect(() => {
    if (currentTerminalLine < terminalLines.length) {
      let charIndex = 0;
      const currentLine = terminalLines[currentTerminalLine];
      
      const typeTimer = setInterval(() => {
        if (charIndex <= currentLine.length) {
          const allPreviousLines = terminalLines.slice(0, currentTerminalLine).join('\n');
          const currentTyping = currentLine.slice(0, charIndex);
          setTerminalText(allPreviousLines + (allPreviousLines ? '\n' : '') + currentTyping);
          charIndex++;
        } else {
          clearInterval(typeTimer);
          setTimeout(() => {
            setCurrentTerminalLine(prev => prev + 1);
          }, 1000);
        }
      }, 50);

      return () => clearInterval(typeTimer);
    } else {
      // Reset after all lines are typed
      setTimeout(() => {
        setTerminalText('');
        setCurrentTerminalLine(0);
      }, 3000);
    }
  }, [currentTerminalLine]);

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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Terminal-style Name */}
              <div className="scroll-reveal stagger-1">
                <div className="terminal-bg p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-2">terminal</span>
                  </div>
                  <div className="text-left font-mono text-sm md:text-base">
                    <span className="text-green-400">const</span>{' '}
                    <span className="text-blue-400">developer</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-yellow-400">{`{`}</span>
                    <br />
                    <div className="ml-4 min-h-[4rem]">
                      {terminalText.split('\n').map((line, index) => (
                        <div key={index}>
                          <span className="text-purple-400">
                            {line.includes('name:') && 'name:'}
                            {line.includes('role:') && 'role:'}
                            {line.includes('passion:') && 'passion:'}
                          </span>{' '}
                          <span className="text-orange-400">
                            {line.replace(/^(name:|role:|passion:)\s*/, '')}
                          </span>
                          {index === terminalText.split('\n').length - 1 && (
                            <span className="animate-pulse text-blue-400">|</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <span className="text-yellow-400">{`};`}</span>
                  </div>
                </div>
              </div>
              
              {/* Typing Animation */}
              <div className="scroll-reveal stagger-2">
                <div className="text-lg md:text-xl text-blue-400 font-mono min-h-[2.5rem] flex items-center">
                  {displayedText}
                  {isTyping && <span className="animate-pulse ml-1">|</span>}
                </div>
              </div>
              
              {/* About Me */}
              <div className="scroll-reveal stagger-3">
                <div className="glassmorphic p-6 rounded-xl">
                  <h2 className="text-xl font-bold text-glow mb-4">About Me</h2>
                  <p className="text-gray-300 leading-relaxed">
                    I am a highly motivated developer with a strong grasp of AI, deep learning, 
                    and full-stack web development. I enjoy writing elegant code and solving 
                    real-world problems with scalable tech solutions.
                  </p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="scroll-reveal stagger-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleDownloadResume}
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 border-glow hover:scale-105 transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  <Button 
                    onClick={scrollToContact}
                    variant="outline" 
                    size="lg" 
                    className="px-6 py-3 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Let's Connect
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="scroll-reveal stagger-5">
                <div className="flex space-x-4">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 border-glow"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 border-glow"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 border-glow"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="scroll-reveal stagger-2">
                <div className="relative group">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-30 group-hover:opacity-50 animate-pulse transition-opacity duration-500"></div>
                  
                  {/* Main profile container */}
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/30 group-hover:border-blue-400/60 transition-all duration-500 hover:scale-105 transform-gpu">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 animate-gradient-xy"></div>
                    
                    {/* Profile image */}
                    <img
                      src="/lovable-uploads/fc80c050-b409-4e2c-aada-96216bebbc21.png"
                      alt="Kiran V - Profile"
                      className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay with glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-blue-900/20 transition-colors duration-500"></div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
