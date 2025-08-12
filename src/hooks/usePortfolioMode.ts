import { useEffect, useState } from 'react';

export type PortfolioMode = 'mobile' | 'web';

export const usePortfolioMode = () => {
  const [mode, setMode] = useState<PortfolioMode>('mobile');

  useEffect(() => {
    const savedMode = localStorage.getItem('portfolioMode') as PortfolioMode | null;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'mobile' ? 'web' : 'mobile';
    setMode(newMode);
    localStorage.setItem('portfolioMode', newMode);
  };

  const setPortfolioMode = (newMode: PortfolioMode) => {
    setMode(newMode);
    localStorage.setItem('portfolioMode', newMode);
  };

  return { mode, toggleMode, setPortfolioMode };
};