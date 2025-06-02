"use client"

import React, { useState } from 'react';
import { useLoadingContext } from '../LoadingProvider';

interface LoadingButtonProps {
  children: React.ReactNode;
  onClick?: () => Promise<void> | void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  disabled = false,
  type = 'button'
}) => {
  const { startNavigation, endNavigation } = useLoadingContext();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = async () => {
    if (disabled || isProcessing) return;

    setIsProcessing(true);
    startNavigation();

    try {
      if (onClick) {
        await onClick();
      }
    } catch (error) {
      console.error('Button action failed:', error);
    } finally {
      endNavigation();
      setIsProcessing(false);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || isProcessing}
      className={`${className} ${
        disabled || isProcessing ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  );
};

export default LoadingButton; 