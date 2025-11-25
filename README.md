# Comcast Business Hospitality Interactive Demo

An interactive web-based demo showcasing Comcast Business technology solutions for convenience stores and hospitality environments.

## Overview

This application provides an immersive, touch-friendly experience demonstrating various Comcast Business products and services across multiple location types including C-Store, Kitchen, Tech Room, EV Charging stations, and more.

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first styling
- **React Router** - Client-side routing
- **shadcn/ui** - Component library

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd hospitality-hub-reimagined

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```sh
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── demo/           # Demo-specific components
│       ├── OverviewMap.tsx
│       ├── RoomView.tsx
│       ├── LocationNavBar.tsx
│       ├── Hotspot.tsx
│       ├── InfoSidebar.tsx
│       └── NetworkMapModal.tsx
├── data/
│   └── rooms.ts        # Location and hotspot data
├── pages/
│   ├── Loading.tsx     # Initial loading screen
│   ├── Index.tsx       # Landing page
│   └── Demo.tsx        # Main demo experience
└── index.css           # Global styles
```

## Features

- **Interactive Overview Map** - Zoom-to-navigate functionality
- **Touch-Optimized** - Designed for touchscreen kiosks and tablets
- **Smooth Transitions** - Polished fade animations between views
- **macOS Dock-Style Navigation** - Intuitive bottom navigation bar
- **Hotspot Information** - Click hotspots to learn about products/services
- **Responsive Design** - Works across various screen sizes

## Deployment

### Static Hosting

Build the project and deploy the `dist/` folder to any static hosting provider:

- AWS S3 + CloudFront
- Azure Blob Storage
- Google Cloud Storage
- Netlify
- Vercel
- GitHub Pages

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Configuration

Key configuration values can be found in:

- `src/data/rooms.ts` - Location data and hotspot positions
- `src/components/demo/OverviewMap.tsx` - Zoom thresholds
- `tailwind.config.ts` - Theme colors and styling

## License

Proprietary - Comcast Business
