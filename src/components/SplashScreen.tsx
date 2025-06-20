
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
    }, 4000); // Show splash for 4 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        @keyframes logoAppear {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-10deg);
            filter: blur(10px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) rotate(2deg);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: blur(0px);
          }
        }
        
        @keyframes textSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @keyframes shimmerText {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes logoGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4);
          }
        }

        @keyframes currentFlow {
          0% {
            filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 25px rgba(59, 130, 246, 0.5));
          }
          100% {
            filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.3));
          }
        }

        @keyframes backgroundShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .logo-with-current {
          animation: logoAppear 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both, 
                     logoGlow 2s ease-in-out infinite 2s, 
                     currentFlow 1.5s ease-in-out infinite 2s;
        }
      `}</style>
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-800 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: 'linear-gradient(-45deg, #f8fafc, #f1f5f9, #e2e8f0, #f8fafc)',
          backgroundSize: '400% 400%',
          animation: 'backgroundShift 6s ease infinite'
        }}
      >
        <div className="text-center relative">
          {/* Logo with Current Effect */}
          <div className="relative mb-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl animate-pulse"></div>
            
            <img 
              src="/lovable-uploads/1948b5bc-c08b-4e05-87df-7c2c4fd96b27.png" 
              alt="Logicore Logo" 
              className="relative w-28 h-28 mx-auto rounded-full z-10 logo-with-current"
            />
          </div>
          
          {/* LOGICORE Text */}
          <div 
            className="text-4xl font-bold mb-6 tracking-wider"
            style={{ 
              animation: 'textSlideUp 1s ease-out 1.8s both, shimmerText 3s ease-in-out infinite 2.5s',
              background: 'linear-gradient(90deg, #1e293b, #3b82f6, #6366f1, #1e293b)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif',
              fontWeight: '700',
              letterSpacing: '0.1em'
            }}
          >
            LOGICORE
          </div>
          
          {/* Subtitle */}
          <div 
            className="text-slate-600 text-lg mb-12 font-medium"
            style={{ 
              animation: 'textSlideUp 1s ease-out 2.1s both',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Smart Business Solutions
          </div>
          
          {/* Loading Dots */}
          <div 
            className="flex justify-center space-x-3"
            style={{ animation: 'textSlideUp 1s ease-out 2.4s both' }}
          >
            <div 
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{ animation: 'dotPulse 1.6s ease-in-out infinite' }}
            ></div>
            <div 
              className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              style={{ animation: 'dotPulse 1.6s ease-in-out infinite 0.2s' }}
            ></div>
            <div 
              className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500"
              style={{ animation: 'dotPulse 1.6s ease-in-out infinite 0.4s' }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
