"use client"

import React from 'react';
import Link from 'next/link';
import { useLoadingContext } from '../LoadingProvider';

interface LoadingLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const LoadingLink: React.FC<LoadingLinkProps> = ({ href, children, className, onClick, ...props }) => {
  const { startNavigation, endNavigation } = useLoadingContext();

  const handleClick = () => {
    startNavigation();
    if (onClick) {
      onClick();
    }
    
    // Simulate navigation delay
    setTimeout(() => {
      endNavigation();
    }, 1000);
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default LoadingLink; 