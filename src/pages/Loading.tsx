import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Loading = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth progress that slows down near the end
        const increment = Math.max(1, (100 - prev) / 10);
        return Math.min(100, prev + increment);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Start fade out after progress completes
      setTimeout(() => {
        setIsFadingOut(true);
        // Navigate after fade out
        setTimeout(() => {
          navigate('/home');
        }, 600);
      }, 500);
    }
  }, [progress, navigate]);

  return (
    <div className={cn(
      "min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 transition-opacity duration-600 ease-in-out",
      isFadingOut ? "opacity-0" : "opacity-100"
    )}>
      {/* Logo */}
      <div className="text-center mb-12">
        <img
          src="/R2/R2/Primary Logo/01 RGB/PNG/CB_Logo_White_RGB.png"
          alt="Comcast Business"
          className="h-20 md:h-28 w-auto"
        />
      </div>

      {/* Loading indicator */}
      <div className="w-64 md:w-80">
        {/* Progress bar background */}
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          {/* Progress bar fill */}
          <div
            className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text */}
        <p className="text-white/60 text-sm font-light tracking-wide text-center mt-4">
          Loading Experience...
        </p>
      </div>
    </div>
  );
};

export default Loading;
