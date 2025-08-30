import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-surface">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>© {currentYear} Krutarth Solanki. Built with</span>
            <span>and modern web technologies.</span>
          </div>
          
          {/* Tech Stack */}
          {/* <div className="text-sm text-muted-foreground">
            Powered by React, TypeScript, and Tailwind CSS
          </div>
           */}
          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors duration-normal"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <div className="w-6 h-6 border border-primary rounded-full flex items-center justify-center">
              <div className="w-2 h-2 border-t border-r border-primary transform rotate-[-45deg] translate-y-0.5"></div>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};