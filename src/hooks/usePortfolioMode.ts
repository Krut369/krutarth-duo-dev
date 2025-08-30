import { useContext } from 'react';
import type { PortfolioMode } from '@/context/PortfolioModeProvider';
import { PortfolioModeContext } from '@/context/PortfolioModeProvider';

export type { PortfolioMode };

export const usePortfolioMode = () => {
  const ctx = useContext(PortfolioModeContext);
  if (!ctx) {
    throw new Error('usePortfolioMode must be used within a PortfolioModeProvider');
  }
  return ctx;
};