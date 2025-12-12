import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Index = () => {
  const navigate = useNavigate();
  const [isZoomingOut, setIsZoomingOut] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(true);

  // Fade in on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingIn(false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setIsZoomingOut(true);
    setTimeout(() => {
      navigate('/demo');
    }, 500);
  };

  return (
    <div className={cn(
      "min-h-screen w-full overflow-hidden relative bg-gray-900 transition-opacity duration-500 ease-in-out",
      isFadingIn ? "opacity-0" : "opacity-100"
    )}>
      {/* Background Image - Isometric Facility View */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700 ease-out",
          isZoomingOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
        )}
      >
        <img
          src="/1.Overview.png"
          alt="C-Store Facility Overview"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative z-10 min-h-screen flex flex-col transition-opacity duration-500",
          isZoomingOut ? "opacity-0" : "opacity-100"
        )}
      >
        {/* Comcast Business Logo - Top Left */}
        <header className="absolute top-6 left-6 md:top-8 md:left-8">
          <img
            src="/R2/R2/Primary Logo/01 RGB/PNG/CB_Logo_White_RGB.png"
            alt="Comcast Business"
            className="h-12 md:h-16 w-auto"
          />
        </header>

        {/* Touch to Start Button - Centered */}
        <main className="flex-1 flex items-center justify-center">
          <button
            onClick={handleStart}
            disabled={isZoomingOut}
            className="touch-to-start-glow bg-primary hover:bg-primary/90 text-white font-semibold text-xl md:text-2xl px-12 md:px-16 py-5 md:py-6 rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "'Comcast New Vision', sans-serif" }}
          >
            Touch to Start
          </button>
        </main>
      </div>
    </div>
  );
};

export default Index;
