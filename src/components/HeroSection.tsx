
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const HeroSection: React.FC = () => {
  const { personal } = portfolioData;

  const handleDownloadResume = () => {
    // Create a link element and trigger download
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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-scale-in">
            KV
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white animate-slide-in-left">
            {personal.name}
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 animate-slide-in-right">
            {personal.tagline}
          </p>
          
          {/* Intro */}
          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {personal.intro}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button 
              onClick={handleDownloadResume}
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
