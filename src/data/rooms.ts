/**
 * Demo Room Data
 * Content for all interactive rooms in the convenience store demo
 */

import { Room } from '@/types/demo';

export const rooms: Room[] = [
  {
    id: 'overview',
    name: 'Overview',
    description: 'Interactive overview of all convenience store locations and facilities',
    image: '/1.Overview.png',
    category: 'overview',
    hotspots: []
  },
  {
    id: 'main-store',
    name: 'Main Store',
    description: 'Main Convenience Store Area with shelving units, refrigerators, cash registers and food area',
    image: '/2.Main Store.png',
    zoomImage: '/hotspot-previews/main-store-zoom.png',
    zoomOrigin: { x: 50, y: 45 }, // Center - woman cashier at checkout counter
    category: 'retail',
    hotspots: [
      {
        id: 'cstore-video-analytics',
        label: 'Video Analytics',
        x: 40,
        y: 45,
        icon: '/icons/Video Analytics & Presence Analytics.png',
        zoomOrigin: { x: 50, y: 45 },
        info: {
          title: 'Video Analytics & Presence Analytics',
          description: 'Video Analytics\nGain valuable insights with anonymized data on how customers move throughout your store, when and where employees engage with them and how they are interacting within the store.\n\nPresence Analytics\nUnderstand occupancy and traffic flow trends to optimize space utilization and understand customer buying trends.'
        }
      },
      {
        id: 'cstore-managed-voice',
        label: 'Managed Voice',
        x: 55,
        y: 45,
        icon: '/icons/Managed Voice.png',
        zoomOrigin: { x: 50, y: 45 },
        info: {
          title: 'Managed Voice',
          description: 'A cost-effective, feature-rich phone solution that keeps your team connected and productive.\n\nUnify voice communications across all your store locations with HD voice quality, advanced call routing, and mobile integration for managers on the go.'
        }
      }
    ]
  },
  {
    id: 'food-area',
    name: 'Food Area',
    description: 'Food service counter with self-service kiosks and kitchen display systems',
    image: '/3.Food.png',
    zoomImage: '/hotspot-previews/food-area-zoom.png',
    zoomOrigin: { x: 45, y: 45 }, // Center-left - man in bow tie at food counter
    category: 'facility',
    hotspots: [
      {
        id: 'kitchen-leak-detection',
        label: 'Leak Detection',
        x: 42,
        y: 50,
        icon: '/icons/MachineQ (IoT) Icon.png',
        zoomOrigin: { x: 45, y: 45 },
        info: {
          title: 'Leak Detection',
          description: 'Safeguard your convenience store from water intrusion and receive real-time alerts if moisture is detected, enabling swift corrective action to help mitigate damage.\n\nProtect your equipment, inventory, and facilities with 24/7 automated monitoring and instant notifications via SMS, email, or mobile app.'
        }
      },
      {
        id: 'kitchen-temperature',
        label: 'Digital Temperature Monitoring',
        x: 57,
        y: 50,
        icon: '/icons/Managed WiFi.png',
        zoomOrigin: { x: 45, y: 45 },
        info: {
          title: 'Digital Temperature Monitoring',
          description: 'Automatically track and log temperatures in refrigerators, freezers and other cold storage units and receive real-time alerts if temperatures fall outside of predetermined thresholds.\n\nEnsure food safety compliance, prevent spoilage, and reduce waste with 24/7 cloud-based monitoring and automated compliance logs.'
        }
      }
    ]
  },
  {
    id: 'public-restroom',
    name: 'Public Restroom',
    description: 'Modern restroom with smart fixtures and IoT monitoring',
    image: '/4.Restroom.png',
    zoomImage: '/hotspot-previews/restroom-zoom.png',
    zoomOrigin: { x: 35, y: 50 }, // Left-center - woman walking by stalls
    category: 'facility',
    hotspots: [
      {
        id: 'restroom-smart-restrooms',
        label: 'Smart Restrooms',
        x: 42,
        y: 50,
        icon: '/icons/Smart Solutions Icon.png',
        zoomOrigin: { x: 35, y: 50 },
        info: {
          title: 'Smart Restrooms',
          description: 'Ensure clean, well-stocked and functioning restrooms with IoT-enabled monitoring.\n\nTrack cleanliness, supply levels, and occupancy in real-time. Receive maintenance alerts and optimize cleaning schedules to improve customer satisfaction.'
        }
      },
      {
        id: 'restroom-utility-monitoring',
        label: 'Utility Monitoring',
        x: 57,
        y: 50,
        icon: '/icons/Managed SD-WAN.png',
        zoomOrigin: { x: 35, y: 50 },
        info: {
          title: 'Utility Monitoring',
          description: 'Uncover opportunities to reduce energy consumption and costs in the convenience store.\n\nTrack energy and water usage in real-time, identify inefficiencies, and access sustainability reporting to reduce costs and environmental impact.'
        }
      }
    ]
  },
  {
    id: 'tech-room',
    name: 'Tech Room',
    description: 'Back of house area with network infrastructure and management systems',
    image: '/5.Tech Room.png',
    zoomImage: '/hotspot-previews/tech-room-zoom.png',
    zoomOrigin: { x: 75, y: 70 },
    category: 'infrastructure',
    hotspots: [
      {
        id: 'tech-connectivity',
        label: 'Managed Connectivity',
        x: 42,
        y: 50,
        icon: '/icons/Managed Connectivity.png',
        zoomOrigin: { x: 75, y: 70 },
        info: {
          title: 'Managed Connectivity',
          description: 'Broadband solutions that offer nationwide internet connectivity with a variety of upload and download speeds to power your store locations.\n\nEnjoy business-grade service with speeds up to 1 Gbps, 99.9% uptime SLA, and professional support that scales with your growth.'
        }
      },
      {
        id: 'tech-security',
        label: 'Managed Security',
        x: 57,
        y: 50,
        icon: '/icons/Managed Security.png',
        zoomOrigin: { x: 75, y: 70 },
        info: {
          title: 'Managed Security',
          description: 'Help protect your store from cyber attacks with enterprise-grade security solutions.\n\nAdvanced threat protection, firewall management, and 24/7 security monitoring with multi-layer intrusion prevention to ensure business continuity.'
        }
      }
    ]
  },
  {
    id: 'ev-charging',
    name: 'EV Charging',
    description: 'Electric vehicle charging station area with smart charging solutions',
    image: '/7.EV Charging.png',
    zoomImage: '/hotspot-previews/ev-charging-zoom.png',
    zoomOrigin: { x: 35, y: 55 }, // Left side - man with car at charging station
    category: 'facility',
    hotspots: [
      {
        id: 'ev-chargers',
        label: 'EV Charging Stations',
        x: 42,
        y: 55,
        icon: '/icons/Smart Solutions Icon.png',
        zoomOrigin: { x: 10, y: 85 }, // Left - man on phone with full car visible
        info: {
          title: 'EV Charging Stations',
          description: 'Universally compatible turnkey electric vehicle (EV) charging stations with 3 different power output models and AI repair bot, giving businesses the flexibility and scalability to serve their customers with the convenience they need.\n\nAttract EV customers, create a new revenue stream, and future-proof your investment with Level 2 charging (7-19 kW) and AI-powered diagnostics.'
        }
      },
      {
        id: 'ev-lighting',
        label: 'Security & Lighting',
        x: 57,
        y: 55,
        icon: '/icons/Video Analytics & Presence Analytics.png',
        zoomOrigin: { x: 10, y: 85 }, // Left - man on phone with full car visible
        info: {
          title: 'Charging Area Security',
          description: 'Well-lit and monitored charging area for customer safety and security.\n\nHD security cameras with night vision, motion-activated LED lighting, and 24/7 monitoring with cloud video retention provide customer safety, liability protection, and theft prevention.'
        }
      }
    ]
  },
  {
    id: 'gas-station',
    name: 'Gas Station',
    description: 'Modern fuel dispensing area with digital payment and IoT monitoring',
    image: '/6.Gas Station.png',
    zoomImage: '/hotspot-previews/gas-station-zoom.png',
    zoomOrigin: { x: 100, y: 120 }, // Canopy, fuel pumps and white car
    category: 'retail',
    hotspots: [
      {
        id: 'gas-payment',
        label: 'Payment Systems',
        x: 42,
        y: 50,
        icon: '/icons/Managed WiFi.png',
        zoomOrigin: { x: 100, y: 120 },
        zoomScale: 1.25,
        info: {
          title: 'Digital Payment Processing',
          description: 'Fast, secure payment processing at the pump with EMV and contactless support.\n\nPCI-DSS compliant with less than 2 second authorization, mobile wallet integration, and 99.9% uptime SLA for faster transactions and reduced fraud.'
        }
      },
      {
        id: 'gas-cameras',
        label: 'Surveillance Cameras',
        x: 57,
        y: 50,
        icon: '/icons/Managed Security.png',
        zoomOrigin: { x: 100, y: 120 },
        zoomScale: 1.25,
        info: {
          title: 'Multi-Camera Security System',
          description: 'Comprehensive video surveillance for safety, security, and drive-off prevention.\n\n1080p Full HD cameras with automatic license plate recognition, 60-day cloud retention, and POS system integration help prevent drive-offs and investigate incidents.'
        }
      }
    ]
  }
];

export const getRoomById = (id: string): Room | undefined => {
  return rooms.find(room => room.id === id);
};

export const getRoomsByCategory = (category: Room['category']): Room[] => {
  return rooms.filter(room => room.category === category);
};
