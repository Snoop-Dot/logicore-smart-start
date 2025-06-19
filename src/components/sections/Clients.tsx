
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Building2, Factory, Store, Truck, Shirt, Coffee, GraduationCap, Briefcase, ShoppingBag, TreePine, Palette, Fish, Car, Home, Package, Utensils, Smartphone, Banknote, Heart, Wrench, Coffee as CoffeeIcon } from "lucide-react";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const clients = [
    { name: "Gourmet Foods", icon: Utensils, color: "text-green-600" },
    { name: "Cresset Tech", icon: Smartphone, color: "text-blue-600" }, 
    { name: "Amtex", icon: Factory, color: "text-gray-600" },
    { name: "Finlinx", icon: Banknote, color: "text-emerald-600" },
    { name: "Al-Momin", icon: Building2, color: "text-orange-600" },
    { name: "KalamKaar", icon: Palette, color: "text-purple-600" },
    { name: "Ghani Group", icon: Briefcase, color: "text-indigo-600" },
    { name: "Loot.Sale", icon: ShoppingBag, color: "text-pink-600" },
    { name: "Ali Danyal", icon: Store, color: "text-yellow-600" },
    { name: "Mezan", icon: Coffee, color: "text-amber-600" },
    { name: "Korangi Fisheries", icon: Fish, color: "text-cyan-600" },
    { name: "Depilex", icon: Heart, color: "text-rose-600" },
    { name: "Angel College", icon: GraduationCap, color: "text-blue-500" },
    { name: "Cotton Passion", icon: Shirt, color: "text-teal-600" },
    { name: "Yes Print", icon: Package, color: "text-red-600" },
    { name: "Umer Farm", icon: TreePine, color: "text-green-500" },
    { name: "Treschic", icon: Shirt, color: "text-violet-600" },
    { name: "Al‑Fatah", icon: Store, color: "text-orange-500" },
    { name: "AI‑Textile", icon: Factory, color: "text-slate-600" },
    { name: "Makkah Wood", icon: Home, color: "text-brown-600" },
    { name: "Tricon Beverages", icon: CoffeeIcon, color: "text-amber-500" }
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
          {clients.map((client, index) => {
            const IconComponent = client.icon;
            return (
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
                    <IconComponent 
                      className={`w-8 h-8 mx-auto ${client.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-800 leading-tight">
                    {client.name}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
