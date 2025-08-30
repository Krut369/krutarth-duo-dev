import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePortfolioMode } from '@/hooks/usePortfolioMode';
import profilePicture from '@/assets/profile-picture.jpg';

export const Hero: React.FC = () => {
  const { mode } = usePortfolioMode();
  
  console.log('Hero component mode:', mode);

  const taglines = {
    mobile: "Crafting Beautiful Mobile Experiences",
    web: "Building Modern Web Solutions"
  };

  const descriptions = {
    mobile: "Passionate mobile app developer specializing in Flutter and React Native. I create intuitive, performant apps that users love.",
    web: "Full-stack web developer focused on creating responsive, scalable applications using modern technologies and best practices."
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full animate-glow"></div>
              <img
                src={profilePicture}
                alt="Krutarth Solanki"
                className="w-full h-full object-cover rounded-full border-4 border-background relative z-10 animate-float"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Krutarth Solanki
            </h1>
            
            <div className="transition-all duration-slow">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium bg-gradient-primary bg-clip-text text-transparent">
                {taglines[mode]}
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto transition-all duration-slow">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {descriptions[mode]}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:bg-gradient-secondary text-primary-foreground font-medium px-8 py-3 rounded-full transition-all duration-normal hover:scale-105 shadow-card hover:shadow-card-hover"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-border hover:border-primary hover:bg-surface px-8 py-3 rounded-full transition-all duration-normal hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Get Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};