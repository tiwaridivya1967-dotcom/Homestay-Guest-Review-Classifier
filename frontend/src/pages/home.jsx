import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {
  // Mock data representing incoming reviews from booking platforms
  const sampleReviews = [
    {
      id: 1,
      title: "Perfect Stay near City Center",
      platform: "Airbnb",
      content: "The apartment was in a perfect spot and very clean. Check-in was smooth, though the Wi-Fi dropped once during peak hours."
    },
    {
      id: 2,
      title: "Great view but noisy AC",
      platform: "Booking.com",
      content: "Amazing balcony views over the park. However, the air conditioning unit in the master bedroom was rattling loudly all night."
    },
    {
      id: 3,
      title: "Cozy space, missing towels",
      platform: "Vrbo",
      content: "Super close to local cafes and very peaceful atmosphere. The host forgot to leave fresh bath towels, but resolved it quickly."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <hero />
      
      {/* Dynamic Content Section */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Recent Live Ingestions</h2>
            <p className="text-sm text-gray-500 mt-1">Review pipelines directly streamed from integrated booking engines.</p>
          </div>
          <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Operational
          </span>
        </div>
        
        {/* Responsive Grid layout containing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mt-8">
          {sampleReviews.map((review) => (
            <Card
              key={review.id} 
              title={review.title} 
              platform={review.platform} 
              content={review.content} 
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}