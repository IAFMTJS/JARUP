'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

export function Badge({ children, variant = 'default', size = 'md' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-semibold rounded-full',
        {
          'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200': variant === 'default',
          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': variant === 'success',
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': variant === 'warning',
          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': variant === 'error',
          'px-2 py-1 text-xs': size === 'sm',
          'px-3 py-1.5 text-sm': size === 'md',
          'px-4 py-2 text-base': size === 'lg',
        }
      )}
    >
      {children}
    </span>
  );
}

