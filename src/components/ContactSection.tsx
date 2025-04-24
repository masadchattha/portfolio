import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    date: '',
    address: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const getLocationFromTimezone = (): string => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!timeZone) return "Unknown Location";
    
    // Special handling for Pakistan
    if (timeZone === "Asia/Karachi") {
      return "Lahore, Pakistan";  // Since you're in Lahore
    }
    
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    const parts = timeZone.split('/');
    if (parts.length < 2) return parts[0];
    
    // Get city and continent
    const city = parts[parts.length - 1].replace(/_/g, ' ');
    
    // Try to get country name from timezone
    try {
      // Extract country code from timezone and convert to country name
      const countryCode = timeZone.split('/')[1];
      if (countryCode && countryCode.length === 2) {
        const country = regionNames.of(countryCode.toUpperCase());
        return `${city}, ${country}`;
      }
    } catch (e) {
      console.debug('Could not determine country from timezone');
    }
    
    // Fallback to city and continent if country detection fails
    return `${city}, ${parts[0]}`;
  };
  
  const formatDate = (date: Date): string => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const timeZoneAbbr = new Date()
      .toLocaleTimeString('en-US', { timeZoneName: 'short' })
      .split(' ')[2];
    
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} at ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} (${timeZoneAbbr})`;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      if (form.current) {
        // Get current date and location
        const formattedDate = formatDate(new Date());
        const userLocation = getLocationFromTimezone();
        
        // Add hidden inputs before sending
        const dateInput = document.createElement('input');
        dateInput.type = 'hidden';
        dateInput.name = 'date';
        dateInput.value = formattedDate;
        form.current.appendChild(dateInput);
        
        const addressInput = document.createElement('input');
        addressInput.type = 'hidden';
        addressInput.name = 'address';
        addressInput.value = userLocation;
        form.current.appendChild(addressInput);
        
        await emailjs.sendForm(
          'service_portfolio',
          'template_5vmuowg',
          form.current,
          'UuFcWfx_5WsieXEtJ'
        );
        
        // Remove the temporary inputs
        form.current.removeChild(dateInput);
        form.current.removeChild(addressInput);
        
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '', date: '', address: '' });
        
        // Reset submission state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Looking for a senior iOS developer to strengthen your team or have an exciting project in mind? With expertise in fintech, blockchain, and modern iOS development, I'm ready to bring value to your next venture. Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                    <a href="mailto:m.asad.chatthaa@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                      m.asad.chatthaa@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                    <a href="tel:+923051157776" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                      +92 305 1157776
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lahore, Pakistan
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Availability</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I'm open to full-time positions, freelance projects, and consulting opportunities. I ensure prompt communication with a response time of under 24 hours.
                </p>
                
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm">
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    <div className="text-gray-500 dark:text-gray-400">Mon</div>
                    <div className="text-gray-500 dark:text-gray-400">Tue</div>
                    <div className="text-gray-500 dark:text-gray-400">Wed</div>
                    <div className="text-gray-500 dark:text-gray-400">Thu</div>
                    <div className="text-gray-500 dark:text-gray-400">Fri</div>
                    <div className="text-gray-500 dark:text-gray-400">Sat</div>
                    <div className="text-gray-500 dark:text-gray-400">Sun</div>
                    
                    <div className="text-green-600 dark:text-green-400">✓</div>
                    <div className="text-green-600 dark:text-green-400">✓</div>
                    <div className="text-green-600 dark:text-green-400">✓</div>
                    <div className="text-green-600 dark:text-green-400">✓</div>
                    <div className="text-green-600 dark:text-green-400">✓</div>
                    <div className="text-gray-400 dark:text-gray-600">−</div>
                    <div className="text-gray-400 dark:text-gray-600">−</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full z-0"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white relative z-10">Send Message</h3>
              
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 text-red-800 dark:text-red-400">
                  <p className="font-medium">{error}</p>
                </div>
              )}
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center text-green-800 dark:text-green-400">
                  <div className="mr-3 bg-green-100 dark:bg-green-800 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;