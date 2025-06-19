
import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 800); // Wait for fade out animation
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 z-50 flex items-center justify-center transition-all duration-800 ${
      fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}>
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
          <img 
            src="/lovable-uploads/1948b5bc-c08b-4e05-87df-7c2c4fd96b27.png" 
            alt="Logicore Logo" 
            className="relative w-32 h-32 mx-auto animate-bounce"
            style={{
              animation: 'bounce 2s infinite, fadeInScale 1s ease-out'
            }}
          />
        </div>
        <div 
          className="text-white text-3xl font-bold mb-2 animate-fade-in"
          style={{ 
            animation: 'slideInUp 0.8s ease-out 0.5s both, glow 2s ease-in-out infinite alternate'
          }}
        >
          LOGICORE
        </div>
        <div 
          className="text-white/90 text-lg mb-6 animate-fade-in"
          style={{ animation: 'slideInUp 0.8s ease-out 0.8s both' }}
        >
          Smart Business Solutions
        </div>
        <div 
          className="flex justify-center space-x-1"
          style={{ animation: 'slideInUp 0.8s ease-out 1.2s both' }}
        >
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0% {
            text-shadow: 0 0 5px rgba(255,255,255,0.5);
          }
          100% {
            text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6);
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
