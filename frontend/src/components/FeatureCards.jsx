import React from 'react';

export default function FeatureCards() {
  return (
    <section className="py-12 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Sentiment Analysis */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-5">
              <i className="fa-solid fa-face-smile text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Sentiment</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Instantly tag reviews as Positive, Neutral, or Negative to monitor guest satisfaction at a glance.
            </p>
            <div className="bg-gray-50 p-3 rounded-lg flex items-center justify-between text-xs font-semibold">
              <span className="text-emerald-700 bg-emerald-100 px-2 py-1 rounded">Positive 84%</span>
              <span className="text-gray-400">128 Reviews</span>
            </div>
          </div>

          {/* Card 2: Theme Classification */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-5">
              <i className="fa-solid fa-tags text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Theme Recognition</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Sort review text by critical subjects like <span className="font-medium">Host hospitality</span>, <span className="font-medium">Cleanliness</span>, or <span className="font-medium">Location convenience</span>.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"><i className="fa-solid fa-user text-[10px] mr-1"></i> Host</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"><i className="fa-solid fa-sparkles text-[10px] mr-1"></i> Cleanliness</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"><i className="fa-solid fa-map-pin text-[10px] mr-1"></i> Location</span>
            </div>
          </div>

          {/* Card 3: AI Responses & Action Ideas */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-5">
              <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Auto-Replies</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Generate professional personalized responses and receive tailored property improvement recommendations.
            </p>
            <div className="bg-amber-50/50 border border-amber-100 p-3 rounded-lg text-xs text-amber-900">
              <i className="fa-solid fa-lightbulb text-amber-600 mr-1"></i> <strong>Idea:</strong> Guests noted slow Wi-Fi. Consider upgrading router.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}