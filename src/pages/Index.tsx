
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AboutUs from "@/components/sections/AboutUs";
import WhyLogicore from "@/components/sections/WhyLogicore";
import OurJourney from "@/components/sections/OurJourney";
import Testimonials from "@/components/sections/Testimonials";
import Integrations from "@/components/sections/Integrations";
import Workflow from "@/components/sections/Workflow";
import DataSecurity from "@/components/sections/DataSecurity";
import FAQs from "@/components/sections/FAQs";
import Awards from "@/components/sections/Awards";
import Clients from "@/components/sections/Clients";
import RequestDemo from "@/components/sections/RequestDemo";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="about-us">
          <AboutUs />
        </div>
        <div id="why-logicore">
          <WhyLogicore />
        </div>
        <div id="our-journey">
          <OurJourney />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="integrations">
          <Integrations />
        </div>
        <div id="workflow">
          <Workflow />
        </div>
        <div id="data-security">
          <DataSecurity />
        </div>
        <div id="faqs">
          <FAQs />
        </div>
        <div id="awards">
          <Awards />
        </div>
        <div id="clients">
          <Clients />
        </div>
        <div id="request-demo">
          <RequestDemo />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
