"use client"

import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  weight: '900',
  subsets: ['latin'],
});

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[rgb(255,0,0)] via-red-500 to-pink-400">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center px-8">
        {/* Animated Logo/Brand */}
        <div className="mb-8">
          <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-4 ${playfair.className} drop-shadow-2xl`}>
            KISSMELT
          </h1>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-white mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Animated Strawberry Icons */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-pink-200 rounded-full animate-bounce delay-100"></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-200"></div>
          <div className="w-4 h-4 bg-pink-200 rounded-full animate-bounce delay-300"></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-400"></div>
        </div>

        {/* Loading Text */}
        <p className="text-white text-xl sm:text-2xl md:text-3xl font-light tracking-wider animate-pulse">
          Preparing something sweet...
        </p>

        {/* Progress Bar */}
        <div className="mt-8 w-full max-w-xs mx-auto">
          <div className="w-full bg-white/30 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-white rounded-full animate-loading-bar origin-left"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes loading-bar {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.6); }
          100% { transform: scaleX(1); }
        }
        
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen; 