/**
 * Interactive Demo Types
 * Type definitions for the hospitality demo experience
 */

export interface Hotspot {
  id: string;
  label: string;
  x: number; // Percentage position (0-100)
  y: number; // Percentage position (0-100)
  icon?: string; // Optional icon path
  zoomOrigin?: { x: number; y: number }; // Per-hotspot zoom origin (overrides room default)
  zoomScale?: number; // Per-hotspot zoom scale (default 1.5)
  info: HotspotInfo;
}

export interface HotspotInfo {
  title: string;
  description: string;
  features?: string[];
  specs?: {
    label: string;
    value: string;
  }[];
  benefits?: string[];
}

export interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  zoomImage?: string; // Zoomed preview image for hotspot clicks
  zoomOrigin?: { x: number; y: number }; // Where to zoom into (percentage 0-100)
  hotspots: Hotspot[];
  category: 'overview' | 'retail' | 'facility' | 'infrastructure';
}

export interface DemoState {
  currentRoomId: string | null;
  activeHotspotId: string | null;
  isInfoPanelOpen: boolean;
  visitedRooms: Set<string>;
}

export type RoomCategory = Room['category'];
