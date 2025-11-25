# Comcast Business C-Store Interactive Demo - Project Context

**Last Updated:** November 24, 2025

## Overview
This is a React/TypeScript/Vite application showcasing Comcast Business technology solutions for convenience stores. It features an interactive demo with multiple locations, zoom-to-navigate functionality, and smooth transitions.

## Tech Stack
- React 18 with TypeScript
- Vite build tool
- TailwindCSS for styling
- React Router for navigation
- Shadcn/ui components

## Project Structure

### Pages
- `/` - **Loading Page** (`src/pages/Loading.tsx`) - Initial loading screen with progress bar, auto-redirects to /home
- `/home` - **Landing Page** (`src/pages/Index.tsx`) - "Touch to Start" entry point with Comcast Business branding
- `/demo` - **Demo Page** (`src/pages/Demo.tsx`) - Main interactive experience with room navigation

### Key Components
- `src/components/demo/OverviewMap.tsx` - Interactive overview with zoom-to-navigate (scroll/pinch to zoom into locations)
- `src/components/demo/RoomView.tsx` - Individual location view with hotspots, zoom-out to return to overview
- `src/components/demo/LocationNavBar.tsx` - macOS dock-style navigation bar at bottom
- `src/components/demo/Hotspot.tsx` - Interactive hotspot markers
- `src/components/demo/InfoSidebar.tsx` - Sidebar that opens when clicking hotspots
- `src/components/demo/NetworkMapModal.tsx` - Network map modal

### Data
- `src/data/rooms.ts` - All room/location data including hotspot positions and content

## Locations (Rooms)
1. **Overview** - Interactive map of all locations
2. **C-Store** - Main convenience store area (6 hotspots)
3. **Kitchen** - Food service area (3 hotspots)
4. **Public Restroom** - Smart restroom facilities (3 hotspots)
5. **Tech Room** - Network infrastructure (3 hotspots)
6. **EV Charging** - Electric vehicle charging stations (3 hotspots)
7. **Gas Station** - Fuel dispensing area (4 hotspots)

## Key Features Implemented

### Navigation
- **Zoom-to-Navigate (Overview)**: Scroll or pinch to zoom on overview page. When zoomed in enough (threshold: 2.3x) over a location, automatically navigates there.
- **Zoom-out Navigation (Rooms)**: On any location, scroll down to zoom out. At 0.7x zoom, automatically returns to overview.
- **Click Navigation**: Click on regions in overview or use the dock-style nav bar
- **Smooth Fade Transitions**: 500ms fade out → change view → fade in for all navigation

### UI/UX
- **macOS Dock-style Nav Bar**: Bottom navigation with image thumbnails, hover lift effect (-translate-y-3), gradient tooltips with arrows
- **Gradient Tooltips**: All tooltips use `bg-gradient-to-r from-primary to-blue-500` with `shadow-primary/30` glow
- **Loading Page**: Progress bar animation with gradient fill, smooth fade to landing page
- **Dark Background Base**: `#111827` (gray-900) set on html/body to prevent white flash between pages

### Styling Choices
- **Primary Color**: Comcast blue (`--primary: 217 91% 50%`)
- **Tooltips**: Blue gradient with shadow glow
- **Buttons**: Primary blue with hover effects
- **"Connected Technology"**: Light blue (`text-blue-300`) on landing page
- **Touch to Start Button**: Primary blue with 3s pulse animation, shimmer effect on hover

### Hotspot Positions
Hotspots have been positioned to avoid covering people in the images:

**C-Store (2. C-store.jpg):**
- Video Analytics: (8, 35) - on drink cooler, left side
- Presence Analytics: (82, 55) - right side shelving
- Managed Voice: (35, 70) - front left of counter
- Digital Signage: (50, 18) - top center (menu boards)
- Self-Service Kiosks: (62, 70) - front right
- Managed WiFi: (50, 10) - ceiling area

**Kitchen (3. Kitchen.jpg):**
- Leak Detection: (8, 55) - left wall/doors
- Temperature Monitoring: (92, 45) - right edge
- Kitchen Display System: (50, 15) - top center (menu displays)

**Public Restroom (4. Public Restroom.jpg):**
- Smart Restrooms: (50, 55) - center on stalls
- Utility Monitoring: (90, 45) - far right corner
- Smart Lighting: (50, 12) - ceiling

**Tech Room (5. Tech Room.jpg):**
- Managed Connectivity: (45, 40) - on server racks
- Managed SD-WAN: (55, 40) - on server racks
- Managed Security: (92, 50) - TV/monitor on right wall

**EV Charging (6. EV Charging.jpg):**
- EV Charging Stations: (62, 68) - on charging stations
- Network Connectivity: (38, 60) - on charging station
- Security & Lighting: (50, 20) - building/canopy area

**Gas Station (7. Gas Station.jpg):**
- Payment Systems: (35, 62) - at pumps
- Fuel Tank Monitoring: (50, 80) - ground level
- Surveillance Cameras: (50, 18) - canopy
- Trash Fill Monitoring: (15, 55) - left side

## File Modifications Summary

### Created Files
- `src/pages/Loading.tsx` - Loading page component
- `project_context.md` - This file

### Modified Files
- `src/App.tsx` - Added Loading route, changed landing to /home
- `src/pages/Index.tsx` - Landing page styling, fade-in effect, blue button
- `src/pages/Demo.tsx` - Fade transitions, navigation handlers
- `src/components/demo/OverviewMap.tsx` - Zoom-to-navigate, cursor-following zoom, gradient tooltips
- `src/components/demo/RoomView.tsx` - Zoom-out navigation, gradient badges
- `src/components/demo/LocationNavBar.tsx` - macOS dock style, gradient tooltips with arrows
- `src/data/rooms.ts` - Hotspot position adjustments to avoid people
- `src/index.css` - Dark background (#111827) on html/body

## Configuration Values

### Zoom Thresholds (OverviewMap.tsx)
```typescript
const ZOOM_THRESHOLD = 2.3; // Triggers navigation to location
const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
```

### Zoom Thresholds (RoomView.tsx)
```typescript
const ZOOM_OUT_THRESHOLD = 0.7; // Triggers return to overview
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 1;
```

### Timing
- **Fade transitions**: 500ms ease-in-out
- **Navigation delay**: 200ms (after zoom threshold reached)
- **Loading progress**: ~2-3 seconds
- **Button pulse**: 3s infinite
- **Zoom transition**: 0.2s ease-out

## Routes
```
/       → Loading page (auto-redirects to /home after loading)
/home   → Landing page (Touch to Start button → /demo)
/demo   → Interactive demo experience
```

## Clickable Regions (OverviewMap.tsx)
These define the clickable/zoomable areas on the overview image:
```typescript
const clickableRegions = [
  { id: 'region-gas', name: 'Gas Station', x: 2, y: 8, width: 25, height: 35, roomId: 'gas-station' },
  { id: 'region-tech', name: 'Tech Room', x: 48, y: 8, width: 14, height: 22, roomId: 'tech-room' },
  { id: 'region-restroom', name: 'Public Restroom', x: 33, y: 15, width: 14, height: 18, roomId: 'public-restroom' },
  { id: 'region-cstore', name: 'C-Store', x: 28, y: 35, width: 35, height: 30, roomId: 'c-store' },
  { id: 'region-kitchen', name: 'Kitchen', x: 65, y: 12, width: 25, height: 28, roomId: 'kitchen' },
  { id: 'region-ev', name: 'EV Charging', x: 68, y: 45, width: 28, height: 35, roomId: 'ev-charging' }
];
```

## Notes for Future Development

### Design Decisions
- All transitions use smooth fades (500ms) to avoid jarring effects
- The base background is dark (#111827) to prevent white flashes during navigation
- Hotspot icons are positioned on equipment/fixtures, not on people
- Tooltips and buttons use the client's primary blue color consistently
- The dock navigation hides when zoomed in or when sidebar is open

### Known Behaviors
- Zoom follows cursor position on overview page
- Zoom-out on room pages is scroll-down only (scroll-up does nothing at scale=1)
- Loading page auto-advances after progress completes
- "Returning to Overview..." indicator shows when zooming out past threshold

### Potential Improvements
- Add touch gesture support refinement for mobile
- Add keyboard navigation support
- Add analytics tracking for user interactions
- Consider adding a tutorial/onboarding overlay
