/**
 * RoomView Component
 * Displays a room image with interactive hotspots and zoom effects
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { Room, Hotspot as HotspotType } from '@/types/demo';
import { Hotspot } from './Hotspot';
import { InfoSidebar } from './InfoSidebar';
import { NetworkMapModal } from './NetworkMapModal';
import { LocationNavBar } from './LocationNavBar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Network } from 'lucide-react';
import { cn } from '@/lib/utils';

const ZOOM_OUT_THRESHOLD = 0.7; // Zoom level that triggers back to overview
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 1;

interface RoomViewProps {
  room: Room;
  onBackToOverview?: () => void;
  onNavigateToRoom?: (roomId: string) => void;
  isEntering?: boolean;
}

export const RoomView = ({ room, onBackToOverview, onNavigateToRoom, isEntering = false }: RoomViewProps) => {
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNetworkMapOpen, setIsNetworkMapOpen] = useState(false);
  const [zoomTarget, setZoomTarget] = useState<{ x: number; y: number } | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  // Zoom-out navigation state
  const [scale, setScale] = useState(1);
  const [isNavigatingOut, setIsNavigatingOut] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigationTriggered = useRef(false);

  // Handle enter animation
  useEffect(() => {
    if (isEntering) {
      const timer = setTimeout(() => {
        setHasEntered(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setHasEntered(true);
    }
  }, [isEntering]);

  // Check if zoomed out enough to navigate back
  const checkZoomOutNavigation = useCallback(() => {
    if (scale > ZOOM_OUT_THRESHOLD || navigationTriggered.current || isNavigatingOut || !onBackToOverview) return;

    navigationTriggered.current = true;
    setIsNavigatingOut(true);

    // Small delay for smooth transition before navigation
    setTimeout(() => {
      onBackToOverview();
    }, 200);
  }, [scale, onBackToOverview, isNavigatingOut]);

  // Check navigation after zoom changes
  useEffect(() => {
    checkZoomOutNavigation();
  }, [scale, checkZoomOutNavigation]);

  // Handle wheel zoom for zooming out
  const handleWheel = useCallback((e: React.WheelEvent) => {
    // Only handle zoom out (not zoom in beyond 1)
    if (isNavigatingOut || isZoomed || isSidebarOpen) return;

    // Only process scroll down (zoom out)
    if (e.deltaY > 0) {
      e.preventDefault();
      const delta = 0.94;
      const newScale = Math.max(scale * delta, MIN_ZOOM);
      setScale(newScale);
    } else if (scale < 1) {
      // Allow zooming back in if already zoomed out
      e.preventDefault();
      const delta = 1.06;
      const newScale = Math.min(scale * delta, MAX_ZOOM);
      setScale(newScale);
    }
  }, [scale, isNavigatingOut, isZoomed, isSidebarOpen]);

  const activeHotspot = room.hotspots.find(h => h.id === activeHotspotId);

  const handleHotspotClick = (hotspot: HotspotType) => {
    // Set zoom target to hotspot position
    setZoomTarget({ x: hotspot.x, y: hotspot.y });
    setActiveHotspotId(hotspot.id);

    // Start zoom animation, then open sidebar
    setTimeout(() => {
      setIsZoomed(true);
      setTimeout(() => {
        setIsSidebarOpen(true);
      }, 300);
    }, 50);
  };

  const handleCloseSidebar = () => {
    // Start zoom out immediately while sidebar closes
    setIsSidebarOpen(false);
    setIsZoomed(false);

    // Clear states after zoom animation completes (keep transform-origin until done)
    setTimeout(() => {
      setZoomTarget(null);
      setActiveHotspotId(null);
    }, 500);
  };

  const handleCloseNetworkMap = () => {
    setIsNetworkMapOpen(false);
  };

  // Calculate transform origin based on hotspot position
  const getTransformOrigin = () => {
    if (!zoomTarget) return 'center center';
    return `${zoomTarget.x}% ${zoomTarget.y}%`;
  };

  return (
    <>
      <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center px-4 py-4 overflow-hidden">
        <Card
          ref={containerRef}
          onWheel={handleWheel}
          className="relative h-full max-w-full aspect-video overflow-hidden bg-gray-300 shadow-2xl"
          style={{
            transform: `scale(${scale})`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          {/* Room Image with Zoom Effect */}
          <div
            className="w-full h-full"
            style={{
              transform: isZoomed ? 'scale(1.3)' : 'scale(1)',
              transformOrigin: getTransformOrigin(),
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <img
              src={room.image}
              alt={`${room.name} - ${room.description}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay with gradient for better hotspot visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

            {/* Comcast Business Logo - Top Left */}
            <div className="absolute top-6 left-6 z-20 pointer-events-none">
              <div className="space-y-0">
                <h1 className="text-3xl md:text-4xl font-medium tracking-wide text-white leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)' }}>
                  COMCAST
                </h1>
                <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-white leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)' }}>
                  BUSINESS
                </h2>
              </div>
            </div>

            {/* Hotspots */}
            {room.hotspots.map((hotspot) => (
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
          </div>

          {/* Back to Overview Button - Bottom Left (outside zoom) */}
          {onBackToOverview && (
            <div className={cn(
              "absolute bottom-4 left-4 z-30 transition-opacity duration-300",
              isZoomed ? "opacity-0 pointer-events-none" : "opacity-100"
            )}>
              <Button
                variant="secondary"
                size="icon"
                onClick={onBackToOverview}
                className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm hover:scale-110"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </div>
          )}

          {/* Hotspot Count Badge (outside zoom) */}
          <div className={cn(
            "absolute top-4 right-4 z-30 flex items-center gap-2",
            isZoomed && "opacity-0"
          )}>
            {scale < 1 && (
              <div className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-xl shadow-primary/30">
                Returning to Overview...
              </div>
            )}
            <div className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground rounded-full px-3 py-1 text-sm font-semibold shadow-lg shadow-primary/30">
              {room.hotspots.length} Interactive Points
            </div>
          </div>

          {/* Network Map Button - Bottom Right (outside zoom) */}
          <div className={cn(
            "absolute bottom-4 right-4 z-30 transition-opacity duration-300",
            isZoomed ? "opacity-0 pointer-events-none" : "opacity-100"
          )}>
            <Button
              onClick={() => setIsNetworkMapOpen(true)}
              className="gap-2 shadow-lg hover:shadow-xl transition-all bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Network className="h-4 w-4" />
              Network Map
            </Button>
          </div>
        </Card>
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

      {/* Location Navigation Bar */}
      {onNavigateToRoom && (
        <LocationNavBar
          currentRoomId={room.id}
          onNavigate={onNavigateToRoom}
          isHidden={isZoomed || isSidebarOpen}
        />
      )}
    </>
  );
};
