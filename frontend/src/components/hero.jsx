import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-white overflow-hidden text-gray-800">
      
      {/* 1. HERO MAIN SECTION */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Colorful Blurs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <div className="space-y-8 text-center lg:text-left z-10">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-sm">
              ✨ Next-Gen AI Guest Analytics Engine
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-none">
              Transform Review Streams Into <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent font-serif italic">Operational Revenue</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Inject cutting-edge Natural Language Processing into your homestay ecosystem. Isolate property critical faults, read guest sentiment instantly, and generate automated responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/dashboard" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold tracking-wide uppercase text-sm shadow-xl shadow-purple-100 hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center">
                Launch Live Dashboard 🚀
              </Link>
            </div>
          </div>

          {/* Right Picture Mosaic Column */}
          <div className="grid grid-cols-12 gap-4 relative">
            <div className="col-span-8 rounded-3xl overflow-hidden shadow-xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500 h-64 sm:h-80">
              <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80" alt="Homestay" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-4 rounded-3xl overflow-hidden shadow-lg border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 h-40 mt-12">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80" alt="Homestay" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-4 rounded-3xl overflow-hidden shadow-lg border-4 border-white transform -rotate-6 hover:rotate-0 transition-transform duration-500 h-44 -mt-16">
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80" alt="Homestay" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-8 rounded-3xl overflow-hidden shadow-xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 h-52 -mt-4">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="Homestay" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-purple-100 p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white text-lg font-bold">🎯</div>
              <div>
                <span className="block text-xs font-black uppercase text-gray-400 tracking-wider">Precision Metric</span>
                <span className="block text-sm font-black text-gray-900">99.2% NLP Match Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. GLOWING METRICS TICKER BAR */}
      <div className="bg-gradient-to-r from-indigo-950 via-purple-950 to-gray-900 text-white py-10 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <div className="text-3xl font-black bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">1.2M+</div>
            <div className="text-xs uppercase font-bold text-gray-400 tracking-widest">Reviews Tracked</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">45k+</div>
            <div className="text-xs uppercase font-bold text-gray-400 tracking-widest">Active Homestays</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">4.8★</div>
            <div className="text-xs uppercase font-bold text-gray-400 tracking-widest">Satisfaction Score</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">&lt; 0.2s</div>
            <div className="text-xs uppercase font-bold text-gray-400 tracking-widest">Processing Time</div>
          </div>
        </div>
      </div>

      {/* 3. NEW FEATURE: VISUAL SPOTLIGHT GRID (INFORMATIVE SECTIONS + PICTURES) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Row 1: Sentiment Intelligence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Feature Highlight 01</div>
            <h2 className="text-3xl font-black text-gray-900">Advanced Sentiment Extraction Matrix</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Don't just read words—understand emotional intent. Our localized AI parsing cluster separates generic praise from deep dissatisfaction, categorizing incoming streams instantly into structured positive and negative score sheets.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r-xl">
              <p className="text-xs font-medium text-indigo-900 italic">"Isolates room, dining, cleanliness, and stay comfort attributes in under 200 milliseconds."</p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg h-72 border border-gray-100">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" alt="Luxury Hotel Suite" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        {/* Row 2: Aspect Categorization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="rounded-3xl overflow-hidden shadow-lg h-72 border border-gray-100 md:order-last">
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="Cozy Homestay Bed" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="space-y-4">
            <div className="text-xs font-bold text-pink-600 uppercase tracking-widest">Feature Highlight 02</div>
            <h2 className="text-3xl font-black text-gray-900">Dynamic Property Aspect Sorting</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our framework automatically routes critical complaints directly to your maintenance charts. It scans blocks for key operational segments including **Cleanliness standards**, **Host communication response accuracy**, and **Geographic convenience parameters**.
            </p>
            <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-xl">
              <p className="text-xs font-medium text-pink-900 italic">"Ensures hospitality property managers can fix critical facility bottlenecks before they impact booking ratios."</p>
            </div>
          </div>
        </div>

      </div>

      {/* 4. PRICING PACKAGES SECTION */}
      <div className="bg-gray-50/50 border-t border-b border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">Flexible Enterprise Packages</h2>
            <p className="text-sm text-gray-400 mt-2">Scale your automated hospitality analysis workflows smoothly as your luxury rental ecosystem expands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card Tier 1 */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm group hover:shadow-md transition-all">
              <div className="h-40 relative">
                <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=500&q=80" alt="Boutique Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-6 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Single Unit</span>
              </div>
              <div className="p-6 pt-2 space-y-4 flex-grow">
                <h3 className="text-xl font-bold text-gray-900">Starter Core</h3>
                <div className="text-3xl font-black text-gray-900">$29<span className="text-xs font-normal text-gray-400">/mo</span></div>
                <ul className="text-xs text-gray-500 space-y-2.5 border-t border-gray-100 pt-4">
                  <li>🟢 Real-time Sentiment Tagging</li>
                  <li>🟢 Up to 500 reviews monthly</li>
                  <li>❌ Custom AI Draft Templates</li>
                </ul>
              </div>
              <div className="p-6 pt-0"><button className="w-full bg-gray-50 text-gray-800 font-bold py-3 rounded-xl text-xs uppercase border border-gray-200">Get Started</button></div>
            </div>

            {/* Card Tier 2 */}
            <div className="bg-white rounded-3xl border-2 border-indigo-600 overflow-hidden flex flex-col justify-between shadow-xl relative transform -translate-y-2 group">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-10 shadow-sm">Popular</div>
              <div className="h-40 relative">
                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80" alt="Luxury Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-6 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Multi Property</span>
              </div>
              <div className="p-6 pt-2 space-y-4 flex-grow">
                <h3 className="text-xl font-bold text-gray-900">Professional Hub</h3>
                <div className="text-3xl font-black text-indigo-600">$79<span className="text-xs font-normal text-gray-400">/mo</span></div>
                <ul className="text-xs text-gray-500 space-y-2.5 border-t border-gray-100 pt-4">
                  <li>🟢 Automated Theme Isolation</li>
                  <li>🟢 Unlimited review streams</li>
                  <li>🟢 Immediate AI Response Drafts</li>
                </ul>
              </div>
              <div className="p-6 pt-0"><Link to="/dashboard" className="block text-center w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold py-3 rounded-xl text-xs uppercase shadow-md shadow-purple-100">Deploy Premium System</Link></div>
            </div>

            {/* Card Tier 3 */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm group hover:shadow-md transition-all">
              <div className="h-40 relative">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80" alt="Resort" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-6 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Hotels/Chains</span>
              </div>
              <div className="p-6 pt-2 space-y-4 flex-grow">
                <h3 className="text-xl font-bold text-gray-900">Enterprise Cloud</h3>
                <div className="text-3xl font-black text-gray-900">$149<span className="text-xs font-normal text-gray-400">/mo</span></div>
                <ul className="text-xs text-gray-500 space-y-2.5 border-t border-gray-100 pt-4">
                  <li>🟢 Dedicated Cluster Pipelines</li>
                  <li>🟢 Webhook triggers to PMS systems</li>
                  <li>🟢 24/7 Priority Agent精 SLA</li>
                </ul>
              </div>
              <div className="p-6 pt-0"><button className="w-full bg-gray-50 text-gray-800 font-bold py-3 rounded-xl text-xs uppercase border border-gray-200">Contact Sales</button></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}