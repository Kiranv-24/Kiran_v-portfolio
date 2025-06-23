
import React from 'react';
import CodeBackground from '../components/CodeBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import AcademicSection from '../components/AcademicSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <CodeBackground />
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AcademicSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
