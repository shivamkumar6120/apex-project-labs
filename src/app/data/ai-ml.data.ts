// AI/ML Projects
import { Project } from '../models/project.model';

export const AI_ML_PROJECTS: Project[] = [
  {
    id: 'ai-deepfake-detection',
    title: 'Deepfake Video & Audio Detection System using CNN-LSTM',
    category: 'AI/ML',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'ResNeXt', 'FastAPI'],
    price: 4999,
    shortDescription: 'Real-time frame-by-frame deepfake detection pipeline leveraging facial landmark extraction and spatio-temporal neural networks.',
    fullDescription: 'A production-ready artificial intelligence solution engineered to identify synthetic media and facial manipulation in high-resolution video streams. It uses a hybrid ResNeXt-50 convolutional neural network for frame-level feature extraction coupled with an LSTM layer for temporal anomaly analysis across sequences. Evaluated on FaceForensics++ and DFDC datasets with a lightweight FastAPI inference web UI.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
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
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Eye Aspect Ratio (EAR) & Mouth Aspect Ratio (MAR) metrics',
      'Real-time 60 FPS inference using standard webcam on CPU',
      'Automated multi-level sound alerts on prolonged eye closure',
      'Analytics dashboard tracking drowsiness incidents over time',
      'Complete project documentation with theoretical proof of EAR calculation'
    ]
  },
  {
    id: 'ai-fake-news-detection',
    title: 'Multimodal Fake News Detection using RoBERTa & ViT',
    category: 'AI/ML',
    techStack: ['Python', 'PyTorch', 'HuggingFace', 'RoBERTa', 'FastAPI'],
    price: 4499,
    shortDescription: 'Cross-modal misinformation classifier combining RoBERTa text embeddings with Vision Transformer image analysis.',
    fullDescription: 'Combats online misinformation by cross-evaluating headline text credibility against accompanying article imagery. Implements a fine-tuned RoBERTa transformer for semantic text verification paired with a Vision Transformer (ViT) to detect image manipulation and contextual mismatch. Delivers a fast REST API with sentence-level claim extraction.',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Dual-stream text and image neural network feature fusion',
      'Fine-tuned RoBERTa language model with 94.2% test accuracy',
      'Sentence-level evidence highlighting and source reliability score',
      'FastAPI microservice with lightweight web interface for instant URL parsing',
      'Complete academic report with confusion matrices and ablation studies'
    ]
  },
  {
    id: 'ai-sentiment-aspect-analysis',
    title: 'Aspect-Based Sentiment Analyzer for E-Commerce Reviews',
    category: 'AI/ML',
    techStack: ['Python', 'BERT', 'spaCy', 'Flask', 'NLTK'],
    price: 4199,
    shortDescription: 'Fine-grained NLP system breaking down product feedback into granular aspect categories and sentiment polarities.',
    fullDescription: 'Goes beyond binary sentiment by pinpointing customer reactions to specific product aspects (e.g., battery life, build quality, price-to-performance). Uses a fine-tuned BERT model combined with dependency parsing via spaCy to extract noun chunks and associate sentiment scores with individual features, outputting executive breakdown charts.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'BERT-based Aspect-Based Sentiment Analysis (ABSA) pipeline',
      'Automated aspect-opinion word pairing using linguistic dependencies',
      'Batch processing for Amazon/Flipkart scrape CSV formats',
      'Interactive Flask web dashboard visualizing aspect heatmaps',
      'Pre-labeled benchmark datasets and step-by-step reproduction instructions'
    ]
  },
  {
    id: 'ai-face-recognition-attendance',
    title: 'Touchless Face Recognition Attendance System with Liveness Detection',
    category: 'AI/ML',
    techStack: ['Python', 'OpenCV', 'FaceNet', 'SQLite', 'Streamlit'],
    price: 4299,
    shortDescription: 'Anti-spoofing biometrics suite for classroom attendance with 128D embedding matching and auto-export.',
    fullDescription: 'Modern automated attendance solution powered by Google FaceNet 128-dimensional Euclidean embeddings. Includes an anti-spoofing liveness check (blink and texture analysis) to prevent photo/screen spoofing. Automatically logs roll numbers, timestamps, and confidence scores directly into SQLite with one-click Excel report downloads.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'FaceNet 128-D embedding comparison with sub-second matching',
      'Active anti-spoofing blink detection and texture gradient filtering',
      'Admin portal for student batch enrollment via webcam or photo uploads',
      'Daily/Monthly attendance analytics with automated CSV/XLSX generation',
      'Runs locally on standard CPU without dedicated GPU requirements'
    ]
  },
  {
    id: 'ai-medical-diagnostic-chatbot',
    title: 'Clinical RAG Diagnostic Assistant using LLaMA-3 & LangChain',
    category: 'AI/ML',
    techStack: ['Python', 'LangChain', 'ChromaDB', 'HuggingFace', 'FastAPI'],
    price: 4999,
    shortDescription: 'Retrieval-Augmented Generation clinical assistant grounding LLM responses in peer-reviewed medical journals.',
    fullDescription: 'An enterprise-grade generative AI assistant built using LangChain and quantized LLaMA-3. Ingests PubMed open-access clinical guides into ChromaDB vector database, ensuring chatbot responses cite verifiable medical literature without hallucinations. Provides symptom triage, differential diagnosis hints, and medicine contraindication alerts.',
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'RAG pipeline pairing ChromaDB vector store with semantic search',
      'LLaMA-3 8B quantized inference configured for low VRAM or CPU execution',
      'Inline source citations linking directly to indexed medical guides',
      'Medical emergency disclaimer guardrails and prompt safety filters',
      'REST API backend with responsive chat UI included'
    ]
  },
  {
    id: 'ai-movie-recommendation',
    title: 'Hybrid Collaborative & Content-Based Movie Recommendation Engine',
    category: 'AI/ML',
    techStack: ['Python', 'TensorFlow', 'Scikit-Learn', 'Surprise', 'Flask'],
    price: 3999,
    shortDescription: 'Dual-engine recommendation system combining SVD matrix factorization with neural collaborative filtering.',
    fullDescription: 'A comprehensive recommender trained on the MovieLens 25M dataset. Resolves cold-start bottlenecks using TF-IDF cosine similarity for new movies while applying Singular Value Decomposition (SVD) and Neural Matrix Factorization (NeuMF) to personalize feeds based on historical user ratings.',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Hybrid architecture: SVD matrix factorization + Neural Collaborative Filtering',
      'Content-based similarity fallback overcoming cold-start scenarios',
      'MovieLens 100k and 1M pre-configured benchmark datasets',
      'Lightweight Flask web portal with interactive user rating stars',
      'Precision@K and NDCG evaluation scripts with comparative graphs'
    ]
  },
  {
    id: 'ai-skin-disease-classification',
    title: 'Dermatological Disease Classifier with Grad-CAM Explainability',
    category: 'AI/ML',
    techStack: ['Python', 'PyTorch', 'EfficientNet', 'OpenCV', 'Grad-CAM'],
    price: 4699,
    shortDescription: 'Clinical computer vision diagnostic model identifying 7 skin lesion types with visual saliency explanation maps.',
    fullDescription: 'Deep learning diagnostic pipeline trained on the HAM10000 dataset to classify melanoma, basal cell carcinoma, and benign keratosis. Incorporates Transfer Learning via EfficientNet-B4 and applies Gradient-weighted Class Activation Mapping (Grad-CAM) to generate explainable diagnostic heatmaps for medical review.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'EfficientNet-B4 fine-tuned on 10,000+ clinical dermoscopy images',
      'Grad-CAM heatmap visualizer demonstrating network attention regions',
      'Rigorous class-weighted loss handling severe clinical imbalances',
      'Web-based drag-and-drop diagnostic tester with instant confidence metrics',
      'Detailed project documentation following medical AI reporting standards'
    ]
  },
  {
    id: 'ai-autonomous-lane-vehicle-detection',
    title: 'Autonomous Vehicle Obstacle & Lane Boundary Detection System',
    category: 'AI/ML',
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'NumPy'],
    price: 4799,
    shortDescription: 'Real-time self-driving vision pipeline integrating sliding-window lane tracking with 3D bounding box obstacle detection.',
    fullDescription: 'Computer vision framework replicating autonomous vehicle perception. Applies perspective transform, Sobel edge filtering, and polynomial curve fitting for curved highway lane detection, while concurrently running YOLOv8 object detection to track vehicles, pedestrians, and traffic signs at over 45 FPS.',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Polynomial curve fitting for dynamic curved lane detection',
      'YOLOv8 real-time object tracking with distance estimation heuristics',
      'Bird-eye perspective transform and curvature radius calculation',
      'Supports recorded MP4 dashcam feeds as well as live video inputs',
      'Complete source code with pre-tested dashcam video test suites'
    ]
  },
  {
    id: 'ai-crop-disease-detection',
    title: 'AgriVision: Crop Leaf Disease Diagnosis & Treatment Advisor',
    category: 'AI/ML',
    techStack: ['Python', 'TensorFlow', 'ResNet50', 'OpenCV', 'Streamlit'],
    price: 4399,
    shortDescription: 'Smart agricultural vision model identifying 38 plant disease classes with automated fertilizer and remedy guidance.',
    fullDescription: 'Trained on the PlantVillage dataset across 54,000 images covering tomato, potato, and corn crops. Uses ResNet-50 deep residual learning to achieve 96.8% diagnostic accuracy. Upon detection, it queries an integrated agronomy knowledge base to provide actionable organic and chemical remediation steps.',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'ResNet-50 residual network trained across 38 distinct plant-pathogen classes',
      'Integrated agronomy treatment guide delivering instant remediation tips',
      'Streamlit responsive UI with mobile camera snapshot upload support',
      'Data augmentation pipeline mitigating sunlight and angle variations',
      'Full IEEE project report with training loss and ROC-AUC curves'
    ]
  },
  {
    id: 'ai-voice-biometric-auth',
    title: 'Speaker Verification & Acoustic Voice Biometric Authentication',
    category: 'AI/ML',
    techStack: ['Python', 'PyTorch', 'Librosa', 'GMM', 'FastAPI'],
    price: 4899,
    shortDescription: 'Text-independent speaker verification engine extracting MFCCs and d-vector embeddings for secure biometric logins.',
    fullDescription: 'A biometric voice security engine combining Mel-Frequency Cepstral Coefficients (MFCCs) with deep learning d-vector embeddings. Authenticates enrolled speakers from brief 3-second audio clips while rejecting background ambient noise and voice impersonation attempts.',
    imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Text-independent acoustic feature extraction with Librosa & MFCCs',
      'Deep d-vector speaker embeddings with Cosine Similarity thresholding',
      'Audio noise reduction and silence trimming pre-processing modules',
      'Microphone browser recording integration with FastAPI verification API',
      'Comprehensive project report detailing Equal Error Rate (EER) metrics'
    ]
  }
];
