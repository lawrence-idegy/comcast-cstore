/**
 * Demo Page
 * Main interactive demo experience with room navigation and transitions
 */

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RoomView } from '@/components/demo/RoomView';
import { OverviewMap } from '@/components/demo/OverviewMap';
import { rooms } from '@/data/rooms';
import { cn } from '@/lib/utils';

const Demo = () => {
  const [searchParams] = useSearchParams();
  const roomParam = searchParams.get('room');

  const [currentRoomId, setCurrentRoomId] = useState<string>(
    roomParam && rooms.find(r => r.id === roomParam) ? roomParam : 'overview'
  );
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

  return (
    <div className="min-h-screen bg-black">
      {/* Main Content - Full Screen */}
      <main className={cn(
        'w-full h-screen',
        'transition-opacity duration-500 ease-in-out',
        (isFadingOut || isFadingIn) ? 'opacity-0' : 'opacity-100'
      )}>
        {/* Room Display */}
        {currentRoom.id === 'overview' ? (
          <OverviewMap room={currentRoom} onNavigateToRoom={handleRoomChange} />
        ) : (
          <RoomView
            room={currentRoom}
            onBackToOverview={handleBackToOverview}
            onNavigateToRoom={handleRoomChange}
          />
        )}
      </main>
    </div>
  );
};

export default Demo;
