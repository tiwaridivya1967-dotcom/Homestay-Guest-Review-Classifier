import React, { useState } from 'react';

export default function AnalyzerWorkspace() {
  const [reviewText, setReviewText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!reviewText.trim()) return;

    setLoading(true);

    // Simulated API response delay (We will connect real AI here next!)
    setTimeout(() => {
      setResult({
        sentiment: "Negative",
        score: "88% confidence",
        themes: [
          { name: "Host Communication", status: "Negative", desc: "Delayed check-in response" },
          { name: "Cleanliness", status: "Positive", desc: "Spotless bedroom and linens" },
          { name: "Location", status: "Positive", desc: "Great walking distance to downtown" }
        ],
        aiReply: "Thank you for sharing your experience. We are thrilled you loved the clean rooms and great location! However, we sincerely apologize for the delay during check-in. We have implemented an automated lockbox system to ensure seamless entry for future guests.",
        improvements: [
          "Install an electronic smart lock to eliminate physical key handoff delays.",
          "Send check-in instructions automatically 24 hours prior to arrival."
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm max-w-5xl mx-auto overflow-hidden my-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
        
        {/* Left Side: Input Form */}
        <div className="p-6 sm:p-8 bg-gray-50/50">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Analyze a Guest Review</h3>
          <p className="text-sm text-gray-500 mb-6">Paste a review from Airbnb, Booking.com, or Vrbo to instantly extract intelligence.</p>
          
          <form onSubmit={handleAnalyze} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Review Text</label>
              <textarea
                rows="6"
                className="w-full p-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-sm resize-none"
                placeholder="The apartment was in a perfect spot and very clean. However, the host didn't reply to my messages about the check-in code for three hours..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={loading || !reviewText.trim()}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white font-medium py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-spinner animate-spin"></i> Analyzing with AI...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-wand-magic-sparkles"></i> Process Review
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Side: AI Results Panel */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          {!result && !loading && (
            <div className="flex flex-col items-center justify-center text-center h-full py-12 text-gray-400">
              <i className="fa-solid fa-chart-pie text-4xl mb-3 text-gray-300"></i>
              <p className="text-sm font-medium">Ready for input</p>
              <p className="text-xs max-w-xs mt-1">Submit a review on the left to see sentiment breakdown and AI responses.</p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center text-center h-full py-12">
              <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
              <p className="text-sm font-medium text-gray-600">Reading context, tagging themes, and drafting answers...</p>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-6 animate-fadeIn">
              {/* Sentiment & Score */}
              <div className="flex justify-between items-center bg-red-50 border border-red-100 p-4 rounded-xl">
                <div>
                  <span className="block text-xs font-semibold text-red-700 uppercase">Overall Sentiment</span>
                  <span className="text-lg font-bold text-red-900">{result.sentiment} Issues Identified</span>
                </div>
                <span className="text-xs bg-red-100 text-red-800 px-2.5 py-1 rounded-full font-medium">{result.score}</span>
              </div>

              {/* Theme Breakdown */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Theme Tags</h4>
                <div className="space-y-2">
                  {result.themes.map((theme, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                      <span className="font-medium text-gray-700">{theme.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded font-medium ${theme.status === 'Positive' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                        {theme.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Draft Response */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">AI-Generated Reply</h4>
                <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl text-sm text-gray-700 relative group">
                  <p className="italic leading-relaxed">"{result.aiReply}"</p>
                  <button 
                    onClick={() => navigator.clipboard.writeText(result.aiReply)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-indigo-600 bg-white p-1 rounded border border-gray-100 shadow-sm transition-colors text-xs"
                    title="Copy to clipboard"
                  >
                    <i className="fa-regular fa-copy"></i> Copy
                  </button>
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Recommended Fixes</h4>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  {result.improvements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <i className="fa-solid fa-lightbulb text-amber-500 mt-0.5 text-xs"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}