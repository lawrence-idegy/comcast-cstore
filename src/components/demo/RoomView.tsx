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

    // Set zoom origin to the hotspot's position
    const origin = { x: hotspot.x, y: hotspot.y };
    const scale = hotspot.zoomScale || 2.0;
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


          {/* Hotspots - show all when sidebar closed, only active one when open */}
          {room.hotspots.map((hotspot) => {
            const isActive = hotspot.id === activeHotspotId;
            // Hide non-active hotspots when sidebar is open
            if (isSidebarOpen && !isActive) return null;

            return (
              <Hotspot
                key={hotspot.id}
                id={hotspot.id}
                label={hotspot.label}
                x={hotspot.x}
                y={hotspot.y}
                icon={hotspot.icon}
                isActive={isActive}
                isSidebarOpen={isSidebarOpen}
                onClick={() => handleHotspotClick(hotspot)}
              />
            );
          })}

          {/* Comcast Business Logo - Top Left */}
          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 pointer-events-none">
            <img
              src="/R2/R2/Primary Logo/01 RGB/PNG/CB_Logo_White_RGB.png"
              alt="Comcast Business"
              className="h-10 sm:h-14 w-auto"
            />
          </div>

          {/* Back Button - Bottom Left, aligned with dock menu center */}
          {onBackToOverview && (
            <button
              onClick={onBackToOverview}
              className="absolute bottom-[calc(0.5rem+4rem+0.5rem)] sm:bottom-[calc(1rem+3rem+0.75rem)] left-2 sm:left-[12%] z-40 control-button w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
            >
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
          )}

          {/* Network Map Button - Bottom Right, aligned with dock menu center */}
          <button
            onClick={() => setIsNetworkMapOpen(true)}
            className={cn(
              "absolute bottom-[calc(0.5rem+4rem+0.5rem)] sm:bottom-[calc(1rem+3rem+0.75rem)] right-2 sm:right-[12%] z-40 transition-all duration-300",
              "control-button px-3 py-2.5 sm:px-5 sm:py-3.5 rounded-full flex items-center gap-1.5 sm:gap-2.5",
              "hover:scale-105 active:scale-95",
              isSidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          >
            <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            <span className="text-white text-sm sm:text-base font-medium hidden sm:inline" style={{ fontFamily: "'Comcast New Vision', sans-serif" }}>
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
