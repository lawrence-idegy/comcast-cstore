/**
 * Demo Page
 * Main interactive demo experience with room navigation and transitions
 */

import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Grid3x3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RoomView } from '@/components/demo/RoomView';
import { OverviewMap } from '@/components/demo/OverviewMap';
import { rooms } from '@/data/rooms';
import { cn } from '@/lib/utils';

const Demo = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const roomParam = searchParams.get('room');

  const [currentRoomId, setCurrentRoomId] = useState<string>(
    roomParam && rooms.find(r => r.id === roomParam) ? roomParam : 'overview'
  );
  const [showRoomGrid, setShowRoomGrid] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isEnteringRoom, setIsEnteringRoom] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(true);

  // Fade in on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingIn(false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Update room when URL parameter changes
  useEffect(() => {
    if (roomParam && rooms.find(r => r.id === roomParam)) {
      setCurrentRoomId(roomParam);
    }
  }, [roomParam]);

  const currentRoom = rooms.find(room => room.id === currentRoomId);

  if (!currentRoom) {
    return <div>Room not found</div>;
  }

  const handleRoomChange = (roomId: string) => {
    if (roomId === currentRoomId || isFadingOut) return;

    // Start fade out
    setIsFadingOut(true);

    // After fade out, change room and fade in
    setTimeout(() => {
      setCurrentRoomId(roomId);
      setShowRoomGrid(false);
      setIsFadingOut(false);
      setIsFadingIn(true);

      // Start fade in
      setTimeout(() => {
        setIsFadingIn(false);
      }, 50);
    }, 400);
  };

  const handleBackToOverview = () => {
    if (isFadingOut) return;

    // Start fade out
    setIsFadingOut(true);

    // After fade out, go to overview and fade in
    setTimeout(() => {
      setCurrentRoomId('overview');
      setIsFadingOut(false);
      setIsFadingIn(true);

      // Start fade in
      setTimeout(() => {
        setIsFadingIn(false);
      }, 50);
    }, 400);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'overview':
        return 'bg-indigo-100 text-indigo-700 border-indigo-300';
      case 'retail':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'facility':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'infrastructure':
        return 'bg-purple-100 text-purple-700 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-300 border-b border-gray-400 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Back button and logo */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/home')}
                className="gap-2 text-gray-700 hover:text-gray-900 hover:bg-gray-400/50"
              >
                <ArrowLeft className="h-4 w-4" />
                Exit Demo
              </Button>

              <div className="hidden md:block h-8 w-px bg-gray-400" />

              <div className="hidden md:block">
                <div className="space-y-0">
                  <div className="text-sm font-bold tracking-tight text-gray-800">
                    COMCAST BUSINESS
                  </div>
                  <div className="text-xs text-gray-600">
                    Convenience Store Solutions
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Current room indicator */}
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className={cn('capitalize', getCategoryColor(currentRoom.category))}
              >
                {currentRoom.category}
              </Badge>
              <h1 className="text-lg md:text-xl font-bold text-gray-800">
                {currentRoom.name}
              </h1>
            </div>

            {/* Right: Room grid toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowRoomGrid(!showRoomGrid)}
              className={cn(
                "gap-2",
                showRoomGrid
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "text-gray-700 border border-gray-500 hover:bg-gray-400/50 hover:text-gray-900"
              )}
            >
              <Grid3x3 className="h-4 w-4" />
              <span className="hidden md:inline">All Rooms</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={cn(
        !showRoomGrid ? 'flex items-center justify-center min-h-[calc(100vh-80px)]' : 'container mx-auto px-4 py-6',
        'transition-opacity duration-500 ease-in-out',
        (isFadingOut || isFadingIn) ? 'opacity-0' : 'opacity-100'
      )}>
        {showRoomGrid ? (
          /* Room Grid View */
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Select a Room</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowRoomGrid(false)}
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-400/50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  onClick={() => handleRoomChange(room.id)}
                  className={cn(
                    'group relative rounded-lg overflow-hidden border-2 transition-all bg-white',
                    'hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
                    currentRoomId === room.id
                      ? 'border-primary shadow-lg'
                      : 'border-gray-300'
                  )}
                >
                  <div className="aspect-video bg-gray-200">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-left text-gray-800">{room.name}</h3>
                      <Badge
                        variant="outline"
                        className={cn('capitalize text-xs', getCategoryColor(room.category))}
                      >
                        {room.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 text-left">
                      {room.description}
                    </p>
                    <div className="mt-3 text-xs text-primary font-medium">
                      {room.hotspots.length} interactive points
                    </div>
                  </div>
                  {currentRoomId === room.id && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-primary shadow-lg text-white">Current</Badge>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Room View */
          <div className="w-full">
            {/* Room Display */}
            {currentRoom.id === 'overview' ? (
              <OverviewMap room={currentRoom} onNavigateToRoom={handleRoomChange} />
            ) : (
              <RoomView
                room={currentRoom}
                onBackToOverview={handleBackToOverview}
                onNavigateToRoom={handleRoomChange}
                isEntering={isEnteringRoom}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Demo;
