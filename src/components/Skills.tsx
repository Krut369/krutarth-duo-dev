import React from 'react';
import { usePortfolioMode } from '@/hooks/usePortfolioMode';
import { skills } from '@/data/portfolioData';

export const Skills: React.FC = () => {
  const { mode } = usePortfolioMode();
  const filteredSkills = skills.filter(skill => skill.category === mode);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {mode === 'mobile' ? 'Mobile Development' : 'Web Development'} Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              {mode === 'mobile' 
                ? 'Technologies and frameworks I use to build amazing mobile applications'
                : 'Technologies and tools I use to create modern web applications'
              }
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 animate-scale-in">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-normal hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center space-y-3">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-normal">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-normal">
                    {skill.name}
                  </h3>
                </div>
                
                {/* Skill Level Indicator */}
                <div className="mt-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-slow group-hover:bg-gradient-secondary"
                      style={{ 
                        width: `${85 + Math.random() * 15}%` // Random skill level between 85-100%
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-card p-6 rounded-xl shadow-card max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Always Learning
              </h3>
              <p className="text-muted-foreground">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
                tools, and best practices in {mode === 'mobile' ? 'mobile' : 'web'} development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};