/**
 * InfoSidebar Component
 * Sliding sidebar with blue gradient displaying hotspot information
 */

import { X } from 'lucide-react';
import { HotspotInfo } from '@/types/demo';
import { cn } from '@/lib/utils';

interface InfoSidebarProps {
  info: HotspotInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InfoSidebar = ({ info, isOpen, onClose }: InfoSidebarProps) => {
  if (!info && !isOpen) return null;

  return (
    <>
      {/* Backdrop - click to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar - full width on mobile, 40% on desktop */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full z-50',
          'w-full sm:w-[80%] md:w-[60%] lg:w-[40%]',
          'sidebar-gradient',
          'transform transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-white/80 transition-colors p-2"
        >
          <X className="h-6 w-6 sm:h-6 sm:w-6" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto h-full flex items-center">
          {info && (
            <div className="space-y-4 sm:space-y-6 w-full">
              {/* Title */}
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-white pr-8"
                style={{ fontFamily: "'Comcast New Vision', sans-serif" }}
              >
                {info.title}
              </h2>
              {/* Description paragraphs */}
              <div className="text-white/90 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {info.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
