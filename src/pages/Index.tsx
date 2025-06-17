
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AboutUs from "@/components/sections/AboutUs";
import WhyLogicore from "@/components/sections/WhyLogicore";
import OurJourney from "@/components/sections/OurJourney";
import Clients from "@/components/sections/Clients";
import RequestDemo from "@/components/sections/RequestDemo";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <AboutUs />
      <WhyLogicore />
      <OurJourney />
      <Clients />
      <RequestDemo />
      <Footer />
    </div>
  );
};

export default Index;
