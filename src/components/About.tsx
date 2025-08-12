import React from 'react';
import { CheckCircle } from 'lucide-react';
import { usePortfolioMode } from '@/hooks/usePortfolioMode';
import { aboutContent } from '@/data/portfolioData';

export const About: React.FC = () => {
  const { mode } = usePortfolioMode();
  const content = aboutContent[mode];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-slide-in">
              <div className="transition-all duration-slow">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {content.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {content.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3 transition-all duration-slow">
                <h4 className="text-lg font-medium text-foreground">What I Do:</h4>
                <ul className="space-y-2">
                  {content.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative animate-scale-in">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-normal">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💻</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Clean Code</h4>
                      <p className="text-sm text-muted-foreground">Writing maintainable, scalable code</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">User Experience</h4>
                      <p className="text-sm text-muted-foreground">Designing intuitive interfaces</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Performance</h4>
                      <p className="text-sm text-muted-foreground">Optimizing for speed and efficiency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};