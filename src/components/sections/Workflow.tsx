
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Cog, CheckCircle } from "lucide-react";

const Workflow = () => {
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

  const workflowSteps = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automate Tasks",
      description: "Set up automated workflows for repetitive tasks like invoicing, inventory updates, and follow-ups."
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Custom Processes",
      description: "Design custom business processes that match your unique operational requirements."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Track Progress",
      description: "Monitor workflow performance with real-time analytics and completion tracking."
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
            Streamlined Workflows
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automate your business processes and create efficient workflows that save time and reduce errors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {workflowSteps.map((step, index) => (
            <Card
              key={index}
              className={`transition-all duration-1000 transform hover:scale-105 hover:shadow-xl ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`flex items-center justify-center space-x-4 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="font-medium">Setup</span>
            <ArrowRight className="w-4 h-4" />
            <span className="font-medium">Automate</span>
            <ArrowRight className="w-4 h-4" />
            <span className="font-medium">Optimize</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
