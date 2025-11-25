/**
 * InfoPanel Component
 * Modal dialog displaying detailed information about a hotspot
 */

import { X, Check, Zap } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HotspotInfo } from '@/types/demo';
import { cn } from '@/lib/utils';

interface InfoPanelProps {
  info: HotspotInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InfoPanel = ({ info, isOpen, onClose }: InfoPanelProps) => {
  if (!info) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            {info.title}
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            {info.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Features Section */}
          {info.features && info.features.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {info.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
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
              <h3 className="font-semibold text-lg">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {info.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="text-xs font-medium text-muted-foreground mb-1">
                      {spec.label}
                    </div>
                    <div className="text-sm font-semibold">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Section */}
          {info.benefits && info.benefits.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Business Benefits</h3>
              <div className="space-y-2">
                {info.benefits.map((benefit, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="mr-2 mb-2 py-1.5 px-3"
                  >
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Close Button */}
        <div className="flex justify-end mt-6 pt-4 border-t">
          <Button onClick={onClose} variant="default">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
