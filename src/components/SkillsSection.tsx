import React from 'react';
import { Code, Layers, Database, Zap, PieChart, ShieldCheck } from 'lucide-react';

interface Skill {
  id: number;
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skills: Skill[] = [
  {
    id: 1,
    category: "Programming Languages",
    icon: <Code size={24} />,
    skills: ["Swift", "Objective-C", "SwiftUI", "UIKit", "JavaScript/TypeScript", "C/C++"]
  },
  {
    id: 2,
    category: "Frameworks & Tools",
    icon: <Layers size={24} />,
    skills: ["StoreKit/Apple Pay", "Screen Time", "NFC", "CoreData", "CoreML", "Combine"]
  },
  {
    id: 3,
    category: "Backend & Database",
    icon: <Database size={24} />,
    skills: ["Firebase", "Supabase", "Medusa", "CoreData", "RESTful APIs", "GraphQL"]
  },
  {
    id: 4,
    category: "Development Methods",
    icon: <Zap size={24} />,
    skills: ["Agile Development", "Test-Driven Development", "CI/CD", "Git", "Code Reviews"]
  },
  {
    id: 5,
    category: "Analytics & Monitoring",
    icon: <PieChart size={24} />,
    skills: ["Firebase Analytics", "Crashlytics", "App Store Connect", "TestFlight", "TestFairy"]
  },
  {
    id: 6,
    category: "Security & Performance",
    icon: <ShieldCheck size={24} />,
    skills: ["App Security", "SSL Pinning", "Keychain", "Performance Optimization", "Memory Management"]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            With over 4 years of iOS development experience, I've mastered these technologies and methodologies to create exceptional mobile experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div 
              key={skillGroup.id} 
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skillGroup.category}</h3>
              </div>
              
              <ul className="space-y-2">
                {skillGroup.skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skill meter section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white">Core Competencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Swift & SwiftUI</span>
                  <span className="text-gray-600 dark:text-gray-400">100%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">UIKit</span>
                  <span className="text-gray-600 dark:text-gray-400">100%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Objective-C</span>
                  <span className="text-gray-600 dark:text-gray-400">100%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Paywall Integration</span>
                  <span className="text-gray-600 dark:text-gray-400">100%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Fintech Development</span>
                  <span className="text-gray-600 dark:text-gray-400">90%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">AI & Machine Learning</span>
                  <span className="text-gray-600 dark:text-gray-400">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Blockchain & dApps</span>
                  <span className="text-gray-600 dark:text-gray-400">70%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Deployment & CI/CD</span>
                  <span className="text-gray-600 dark:text-gray-400">100%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;