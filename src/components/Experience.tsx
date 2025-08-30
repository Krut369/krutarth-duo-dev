import React from 'react';
import { Calendar, MapPin, Building2, Briefcase } from 'lucide-react';
import { usePortfolioMode } from '@/hooks/usePortfolioMode';
import { experience } from '@/data/portfolioData';

export const Experience: React.FC = () => {
  const { mode } = usePortfolioMode();
  const allExperience = experience;
  const currentModeExperience = experience.filter(exp => exp.category === mode);
  const otherModeExperience = experience.filter(exp => exp.category !== mode);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              {mode === 'mobile' 
                ? 'My journey in mobile app development and cross-platform solutions'
                : 'My professional experience in web development and software engineering'
              }
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent"></div>
            
            <div className="space-y-12 animate-scale-in">
              {currentModeExperience.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  {/* Content Card */}
                  <div className="ml-16 bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 border border-border/50">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Building2 className="h-6 w-6 text-primary" />
                          <h3 className="text-2xl font-bold text-foreground">
                            {exp.company}
                          </h3>
                        </div>
                        
                        <div className="space-y-1">
                          <h4 className="text-xl font-semibold text-primary flex items-center gap-2">
                            <Briefcase className="h-5 w-5" />
                            {exp.position}
                          </h4>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span className="font-medium">{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span className="font-medium">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="flex justify-end">
                        <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                          {exp.duration}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      <h5 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                        Key Responsibilities & Achievements
                      </h5>
                      <ul className="space-y-3">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 group">
                            <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                            <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-200">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Mode Experience Section */}
          {otherModeExperience.length > 0 && (
            <div className="mt-20">
              <div className="text-center mb-16 animate-fade-in">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {mode === 'mobile' ? 'Web Development' : 'Mobile Development'} Experience
                </h3>
                <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  {mode === 'mobile' 
                    ? 'My experience in web development and full-stack solutions'
                    : 'My experience in mobile app development and cross-platform solutions'
                  }
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent"></div>
                
                <div className="space-y-12 animate-scale-in">
                  {otherModeExperience.map((exp, index) => (
                    <div
                      key={exp.id}
                      className="relative animate-fade-in"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                      
                      {/* Content Card */}
                      <div className="ml-16 bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 border border-border/50">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <Building2 className="h-6 w-6 text-primary" />
                              <h3 className="text-2xl font-bold text-foreground">
                                {exp.company}
                              </h3>
                            </div>
                            
                            <div className="space-y-1">
                              <h4 className="text-xl font-semibold text-primary flex items-center gap-2">
                                <Briefcase className="h-5 w-5" />
                                {exp.position}
                              </h4>
                              
                              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  <span className="font-medium">{exp.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  <span className="font-medium">{exp.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Duration Badge */}
                          <div className="flex justify-end">
                            <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                              {exp.duration}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                          <h5 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                            Key Responsibilities & Achievements
                          </h5>
                          <ul className="space-y-3">
                            {exp.description.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3 group">
                                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                                <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-200">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* No Experience Message */}
          {currentModeExperience.length === 0 && (
            <div className="text-center py-16">
              <div className="text-8xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start My Journey
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto text-lg leading-relaxed">
                {mode === 'mobile' 
                  ? 'I\'m excited to begin my career in mobile app development and create amazing experiences.'
                  : 'I\'m ready to contribute to web development projects and build innovative solutions.'
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
