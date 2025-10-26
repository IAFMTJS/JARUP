'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlassCard({ children, className, onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 cursor-pointer group',
        'bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/30',
        'hover:bg-white/20 dark:hover:bg-gray-800/30 hover:shadow-2xl hover:-translate-y-1',
        'animate-[fadeIn_0.5s_ease-out]',
        className
      )}
    >
      {children}
    </div>
  );
}

