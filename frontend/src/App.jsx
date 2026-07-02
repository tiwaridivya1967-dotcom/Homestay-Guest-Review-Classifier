import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import AnalyzerWorkspace from './components/AnalyzerWorkspace';
import Footer from './components/Footer';

// A quick helper component to combine Hero and Cards on the home screen
function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCards />
    </>
  );
}

function AboutPage() {
  return (
    <div className="space-y-20 py-12 animate-fadeIn text-gray-800">
      
      {/* 1. BRAND VISION HERO BLOCK */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-950 via-purple-950 to-gray-900 text-white p-8 md:p-16 shadow-xl">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')" }}></div>
        <div className="relative max-w-3xl space-y-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-pink-500 text-white">
            Our Enterprise Vision
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none">
            Pioneering Intelligence in <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent font-serif italic">Global Hospitality</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed">
            StaySense addresses a vital problem for modern property managers: turning unorganized guest review prose into structured operational roadmaps. We engineer automated natural language classifiers to protect your reputation and increase booking metrics.
          </p>
        </div>
      </div>

      {/* 2. THREE-COLUMN INDUSTRIAL STATISTICS CHIPS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="space-y-2 border-l-4 border-indigo-600 pl-4">
          <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider">Semantic Processing</h3>
          <p className="text-2xl font-black text-gray-900">Neural Network Matrix</p>
          <p className="text-xs text-gray-500 leading-relaxed">Slices text vectors into room cleanliness, host attentiveness, and accurate geographic location scores dynamically.</p>
        </div>
        <div className="space-y-2 border-l-4 border-purple-600 pl-4">
          <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider">Scalability Limit</h3>
          <p className="text-2xl font-black text-gray-900">Enterprise Ready</p>
          <p className="text-xs text-gray-500 leading-relaxed">Built on asynchronous multi-threaded Express architectures capable of processing millions of streams seamlessly.</p>
        </div>
        <div className="space-y-2 border-l-4 border-pink-500 pl-4">
          <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider">Operational Goal</h3>
          <p className="text-2xl font-black text-gray-900">Zero Leakage Slips</p>
          <p className="text-xs text-gray-500 leading-relaxed">Catches negative property reviews immediately and alerts internal property maintenance squads before check-out.</p>
        </div>
      </div>

      {/* 3. UPDATED SYSTEM ARCHITECTURE HIGHLIGHT (With Mountain House Photography) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
        <div className="rounded-2xl overflow-hidden shadow-lg h-80 relative group">
          {/* MOUNTAIN HOUSE PICTURE REPLACEMENT */}
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Beautiful house in the mountains" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent flex items-end p-6">
            <p className="text-white font-serif italic text-sm">Alpine Vista Sanctuary — Premium Eco-Homestay Environment</p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-gray-900">Full-Stack Operational Engineering</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Our technology stack links a high-performance React user interface with a custom-built Express backend node ecosystem. By routing asynchronous data streams into in-memory storage, your analytical graphs stay highly precise and compute changes in real-time.
          </p>
          <div className="pt-2">
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-xl">Node v18 Framework Compliant</span>
            <span className="text-xs font-bold text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1.5 rounded-xl ml-2">REST API Architecture</span>
          </div>
        </div>
      </div>

    </div>
  );
}

function LoginPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign in to your account</h2>
        <p className="text-sm text-gray-500 mb-4">Access automated hospitality guest insights</p>
        <button className="w-full bg-indigo-600 text-white font-medium py-3 rounded-xl shadow-md">Sign In</button>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between antialiased">
      <div>
        {/* The navigation header stays constant */}
        <Navbar />
        
        {/* Routes dynamically render pages depending on the current URL pathway */}
        <main className="animate-fadeIn">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<section className="max-w-7xl mx-auto px-4 py-16"><AnalyzerWorkspace /></section>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}