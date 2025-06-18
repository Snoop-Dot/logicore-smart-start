
import { useEffect, useRef, useState } from "react";
import { Shield, Lock, Key, CheckCircle } from "lucide-react";

const DataSecurity = () => {
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

  const securityFeatures = [
    "Two-Factor Authentication (2FA)",
    "End-to-End Encryption",
    "Regular Security Audits",
    "Role-Based Access Control"
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-20 h-20 flex items-center justify-center">
              <Shield className="w-10 h-10" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Enterprise-Grade Security
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your data is protected with industry-leading security measures including 2FA authentication and advanced encryption.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="space-y-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">SSL Encrypted</span>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Key className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">2FA Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSecurity;
