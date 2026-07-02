import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // State to manage dark mode toggle status
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Apply the dark mode styling classes to the main HTML document body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/about', label: 'About' }
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link to="/" className="group tracking-widest text-3xl font-black font-serif italic bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-90 transition-all">
            Luxe<span className="font-sans not-italic text-gray-900 dark:text-white border-b-4 border-pink-500">Mind AI</span>
          </Link>

          {/* Links */}
          <div className="hidden sm:flex sm:space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`inline-flex items-center px-1 pt-1 text-sm font-bold tracking-wide uppercase transition-all ${
                  location.pathname === link.path
                    ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* RIGHT ACTION BUTTONS: THEME TOGGLE + SIGN IN */}
          <div className="flex items-center gap-4">
            
            {/* THE NEW THEME BUTTON: Toggles Sun and Moon icons seamlessly */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all cursor-pointer border border-gray-200 dark:border-gray-700 text-xl"
              title="Toggle Layout Theme Color Mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Sign In
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
}