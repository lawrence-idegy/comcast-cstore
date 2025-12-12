/**
 * Hotspot Component
 * Interactive clickable hotspot using icon images from /icons folder
 */

import { cn } from '@/lib/utils';

interface HotspotProps {
  id: string;
  label: string;
  x: number;
  y: number;
  icon?: string;
  isActive?: boolean;
  onClick: () => void;
}

export const Hotspot = ({ id, label, x, y, icon, isActive, onClick }: HotspotProps) => {
  return (
    <div
      className="absolute group"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      {/* Main hotspot button */}
      <button
        onClick={onClick}
        className={cn(
          "relative flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer",
          "hover:scale-110 active:scale-95",
          isActive && "scale-110"
        )}
        aria-label={`View information about ${label}`}
        aria-pressed={isActive}
      >
        {/* Icon image with glow ring behind it */}
        {icon && (
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 aspect-square">
            {/* Pulsing glow ring - perfectly circular */}
            <div className="absolute inset-[-5%] flex items-center justify-center">
              <div className="w-full h-full aspect-square bg-white/80 rounded-full hotspot-ring" />
            </div>
            {/* Icon on top */}
            <img
              src={icon}
              alt={label}
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        )}
      </button>

      {/* Label tooltip on hover - hidden on mobile */}
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 top-full mt-2.5 sm:mt-3.5",
          "px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg",
          "bg-white text-gray-900 text-xs sm:text-sm font-medium whitespace-nowrap",
          "hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        )}
        style={{ fontFamily: "'Comcast New Vision', sans-serif" }}
      >
        {label}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-white" />
      </div>
    </div>
  );
};
