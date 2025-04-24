import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jonathan Parker-Bray",
    role: "Director",
    company: "Pryvate Technologies Ltd",
    text: "Working with this developer was an absolute pleasure. They delivered our communication app 'Pryvate Messenger' ahead of schedule and exceeded all our expectations. The app's performance and design are outstanding.",
    avatar: "/images/jonathan.jpg"
  },
  {
    id: 2,
    name: "Gordon Seay",
    role: "Director",
    company: "Officetree Corporation",
    text: "This developer transformed our concept into a polished iOS app 'Officetree' that our users love. Their attention to detail and deep understanding of the iOS platform made all the difference.",
    avatar: "/images/gordon.jpeg"
  },
  {
    id: 3,
    name: "Ashley Pokorski",
    role: "Founder CEO",
    company: "Going Solo",
    text: "Exceptional technical skills combined with an eye for design. Our Going Solo app not only functions flawlessly but looks beautiful. The animations and transitions created make the experience truly special.",
    avatar: "/images/ashley.png"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's what clients and collaborators have to say about my work and approach to iOS development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 -right-10 w-20 h-20 text-blue-400 dark:text-blue-500 opacity-20">
            <Quote size={80} />
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900">
                  <img 
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-blue-600'
                      : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;