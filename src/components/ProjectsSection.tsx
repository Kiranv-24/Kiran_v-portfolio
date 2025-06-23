
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">
              <span className="text-blue-400">{'<'}</span>
              Featured Projects
              <span className="text-blue-400">{' />'}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Exploring the intersection of code and creativity through innovative solutions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`scroll-reveal stagger-${index + 1}`}
            >
              <Card className="group h-full terminal-bg hover:border-blue-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    {project.featured && (
                      <Badge className="bg-blue-600 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      asChild 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button 
                        asChild 
                        size="sm" 
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
