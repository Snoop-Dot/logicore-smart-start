
import { useEffect, useRef, useState } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleParagraphs, setVisibleParagraphs] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const paragraphs = [
    "At Logicore, we don't just build software—we build business ecosystems that evolve with you. Established with a vision to simplify and automate complex business processes, Logicore offers a fully integrated ERP platform that caters to businesses of all scales.",
    "Our mission is to empower organizations through smart, scalable, and adaptable solutions that improve productivity, streamline operations, and unlock data-driven decision-making. With a dedicated team of developers, business analysts, and implementation experts, we ensure every module of Logicore reflects the real needs of modern businesses.",
    "Whether it's retail, FMCG, manufacturing, or services—we dive deep into your operations to deliver software that actually understands you. Our commitment lies not only in what we build, but how we support it—with ongoing consultation, hands-on training, and full-cycle customization.",
    "Logicore isn't just your software vendor—it's your strategic technology partner for the future."
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
    <section ref={sectionRef} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Pop-up background effects */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="absolute top-16 right-16 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-95'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Us
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
              } hover:scale-105 hover:shadow-lg hover:bg-gray-50 rounded-lg p-4 cursor-default`}
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
        <div className="absolute top-1/3 left-10 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-800"></div>
        <div className="absolute bottom-1/3 right-10 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-1200"></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-1600"></div>
      </div>
    </section>
  );
};

export default AboutUs;
