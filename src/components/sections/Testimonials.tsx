
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
      review: "Logicore has revolutionized our food distribution business. The inventory tracking and order management system helped us reduce waste by 45% and increase customer satisfaction tremendously."
    },
    {
      name: "Muhammad Ali",
      company: "Al-Fatah",
      rating: 5,
      review: "Managing multiple retail outlets was a nightmare before Logicore. Now we have complete visibility across all stores with real-time sales tracking and automated inventory management."
    },
    {
      name: "Zeeshan Khan",
      company: "Yes Print",
      rating: 5,
      review: "The printing business requires precise order tracking and customer management. Logicore's CRM and job tracking modules have streamlined our entire workflow and doubled our efficiency."
    },
    {
      name: "Khuraam",
      company: "KalamKaar",
      rating: 4,
      review: "As a creative agency, we needed something flexible yet powerful. Logicore's project management and billing features have made our operations smooth and professional."
    },
    {
      name: "Fatima Sheikh",
      company: "Treschic",
      rating: 5,
      review: "Our fashion retail business transformed completely with Logicore. The e-commerce integration and inventory management helped us expand from 2 to 8 outlets successfully."
    },
    {
      name: "Hassan Malik",
      company: "Finlinx",
      rating: 5,
      review: "Financial services require accuracy and reliability. Logicore's accounting modules and reporting tools have given us the precision we need while maintaining compliance standards."
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
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Logicore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`transition-all duration-1000 transform hover:scale-105 hover:shadow-xl ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.review}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
