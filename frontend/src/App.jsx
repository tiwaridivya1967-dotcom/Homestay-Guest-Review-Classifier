import React, { useState } from 'react';
import './App.css';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/hero';
import FeatureCards from './components/FeatureCards';
import AnalyzerWorkspace from './components/AnalyzerWorkspace';
import Footer from './components/Footer';

export default function App() {
  // Navigation State: 'home' | 'dashboard' | 'login' | 'about'
  const [currentPage, setCurrentPage] = useState('home');

  // Inline Page Renderer Switch Engine
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <FeatureCards />
          </>
        );
      
      case 'dashboard':
        return (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-white to-gray-50/50">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                Host Operator Console
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mt-3">
                Live AI Processing Hub
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Paste raw review transcripts from booking portals below to extract domain tags and generate responses.
              </p>
            </div>
            <AnalyzerWorkspace />
          </section>
        );

      case 'login':
        return (
          <section className="min-h-[75vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-xl mb-4">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900">Sign in to account</h2>
                <p className="mt-2 text-sm text-gray-600">Access automated guest workflows</p>
              </div>
              <form className="mt-8 space-y-4" onSubmit={(e) => { e.preventDefault(); setCurrentPage('dashboard'); }}>
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase text-gray-500">Email address</label>
                  <input type="email" required className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-sm" placeholder="host@homestay.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase text-gray-500">Password</label>
                  <input type="password" required className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-sm" placeholder="••••••••" />
                </div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl shadow-md transition-all mt-4">
                  Sign In
                </button>
              </form>
            </div>
          </section>
        );

      case 'about':
        return (
          <section className="max-w-4xl mx-auto px-4 py-20 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-4">
              Our Core Architecture
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              Engineering Guest Sentiment Intelligence
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                StaySense was engineered to solve a critical operational bottleneck in hospitality management: the natural variance and extraction latency of textual review analysis across booking channels.
              </p>
              <p>
                By employing semantic token parsing and custom natural language templates, our platform isolates localized property pain points—such as amenity failure profiles or communication delays—enabling hosts to deploy preventative interventions before booking scores are impacted.
              </p>
            </div>
            <div className="mt-10 p-6 bg-indigo-50 rounded-2xl border border-indigo-100/50 flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl flex-shrink-0">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <p className="text-sm text-indigo-900 text-left">
                <strong>Platform Notice:</strong> StaySense operations run on natural language pipeline infrastructure configured to provide high-fidelity semantic classification.
              </p>
            </div>
          </section>
        );

      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased selection:bg-indigo-500 selection:text-white flex flex-col justify-between">
      <div>
        {/* Dynamic Navigation Injection */}
        <Navbar setPage={setCurrentPage} currentPage={currentPage} />
        <main className="animate-fadeIn">
          {renderPageContent()}
        </main>
      </div>
      <Footer setPage={setCurrentPage} />
    </div>
  );
}