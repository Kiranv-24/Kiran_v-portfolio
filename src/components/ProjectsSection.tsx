
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, machine learning, and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
                      className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
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
                    className="flex-1 hover:bg-gray-100 dark:hover:bg-gray-700"
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
                      className="flex-1 bg-blue-500 hover:bg-blue-600"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
