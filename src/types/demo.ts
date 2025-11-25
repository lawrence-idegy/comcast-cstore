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
