
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
    <>
      <style>{`
        @keyframes logoAppear {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes textSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
      <div className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-all duration-800 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="text-center">
          <div className="relative mb-8">
            <img 
              src="/lovable-uploads/1948b5bc-c08b-4e05-87df-7c2c4fd96b27.png" 
              alt="Logicore Logo" 
              className="w-24 h-24 mx-auto"
              style={{
                animation: 'logoAppear 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
              }}
            />
          </div>
          <div 
            className="text-gray-700 text-2xl font-light mb-4 tracking-wide"
            style={{ 
              animation: 'textSlideUp 0.8s ease-out 0.6s both',
              background: 'linear-gradient(90deg, #374151, #6B7280, #374151)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            LOGICORE
          </div>
          <div 
            className="text-gray-500 text-sm mb-8 font-normal"
            style={{ animation: 'textSlideUp 0.8s ease-out 0.9s both' }}
          >
            Smart Business Solutions
          </div>
          <div 
            className="flex justify-center space-x-2"
            style={{ animation: 'textSlideUp 0.8s ease-out 1.2s both' }}
          >
            <div 
              className="w-2 h-2 bg-blue-500 rounded-full"
              style={{ animation: 'dotPulse 1.4s ease-in-out infinite' }}
            ></div>
            <div 
              className="w-2 h-2 bg-blue-500 rounded-full"
              style={{ animation: 'dotPulse 1.4s ease-in-out infinite 0.2s' }}
            ></div>
            <div 
              className="w-2 h-2 bg-blue-500 rounded-full"
              style={{ animation: 'dotPulse 1.4s ease-in-out infinite 0.4s' }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
