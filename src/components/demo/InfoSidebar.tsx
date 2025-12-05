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

      {/* Sidebar - 40% width */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full z-50',
          'sidebar-gradient',
          'transform transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ width: '40%' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-white/80 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content */}
        <div className="p-8 overflow-y-auto h-full flex items-center">
          {info && (
            <div className="space-y-6 w-full">
              {/* Title */}
              <h2
                className="text-2xl md:text-3xl font-semibold text-white"
                style={{ fontFamily: "'Comcast New Vision', sans-serif" }}
              >
                {info.title}
              </h2>
              {/* Description paragraphs */}
              <div className="text-white/90 text-base leading-relaxed whitespace-pre-line">
                {info.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
