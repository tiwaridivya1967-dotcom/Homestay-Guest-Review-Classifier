import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';

// Component Imports
import AnalyzerWorkspace from './components/AnalyzerWorkspace';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import Footer from './components/Footer';

function HomePage() {
  return (
    <div className="space-y-4">
      <Hero />
      <FeatureCards />
    </div>
  );
}

// WEEK 6 ROUTE GUARD COMPONENT: Redirects unauthenticated users to /login
function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
}

// WEEK 6 COMPLIANT USER SIGN IN / REGISTER FORM INTERFACE
function LoginPage() {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState({ text: '', isError: false });

  const handleAuth = async (e) => {
    e.preventDefault();
    setMsg({ text: '', isError: false });
    const endpoint = isRegistering ? 'register' : 'login';

    try {
      const response = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.errors?.[0]?.msg || 'Authentication failure.');
      }

      if (isRegistering) {
        setMsg({ text: 'Registration complete! Please log in now.', isError: false });
        setIsRegistering(false);
      } else {
        localStorage.setItem('token', data.token); // Save JWT to browser storage
        navigate('/dashboard'); // Secure navigation routing access
      }
    } catch (err) {
      setMsg({ text: err.message, isError: true });
    }
  };

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white">
            {isRegistering ? 'Create Management Key' : 'Security Sign In'}
          </h2>
          <p className="text-xs text-gray-400 mt-1">LuxeMind AI Security Gateway Pipeline</p>
        </div>

        {msg.text && (
          <div className={`p-3 rounded-xl text-xs font-bold text-center ${msg.isError ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-green-50 text-green-600 border border-green-200'}`}>
            {msg.text}
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-4">
          <input type="email" placeholder="Corporate Email Address" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-3 border border-gray-200 bg-gray-50 dark:bg-gray-900/50 dark:border-gray-700 dark:text-white text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input type="password" placeholder="Account Security Password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full p-3 border border-gray-200 bg-gray-50 dark:bg-gray-900/50 dark:border-gray-700 dark:text-white text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors text-sm shadow-md shadow-indigo-100">
            {isRegistering ? 'Execute System Registration' : 'Validate System Access'}
          </button>
        </form>

        <div className="text-center">
          <button onClick={() => setIsRegistering(!isRegistering)} className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
            {isRegistering ? 'Already have an profile identity? Sign In' : 'Need an access account? Register here'}
          </button>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <div className="space-y-16 py-8 text-gray-800 dark:text-gray-100">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-950 via-purple-950 to-gray-900 text-white p-8 md:p-12 shadow-xl">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Pioneering Hospitality Intelligence</h1>
        <p className="text-sm text-gray-300 mt-4 max-w-xl">LuxeMind AI converts unorganized guest reviews into clear, structured operational roadmaps in real time.</p>
      </div>
    </div>
  );
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const hasToken = !!localStorage.getItem('token');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 flex flex-col justify-between antialiased transition-colors duration-300">
      <div>
        <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
            <button onClick={() => navigate('/')} className="text-3xl font-black font-serif italic bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer">
              Luxe<span className="font-sans not-italic text-gray-900 dark:text-white border-b-4 border-pink-500">Mind AI</span>
            </button>
            <div className="flex items-center gap-6">
              <button onClick={() => navigate('/')} className={`text-sm font-bold uppercase ${location.pathname === '/' ? 'text-indigo-600' : 'text-gray-500'}`}>Home</button>
              <button onClick={() => navigate('/dashboard')} className={`text-sm font-bold uppercase ${location.pathname === '/dashboard' ? 'text-indigo-600' : 'text-gray-500'}`}>Dashboard</button>
              <button onClick={() => navigate('/about')} className={`text-sm font-bold uppercase ${location.pathname === '/about' ? 'text-indigo-600' : 'text-gray-500'}`}>About</button>
              <button onClick={() => setDarkMode(!darkMode)} className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xl">{darkMode ? '☀️' : '🌙'}</button>
              
              {hasToken ? (
                <button onClick={handleLogout} className="bg-rose-600 text-white px-5 py-2 rounded-full text-sm font-bold tracking-wider uppercase shadow-md">Sign Out</button>
              ) : (
                <button onClick={() => navigate('/login')} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold tracking-wider uppercase shadow-md">Sign In</button>
              )}
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            {/* WEEK 6 WRAPPED CHANNELS PROTECTED BY THE ROUTE GUARD */}
            <Route path="/dashboard" element={<ProtectedRoute><section className="py-2"><AnalyzerWorkspace /></section></ProtectedRoute>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}