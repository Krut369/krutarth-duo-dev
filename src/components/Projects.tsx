import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePortfolioMode } from '@/hooks/usePortfolioMode';
import { projects } from '@/data/portfolioData';
import mobileProject1 from '@/assets/mobile-project-1.jpg';
import mobileProject2 from '@/assets/mobile-project-2.jpg';
import mobileProject3 from '@/assets/mobile-project-3.jpg';
import webProject1 from '@/assets/web-project-1.jpg';
import webProject2 from '@/assets/web-project-2.jpg';
import webProject3 from '@/assets/web-project-3.jpg';

const imageMap = {
  '/src/assets/mobile-project-1.jpg': mobileProject1,
  '/src/assets/mobile-project-2.jpg': mobileProject2,
  '/src/assets/mobile-project-3.jpg': mobileProject3,
  '/src/assets/web-project-1.jpg': webProject1,
  '/src/assets/web-project-2.jpg': webProject2,
  '/src/assets/web-project-3.jpg': webProject3,
};

export const Projects: React.FC = () => {
  const { mode } = usePortfolioMode();
  const filteredProjects = projects.filter(project => project.category === mode);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured {mode === 'mobile' ? 'Mobile Apps' : 'Web Projects'}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              {mode === 'mobile' 
                ? 'A showcase of mobile applications I\'ve built using modern frameworks and technologies'
                : 'A collection of web applications and websites I\'ve developed with modern technologies'
              }
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gradient-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-normal hover:scale-105 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={imageMap[project.image as keyof typeof imageMap]}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal" />
                  
                  {/* Project Actions */}
                  <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                    <Button
                      size="sm"
                      className="bg-background/90 hover:bg-background text-foreground p-2 rounded-full"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-background/90 hover:bg-background text-foreground p-2 rounded-full"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-normal">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-normal"
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full transition-all duration-normal hover:scale-105"
            >
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};