
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Zap, Shield, Puzzle } from "lucide-react";

const WhyLogicore = () => {
  const benefits = [
    {
      icon: Globe,
      title: "100% Web-Based",
      description: "Access your business data from anywhere, anytime with our cloud-based solution."
    },
    {
      icon: Zap,
      title: "Simple, Fast, Reliable",
      description: "User-friendly interface designed for speed and reliability in daily operations."
    },
    {
      icon: Shield,
      title: "Smart Problem Solving",
      description: "Solves every calculation problem smartly with automated processes."
    },
    {
      icon: Puzzle,
      title: "Beautiful Integration",
      description: "Beautifully integrated for daily business tasks with seamless workflow."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Logicore?
          </h2>
          <p className="text-xl text-gray-600">
            Built for modern businesses that demand excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
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
