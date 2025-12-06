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
          "relative flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer hotspot-glow",
          "hover:scale-110 active:scale-95",
          isActive && "scale-110"
        )}
        aria-label={`View information about ${label}`}
        aria-pressed={isActive}
      >
        {/* Icon image - already includes blue circle with white icon */}
        {icon && (
          <img
            src={icon}
            alt={label}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
          />
        )}
      </button>

      {/* Label tooltip on hover - hidden on mobile */}
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 top-full mt-2 sm:mt-3",
          "px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-lg",
          "bg-white text-gray-900 text-[10px] sm:text-xs font-medium whitespace-nowrap",
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
