/**
 * Location Navigation Bar Component
 * Dock-style menu with circular image thumbnails and labels for each location
 * No background - sits directly on the image
 */

import { cn } from '@/lib/utils';
import { rooms } from '@/data/rooms';

interface LocationNavBarProps {
  currentRoomId: string;
  onNavigate: (roomId: string) => void;
  isHidden?: boolean;
}

export const LocationNavBar = ({ currentRoomId, onNavigate, isHidden = false }: LocationNavBarProps) => {
  // Filter out the overview from navigation (it's accessible via back button)
  const locations = rooms.filter(room => room.id !== 'overview');

  return (
    <>
      {/* Dark grainy overlay behind dock menu */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-32 z-30 pointer-events-none',
          'transition-opacity duration-300',
          isHidden ? 'opacity-0' : 'opacity-100'
        )}
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%)',
          mixBlendMode: 'multiply'
        }}
      />

      <div
        className={cn(
          'absolute bottom-4 left-1/2 -translate-x-1/2 z-40',
          'transition-all duration-300 ease-out',
          isHidden ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'
        )}
      >
        {/* Dock container - NO background */}
        <div className="flex items-end gap-4 md:gap-6 px-2">
        {locations.map((room) => {
          const isActive = room.id === currentRoomId;

          return (
            <button
              key={room.id}
              onClick={() => onNavigate(room.id)}
              className="relative group flex flex-col items-center transition-transform duration-200 ease-out hover:-translate-y-1"
            >
              {/* Circular thumbnail */}
              <div
                className={cn(
                  'w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden',
                  'border-2 transition-all duration-200',
                  'shadow-lg group-hover:shadow-xl group-hover:scale-105',
                  isActive
                    ? 'border-white border-[3px]'
                    : 'border-white/70'
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
                  'mt-1.5 text-xs md:text-sm font-medium text-white drop-shadow-md',
                  'transition-all duration-200'
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
