// Blockchain Projects
import { Project } from '../models/project.model';

export const BLOCKCHAIN_PROJECTS: Project[] = [
  {
    id: 'blockchain-credential-verification',
    title: 'Certificate Verification System',
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
    title: 'Online Voting System using Blockchain',
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
    title: 'Supply Chain Tracker',
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
    title: 'Land Record Management System',
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
    title: 'Patient Medical Record Sharing using Blockchain',
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
    title: 'Crypto Wallet App using Blockchain',
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
    title: 'Crowdfunding Platform using Blockchain',
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
    title: 'Carbon Credit Trading Marketplace',
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
    title: 'Digital Identity Verification using Blockchain',
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
    title: 'Peer-to-Peer Lending System using Blockchain',
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
    title: 'Digital Copyright & Royalty Tracker',
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
  },
  {
    id: 'blockchain-nft-marketplace',
    title: 'NFT Marketplace using Blockchain',
    category: 'Blockchain',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'Angular'],
    price: 5499,
    shortDescription: 'Mint, list, and buy NFTs on a testnet marketplace with royalties paid back to the original creator.',
    fullDescription: 'A full NFT market demo on Ethereum testnet. Artists mint tokens, list a price, and buyers purchase with a wallet. Listing fees and creator royalties settle in the smart contract. Angular UI covers gallery, listing, and checkout flows.',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'ERC-721 minting and marketplace listing contracts',
      'Buy, cancel, and royalty split on secondary sales',
      'Gallery UI with MetaMask checkout',
      'Hardhat tests and Sepolia deployment scripts',
      'Report covering marketplace events and gas usage'
    ]
  },
  {
    id: 'blockchain-decentralized-file-storage',
    title: 'Decentralized File Storage System',
    category: 'Blockchain',
    techStack: ['Solidity', 'IPFS', 'Ethers.js', 'Angular'],
    price: 5299,
    shortDescription: 'Stores file hashes on-chain and the files themselves on IPFS so links stay verifiable and hard to tamper with.',
    fullDescription: 'Splits storage between IPFS for the file and Ethereum for the content hash and access list. Users upload, receive a CID, and share access through a smart contract. Anyone can verify the hash matches the retrieved file.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'IPFS upload with on-chain content-hash registry',
      'Access-list contract for share and revoke',
      'Hash verification when a file is downloaded',
      'Angular dApp with MetaMask connection',
      'IPFS pinning and contract docs in the report'
    ]
  },
  {
    id: 'blockchain-insurance-claim',
    title: 'Blockchain-based Insurance Claim System',
    category: 'Blockchain',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'Angular'],
    price: 5399,
    shortDescription: 'Files insurance claims on-chain so status, payouts, and approvals cannot be quietly changed later.',
    fullDescription: 'An insurance claim workflow on smart contracts. Policyholders submit a claim, an insurer role approves or rejects, and payouts execute on-chain. Every status change is visible in event logs, reducing disputes over missing paperwork.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Policy and claim smart contracts with insurer/claimant roles',
      'On-chain approve, reject, and payout flow',
      'Event history for each claim status change',
      'Angular claim tracker with wallet login',
      'Test scripts and claim-lifecycle diagrams'
    ]
  },
  {
    id: 'blockchain-escrow-smart-contract',
    title: 'Smart Contract based Escrow System',
    category: 'Blockchain',
    techStack: ['Solidity', 'Hardhat', 'OpenZeppelin', 'Ethers.js'],
    price: 5199,
    shortDescription: 'Holds payment in escrow until both buyer and seller confirm the deal, then releases or refunds automatically.',
    fullDescription: 'A generic escrow contract for marketplace trades. The buyer deposits funds, the seller marks delivery, and release happens when both confirm—or a refund path runs if the deal fails. Built with OpenZeppelin patterns and Hardhat tests.',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Deposit, confirm, release, and refund states',
      'Optional arbiter role for disputed deals',
      'OpenZeppelin-based access control',
      'Hardhat coverage for happy path and dispute path',
      'Sequence diagrams in the project report'
    ]
  },
  {
    id: 'blockchain-loyalty-rewards',
    title: 'Blockchain based Loyalty Rewards Program',
    category: 'Blockchain',
    techStack: ['Solidity', 'ERC-20', 'Hardhat', 'Angular'],
    price: 4899,
    shortDescription: 'Issues loyalty points as tokens that customers can earn on purchases and redeem later, with a public balance.',
    fullDescription: 'Replaces a closed points spreadsheet with an ERC-20 loyalty token. Merchants mint points on qualifying purchases; customers redeem them in the dApp. Balances and redemptions are on-chain so points cannot be silently edited.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'ERC-20 loyalty token with merchant mint role',
      'Earn-on-purchase and redeem-for-reward flows',
      'Customer wallet balance and history view',
      'Hardhat tests for mint and burn/redeem',
      'Tokenomics notes in the academic report'
    ]
  },
  {
    id: 'blockchain-freelance-marketplace',
    title: 'Decentralized Job/Freelance Marketplace',
    category: 'Blockchain',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'Angular'],
    price: 5499,
    shortDescription: 'Clients post jobs, freelancers apply, and payment sits in escrow until the work is marked complete.',
    fullDescription: 'A Web3 freelance board. Clients post gigs and fund escrow; freelancers apply and submit work; payment releases on approval. Dispute handling is modeled as a simple arbiter role. Angular UI covers jobs, bids, and wallet payments.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Job posting, bidding, and escrow-funded contracts',
      'Release payment on client approval',
      'Arbiter path for disputed deliveries',
      'Angular job board with MetaMask',
      'Marketplace state machine documented in the report'
    ]
  },
  {
    id: 'blockchain-attendance-system',
    title: 'Blockchain based Attendance System',
    category: 'Blockchain',
    techStack: ['Solidity', 'Ethers.js', 'Angular', 'Hardhat'],
    price: 4999,
    shortDescription: 'Records class attendance on-chain so marked presence cannot be edited later by a single admin.',
    fullDescription: 'Faculty start a session and students mark attendance from a connected wallet. Each present mark is an on-chain event tied to student address and session id. Reports read the chain so backdated edits are visible.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Session create and student mark-present transactions',
      'Immutable attendance events per class',
      'Faculty report view by subject and date',
      'Angular dApp with wallet-based student identity',
      'Gas and batch-marking notes in the documentation'
    ]
  },
  {
    id: 'blockchain-property-transfer',
    title: 'Real Estate Property Transfer using Blockchain',
    category: 'Blockchain',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'Angular'],
    price: 5399,
    shortDescription: 'Moves a property title from seller to buyer through an on-chain transfer with a recorded sale price.',
    fullDescription: 'Focuses on the sale transaction itself: a tokenized property is transferred only after payment conditions are met. Buyer, seller, and registrar roles complete the handover, and the new owner is visible on-chain. Complements land-registry catalogs by stressing transfer and payment settlement.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Property token transfer gated on payment confirmation',
      'Buyer, seller, and registrar roles',
      'On-chain sale price and ownership history',
      'Angular transfer wizard with wallet signing',
      'Transfer vs registry comparison in the report'
    ]
  },
  {
    id: 'blockchain-healthcare-record-sharing',
    title: 'Blockchain based Healthcare Record Sharing',
    category: 'Blockchain',
    techStack: ['Solidity', 'IPFS', 'Angular', 'Ethers.js'],
    price: 5499,
    shortDescription: 'Lets hospitals share medical files with another hospital only after the patient grants time-limited access.',
    fullDescription: 'A hospital-to-hospital sharing network. Records stay encrypted on IPFS; the chain stores access grants between institutions. Patients approve a receiving hospital for a limited window, and grants can be revoked. Distinct from a single-patient vault by modeling multi-hospital exchange.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Hospital identity and patient consent contracts',
      'Time-limited grants for inter-hospital record access',
      'Encrypted IPFS payloads with on-chain pointers',
      'Revoke and audit-log screens in Angular',
      'Consent-flow diagrams in the project report'
    ]
  },
  {
    id: 'blockchain-academic-transcript',
    title: 'Tamper-Proof Academic Transcript System',
    category: 'Blockchain',
    techStack: ['Solidity', 'IPFS', 'Hardhat', 'Angular'],
    price: 5299,
    shortDescription: 'Publishes semester marksheets as hashed records so employers can verify grades without calling the college.',
    fullDescription: 'Universities publish transcript hashes and semester PDFs (via IPFS). Students share a verification link; employers check that the on-chain hash still matches. Updates append a new version instead of rewriting old marks, so history stays auditable.',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Semester transcript hashing and IPFS document pointers',
      'Employer verification page with match/mismatch result',
      'Versioned updates instead of silent grade edits',
      'Registrar and student wallet roles',
      'Verification UX and contract tests in the report'
    ]
  },
  {
    id: 'blockchain-ticket-booking',
    title: 'Blockchain based Ticket Booking System (prevents fraud)',
    category: 'Blockchain',
    techStack: ['Solidity', 'ERC-721', 'Hardhat', 'Angular'],
    price: 5199,
    shortDescription: 'Issues event tickets as unique tokens so duplicate or fake tickets can be checked at the gate.',
    fullDescription: 'Each ticket is an NFT tied to an event and seat. Buyers purchase from the contract, transfers can be limited, and door staff scan a token id to confirm validity. Cuts photocopy fraud because only the on-chain owner is valid.',
    imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'ERC-721 tickets with event and seat metadata',
      'Purchase, transfer limits, and used-ticket marking',
      'Gate check that confirms current on-chain owner',
      'Angular booking and scanner screens',
      'Anti-fraud design notes in the documentation'
    ]
  },
  {
    id: 'blockchain-decentralized-social',
    title: 'Decentralized Social Media Platform',
    category: 'Blockchain',
    techStack: ['Solidity', 'IPFS', 'Ethers.js', 'Angular'],
    price: 5399,
    shortDescription: 'Posts and profiles stored with on-chain identity so a single company cannot silently delete the public record.',
    fullDescription: 'A minimal social dApp: profiles, posts, and follows are referenced on-chain while media lives on IPFS. Users sign posts with their wallet. Moderation is modeled as optional community flags rather than a hidden admin delete of the canonical hash.',
    imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Wallet-based profiles, posts, and follow graph',
      'IPFS content with on-chain post hashes',
      'Feed UI in Angular with MetaMask',
      'Optional community-flag events',
      'Architecture comparison vs centralized social apps'
    ]
  },
  {
    id: 'blockchain-charity-donation',
    title: 'Blockchain based Charity Donation Tracker',
    category: 'Blockchain',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'Angular'],
    price: 4999,
    shortDescription: 'Tracks donations to a charity on-chain so donors can see when funds are received and later spent.',
    fullDescription: 'Campaigns collect ETH or tokens into a charity contract. Donors see their contribution, campaign totals, and spending requests that must be recorded on-chain. Improves trust by making inflow and outflow visible without a private spreadsheet.',
    imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Campaign create, donate, and on-chain spending records',
      'Donor dashboard of gifts and campaign totals',
      'Withdrawal only to registered charity wallets',
      'Angular donation UI with wallet connect',
      'Transparency model explained in the report'
    ]
  },
  {
    id: 'blockchain-multisig-wallet',
    title: 'Multi-Signature Wallet System',
    category: 'Blockchain',
    techStack: ['Solidity', 'Hardhat', 'OpenZeppelin', 'Ethers.js'],
    price: 5299,
    shortDescription: 'A shared wallet that needs several owners to approve before any payment goes out.',
    fullDescription: 'Implements an M-of-N multisig wallet. Owners submit a transaction, other owners confirm, and the transfer executes only after the threshold is met. Suited for club treasuries or team funds. Includes Hardhat tests for confirm, revoke, and execute paths.',
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'M-of-N owner threshold for outgoing transfers',
      'Submit, confirm, revoke, and execute transaction flow',
      'Owner add/remove with existing multisig approval',
      'Minimal UI or scripts to demo confirmations',
      'Security notes and test coverage in the report'
    ]
  }
];
