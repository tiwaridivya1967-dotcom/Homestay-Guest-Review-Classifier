import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-50">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to the Homestay Guest Review Classifier. This application helps analyze and categorize guest feedback efficiently.
        </p>
      </main>
      <Footer />
    </div>
  );
}