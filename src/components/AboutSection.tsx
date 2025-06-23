
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolioData';

const AboutSection: React.FC = () => {
  const { academic } = portfolioData;

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">
              <span className="text-blue-400">{'<'}</span>
              About Me
              <span className="text-blue-400">{' />'}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My journey in technology and continuous learning
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Academic Card */}
          <div className="scroll-reveal stagger-1">
            <Card className="terminal-bg hover:border-blue-500 transition-all duration-500 hover:scale-105 card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-white">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  Academic Excellence
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">
                    {academic.degree}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-green-600 text-white">
                      CGPA: {academic.cgpa}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 text-gray-300">
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
          </div>

          {/* Personal Journey */}
          <div className="space-y-8 scroll-reveal stagger-2">
            <div className="glassmorphic p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-glow mb-6">
                Passionate About Technology
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {academic.description}
              </p>
              
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-blue-400">
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
                      className="flex items-center gap-3 p-4 terminal-bg rounded-xl hover:border-blue-500 transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-2xl">{area.icon}</span>
                      <span className="font-medium text-white">{area.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glassmorphic p-8 rounded-xl">
              <h4 className="text-xl font-semibold text-blue-400 mb-4">
                Career Objectives
              </h4>
              <p className="text-gray-300 leading-relaxed">
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
