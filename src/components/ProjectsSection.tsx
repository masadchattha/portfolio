import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  appStoreLink?: string;
  githubLink?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FitnessTracker Pro",
    description: "A comprehensive fitness tracking app with workout plans, nutrition tracking, and progress visualization.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Swift", "SwiftUI", "CoreData", "HealthKit"],
    appStoreLink: "#",
    featured: true
  },
  {
    id: 2,
    title: "MindfulMoments",
    description: "Meditation and mindfulness app with guided sessions, breathing exercises, and sleep stories.",
    image: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Swift", "UIKit", "AVFoundation", "CoreAnimation"],
    appStoreLink: "#",
    featured: true
  },
  {
    id: 3,
    title: "RecipeVault",
    description: "A recipe management app with meal planning, shopping lists, and AI-powered recipe suggestions.",
    image: "https://images.pexels.com/photos/6941027/pexels-photo-6941027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Swift", "Combine", "CoreML", "Firebase"],
    appStoreLink: "#",
    featured: true
  },
  {
    id: 4,
    title: "TravelBuddy",
    description: "An all-in-one travel companion with itinerary planning, local recommendations, and offline maps.",
    image: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Swift", "MapKit", "CoreLocation", "CloudKit"],
    appStoreLink: "#",
    featured: false
  }
];

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of iOS applications I've developed, showcasing my expertise in creating beautiful and functional user experiences.
          </p>
          
          <div className="mt-8 flex justify-center space-x-4">
            <button 
              onClick={() => setActiveFilter('all')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveFilter('featured')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'featured' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Featured
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.appStoreLink && (
                    <a 
                      href={project.appStoreLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                    >
                      <ExternalLink size={16} className="mr-1" /> App Store
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 flex items-center"
                    >
                      <Github size={16} className="mr-1" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;