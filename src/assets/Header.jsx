// Header.jsx
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent text-white/80 px-4 py-4 lg:px-16 lg:py-5">
      <div className="flex justify-between items-center gap-10 z-50">
        <h1 className="text-2xl lg:text-3xl font-bold font-mono">Newless</h1>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:underline font-serif text-xl lg:text-base">Home</a>
          <a href="#" className="hover:underline font-serif text-xl lg:text-base">About</a>
          <a href="#" className="hover:underline font-serif text-xl lg:text-base">Contact</a>
        </div>
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={toggleMenu}
        >
          <div
            className={`bg-white mb-2 h-1 w-8 transition-transform duration-300 ${
              isOpen ? 'transform rotate-45 translate-y-1 w-6' : ''
            }`}
          />
          <div
            className={`bg-white mb-2 h-1 w-8 transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <div
            className={`bg-white h-1 w-8 transition-transform duration-300 ${
              isOpen ? 'transform -rotate-45 -translate-y-1 w-6' : ''
            }`}
          />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="flex flex-col space-y-2">
            <a href="#" className="block p-2 hover:bg-gray-700 font-serif text-xl lg:text-base">Home</a>
            <a href="#" className="block p-2 hover:bg-gray-700 font-serif text-xl lg:text-base">About</a>
            <a href="#" className="block p-2 hover:bg-gray-700 font-serif text-xl lg:text-base">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
