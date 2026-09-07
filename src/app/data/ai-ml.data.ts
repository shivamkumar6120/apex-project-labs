// AI/ML Projects
import { Project } from '../models/project.model';

export const AI_ML_PROJECTS: Project[] = [
  {
    id: 'ai-deepfake-detection',
    title: 'Deepfake Video & Audio Detector',
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
    title: 'Driver Drowsiness & Fatigue Detector',
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
    title: 'Fake News Detector using AI',
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
    title: 'Product Review Sentiment Analyzer',
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
    title: 'Face Recognition Attendance System',
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
    title: 'AI Medical Diagnosis Chatbot',
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
    title: 'Movie Recommendation System',
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
    title: 'Skin Disease Detection using AI',
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
    title: 'Vehicle & Lane Detection for Self-Driving Cars',
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
    title: 'Plant & Crop Disease Detector',
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
    title: 'Voice Biometric Authentication System',
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
  },
  {
    id: 'ai-resume-screening',
    title: 'AI Resume Screening Tool',
    category: 'AI/ML',
    techStack: ['Python', 'spaCy', 'Scikit-Learn', 'Flask'],
    price: 4299,
    shortDescription: 'Ranks applicant resumes against a job description and highlights matching skills, experience, and missing keywords.',
    fullDescription: 'Helps recruiters shortlist candidates faster by comparing uploaded resumes with a target job description. Extracts skills, education, and work history using NLP, then scores each resume so hiring teams can see the strongest matches first. Includes a simple web upload screen and a ranked shortlist with skill-gap notes.',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Resume parsing for PDF and DOCX uploads with skill and experience extraction',
      'Job-description matching score with missing-keyword highlights',
      'Ranked candidate shortlist view for recruiters',
      'Flask web interface for upload, scoring, and result export',
      'Project report covering NLP matching approach and evaluation metrics'
    ]
  },
  {
    id: 'ai-handwritten-text-converter',
    title: 'Handwritten Text to Digital Converter',
    category: 'AI/ML',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'Streamlit'],
    price: 4499,
    shortDescription: 'Reads handwritten notes from photos and converts them into editable digital text with a simple upload interface.',
    fullDescription: 'Turns photographed or scanned handwritten pages into clean digital text. Uses image cleanup and a handwriting recognition model so students and offices can search, copy, and store notes without retyping. The Streamlit app accepts image uploads and shows both the original scan and the extracted text.',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Image preprocessing for contrast, noise, and skewed page correction',
      'Handwriting recognition pipeline converting scans into editable text',
      'Side-by-side preview of original image and extracted output',
      'Streamlit upload interface with copy and download options',
      'Documentation covering model setup and sample handwritten test images'
    ]
  },
  {
    id: 'ai-career-recommendation',
    title: 'AI Career Recommendation System',
    category: 'AI/ML',
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'Flask'],
    price: 4099,
    shortDescription: 'Suggests suitable career paths from a student’s skills, interests, and academic background using a trained recommendation model.',
    fullDescription: 'Guides students toward career options that fit their skills, subjects, and interests. Collects a short profile, maps it against a career dataset, and returns ranked role suggestions with skill-gap hints. Built as a Flask web app that is easy to demo in a viva or project presentation.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Student profile form covering skills, subjects, and career interests',
      'Recommendation model ranking roles with match scores',
      'Skill-gap tips showing what to learn next for each suggested path',
      'Flask dashboard with clear result cards for project demos',
      'Academic report with dataset description and model evaluation'
    ]
  },
  {
    id: 'ai-spam-email-classifier',
    title: 'Spam Email Classifier using AI',
    category: 'AI/ML',
    techStack: ['Python', 'NLTK', 'Scikit-Learn', 'Flask'],
    price: 3999,
    shortDescription: 'Classifies emails as spam or genuine using text features and shows the confidence score for each prediction.',
    fullDescription: 'Filters unwanted emails by learning from labeled spam and ham datasets. Cleans message text, extracts features, and trains a classifier that labels new emails as spam or genuine with a confidence score. A small Flask UI lets users paste a message and instantly see the result.',
    imageUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c841d2?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Text cleaning and feature extraction from email subject and body',
      'Trained spam vs genuine classifier with confidence scores',
      'Paste-and-check web form for live predictions',
      'Accuracy, precision, and confusion-matrix evaluation scripts',
      'Setup notes and sample email dataset for reproduction'
    ]
  },
  {
    id: 'ai-object-detection-traffic',
    title: 'Object Detection for Traffic Monitoring',
    category: 'AI/ML',
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'Streamlit'],
    price: 4799,
    shortDescription: 'Detects cars, bikes, buses, and pedestrians in traffic videos and counts vehicles for a live monitoring dashboard.',
    fullDescription: 'A computer vision project for campus or city traffic feeds. Detects vehicles and pedestrians in uploaded or live video, draws bounding boxes, and keeps a running count by class. Useful for congestion demos, parking studies, and smart-city project presentations.',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'YOLOv8 detection for cars, bikes, buses, and pedestrians',
      'Per-class vehicle counting overlay on video frames',
      'Support for uploaded MP4 files and webcam input',
      'Streamlit monitor showing live counts and sample clips',
      'Project report with detection workflow and sample results'
    ]
  },
  {
    id: 'ai-personal-fitness-coach',
    title: 'AI-based Personal Fitness Coach',
    category: 'AI/ML',
    techStack: ['Python', 'MediaPipe', 'OpenCV', 'Streamlit'],
    price: 4399,
    shortDescription: 'Tracks workout form from a webcam, counts reps, and gives simple posture feedback during common exercises.',
    fullDescription: 'Acts as a home workout coach using the webcam. Detects body pose, counts repetitions for exercises such as squats and push-ups, and flags poor posture so users can correct form. The Streamlit interface shows pose landmarks, rep counts, and session summaries.',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'MediaPipe pose tracking for common strength exercises',
      'Automatic repetition counting with rest-break prompts',
      'Simple posture alerts when form goes out of range',
      'Session summary with reps completed and duration',
      'Documentation covering pose landmarks and demo setup'
    ]
  },
  {
    id: 'ai-sign-language-recognition',
    title: 'Sign Language Recognition System',
    category: 'AI/ML',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe'],
    price: 4599,
    shortDescription: 'Recognizes common sign-language hand gestures from a webcam and displays the matching letter or word on screen.',
    fullDescription: 'Helps bridge communication by reading hand signs from a live camera feed. Uses hand landmark detection and a trained classifier to map gestures to letters or short words and show the result in real time. Designed as a clear academic demo with a webcam UI and sample gesture set.',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Hand landmark extraction from webcam frames',
      'Gesture classifier mapping signs to letters or short words',
      'Live on-screen prediction with confidence display',
      'Sample gesture dataset and training notebook',
      'Project report describing model architecture and accuracy'
    ]
  },
  {
    id: 'ai-voice-assistant-college',
    title: 'AI Voice Assistant for College Queries',
    category: 'AI/ML',
    techStack: ['Python', 'SpeechRecognition', 'NLTK', 'Flask'],
    price: 4199,
    shortDescription: 'Answers common college questions by voice, covering admissions, fees, timetable, and campus facilities.',
    fullDescription: 'A campus helpdesk assistant that listens to spoken questions and replies with college information. Covers frequent queries such as admission dates, fee structure, department contacts, and library hours. Includes speech-to-text, intent matching, and a text fallback for noisy environments.',
    imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Voice input with speech-to-text for common campus questions',
      'Intent matching for admissions, fees, timetable, and facilities',
      'Spoken and on-screen answers with a typed fallback option',
      'Easy-to-edit FAQ knowledge file for college-specific details',
      'Setup guide for microphone testing and demo scripts'
    ]
  },
  {
    id: 'ai-music-genre-classification',
    title: 'Music Genre Classification using AI',
    category: 'AI/ML',
    techStack: ['Python', 'Librosa', 'TensorFlow', 'Streamlit'],
    price: 4299,
    shortDescription: 'Identifies the genre of an uploaded audio clip such as pop, rock, classical, or hip-hop from sound features.',
    fullDescription: 'Classifies short music clips into genres by extracting audio features such as spectrograms and MFCCs. Students can upload a track, view the predicted genre, and compare confidence across classes. Built around a Streamlit demo that is easy to run during evaluation.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Audio feature extraction using Librosa (MFCCs and spectrograms)',
      'Genre classifier covering popular categories such as pop, rock, and classical',
      'Upload interface with predicted genre and confidence bars',
      'Training notebook and sample audio clips for testing',
      'Report with model accuracy and feature-importance discussion'
    ]
  },
  {
    id: 'ai-text-summarization',
    title: 'Text Summarization Tool using AI',
    category: 'AI/ML',
    techStack: ['Python', 'HuggingFace', 'Transformers', 'Flask'],
    price: 4399,
    shortDescription: 'Creates short, readable summaries of long articles, notes, or reports while keeping the main points intact.',
    fullDescription: 'Saves reading time by condensing long documents into a short summary. Users paste text or upload a file, choose a summary length, and receive a concise version that keeps key facts. Useful for students reviewing papers, news articles, or project reports.',
    imageUrl: 'https://images.unsplash.com/photo-1456327102063-fb5054efe647?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Abstractive summarization using a HuggingFace transformer model',
      'Adjustable summary length for short or detailed output',
      'Paste text or upload document support in a Flask UI',
      'Copy-ready summary output for reports and notes',
      'Documentation covering model choice and sample test articles'
    ]
  },
  {
    id: 'ai-plagiarism-checker',
    title: 'AI Powered Plagiarism Checker',
    category: 'AI/ML',
    techStack: ['Python', 'Sentence-Transformers', 'Flask', 'NumPy'],
    price: 4499,
    shortDescription: 'Compares submitted text with a document set and flags similar passages with a similarity score.',
    fullDescription: 'Checks student submissions against a local collection of papers and notes. Converts text into embeddings, measures similarity, and highlights passages that look copied. The Flask dashboard shows an overall score and matched snippets so faculty can review suspected overlap.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Sentence embedding comparison against a stored document corpus',
      'Passage-level highlighting of highly similar text blocks',
      'Overall similarity score with matched source file names',
      'Flask upload screen for new submissions and corpus files',
      'Project report explaining similarity thresholds and evaluation'
    ]
  },
  {
    id: 'ai-image-caption-generator',
    title: 'Image Caption Generator using AI',
    category: 'AI/ML',
    techStack: ['Python', 'PyTorch', 'Transformers', 'Streamlit'],
    price: 4599,
    shortDescription: 'Looks at an uploaded photo and writes a short natural-language caption describing what is in the image.',
    fullDescription: 'Generates human-readable captions for photos using a vision-language model. Users upload an image and receive a sentence describing objects, scene, and activity. Suitable for accessibility demos, photo albums, and computer vision coursework.',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Image-to-text captioning with a pretrained vision-language model',
      'Drag-and-drop image upload with instant caption output',
      'Optional alternative captions for the same photo',
      'Streamlit demo ready for viva presentation',
      'Report covering model pipeline and sample caption results'
    ]
  },
  {
    id: 'ai-emotion-detection',
    title: 'Emotion Detection from Facial Expressions',
    category: 'AI/ML',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'Streamlit'],
    price: 4199,
    shortDescription: 'Detects facial emotions such as happy, sad, angry, and surprised from photos or a live webcam feed.',
    fullDescription: 'Reads facial expressions and labels the likely emotion in real time. Works with a webcam or uploaded photos and shows the predicted class with a confidence bar. A practical computer vision project for HCI, campus feedback kiosks, or affective computing labs.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Face detection followed by emotion classification on each face',
      'Support for webcam streams and still image uploads',
      'On-screen labels for happy, sad, angry, surprise, and related classes',
      'Confidence bars and session snapshot logging',
      'Training notes, sample images, and evaluation charts in the report'
    ]
  },
  {
    id: 'ai-chatbot-rag',
    title: 'AI Chatbot using RAG (Retrieval-Augmented Generation)',
    category: 'AI/ML',
    techStack: ['Python', 'LangChain', 'ChromaDB', 'FastAPI'],
    price: 4999,
    shortDescription: 'Answers questions from your own PDFs and notes by retrieving relevant passages before generating a reply.',
    fullDescription: 'A document-aware chatbot that grounds answers in files you upload, instead of guessing. It splits PDFs or notes into chunks, stores them in a vector database, retrieves the closest passages, and then generates a cited reply. Ideal for college FAQs, lab manuals, and internal documentation demos.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'PDF and text ingestion into a ChromaDB vector store',
      'Retrieval-augmented answers with source passage citations',
      'FastAPI chat backend with a simple web chat UI',
      'Upload-and-ask workflow for custom college documents',
      'Report explaining RAG architecture and hallucination controls'
    ]
  }
];
