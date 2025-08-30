import React, { createContext, useEffect, useState } from 'react';

export type PortfolioMode = 'mobile' | 'web';

type ModeContextValue = {
  mode: PortfolioMode;
  toggleMode: () => void;
  setPortfolioMode: (mode: PortfolioMode) => void;
};

export const PortfolioModeContext = createContext<ModeContextValue | undefined>(undefined);

export const PortfolioModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PortfolioMode>('mobile');

  // Initialize from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('portfolioMode') as PortfolioMode | null;
    if (saved === 'mobile' || saved === 'web') setMode(saved);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('portfolioMode', mode);
  }, [mode]);

  const toggleMode = () => setMode((prev) => (prev === 'mobile' ? 'web' : 'mobile'));
  const setPortfolioMode = (m: PortfolioMode) => setMode(m);

  return (
    <PortfolioModeContext.Provider value={{ mode, toggleMode, setPortfolioMode }}>
      {children}
    </PortfolioModeContext.Provider>
  );
};