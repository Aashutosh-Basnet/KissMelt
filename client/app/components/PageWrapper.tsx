"use client"

import React, { useEffect } from 'react';
import { useLoadingContext } from './LoadingProvider';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className }) => {
  const { endNavigation, isNavigating } = useLoadingContext();

  useEffect(() => {
    // When this component mounts and is navigating, end the navigation
    if (isNavigating) {
      // Small delay to ensure all child components are rendered
      const timer = setTimeout(() => {
        endNavigation();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isNavigating, endNavigation]);

  useEffect(() => {
    // Also check when all images and resources are loaded
    const handleLoad = () => {
      if (isNavigating) {
        endNavigation();
      }
    };

    window.addEventListener('load', handleLoad);
    
    // If already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [isNavigating, endNavigation]);

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default PageWrapper; 