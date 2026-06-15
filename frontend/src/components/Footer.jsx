// components/Footer.jsx
export default function Footer({ setPage }) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>© 2026 StaySense Inc. All rights reserved.</div>
        <div className="flex gap-4 text-sm">
          <button onClick={() => setPage('home')} className="hover:text-white">Home</button>
          <button onClick={() => setPage('about')} className="hover:text-white">Architecture</button>
          <button onClick={() => setPage('dashboard')} className="hover:text-white">Console</button>
        </div>
      </div>
    </footer>
  );
}