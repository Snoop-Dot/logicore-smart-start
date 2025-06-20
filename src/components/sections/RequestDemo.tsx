
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  captcha?: string;
}

const RequestDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    captcha: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const { toast } = useToast();

  // Generate CAPTCHA question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;
    setCaptchaQuestion({ num1, num2, answer });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

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

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.captcha.trim()) {
      newErrors.captcha = "Please solve the CAPTCHA";
    } else if (parseInt(formData.captcha) !== captchaQuestion.answer) {
      newErrors.captcha = "Incorrect answer";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmailNotification = async (submissionData: any) => {
    try {
      // Simulate email sending - in a real app, this would call your backend API
      console.log('Sending email notification to umer.izhar.ui@gmail.com');
      console.log('Demo request data:', submissionData);
      
      // This would be your actual email API call
      // await fetch('/api/send-notification', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     to: 'umer.izhar.ui@gmail.com',
      //     subject: 'New Demo Request',
      //     data: submissionData
      //   })
      // });
      
      return true;
    } catch (error) {
      console.error('Failed to send email notification:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send email notification
      const emailSent = await sendEmailNotification({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        timestamp: new Date().toISOString()
      });
      
      toast({
        title: "Demo Request Submitted!",
        description: "We'll contact you within 24 hours to schedule your demo.",
      });
      
      if (emailSent) {
        console.log('Email notification sent successfully');
      }
      
      setFormData({ name: "", email: "", phone: "", company: "", captcha: "" });
      generateCaptcha(); // Generate new CAPTCHA
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section ref={sectionRef} id="request-demo" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Request a Demo
          </h2>
          <p className="text-xl text-gray-600">
            See Logicore ERP in action and discover how it can transform your business
          </p>
        </div>
        
        <Card className={`max-w-2xl mx-auto shadow-lg transition-all duration-1000 delay-300 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}>
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">
              Get Your Free Demo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className={`mt-1 ${errors.company ? 'border-red-500' : ''}`}
                    placeholder="Enter your company name"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                  )}
                </div>
              </div>

              {/* CAPTCHA Section */}
              <div className="bg-gray-50 p-4 rounded-lg border">
                <Label htmlFor="captcha" className="text-sm font-medium text-gray-700 mb-2 block">
                  Security Verification *
                </Label>
                <div className="flex items-center gap-4">
                  <div className="bg-white px-4 py-2 rounded border font-mono text-lg">
                    {captchaQuestion.num1} + {captchaQuestion.num2} = ?
                  </div>
                  <Input
                    id="captcha"
                    name="captcha"
                    type="number"
                    value={formData.captcha}
                    onChange={handleChange}
                    className={`w-24 ${errors.captcha ? 'border-red-500' : ''}`}
                    placeholder="Answer"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={generateCaptcha}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Refresh
                  </Button>
                </div>
                {errors.captcha && (
                  <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? "Submitting..." : "Request Demo"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RequestDemo;
