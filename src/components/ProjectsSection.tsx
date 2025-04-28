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
  inDevelopment?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Going Solo",
    description: "A social networking app for solo travelers to match, chat, and build local communities. Features include chat replies, emoji reactions, groups, trip planning, and location-based discovery.",
    image: "images/goingSolo.png",
    technologies: ["Swift", "UIKit", "Firebase", "MapKit", "CoreLocation", "WebSocket", "In-App Purchase", "AdMob"],
    appStoreLink: "https://apps.apple.com/us/app/going-solo-travel-friends/id1671515758",
    featured: true
  },
  {
    id: 2,
    title: "HiiKER",
    description: "A comprehensive hiking maps app with trail discovery, planning tools, and offline navigation. Features include GPX file support, offline maps, and multi-language support.",
    image: "images/hiiker.png",
    technologies: ["Swift", "MapKit", "CoreLocation", "CoreData", "In-App Purchase", "Offline Maps", "GraphQL", "Localization"],
    appStoreLink: "https://apps.apple.com/us/app/hiiker-the-hiking-maps-app/id1470810597",
    featured: true
  },
  {
    id: 3,
    title: "Pryvate Messenger",
    description: "An ultra-secure communication app with encrypted messaging, voice/video calls, and burner phone capabilities. Features end-to-end encryption and remote data wipe.",
    image: "images/pryvate.png",
    technologies: ["Swift", "Objective-C", "Linphone SDK", "Encryption", "VoIP", "Apple Pay", "PayPal", "In-App Purchase", "Offnet Calling"],
    appStoreLink: "https://apps.apple.com/us/app/pryvate-messenger/id914948581",
    featured: true
  },
  {
    id: 4,
    title: "Officetree",
    description: "A business communication app providing professional calling, texting, and multi-account management using PlivoVoiceKit for VoIP functionality.",
    image: "images/officetree.png",
    technologies: ["Swift", "UIKit", "PlivoVoiceKit", "CoreTelephony", "CallKit", "VoIP", "Bluetooth"],
    appStoreLink: "https://apps.apple.com/us/app/officetree-phone/id6444354321",
    featured: true
  },
  {
    id: 5,
    title: "Reizor",
    description: "A next-gen 360° video platform for immersive VR experiences, featuring 8K live streaming and 6K recordings with interactive social features.",
    image: "images/reizor.png",
    technologies: ["Swift", "UIKit", "AVFoundation", "SceneKit", "WebRTC", "360° Video Player"],
    appStoreLink: "https://apps.apple.com/us/app/reizor/id6469035345",
    featured: true
  },
  {
    id: 6,
    title: "1st-Response",
    description: "A specialized audio dictation app for emergency response professionals with secure cloud sync and optimized audio compression.",
    image: "images/1st-response.png",
    technologies: ["Swift", "UIKit", "AVFoundation", "AWS", "CoreAudio"],
    appStoreLink: "https://apps.apple.com/us/app/1st-response/id1663503501",
    featured: true
  },
  {
    id: 7,
    title: "Taparoo",
    description: "A modern POS system enabling seamless Tap-to-Pay and terminal transactions. Developed Tap-to-Pay on iPhone functionality for contactless credit/debit card payments with optimized transaction flows.",
    image: "images/tap2Pay.jpg",
    technologies: ["Swift", "PassKit", "CoreNFC", "Security"],
    appStoreLink: "#",
    featured: false,
    inDevelopment: true
  },
  {
    id: 8,
    title: "Cake Companion",
    description: "An inventory management system for automated retail vending solutions. Features barcode-scanning inventory system with machine-specific product allocation and real-time sync.",
    image: "https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg",
    technologies: ["SwiftUI", "CoreData", "AVFoundation", "Networking"],
    appStoreLink: "#",
    featured: false,
    inDevelopment: true
  },
  {
    id: 9,
    title: "CakeBox POS",
    description: "A specialized point-of-sale system for bakeries with integrated inventory management. Built with Swift/SwiftUI for intuitive cake sales and inventory workflows.",
    image: "images/cakeBox.jpg",
    technologies: ["SwiftUI", "Medusa", "Charts", "CoreData"],
    appStoreLink: "#",
    featured: false,
    inDevelopment: true
  },
  {
    id: 10,
    title: "Pay4Money",
    description: "A crypto payment solution enabling QR/NFC transactions with vendor discovery. Features secure crypto payments, real-time vendor location services, and seamless blockchain transactions.",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
    technologies: ["Swift", "Web3", "CoreNFC", "MapKit"],
    appStoreLink: "#",
    featured: false,
    inDevelopment: true
  }
];

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('featured');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  const handleAppStoreClick = (project: Project, e: React.MouseEvent) => {
    if (project.inDevelopment) {
      e.preventDefault();
      setPopupMessage(`${project.title} is currently in development. Stay tuned for the release!`);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

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
              onClick={() => setActiveFilter('featured')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'featured' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Featured
            </button>
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
          </div>
        </div>
        
        {/* Popup Notification */}
        {showPopup && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-down">
            {popupMessage}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {project.inDevelopment && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    In Development
                  </div>
                )}
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
                      onClick={(e) => handleAppStoreClick(project, e)}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                    >
                      <ExternalLink size={16} className="mr-1" /> View in App Store
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