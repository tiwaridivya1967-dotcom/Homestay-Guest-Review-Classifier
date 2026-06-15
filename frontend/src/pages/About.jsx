import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow max-w-4xl w-full mx-auto px-6 py-16">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
            About the Classifier Engine
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            StaySense is an automated machine-learning intelligence router built to save hospitality operators hundreds of hours. This platform leverages specialized natural language tokenization strategies to map unstructured user-written feedback text straight into core diagnostic system operational tags.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}