/**
 * Location Navigation Bar Component
 * macOS dock-style menu with image icons for each location
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
    <div
      className={cn(
        'absolute bottom-8 left-1/2 -translate-x-1/2 z-40',
        'transition-all duration-300 ease-out',
        isHidden ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'
      )}
    >
      {/* macOS dock-style container */}
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl px-4 py-3 shadow-lg border border-white/30">
        <div className="flex items-end gap-3">
          {locations.map((room) => {
            const isActive = room.id === currentRoomId;

            return (
              <button
                key={room.id}
                onClick={() => onNavigate(room.id)}
                className="relative group flex flex-col items-center px-1 transition-transform duration-200 ease-out hover:-translate-y-3"
              >
                {/* Tooltip label on hover */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
                  <div className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground text-base font-semibold px-4 py-2 rounded-xl whitespace-nowrap shadow-xl shadow-primary/30">
                    {room.name}
                  </div>
                  {/* Arrow */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rotate-45" />
                </div>

                {/* Icon container */}
                <div
                  className={cn(
                    'w-20 h-20 rounded-2xl overflow-hidden shadow-md',
                    'transition-all duration-200',
                    'group-hover:shadow-xl',
                    isActive && 'ring-3 ring-primary ring-offset-2 ring-offset-white/20'
                  )}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Active indicator dot */}
                <div
                  className={cn(
                    'w-1.5 h-1.5 rounded-full mt-2 transition-all duration-200',
                    isActive ? 'bg-gray-700' : 'bg-transparent'
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
