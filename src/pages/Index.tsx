
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import VideoIntro from "@/components/sections/VideoIntro";
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <div className="animate-fade-in">
          <Hero />
        </div>
        <div id="video-intro" className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
          <VideoIntro />
        </div>
        <div id="features" className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
          <Features />
        </div>
        <div id="about-us" className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
          <AboutUs />
        </div>
        <div id="why-logicore" className="animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
          <WhyLogicore />
        </div>
        <div id="our-journey" className="animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
          <OurJourney />
        </div>
        <div id="testimonials" className="animate-slide-in-left" style={{ animationDelay: '1s' }}>
          <Testimonials />
        </div>
        <div id="integrations" className="animate-slide-in-right" style={{ animationDelay: '1.2s' }}>
          <Integrations />
        </div>
        <div id="workflow" className="animate-slide-in-left" style={{ animationDelay: '1.4s' }}>
          <Workflow />
        </div>
        <div id="data-security" className="animate-slide-in-right" style={{ animationDelay: '1.6s' }}>
          <DataSecurity />
        </div>
        <div id="faqs" className="animate-slide-in-left" style={{ animationDelay: '1.8s' }}>
          <FAQs />
        </div>
        <div id="awards" className="animate-slide-in-right" style={{ animationDelay: '2s' }}>
          <Awards />
        </div>
        <div id="clients" className="animate-slide-in-left" style={{ animationDelay: '2.2s' }}>
          <Clients />
        </div>
        <div id="request-demo" className="animate-slide-in-right" style={{ animationDelay: '2.4s' }}>
          <RequestDemo />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
