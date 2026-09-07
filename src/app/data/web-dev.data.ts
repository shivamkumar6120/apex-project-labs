// Web Dev Projects (Stack: Angular + Java Spring Boot + MySQL)
import { Project } from '../models/project.model';

export const WEB_DEV_PROJECTS: Project[] = [
  {
    id: 'web-telemedicine-portal',
    title: 'Online Doctor Video Consultation Portal',
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
    title: 'Online Code Compiler & In-Browser IDE',
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
    title: 'E-commerce Website with Cart & Payment',
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
    title: 'Online Hospital Appointment System',
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
    title: 'College Management Portal',
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
    title: 'Blogging & Article Publishing Website',
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
    title: 'Food Ordering Website',
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
    title: 'Job Portal Website',
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
    title: 'Digital Library & Book Borrowing System',
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
      'Digital e-book PDF viewer integrated directly in the Angular frontend',
      'Full documentation package with UML sequence diagrams and test data'
    ]
  },
  {
    id: 'web-portfolio-builder-saas',
    title: 'Online Portfolio & Resume Builder',
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
    title: 'Online Event Ticket Booking Website',
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
  },
  {
    id: 'web-nexbuy-microservices',
    title: 'Scalable Microservices E-Commerce Platform',
    category: 'Web Dev',
    techStack: ['Angular', 'Spring Boot', 'Spring Cloud', 'Netflix Eureka', 'Apache Kafka', 'Docker', 'MySQL'],
    price: 11999,
    shortDescription: 'Scalable distributed e-commerce platform built on Spring Cloud microservices with Eureka service discovery and Kafka event-driven messaging.',
    fullDescription: 'An enterprise distributed e-commerce platform engineered for high availability and fault isolation. Decomposes core retail operations into five independent microservices (Product Catalog, Order Processing, Payment Gateway, Inventory Management, and User Authentication). Implements Spring Cloud Gateway for unified ingress with JWT validation, Netflix Eureka for dynamic service registration and load balancing, Apache Kafka for asynchronous order event choreography, and full Docker containerization across isolated MySQL service databases.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Independent domain microservices (Product, Order, Payment, Inventory, User Auth) with isolated MySQL databases',
      'Spring Cloud Gateway providing centralized client routing, rate limiting, and JWT token validation',
      'Netflix Eureka Service Registry enabling dynamic service discovery and client-side load balancing',
      'Apache Kafka event streaming topics for asynchronous order fulfillment and inventory reservation',
      'Docker Compose multi-container orchestration with service health checks and full Postman API test collection'
    ]
  },
  {
    id: 'web-online-learning-platform',
    title: 'Online Learning Platform',
    category: 'Web Dev',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    price: 4799,
    shortDescription: 'Course website where students browse classes, watch lessons, and take quizzes, with an instructor dashboard to publish content.',
    fullDescription: 'A React learning portal for students and instructors. Learners enroll in courses, stream lesson videos, mark progress, and attempt chapter quizzes. Instructors publish modules and track enrollments through a Node.js and MongoDB backend with role-based access.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Student and instructor roles with course enrollment flow',
      'Lesson player, progress tracking, and chapter quizzes',
      'Instructor dashboard to add modules and view enrollments',
      'Express REST APIs with MongoDB course and user collections',
      'Setup guide and sample course data for demos'
    ]
  },
  {
    id: 'web-real-estate-listing',
    title: 'Real Estate Listing Website',
    category: 'Web Dev',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    price: 4699,
    shortDescription: 'Property listing site with search filters, photo galleries, and inquiry forms for buyers and agents.',
    fullDescription: 'A React marketplace for homes and rentals. Visitors filter listings by city, budget, and BHK, open photo galleries, and send inquiries to agents. Agents manage property posts from a dashboard backed by Node.js and MongoDB.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Listing search with city, price, and BHK filters',
      'Property detail pages with photo galleries and maps placeholder',
      'Buyer inquiry form stored for agent follow-up',
      'Agent dashboard to add, edit, and close listings',
      'Express APIs and MongoDB schema with sample properties'
    ]
  },
  {
    id: 'web-personal-finance-dashboard',
    title: 'Personal Finance Dashboard',
    category: 'Web Dev',
    techStack: ['React', 'Node.js', 'Chart.js', 'MongoDB'],
    price: 4499,
    shortDescription: 'Tracks income, expenses, and monthly budgets with charts so users can see where their money goes.',
    fullDescription: 'A React money dashboard for personal budgeting. Users log income and expenses by category, set monthly limits, and view spending charts. Data is stored through a Node.js API so totals stay consistent across sessions.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Income and expense logging with category tags',
      'Monthly budget limits with overspend highlights',
      'Chart.js visuals for category mix and month-on-month spend',
      'Node.js API with MongoDB persistence',
      'Project documentation covering data model and UI flow'
    ]
  },
  {
    id: 'web-social-media-feed-clone',
    title: 'Social Media Feed',
    category: 'Web Dev',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    price: 4599,
    shortDescription: 'Simple social feed where users post updates, like content, comment, and follow other profiles.',
    fullDescription: 'A React social feed inspired by familiar networks, kept small enough for a college project. Users create posts, like and comment, follow profiles, and see a chronological home timeline. The Express backend stores users, posts, and reactions in MongoDB.',
    imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'User profiles with follow and unfollow actions',
      'Create, like, and comment on posts in a home feed',
      'Chronological timeline with basic image post support',
      'JWT auth and Express APIs for posts and users',
      'Sample accounts and report covering feed architecture'
    ]
  },
  {
    id: 'web-kanban-task-board',
    title: 'Kanban Task Board App',
    category: 'Web Dev',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    price: 4299,
    shortDescription: 'Drag-and-drop task board with To Do, In Progress, and Done columns for team or personal project tracking.',
    fullDescription: 'A React Kanban board for managing work visually. Users create cards, assign owners, and drag tasks across columns. Board state is saved through a Node.js API so progress is not lost on refresh.',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Drag-and-drop cards across To Do, In Progress, and Done',
      'Task titles, due dates, and assignee labels',
      'Board persistence via Express and MongoDB',
      'Simple project/board switcher for multiple lists',
      'Setup notes and sample board data for demos'
    ]
  },
  {
    id: 'web-restaurant-menu-website',
    title: 'Restaurant Website with Online Menu',
    category: 'Web Dev',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    price: 2999,
    shortDescription: 'Beginner-friendly restaurant site with homepage, food menu, and a simple table reservation form.',
    fullDescription: 'A static restaurant website built with HTML, CSS, and JavaScript. Includes a welcome banner, categorized menu, photo gallery, and a reservation form with basic validation. Ideal as a first web project without any framework setup.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Responsive homepage, about, menu, and contact pages',
      'Categorized online menu with prices',
      'Table reservation form with client-side validation',
      'CSS layout that works on mobile and desktop',
      'Simple open-in-browser setup with no build tools'
    ]
  },
  {
    id: 'web-personal-portfolio-html',
    title: 'Personal Portfolio Website ',
    category: 'Web Dev',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    price: 2499,
    shortDescription: 'Clean personal site to showcase skills, projects, and a contact form, built with plain HTML, CSS, and JS.',
    fullDescription: 'A student portfolio you can host as static files. Sections cover about, skills, project cards, and a contact form. Smooth scrolling and a mobile menu are handled with a small amount of JavaScript—no React or backend required.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'About, skills, projects, and contact sections',
      'Responsive navigation with a mobile menu',
      'Project cards with links and short descriptions',
      'Contact form validation in JavaScript',
      'Easy customization notes in the project report'
    ]
  },
  {
    id: 'web-quiz-application',
    title: 'Quiz Application Website ',
    category: 'Web Dev',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    price: 2799,
    shortDescription: 'Timed multiple-choice quiz in the browser that scores answers and shows a result summary at the end.',
    fullDescription: 'A client-side quiz app with no server. Questions load from a JavaScript array, a timer limits each attempt, and the result screen shows score, correct answers, and a retry button. Good for beginners learning DOM events and arrays.',
    imageUrl: 'https://images.unsplash.com/photo-1606326608606-4a1769e1c0c3?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Multiple-choice questions with instant option locking',
      'Countdown timer and progress indicator',
      'Final score screen with answer review',
      'Questions stored in a simple JS array for easy edits',
      'Report explaining quiz flow and scoring logic'
    ]
  },
  {
    id: 'web-weather-forecast',
    title: 'Weather Forecast Website',
    category: 'Web Dev',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    price: 2899,
    shortDescription: 'Looks up live weather for a city using a public API and displays temperature, condition, and a short forecast.',
    fullDescription: 'A beginner API project that fetches weather for a typed city name. Shows current temperature, condition icon, humidity, and a few upcoming days. Built with fetch() in plain JavaScript so students learn HTTP requests without a framework.',
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'City search with live weather API calls',
      'Current temperature, condition, and humidity display',
      'Short multi-day forecast cards',
      'Loading and error states for invalid cities',
      'API key setup notes in the documentation'
    ]
  },
  {
    id: 'web-todo-list',
    title: 'To-Do List Web App ',
    category: 'Web Dev',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    price: 2499,
    shortDescription: 'Add, complete, and delete daily tasks in the browser, with tasks saved in local storage.',
    fullDescription: 'A classic to-do list for learning CRUD in the browser. Users add tasks, mark them done, filter active items, and keep data in localStorage so the list survives a refresh. No backend or npm install is required.',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Add, complete, edit, and delete tasks',
      'Filters for all, active, and completed items',
      'localStorage persistence across page reloads',
      'Clean responsive layout for phone and desktop',
      'Beginner-friendly comments and setup notes'
    ]
  },
  {
    id: 'web-digital-clock-calendar',
    title: 'Digital Clock & Calendar Website',
    category: 'Web Dev',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    price: 2499,
    shortDescription: 'Live digital clock with date, timezone display, and a monthly calendar you can browse by month.',
    fullDescription: 'A stylish clock-and-calendar page using only HTML, CSS, and JavaScript. The clock updates every second, the calendar highlights today, and users can move between months. A simple front-end project for practicing Date objects and layout.',
    imageUrl: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Live HH:MM:SS clock with date and day name',
      'Monthly calendar with today highlighted',
      'Previous and next month navigation',
      'Optional 12/24-hour toggle',
      'Pure front-end project with no dependencies'
    ]
  },
  {
    id: 'web-online-resume-builder',
    title: 'Online Resume Builder ',
    category: 'Web Dev',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    price: 2999,
    shortDescription: 'Fill in your details in a form and generate a formatted resume preview that can be printed or saved as PDF.',
    fullDescription: 'A static resume builder: type education, skills, and experience in a form and see a live preview. Print or save as PDF using the browser print dialog. No account system or backend—just HTML, CSS, and JavaScript.',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Form-driven live resume preview',
      'Sections for education, skills, projects, and experience',
      'Print-friendly CSS for PDF save via the browser',
      'Basic template switch for layout variety',
      'Report covering form-to-preview data flow'
    ]
  },
  {
    id: 'web-expense-tracker-website',
    title: 'Expense Tracker Website ',
    category: 'Web Dev',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    price: 2899,
    shortDescription: 'Log daily expenses, see category totals, and keep a running balance stored in the browser.',
    fullDescription: 'A lightweight expense tracker that runs entirely in the browser. Add income and spend entries, group them by category, and view a simple summary. Totals persist in localStorage so beginners can learn state without a server.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Add income and expense entries with categories',
      'Running balance and category totals',
      'localStorage so records survive a refresh',
      'Simple list filters by month or category',
      'Beginner documentation for DOM and storage usage'
    ]
  },
  {
    id: 'web-movie-search-api',
    title: 'Movie Search Website using API  ',
    category: 'Web Dev',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    price: 2999,
    shortDescription: 'Search movies by title using a public API and show posters, ratings, and a short plot on each result card.',
    fullDescription: 'A movie lookup site built with fetch() and a public film API. Users search by title, browse poster cards, and open details such as year, rating, and plot. A practical beginner project for APIs, JSON, and responsive cards.',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Title search against a public movie API',
      'Result cards with poster, year, and rating',
      'Detail view for plot and extra metadata',
      'Empty, loading, and error states',
      'API key setup steps in the project guide'
    ]
  }
];
