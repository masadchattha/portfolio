import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Muhammad <span className="font-light">Asad</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="#projects" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a href="#about" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Contact
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen py-4 shadow-md' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          <a
            href="#home"
            className="py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#about"
            className="py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="py-2 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;