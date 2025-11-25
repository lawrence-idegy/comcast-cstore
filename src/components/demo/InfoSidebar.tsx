/**
 * InfoSidebar Component
 * Sliding sidebar displaying detailed information about a hotspot
 * Replaces the modal for a more immersive experience
 */

import { X, Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
      {/* Backdrop - subtle darkening on the left side */}
      <div
        className={cn(
          'fixed inset-0 bg-black/20 z-40 transition-opacity duration-500',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md z-50',
          'bg-white dark:bg-slate-900 shadow-2xl',
          'transform transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              {info?.title || ''}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-[calc(100vh-80px)]">
          {info && (
            <div className="space-y-6">
              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {info.description}
              </p>

              {/* Features Section */}
              {info.features && info.features.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-slate-800 dark:text-white">
                    <Check className="h-5 w-5 text-green-600" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {info.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications Section */}
              {info.specs && info.specs.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-slate-800 dark:text-white">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {info.specs.map((spec, index) => (
                      <div
                        key={index}
                        className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700"
                      >
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                          {spec.label}
                        </div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-white">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits Section */}
              {info.benefits && info.benefits.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-slate-800 dark:text-white">
                    Business Benefits
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {info.benefits.map((benefit, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="py-1.5 px-3"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
