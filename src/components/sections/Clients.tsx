
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const clients = [
    "Gourmet Foods",
    "Cresset Tech", 
    "Amtex",
    "Finlinx",
    "Al-Momin",
    "KalamKaar",
    "Ghani Group",
    "Loot.Sale",
    "Ali Danyal",
    "Mezan",
    "Korangi Fisheries",
    "Depilex",
    "Angel College",
    "Cotton Passion",
    "Yes Print",
    "Umer Farm",
    "Treschic",
    "Al‑Fatah",
    "AI‑Textile",
    "Makkah Wood",
    "Tricon Beverages"
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
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're trusted by premier organizations who rely on Logicore for automation, accuracy, and trust.
          </p>
          <p className="text-lg font-medium text-gray-700 mt-4">
            Clients we proudly serve:
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className={`text-center hover:shadow-md transition-all duration-500 bg-gray-50 hover:bg-white border border-gray-200 hover-scale ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${400 + index * 50}ms` : '0ms'
              }}
            >
              <CardContent className="py-6 px-3">
                <p className="text-sm font-medium text-gray-800 leading-tight">
                  {client}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
