import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-4 inline-block">
              Muhammad <span className="font-light">Asad</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs mt-3">
              Creating innovative iOS applications with a focus on beautiful design and exceptional user experience.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/masadchattha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/masadchattha/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/masadchattha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:m.asad.chatthaa@gmail.com" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">iOS Development</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">UI/UX Design</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">App Architecture</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Consultation</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Code Review</a>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail size={16} className="mr-2" />
                  <a href="mailto:m.asad.chatthaa@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    m.asad.chatthaa@gmail.com
                  </a>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+923051157776" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +92 305 1157776
                  </a>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Lahore, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} - All rights reserved
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;