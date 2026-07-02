/**
 * @component Input
 * @description A structured form text input element supporting dynamic states, custom labels, and validation errors.
 * * @param {Object} props
 * @param {string} [props.label] - Optional descriptive label displayed above the input box.
 * @param {string} [props.placeholder] - Shadow text displayed when the value field is empty.
 * @param {string} [props.type='text'] - HTML input behavior type (e.g., 'text', 'password', 'email').
 * @param {string | number} props.value - Active field data state string bound to the parent state variable.
 * @param {function} props.onChange - Event feedback handler processing layout character additions.
 * @param {string} [props.error] - Validation warning text that changes border color strings to deep red.
 * @param {string} [props.className] - Container layout spacing customization string flags.
 */
import React from 'react';

export const Input = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 ${
          error 
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
            : 'border-gray-300 dark:border-gray-600'
        }`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
};