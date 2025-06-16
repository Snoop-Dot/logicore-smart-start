
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Calculator, Scan, Cloud, Smile } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WhyLogicore = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      icon: Monitor,
      title: "One Dashboard to Rule All",
      description: "Manage your entire operation from a single, unified dashboard."
    },
    {
      icon: Calculator,
      title: "Auto-Calculated Entries",
      description: "Error-free accounting with automatic calculations and entries."
    },
    {
      icon: Scan,
      title: "Barcode Scanner Ready",
      description: "Built-in barcode scanner and real-time inventory synchronization."
    },
    {
      icon: Cloud,
      title: "Cloud-Powered & Scalable",
      description: "Fast, reliable, and scales with your business growth."
    },
    {
      icon: Smile,
      title: "Zero Learning Curve",
      description: "Clean, beginner-friendly UI that anyone can master instantly."
    }
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

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Logicore?
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Logicore ERP is more than software — it's your intelligent business partner. Designed for real-world pipelines, this unified platform automates HR, accounting, POS, inventory, CRM, and reporting — all in a sleek, intuitive interface. Whether you run a retail store or a manufacturing unit, Logicore brings clarity, efficiency, and growth.
          </p>
        </div>

        <div className={`mb-12 transition-all duration-1000 delay-300 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
            Why top brands choose Logicore:
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`text-center hover:shadow-lg transition-all duration-700 bg-white hover-scale ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${600 + index * 150}ms` : '0ms'
              }}
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 hover:bg-blue-200">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLogicore;
