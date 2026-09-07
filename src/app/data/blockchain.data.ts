// Blockchain Projects
import { Project } from '../models/project.model';

export const BLOCKCHAIN_PROJECTS: Project[] = [
  {
    id: 'blockchain-credential-verification',
    title: 'Decentralized Academic Degree Verification on Ethereum',
    category: 'Blockchain',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'IPFS', 'Angular'],
    price: 5499,
    shortDescription: 'Tamper-proof credential issuance dApp utilizing ERC-721 soulbound tokens and decentralized IPFS document storage.',
    fullDescription: 'Eliminates fraudulent university degrees with immutable blockchain records. Universities mint non-transferable Soulbound NFTs containing cryptographic hashes of transcripts stored on IPFS. Employers and recruiters can verify candidate credentials instantly using MetaMask without third-party fees.',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'ERC-721 Soulbound (non-transferable) smart contract in Solidity',
      'Decentralized PDF storage hashing with Pinata / IPFS',
      'Web3 wallet connection (MetaMask) for institution & recruiter roles',
      'One-click instant certificate cryptographic verification page',
      'Hardhat deployment scripts & Sepolia testnet test coverage'
    ]
  },
  {
    id: 'blockchain-voting-system',
    title: 'CastChain: Tamper-Proof Decentralized E-Voting System',
    category: 'Blockchain',
    techStack: ['Solidity', 'Ethereum', 'Hardhat', 'Angular'],
    price: 5199,
    shortDescription: 'Cryptographically secured electronic ballot casting system guaranteeing one-person-one-vote and verifiable tallying.',
    fullDescription: 'A transparent voting DApp eliminating electoral ballot tampering. Voters are whitelisted using blind signatures and cast cryptographic ballots onto the Ethereum blockchain. Results tally autonomously via smart contract logic once the ballot window expires, rendering election fraud mathematically impossible.',
    imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Solidity voting smart contract with anti-double-voting safeguards',
      'Voter registration and zero-knowledge voter anonymity protection',
      'Real-time automated vote tallying with transparent event logs',
      'Modern Angular user interface with Web3 wallet transaction confirmations',
      'Comprehensive report including smart contract security audit findings'
    ]
  },
  {
    id: 'blockchain-supply-chain',
    title: 'OriginTrace: Pharma Supply Chain Provenance & Anti-Counterfeit Ledger',
    category: 'Blockchain',
    techStack: ['Solidity', 'Polygon', 'IPFS', 'Ethers.js'],
    price: 5399,
    shortDescription: 'End-to-end pharmaceutical provenance tracker recording drug batch custody transfers from manufacturer to patient.',
    fullDescription: 'Tackles counterfeit medications by tracking batch shipments across manufacturers, distributors, and pharmacies on Polygon. Every handover requires multi-signature cryptographic authorization and logs GPS/temperature checkpoints, allowing patients to verify authenticity by scanning a package QR code.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Multi-tier supply chain smart contracts (Manufacturer, Distributor, Retailer)',
      'QR code verification portal allowing end consumers to inspect batch provenance',
      'Cryptographic multi-signature custody transfer authorization',
      'Low gas fee deployment on Polygon / Mumbai testnet',
      'Detailed project documentation with UML state transition diagrams'
    ]
  },
  {
    id: 'blockchain-land-registry',
    title: 'TerraLedger: Decentralized Land Title Registry & Transfer Smart Contracts',
    category: 'Blockchain',
    techStack: ['Solidity', 'Ethereum', 'Web3.js', 'Truffle'],
    price: 5299,
    shortDescription: 'Immutable real estate title ledger replacing bureaucratic deed registries with atomic smart contract escrow.',
    fullDescription: 'Eliminates property title fraud and corrupt land disputes. Government land registries tokenize land parcels as unique digital assets. Buyers and sellers execute property transfers through escrow smart contracts that automatically disburse funds upon registrar cryptographic approval.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'ERC-721 property tokenization representing geo-surveyed land parcels',
      'Atomic escrow contract holding purchase funds until dual verification',
      'Government registrar inspector role with role-based access control',
      'Historical title chain-of-custody public search portal',
      'Full source code with Truffle test suites and deployment scripts'
    ]
  },
  {
    id: 'blockchain-ehr-healthcare',
    title: 'MedLedger: Patient-Centric Electronic Health Records Sharing DApp',
    category: 'Blockchain',
    techStack: ['Solidity', 'IPFS', 'MetaMask', 'Angular'],
    price: 5499,
    shortDescription: 'Decentralized medical records access control system empowering patients to grant granular doctor permissions.',
    fullDescription: 'Restores patient sovereignty over personal medical history. Medical files and imaging scans are encrypted and stored on IPFS. The patient uses Ethereum smart contracts to grant and revoke time-bound decryption permissions to specific hospital doctors or specialists.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Granular time-limited access control smart contract in Solidity',
      'Client-side file encryption before decentralized IPFS upload',
      'Patient dashboard to inspect audit logs of doctor record accesses',
      'Emergency break-glass access protocol for certified trauma centers',
      'Comprehensive report adhering to HIPAA and GDPR compliance paradigms'
    ]
  },
  {
    id: 'blockchain-crypto-wallet',
    title: 'VaultPay: Non-Custodial Multi-Currency Web3 Crypto Wallet',
    category: 'Blockchain',
    techStack: ['TypeScript', 'Angular', 'Ethers.js', 'BIP-39'],
    price: 4799,
    shortDescription: 'Client-side cryptocurrency wallet featuring 12-word seed phrase generation, gas optimization, and token transfers.',
    fullDescription: 'A standalone Web3 wallet built with Angular and Ethers.js. Implements BIP-39 mnemonic phrase generation, BIP-44 key derivation paths, AES encryption of local keystores, ERC-20 token balance lookups, and transaction signing with custom EIP-1559 gas fee estimation.',
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'BIP-39 mnemonic phrase generation and seed phrase recovery workflows',
      'Encrypted local storage keystore unlocked via master password',
      'EIP-1559 dynamic gas price estimation (Base fee + Priority tip)',
      'Custom ERC-20 token tracking and transfer transaction broadcaster',
      'Complete Angular source code with security architecture review'
    ]
  },
  {
    id: 'blockchain-crowdfunding-dao',
    title: 'FundPulse: Decentralized Crowdfunding Platform with Milestone Governance',
    category: 'Blockchain',
    techStack: ['Solidity', 'Hardhat', 'Angular', 'OpenZeppelin'],
    price: 4999,
    shortDescription: 'Kickstarter-style Web3 fundraising platform releasing funds in tranches only after backer voting approval.',
    fullDescription: 'Solves startup fundraising rug-pulls by locking campaign funds in milestone escrow smart contracts. Project creators can only withdraw tranche funds after backers vote and approve verified project deliverables, returning unspent balances to donors if milestones fail.',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Milestone-gated fund release contracts with backer DAO governance voting',
      'Proportional voting weight calculated by individual contribution amount',
      'Automated refund logic triggered if deadline or milestone vote fails',
      'Interactive campaign creator portal and backer discovery page',
      'Complete Hardhat test scripts achieving 95%+ smart contract code coverage'
    ]
  },
  {
    id: 'blockchain-carbon-credit-trading',
    title: 'EcoLedger: Carbon Offset Tokenization & Marketplace Smart Contracts',
    category: 'Blockchain',
    techStack: ['Solidity', 'ERC-20', 'Polygon', 'Web3.js'],
    price: 4899,
    shortDescription: 'Environmental offset exchange tokenizing certified green energy generation into tradable carbon credits.',
    fullDescription: 'Brings transparency to carbon offset markets. Certified reforestation and solar projects mint ERC-20 carbon tokens audited by environmental verifiers. Corporations purchase and permanently burn tokens on-chain to receive verifiable, non-fungible proof-of-retirement certificates.',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'ERC-20 token representing verified metric tonnes of avoided CO2 emissions',
      'Token retirement burning mechanism generating on-chain ESG certificates',
      'Auditor multisig smart contract approving new token minting batches',
      'Marketplace exchange contract allowing spot token trading',
      'Thorough academic report detailing carbon accounting protocols'
    ]
  },
  {
    id: 'blockchain-digital-identity-did',
    title: 'IdentityKey: Self-Sovereign Identity (SSI) & Verifiable Credentials DApp',
    category: 'Blockchain',
    techStack: ['Solidity', 'IPFS', 'Ethereum', 'Angular'],
    price: 5199,
    shortDescription: 'Decentralized identity protocol allowing users to hold, share, and selectively disclose KYC credentials.',
    fullDescription: 'Implements W3C compliant Decentralized Identifiers (DIDs) on Ethereum. Users own their digital identity without relying on Google or Facebook OAuth. Enables selective disclosure—proving one is over 21 years old without revealing birthdate or legal home address.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'W3C compliant Decentralized Identifier (DID) document registry contract',
      'Verifiable Credential issuance signed cryptographically by accredited issuers',
      'Selective disclosure mechanism maintaining user data privacy',
      'Web3 wallet login replacement module demo for web portals',
      'Comprehensive project report with identity cryptography specifications'
    ]
  },
  {
    id: 'blockchain-microfinance-p2p',
    title: 'P2PLend: Decentralized Micro-Lending Protocol with Escrow Automation',
    category: 'Blockchain',
    techStack: ['Solidity', 'Chainlink Oracles', 'Hardhat', 'Web3.js'],
    price: 5399,
    shortDescription: 'Peer-to-peer DeFi lending platform automating collateralized loan pools and Chainlink price feed liquidations.',
    fullDescription: 'A decentralized micro-lending protocol engineered in Solidity. Borrowers deposit collateral and borrow stablecoins from decentralized liquidity pools. Uses Chainlink Oracles for real-time asset pricing, calculating health factors and automating liquidations if collateral depreciates.',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Collateralized debt position (CDP) smart contracts with variable interest rates',
      'Chainlink Price Feeds integration for tamper-resistant currency valuation',
      'Automated liquidation bot script executing liquidations below threshold',
      'Lender interest compounding model modeled after compound finance',
      'Full documentation package including financial math and contract safety audits'
    ]
  },
  {
    id: 'blockchain-royalty-licensing',
    title: 'ArtLedger: Digital Asset Copyright & Automated Royalty Distribution',
    category: 'Blockchain',
    techStack: ['Solidity', 'ERC-721', 'IPFS', 'Ethers.js'],
    price: 4699,
    shortDescription: 'Smart contract system automating secondary sales royalties (EIP-2981) for digital musicians and creators.',
    fullDescription: 'Empowers independent creators by embedding immutable revenue sharing rules into smart contracts. Implements the EIP-2981 royalty standard, automatically splitting secondary market sales proceeds among co-creators, producers, and charity wallets without intermediaries.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'EIP-2981 royalty standard implementation with multi-recipient split payments',
      'Decentralized metadata pin management with IPFS Pinata',
      'Creator minting portal with configurable royalty percentages (up to 15%)',
      'Instant payout disbursement whenever tokens trade on marketplace',
      'Complete project code with automated test scripts and project guide'
    ]
  }
];
