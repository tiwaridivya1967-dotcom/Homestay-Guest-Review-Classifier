import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-50">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Account Login</h1>
        <p className="text-lg text-gray-600">
          Secure portal access configuration placeholder. Please sign in to view your administrative tools.
        </p>
      </main>
      <Footer />
    </div>
  );
}