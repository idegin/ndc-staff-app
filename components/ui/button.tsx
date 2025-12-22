import React from 'react';
import { ButtonProps } from '@/types/components';
import { cn } from '@/lib/utils';

const colorSchemaClasses = {
  primary: {
    solid: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
    outline: 'border border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
    link: 'text-primary-500 hover:text-primary-600 underline focus:ring-primary-500',
  },
  secondary: {
    solid: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500',
    outline: 'border border-secondary-500 text-secondary-500 hover:bg-secondary-50 focus:ring-secondary-500',
    ghost: 'text-secondary-500 hover:bg-secondary-50 focus:ring-secondary-500',
    link: 'text-secondary-500 hover:text-secondary-600 underline focus:ring-secondary-500',
  },
  accent: {
    solid: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500',
    outline: 'border border-accent-500 text-accent-500 hover:bg-accent-50 focus:ring-accent-500',
    ghost: 'text-accent-500 hover:bg-accent-50 focus:ring-accent-500',
    link: 'text-accent-500 hover:text-accent-600 underline focus:ring-accent-500',
  },
  danger: {
    solid: 'bg-danger text-white hover:bg-red-700 focus:ring-danger',
    outline: 'border border-danger text-danger hover:bg-red-50 focus:ring-danger',
    ghost: 'text-danger hover:bg-red-50 focus:ring-danger',
    link: 'text-danger hover:text-red-700 underline focus:ring-danger',
  },
  success: {
    solid: 'bg-success text-white hover:bg-green-700 focus:ring-success',
    outline: 'border border-success text-success hover:bg-green-50 focus:ring-success',
    ghost: 'text-success hover:bg-green-50 focus:ring-success',
    link: 'text-success hover:text-green-700 underline focus:ring-success',
  },
  warning: {
    solid: 'bg-warning text-white hover:bg-yellow-600 focus:ring-warning',
    outline: 'border border-warning text-yellow-800 hover:bg-yellow-50 focus:ring-warning',
    ghost: 'text-warning hover:bg-yellow-50 focus:ring-warning',
    link: 'text-warning hover:text-yellow-700 underline focus:ring-warning',
  },
  info: {
    solid: 'bg-info text-white hover:bg-blue-700 focus:ring-info',
    outline: 'border border-info text-info hover:bg-blue-50 focus:ring-info',
    ghost: 'text-info hover:bg-blue-50 focus:ring-info',
    link: 'text-info hover:text-blue-700 underline focus:ring-info',
  },
  muted: {
    solid: 'bg-muted text-gray-900 hover:bg-gray-200 focus:ring-muted',
    outline: 'border border-muted text-gray-700 hover:bg-gray-50 focus:ring-muted',
    ghost: 'text-gray-700 hover:bg-gray-50 focus:ring-muted',
    link: 'text-gray-700 hover:text-gray-900 underline focus:ring-muted',
  },
  border: {
    solid: 'bg-border text-gray-900 hover:bg-gray-200 focus:ring-border',
    outline: 'border border-border text-gray-700 hover:bg-gray-50 focus:ring-border',
    ghost: 'text-gray-700 hover:bg-gray-50 focus:ring-border',
    link: 'text-gray-700 hover:text-gray-900 underline focus:ring-border',
  },
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  colorSchema = 'primary',
  variant = 'solid',
  size = 'md',
  fullWidth = false,
  className,
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const classes = cn(
    baseClasses,
    colorSchemaClasses[colorSchema][variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};