import React from 'react';
import { ArrowDownCircle, Download } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="block">Senior iOS</span>
                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Senior iOS Developer with 4+ years of experience designing and building high-performance iOS applications using Swift, SwiftUI, UIKit, and Objective-C. Proven track record in developing secure payment systems and blockchain applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#projects" 
                  className="btn-primary"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="btn-secondary"
                >
                  Get In Touch
                </a>
                <a 
                  href="/documents/cv.pdf" 
                  download="Muhammad_Asad_Sr_iOS_Developer_CV.pdf"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <div className="relative w-full max-w-md">
              <img 
                src="images/asad.jpg" 
                alt="Muhammad Asad" 
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto border-4 border-blue-500 shadow-xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full z-[-1]"></div>
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-indigo-100 dark:bg-indigo-900/20 rounded-full z-[-1]"></div>
            </div>
          </div>
        </div>
        
        <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;