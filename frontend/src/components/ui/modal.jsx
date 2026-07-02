/**
 * @component Modal
 * @description A focus-trapping accessible user window dialog overlay triggered over main window frames.
 * * @param {Object} props
 * @param {boolean} props.isOpen - Controls current visibility status layout configurations.
 * @param {function} props.onClose - Action link mapping clearing open visibility flags on click/Escape.
 * @param {string} props.title - Structural label text populated at the top heading banner.
 * @param {React.ReactNode} props.children - Context windows injected straight inside the modal viewport block.
 */
import React, { useEffect, useRef } from 'react';

export const Modal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Accessibility: Prevent background scrolling when modal is active
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus trapping logic
  useEffect(() => {
    if (!isOpen) return;

    const modalElement = modalRef.current;
    // Find all focusable elements within the modal
    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleFocusTrap = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) { // Tab + Shift
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else { // Tab solo
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    modalElement.addEventListener('keydown', handleFocusTrap);
    // Autofocus the first element when modal opens
    if (firstElement) firstElement.focus();

    return () => {
      modalElement.removeEventListener('keydown', handleFocusTrap);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Background Overlay Click to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-4 text-gray-600 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};