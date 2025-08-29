"use client";

import { useEffect, useRef, useState, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export default function LazySection({ 
  children, 
  className = '', 
  threshold = 0.1, 
  rootMargin = '50px' 
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          // Desconecta o observer após o primeiro carregamento
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div 
      ref={elementRef} 
      className={`transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {isVisible ? children : (
        // Placeholder com altura mínima para evitar layout shift
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="animate-pulse">
            <div className="w-8 h-8 bg-gradient-to-r from-[#1a365d] to-[#d69e2e] rounded-full animate-bounce"></div>
          </div>
        </div>
      )}
    </div>
  );
}
