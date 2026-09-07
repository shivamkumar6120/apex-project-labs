import { Project, ProjectCategory } from '../models/project.model';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'AI/ML',
  'Data Science',
  'Web Dev',
  'App Dev',
  'Cybersecurity',
  'Blockchain',
  'IoT/Embedded',
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-deepfake-detection',
    title: 'Deepfake Video & Audio Detection System using CNN-LSTM',
    category: 'AI/ML',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'ResNeXt', 'FastAPI'],
    price: 4999,
    shortDescription: 'Real-time frame-by-frame deepfake detection pipeline leveraging facial landmark extraction and spatio-temporal neural networks.',
    fullDescription: 'A production-ready artificial intelligence solution engineered to identify synthetic media and facial manipulation in high-resolution video streams. It uses a hybrid ResNeXt-50 convolutional neural network for frame-level feature extraction coupled with an LSTM layer for temporal anomaly analysis across sequences. Evaluated on FaceForensics++ and DFDC datasets with a lightweight FastAPI inference web UI.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'PPT', 'Demo Video'],
    features: [
      'ResNeXt-50 + Bi-LSTM hybrid deep learning architecture',
      'Real-time webcam or uploaded video analysis with confidence heatmaps',
      'Pre-trained model weights on FaceForensics++ benchmark',
      'Clean FastAPI backend with browser-based interactive dashboard',
      'Full IEEE 830 compliant SRS document and evaluation graphs'
    ]
  },
  {
    id: 'ai-driver-fatigue-monitor',
    title: 'Driver Fatigue & Distraction Detection with Edge Vision',
    category: 'AI/ML',
    techStack: ['Python', 'YOLOv8', 'MediaPipe', 'OpenCV', 'Streamlit'],
    price: 3999,
    shortDescription: 'Safety-critical computer vision system calculating Eye Aspect Ratio (EAR) and head pose estimation for accident prevention.',
    fullDescription: 'Engineered to reduce road accidents by monitoring driver alertness in real-time. Tracks 468 facial mesh landmarks using Google MediaPipe, continuously computing Eye Aspect Ratio (EAR), mouth yawning frequency, and Head Pose Estimation (roll, pitch, yaw) to flag distraction or micro-sleep. Triggers immediate audible buzzer warnings and logs telematics to an interactive Streamlit monitor.',
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'PPT', 'Demo Video'],
    features: [
      'Eye Aspect Ratio (EAR) & Mouth Aspect Ratio (MAR) metrics',
      'Real-time 60 FPS inference using standard webcam on CPU',
      'Automated multi-level sound alerts on prolonged eye closure',
      'Analytics dashboard tracking drowsiness incidents over time',
      'Complete viva slide deck with theoretical proof of EAR calculation'
    ]
  },
  {
    id: 'ds-financial-fraud-detection',
    title: 'Credit Card & Financial Transaction Fraud Detection Pipeline',
    category: 'Data Science',
    techStack: ['Python', 'XGBoost', 'Scikit-Learn', 'Pandas', 'Docker'],
    price: 4299,
    shortDescription: 'End-to-end automated fraud detection engine handling highly imbalanced transaction streams using SMOTE and Isolation Forests.',
    fullDescription: 'Addresses severe class imbalance (0.17% fraud rate) in credit card transaction data using advanced synthetic minority oversampling (SMOTE) and an ensemble of XGBoost and Isolation Forests. Achieves 98.4% ROC-AUC score, includes automated feature engineering, SHAP model interpretability charts, and containerized REST microservice.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'PPT', 'Demo Video'],
    features: [
      'SMOTE oversampling + Random Under-Sampling pipeline',
      'SHAP (SHapley Additive exPlanations) for model explainability',
      'Robust cross-validation metrics avoiding data leakage',
      'Batch CSV prediction and real-time transaction scoring API',
      'Comprehensive 40+ page IEEE research project report'
    ]
  },
  {
    id: 'ds-icu-mortality-forecasting',
    title: 'Predictive Healthcare Analytics & ICU Mortality Forecasting',
    category: 'Data Science',
    techStack: ['Python', 'LightGBM', 'Seaborn', 'Streamlit', 'NumPy'],
    price: 4499,
    shortDescription: 'Clinical decision support system predicting patient readmission risk and vitals deterioration using electronic health records.',
    fullDescription: 'A healthcare analytics dashboard trained on MIMIC-III clinical records. Implements LightGBM and survival analysis to predict patient deterioration and ICU mortality risk hours before critical events. Displays real-time feature importance metrics, allowing clinicians to understand which vital sign shifts triggered the alert.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'PPT', 'Demo Video'],
    features: [
      'MIMIC-III clinical dataset pre-processing scripts',
      'LightGBM & Random Forest comparative model evaluation',
      'Interactive patient triage dashboard with interactive sliders',
      'Receiver Operating Characteristic (ROC) & Precision-Recall curves',
      'Ready-to-deliver viva presentation with slide notes'
    ]
  },
  {
    id: 'web-telemedicine-webrtc',
    title: 'MedPulse: Full-Stack WebRTC Telemedicine Platform',
    category: 'Web Dev',
    techStack: ['Angular', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB'],
    price: 4999,
    shortDescription: 'HIPAA-compliant telemedicine app with end-to-end encrypted video appointments, digital prescriptions, and slot booking.',
    fullDescription: 'A complete modern web application facilitating remote doctor-patient consultations. Includes peer-to-peer WebRTC video streaming with screen-sharing, socket-driven real-time chat, PDF prescription generator, Razorpay test payment integration, and doctor slot management calendar.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'PPT', 'Demo Video'],
    features: [
      'HD WebRTC peer-to-peer audio/video calling with mute/camera toggle',
      'Instant chat messaging with doctor-patient file attachment support',
      'Automated digital prescription generation with downloadable PDF',
      'Doctor appointment schedule calendar and patient medical history',
      'Clean modular Angular frontend and Express.js REST API'
    ]
  },
  {
    id: 'web-cloud-code-editor',
    title: 'CloudCode: Collaborative In-Browser IDE with Remote Execution',
    category: 'Web Dev',
    techStack: ['TypeScript', 'Angular', 'Node.js', 'Monaco Editor', 'Docker'],
    price: 5499,
    shortDescription: 'Real-time multi-user online coding workspace featuring CRDT synchronization and sandboxed Docker code runners.',
    fullDescription: 'A Google Docs-style live collaborative code workspace. Incorporates Monaco Editor (the engine powering VS Code), Yjs CRDTs for conflict-free concurrent editing, WebSockets for cursor syncing, and isolated container execution environments for Python, C++, and JavaScript.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'PPT', 'Demo Video'],
    features: [
      'Monaco Editor with syntax highlighting, autocomplete & linting',
      'Live multiplayer cursor indicators and real-time typing sync',
      'Secure backend code compilation for C++, Python, and JavaScript',
      'Project file tree explorer and terminal output window',
      'Zero-configuration setup script with step-by-step video guide'
    ]
  },
  {
    id: 'app-campus-smart-transit',
    title: 'OmniRide: Cross-Platform Smart Campus Transit & Bus Tracking',
    category: 'App Dev',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Node.js'],
    price: 4799,
    shortDescription: 'Live GPS bus locator with ETA countdowns, QR ticketing, emergency SOS alerts, and student crowd density forecasts.',
    fullDescription: 'Cross-platform mobile application designed for college campus transportation systems. Provides live bus tracking via Google Maps SDK, geofenced automated push notifications when buses approach student stops, digital QR ticketing wallet, and background push notifications.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'PPT', 'Demo Video'],
    features: [
      'Smooth 60 FPS Google Maps live bus location marker interpolation',
      'Dynamic ETA countdowns based on route traffic data',
      'Student QR-code ticketing wallet with simulated verification',
      'SOS emergency alert broadcast with geolocation coordinates',
      'Complete mobile source code for Android and iOS builds'
    ]
  },
  {
    id: 'cyber-network-ids-honeypot',
    title: 'Automated Threat Hunting & Honeypot Intrusion Detection System',
    category: 'Cybersecurity',
    techStack: ['Python', 'Suricata', 'Scapy', 'ELK Stack', 'Flask'],
    price: 5299,
    shortDescription: 'Defensive cybersecurity suite deploying decoy SSH/HTTP services with PCAP packet dissection and ML intrusion filtering.',
    fullDescription: 'An enterprise-inspired security system that deploys intelligent low-interaction honeypots to attract and log malicious activity. Pairs with Suricata IDS rules and Scapy custom sniffers to capture zero-day port scans, brute force attempts, and payload signatures into an interactive Kibana-style dashboard.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'PPT', 'Demo Video'],
    features: [
      'Low-interaction decoy SSH and HTTP server emulation',
      'Automated PCAP packet dissection with Scapy and geo-IP lookup',
      'Signature-based threat detection using Suricata rules',
      'Live attack map displaying attacker IPs, ports, and attempted passwords',
      'Hardened security test suite with automated attack simulation scripts'
    ]
  },
  {
    id: 'blockchain-credential-verification',
    title: 'Decentralized Academic Degree Verification on Ethereum',
    category: 'Blockchain',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'IPFS', 'Angular'],
    price: 5499,
    shortDescription: 'Tamper-proof credential issuance dApp utilizing ERC-721 soulbound tokens and decentralized IPFS document storage.',
    fullDescription: 'Eliminates fraudulent university degrees with immutable blockchain records. Universities mint non-transferable Soulbound NFTs containing cryptographic hashes of transcripts stored on IPFS. Employers and recruiters can verify candidate credentials instantly using MetaMask without third-party fees.',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'PPT', 'Demo Video'],
    features: [
      'ERC-721 Soulbound (non-transferable) smart contract in Solidity',
      'Decentralized PDF storage hashing with Pinata / IPFS',
      'Web3 wallet connection (MetaMask) for institution & recruiter roles',
      'One-click instant certificate cryptographic verification page',
      'Hardhat deployment scripts & Sepolia testnet test coverage'
    ]
  },
  {
    id: 'iot-greenhouse-automation',
    title: 'Raspberry Pi Precision Greenhouse & Automated Irrigation',
    category: 'IoT/Embedded',
    techStack: ['Python', 'Raspberry Pi', 'MQTT', 'DHT22 Sensors', 'FastAPI'],
    price: 4899,
    shortDescription: 'Coding-focused IoT edge controller running automated sensor polling, PID humidity control, and MQTT cloud telemetry.',
    fullDescription: 'A purely code-driven IoT engineering project focusing on firmware scripting and edge communication. Deploys Python daemon threads on Raspberry Pi 4 to poll multi-channel ADC sensors, apply PID loop algorithms for automated solenoid relay switching, and publish telemetry packets via MQTT broker to a responsive control dashboard.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'PPT', 'Demo Video'],
    features: [
      'Multi-threaded Python edge controller polling soil moisture and DHT22',
      'PID control algorithm regulating water valve duration and fans',
      'Lightweight MQTT pub/sub telemetry stream with JSON payloads',
      'WebSocket dashboard showing real-time environmental gauge charts',
      'Complete pinout diagram, simulation mode (runs without hardware!), and viva guide'
    ]
  },
  {
    id: 'iot-tinyml-predictive-maintenance',
    title: 'ESP32 Embedded Predictive Maintenance & Fault Diagnostics',
    category: 'IoT/Embedded',
    techStack: ['Embedded C++', 'ESP32', 'FreeRTOS', 'MPU6050', 'Edge Impulse'],
    price: 4999,
    shortDescription: 'Real-time embedded C++ firmware running edge TinyML FFT vibration analysis to detect bearing and motor wear.',
    fullDescription: 'Focuses heavily on embedded software engineering and FreeRTOS multitasking. Programmed in C++ with custom I2C drivers for MPU-6050 6-axis accelerometers. Executes on-device Fast Fourier Transform (FFT) algorithms and quantized neural network inference to classify mechanical anomalies before physical breakdown occurs.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'PPT', 'Demo Video'],
    features: [
      'FreeRTOS task scheduling separating sensor sampling from neural inference',
      'On-chip Fast Fourier Transform (FFT) vibration spectrum analysis',
      'Quantized INT8 TinyML model running locally on ESP32 microcontroller',
      'Wi-Fi WebSocket telemetry pushing diagnostic alerts to browser UI',
      'Full embedded C++ code with mock sensor generator for easy grading'
    ]
  }
];
