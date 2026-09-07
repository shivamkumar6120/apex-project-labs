// App Dev Projects
import { Project } from '../models/project.model';

export const APP_DEV_PROJECTS: Project[] = [
  {
    id: 'app-campus-smart-transit',
    title: 'College Bus Live Tracking App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Node.js'],
    price: 4799,
    shortDescription: 'Live GPS bus locator with ETA countdowns, QR ticketing, emergency SOS alerts, and student crowd density forecasts.',
    fullDescription: 'Cross-platform mobile application designed for college campus transportation systems. Provides live bus tracking via Google Maps SDK, geofenced automated push notifications when buses approach student stops, digital QR ticketing wallet, and background push notifications.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Smooth 60 FPS Google Maps live bus location marker interpolation',
      'Dynamic ETA countdowns based on route traffic data',
      'Student QR-code ticketing wallet with simulated verification',
      'SOS emergency alert broadcast with geolocation coordinates',
      'Complete mobile source code for Android and iOS builds'
    ]
  },
  {
    id: 'app-expense-tracker-budget',
    title: 'Expense Tracker App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'SQLite', 'Firebase'],
    price: 4199,
    shortDescription: 'Offline-first expense tracker featuring receipt camera scanning, budget threshold warnings, and visual analytics.',
    fullDescription: 'A personal finance companion built with Flutter. Offers offline-first data caching with local SQLite, automated receipt expense scanning via OCR, monthly category budgets, and recurring expense reminders, all synced to Firebase Cloud Firestore when connected.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Offline-first SQLite storage architecture with automatic cloud syncing',
      'Receipt text scanning and automatic cost extraction via on-device OCR',
      'Interactive spending category breakdown charts and exportable PDF statements',
      'Custom budget alerts when category spending approaches 80% or 100%',
      'Complete Flutter codebase with clean BLoC state management'
    ]
  },
  {
    id: 'app-fitness-workout-companion',
    title: 'Fitness Tracker App',
    category: 'App Dev',
    techStack: ['React Native', 'TypeScript', 'Redux', 'Node.js'],
    price: 4399,
    shortDescription: 'Mobile fitness app with interactive exercise animations, rest interval timers, and macro nutrition logs.',
    fullDescription: 'Cross-platform fitness application developed in React Native. Features animated exercise demonstrations, custom routine builders, automatic rest countdown timers with haptic vibrations, daily calorie/macro logging, and step-count tracking via device sensors.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Curated library of 100+ exercises with GIF demonstrations and muscle focus tags',
      'Rest interval stopwatch with background notifications and haptic alerts',
      'Daily calorie and macronutrient progress rings (Carbs, Protein, Fat)',
      'Redux Toolkit centralized state with persistent local storage',
      'Comprehensive project report with UI wireframes and database models'
    ]
  },
  {
    id: 'app-campus-food-ordering',
    title: 'Campus Canteen Food Ordering App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Razorpay'],
    price: 4499,
    shortDescription: 'Canteen pre-ordering mobile app with live token queue updates, digital wallet payments, and pickup alerts.',
    fullDescription: 'Designed to eliminate long lines at college cafeterias. Students browse live menus, schedule order pickup times, pay using integrated Razorpay test gateways, and receive instant push notifications when their digital order token is ready for counter collection.',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Live digital token queuing system updating in real time with Firebase',
      'Integrated Razorpay test payment gateway and in-app credit wallet',
      'Kitchen order display screen mode for canteen staff',
      'Automated push notifications for order readiness and pickup alerts',
      'Step-by-step setup documentation with Firebase configuration guides'
    ]
  },
  {
    id: 'app-secure-team-chat',
    title: 'Encrypted Chat & Messaging App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'WebSocket', 'Node.js'],
    price: 4699,
    shortDescription: 'Cross-platform chat app featuring end-to-end message encryption, typing indicators, and media sharing.',
    fullDescription: 'A secure mobile communication client inspired by Signal. Features client-side AES-256 message encryption, ephemeral disappearing messages, voice note recording, read receipts, and instantaneous socket communication orchestrated by a Node.js microservice.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Client-side AES-256 message encryption with ephemeral disappearing chats',
      'Sub-second WebSocket messaging with delivery and read receipt ticks',
      'Voice memo audio recorder and player with waveform visualization',
      'Group messaging with admin privileges and user invite links',
      'Complete Flutter and Node.js source code with security architecture report'
    ]
  },
  {
    id: 'app-elearning-student-lms',
    title: 'Student E-Learning & Quiz App',
    category: 'App Dev',
    techStack: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    price: 4599,
    shortDescription: 'Mobile education app with video lectures, interactive chapter quizzes, and offline course caching.',
    fullDescription: 'A modern e-learning mobile platform for students. Supports course enrollment, video lecture streaming with background audio playback, chapter-wise MCQs with instant scoring, and encrypted offline downloading to permit studying without an active internet connection.',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Adaptive video playback with variable playback speeds and chapter markers',
      'Offline video download manager storing encrypted cache files locally',
      'Interactive multiple-choice quizzes with timer and performance analytics',
      'Student course completion certificates with verifiable unique serial codes',
      'Ready-to-deploy backend and clean React Native Expo project structure'
    ]
  },
  {
    id: 'app-smart-parking-finder',
    title: 'Parking Slot Booking App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'Google Maps API', 'Firebase'],
    price: 4299,
    shortDescription: 'Geolocated parking discovery app allowing drivers to search, reserve, and navigate to vacant parking bays.',
    fullDescription: 'Solves urban parking congestion by providing live availability of street and garage parking spaces. Features interactive Google Maps integration with custom parking pin markers, reservation time slots, QR check-in codes, and turn-by-turn routing to the reserved stall.',
    imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Interactive Google Maps markers showing real-time vacancy counts',
      'Slot reservation system with countdown timer and automated cancellation',
      'QR code generator for contactless parking barrier entry/exit',
      'Integrated in-app turn-by-turn navigation via Google Maps intent',
      'Full documentation package including database schemas and API specs'
    ]
  },
  {
    id: 'app-blood-donor-emergency',
    title: 'Emergency Blood Donor Finder App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'Google Maps API', 'Firebase'],
    price: 3999,
    shortDescription: 'Community emergency app connecting blood seekers with nearby matching donors via geofenced push alerts.',
    fullDescription: 'A mission-critical healthcare utility that pairs patients requiring urgent blood transfusions with verified donors within a 15 km radius. Implements blood group compatibility matrices, automated push notifications to eligible donors, and direct in-app masked phone calls.',
    imageUrl: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Geofenced radius matching finding eligible donors within custom distance',
      'Universal blood group compatibility matrix logic (A+, B+, O-, etc.)',
      'Emergency broadcast alert system with Firebase Cloud Messaging (FCM)',
      'Verified donor badge system preventing spam or unverified requests',
      'Comprehensive project report with social impact analysis and app architecture'
    ]
  },
  {
    id: 'app-doctor-appointment-booking',
    title: 'Doctor Appointment Booking App',
    category: 'App Dev',
    techStack: ['React Native', 'TypeScript', 'Express', 'PostgreSQL'],
    price: 4799,
    shortDescription: 'Healthcare booking app with doctor specialty filters, appointment calendar slots, and health vault storage.',
    fullDescription: 'A patient-facing healthcare app built with React Native and TypeScript. Patients can filter verified medical practitioners by specialty, fees, and patient reviews, reserve consultation time slots, and securely upload lab test reports and past prescriptions to their encrypted digital health vault.',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Doctor discovery with specialty filtering (Cardiology, Dermatology, etc.)',
      'Interactive date and time slot calendar picker with live conflict checking',
      'Patient document vault for storing lab results and prescription PDFs',
      'Appointment reminder push notifications sent 24h and 1h prior to visit',
      'Clean TypeScript codebase with PostgreSQL relational backend API'
    ]
  },
  {
    id: 'app-travel-itinerary-planner',
    title: 'Travel Trip Planner & Expense App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'Mapbox API', 'Firebase'],
    price: 4299,
    shortDescription: 'Travel companion app featuring day-by-day itinerary builders, expense splitting, and offline map caching.',
    fullDescription: 'Enables groups of friends to plan trips collaboratively. Features a shared drag-and-drop itinerary board, offline map navigation via Mapbox, integrated currency converter, and an automated Splitwise-style group expense division module.',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Day-by-day itinerary schedule organizer with custom activity tags',
      'Multi-user shared trip collaboration with real-time Firebase syncing',
      'Fair expense splitting algorithm with balance settlement calculations',
      'Offline Mapbox vector map caching for remote hiking or overseas travel',
      'Complete Flutter project documentation and setup video guide'
    ]
  },
  {
    id: 'app-smart-grocery-delivery',
    title: 'Grocery Delivery App',
    category: 'App Dev',
    techStack: ['React Native', 'Redux Toolkit', 'Node.js', 'MongoDB'],
    price: 4899,
    shortDescription: 'Two-sided grocery delivery mobile suite featuring live order tracking, category catalogs, and driver routing.',
    fullDescription: 'An on-demand grocery shopping application consisting of both customer and delivery driver mobile interfaces. Features product search with inventory management, address geolocation picking, live rider GPS tracking, and delivery confirmation via PIN verification.',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Two distinct app interfaces: Customer ordering app and Driver fulfillment app',
      'Real-time rider location coordinates streaming over WebSockets',
      'Address pin drop with reverse-geocoding via OpenStreetMap API',
      'Redux Toolkit state management handling cart checkout workflows',
      'Full source code and complete academic project documentation'
    ]
  }
];
