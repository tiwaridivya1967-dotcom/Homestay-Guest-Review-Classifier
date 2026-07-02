import Navbar from '../components/Navbar';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Guest Analytics Dashboard</h1>
        <p className="text-lg text-gray-600">
          [Placeholder] This is the dashboard view layout. Analytics metrics and review classifications will render here.
        </p>
      </div>
    </div>
  );
}