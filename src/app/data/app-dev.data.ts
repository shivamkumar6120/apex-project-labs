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
  },
  {
    id: 'app-qr-attendance',
    title: 'QR Code Attendance App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
    price: 4299,
    shortDescription: 'Teachers generate a class QR code and students scan it to mark attendance with time and subject logged automatically.',
    fullDescription: 'Replaces paper attendance with a scan-based flow. Faculty start a session and display a rotating QR code; students scan it to mark present. Records store student ID, subject, and timestamp in Firebase, with a local SQLite cache for offline review.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Faculty QR session generator with timed refresh',
      'Student scanner that records ID, subject, and timestamp',
      'Attendance lists and CSV export for faculty',
      'Firebase cloud store with SQLite offline cache',
      'Setup guide covering camera permissions and Firebase config'
    ]
  },
  {
    id: 'app-recipe-finder',
    title: 'Recipe Finder App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'REST API', 'Firebase'],
    price: 3999,
    shortDescription: 'Search recipes by ingredients you already have, save favorites, and view step-by-step cooking instructions.',
    fullDescription: 'Helps home cooks decide what to make from available ingredients. Search by dish name or pantry items, open ingredient lists and steps, and bookmark favorites. Recipes load from a public food API with optional Firebase saved lists.',
    imageUrl: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Search by dish name or leftover ingredients',
      'Step-by-step instructions with ingredient quantities',
      'Favorites list synced with Firebase',
      'Offline viewing of recently opened recipes',
      'API setup notes and sample search queries'
    ]
  },
  {
    id: 'app-habit-tracker',
    title: 'Habit Tracker App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'SQLite', 'Firebase'],
    price: 4099,
    shortDescription: 'Build daily habits with streaks, reminders, and a calendar view showing which days you completed each goal.',
    fullDescription: 'A habit companion for studying, fitness, or reading. Users create habits, tick them off each day, and watch streaks grow on a calendar heatmap. Local SQLite keeps data fast, with optional Firebase backup across devices.',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Create habits with daily or weekly targets',
      'Streak counters and calendar completion heatmap',
      'Local notifications for reminder times',
      'SQLite storage with optional Firebase sync',
      'Project report covering streak logic and UI flow'
    ]
  },
  {
    id: 'app-language-flashcards',
    title: 'Language Learning Flashcard App',
    category: 'App Dev',
    techStack: ['React Native', 'TypeScript', 'SQLite', 'Expo'],
    price: 4199,
    shortDescription: 'Flip flashcards to learn vocabulary, track known vs new words, and practice with a simple spaced review queue.',
    fullDescription: 'A React Native flashcard app for vocabulary practice. Learners flip cards, mark words as known or still learning, and review harder items more often. Decks can be created for any language pair and stored locally with SQLite.',
    imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Custom decks with front/back flashcards',
      'Known vs learning status and review queue',
      'Flip animation and progress counters',
      'SQLite persistence for decks on device',
      'Expo project structure with sample English–Hindi cards'
    ]
  },
  {
    id: 'app-local-service-booking',
    title: 'Local Service Booking App (like Urban Company)',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    price: 4899,
    shortDescription: 'Book home services such as plumbing or salon visits, pick a time slot, and track the assigned professional.',
    fullDescription: 'A two-sided local services app. Customers browse categories, choose a professional, pick a slot, and track booking status. Service partners accept jobs and update progress. Firebase handles users and bookings; maps help show service areas.',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Customer and service-partner app flows',
      'Category listings, slot booking, and status tracking',
      'Map-based service area and address pin',
      'Firebase auth, bookings, and push updates',
      'Architecture notes for the two-sided marketplace'
    ]
  },
  {
    id: 'app-music-player',
    title: 'Music Player App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'SQLite', 'Just Audio'],
    price: 3999,
    shortDescription: 'Play local songs with playlists, shuffle, repeat, and a now-playing screen with lock-screen controls.',
    fullDescription: 'A local music player that reads audio files from the device. Supports playlists, shuffle, repeat, and a now-playing view with seek bar. Background playback and notification controls make it feel like a real player app.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Local library scan with album and artist grouping',
      'Playlists, shuffle, repeat, and seek controls',
      'Now-playing screen with background audio',
      'SQLite store for favorites and recent tracks',
      'Permission and player setup documented for Android'
    ]
  },
  {
    id: 'app-note-taking-cloud',
    title: 'Note Taking App with Cloud Sync',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
    price: 4299,
    shortDescription: 'Create notes and checklists that stay on the phone offline and sync to the cloud when the internet is back.',
    fullDescription: 'A notes app that works without waiting for a network. Users write notes or checklists locally, then sync to Firebase when online so the same notebook appears on another device. Includes folders, search, and simple rich-text styling.',
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Offline-first notes and checklists in SQLite',
      'Firebase cloud sync when connectivity returns',
      'Folders, search, and pin-to-top notes',
      'Conflict-safe last-write handling for demos',
      'Sync architecture explained in the project report'
    ]
  },
  {
    id: 'app-job-search',
    title: 'Job Search App',
    category: 'App Dev',
    techStack: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
    price: 4599,
    shortDescription: 'Browse job listings, filter by role and city, save openings, and apply with a stored profile and resume.',
    fullDescription: 'A mobile job hunt app for students and freshers. Search openings, filter by skill and location, save jobs, and submit applications from a stored profile. Recruiters can post roles through the same backend APIs built with Node.js and MongoDB.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Job search with skill, city, and experience filters',
      'Saved jobs and application status tracking',
      'Candidate profile with resume upload',
      'Node.js APIs and MongoDB job collections',
      'Sample listings and API docs for evaluation'
    ]
  },
  {
    id: 'app-online-exam-quiz',
    title: 'Online Exam/Quiz App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Node.js'],
    price: 4499,
    shortDescription: 'Timed MCQ exams with auto-submit, score reports, and a teacher panel to create question papers.',
    fullDescription: 'Runs class tests on phones. Students log in, attempt a timed MCQ paper, and get scores after auto-submit. Teachers create question banks, set duration, and review results. Firebase stores papers and attempts for a complete exam loop.',
    imageUrl: 'https://images.unsplash.com/photo-1606326608606-4a1769e1c0c3?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Timed MCQ attempts with auto-submit on timeout',
      'Teacher panel for papers, marks, and result lists',
      'Per-question review after the exam ends',
      'Firebase auth and attempt storage',
      'Exam flow diagrams in the project documentation'
    ]
  },
  {
    id: 'app-rental-property-finder',
    title: 'Rental Property Finder App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    price: 4699,
    shortDescription: 'Find rental homes on a map, filter by rent and BHK, and contact owners or agents from the listing.',
    fullDescription: 'A rentals discovery app with map pins and list view. Tenants filter by budget, BHK, and furnishing, open photo listings, and message owners. Owners post properties with location pins using Google Maps and Firebase storage.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Map and list views for rental listings',
      'Filters for rent, BHK, and furnishing type',
      'Owner posting flow with photos and map pin',
      'In-app contact or inquiry for shortlisted homes',
      'Maps and Firebase setup documented for Android/iOS'
    ]
  },
  {
    id: 'app-personal-diary',
    title: 'Personal Diary/Journal App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'SQLite', 'Firebase'],
    price: 3999,
    shortDescription: 'Write daily journal entries with mood tags and optional lock screen, stored privately on the device.',
    fullDescription: 'A private journal for daily writing. Entries support mood tags, photos, and a PIN lock. Notes stay in SQLite by default, with optional encrypted cloud backup to Firebase for recovery.',
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Dated journal entries with mood tags',
      'PIN lock and hide-on-recents option',
      'Calendar jump to days that have entries',
      'SQLite local store with optional Firebase backup',
      'Privacy notes and setup guide in the report'
    ]
  },
  {
    id: 'app-currency-converter',
    title: 'Currency Converter App',
    category: 'App Dev',
    techStack: ['React Native', 'TypeScript', 'Expo', 'REST API'],
    price: 3999,
    shortDescription: 'Convert between world currencies using live exchange rates, with a simple amount keypad and favorites.',
    fullDescription: 'A focused converter app that fetches live FX rates from a public API. Users type an amount, pick two currencies, and see the converted value instantly. Favorite pairs and last-used rates are cached for offline display.',
    imageUrl: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Live exchange-rate API with cached fallback',
      'Amount keypad and swap-currency action',
      'Favorite currency pairs on the home screen',
      'Expo project ready for Android and iOS previews',
      'API key and error-handling notes in the docs'
    ]
  },
  {
    id: 'app-vehicle-service-booking',
    title: 'Car/Bike Service Booking App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    price: 4499,
    shortDescription: 'Book car or bike servicing at nearby garages, pick a slot, and track job status until pickup.',
    fullDescription: 'Connects vehicle owners with local service centers. Users choose car or bike service packages, pick a workshop on the map, book a slot, and watch status from drop-off to ready. Workshops update jobs from a partner view in Firebase.',
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Service package catalog for cars and bikes',
      'Workshop discovery on Google Maps',
      'Slot booking and live job status updates',
      'Partner workshop view to accept and close jobs',
      'Firebase schema and booking flow in the report'
    ]
  },
  {
    id: 'app-skill-sharing-tutoring',
    title: 'Skill Sharing & Tutoring App',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Node.js'],
    price: 4699,
    shortDescription: 'Find tutors by subject, book a session, and chat to coordinate class time and notes.',
    fullDescription: 'A peer tutoring marketplace for campus skills. Learners search tutors by subject and rate, book a slot, and chat to share notes. Tutors set availability and subjects. Firebase plus a small Node.js API handle profiles, bookings, and messages.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Tutor discovery by subject, rate, and rating',
      'Session booking with availability calendar',
      'In-app chat for class coordination',
      'Tutor profile and earnings summary view',
      'Marketplace architecture documented for viva'
    ]
  }
];
