// components/Navbar.jsx
export default function Navbar({ setPage, currentPage }) {
  const links = ['home', 'dashboard', 'about'];

  return (
    <nav className="flex items-center justify-between p-6 bg-white border-b">
      <div className="text-xl font-bold text-indigo-600">StaySense</div>
      <div className="flex gap-6">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => setPage(link)}
            className={`capitalize text-sm font-medium transition-colors ${
              currentPage === link ? 'text-indigo-600 font-semibold' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {link}
          </button>
        ))}
      </div>
      <button 
        onClick={() => setPage('login')} 
        className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-all"
      >
        Sign In
      </button>
    </nav>
  );
}