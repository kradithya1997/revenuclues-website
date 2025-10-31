import { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const certificates = [
    {
      title: 'HubSpot Revenue Operations Certified',
      image: 'https://raw.githubusercontent.com/kradithya1997/revenueclues-assets/main/Revops%20certificate.png'
    },
    {
      title: 'HubSpot Reporting & Analytics Certified',
      image: 'https://raw.githubusercontent.com/kradithya1997/revenueclues-assets/main/Hubspot%20reporting%20certificate.png'
    },
    {
      title: 'Product Analytics Certified (Product School)',
      image: 'https://raw.githubusercontent.com/kradithya1997/revenueclues-assets/main/PA%20Certificate.png'
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, certificates.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackToTop(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef} 
      id="certifications" 
      className="min-h-screen flex items-center justify-center bg-[#F9F9F9] py-12 sm:py-16 md:py-20 snap-start relative"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Responsive text sizing */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1F] text-center mb-4 sm:mb-6 md:mb-8">
          <span className="chalk-underline">Certifications</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
          Certified across RevOps, Reporting, and Product Analytics — so your insights come from both experience and expertise.
        </p>

        {/* Carousel - Fixed width issues */}
        <div
          className="relative overflow-hidden w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certificates.map((cert, index) => (
              <div key={index} className="min-w-full flex-shrink-0 px-2 md:px-4">
                <div className="bg-white p-4 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Responsive title */}
                  <h3 className="text-lg md:text-2xl font-bold text-[#1F1F1F] mb-4 md:mb-6 text-center">
                    {cert.title}
                  </h3>
                  <div
                    className="cursor-pointer flex justify-center items-center overflow-hidden"
                    onClick={() => setSelectedCert(index)}
                  >
                    {/* Responsive image - fully contained on mobile */}
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto object-contain max-h-[60vh] md:max-h-none md:max-w-md rounded-lg shadow-md active:scale-95 sm:hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Responsive dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#FF7A00] w-6 sm:w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Responsive button */}
        <div className="flex justify-center mt-8 sm:mt-12 px-4">
          <button
            onClick={() => window.open('https://calendar.app.google/HXsmD9MhuU6LEXUM7', '_blank')}
            className="w-full sm:w-auto bg-[#FF7A00] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-[20px] text-base sm:text-lg font-semibold hover:bg-[#FF8C1A] hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#FF7A00]/50"
          >
            Let's connect
          </button>
        </div>

        {/* Footer - Responsive spacing */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-300">
          <p className="text-center text-sm sm:text-base text-gray-600">All rights reserved</p>
        </div>
      </div>

      {/* Back to top button - Responsive positioning */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-[#FF7A00] text-white rounded-full flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer z-40"
          aria-label="Back to Top"
        >
          <ArrowUp size={20} className="sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Modal - Responsive fixes */}
      {selectedCert !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative w-full max-w-5xl">
            {/* Responsive close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-10 sm:-top-12 right-0 text-white text-3xl sm:text-4xl hover:text-[#FF7A00] transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            {/* Responsive modal image */}
            <img
              src={certificates[selectedCert].image}
              alt={certificates[selectedCert].title}
              className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
