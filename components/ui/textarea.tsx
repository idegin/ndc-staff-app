import React from 'react';
import { TextareaProps } from '@/types/components';
import { cn } from '@/lib/utils';

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  rows = 3,
  colorSchema = 'muted',
  variant = 'solid',
  size = 'md',
  className,
}) => {
  const baseClasses = 'w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors resize-vertical';

  const colorClasses = {
    primary: 'border-primary-300 focus:border-primary-500 focus:ring-primary-500',
    secondary: 'border-secondary-300 focus:border-secondary-500 focus:ring-secondary-500',
    accent: 'border-accent-300 focus:border-accent-500 focus:ring-accent-500',
    danger: 'border-red-300 focus:border-danger focus:ring-danger',
    success: 'border-green-300 focus:border-success focus:ring-success',
    warning: 'border-yellow-300 focus:border-warning focus:ring-warning',
    info: 'border-blue-300 focus:border-info focus:ring-info',
    muted: 'border-gray-300 focus:border-gray-500 focus:ring-gray-500',
    border: 'border-border focus:border-gray-500 focus:ring-gray-500',
  };

  const classes = cn(
    baseClasses,
    colorClasses[colorSchema],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      required={required}
      rows={rows}
      className={classes}
    />
  );
};