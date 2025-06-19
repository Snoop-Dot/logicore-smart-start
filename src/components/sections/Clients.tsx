import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const clients = [
    { name: "Gourmet Foods", logo: "/placeholder.svg" },
    { name: "Cresset Tech", logo: "/placeholder.svg" }, 
    { name: "Amtex", logo: "/placeholder.svg" },
    { name: "Finlinx", logo: "/placeholder.svg" },
    { name: "Al-Momin", logo: "/placeholder.svg" },
    { name: "KalamKaar", logo: "/placeholder.svg" },
    { name: "Ghani Group", logo: "/placeholder.svg" },
    { name: "Loot.Sale", logo: "/placeholder.svg" },
    { name: "Ali Danyal", logo: "/placeholder.svg" },
    { name: "Mezan", logo: "/placeholder.svg" },
    { name: "Korangi Fisheries", logo: "/placeholder.svg" },
    { name: "Depilex", logo: "/placeholder.svg" },
    { name: "Angel College", logo: "/placeholder.svg" },
    { name: "Cotton Passion", logo: "/placeholder.svg" },
    { name: "Yes Print", logo: "/placeholder.svg" },
    { name: "Umer Farm", logo: "/placeholder.svg" },
    { name: "Treschic", logo: "/placeholder.svg" },
    { name: "Al‑Fatah", logo: "/placeholder.svg" },
    { name: "AI‑Textile", logo: "/placeholder.svg" },
    { name: "Makkah Wood", logo: "/placeholder.svg" },
    { name: "Tricon Beverages", logo: "/placeholder.svg" }
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
              className={`text-center hover:shadow-md transition-all duration-500 bg-gray-50 hover:bg-white border border-gray-200 hover-scale group ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${400 + index * 50}ms` : '0ms'
              }}
            >
              <CardContent className="py-6 px-3">
                <div className="mb-3">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="w-12 h-12 mx-auto object-contain group-hover:scale-110 transition-transform duration-300 rounded"
                  />
                </div>
                <p className="text-sm font-medium text-gray-800 leading-tight">
                  {client.name}
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
