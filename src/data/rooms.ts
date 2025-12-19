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
    image: '/1. Overview.jpg',
    category: 'overview',
    hotspots: []
  },
  {
    id: 'main-store',
    name: 'Main Store',
    description: 'Main Convenience Store Area with shelving units, refrigerators, cash registers and food area',
    image: '/R7/R7/1-C-store.jpg',
    category: 'retail',
    hotspots: [
      {
        id: 'cstore-video-analytics',
        label: 'Video Analytics',
        x: 36,
        y: 39,
        icon: '/icons/Video Analytics & Presence Analytics.png',
        info: {
          title: 'Smart technology solutions available through Comcast Smart Solutions:',
          description: '**Video Analytics**\nGain valuable insights with anonymized data on how customers move throughout your store, when and where employees engage with them and how they are interacting within the store.\n\n**Presence Analytics**\nUnderstand occupancy and traffic flow trends to optimize space utilization and understand customer buying trends.'
        }
      },
      {
        id: 'cstore-managed-voice',
        label: 'Managed Voice',
        x: 43,
        y: 60,
        icon: '/icons/Managed Voice_Fill.png',
        info: {
          title: 'Advanced technology solutions available through Comcast Business:',
          description: '**Managed Voice**\nCost effective voice solutions across all store locations to help streamline employee communication.'
        }
      }
    ]
  },
  {
    id: 'food-area',
    name: 'Food Area',
    description: 'Food service counter with self-service kiosks and kitchen display systems',
    image: '/R7/R7/2-Food-Area.jpg',
    category: 'facility',
    hotspots: [
      {
        id: 'food-digital-signage',
        label: 'Digital Signage & Kiosks',
        x: 28,
        y: 34,
        icon: '/icons/Smart Solutions Icon_Fill.png',
        info: {
          title: 'Smart technology solutions available through Comcast Smart Solutions:',
          description: '**Digital Signage**\nSmart signage solutions, featuring digitally-integrated custom fixtures and custom dynamic displays.\n\n**Kiosks**\nEnable fast transactions, while alleviating operational pressure and delivering a streamlined experience to customers. Ordering kiosks have ADA-compliant options, and add an AI tool to help translate 100+ languages and dialects.'
        }
      },
      {
        id: 'food-iot-monitoring',
        label: 'IoT Monitoring',
        x: 41,
        y: 48,
        icon: '/icons/MachineQ (IoT) Icon_Fill.png',
        info: {
          title: 'IoT solutions available through MachineQ:',
          description: '**Leak Detection**\nSafeguard convenience stores for water intrusion and receive real-time alerts if moisture is detected, enabling swift corrective action to help mitigate damage.\n\n**Digital Temperature Monitoring**\nAutomatically track and log temperatures in refrigerators, freezers and other cold storage units and receive real-time alerts if temperatures fall outside of predetermined thresholds.'
        }
      },
      {
        id: 'food-managed-wifi',
        label: 'Managed WiFi',
        x: 70,
        y: 45,
        icon: '/icons/Managed WiFi_Fill.png',
        info: {
          title: 'Advanced technology solutions available through Comcast Business:',
          description: '**Managed WiFi**\nWireless internet access throughout a c-store to enable customers to connect to wifi while in the store.'
        }
      }
    ]
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    description: 'Commercial kitchen area with food preparation and storage',
    image: '/Kitchen demo.jpg',
    category: 'facility',
    hotspots: [
      {
        id: 'kitchen-iot-monitoring',
        label: 'IoT Monitoring',
        x: 65,
        y: 53,
        icon: '/icons/MachineQ (IoT) Icon_Fill.png',
        info: {
          title: 'IoT solutions available through MachineQ:',
          description: '**Leak Detection**\nSafeguard convenience stores for water intrusion and receive real-time alerts if moisture is detected, enabling swift corrective action to help mitigate damage.\n\n**Digital Temperature Monitoring**\nAutomatically track and log temperatures in refrigerators, freezers and other cold storage units and receive real-time alerts if temperatures fall outside of predetermined thresholds.'
        }
      }
    ]
  },
  {
    id: 'public-restroom',
    name: 'Restroom',
    description: 'Modern restroom with smart fixtures and IoT monitoring',
    image: '/R7/R7/5-Restroom.jpg',
    category: 'facility',
    hotspots: [
      {
        id: 'restroom-iot',
        label: 'IoT Solutions',
        x: 50,
        y: 50,
        icon: '/icons/MachineQ (IoT) Icon_Fill.png',
        info: {
          title: 'IoT solutions available through MachineQ:',
          description: '**Smart Restrooms**\nEnsure clean, well-stocked and functioning restrooms.\n\n**Utility Monitoring**\nUncover opportunities to reduce energy consumption and costs in the store.'
        }
      }
    ]
  },
  {
    id: 'tech-room',
    name: 'Tech Room',
    description: 'Back of house area with network infrastructure and management systems',
    image: '/R7/R7/6-Tech-Area.jpg',
    category: 'infrastructure',
    hotspots: [
      {
        id: 'tech-connectivity',
        label: 'Managed Connectivity',
        x: 17,
        y: 63,
        icon: '/icons/Managed Connectivity_Fill.png',
        info: {
          title: 'Advanced technology solutions available through Comcast Business:',
          description: '**Managed Connectivity**\nBroadband solutions that offer nationwide internet connectivity with a variety of upload and download speeds to power your store locations.'
        }
      },
      {
        id: 'tech-sdwan',
        label: 'Managed SD-WAN',
        x: 39,
        y: 46,
        icon: '/icons/Managed SD-WAN_Fill.png',
        info: {
          title: 'Advanced technology solutions available through Comcast Business:',
          description: '**Managed SD-WAN**\nHelp manage your store\'s network.'
        }
      },
      {
        id: 'tech-security',
        label: 'Managed Security',
        x: 70,
        y: 45,
        icon: '/icons/Managed Security_Fill.png',
        info: {
          title: 'Advanced technology solutions available through Comcast Business:',
          description: '**Managed Security**\nHelp prevent your store from cyber attacks.'
        }
      }
    ]
  },
  {
    id: 'ev-charging',
    name: 'EV Charging',
    description: 'Electric vehicle charging station area with smart charging solutions',
    image: '/R7/R7/4-EV-Charging.jpg',
    category: 'facility',
    hotspots: [
      {
        id: 'ev-charging-stations',
        label: 'EV Charging',
        x: 50,
        y: 61,
        icon: '/icons/MachineQ (IoT) Icon_Fill.png',
        info: {
          title: 'Smart technology solutions available through Comcast Smart Solutions:',
          description: '**EV Charging**\nUniversally compatible turnkey electric vehicle (EV) charging stations with 3 different power output models and AI repair bot, giving businesses the flexibility and scalability to serve their customers with the convenience they need.'
        }
      }
    ]
  },
  {
    id: 'gas-station',
    name: 'Gas Station',
    description: 'Modern fuel dispensing area with digital payment and IoT monitoring',
    image: '/R7/R7/3-Gas-Station.jpg',
    category: 'retail',
    hotspots: [
      {
        id: 'gas-iot',
        label: 'Trash Fill Monitoring',
        x: 30,
        y: 82,
        icon: '/icons/MachineQ (IoT) Icon_Fill.png',
        info: {
          title: 'IoT solutions available through MachineQ:',
          description: '**Trash Fill Monitoring**\nRemotely monitor waste fill levels and receive automated alerts to streamline waste collection processes.'
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
