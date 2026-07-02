/**
 * @component Button
 * @description A reusable custom button component with multiple style variants and sizes.
 * * @param {Object} props
 * @param {React.ReactNode} props.children - The content or label inside the button.
 * @param {'primary' | 'secondary' | 'outline'} [props.variant='primary'] - The visual style variant.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - The size dimensions of the button.
 * @param {boolean} [props.disabled=false] - Disables interaction and reduces opacity.
 * @param {function} [props.onClick] - Event handler function for mouse click actions.
 * @param {string} [props.className] - Additional utility classes for custom positioning.
 */
import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  // Define our base styles that apply to all buttons
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Map out our style variants using Tailwind
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600',
    outline: 'border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-50 focus:ring-blue-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800'
  };

  // Map out our size variations
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};