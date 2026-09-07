// Cybersecurity Projects
import { Project } from '../models/project.model';

export const CYBERSECURITY_PROJECTS: Project[] = [
  {
    id: 'cyber-network-ids-honeypot',
    title: 'Network Intrusion Detector',
    category: 'Cybersecurity',
    techStack: ['Python', 'Suricata', 'Scapy', 'ELK Stack', 'Flask'],
    price: 5299,
    shortDescription: 'Defensive cybersecurity suite deploying decoy SSH/HTTP services with PCAP packet dissection and ML intrusion filtering.',
    fullDescription: 'An enterprise-inspired security system that deploys intelligent low-interaction honeypots to attract and log malicious activity. Pairs with Suricata IDS rules and Scapy custom sniffers to capture zero-day port scans, brute force attempts, and payload signatures into an interactive Kibana-style dashboard.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Low-interaction decoy SSH and HTTP server emulation',
      'Automated PCAP packet dissection with Scapy and geo-IP lookup',
      'Signature-based threat detection using Suricata rules',
      'Live attack map displaying attacker IPs, ports, and attempted passwords',
      'Hardened security test suite with automated attack simulation scripts'
    ]
  },
  {
    id: 'cyber-phishing-url-detector',
    title: 'Phishing Website Detector',
    category: 'Cybersecurity',
    techStack: ['Python', 'Scikit-Learn', 'FastAPI', 'Chrome Extension'],
    price: 4299,
    shortDescription: 'Real-time phishing website detector analyzing lexical URL features, SSL validity, and DOM structure.',
    fullDescription: 'Protects end users from credential harvesting and homograph phishing attacks. Extracts 30+ lexical and structural features (URL length, entropy, subdomains, SSL certificate validity, and WHOIS domain age) to classify malicious links with 97.4% precision via an XGBoost classifier, accompanied by a companion browser extension.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      '30+ lexical URL and DOM features extracted without rendering malicious payloads',
      'XGBoost classification model achieving 97.4% precision on PhishTank data',
      'Companion Chrome browser extension warning users before page redirection',
      'FastAPI backend endpoint with millisecond response latency',
      'Complete IEEE project documentation with feature importance breakdown'
    ]
  },
  {
    id: 'cyber-network-vulnerability-scanner',
    title: 'Network Vulnerability & Port Scanner',
    category: 'Cybersecurity',
    techStack: ['Python', 'Nmap', 'Scapy', 'SQLite', 'Flask'],
    price: 4699,
    shortDescription: 'Defensive auditing tool mapping local network hosts, open ports, service banners, and matching known CVE vulnerabilities.',
    fullDescription: 'An automated vulnerability assessment utility for network administrators. Scans target IP subnets using custom Scapy TCP SYN packets and Nmap service probes, extracts service banners, and cross-references them against the NIST National Vulnerability Database (NVD) via REST API to generate risk scorecards.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Multi-threaded TCP SYN, ACK, and UDP scanning using raw Scapy sockets',
      'Automated service banner grabbing and OS fingerprinting',
      'NIST NVD CVE vulnerability lookup with CVSS v3 severity ratings',
      'Executive vulnerability audit report generator in HTML and PDF formats',
      'Clean Flask web console with scan history and target scheduling'
    ]
  },
  {
    id: 'cyber-file-encryption-vault',
    title: 'File Encryption Tool',
    category: 'Cybersecurity',
    techStack: ['Python', 'Cryptography', 'AES-GCM', 'PyQt5'],
    price: 3999,
    shortDescription: 'Desktop encryption software utilizing AES-256-GCM authenticated encryption and 4096-bit RSA asymmetric key exchange.',
    fullDescription: 'Engineered for secure enterprise document archiving and transmission. Encrypts files of arbitrary size with authenticated AES-256-GCM, wrapping symmetric session keys with RSA-4096 asymmetric cryptography. Includes secure memory wiping and SHA-256 digital signature verification to prevent tampering.',
    imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Authenticated AES-256-GCM preventing ciphertext manipulation or bit-flipping',
      'RSA-4096 asymmetric key pair generation, public key export, and import',
      'Digital signature creation and verification for file integrity auditing',
      'Sleek PyQt5 graphical desktop interface with drag-and-drop encryption',
      'Full academic report with cryptographic proof and key exchange workflows'
    ]
  },
  {
    id: 'cyber-ransomware-sandbox-analyzer',
    title: 'Ransomware Detection & Defense Tool',
    category: 'Cybersecurity',
    techStack: ['Python', 'YARA', 'Cuckoo Sandbox API', 'Volatility'],
    price: 5499,
    shortDescription: 'Endpoint protection prototype detecting unauthorized mass file encryption and memory injection attempts.',
    fullDescription: 'Deploys proactive honeypot canary files across sensitive directories and monitors file system I/O rates. If rapid entropy shifts or canary file modifications occur, it immediately suspends the offending process tree, dumps memory for Volatility forensic inspection, and creates an incident timeline.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Canary honeypot file placement with real-time directory event watchers',
      'Shannon entropy measurement detecting high-entropy encrypted file writes',
      'Automated process kill switch and network isolation triggers',
      'YARA rule matching against known ransomware signature patterns',
      'Comprehensive research paper and safe simulation scripts for demonstrations'
    ]
  },
  {
    id: 'cyber-wifi-deauth-detector',
    title: 'Fake Wi-Fi & Rogue Hotspot Detector',
    category: 'Cybersecurity',
    techStack: ['Python', 'Scapy', 'Aircrack-ng', 'Linux Raw Sockets'],
    price: 4499,
    shortDescription: 'Wireless defensive monitor sniffing 802.11 management frames to detect Evil Twin and deauth DoS floods.',
    fullDescription: 'Monitors wireless airwaves in monitor mode using Scapy. Sniffs 802.11 management frames to detect anomalous Deauthentication frame spikes, Evil Twin rogue APs spoofing legitimate BSSIDs, and beacon frame spoofing, instantly triggering audio-visual security alerts.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Raw 802.11 frame dissection (Management, Control, and Data subtypes)',
      'Threshold-based detection of Deauth/Disassociation frame flooding',
      'Evil Twin rogue access point identifier comparing signal strength and OUI',
      'Desktop notification daemon and incident PCAP capture logger',
      'Ready-to-use testing PCAPs and complete technical defense report'
    ]
  },
  {
    id: 'cyber-sql-injection-waf',
    title: 'SQL Injection & Web Attack Blocker',
    category: 'Cybersecurity',
    techStack: ['Python', 'FastAPI', 'Regex', 'Scikit-Learn'],
    price: 4899,
    shortDescription: 'Reverse proxy firewall inspecting HTTP request payloads to block SQL injection and Cross-Site Scripting.',
    fullDescription: 'Acts as an inline reverse proxy guarding backend web applications. Combines deterministic regex rules with TF-IDF character n-gram classifiers trained on 50,000+ payload samples to block zero-day SQLi, XSS, and command injection attacks with minimal false-positive overhead.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Inline HTTP reverse proxy architecture inspecting headers, params, and body',
      'Dual inspection engine: fast regex heuristics + TF-IDF ML anomaly scoring',
      'Dynamic IP rate limiting and temporary IP blacklisting upon repeat attacks',
      'Admin analytics dashboard showing blocked URI requests and attacker IPs',
      'Test script bundle containing automated OWASP Top 10 attack payloads'
    ]
  },
  {
    id: 'cyber-steganography-tool',
    title: 'Image Steganography & Secret Message Tool',
    category: 'Cybersecurity',
    techStack: ['Python', 'OpenCV', 'NumPy', 'Tkinter'],
    price: 3899,
    shortDescription: 'Covert communications suite embedding encrypted payloads into image pixels alongside Chi-square forensic detection.',
    fullDescription: 'An educational and forensic security software that embeds AES-encrypted confidential messages and files into 24-bit PNG images using Least Significant Bit (LSB) substitution. Features a Chi-square steganalysis module that inspects pixel color histograms to detect hidden payloads.',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'LSB image steganography with pseudo-random pixel distribution via password seed',
      'AES-256 payload encryption before pixel bit substitution',
      'Chi-Square statistical steganalysis module detecting covert carrier images',
      'Side-by-side PSNR (Peak Signal-to-Noise Ratio) image quality calculator',
      'Comprehensive report detailing statistical steganalysis math and proofs'
    ]
  },
  {
    id: 'cyber-siem-log-analyzer',
    title: 'Security Log Anomaly Detector',
    category: 'Cybersecurity',
    techStack: ['Python', 'Elasticsearch', 'Docker', 'Streamlit'],
    price: 4999,
    shortDescription: 'Centralized security information event management system aggregating auth logs and detecting lateral movement.',
    fullDescription: 'Aggregates Linux Syslog, Apache access logs, and Windows Event logs into an indexable data store. Employs Isolation Forests and statistical z-score baselines to flag unusual login hours, brute force authentication bursts, and privilege escalation attempts.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Multi-format log parser supporting Syslog, Apache, Nginx, and SSH auth logs',
      'Anomaly detection flagging off-hours logins and failed password bursts',
      'Interactive Streamlit security operations center (SOC) dashboard',
      'Automated email alerts for high-priority security incidents',
      'Docker Compose deployment with pre-configured synthetic breach logs'
    ]
  },
  {
    id: 'cyber-password-vault-audit',
    title: 'Password Strength Checker & Secure Vault',
    category: 'Cybersecurity',
    techStack: ['TypeScript', 'Angular', 'WebCrypto API', 'Node.js'],
    price: 4399,
    shortDescription: 'Zero-knowledge password manager utilizing PBKDF2 key derivation and HaveIBeenPwned k-anonymity auditing.',
    fullDescription: 'A client-side encrypted password manager. The master password never leaves the browser: keys are derived via PBKDF2 with 600,000 iterations and vault records are encrypted with AES-GCM. Features k-anonymity API integration with HaveIBeenPwned to audit passwords against known data leaks.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Client-side zero-knowledge encryption using browser native WebCrypto API',
      'PBKDF2 SHA-256 key derivation with random salt generation',
      'HaveIBeenPwned k-anonymity breach check (only first 5 hash characters sent)',
      'Password entropy strength meter and customizable credential generator',
      'Full source code and security evaluation documentation'
    ]
  },
  {
    id: 'cyber-dns-tunneling-detector',
    title: 'DNS Data Leakage & Tunneling Detector',
    category: 'Cybersecurity',
    techStack: ['Python', 'Scapy', 'LightGBM', 'Wireshark PCAP'],
    price: 4799,
    shortDescription: 'Network defense engine detecting covert data exfiltration and C2 channels over DNS TXT/A query patterns.',
    fullDescription: 'Inspects outbound DNS traffic to identify malware using DNS tunneling (iodine, dnscat2) to bypass corporate firewalls. Calculates query entropy, domain label length, and request frequency per client IP, utilizing a LightGBM classifier to flag exfiltration streams in real time.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Live DNS query sniffer capturing UDP port 53 traffic via Scapy',
      'Statistical feature extraction: Shannon entropy, character distribution, query length',
      'Detection of encoded base64/base32 tunneling payloads in subdomain labels',
      'Real-time alert logger with offending internal client IP addresses',
      'Complete project documentation and sample benign/malicious PCAP captures'
    ]
  },
  {
    id: 'cyber-malware-detection-ml',
    title: 'Malware Detection using Machine Learning',
    category: 'Cybersecurity',
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'Flask'],
    price: 4899,
    shortDescription: 'Classifies files as benign or malicious from static features such as PE headers and imported libraries.',
    fullDescription: 'A defensive malware screening lab that scores Windows PE samples using static features, not live execution. Extracts header fields and import tables, trains a classifier, and labels files as benign or suspicious with a confidence score. The Flask UI is meant for academic demos with safe sample sets.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Static PE feature extraction without running unknown binaries',
      'Benign vs malicious classifier with confidence scores',
      'Flask upload screen for lab sample files',
      'Evaluation metrics and feature-importance charts',
      'Safe sample handling notes in the project report'
    ]
  },
  {
    id: 'cyber-two-factor-auth',
    title: 'Two-Factor Authentication System',
    category: 'Cybersecurity',
    techStack: ['Python', 'Flask', 'PyOTP', 'SQLite'],
    price: 4199,
    shortDescription: 'Adds a time-based OTP second step to login so a password alone is not enough to open an account.',
    fullDescription: 'A complete 2FA login demo. After the password check, users enter a TOTP code from an authenticator app. Includes QR enrollment, backup codes, and lockout after failed OTP attempts. Built with Flask and PyOTP for a clear security coursework project.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Password login followed by TOTP verification',
      'QR enrollment for authenticator apps',
      'Backup codes and failed-attempt lockout',
      'SQLite user store with hashed passwords',
      'Report covering TOTP timing windows and threat model'
    ]
  },
  {
    id: 'cyber-keylogger-detection',
    title: 'Keylogger Detection Tool',
    category: 'Cybersecurity',
    techStack: ['Python', 'Psutil', 'Watchdog', 'Tkinter'],
    price: 4399,
    shortDescription: 'Defensive monitor that flags suspicious keyboard hooks, unknown startup programs, and hidden logging processes.',
    fullDescription: 'A host-based detector that looks for signs of unauthorized keystroke logging. Checks running processes, unusual keyboard hooks, and new startup entries, then alerts the user with a process list to review. Designed as a defensive lab tool with a desktop GUI.',
    imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Process and startup-entry scanning for unknown loggers',
      'Alerts when suspicious keyboard-hook modules appear',
      'Desktop GUI with allow-list for trusted apps',
      'Incident log of flagged processes and file paths',
      'Defensive lab notes and safe test procedures in the report'
    ]
  },
  {
    id: 'cyber-secure-chat-e2e',
    title: 'Secure Chat Application with End-to-End Encryption',
    category: 'Cybersecurity',
    techStack: ['Python', 'Flask', 'Cryptography', 'WebSocket'],
    price: 4999,
    shortDescription: 'Chat app where messages are encrypted on the sender device and only the recipient can decrypt them.',
    fullDescription: 'Demonstrates end-to-end encrypted messaging for a security course. Each conversation uses a shared session key; the server relays ciphertext and never stores readable text. Includes user login, live WebSocket delivery, and a short explanation of the key exchange in the report.',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Client-side encryption before messages leave the browser',
      'WebSocket relay of ciphertext only',
      'Per-conversation session keys with user login',
      'Simple two-user demo script for viva',
      'Crypto design and threat-model write-up in the report'
    ]
  },
  {
    id: 'cyber-phishing-browser-extension',
    title: 'Browser Extension for Phishing Detection',
    category: 'Cybersecurity',
    techStack: ['JavaScript', 'Chrome Extension', 'Python', 'FastAPI'],
    price: 4499,
    shortDescription: 'Chrome extension that warns before you open a risky link by checking the URL and page clues in the background.',
    fullDescription: 'A lightweight phishing guard that sits in the browser. On navigation it checks domain age signals, look-alike hostnames, and page cues, then shows a warning banner before credentials are typed. Pairs with a small FastAPI scorer so the extension stays fast.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Chrome extension warning banner on suspicious navigations',
      'Look-alike domain and URL heuristic checks',
      'FastAPI scoring endpoint for heavier URL features',
      'Allow-list for trusted campus and bank sites',
      'Extension install steps and sample phishing URLs for lab use'
    ]
  },
  {
    id: 'cyber-firewall-rule-simulator',
    title: 'Firewall Rule Simulator',
    category: 'Cybersecurity',
    techStack: ['Python', 'Flask', 'SQLite'],
    price: 4099,
    shortDescription: 'Lets you write allow/deny rules and test whether sample packets would be blocked or passed.',
    fullDescription: 'A teaching tool for firewall policy. Students write ordered allow/deny rules (IP, port, protocol), then submit sample packets and see which rule matched. Helps explain first-match logic, default deny, and common misconfigurations without touching a live network.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Ordered ACL editor for source, destination, port, and protocol',
      'Packet test harness showing match and action',
      'Default-deny vs default-allow lab modes',
      'Saved rule-sets in SQLite for assignments',
      'Report explaining first-match evaluation with examples'
    ]
  },
  {
    id: 'cyber-data-breach-alert',
    title: 'Data Breach Alert System',
    category: 'Cybersecurity',
    techStack: ['Python', 'Flask', 'HaveIBeenPwned API', 'SQLite'],
    price: 4299,
    shortDescription: 'Checks emails and domains against known breach lists and sends an alert when a match appears.',
    fullDescription: 'A breach-watch dashboard for personal or campus emails. Users register addresses, the system queries a breach API on a schedule, and new matches raise an in-app and email-style alert. Stores only hashed identifiers where possible and logs alert history.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Email/domain watch list with scheduled breach lookups',
      'Alert history when a new leak listing appears',
      'Hashed identifier storage and API k-anonymity usage',
      'Flask dashboard of monitored accounts',
      'API setup and privacy notes in the documentation'
    ]
  },
  {
    id: 'cyber-biometric-auth',
    title: 'Biometric Authentication System',
    category: 'Cybersecurity',
    techStack: ['Python', 'OpenCV', 'FaceNet', 'Flask'],
    price: 4699,
    shortDescription: 'Unlocks an account with a face match plus a liveness check so a printed photo is not enough.',
    fullDescription: 'A biometric login prototype using face embeddings and a blink-based liveness test. Users enroll a face, then authenticate at login. Failed matches and spoof attempts are logged. Complements voice-biometric projects by focusing on face-based access control.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Face enrollment and embedding match at login',
      'Liveness check to reduce photo spoofing',
      'Threshold tuning and failed-attempt logs',
      'Flask demo with webcam capture',
      'Biometric threat-model discussion in the report'
    ]
  },
  {
    id: 'cyber-deepfake-audio-detection',
    title: 'Deepfake Audio Detection Tool',
    category: 'Cybersecurity',
    techStack: ['Python', 'Librosa', 'PyTorch', 'Flask'],
    price: 5199,
    shortDescription: 'Scores a voice clip as likely real or AI-generated to help catch fake call recordings and cloned voices.',
    fullDescription: 'A defensive audio forensics tool for cloned-voice scams. Extracts spectrogram features from a clip and classifies it as genuine or synthetic. The Flask UI accepts uploads and shows a risk score, aimed at lab demos rather than production call centers.',
    imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Spectrogram-based real vs synthetic voice classification',
      'Upload UI with risk score and confidence',
      'Sample genuine and synthetic clips for testing',
      'Training notebook and evaluation metrics',
      'Report on audio deepfake cues and model limits'
    ]
  },
  {
    id: 'cyber-secure-file-sharing',
    title: 'Secure File Sharing System',
    category: 'Cybersecurity',
    techStack: ['Python', 'Flask', 'Cryptography', 'SQLite'],
    price: 4599,
    shortDescription: 'Share files through encrypted links with expiry, download limits, and password protection.',
    fullDescription: 'A small secure dropbox for class or team files. Uploaders encrypt files at rest, generate time-limited links, and can require a share password. Downloads are logged, and links expire automatically so leftover URLs do not stay open.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Encrypted storage of uploaded files',
      'Expiring share links with optional password',
      'Download count limits and access logs',
      'Flask UI for upload, share, and revoke',
      'Key-management notes in the project report'
    ]
  },
  {
    id: 'cyber-waf-simulator',
    title: 'Web Application Firewall (WAF) Simulator',
    category: 'Cybersecurity',
    techStack: ['Python', 'FastAPI', 'Regex', 'SQLite'],
    price: 4799,
    shortDescription: 'A teaching WAF that sits in front of a sample site and shows which requests would be blocked and why.',
    fullDescription: 'Simulates WAF policy in a safe lab. Students send requests at a dummy app while the WAF inspects headers and body, applies OWASP-style rules, and logs allow vs block with the matching rule id. Focus is on understanding WAF decisions, not deploying a production filter.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Rule-based inspection of URL, headers, and body',
      'Allow/block log with matched rule identifiers',
      'Sample behind-the-WAF demo application',
      'Toggleable rule packs for SQLi, XSS, and path traversal',
      'Lab workbook explaining each rule family'
    ]
  },
  {
    id: 'cyber-usb-access-control',
    title: 'USB Device Access Control Tool',
    category: 'Cybersecurity',
    techStack: ['Python', 'Psutil', 'Watchdog', 'Tkinter'],
    price: 3999,
    shortDescription: 'Controls which USB drives can be used on a PC by allowing only approved device IDs and alerting on others.',
    fullDescription: 'A USB allow-listing utility for lab PCs. When a drive is plugged in, the tool reads device identifiers, compares them with an approved list, and can warn or block untrusted media. Event logs help admins see who connected what and when.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'USB insert detection with vendor/product identifiers',
      'Allow-list of trusted devices and alert on unknown sticks',
      'Desktop notifications and connection history log',
      'Admin PIN to edit the trusted device list',
      'Windows lab setup notes and policy discussion'
    ]
  },
  {
    id: 'cyber-email-spoofing-detector',
    title: 'Email Spoofing Detector',
    category: 'Cybersecurity',
    techStack: ['Python', 'dnspython', 'Flask', 'Regex'],
    price: 4299,
    shortDescription: 'Checks SPF, DKIM, and DMARC records and flags messages that pretend to come from a trusted domain.',
    fullDescription: 'Helps students understand email authentication. Paste a raw message or domain and the tool looks up SPF, DKIM, and DMARC, then explains pass, fail, or missing alignment. Useful for catching look-alike sender addresses in a classroom SOC demo.',
    imageUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c841d2?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'SPF, DKIM, and DMARC lookup for a domain or raw email',
      'Alignment checks and human-readable pass/fail reasons',
      'Look-alike sender highlighting for display names',
      'Flask form for paste-and-check workflow',
      'Report explaining email auth protocols with examples'
    ]
  },
  {
    id: 'cyber-zero-trust-auth',
    title: 'Zero Trust Authentication Demo System',
    category: 'Cybersecurity',
    techStack: ['Python', 'Flask', 'JWT', 'SQLite'],
    price: 5099,
    shortDescription: 'Demo of never-trust login: every request is checked for user, device, and role before access is granted.',
    fullDescription: 'A teaching prototype of zero-trust access. Users sign in, devices are registered, and each API call is re-checked for session, role, and a simple device posture flag. Missing checks fail closed. The dashboard visualizes allow vs deny decisions for a viva.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Per-request JWT and role checks instead of a single perimeter login',
      'Device registration and basic posture flag',
      'Allow/deny decision log for each protected route',
      'Flask apps simulating user, device, and admin roles',
      'Zero-trust concept map and demo script in the report'
    ]
  }
];
