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
  onClick: () => void;
}

export const Hotspot = ({ id, label, x, y, icon, isActive, isSidebarOpen, onClick }: HotspotProps) => {
  // When sidebar is open and this hotspot is active, position it on the left side
  const activePosition = isActive && isSidebarOpen;

  return (
    <div
      className={cn(
        "absolute group transition-all duration-700 ease-out z-20",
        activePosition && "!left-[15%] !top-1/2"
      )}
      style={{
        left: activePosition ? undefined : `${x}%`,
        top: activePosition ? undefined : `${y}%`,
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

    </div>
  );
};
