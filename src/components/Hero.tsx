import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [showSubheadline, setShowSubheadline] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [showArrow, setShowArrow] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const fullText = 'Every number tells a story';
  const typingSpeed = 80;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowCursor(false);
          setTimeout(() => {
            setShowSubheadline(true);
            setShowArrow(true);
          }, 0);
        }, 500);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (displayedText !== fullText) {
        setDisplayedText(fullText);
        setShowCursor(false);
        setShowSubheadline(true);
        setShowArrow(true);
      }
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [displayedText, fullText, hasScrolled]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('pain');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#0D1B2A] via-[#1F1F1F] to-[#0D1B2A] text-white overflow-hidden snap-start">

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 min-h-[80px] md:min-h-[100px]">
          {displayedText}
          {showCursor && <span className="animate-pulse">|</span>}
        </h1>

        <div className={`transition-all duration-700 ${showSubheadline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xl md:text-2xl mb-6 text-gray-300 font-medium leading-relaxed">
            I help PLG SaaS founders see what's driving growth — and what's quietly slowing it down.
          </p>

          
          <p className="text-lg md:text-xl font-bold mb-12 text-white max-w-3xl mx-auto leading-relaxed">
            Fast, actionable clarity from your own data — no new tools or dashboards.
          </p>

          <button
            onClick={() => window.open('https://calendar.app.google/HXsmD9MhuU6LEXUM7', '_blank')}
            className="bg-[#FF7A00] text-white px-10 py-4 rounded-[20px] text-lg font-semibold hover:bg-[#FF8C1A] hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#FF7A00]/50"
          >
            Let's work together
          </button>
        </div>
      </div>

      {showArrow && !hasScrolled && (
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-500"
          style={{ opacity: showArrow ? 1 : 0 }}
        >
          <svg className="w-8 h-8 text-[#FF7A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </section>
  );
}
