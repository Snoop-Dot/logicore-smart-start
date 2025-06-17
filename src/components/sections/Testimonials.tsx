
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
      name: "Rajesh Kumar",
      company: "ABC Textiles Ltd.",
      rating: 5,
      review: "Logicore has transformed our textile business operations. The inventory management and production tracking features are outstanding. We've seen 40% improvement in efficiency."
    },
    {
      name: "Priya Sharma",
      company: "Fresh Foods Distribution",
      rating: 5,
      review: "The barcode integration and warehouse management system has streamlined our entire distribution process. Customer satisfaction has increased significantly."
    },
    {
      name: "Amit Patel",
      company: "Golden Bakery Chain",
      rating: 5,
      review: "From a small bakery to a chain of 15 outlets, Logicore scaled with us perfectly. The HR and accounts modules are incredibly user-friendly."
    },
    {
      name: "Sunita Gupta",
      company: "Modern Electronics",
      rating: 4,
      review: "The CRM and sales tracking features have helped us increase our revenue by 35%. The customer support team is always responsive."
    },
    {
      name: "Vikram Singh",
      company: "Steel Works India",
      rating: 5,
      review: "Managing our steel manufacturing was complex until we found Logicore. The custom workflows and reporting tools are exactly what we needed."
    },
    {
      name: "Meera Joshi",
      company: "Fashion Hub",
      rating: 5,
      review: "The e-commerce integration helped us expand online seamlessly. Sales have doubled since implementing Logicore."
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
