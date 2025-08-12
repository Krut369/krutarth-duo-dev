import React from 'react';
import { cn } from '@/lib/utils';

interface ToggleSwitchProps {
  leftLabel: string;
  rightLabel: string;
  isRight: boolean;
  onToggle: (event?: React.MouseEvent) => void;
  className?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  leftLabel,
  rightLabel,
  isRight,
  onToggle,
  className
}) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <label 
        className={cn(
          "text-sm font-medium transition-colors duration-normal cursor-pointer",
          !isRight ? "text-foreground" : "text-muted-foreground"
        )}
        onClick={(e) => {
          e.stopPropagation();
          onToggle(e);
        }}
      >
        {leftLabel}
      </label>
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle(e);
        }}
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-normal focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          isRight ? "bg-gradient-primary" : "bg-muted"
        )}
        role="switch"
        aria-checked={isRight}
        type="button"
      >
        <span
          className={cn(
            "inline-block h-4 w-4 transform rounded-full bg-background shadow-lg transition-transform duration-normal",
            isRight ? "translate-x-6" : "translate-x-1"
          )}
        />
      </button>
      
      <label 
        className={cn(
          "text-sm font-medium transition-colors duration-normal cursor-pointer",
          isRight ? "text-foreground" : "text-muted-foreground"
        )}
        onClick={(e) => {
          e.stopPropagation();
          onToggle(e);
        }}
      >
        {rightLabel}
      </label>
    </div>
  );
};