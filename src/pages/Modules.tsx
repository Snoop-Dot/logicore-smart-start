import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calculator, DollarSign, ShoppingCart, Scan, Globe, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Modules = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const modules = [
    {
      icon: Users,
      title: "Human Resource Management (HRM)",
      description: "Complete human resource management solution for modern businesses.",
      features: [
        "Employee Database Management",
        "Attendance & Time Tracking",
        "Payroll Processing",
        "Performance Management",
        "Leave Management",
        "Employee Self-Service Portal",
        "HR Analytics & Reporting"
      ],
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: Calculator,
      title: "Accounting & Bookkeeping",
      description: "Comprehensive accounting system with automated financial management.",
      features: [
        "Chart of Accounts",
        "Journal Entries",
        "Accounts Payable & Receivable",
        "Financial Statements",
        "Tax Management",
        "Bank Reconciliation",
        "Multi-Currency Support"
      ],
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Advanced financial tools for budgeting, forecasting, and analysis.",
      features: [
        "Budget Planning & Control",
        "Cash Flow Management",
        "Financial Forecasting",
        "Cost Center Management",
        "Investment Tracking",
        "Financial KPI Dashboard",
        "Automated Financial Reports"
      ],
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: ShoppingCart,
      title: "Point of Sale (POS)",
      description: "Modern POS system with comprehensive inventory and sales management.",
      features: [
        "Touch Screen Interface",
        "Inventory Management",
        "Sales Analytics",
        "Customer Management",
        "Multiple Payment Methods",
        "Receipt Printing",
        "Real-time Stock Updates"
      ],
      gradient: "from-orange-400 to-red-600"
    },
    {
      icon: Scan,
      title: "Barcode Scanning",
      description: "Efficient barcode scanning system for inventory and product management.",
      features: [
        "Product Barcode Generation",
        "Quick Stock Updates",
        "Mobile Scanning App",
        "Batch Processing",
        "Asset Tracking",
        "Quality Control",
        "Integration with POS"
      ],
      gradient: "from-teal-400 to-cyan-600"
    },
    {
      icon: Globe,
      title: "eCommerce Integration",
      description: "Seamless integration with popular eCommerce platforms.",
      features: [
        "Multi-platform Integration",
        "Synchronized Inventory",
        "Order Management",
        "Customer Data Sync",
        "Automated Listings",
        "Payment Gateway Integration",
        "Shipping Management"
      ],
      gradient: "from-indigo-400 to-purple-600"
    }
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          className="bg-white/90 backdrop-blur-sm hover:bg-white hover-scale shadow-lg modern-shadow"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>

      <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 right-16 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Explore Our Modules
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the comprehensive features and capabilities of each Logicore module
            </p>
          </div>

          <div className="space-y-12">
            {modules.map((module, index) => (
              <Card
                key={index}
                className={`group transition-all duration-1000 transform border-0 modern-shadow bg-white/80 backdrop-blur-sm relative overflow-hidden ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${module.gradient}`}></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  <div className="lg:col-span-1">
                    <CardHeader className="p-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${module.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <module.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                        {module.title}
                      </CardTitle>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {module.description}
                      </p>
                    </CardHeader>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Features:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {module.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-white transition-colors duration-300 hover-scale"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${module.gradient} rounded-full mr-3`}></div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modules;
