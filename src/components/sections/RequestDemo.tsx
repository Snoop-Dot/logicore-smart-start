
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw, Shield, CheckCircle } from "lucide-react";

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
  const [captchaQuestion, setCaptchaQuestion] = useState({ 
    type: 'math' as 'math' | 'text' | 'pattern',
    question: '', 
    answer: '',
    options: [] as string[]
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaAttempts, setCaptchaAttempts] = useState(0);
  const { toast } = useToast();

  // Generate different types of CAPTCHA
  const generateCaptcha = () => {
    const types = ['math', 'text', 'pattern'];
    const randomType = types[Math.floor(Math.random() * types.length)] as 'math' | 'text' | 'pattern';
    
    switch (randomType) {
      case 'math':
        const operations = ['+', '-', '×'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        const num1 = Math.floor(Math.random() * 20) + 1;
        const num2 = Math.floor(Math.random() * 15) + 1;
        let answer: number;
        let question: string;
        
        if (operation === '+') {
          answer = num1 + num2;
          question = `${num1} + ${num2}`;
        } else if (operation === '-') {
          const larger = Math.max(num1, num2);
          const smaller = Math.min(num1, num2);
          answer = larger - smaller;
          question = `${larger} - ${smaller}`;
        } else {
          answer = num1 * num2;
          question = `${num1} × ${num2}`;
        }
        
        setCaptchaQuestion({
          type: 'math',
          question: `What is ${question}?`,
          answer: answer.toString(),
          options: []
        });
        break;
        
      case 'text':
        const words = ['SECURE', 'VERIFY', 'HUMAN', 'ACCESS', 'LOGIC', 'CORE'];
        const word = words[Math.floor(Math.random() * words.length)];
        const scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
        setCaptchaQuestion({
          type: 'text',
          question: `Unscramble this word: ${scrambled}`,
          answer: word,
          options: []
        });
        break;
        
      case 'pattern':
        const sequences = [
          { sequence: '2, 4, 6, 8, ?', answer: '10' },
          { sequence: '1, 4, 9, 16, ?', answer: '25' },
          { sequence: '3, 6, 12, 24, ?', answer: '48' },
          { sequence: '1, 1, 2, 3, 5, ?', answer: '8' }
        ];
        const pattern = sequences[Math.floor(Math.random() * sequences.length)];
        setCaptchaQuestion({
          type: 'pattern',
          question: `Complete the sequence: ${pattern.sequence}`,
          answer: pattern.answer,
          options: []
        });
        break;
    }
    
    setCaptchaVerified(false);
    setFormData(prev => ({ ...prev, captcha: "" }));
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

    if (!captchaVerified) {
      newErrors.captcha = "Please complete the security verification";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const verifyCaptcha = () => {
    const userAnswer = formData.captcha.trim().toLowerCase();
    const correctAnswer = captchaQuestion.answer.toLowerCase();
    
    if (userAnswer === correctAnswer) {
      setCaptchaVerified(true);
      toast({
        title: "✓ Verification Successful",
        description: "Security check passed!",
      });
      setErrors(prev => ({ ...prev, captcha: "" }));
    } else {
      setCaptchaAttempts(prev => prev + 1);
      if (captchaAttempts >= 2) {
        generateCaptcha();
        setCaptchaAttempts(0);
        toast({
          title: "New Challenge Generated",
          description: "Too many incorrect attempts. Try the new challenge.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Incorrect Answer",
          description: `Try again. ${2 - captchaAttempts} attempts remaining.`,
          variant: "destructive"
        });
      }
    }
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
      setCaptchaVerified(false);
      setCaptchaAttempts(0);
      generateCaptcha();
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

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    if (captchaVerified) {
      setCaptchaVerified(false);
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

              {/* Enhanced CAPTCHA Section */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-2 border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <Label className="text-sm font-semibold text-gray-700">
                    Advanced Security Verification
                  </Label>
                  {captchaVerified && (
                    <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                  )}
                </div>
                
                <div className="bg-white p-4 rounded-lg border mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600 font-medium">
                      Challenge Type: {captchaQuestion.type.toUpperCase()}
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={generateCaptcha}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <RefreshCw className="w-4 h-4 mr-1" />
                      New Challenge
                    </Button>
                  </div>
                  
                  <div className="bg-gray-100 p-3 rounded font-mono text-lg text-center mb-3 border">
                    {captchaQuestion.question}
                  </div>
                  
                  <div className="flex gap-2">
                    <Input
                      name="captcha"
                      type="text"
                      value={formData.captcha}
                      onChange={handleCaptchaChange}
                      className={`flex-1 ${errors.captcha ? 'border-red-500' : ''} ${
                        captchaVerified ? 'border-green-500 bg-green-50' : ''
                      }`}
                      placeholder="Enter your answer"
                      disabled={captchaVerified}
                    />
                    <Button
                      type="button"
                      onClick={verifyCaptcha}
                      disabled={!formData.captcha || captchaVerified}
                      className={`px-6 ${
                        captchaVerified 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {captchaVerified ? 'Verified' : 'Verify'}
                    </Button>
                  </div>
                </div>
                
                {errors.captcha && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <span>⚠️</span>
                    {errors.captcha}
                  </p>
                )}
                
                {captchaAttempts > 0 && !captchaVerified && (
                  <p className="text-amber-600 text-sm flex items-center gap-1">
                    <span>⚡</span>
                    Attempts remaining: {3 - captchaAttempts}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting || !captchaVerified}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  "Request Demo"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RequestDemo;
