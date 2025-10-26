'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl shadow-xl p-6 bg-white/90 dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700 backdrop-blur-sm transition-all duration-300',
        hover && 'hover:shadow-2xl hover:-translate-y-1',
        'animate-[fadeIn_0.5s_ease-out]',
        className
      )}
    >
      {children}
    </div>
  );
}

