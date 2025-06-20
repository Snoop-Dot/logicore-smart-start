
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
    }, 4000); // Show splash for 4 seconds to accommodate new animation

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

        @keyframes drawLogo {
          0% {
            stroke-dasharray: 0 1000;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 1000 0;
            stroke-dashoffset: 0;
          }
        }

        @keyframes electricCurrent {
          0%, 100% {
            filter: drop-shadow(0 0 3px #fbbf24) drop-shadow(0 0 6px #f59e0b);
          }
          25% {
            filter: drop-shadow(0 0 8px #fbbf24) drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 16px #d97706);
          }
          50% {
            filter: drop-shadow(0 0 12px #fbbf24) drop-shadow(0 0 18px #f59e0b) drop-shadow(0 0 24px #d97706);
          }
          75% {
            filter: drop-shadow(0 0 8px #fbbf24) drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 16px #d97706);
          }
        }

        @keyframes blueCurrentEffect {
          0%, 100% {
            filter: drop-shadow(0 0 5px #3b82f6) drop-shadow(0 0 10px #2563eb);
          }
          25% {
            filter: drop-shadow(0 0 10px #3b82f6) drop-shadow(0 0 15px #2563eb) drop-shadow(0 0 20px #1d4ed8);
          }
          50% {
            filter: drop-shadow(0 0 15px #3b82f6) drop-shadow(0 0 25px #2563eb) drop-shadow(0 0 35px #1d4ed8);
          }
          75% {
            filter: drop-shadow(0 0 10px #3b82f6) drop-shadow(0 0 15px #2563eb) drop-shadow(0 0 20px #1d4ed8);
          }
        }

        .logo-drawing-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          pointer-events: none;
        }

        .drawing-path {
          stroke: #fbbf24;
          stroke-width: 3;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          animation: drawLogo 2s ease-in-out forwards, electricCurrent 1s ease-in-out infinite 2s;
        }

        .logo-with-current {
          animation: logoAppear 1s cubic-bezier(0.4, 0, 0.2, 1) 2.5s both, 
                     logoGlow 2s ease-in-out infinite 3s, 
                     blueCurrentEffect 1.5s ease-in-out infinite 3s;
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
          {/* Logo Drawing Animation */}
          <div className="relative mb-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl animate-pulse"></div>
            
            {/* Yellow Line Drawing the Logo */}
            <svg className="logo-drawing-container" viewBox="0 0 100 100">
              {/* Outer Circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                className="drawing-path"
              />
              {/* Letter L */}
              <path
                d="M30 25 L30 45 L40 45"
                className="drawing-path"
                style={{ animationDelay: '0.3s' }}
              />
              {/* Letter O */}
              <circle
                cx="50"
                cy="35"
                r="8"
                className="drawing-path"
                style={{ animationDelay: '0.6s' }}
              />
              {/* Letter G */}
              <path
                d="M62 30 A8 8 0 1 1 62 40 L66 40 L66 35"
                className="drawing-path"
                style={{ animationDelay: '0.9s' }}
              />
              {/* Letter I */}
              <line
                x1="30"
                y1="55"
                x2="30"
                y2="75"
                className="drawing-path"
                style={{ animationDelay: '1.2s' }}
              />
              {/* Letter C */}
              <path
                d="M46 55 A8 8 0 0 0 46 75"
                className="drawing-path"
                style={{ animationDelay: '1.5s' }}
              />
              {/* Letter O */}
              <circle
                cx="62"
                cy="65"
                r="8"
                className="drawing-path"
                style={{ animationDelay: '1.8s' }}
              />
            </svg>
            
            {/* Actual Logo with Current Effect */}
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
              animation: 'textSlideUp 1s ease-out 2.8s both, shimmerText 3s ease-in-out infinite 3.5s',
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
              animation: 'textSlideUp 1s ease-out 3.1s both',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Smart Business Solutions
          </div>
          
          {/* Loading Dots */}
          <div 
            className="flex justify-center space-x-3"
            style={{ animation: 'textSlideUp 1s ease-out 3.4s both' }}
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
