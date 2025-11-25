import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
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
      {/* Background Image */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700 ease-out",
          isZoomingOut ? "opacity-0 scale-105" : "opacity-100 scale-110"
        )}
      >
        <img
          src="/1. Overview.jpg"
          alt="C-Store Overview"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for modern look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative z-10 min-h-screen flex flex-col transition-opacity duration-500",
          isZoomingOut ? "opacity-0" : "opacity-100"
        )}
      >
        {/* Logo - Top Left */}
        <header className="absolute top-8 left-8">
          <div className="space-y-1">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-wider text-white" style={{ textShadow: '2px 2px 20px rgba(0,0,0,0.8)' }}>
              COMCAST
            </h1>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-wider text-white" style={{ textShadow: '2px 2px 20px rgba(0,0,0,0.8)' }}>
              BUSINESS
            </h2>
            <p className="text-base md:text-lg text-white/90 mt-3 font-light tracking-wide">
              Convenience Store Solutions
            </p>
          </div>
        </header>

        {/* Main Content - Centered */}
        <main className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            {/* Main Headline */}
            <div className="space-y-6">
              <h3 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight" style={{ textShadow: '2px 4px 30px rgba(0,0,0,0.6)' }}>
                Power Your C-Store with
                <br />
                <span className="text-blue-300">
                  Connected Technology
                </span>
              </h3>
              <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto font-light leading-relaxed">
                Explore how Comcast Business delivers reliable connectivity, security, and innovation for every area of your convenience store operation.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button
                onClick={handleStart}
                disabled={isZoomingOut}
                size="lg"
                className="group relative bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xl md:text-2xl px-14 md:px-20 py-7 md:py-8 rounded-full shadow-2xl hover:shadow-[0_20px_60px_rgba(0,111,207,0.5)] transition-all duration-300 hover:scale-105 uppercase tracking-widest overflow-hidden"
                style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <Play className="mr-4 h-7 w-7 md:h-8 md:w-8 fill-current transition-transform duration-300 group-hover:scale-110" />
                <span className="relative">Touch to Start</span>
              </Button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-base text-white/60 font-light tracking-wide">
            Explore 6 interactive locations showcasing Comcast Business technology solutions
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
