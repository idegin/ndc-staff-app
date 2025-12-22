import React from 'react';
import { CardProps } from '@/types/components';
import { cn } from '@/lib/utils';

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const shadowClasses = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
};

const roundedClasses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
};

export const Card: React.FC<CardProps> = ({
  children,
  colorSchema = 'muted',
  variant = 'solid',
  className,
  padding = 'md',
  shadow = 'sm',
  rounded = 'md',
}) => {
  const baseClasses = 'border';

  const colorClasses = {
    primary: 'border-primary-200 bg-primary-50',
    secondary: 'border-secondary-200 bg-secondary-50',
    accent: 'border-accent-200 bg-accent-50',
    danger: 'border-red-200 bg-red-50',
    success: 'border-green-200 bg-green-50',
    warning: 'border-yellow-200 bg-yellow-50',
    info: 'border-blue-200 bg-blue-50',
    muted: 'border-gray-200 bg-white',
    border: 'border-gray-300 bg-gray-50',
  };

  const classes = cn(
    baseClasses,
    colorClasses[colorSchema],
    paddingClasses[padding],
    shadowClasses[shadow],
    roundedClasses[rounded],
    className
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
};