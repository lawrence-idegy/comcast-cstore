/**
 * Location Navigation Bar Component
 * Dock-style menu with circular image thumbnails and labels for each location
 * No background - sits directly on the image
 */

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { rooms } from '@/data/rooms';

interface LocationNavBarProps {
  currentRoomId: string;
  onNavigate: (roomId: string) => void;
  isHidden?: boolean;
  animateIn?: boolean;
}

export const LocationNavBar = ({ currentRoomId, onNavigate, isHidden = false, animateIn = false }: LocationNavBarProps) => {
  // Filter out the overview (accessible via back button) and kitchen (hidden for now)
  const locations = rooms.filter(room => room.id !== 'overview' && room.id !== 'kitchen');

  // Animation state for initial rise from bottom
  const [hasAnimatedIn, setHasAnimatedIn] = useState(!animateIn);

  useEffect(() => {
    if (animateIn && !hasAnimatedIn) {
      // Small delay before starting animation
      const timer = setTimeout(() => {
        setHasAnimatedIn(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [animateIn, hasAnimatedIn]);

  return (
    <>
      {/* Dark overlay behind dock menu - solid black fade for clear contrast */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-52 z-30 pointer-events-none',
          'transition-opacity duration-300',
          isHidden ? 'opacity-0' : 'opacity-100'
        )}
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)'
        }}
      />

      <div
        className={cn(
          'absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-40',
          'w-full px-2 sm:w-auto sm:px-0',
          'transition-all ease-out',
          // Initial animation - rise from bottom
          !hasAnimatedIn ? 'opacity-0 translate-y-24 duration-0' : 'duration-700',
          // Hidden state (when sidebar is open)
          isHidden ? 'opacity-0 pointer-events-none translate-y-4' : hasAnimatedIn ? 'opacity-100 translate-y-0' : ''
        )}
      >
        {/* Dock container - scrollable on mobile, extra padding to prevent hover clipping */}
        <div className="flex items-end gap-4 sm:gap-6 md:gap-8 px-4 pt-8 overflow-x-auto pb-2 justify-start sm:justify-center scrollbar-hide">
        {locations.map((room) => {
          const isActive = room.id === currentRoomId;

          return (
            <button
              key={room.id}
              onClick={() => onNavigate(room.id)}
              className="relative group flex flex-col items-center transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-120 flex-shrink-0"
              style={{
                transform: 'scale(1)',
                transition: 'transform 0.2s ease-out'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2) translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {/* Circular thumbnail with blue ring for active state */}
              <div
                className={cn(
                  'w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden',
                  'transition-all duration-200',
                  'shadow-lg',
                  isActive
                    ? 'ring-4 ring-primary border-2 border-white shadow-[0_0_20px_rgba(37,99,235,0.6)]'
                    : 'border-2 border-white/70'
                )}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Label - always visible, white text for contrast */}
              <span
                className={cn(
                  'mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base font-medium text-white drop-shadow-md',
                  'transition-all duration-200 max-w-[70px] sm:max-w-none truncate sm:whitespace-nowrap',
                  isActive && 'text-primary-foreground'
                )}
                style={{
                  fontFamily: "'Comcast New Vision', sans-serif",
                  textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                }}
              >
                {room.name}
              </span>
            </button>
          );
        })}
        </div>
      </div>
    </>
  );
};
