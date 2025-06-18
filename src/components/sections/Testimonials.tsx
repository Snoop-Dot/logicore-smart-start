
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Zubair Nawaz",
      company: "Gourmet Foods",
      rating: 5,
      review: "Logicore has revolutionized our food distribution business. The inventory tracking and order management system helped us reduce waste by 45% and increase customer satisfaction tremendously.",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      name: "Muhammad Ali",
      company: "Al-Fatah",
      rating: 5,
      review: "Managing multiple retail outlets was a nightmare before Logicore. Now we have complete visibility across all stores with real-time sales tracking and automated inventory management.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      name: "Zeeshan Khan",
      company: "Yes Print",
      rating: 5,
      review: "The printing business requires precise order tracking and customer management. Logicore's CRM and job tracking modules have streamlined our entire workflow and doubled our efficiency.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      name: "Khuraam",
      company: "KalamKaar",
      rating: 4,
      review: "As a creative agency, we needed something flexible yet powerful. Logicore's project management and billing features have made our operations smooth and professional.",
      gradient: "from-orange-400 to-red-600"
    },
    {
      name: "Fatima Sheikh",
      company: "Treschic",
      rating: 5,
      review: "Our fashion retail business transformed completely with Logicore. The e-commerce integration and inventory management helped us expand from 2 to 8 outlets successfully.",
      gradient: "from-pink-400 to-rose-600"
    },
    {
      name: "Hassan Malik",
      company: "Finlinx",
      rating: 5,
      review: "Financial services require accuracy and reliability. Logicore's accounting modules and reporting tools have given us the precision we need while maintaining compliance standards.",
      gradient: "from-indigo-400 to-purple-600"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
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
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Logicore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`group transition-all duration-1000 transform hover-scale modern-shadow border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.gradient}`}></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="border-t pt-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mb-3`}>
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </Car
