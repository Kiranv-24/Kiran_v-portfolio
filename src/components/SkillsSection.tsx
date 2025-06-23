
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
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
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
                      variant="secondary" 
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200 hover:scale-105 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress Bars (Visual Enhancement) */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Proficiency Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.skill}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
