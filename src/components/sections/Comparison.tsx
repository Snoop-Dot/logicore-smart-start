
import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Comparison = () => {
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

  const features = [
    "Custom Workflows",
    "Barcode Integration",
    "Real-time Analytics",
    "Multi-location Support",
    "24/7 Customer Support",
    "Industry-specific Modules",
    "E-commerce Integration",
    "Advanced Reporting",
    "Mobile App Access",
    "Data Security & Backup",
    "Unlimited Users",
    "Free Updates & Maintenance"
  ];

  const systems = [
    {
      name: "Logicore",
      price: "Custom Pricing",
      highlight: true,
      features: features.map(() => true)
    },
    {
      name: "Free ERP A",
      price: "Free",
      highlight: false,
      features: [true, false, true, false, false, false, false, true, false, false, true, false]
    },
    {
      name: "Free ERP B",
      price: "Free",
      highlight: false,
      features: [false, false, true, true, false, false, true, false, false, false, true, false]
    },
    {
      name: "Free ERP C",
      price: "Free",
      highlight: false,
      features: [true, false, false, false, true, false, false, true, true, false, false, false]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Logicore?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Logicore stands out from free ERP solutions with comprehensive features and dedicated support.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full grid grid-cols-1 md:grid-cols-4 gap-6">
            {systems.map((system, systemIndex) => (
              <Card
                key={systemIndex}
                className={`transition-all duration-1000 transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${
                  system.highlight 
                    ? 'border-2 border-blue-500 shadow-xl scale-105' 
                    : 'hover:shadow-lg'
                }`}
                style={{ transitionDelay: `${200 + systemIndex * 100}ms` }}
              >
                <CardHeader className={`text-center ${
                  system.highlight ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : ''
                }`}>
                  <CardTitle className="text-xl">
                    {system.name}
                    {system.highlight && (
                      <div className="inline-block ml-2 px-2 py-1 bg-yellow-400 text-gray-900 text-xs rounded-full">
                        BEST CHOICE
                      </div>
                    )}
                  </CardTitle>
                  <p className={`text-lg font-semibold ${
                    system.highlight ? 'text-yellow-200' : 'text-blue-600'
                  }`}>
                    {system.price}
                  </p>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-3">
                    {features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        {system.features[featureIndex] ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                        )}
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">The Clear Winner: Logicore</h3>
            <p className="text-lg opacity-90">
              While free ERP solutions offer basic functionality, Logicore provides comprehensive, 
              industry-specific features with dedicated support to ensure your business success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
