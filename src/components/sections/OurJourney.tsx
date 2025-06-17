
import { useEffect, useRef, useState } from "react";

const OurJourney = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleParagraphs, setVisibleParagraphs] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const paragraphs = [
    "Logicore began its journey in 2000 under the humble name \"Izhar Soft\", with a small group of visionary software developers in Pakistan. What started as a simple software service gradually transformed into one of the most promising ERP solution providers in the region.",
    "Over the years, we've successfully delivered solutions across the education sector, textile industries, retail markets, and large FMCG chains. Our evolution has been driven by one core value: relentless innovation in service of real business problems.",
    "As our expertise grew, so did our offerings—from developing websites and mobile applications to full-scale ERP platforms that handle thousands of transactions daily. Our clients trust us not just for the technology we deliver, but for the passion and commitment we bring to every project.",
    "We are proud of our legacy, but even more excited for the future—a future where Logicore continues to redefine how businesses think about growth, efficiency, and digital transformation."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
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

  useEffect(() => {
    if (!isVisible) return;

    const paragraphObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = paragraphRefs.current.indexOf(entry.target as HTMLParagraphElement);
            if (index !== -1) {
              setVisibleParagraphs(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    paragraphRefs.current.forEach(ref => {
      if (ref) paragraphObserver.observe(ref);
    });

    return () => {
      paragraphObserver.disconnect();
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Pop-up background effects */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="absolute top-20 left-1/4 w-28 h-28 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-16 right-1/4 w-36 h-36 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-40 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-16 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-16 w-16 h-16 bg-gradient-to-br from-pink-100 to-red-100 rounded-full opacity-40 animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-95'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Journey
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              ref={el => paragraphRefs.current[index] = el}
              className={`text-lg md:text-xl text-gray-700 leading-relaxed transition-all duration-1000 transform ${
                visibleParagraphs[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              } hover:scale-105 hover:shadow-lg hover:bg-white/70 rounded-lg p-4 cursor-default`}
              style={{ 
                transitionDelay: `${300 + index * 200}ms`
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Floating elements for pop-up effect */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-2000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping delay-600"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1400"></div>
        <div className="absolute bottom-1/2 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1800"></div>
      </div>
    </section>
  );
};

export default OurJourney;
