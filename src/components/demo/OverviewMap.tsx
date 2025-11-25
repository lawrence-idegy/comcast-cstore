/**
 * Overview Map Component
 * Interactive overview image with zoom-to-navigate functionality
 * Supports pinch/scroll zoom - zooming into a location navigates there
 */

import { useState, useRef, useCallback, useEffect } from 'react';
import { Room } from '@/types/demo';
import { Badge } from '@/components/ui/badge';
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
  centerX: number;
  centerY: number;
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
    centerX: 14.5,
    centerY: 25.5
  },
  {
    id: 'region-tech',
    name: 'Tech Room',
    x: 48,
    y: 8,
    width: 14,
    height: 22,
    roomId: 'tech-room',
    centerX: 55,
    centerY: 19
  },
  {
    id: 'region-restroom',
    name: 'Public Restroom',
    x: 33,
    y: 15,
    width: 14,
    height: 18,
    roomId: 'public-restroom',
    centerX: 40,
    centerY: 24
  },
  {
    id: 'region-cstore',
    name: 'C-Store',
    x: 28,
    y: 35,
    width: 35,
    height: 30,
    roomId: 'c-store',
    centerX: 45.5,
    centerY: 50
  },
  {
    id: 'region-kitchen',
    name: 'Kitchen',
    x: 65,
    y: 12,
    width: 25,
    height: 28,
    roomId: 'kitchen',
    centerX: 77.5,
    centerY: 26
  },
  {
    id: 'region-ev',
    name: 'EV Charging',
    x: 68,
    y: 45,
    width: 28,
    height: 35,
    roomId: 'ev-charging',
    centerX: 82,
    centerY: 62.5
  }
];

const ZOOM_THRESHOLD = 2.3; // Zoom level that triggers navigation
const MIN_ZOOM = 1;
const MAX_ZOOM = 3;

export const OverviewMap = ({ room, onNavigateToRoom }: OverviewMapProps) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  // Zoom state
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const lastTouchDistance = useRef<number | null>(null);
  const navigationTriggered = useRef(false);

  // Get the center point of the current view in percentage
  const getViewCenter = useCallback(() => {
    if (!containerRef.current) return { x: 50, y: 50 };

    const rect = containerRef.current.getBoundingClientRect();
    // Calculate what percentage of the image is at the center of the view
    const centerX = 50 - (position.x / rect.width) * 100 / scale;
    const centerY = 50 - (position.y / rect.height) * 100 / scale;

    return { x: centerX, y: centerY };
  }, [position, scale]);

  // Check if zoomed into a specific region
  const checkZoomNavigation = useCallback(() => {
    if (scale < ZOOM_THRESHOLD || navigationTriggered.current || isNavigating) return;

    const viewCenter = getViewCenter();

    // Find which region the center is in
    for (const region of clickableRegions) {
      const inRegionX = viewCenter.x >= region.x && viewCenter.x <= region.x + region.width;
      const inRegionY = viewCenter.y >= region.y && viewCenter.y <= region.y + region.height;

      if (inRegionX && inRegionY) {
        navigationTriggered.current = true;
        setIsNavigating(true);

        // Small delay for smooth transition before navigation
        setTimeout(() => {
          onNavigateToRoom(region.roomId);
        }, 200);
        return;
      }
    }
  }, [scale, getViewCenter, onNavigateToRoom, isNavigating]);

  // Handle wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();

    if (isNavigating) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    // Get mouse position relative to container (0 to 1)
    const mouseXRatio = (e.clientX - rect.left) / rect.width;
    const mouseYRatio = (e.clientY - rect.top) / rect.height;

    // Smoother zoom with smaller increments
    const delta = e.deltaY > 0 ? 0.94 : 1.06;
    const newScale = Math.min(Math.max(scale * delta, MIN_ZOOM), MAX_ZOOM);

    if (newScale !== scale) {
      // Calculate the point we're zooming toward in the current view
      const pointX = (mouseXRatio - 0.5) * rect.width;
      const pointY = (mouseYRatio - 0.5) * rect.height;

      // Adjust position so the point under the cursor stays under the cursor
      const scaleDiff = newScale - scale;
      const newX = position.x - (pointX - position.x) * (scaleDiff / scale);
      const newY = position.y - (pointY - position.y) * (scaleDiff / scale);

      setScale(newScale);
      setPosition({ x: newX, y: newY });
    }
  }, [scale, position, isNavigating]);

  // Check navigation after zoom changes
  useEffect(() => {
    checkZoomNavigation();
  }, [scale, position, checkZoomNavigation]);

  // Handle touch for pinch zoom
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      lastTouchDistance.current = distance;
    } else if (e.touches.length === 1 && scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      });
    }
  }, [scale, position]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (isNavigating) return;

    if (e.touches.length === 2 && lastTouchDistance.current !== null) {
      e.preventDefault();

      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );

      const delta = distance / lastTouchDistance.current;
      const newScale = Math.min(Math.max(scale * delta, MIN_ZOOM), MAX_ZOOM);

      // Get center point between fingers
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
        const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;

        const scaleChange = newScale / scale;
        const newX = centerX - (centerX - position.x) * scaleChange;
        const newY = centerY - (centerY - position.y) * scaleChange;

        setScale(newScale);
        setPosition({ x: newX, y: newY });
      }

      lastTouchDistance.current = distance;
    } else if (e.touches.length === 1 && isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    }
  }, [scale, position, isDragging, dragStart, isNavigating]);

  const handleTouchEnd = useCallback(() => {
    lastTouchDistance.current = null;
    setIsDragging(false);
  }, []);

  // Mouse drag for panning when zoomed
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  }, [scale, position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging && scale > 1 && !isNavigating) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  }, [isDragging, dragStart, scale, isNavigating]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Reset zoom
  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    navigationTriggered.current = false;
  }, []);

  // Handle click navigation
  const handleRegionClick = (region: ClickableRegion) => {
    if (isNavigating) return;
    setIsNavigating(true);
    setTimeout(() => {
      onNavigateToRoom(region.roomId);
    }, 100);
  };

  // Find which region we're currently zoomed into (for indicator)
  const getActiveRegion = useCallback(() => {
    if (scale < 1.5) return null;
    const viewCenter = getViewCenter();

    for (const region of clickableRegions) {
      const inRegionX = viewCenter.x >= region.x && viewCenter.x <= region.x + region.width;
      const inRegionY = viewCenter.y >= region.y && viewCenter.y <= region.y + region.height;
      if (inRegionX && inRegionY) return region;
    }
    return null;
  }, [scale, getViewCenter]);

  const activeRegion = getActiveRegion();

  return (
    <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center px-4 py-4 overflow-hidden">
      <div
        ref={containerRef}
        className="h-full max-w-full relative"
        style={{ aspectRatio: '16/9' }}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Overview Image Container */}
        <div
          ref={imageRef}
          className={cn(
            "relative w-full h-full bg-gray-300 overflow-hidden rounded-lg shadow-2xl",
            isDragging ? "cursor-grabbing" : scale > 1 ? "cursor-grab" : "cursor-default"
          )}
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.2s ease-out',
          }}
        >
          {/* Background Image */}
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-contain select-none"
            draggable={false}
          />

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

          {/* Clickable Regions Overlay */}
          <div className="absolute inset-0">
            {clickableRegions.map((region) => (
              <button
                key={region.id}
                onClick={() => handleRegionClick(region)}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                disabled={isNavigating || isDragging}
                className={cn(
                  'absolute group cursor-pointer transition-all duration-200',
                  'bg-transparent',
                  (isNavigating || isDragging) && 'pointer-events-none'
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
                    hoveredRegion === region.id ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-2'
                  )}
                >
                  <div className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground shadow-xl shadow-primary/30 text-base md:text-lg font-semibold px-5 py-2.5 rounded-xl whitespace-nowrap pointer-events-none">
                    {region.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Zoom indicator */}
        {scale > 1 && (
          <div className="absolute top-4 right-4 z-30 flex items-center gap-2 animate-fade-in">
            {activeRegion && (
              <div className={cn(
                "px-4 py-2 rounded-xl text-sm font-semibold shadow-lg border transition-all duration-500",
                scale >= ZOOM_THRESHOLD
                  ? "bg-white text-green-600 border-green-300 shadow-green-200/50"
                  : "bg-white/90 text-gray-700 border-white/50 backdrop-blur-sm"
              )}>
                {scale >= ZOOM_THRESHOLD ? `Entering ${activeRegion.name}...` : activeRegion.name}
              </div>
            )}
            <button
              onClick={resetZoom}
              className="bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 px-4 py-2 rounded-xl text-sm font-medium shadow-lg transition-all duration-200 hover:scale-105 border border-white/50 backdrop-blur-sm"
            >
              Reset
            </button>
          </div>
        )}

        {/* Zoom hint */}
        {scale === 1 && !isNavigating && (
          <div className="absolute top-4 right-4 z-30 animate-fade-in">
            <div className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold shadow-xl shadow-primary/30">
              Scroll or pinch to zoom • Click a location to navigate
            </div>
          </div>
        )}

        {/* Location Navigation Bar */}
        <LocationNavBar
          currentRoomId="overview"
          onNavigate={onNavigateToRoom}
          isHidden={isNavigating || scale > 1.5}
        />
      </div>
    </div>
  );
};
