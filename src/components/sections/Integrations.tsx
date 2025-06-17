
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Integrations = () => {
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

  const integrations = [
    {
      category: "E-commerce Platforms",
      items: ["Shopify", "WooCommerce", "Magento", "Amazon", "Flipkart"]
    },
    {
      category: "Payment Gateways",
      items: ["Razorpay", "PayU", "Paytm", "PhonePe", "Google Pay"]
    },
    {
      category: "Accounting Software",
      items: ["Tally", "QuickBooks", "Zoho Books", "SAP", "GST Compliance"]
    },
    {
      category: "Communication Tools",
      items: ["WhatsApp Business", "SMS Gateway", "Email Marketing", "Slack", "Microsoft Teams"]
    },
    {
      category: "Logistics & Shipping",
      items: ["Blue Dart", "DTDC", "Delhivery", "Ecom Express", "India Post"]
    },
    {
      category: "Banking & Finance",
      items: ["Net Banking", "UPI", "NEFT/RTGS", "Bank Reconciliation", "Loan Management"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect Logicore with your favorite tools and platforms. Our extensive integration ecosystem 
            ensures your business runs smoothly across all channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className={`transition-all duration-1000 transform hover:scale-105 hover:shadow-xl ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {integration.category}
                </h3>
                <div className="space-y-3">
                  {integration.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-colors"
                    >
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Integration?</h3>
            <p className="text-lg opacity-90 mb-4">
              Our development team can create custom integrations for any platform or service your business needs.
            </p>
            <p className="text-base opacity-80">
              API support • Webhook connectivity • Real-time data sync • Custom workflows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
