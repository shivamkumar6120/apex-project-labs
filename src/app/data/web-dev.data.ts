// Web Dev Projects (Stack: Angular + Java Spring Boot + MySQL)
import { Project } from '../models/project.model';

export const WEB_DEV_PROJECTS: Project[] = [
  {
    id: 'web-telemedicine-portal',
    title: 'TeleMedix: Enterprise Telemedicine & Consultation Portal',
    category: 'Web Dev',
    techStack: ['Angular', 'Java Spring Boot', 'MySQL', 'WebRTC'],
    price: 4999,
    shortDescription: 'Enterprise telehealth consultation web app featuring encrypted WebRTC video calls, slot booking, and digital prescriptions.',
    fullDescription: 'A production-grade full-stack healthcare application built with Angular and Java Spring Boot. Enables remote doctor-patient appointments, real-time consultation scheduling, patient health record vaults, and automated PDF prescription downloads with transactional MySQL storage.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Peer-to-peer WebRTC video consultations with audio/video controls',
      'Doctor appointment calendar scheduling with real-time slot locking',
      'Automated digital prescription generation using iText PDF in Spring Boot',
      'Role-based access control (Doctor, Patient, Admin) with Spring Security & JWT',
      'Normalized MySQL relational schema with Liquibase database migrations'
    ]
  },
  {
    id: 'web-cloud-ide-workspace',
    title: 'CloudForge: Collaborative In-Browser IDE & Code Execution Workspace',
    category: 'Web Dev',
    techStack: ['Angular', 'Java Spring Boot', 'MySQL', 'Docker API'],
    price: 5499,
    shortDescription: 'In-browser development workspace pairing Monaco Editor with isolated Dockerized code execution microservices.',
    fullDescription: 'Enables developers to write, compile, and run code entirely within a web browser. Features a reactive Angular frontend hosting Monaco Editor, while the Java Spring Boot backend manages sandboxed Docker container executions with timeouts and CPU caps, storing user projects in MySQL.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Monaco Editor integration with syntax highlighting and auto-formatting',
      'Multi-language code compilation (Java, Python, C++) via Docker API',
      'File tree hierarchy and tab management stored in MySQL database',
      'Real-time terminal execution output streaming via WebSockets',
      'Complete installation guide with Docker setup scripts'
    ]
  },
  {
    id: 'web-ecommerce-marketplace',
    title: 'ApexMart: Enterprise Multi-Vendor E-Commerce Platform',
    category: 'Web Dev',
    techStack: ['Angular', 'Java Spring Boot', 'MySQL', 'Spring Security'],
    price: 4899,
    shortDescription: 'Full-featured marketplace with vendor portals, shopping cart state management, and payment checkout workflows.',
    fullDescription: 'An enterprise e-commerce platform engineered with Angular standalone components and a robust Java Spring Boot backend. Features vendor store management, product catalogs with multi-variant inventory, customer wishlist/cart syncing, and ACID-compliant MySQL transaction processing.',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Modular Angular state management for cart, checkout, and inventory',
      'Multi-vendor management portal with revenue analytics dashboard',
      'Spring Security authentication with JWT tokens and bcrypt password hashing',
      'Automated invoice generation and order status lifecycle tracking',
      'Production-ready MySQL schema with indexing for fast catalog queries'
    ]
  },
  {
    id: 'web-hospital-management',
    title: 'CareSync: Integrated Hospital ERP & Patient Health Records',
    category: 'Web Dev',
    techStack: ['Angular', 'Java Spring Boot', 'MySQL', 'Hibernate'],
    price: 4799,
    shortDescription: 'Hospital administrative system automating in-patient admission, bed allocation, lab reports, and doctor rounds.',
    fullDescription: 'Streamlines healthcare operational workflows across clinical departments. Designed with a clean Angular dashboard communicating with Java Spring Boot REST endpoints, using Hibernate ORM for structured relational queries in MySQL. Manages patient admission, ward allocation, and lab billing.',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'In-patient bed management and ICU ward occupancy tracking',
      'Pathology lab diagnostic test ordering and PDF report dispatch',
      'Doctor round notes, prescription history, and discharge summaries',
      'Spring Data JPA repository architecture with audited entity history',
      'Complete project documentation, ER diagrams, and SQL dump'
    ]
  },
  {
    id: 'web-college-erp-portal',
    title: 'UniSphere: Autonomous College ERP & Academic Administration Portal',
    category: 'Web Dev',
    techStack: ['Angular', 'Java Spring Boot', 'MySQL', 'JWT'],
    price: 4699,
    shortDescription: 'Comprehensive campus ERP managing student admissions, course enrollments, attendance tracking, and grading.',
    fullDescription: 'An enterprise campus administration portal built for universities. Handles student lifecycle from admission to graduation. Includes faculty grade submission portals, student semester registration, attendance percentage computation, and fee payment tracking backed by MySQL database.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Role-segregated dashboards for Students, Faculty, HOD, and Administrators',
      'Automated GPA and CGPA credit calculation based on university regulations',
      'Subject elective bidding and timetable generation modules',
      'Secure Java Spring Boot REST services with JWT token refresh handlers',
      'Ready-to-deploy SQL database scripts with pre-populated dummy academic records'
    ]
  },
  {
    id: 'web-blogging-cms-platform',
    title: 'BytePress: Developer Publishing CMS & Interactive Tech Blog Portal',
    category: 'Web Dev',
    techStack: ['Angular', 'Java Spring Boot', 'MySQL', 'Quill.js'],
    price: 4199,
    shortDescription: 'Content management system featuring rich WYSIWYG editing, markdown syntax highlighting, and engagement analytics.',
    fullDescription: 'A Medium-style publishing web application tailored for technical writers. Features Quill.js rich text with syntax highlighting, tag categorization, reading time estimation, nested comment threads, and an author analytics dashboard powered by Java Spring Boot and MySQL.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'WYSIWYG rich text editor with markdown import/export and syntax highlighting',
      'Clap/like reactions and threaded recursive comment discussions',
      'Author analytics tracking view counts, read ratios, and bookmark metrics',
      'Spring Boot full-text search indexing across article content and tags',
      'Thorough documentation with schema diagrams and installation scripts'
    ]
  },
  {
    id: 'web-food-delivery-system',
    title: 'QuickBite: On-Demand Food Delivery Management & Ordering System',
    category: 'Web Dev',
    techStack: ['Angular', 'Java Spring Boot', 'MySQL', 'Stripe API'],
    price: 4899,
    shortDescription: 'Food ordering platform with restaurant menu builders, live delivery tracking, and order dispatch management.',
    fullDescription: 'Complete food delivery web platform connecting customers, restaurant owners, and delivery managers. Built with Angular and Java Spring Boot, providing dynamic menu customization, cart checkout with simulated payment gateways, and real-time delivery status updates stored in MySQL.',
    imageUrl: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Restaurant menu builder with item customization (sizes, toppings, add-ons)',
      'Live order state pipeline (Received, Preparing, Dispatched, Delivered)',
      'Simulated Stripe/Razorpay payment gateway checkout experience',
      'Restaurant owner management portal for real-time order acceptance',
      'Complete source code with pre-configured MySQL sample restaurants'
    ]
  },
  {
    id: 'web-job-recruitment-portal',
    title: 'HirePulse: Intelligent Recruitment & ATS Applicant Tracking System',
    category: 'Web Dev',
    techStack: ['Angular', 'Java Spring Boot', 'MySQL', 'REST API'],
    price: 4599,
    shortDescription: 'Enterprise hiring portal facilitating job listings, candidate resume parsing, interview scheduling, and feedback.',
    fullDescription: 'An applicant tracking system (ATS) connecting recruiters and job seekers. Job seekers create searchable profiles and submit applications; corporate recruiters post job listings, review applicant pipelines with Kanban board interfaces, and schedule interview rounds backed by Spring Boot and MySQL.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Interactive recruiter Kanban candidate pipeline (Applied, Screened, Interview, Offered)',
      'Resume file upload with automated metadata parsing and candidate tagging',
      'Advanced job search with salary, location, and tech stack filters',
      'Java Spring Boot email notification service for interview invites',
      'Extensive project report with database schema and architectural patterns'
    ]
  },
  {
    id: 'web-library-management-system',
    title: 'BiblioTech: Digital University Library & E-Resource Cataloging System',
    category: 'Web Dev',
    techStack: ['Angular', 'Java Spring Boot', 'MySQL', 'Spring Batch'],
    price: 3999,
    shortDescription: 'Automated campus library portal managing ISBN cataloging, book borrowing cycles, fine calculations, and e-books.',
    fullDescription: 'A modern library automation system designed to eliminate manual book keeping. Features Google Books API integration for instant ISBN book metadata fetching, barcode generation, automated overdue fine calculation, and digital PDF book reading previews stored in MySQL.',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Instant book cataloging via ISBN lookup with Google Books API',
      'Automated overdue fine computation via scheduled Spring Batch cron jobs',
      'Student book reservation and lending history dashboards',
      'Digital e-book PDF viewer embedded directly in the Angular frontend',
      'Full documentation package with UML sequence diagrams and test data'
    ]
  },
  {
    id: 'web-portfolio-builder-saas',
    title: 'DevShowcase: Dynamic Developer Portfolio Builder & Resume Engine',
    category: 'Web Dev',
    techStack: ['Angular', 'Java Spring Boot', 'MySQL', 'TailwindCSS'],
    price: 4399,
    shortDescription: 'No-code portfolio builder generating customizable developer websites with GitHub API syncing and PDF exports.',
    fullDescription: 'Allows engineers and students to generate sleek, responsive portfolio websites in minutes. Features GitHub API integration to auto-fetch repositories and commits, customizable color themes, project showcase galleries, and downloadable ATS-friendly resume PDFs generated by Java Spring Boot.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Dynamic drag-and-drop section reordering (About, Skills, Projects, Experience)',
      'Automatic GitHub repository import with star count and language detection',
      'Custom slug generation for hosting personalized public portfolios',
      'Spring Boot PDF generator rendering ATS-compatible resumes',
      'Complete responsive Angular code with TailwindCSS theme presets'
    ]
  },
  {
    id: 'web-event-ticketing-booking',
    title: 'PassPortal: Online Event Booking & QR Ticket Generation Platform',
    category: 'Web Dev',
    techStack: ['Angular', 'Java Spring Boot', 'MySQL', 'ZXing'],
    price: 4499,
    shortDescription: 'Event ticketing system featuring interactive venue seat selection, automated QR ticket dispatch, and gate verification.',
    fullDescription: 'An end-to-end event ticketing platform for concerts, tech conferences, and campus festivals. Includes an interactive SVG seat selection grid, automated QR code generation via Java ZXing, instant email ticket confirmation, and a gatekeeper check-in scanner backed by MySQL.',
    imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Interactive SVG visual seat map with real-time seat reservation locking',
      'Cryptographically signed QR ticket generation using Java ZXing',
      'Gatekeeper check-in scanning interface with duplicate pass rejection',
      'Organizer dashboard with ticket sales volume and revenue charts',
      'Comprehensive project report with high-level architecture and SQL tables'
    ]
  }
];
