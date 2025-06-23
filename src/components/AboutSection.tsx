
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolioData';

const AboutSection: React.FC = () => {
  const { academic } = portfolioData;

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn more about my educational background and professional aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Academic Info Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
                  🎓
                </div>
                Academic Excellence
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {academic.degree}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    CGPA: {academic.cgpa}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Key Achievements
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Maintaining high academic performance with 8.6+ CGPA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Active participant in coding competitions and hackathons
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Strong foundation in Data Structures and Algorithms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Hands-on experience with machine learning projects
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Personal Description */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Passionate About Technology
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {academic.description}
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Current Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "AI & Machine Learning", icon: "🤖" },
                  { title: "Web Development", icon: "🌐" },
                  { title: "Software Engineering", icon: "⚙️" },
                  { title: "Data Science", icon: "📊" }
                ].map((area, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                  >
                    <span className="text-2xl">{area.icon}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{area.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Career Objectives
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Seeking opportunities in software development where I can apply my technical skills 
                and contribute to innovative projects. Particularly interested in roles that involve 
                AI/ML applications, full-stack development, and solving complex technical challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
