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
    id: 'c-store',
    name: 'C-Store',
    description: 'Main Convenience Store Area with shelving units, refrigerators, cash registers and food area',
    image: '/2. C-store.jpg',
    category: 'retail',
    hotspots: [
      {
        id: 'cstore-video-analytics',
        label: 'Video Analytics',
        x: 8,
        y: 35,
        icon: '/icons/Video Analytics & Presence Analytics.png',
        info: {
          title: 'Video Analytics',
          description: 'Gain valuable insights with anonymized data on how customers move throughout your store, when and where employees engage with them and how they are interacting within the store.',
          features: [
            'Customer movement tracking',
            'Employee engagement analytics',
            'Store interaction insights',
            'Anonymized data collection'
          ],
          specs: [
            { label: 'Type', value: 'Smart Solutions' },
            { label: 'Provider', value: 'Comcast Smart Solutions' },
            { label: 'Data', value: 'Anonymized analytics' },
            { label: 'Insights', value: 'Real-time dashboard' }
          ],
          benefits: [
            'Understand customer behavior',
            'Optimize store layout',
            'Improve customer experience'
          ]
        }
      },
      {
        id: 'cstore-presence-analytics',
        label: 'Presence Analytics',
        x: 82,
        y: 55,
        icon: '/icons/Video Analytics & Presence Analytics.png',
        info: {
          title: 'Presence Analytics',
          description: 'Understand occupancy and traffic flow trends to optimize space utilization and understand customer buying trends.',
          features: [
            'Occupancy monitoring',
            'Traffic flow analysis',
            'Space utilization insights',
            'Customer buying trend analysis'
          ],
          specs: [
            { label: 'Type', value: 'Smart Solutions' },
            { label: 'Provider', value: 'Comcast Smart Solutions' },
            { label: 'Monitoring', value: '24/7 real-time' },
            { label: 'Analytics', value: 'Trend reporting' }
          ],
          benefits: [
            'Optimize space utilization',
            'Understand customer trends',
            'Improve store efficiency'
          ]
        }
      },
      {
        id: 'cstore-managed-voice',
        label: 'Managed Voice',
        x: 35,
        y: 70,
        icon: '/icons/Managed Voice.png',
        info: {
          title: 'Managed Voice',
          description: 'Cost effective voice solutions across all store locations to help streamline employee communication.',
          features: [
            'Multi-location support',
            'Cost-effective solution',
            'Streamlined communication',
            'Reliable connectivity'
          ],
          specs: [
            { label: 'Type', value: 'Advanced Technology' },
            { label: 'Provider', value: 'Comcast Business' },
            { label: 'Coverage', value: 'All store locations' },
            { label: 'Quality', value: 'HD voice' }
          ],
          benefits: [
            'Reduce communication costs',
            'Improve employee coordination',
            'Reliable voice service'
          ]
        }
      },
      {
        id: 'cstore-digital-signage',
        label: 'Digital Signage',
        x: 50,
        y: 18,
        icon: '/icons/Smart Solutions Icon.png',
        info: {
          title: 'Digital Signage',
          description: 'Smart signage solutions, featuring digitally-integrated custom fixtures and custom dynamic displays.',
          features: [
            'Custom digital displays',
            'Dynamic content management',
            'Integrated fixtures',
            'Remote content updates'
          ],
          specs: [
            { label: 'Type', value: 'Smart Solutions' },
            { label: 'Provider', value: 'Comcast Smart Solutions' },
            { label: 'Display', value: 'HD digital screens' },
            { label: 'Management', value: 'Cloud-based' }
          ],
          benefits: [
            'Engage customers effectively',
            'Promote products dynamically',
            'Reduce printing costs'
          ]
        }
      },
      {
        id: 'cstore-kiosks',
        label: 'Self-Service Kiosks',
        x: 62,
        y: 70,
        icon: '/icons/Smart Solutions Icon.png',
        info: {
          title: 'Self-Service Kiosks',
          description: 'Enable fast transactions, while alleviating operational pressure and delivering a streamlined experience to customers. Ordering kiosks have ADA-compliant options, and add an AI tool to help translate 100+ languages and dialects.',
          features: [
            'Fast transaction processing',
            'ADA-compliant options',
            'AI-powered translation (100+ languages)',
            'Streamlined customer experience'
          ],
          specs: [
            { label: 'Type', value: 'Smart Solutions' },
            { label: 'Provider', value: 'Comcast Smart Solutions' },
            { label: 'Languages', value: '100+ supported' },
            { label: 'Compliance', value: 'ADA-compliant' }
          ],
          benefits: [
            'Reduce wait times',
            'Serve more customers',
            'Support multilingual customers'
          ]
        }
      },
      {
        id: 'cstore-wifi',
        label: 'Managed WiFi',
        x: 50,
        y: 10,
        icon: '/icons/Managed WiFi.png',
        info: {
          title: 'Managed WiFi',
          description: 'Wireless internet access throughout a c-store to enable customers to connect to wifi while in the store.',
          features: [
            'Store-wide coverage',
            'Guest access portal',
            'Secure connectivity',
            'Bandwidth management'
          ],
          specs: [
            { label: 'Type', value: 'Advanced Technology' },
            { label: 'Provider', value: 'Comcast Business' },
            { label: 'Speed', value: 'Up to 500 Mbps' },
            { label: 'Capacity', value: '50+ concurrent users' }
          ],
          benefits: [
            'Increase customer dwell time',
            'Enhance customer experience',
            'Marketing opportunities'
          ]
        }
      }
    ]
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    description: 'Commercial kitchen with IoT monitoring and leak detection',
    image: '/3. Kitchen.jpg',
    category: 'facility',
    hotspots: [
      {
        id: 'kitchen-leak-detection',
        label: 'Leak Detection',
        x: 8,
        y: 55,
        icon: '/icons/MachineQ (IoT) Icon.png',
        info: {
          title: 'Leak Detection',
          description: 'Safeguard convenience stores for water intrusion and receive real-time alerts if moisture is detected, enabling swift corrective action to help mitigate damage.',
          features: [
            'Real-time moisture detection',
            'Instant alerts',
            'Prevent water damage',
            'Swift corrective action'
          ],
          specs: [
            { label: 'Type', value: 'IoT Solutions' },
            { label: 'Provider', value: 'MachineQ' },
            { label: 'Alerts', value: 'SMS, email, mobile app' },
            { label: 'Monitoring', value: '24/7 automated' }
          ],
          benefits: [
            'Prevent costly water damage',
            'Protect equipment and inventory',
            'Peace of mind'
          ]
        }
      },
      {
        id: 'kitchen-temperature',
        label: 'Digital Temperature Monitoring',
        x: 92,
        y: 45,
        icon: '/icons/MachineQ (IoT) Icon.png',
        info: {
          title: 'Digital Temperature Monitoring',
          description: 'Automatically track and log temperatures in refrigerators, freezers and other cold storage units and receive real-time alerts if temperatures fall outside of predetermined thresholds.',
          features: [
            'Automated temperature tracking',
            'Real-time alerts',
            'Compliance logging',
            'Multiple unit monitoring'
          ],
          specs: [
            { label: 'Type', value: 'IoT Solutions' },
            { label: 'Provider', value: 'MachineQ' },
            { label: 'Monitoring', value: '24/7 cloud-based' },
            { label: 'Reporting', value: 'Automated compliance logs' }
          ],
          benefits: [
            'Food safety compliance',
            'Prevent spoilage',
            'Reduce waste'
          ]
        }
      },
      {
        id: 'kitchen-displays',
        label: 'Kitchen Display System',
        x: 50,
        y: 15,
        icon: '/icons/Smart Solutions Icon.png',
        info: {
          title: 'Kitchen Display System',
          description: 'Digital order management with real-time connectivity to POS systems for the food service area.',
          features: [
            'Real-time order routing',
            'Order timing and tracking',
            'Multi-station support',
            'POS integration'
          ],
          specs: [
            { label: 'Connection', value: 'High-speed network' },
            { label: 'Display', value: 'Touch-enabled screens' },
            { label: 'Integration', value: 'POS, online ordering' },
            { label: 'Reliability', value: 'Redundant connectivity' }
          ],
          benefits: [
            'Faster order fulfillment',
            'Reduced errors',
            'Better kitchen efficiency'
          ]
        }
      }
    ]
  },
  {
    id: 'public-restroom',
    name: 'Public Restroom',
    description: 'Modern restroom with smart fixtures and IoT monitoring',
    image: '/4. Public Restroom.jpg',
    category: 'facility',
    hotspots: [
      {
        id: 'restroom-smart-restrooms',
        label: 'Smart Restrooms',
        x: 50,
        y: 55,
        icon: '/icons/Smart Solutions Icon.png',
        info: {
          title: 'Smart Restrooms',
          description: 'Ensure clean, well-stocked and functioning restrooms with IoT-enabled monitoring.',
          features: [
            'Cleanliness monitoring',
            'Supply level tracking',
            'Maintenance alerts',
            'Occupancy detection'
          ],
          specs: [
            { label: 'Type', value: 'IoT Solutions' },
            { label: 'Provider', value: 'MachineQ' },
            { label: 'Sensors', value: 'Wireless IoT network' },
            { label: 'Alerts', value: 'Real-time mobile notifications' }
          ],
          benefits: [
            'Maintain cleanliness standards',
            'Optimize cleaning schedules',
            'Improve customer satisfaction'
          ]
        }
      },
      {
        id: 'restroom-utility-monitoring',
        label: 'Utility Monitoring',
        x: 90,
        y: 45,
        icon: '/icons/MachineQ (IoT) Icon.png',
        info: {
          title: 'Utility Monitoring',
          description: 'Uncover opportunities to reduce energy consumption and costs in the convenience store.',
          features: [
            'Energy consumption tracking',
            'Water usage monitoring',
            'Cost reduction insights',
            'Sustainability reporting'
          ],
          specs: [
            { label: 'Type', value: 'IoT Solutions' },
            { label: 'Provider', value: 'MachineQ' },
            { label: 'Monitoring', value: 'Real-time dashboard' },
            { label: 'Analytics', value: 'Usage patterns and trends' }
          ],
          benefits: [
            'Reduce energy costs',
            'Environmental sustainability',
            'Identify inefficiencies'
          ]
        }
      },
      {
        id: 'restroom-lighting',
        label: 'Smart Lighting',
        x: 50,
        y: 12,
        icon: '/icons/Smart Solutions Icon.png',
        info: {
          title: 'Smart Lighting',
          description: 'Motion-activated LED lighting with energy monitoring for restroom facilities.',
          features: [
            'Motion-activated controls',
            'Energy-efficient LEDs',
            'Automatic on/off',
            'Long lifespan'
          ],
          specs: [
            { label: 'Type', value: 'Smart Solutions' },
            { label: 'Technology', value: 'LED with motion sensors' },
            { label: 'Energy Savings', value: 'Up to 50%' },
            { label: 'Lifespan', value: '50,000+ hours' }
          ],
          benefits: [
            'Significant energy savings',
            'Reduced maintenance',
            'Enhanced safety'
          ]
        }
      }
    ]
  },
  {
    id: 'tech-room',
    name: 'Tech Room',
    description: 'Back of house area with network infrastructure and management systems',
    image: '/5. Tech Room.jpg',
    category: 'infrastructure',
    hotspots: [
      {
        id: 'tech-connectivity',
        label: 'Managed Connectivity',
        x: 45,
        y: 40,
        icon: '/icons/Managed Connectivity.png',
        info: {
          title: 'Managed Connectivity',
          description: 'Broadband solutions that offer nationwide internet connectivity with a variety of upload and download speeds to power your store locations.',
          features: [
            'Nationwide coverage',
            'Flexible speed options',
            'Reliable connectivity',
            'Business-grade service'
          ],
          specs: [
            { label: 'Type', value: 'Advanced Technology' },
            { label: 'Provider', value: 'Comcast Business' },
            { label: 'Speed', value: 'Up to 1 Gbps' },
            { label: 'Uptime', value: '99.9% SLA' }
          ],
          benefits: [
            'Power all business operations',
            'Scalable for growth',
            'Professional support'
          ]
        }
      },
      {
        id: 'tech-sdwan',
        label: 'Managed SD-WAN',
        x: 55,
        y: 40,
        icon: '/icons/Managed SD-WAN.png',
        info: {
          title: 'Managed SD-WAN',
          description: 'Help manage your store\'s network with software-defined wide area networking.',
          features: [
            'Centralized network management',
            'Application prioritization',
            'Automatic failover',
            'Multi-location support'
          ],
          specs: [
            { label: 'Type', value: 'Advanced Technology' },
            { label: 'Provider', value: 'Comcast Business' },
            { label: 'Management', value: 'Cloud-based dashboard' },
            { label: 'Redundancy', value: 'Automatic failover' }
          ],
          benefits: [
            'Simplified network management',
            'Improved application performance',
            'Reduced complexity'
          ]
        }
      },
      {
        id: 'tech-security',
        label: 'Managed Security',
        x: 92,
        y: 50,
        icon: '/icons/Managed Security.png',
        info: {
          title: 'Managed Security',
          description: 'Help prevent your store from cyber attacks with enterprise-grade security solutions.',
          features: [
            'Advanced threat protection',
            'Firewall management',
            '24/7 security monitoring',
            'Intrusion prevention'
          ],
          specs: [
            { label: 'Type', value: 'Advanced Technology' },
            { label: 'Provider', value: 'Comcast Business' },
            { label: 'Monitoring', value: '24/7/365' },
            { label: 'Protection', value: 'Multi-layer security' }
          ],
          benefits: [
            'Protect against cyber threats',
            'Ensure business continuity',
            'Peace of mind'
          ]
        }
      }
    ]
  },
  {
    id: 'ev-charging',
    name: 'EV Charging',
    description: 'Electric vehicle charging station area with smart charging solutions',
    image: '/6. EV Charging.jpg',
    category: 'facility',
    hotspots: [
      {
        id: 'ev-chargers',
        label: 'EV Charging Stations',
        x: 62,
        y: 68,
        icon: '/icons/Smart Solutions Icon.png',
        info: {
          title: 'EV Charging Stations',
          description: 'Universally compatible turnkey electric vehicle (EV) charging stations with 3 different power output models and AI repair bot, giving businesses the flexibility and scalability to serve their customers with the convenience they need.',
          features: [
            'Universal compatibility',
            '3 power output models',
            'AI repair bot',
            'Turnkey solution'
          ],
          specs: [
            { label: 'Type', value: 'Smart Solutions' },
            { label: 'Provider', value: 'Comcast Smart Solutions' },
            { label: 'Models', value: 'Level 2 (7-19 kW)' },
            { label: 'Support', value: 'AI-powered diagnostics' }
          ],
          benefits: [
            'New revenue stream',
            'Attract EV customers',
            'Future-proof investment'
          ]
        }
      },
      {
        id: 'ev-network',
        label: 'Network Connectivity',
        x: 38,
        y: 60,
        icon: '/icons/Managed Connectivity.png',
        info: {
          title: 'Charging Network Infrastructure',
          description: 'Reliable network connectivity for charging station operations and management.',
          features: [
            'Dedicated connection',
            'Real-time transaction processing',
            'Remote diagnostics',
            'Usage analytics'
          ],
          specs: [
            { label: 'Connection', value: 'Fiber or dedicated circuit' },
            { label: 'Redundancy', value: '4G/5G backup' },
            { label: 'Bandwidth', value: 'Dedicated, not shared' },
            { label: 'Security', value: 'Encrypted transactions' }
          ],
          benefits: [
            'Reliable operations',
            'Remote management',
            'Detailed insights'
          ]
        }
      },
      {
        id: 'ev-lighting',
        label: 'Security & Lighting',
        x: 50,
        y: 20,
        icon: '/icons/Managed Security.png',
        info: {
          title: 'Charging Area Security',
          description: 'Well-lit and monitored charging area for customer safety and security.',
          features: [
            'HD security cameras',
            'Motion-activated lighting',
            'Emergency call buttons',
            '24/7 monitoring'
          ],
          specs: [
            { label: 'Cameras', value: '1080p with night vision' },
            { label: 'Lighting', value: 'LED with motion sensors' },
            { label: 'Storage', value: 'Cloud video retention' },
            { label: 'Alerts', value: 'Real-time notifications' }
          ],
          benefits: [
            'Customer safety',
            'Liability protection',
            'Theft prevention'
          ]
        }
      }
    ]
  },
  {
    id: 'gas-station',
    name: 'Gas Station',
    description: 'Modern fuel dispensing area with digital payment and IoT monitoring',
    image: '/7. Gas Station.jpg',
    category: 'retail',
    hotspots: [
      {
        id: 'gas-payment',
        label: 'Payment Systems',
        x: 35,
        y: 62,
        icon: '/icons/Managed Connectivity.png',
        info: {
          title: 'Digital Payment Processing',
          description: 'Fast, secure payment processing at the pump with EMV and contactless support.',
          features: [
            'EMV chip card support',
            'Contactless payments',
            'Mobile wallet integration',
            'High-speed authorization'
          ],
          specs: [
            { label: 'Connection', value: 'Dedicated secure circuit' },
            { label: 'Speed', value: '< 2 second authorization' },
            { label: 'Security', value: 'PCI-DSS compliant' },
            { label: 'Uptime', value: '99.9% SLA' }
          ],
          benefits: [
            'Faster transactions',
            'Reduced fraud',
            'Modern experience'
          ]
        }
      },
      {
        id: 'gas-monitoring',
        label: 'Fuel Tank Monitoring',
        x: 50,
        y: 80,
        icon: '/icons/MachineQ (IoT) Icon.png',
        info: {
          title: 'Tank & Dispenser Monitoring',
          description: 'Real-time monitoring of fuel levels, leak detection, and equipment status.',
          features: [
            'Automated tank gauging',
            'Leak detection systems',
            'Dispenser diagnostics',
            'Inventory management'
          ],
          specs: [
            { label: 'Type', value: 'IoT Solutions' },
            { label: 'Provider', value: 'MachineQ' },
            { label: 'Monitoring', value: 'Real-time sensors' },
            { label: 'Alerts', value: 'Immediate notifications' }
          ],
          benefits: [
            'Environmental compliance',
            'Prevent costly spills',
            'Optimize inventory'
          ]
        }
      },
      {
        id: 'gas-cameras',
        label: 'Surveillance Cameras',
        x: 50,
        y: 18,
        icon: '/icons/Managed Security.png',
        info: {
          title: 'Multi-Camera Security System',
          description: 'Comprehensive video surveillance for safety, security, and drive-off prevention.',
          features: [
            'License plate recognition',
            'HD video at all pumps',
            'Cloud storage',
            'Mobile app viewing'
          ],
          specs: [
            { label: 'Resolution', value: '1080p Full HD' },
            { label: 'LPR', value: 'Automatic plate capture' },
            { label: 'Storage', value: '60-day cloud retention' },
            { label: 'Integration', value: 'POS system sync' }
          ],
          benefits: [
            'Prevent drive-offs',
            'Investigate incidents',
            'Insurance benefits'
          ]
        }
      },
      {
        id: 'gas-trash-monitoring',
        label: 'Trash Fill Monitoring',
        x: 15,
        y: 55,
        icon: '/icons/MachineQ (IoT) Icon.png',
        info: {
          title: 'Trash Fill Monitoring',
          description: 'Remotely monitor waste fill levels and receive automated alerts to streamline waste collection processes.',
          features: [
            'Remote fill level monitoring',
            'Automated alerts',
            'Optimized collection routes',
            'Waste analytics'
          ],
          specs: [
            { label: 'Type', value: 'IoT Solutions' },
            { label: 'Provider', value: 'MachineQ' },
            { label: 'Sensors', value: 'Wireless IoT' },
            { label: 'Alerts', value: 'SMS, email, mobile app' }
          ],
          benefits: [
            'Reduce collection costs',
            'Prevent overflow',
            'Optimize staff efficiency'
          ]
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
