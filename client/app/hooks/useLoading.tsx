"use client"

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Handle initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds for initial load

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle route changes - this will trigger when pathname changes
    if (isNavigating) {
      // Wait for the page to be fully rendered
      const loadTimer = setTimeout(() => {
        setIsNavigating(false);
      }, 100); // Short delay to ensure rendering is complete

      return () => clearTimeout(loadTimer);
    }
  }, [pathname, isNavigating]);

  // Function to manually trigger navigation loading
  const startNavigation = () => {
    setIsNavigating(true);
  };

  const endNavigation = () => {
    // This will be called by the pathname change effect
    // or can be called manually if needed
    setIsNavigating(false);
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