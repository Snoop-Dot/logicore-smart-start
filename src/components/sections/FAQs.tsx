
import { useEffect, useRef, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
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

  const faqs = [
    {
      question: "What makes Logicore different from other ERP solutions?",
      answer: "Logicore is specifically designed for Pakistani businesses with deep industry insights. We offer complete customization, barcode integration, multi-location support, and dedicated local support. Unlike generic solutions, we adapt to your business processes rather than forcing you to change."
    },
    {
      question: "Is Logicore suitable for small businesses?",
      answer: "Absolutely! Logicore scales with your business. Whether you're a startup bakery or a large textile mill, our modular approach means you only pay for what you need and can add more features as you grow."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation typically takes 2-4 weeks depending on your business complexity. Our team works closely with you to ensure minimal disruption to your operations. We provide comprehensive training and ongoing support throughout the process."
    },
    {
      question: "Do you provide training and support?",
      answer: "Yes! We provide comprehensive training for your team, detailed documentation, and 24/7 customer support. Our Pakistani support team understands local business practices and can assist you in multiple languages including Urdu and English."
    },
    {
      question: "Can Logicore handle tax compliance?",
      answer: "Yes, Logicore is fully compliant with Pakistani tax regulations and automatically generates all required tax reports, invoices, and returns. We stay updated with the latest FBR regulations to ensure your business remains compliant."
    },
    {
      question: "Is my data secure with Logicore?",
      answer: "Data security is our top priority. We use bank-grade encryption, regular automated backups, and secure cloud infrastructure. Your data is stored in Pakistani servers and complies with all local data protection regulations."
    },
    {
      question: "Can I integrate Logicore with my existing systems?",
      answer: "Yes! Logicore offers extensive integration capabilities with popular platforms like Tally, Shopify, Amazon, payment gateways, and more. We can also create custom integrations for your specific needs."
    },
    {
      question: "What is the pricing structure?",
      answer: "Our pricing is customized based on your specific requirements, number of users, and modules needed. We offer flexible payment plans and no hidden costs. Contact us for a personalized quote based on your business needs."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Find out everything you need to know about Logicore.
          </p>
        </div>

        <div className={`transition-all duration-1000 transform ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '300ms' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border-0 overflow-hidden hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-blue-50 transition-colors">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg opacity-90 mb-4">
              Our team is here to help you understand how Logicore can transform your business.
            </p>
            <p className="text-base opacity-80">
              Contact us for a free consultation and personalized demo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
