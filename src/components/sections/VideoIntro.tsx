
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

const VideoIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // AI Voiceover script for Logicore introduction
  const voiceoverScript = `
    Welcome to Logicore - Pakistan's most comprehensive Enterprise Resource Planning solution.
    
    At Logicore, we understand the unique challenges faced by Pakistani businesses. That's why we've created an all-in-one platform that seamlessly integrates every aspect of your business operations.
    
    From Human Resources and Payroll Management to Accounts and Finance, from Point of Sale systems to Customer Relationship Management - Logicore brings everything together under one intelligent roof.
    
    What makes us truly Pakistani? Our deep integration with local banking systems like HBL, UBL, and Allied Bank. Support for mobile payment solutions like JazzCash and Easypaisa. And partnerships with courier services like TCS and Leopards.
    
    Whether you're a growing startup or an established enterprise, Logicore scales with your business. Our cloud-based solution ensures you can access your data anywhere, anytime, while maintaining the highest standards of security.
    
    Join thousands of Pakistani businesses who have already transformed their operations with Logicore. Experience the future of business management today.
    
    Logicore - Smart Business Solutions for Pakistan.
  `;

  const handlePlayVideo = async () => {
    setIsLoading(true);
    try {
      if (videoRef.current && audioRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await videoRef.current.play();
          await audioRef.current.play();
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.error("Error playing video:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;

    const handleVideoEnd = () => {
      setIsPlaying(false);
    };

    if (video && audio) {
      video.addEventListener('ended', handleVideoEnd);
      audio.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (video && audio) {
        video.removeEventListener('ended', handleVideoEnd);
        audio.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Logicore
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our introduction video to learn how Logicore is transforming Pakistani businesses with smart ERP solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              poster="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=675&fit=crop"
              muted
              playsInline
            >
              {/* Placeholder video - in production, replace with actual video */}
              <source src="/video/logicore-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* AI Voiceover Audio */}
            <audio
              ref={audioRef}
              preload="metadata"
              muted={isMuted}
            >
              {/* This would be replaced with actual AI-generated audio in production */}
              <source src="/audio/logicore-voiceover.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group">
              {!isPlaying && (
                <Button
                  onClick={handlePlayVideo}
                  disabled={isLoading}
                  className="bg-white/90 hover:bg-white text-black rounded-full p-6 transition-all duration-300 group-hover:scale-110"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-black border-t-transparent" />
                  ) : (
                    <Play className="h-8 w-8 ml-1" />
                  )}
                </Button>
              )}

              {/* Control Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={handlePlayVideo}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    onClick={toggleMute}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                </div>

                <div className="text-white text-sm bg-black/50 px-3 py-1 rounded">
                  AI Voiceover Available
                </div>
              </div>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Experience Pakistan's Leading ERP Solution
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              This introduction video showcases how Logicore integrates with Pakistani banking systems, 
              mobile payments, and courier services to provide a complete business solution tailored for local enterprises.
            </p>
            
            {/* Features highlighted in video */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Local Banking Integration</h4>
                <p className="text-gray-600 text-sm">HBL, UBL, Allied Bank & more</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Mobile Payments</h4>
                <p className="text-gray-600 text-sm">JazzCash & Easypaisa support</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Courier Integration</h4>
                <p className="text-gray-600 text-sm">TCS & Leopards connectivity</p>
              </div>
            </div>
          </div>

          {/* Voiceover Script Display (Hidden by default, for development) */}
          <details className="mt-8 bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer font-medium text-gray-700">View AI Voiceover Script</summary>
            <div className="mt-4 text-sm text-gray-600 whitespace-pre-line">
              {voiceoverScript}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
