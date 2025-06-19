
import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2500); // Show splash for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-orange-500 to-orange-600 z-50 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-500 to-orange-600 z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="text-center">
        <div className="relative mb-8">
          <img 
            src="/lovable-uploads/1948b5bc-c08b-4e05-87df-7c2c4fd96b27.png" 
            alt="Logicore Logo" 
            className="w-32 h-32 mx-auto animate-bounce-in"
          />
        </div>
        <div className="text-white text-2xl font-bold animate-fade-in" style={{ animationDelay: '0.5s' }}>
          LOGICORE
        </div>
        <div className="text-white/80 text-lg animate-fade-in" style={{ animationDelay: '0.8s' }}>
          Smart Business Solutions
        </div>
        <div className="mt-8 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="w-12 h-1 bg-white rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
