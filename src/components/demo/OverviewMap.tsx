/**
 * Overview Map Component
 * Full-screen interactive overview image with clickable regions
 */

import { useState, useRef, useCallback } from 'react';
import { Room } from '@/types/demo';
import { LocationNavBar } from './LocationNavBar';
import { cn } from '@/lib/utils';

interface ClickableRegion {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  roomId: string;
}

interface OverviewMapProps {
  room: Room;
  onNavigateToRoom: (roomId: string) => void;
}

const clickableRegions: ClickableRegion[] = [
  {
    id: 'region-gas',
    name: 'Gas Station',
    x: 2,
    y: 8,
    width: 25,
    height: 35,
    roomId: 'gas-station',
  },
  {
    id: 'region-tech',
    name: 'Tech Room',
    x: 48,
    y: 8,
    width: 14,
    height: 22,
    roomId: 'tech-room',
  },
  {
    id: 'region-restroom',
    name: 'Public Restroom',
    x: 33,
    y: 15,
    width: 14,
    height: 18,
    roomId: 'public-restroom',
  },
  {
    id: 'region-main-store',
    name: 'Main Store',
    x: 28,
    y: 35,
    width: 35,
    height: 30,
    roomId: 'main-store',
  },
  {
    id: 'region-food-area',
    name: 'Food Area',
    x: 65,
    y: 12,
    width: 18,
    height: 28,
    roomId: 'food-area',
  },
  {
    id: 'region-kitchen',
    name: 'Kitchen',
    x: 62,
    y: 8,
    width: 14,
    height: 18,
    roomId: 'kitchen',
  },
  {
    id: 'region-ev',
    name: 'EV Charging',
    x: 68,
    y: 45,
    width: 28,
    height: 35,
    roomId: 'ev-charging',
  }
];

export const OverviewMap = ({ room, onNavigateToRoom }: OverviewMapProps) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle click navigation
  const handleRegionClick = (region: ClickableRegion) => {
    if (isNavigating) return;
    setIsNavigating(true);
    setTimeout(() => {
      onNavigateToRoom(region.roomId);
    }, 100);
  };

  return (
    <div className="w-full min-h-screen overflow-hidden relative bg-black">
      {/* Overview Image Container - full screen */}
      <div
        ref={containerRef}
        className="relative w-full h-screen flex items-center justify-center"
      >
        {/* Background Image - full width on mobile, cover on desktop */}
        <img
          src={room.image}
          alt={room.name}
          className="w-full sm:w-full sm:h-full sm:object-cover select-none"
          draggable={false}
        />

        {/* Comcast Business Logo - Top Left (inside image) */}
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 pointer-events-none">
          <img
            src="/R2/R2/Primary Logo/01 RGB/PNG/CB_Logo_White_RGB.png"
            alt="Comcast Business"
            className="h-10 sm:h-14 w-auto"
          />
        </div>

        {/* Clickable Regions Overlay */}
        <div className="absolute inset-0">
          {clickableRegions.map((region) => (
            <button
              key={region.id}
              onClick={() => handleRegionClick(region)}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              disabled={isNavigating}
              className={cn(
                'absolute cursor-pointer transition-all duration-200',
                'bg-transparent',
                isNavigating && 'pointer-events-none'
              )}
              style={{
                left: `${region.x}%`,
                top: `${region.y}%`,
                width: `${region.width}%`,
                height: `${region.height}%`,
              }}
              aria-label={`Navigate to ${region.name}`}
            >
              {/* Region Label - Only shows on hover */}
              <div
                className={cn(
                  'absolute inset-0 flex items-center justify-center',
                  'transition-all duration-300 ease-out',
                  hoveredRegion === region.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                )}
              >
                <div
                  className="touch-to-start-glow bg-primary text-white shadow-xl text-[16px] font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full whitespace-nowrap pointer-events-none"
                  style={{ fontFamily: "'Comcast New Vision', sans-serif" }}
                >
                  {region.name}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Location Navigation Bar - Inside the image, at bottom */}
        <LocationNavBar
          currentRoomId="overview"
          onNavigate={onNavigateToRoom}
          isHidden={isNavigating}
          animateIn={true}
        />
      </div>
    </div>
  );
};
