/**
 * Hotspot Component
 * Interactive clickable hotspot positioned on room images
 */

import { Info } from 'lucide-react';
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
      {/* Container for icon and ring */}
      <button
        onClick={onClick}
        className={cn(
          "relative flex items-center justify-center h-20 w-20 transition-all duration-300 ease-in-out cursor-pointer",
          "hover:scale-110",
          isActive && "scale-110"
        )}
        aria-label={`View information about ${label}`}
        aria-pressed={isActive}
      >
        {/* Animated pulsing ring - positioned behind icon using inset for proper centering */}
        <div
          className={cn(
            "absolute rounded-full border-2 animate-pulse-ring",
            isActive ? "border-primary" : "border-white/90"
          )}
          style={{
            inset: '5px', // Creates a ring just slightly larger than the icon
          }}
        />

        {/* Icon */}
        {icon ? (
          <img
            src={icon}
            alt={label}
            className="h-full w-full object-contain drop-shadow-lg relative z-10"
          />
        ) : (
          <Info className="h-16 w-16 text-white drop-shadow-lg relative z-10" />
        )}
      </button>

      {/* Label tooltip */}
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 top-full mt-2",
          "px-3 py-1.5 rounded-md shadow-lg",
          "bg-slate-900/95 text-white text-xs font-medium whitespace-nowrap",
          "opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
          "backdrop-blur-sm"
        )}
      >
        {label}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-900/95" />
      </div>
    </div>
  );
};
