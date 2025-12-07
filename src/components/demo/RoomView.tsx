/**
 * RoomView Component
 * Displays a room image with interactive hotspots
 * When hotspot is clicked, shows zoom preview image with info sidebar
 */

import { useState, useRef } from 'react';
import { Room, Hotspot as HotspotType } from '@/types/demo';
import { Hotspot } from './Hotspot';
import { InfoSidebar } from './InfoSidebar';
import { NetworkMapModal } from './NetworkMapModal';
import { LocationNavBar } from './LocationNavBar';
import { ArrowLeft, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoomViewProps {
  room: Room;
  onBackToOverview?: () => void;
  onNavigateToRoom?: (roomId: string) => void;
}

// Set to true to enable coordinate picker mode - click anywhere to see coordinates
const DEBUG_COORDINATES = false;

export const RoomView = ({ room, onBackToOverview, onNavigateToRoom }: RoomViewProps) => {
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNetworkMapOpen, setIsNetworkMapOpen] = useState(false);
  const [currentZoomOrigin, setCurrentZoomOrigin] = useState<{ x: number; y: number } | null>(null);
  const [currentZoomScale, setCurrentZoomScale] = useState<number>(1.5);
  const [clickedCoords, setClickedCoords] = useState<{ x: number; y: number } | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeHotspot = room.hotspots.find(h => h.id === activeHotspotId);

  const handleHotspotClick = (hotspot: HotspotType) => {
    // Ensure hotspot has valid info before opening
    if (!hotspot.info || !hotspot.info.title) {
      console.warn(`Hotspot ${hotspot.id} has no info`);
      return;
    }

    // Cancel any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    // Set zoom origin before opening - use hotspot's zoom origin or room default
    const origin = hotspot.zoomOrigin || room.zoomOrigin || { x: 50, y: 50 };
    const scale = hotspot.zoomScale || 1.5;
    setCurrentZoomOrigin(origin);
    setCurrentZoomScale(scale);
    setActiveHotspotId(hotspot.id);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    // Keep zoom origin stable during the entire zoom-out animation (1.2s)
    closeTimeoutRef.current = setTimeout(() => {
      setActiveHotspotId(null);
      setCurrentZoomOrigin(null);
      closeTimeoutRef.current = null;
    }, 1200);
  };

  const handleCloseNetworkMap = () => {
    setIsNetworkMapOpen(false);
  };

  return (
    <>
      <div className="w-full min-h-screen overflow-hidden relative bg-black">
        {/* Room Image Container */}
        <div className="relative w-full h-screen sm:h-screen flex items-center justify-center">
          {/* Room Image - full width on mobile, cover on desktop */}
          <img
            src={room.image}
            alt={`${room.name} - ${room.description}`}
            className="w-full sm:w-full sm:h-full sm:object-cover select-none"
            style={{
              transform: isSidebarOpen
                ? `scale(${currentZoomScale})`
                : 'scale(1)',
              transformOrigin: currentZoomOrigin
                ? `${currentZoomOrigin.x}% ${currentZoomOrigin.y}%`
                : 'center center',
              transition: 'transform 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)'
            }}
            draggable={false}
            onClick={DEBUG_COORDINATES ? (e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
              const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
              setClickedCoords({ x, y });
              console.log(`Clicked coordinates: { x: ${x}, y: ${y} }`);
            } : undefined}
          />

          {/* Debug coordinate display */}
          {DEBUG_COORDINATES && clickedCoords && (
            <div className="absolute top-20 left-6 z-50 bg-black/80 text-white px-4 py-3 rounded-lg font-mono text-sm">
              <div>Room: {room.id}</div>
              <div>Click: x: {clickedCoords.x}, y: {clickedCoords.y}</div>
              <div className="text-xs text-gray-400 mt-1">zoomOrigin: {'{'} x: {clickedCoords.x}, y: {clickedCoords.y} {'}'}</div>
            </div>
          )}


          {/* Hotspots - hide all when sidebar is open */}
          {!isSidebarOpen && room.hotspots.map((hotspot) => (
            <Hotspot
              key={hotspot.id}
              id={hotspot.id}
              label={hotspot.label}
              x={hotspot.x}
              y={hotspot.y}
              icon={hotspot.icon}
              isActive={hotspot.id === activeHotspotId}
              onClick={() => handleHotspotClick(hotspot)}
            />
          ))}

          {/* Comcast Business Logo - Top Left */}
          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 pointer-events-none">
            <div className="comcast-logo comcast-logo-mobile sm:comcast-logo-desktop">
              <span className="comcast-logo-line text-base sm:text-[1.75rem]">COMCAST</span>
              <span className="comcast-logo-line text-base sm:text-[1.75rem]">BUSINESS</span>
            </div>
          </div>

          {/* Back Button - Bottom Left, aligned with dock menu center */}
          {onBackToOverview && (
            <button
              onClick={onBackToOverview}
              className="absolute bottom-[calc(0.5rem+3.5rem+0.5rem)] sm:bottom-[calc(1rem+2.5rem+0.75rem)] left-2 sm:left-[12%] z-30 control-button w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </button>
          )}

          {/* Network Map Button - Bottom Right, aligned with dock menu center */}
          <button
            onClick={() => setIsNetworkMapOpen(true)}
            className={cn(
              "absolute bottom-[calc(0.5rem+3.5rem+0.5rem)] sm:bottom-[calc(1rem+2.5rem+0.75rem)] right-2 sm:right-[12%] z-30 transition-all duration-300",
              "control-button px-2 py-2 sm:px-4 sm:py-3 rounded-full flex items-center gap-1 sm:gap-2",
              "hover:scale-105 active:scale-95",
              isSidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          >
            <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            <span className="text-white text-xs sm:text-sm font-medium hidden sm:inline" style={{ fontFamily: "'Comcast New Vision', sans-serif" }}>
              Network Map
            </span>
          </button>

          {/* Location Navigation Bar */}
          {onNavigateToRoom && (
            <LocationNavBar
              currentRoomId={room.id}
              onNavigate={onNavigateToRoom}
              isHidden={isSidebarOpen}
            />
          )}
        </div>
      </div>

      {/* Info Sidebar */}
      <InfoSidebar
        info={activeHotspot?.info || null}
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
      />

      {/* Network Map Modal */}
      <NetworkMapModal
        isOpen={isNetworkMapOpen}
        onClose={handleCloseNetworkMap}
      />
    </>
  );
};
