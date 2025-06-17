
import { useEffect, useRef, useState } from "react";
import { Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Awards = () => {
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

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className={`absolute inset-0 transition-all duration-2000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-orange-200/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-300/30 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center mb-6">
            <Award className="w-16 h-16 text-yellow-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Recognition & Awards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className={`transition-all duration-1000 transform hover:scale-105 hover:shadow-xl bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-8'
          }`} style={{ transitionDelay: '300ms' }}>
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-full">
                  <Award className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Best Performance Award 2024
              </h3>
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 font-semibold mb-2">
                Awarded by Gourmet Company
              </p>
            </CardContent>
          </Card>

          <Card className={`transition-all duration-1000 transform hover:scale-105 hover:shadow-xl ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-8'
          }`} style={{ transitionDelay: '500ms' }}>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Other Recognition
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Customer Choice Award 2023
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Innovation in ERP Solutions 2023
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Best SME Technology Partner 2022
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Excellence in Customer Service 2022
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`} style={{ transitionDelay: '700ms' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Best Performance Award from Gourmet Company
            </h3>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                We are honored to have received the prestigious "Best Performance Award 2024" from Gourmet Company, 
                recognizing our exceptional contribution to transforming their business operations through innovative 
                ERP solutions.
              </p>
              <p>
                This award acknowledges our commitment to delivering outstanding results, with Gourmet Company 
                experiencing a remarkable 60% increase in operational efficiency and 45% reduction in processing 
                time after implementing Logicore's comprehensive ERP system.
              </p>
              <p>
                The recognition highlights our dedication to understanding unique business requirements and 
                delivering tailored solutions that drive real, measurable improvements in productivity, 
                cost-effectiveness, and customer satisfaction.
              </p>
              <p className="font-semibold text-blue-600">
                "Logicore didn't just provide us with software; they transformed our entire business approach. 
                Their team's expertise and dedication to our success made them deserving of this award."
                <br />
                <span className="text-sm text-gray-600">- CEO, Gourmet Company</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
