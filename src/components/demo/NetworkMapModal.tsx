/**
 * Network Map Modal Component
 * Displays the Diverse Network infographic
 */

import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NetworkMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NetworkMapModal = ({ isOpen, onClose }: NetworkMapModalProps) => {
  const [isClosing, setIsClosing] = React.useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 500);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <>
      {/* Backdrop - gentler fade with lighter overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-500 ease-out',
          isOpen && !isClosing ? 'opacity-100' : 'opacity-0'
        )}
        onClick={handleClose}
      />

      {/* Modal - smooth fade without jarring scale */}
      <div
        className={cn(
          'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50',
          'w-full max-w-5xl max-h-[90vh] overflow-hidden',
          'bg-white dark:bg-slate-900 rounded-xl shadow-2xl',
          'transition-opacity duration-500 ease-out',
          isOpen && !isClosing ? 'opacity-100' : 'opacity-0'
        )}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 rounded-full h-10 w-10 bg-white/80 hover:bg-white shadow-md"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Network Map Image */}
        <img
          src="/diversenetworkmap.png"
          alt="A Diverse Network - Comcast Business nationwide coverage map"
          className="w-full h-auto"
        />
      </div>
    </>
  );
};
