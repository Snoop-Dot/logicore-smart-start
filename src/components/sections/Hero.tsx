
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const scrollToDemo = () => {
    const demoSection = document.getElementById('request-demo');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          Revolutionize Your Business with{" "}
          <span className="text-blue-600">Logicore ERP</span>
        </h1>
        <p className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          All-in-one ERP solution for HR, Accounts, POS, Finance, and more – 
          easy enough even a kid can use.
        </p>
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <Button 
            onClick={scrollToDemo}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
          >
            Request a Demo
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
