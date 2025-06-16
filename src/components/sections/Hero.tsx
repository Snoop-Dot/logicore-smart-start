
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('request-demo');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Revolutionize Your Business with{" "}
          <span className="text-blue-600">Logicore ERP</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
          All-in-one ERP solution for HR, Accounts, POS, Finance, and more – 
          easy enough even a kid can use.
        </p>
        <Button 
          onClick={scrollToDemo}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          Request a Demo
        </Button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
