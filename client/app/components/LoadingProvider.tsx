"use client"

import React, { createContext, useContext, useEffect } from 'react';
import LoadingScreen from './ui/LoadingScreen';
import useLoading from '../hooks/useLoading';

interface LoadingContextType {
  isLoading: boolean;
  isNavigating: boolean;
  showLoading: boolean;
  startNavigation: () => void;
  endNavigation: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoadingContext must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: React.ReactNode;
}

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const loadingState = useLoading();

  useEffect(() => {
    // Additional check for document ready state
    const handleDocumentReady = () => {
      if (document.readyState === 'complete' && loadingState.isNavigating) {
        // Small delay to ensure all components are mounted
        setTimeout(() => {
          loadingState.endNavigation();
        }, 50);
      }
    };

    if (loadingState.isNavigating) {
      document.addEventListener('readystatechange', handleDocumentReady);
      
      // Also check current state
      handleDocumentReady();
    }

    return () => {
      document.removeEventListener('readystatechange', handleDocumentReady);
    };
  }, [loadingState.isNavigating, loadingState.endNavigation]);

  return (
    <LoadingContext.Provider value={loadingState}>
      {loadingState.showLoading && <LoadingScreen />}
      <div className={`transition-opacity duration-300 ${loadingState.showLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
};

export default LoadingProvider; 