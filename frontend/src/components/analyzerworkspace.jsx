import React, { useState, useEffect } from 'react';

export default function AnalyzerWorkspace() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Input fields state
  const [guestName, setGuestName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("cleanliness");
  const [selectedSentiment, setSelectedSentiment] = useState("positive");

  // WEEK 6 SECURED DATA FETCHING
  useEffect(() => {
    fetch('http://localhost:5000/api/reviews', {
      headers: { 
        // FIXED SYNTAX USING EXACT STRINGS AND BACKTICKS HERE:
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to load pipeline datasets. Authentication might be invalid.");
        return res.json();
      })
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // WEEK 6 SECURED DATA CREATION
  const handleCreateReview = (e) => {
    e.preventDefault();
    const payload = {
      guest: guestName,
      rating: selectedSentiment === 'positive' ? 5 : 2,
      comment: newComment,
      theme: selectedTheme,
      sentiment: selectedSentiment
    };

    fetch('http://localhost:5000/api/reviews', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(payload)
    })
    .then(res => {
      if (!res.ok) throw new Error("Not authorized to submit feedback pipelines.");
      return res.json();
    })
    .then(addedReview => {
      setReviews([...reviews, addedReview]);
      setNewComment("");
      setGuestName("");
    })
    .catch(err => alert(err.message));
  };

  if (loading) return <div className="text-center py-20 font-semibold text-indigo-600 animate-pulse">Loading hospitality framework metrics...</div>;
  if (error) return <div className="text-center py-20 font-semibold text-red-500 bg-red-50 max-w-xl mx-auto rounded-2xl border border-red-200">⚠️ Connection Blocked: {error}</div>;

  // Quantitative Stats Calculations
  const totalReviews = reviews.length;
  const positiveCount = reviews.filter(r => r.sentiment === 'positive').length;
  const positivePercentage = totalReviews > 0 ? Math.round((positiveCount / totalReviews) * 100) : 0;

  const cleanCount = reviews.filter(r => r.theme === 'cleanliness').length;
  const hostCount = reviews.filter(r => r.theme === 'host').length;
  const locCount = reviews.filter(r => r.theme === 'location').length;

  return (
    <div className="space-y-10 animate-fadeIn text-gray-800">
      
      {/* SECTION 1: VISUAL HOMESTAY PORTFOLIO BACKGROUND CARDS */}
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Monitored Properties</h2>
          <p className="text-xs text-gray-400">Live background feeds from your active property listings</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-48 rounded-2xl overflow-hidden shadow-sm group border border-gray-100 dark:border-gray-800">
            <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80" alt="Homestay" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/30 to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-[10px] bg-emerald-500/90 font-bold px-2 py-0.5 rounded-full w-max mb-1">Active</span>
              <h4 className="font-bold text-sm">The Urban Hideaway Loft</h4>
              <p className="text-[11px] opacity-75">Cleanliness Weight: {cleanCount} reviews logged</p>
            </div>
          </div>

          <div className="relative h-48 rounded-2xl overflow-hidden shadow-sm group border border-gray-100 dark:border-gray-800">
            <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80" alt="Homestay" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/30 to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-[10px] bg-emerald-500/90 font-bold px-2 py-0.5 rounded-full w-max mb-1">Active</span>
              <h4 className="font-bold text-sm">Serene Alpine Vista Cabin</h4>
              <p className="text-[11px] opacity-75">Host Communication: {hostCount} reviews logged</p>
            </div>
          </div>

          <div className="relative h-48 rounded-2xl overflow-hidden shadow-sm group border border-gray-100 dark:border-gray-800">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" alt="Homestay" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/30 to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-[10px] bg-indigo-500/90 font-bold px-2 py-0.5 rounded-full w-max mb-1">Review Pending</span>
              <h4 className="font-bold text-sm">Coastal Breeze Beach House</h4>
              <p className="text-[11px] opacity-75">Location Analytics: {locCount} reviews logged</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: HIGHLY INFORMATIVE METRICS & STATISTICS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Hospitality Aspect Weight Matrix</h3>
            <p className="text-xs text-gray-400">Live quantitative chart distribution mapping</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-600 dark:text-gray-300 mb-1 uppercase tracking-wider">
                <span>✨ Room Cleanliness Management ({cleanCount})</span>
                <span>{totalReviews > 0 ? Math.round((cleanCount/totalReviews)*100) : 0}%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 h-6 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-full rounded-xl transition-all duration-500" style={{ width: `${totalReviews > 0 ? (cleanCount/totalReviews)*100 : 0}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-gray-600 dark:text-gray-300 mb-1 uppercase tracking-wider">
                <span>🛎️ Host Interaction Rating ({hostCount})</span>
                <span>{totalReviews > 0 ? Math.round((hostCount/totalReviews)*100) : 0}%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 h-6 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-violet-500 to-violet-600 h-full rounded-xl transition-all duration-500" style={{ width: `${totalReviews > 0 ? (hostCount/totalReviews)*100 : 0}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-gray-600 dark:text-gray-300 mb-1 uppercase tracking-wider">
                <span>📍 Location Accuracy Feedback ({locCount})</span>
                <span>{totalReviews > 0 ? Math.round((locCount/totalReviews)*100) : 0}%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 h-6 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-sky-400 to-sky-500 h-full rounded-xl transition-all duration-500" style={{ width: `${totalReviews > 0 ? (locCount/totalReviews)*100 : 0}%` }}></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-gray-100 dark:border-gray-700 pt-6 text-center">
            <div>
              <span className="block text-xl font-black text-gray-900 dark:text-white">{totalReviews}</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Processed Data</span>
            </div>
            <div>
              <span className="block text-xl font-black text-emerald-600">{positivePercentage}%</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Approval Rate</span>
            </div>
            <div>
              <span className="block text-xl font-black text-indigo-600">98.4ms</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">API Latency</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Data Ingestion Engine</h3>
          <p className="text-xs text-gray-400 mb-4">Simulate live reviewer parameters</p>
          
          <form onSubmit={handleCreateReview} className="space-y-4">
            <input type="text" placeholder="Guest Name" value={guestName} onChange={e => setGuestName(e.target.value)} required className="w-full p-3 border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900 text-sm rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            
            <div className="grid grid-cols-2 gap-2">
              <select value={selectedTheme} onChange={e => setSelectedTheme(e.target.value)} className="p-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-xs font-semibold rounded-xl text-gray-600 dark:text-gray-300">
                <option value="cleanliness">✨ Cleanliness</option>
                <option value="host">🛎️ Host</option>
                <option value="location">📍 Location</option>
              </select>
              <select value={selectedSentiment} onChange={e => setSelectedSentiment(e.target.value)} className="p-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-xs font-semibold rounded-xl text-gray-600 dark:text-gray-300">
                <option value="positive">🟢 Positive</option>
                <option value="negative">🔴 Negative</option>
              </select>
            </div>

            <textarea placeholder="Type operational review narrative here..." value={newComment} onChange={e => setNewComment(e.target.value)} required className="w-full p-3 border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900 text-sm rounded-xl h-20 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            
            <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-all text-sm shadow-md shadow-indigo-100">
              Run NLP Execution Pipeline
            </button>
          </form>
        </div>
      </div>

      {/* SECTION 3: DETAILED QUEUE STREAM MONITOR */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-gray-50/80 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
          <h3 className="font-bold text-sm text-gray-900 dark:text-white">Active Review Logs Timeline</h3>
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-1 rounded-full">Systems Linked</span>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {reviews.map(review => (
            <div key={review.id} className="p-6 hover:bg-gray-50/20 dark:hover:bg-gray-700/20 transition-colors flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">{review.guest}</h4>
                  <span className={`text-[9px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full ${review.sentiment === 'positive' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400' : 'bg-rose-50 text-rose-700 border border-rose-100 dark:bg-rose-950/30 dark:text-rose-400'}`}>
                    {review.sentiment}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 italic">"{review.comment}"</p>
              </div>
              <span className="text-xs font-bold bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-xl border border-gray-200/60 dark:border-gray-700 capitalize">
                {review.theme}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}