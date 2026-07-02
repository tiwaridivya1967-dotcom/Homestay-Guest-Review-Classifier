/**
 * @component Toast
 * @description A self-dismissing notification element appearing briefly at the lower-right baseline border edge.
 * * @param {Object} props
 * @param {string} props.message - Descriptive text notification sentence.
 * @param {boolean} props.isOpen - Display status state toggle flag.
 * @param {function} props.onClose - Explicit visibility dismissal clean-up state function.
 * @param {number} [props.duration=3000] - Lifespan duration countdown in milliseconds before self-triggering dismissal.
 */
import React, { useEffect } from 'react';

export const Toast = ({ message, isOpen, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-lg rounded-md border border-gray-800 dark:border-gray-200 animate-bounce">
      <span className="text-sm font-medium">{message}</span>
      <button 
        onClick={onClose} 
        className="ml-3 text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-black font-bold"
      >
        ✕
      </button>
    </div>
  );
};