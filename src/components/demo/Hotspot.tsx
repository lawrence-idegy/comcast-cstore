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
  isSidebarOpen?: boolean;
  isHidden?: boolean;
  onClick: () => void;
}

export const Hotspot = ({ id, label, x, y, icon, isActive, isSidebarOpen, isHidden, onClick }: HotspotProps) => {
  return (
    <div
      className={cn(
        "absolute group z-20 transition-opacity duration-300",
        isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
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
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 aspect-square flex items-center justify-center">
            {/* Pulsing glow ring - centered behind icon */}
            <div className="absolute w-[80%] h-[80%] bg-white/70 rounded-full hotspot-ring" />
            {/* Icon on top */}
            <img
              src={icon}
              alt={label}
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        )}
      </button>

    </div>
  );
};
