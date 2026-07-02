/**
 * @component Loader
 * @description Interactive visual spinner providing real-time feedback loops during data fetches.
 * * @param {Object} props
 * @param {'spinner' | 'skeleton'} [props.variant='spinner'] - Visual loader display type selector.
 */
import React from 'react';

export const Loader = ({ variant = 'spinner' }) => {
  if (variant === 'skeleton') {
    return (
      <div className="w-full space-y-3 animate-pulse">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin dark:border-gray-700 dark:border-t-blue-500"></div>
    </div>
  );
};