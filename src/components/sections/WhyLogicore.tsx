
import { useEffect, useRef, useState } from "react";

const WhyLogicore = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleParagraphs, setVisibleParagraphs] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const paragraphs = [
    "Logicore goes beyond the traditional ERP boundaries to offer a flexible, powerful, and fully tailored experience for businesses ready to scale. We specialize in delivering smart solutions that span across HR, accounts, sales, CRM, warehouse management, e-commerce integration, and even barcode-supported inventory tracking.",
    "Our deep industry insight allows us to create tools that don't just function—they fit. Whether you're running a large textile mill, a beverage distribution chain, or a startup bakery, our platform adapts to your pace and style of operation.",
    "At Logicore, we believe software should work around your business—not the other way around. That's why every implementation includes strategic analysis, domain-specific customization, and a personal connection between our team and yours.",
    "And with our in-house developers always ready to tweak, modify, and innovate—you're never locked into a one-size-fits-all system."
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
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Pop-up background effects */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-200/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-200/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-blue-300/30 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-95'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Logicore
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
              } hover:scale-105 hover:shadow-lg hover:bg-white/50 rounded-lg p-4 cursor-default`}
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
        <div className="absolute top-1/4 left-0 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-3/4 right-0 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1500"></div>
      </div>
    </section>
  );
};

export default WhyLogicore;
