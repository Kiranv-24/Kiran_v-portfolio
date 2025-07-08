
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolioData';

const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: skills.languages,
      icon: "💻",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Frameworks & Libraries",
      skills: skills.frameworks,
      icon: "⚛️",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Tools & Technologies",
      skills: skills.tools,
      icon: "🛠️",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Core Concepts",
      skills: skills.concepts,
      icon: "🧠",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">
              <span className="text-blue-400">{'<'}</span>
              Skills & Technologies
              <span className="text-blue-400">{' />'}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My technical arsenal for building innovative solutions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`scroll-reveal stagger-${index + 1}`}>
              <Card className="group h-full terminal-bg hover:border-blue-500 transition-all duration-500 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-bold text-white">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        className={`px-3 py-1 text-sm bg-gray-800 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 cursor-default stagger-${skillIndex + 1}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Skills Progress */}
        <div className="mt-16 scroll-reveal stagger-5">
          <div className="terminal-bg p-8 rounded-xl">
            {/* <h3 className="text-2xl font-bold text-center text-glow mb-8">
              Proficiency Overview
            </h3> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { skill: "Python", level: 90 },
                { skill: "JavaScript", level: 85 },
                { skill: "React.js", level: 80 },
                { skill: "Machine Learning", level: 75 },
                { skill: "C++", level: 85 },
                { skill: "Node.js", level: 70 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-blue-400">{item.skill}</span>
                    <span className="text-sm text-gray-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${item.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
