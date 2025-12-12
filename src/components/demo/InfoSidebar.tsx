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
          className="absolute top-5 right-5 sm:top-7 sm:right-7 text-white hover:text-white/80 transition-colors p-2.5"
        >
          <X className="h-7 w-7 sm:h-8 sm:w-8" />
        </button>

        {/* Content */}
        <div className="p-20 sm:p-28 md:p-32 overflow-y-auto h-full flex items-center">
          {info && (
            <div className="space-y-8 sm:space-y-10 w-full">
              {/* Title - 32px */}
              <h2
                className="text-[32px] font-semibold text-white pr-12 leading-tight"
                style={{ fontFamily: "'Comcast New Vision', sans-serif" }}
              >
                {info.title}
              </h2>
              {/* Description paragraphs */}
              <div
                className="text-white/90 text-[16px] font-normal leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "'Comcast New Vision', sans-serif" }}
              >
                {info.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
