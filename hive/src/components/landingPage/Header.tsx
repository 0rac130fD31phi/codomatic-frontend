import React from "react";

export const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-black bg-opacity-80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-white font-bold text-2xl">Haive</div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-gray-300 hover:text-white">
            Docs
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Blog
          </a>
          <button className="px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-black rounded-lg hover:scale-105">
            Try Demo
          </button>
        </nav>
      </div>
    </header>
  );
};
export default Header;