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
  const { startNavigation } = useLoadingContext();

  const handleClick = () => {
    startNavigation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default LoadingLink; 