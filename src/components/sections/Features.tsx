
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calculator, DollarSign, ShoppingCart, Scan, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "HRM",
      description: "Complete human resource management with employee tracking, payroll, and performance management."
    },
    {
      icon: Calculator,
      title: "Accounting",
      description: "Comprehensive accounting system with automated bookkeeping and financial reporting."
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Advanced financial management tools for budgeting, forecasting, and cash flow analysis."
    },
    {
      icon: ShoppingCart,
      title: "POS",
      description: "Modern point of sale system with inventory management and sales analytics."
    },
    {
      icon: Scan,
      title: "Barcode Scanning",
      description: "Efficient barcode scanning for inventory tracking and product management."
    },
    {
      icon: Globe,
      title: "eCommerce Integration",
      description: "Seamless integration with popular eCommerce platforms for unified business management."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your business efficiently in one integrated platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-600">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
