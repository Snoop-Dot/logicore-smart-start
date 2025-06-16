
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import WhyLogicore from "@/components/sections/WhyLogicore";
import Clients from "@/components/sections/Clients";
import RequestDemo from "@/components/sections/RequestDemo";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <WhyLogicore />
      <Clients />
      <RequestDemo />
      <Footer />
    </div>
  );
};

export default Index;
