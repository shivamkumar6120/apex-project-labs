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
  }
];
