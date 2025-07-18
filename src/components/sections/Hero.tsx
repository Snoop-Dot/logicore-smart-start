
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const animatedTexts = [
    "Transform Your Business",
    "Streamline Operations", 
    "Boost Productivity",
    "Scale with Confidence"
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
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('request-demo');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-32 px-4 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className={`mb-8 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-95'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="inline-block animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              {animatedTexts[textIndex]}
            </span>
            <br />
            <span className="inline-block animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              with{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse inline-block animate-bounce-in" style={{ animationDelay: '0.6s' }}>
              Logicore ERP
            </span>
          </h1>
        </div>
        
        <div className={`mb-12 transition-all duration-1000 delay-300 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-light animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
            The complete business solution that grows with you - from startups to enterprises.
            <br />
            <span className="font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '1.2s' }}>
              Powerful enough for experts, simple enough for everyone.
            </span>
          </p>
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-wrap justify-center gap-8 text-lg md:text-xl text-gray-700">
            {[
              { name: "HR & Payroll", color: "from-green-400 to-green-600", delay: "1.4s" },
              { name: "Accounts & Finance", color: "from-blue-400 to-blue-600", delay: "1.6s" },
              { name: "POS & Inventory", color: "from-purple-400 to-purple-600", delay: "1.8s" },
              { name: "CRM & Sales", color: "from-orange-400 to-orange-600", delay: "2s" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center glass-effect px-6 py-3 rounded-full hover-scale animate-scale-in"
                style={{ animationDelay: item.delay }}
              >
                <div className={`w-3 h-3 bg-gradient-to-r ${item.color} rounded-full mr-3 animate-pulse`}></div>
                {item.name}
              </div>
            ))}
          </div>
        </div>
        
        {/* Simplified button container with proper styling */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '2.2s' }}>
            <Button 
              onClick={scrollToDemo}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-12 py-8 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              size="lg"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>

        {/* Simplified floating elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-indigo-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float opacity-40" style={{ animationDelay: '4.5s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
