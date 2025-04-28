import React from 'react';
import { Calendar, Award, Briefcase, BookOpen } from 'lucide-react';

interface Experience {
  id: number;
  period: string;
  company: string;
  role: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    period: "2023 - PRESENT",
    company: "o9 Tech",
    role: "Senior iOS Developer",
    description: "Led end-to-end development of iOS apps, focusing on fintech and retail use cases using Swift, SwiftUI, UIKit and Objective-C. Integrated Tap2Pay, Apple Pay, In-App Purchase, POS, NFC, ScreenTime, Maps and Blockchain. Conduct regular code reviews, mentor junior developers, and enforce architectural best practices."
  },
  {
    id: 2,
    period: "2022 - 2023",
    company: "Coder Crew LLC",
    role: "iOS Developer",
    description: "Built and shipped blockchain-powered wallet and payment and social apps using Swift and UIKit. Worked on a VR-powered platform for fan engagement and social interaction. Contributed to app performance optimization and bug fixing across multiple projects."
  },
  {
    id: 3,
    period: "2020 - 2022",
    company: "Elentra Tech",
    role: "iOS Developer",
    description: "Developed iOS apps across social, educational, and travel categories from scratch. Implemented real-time chat, map-based hiking routes, and location-based earthquake alerts. Participated in Agile processes, wrote scalable code, and deployed updates to the App Store."
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-2/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate iOS developer with over 4 years of experience crafting beautiful, 
              intuitive, and high-performance mobile applications that users love.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in iOS development began with a fascination for creating software that 
              millions of people could carry in their pockets. This passion drove me to master 
              Swift, UIKit, and now SwiftUI, along with the entire iOS ecosystem.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and creating apps that not only look 
              great but also provide exceptional user experiences. My approach combines technical 
              expertise with an eye for design and a deep understanding of user needs.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">4+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">20+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Apps Developed</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">12+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Happy Clients</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">3+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Open-Source Contributions</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 mt-10 lg:mt-0">
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Professional Experience</h3>
            
            <div className="space-y-10">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 before:absolute before:left-[7px] before:top-[6px] before:bottom-[-16px] before:w-[1px] before:bg-gray-300 dark:before:bg-gray-700 last:before:hidden">
                  <div className="absolute left-0 top-1 w-3.5 h-3.5 rounded-full bg-blue-500"></div>
                  
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                  <div className="flex items-center mb-2">
                    <Briefcase size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">{exp.company}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Education & Publications</h3>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Award size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Science in Software Engineering</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-1">UNIVERSITY OF GUJRAT, 2015 - 2019</p>
                <p className="text-gray-600 dark:text-gray-400">CGPA: 3.21</p>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-3">
                    <BookOpen size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Publications</h4>
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-md font-semibold text-gray-800 dark:text-gray-200">iOS Development using UIKit</h5>
                    <p className="text-gray-600 dark:text-gray-400">Published on Apple Books</p>
                    <ul className="space-y-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                      <li>Authored a 300-page comprehensive guide covering UIKit fundamentals to advanced techniques.</li>
                      <li>Translated personal revision materials into a structured resource with real-world examples and best practices.</li>
                      <li>Covers modern UIKit updates, view controllers, and UI components for building production-grade apps.</li>
                    </ul>
                    <a 
                      href="https://books.apple.com/us/book/id6448717308" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-2"
                    >
                      View in Apple Books 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;