"use client"

import { useState, useEffect } from 'react';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // Handle initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds for initial load

    return () => clearTimeout(timer);
  }, []);

  // Function to manually trigger navigation loading
  const startNavigation = () => {
    setIsNavigating(true);
  };

  const endNavigation = () => {
    setTimeout(() => {
      setIsNavigating(false);
    }, 500);
  };

  // Combined loading state
  const showLoading = isLoading || isNavigating;

  return { 
    isLoading, 
    isNavigating, 
    showLoading,
    startNavigation,
    endNavigation
  };
};

export default useLoading; 