import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 via-white to-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Feature Badge */}
        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
          AI-Powered Sentiment Analysis for Hosts
        </span>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight max-w-4xl mx-auto leading-tight">
          Turn Guest Reviews into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Actionable Insights</span> Instantly
        </h1>
        
        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Automatically track sentiment, categorize themes like cleanliness or location, draft AI replies, and get smart improvement tips to boost your booking rates.
        </p>
        
        {/* CTA Group */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#signup" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-indigo-200 transition-all flex items-center justify-center gap-2">
            Start Analyzing Free <i className="fa-solid fa-arrow-right text-sm"></i>
          </a>
          <a href="#demo" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-xl border border-gray-200 transition-all flex items-center justify-center gap-2">
            <i class="fa-solid fa-play text-gray-400 text-sm"></i> Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}