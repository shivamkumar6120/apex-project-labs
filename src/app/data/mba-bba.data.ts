// MBA/BBA Research Projects (report-based, not technical builds)
import { Project } from '../models/project.model';

const MBA_DELIVERABLES = [
  'Complete Research Report',
  'Survey/Questionnaire Data',
  'Presentation (PPT)',
  'Viva Preparation Notes',
];

export const MBA_BBA_PROJECTS: Project[] = [
  {
    id: 'mba-social-media-consumer-behavior',
    title: 'Impact of Social Media Marketing on Consumer Buying Behavior',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Primary Research', 'SPSS Analysis', 'Survey Data'],
    price: 1999,
    shortDescription: 'Studies how Instagram, Facebook, and YouTube ads influence purchase intent, brand recall, and actual buying among online shoppers.',
    fullDescription: 'A marketing research study examining whether social media campaigns change what people buy. Uses a structured questionnaire, descriptive statistics, and hypothesis tests to link ad exposure, trust, and purchase intention. Suitable for MBA/BBA marketing specializations with clear objectives, literature review, and managerial recommendations.',
    imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Literature review on social proof, influencer cues, and online purchase intent',
      'Structured survey with Likert-scale items for ad exposure and buying behavior',
      'SPSS-ready data tables with correlation and hypothesis testing notes',
      'Managerial implications for brand social media calendars',
      'Viva notes covering research design, sampling, and limitations'
    ]
  },
  {
    id: 'mba-brand-loyalty-fmcg',
    title: 'Brand Loyalty Analysis in FMCG Sector',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Primary Research', 'Brand Equity', 'Survey Data'],
    price: 1899,
    shortDescription: 'Measures why consumers stay loyal to FMCG brands such as soaps, snacks, and packaged foods, and what makes them switch.',
    fullDescription: 'Investigates loyalty drivers in fast-moving consumer goods—price, quality, promotions, and availability. Combines a consumer survey with simple loyalty scores and switching analysis. The report interprets findings for brand managers in the Indian FMCG context.',
    imageUrl: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'FMCG brand-choice and repeat-purchase questionnaire',
      'Loyalty vs switching cross-tabulation for key product categories',
      'Discussion of price promotions versus quality as loyalty drivers',
      'Recommendations for retention campaigns in retail and kirana channels',
      'Presentation slides summarizing findings for a marketing viva'
    ]
  },
  {
    id: 'mba-influencer-marketing-effectiveness',
    title: 'Influencer Marketing Effectiveness Study',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Primary Research', 'SPSS Analysis', 'Consumer Perception'],
    price: 1999,
    shortDescription: 'Evaluates whether influencer posts raise awareness, trust, and purchase intent compared with regular brand ads.',
    fullDescription: 'Assesses how follower count, authenticity, and product fit affect campaign results. Survey respondents rate sponsored posts versus brand ads; analysis compares awareness, trust, and intent. Includes practical guidance on choosing micro versus mega influencers.',
    imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Survey items on influencer trust, fit, and purchase intent',
      'Comparison of micro-influencer vs celebrity endorsement perceptions',
      'Hypothesis tests linking authenticity scores to buying intent',
      'Campaign checklist for marketing managers',
      'Viva talking points on sampling and social-media bias'
    ]
  },
  {
    id: 'mba-digital-marketing-ecommerce',
    title: 'Digital Marketing Strategy Analysis for E-commerce',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Secondary Data', 'SWOT Analysis', 'Digital Strategy'],
    price: 1899,
    shortDescription: 'Reviews SEO, paid ads, email, and social tactics used by an e-commerce brand and recommends a clearer digital mix.',
    fullDescription: 'A strategy paper on how an online retailer attracts and converts traffic. Uses publicly available campaign patterns, a simple funnel view, and SWOT to judge SEO, paid search, social, and email. Ends with a 90-day digital mix recommendation for students to present.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Channel-wise review of SEO, paid ads, social, and email',
      'SWOT of the chosen e-commerce digital presence',
      'Funnel discussion from awareness to repeat purchase',
      'Budget-mix recommendation for a student-scale brand',
      'PPT covering strategy options and expected outcomes'
    ]
  },
  {
    id: 'mba-consumer-behavior-online-shopping',
    title: 'Consumer Behavior Study on Online Shopping',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Primary Research', 'Survey Data', 'SPSS Analysis'],
    price: 1899,
    shortDescription: 'Explores why shoppers choose online stores—convenience, price, reviews, and trust—and what stops a checkout.',
    fullDescription: 'Maps online shopping motives and barriers using a structured consumer survey. Covers convenience, discounts, ratings, payment safety, and return policy as drivers of cart completion. Findings are framed for retail and e-commerce course vivas.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Online-shopper survey covering motives and drop-off reasons',
      'Demographic splits (age, city type, income band) in findings',
      'Discussion of trust, COD, and return-policy effects',
      'Retailer recommendations to reduce cart abandonment',
      'Questionnaire appendix and SPSS variable codebook'
    ]
  },
  {
    id: 'mba-market-segmentation-strategy',
    title: 'Market Segmentation Strategy Analysis',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Secondary Data', 'STP Framework', 'Market Research'],
    price: 1799,
    shortDescription: 'Applies segmentation, targeting, and positioning to a chosen product category and proposes a practical STP plan.',
    fullDescription: 'Uses the STP framework to split a market by demographics, usage, and benefits sought. Evaluates which segments are attractive and how a brand should position against rivals. Written as a compact strategy report with charts suitable for a BBA marketing paper.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Demographic, geographic, and behavioral segment profiles',
      'Target-segment attractiveness scoring',
      'Positioning statement and perceptual-map discussion',
      'STP recommendations for a sample product line',
      'Viva notes on segmentation bases and targeting errors'
    ]
  },
  {
    id: 'mba-financial-performance-company',
    title: 'Financial Performance Analysis of a Company',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Financial Statement Analysis', 'Secondary Data', 'Ratio Analysis'],
    price: 2099,
    shortDescription: 'Reviews three to five years of a listed company’s revenue, profit, and balance-sheet trends and comments on financial health.',
    fullDescription: 'A company-level finance project using published annual reports. Tracks sales, margins, returns, and leverage over time and interprets what the numbers mean for investors and management. Includes tables, trend charts, and a clear overall verdict.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Multi-year P&L and balance-sheet trend tables',
      'Margin, ROE, and growth commentary in plain language',
      'Peer or industry snapshot for context',
      'Management implications and limitations of secondary data',
      'Excel-friendly ratio working notes in the appendix'
    ]
  },
  {
    id: 'mba-ratio-analysis-financial-health',
    title: 'Ratio Analysis and Financial Health Study',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Financial Ratio Analysis', 'Secondary Data'],
    price: 1899,
    shortDescription: 'Calculates liquidity, solvency, profitability, and activity ratios to judge whether a firm is financially sound.',
    fullDescription: 'Walks through classic ratio groups using a company’s published statements. Interprets current ratio, debt-equity, net profit margin, and asset turnover, then grades overall health. Designed for finance students who need a clean, exam-friendly ratio project.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Liquidity, leverage, profitability, and efficiency ratio set',
      'Year-on-year comparison with interpretation of each group',
      'Simple financial-health scorecard for viva presentation',
      'Notes on what ratios cannot capture (qualitative risks)',
      'Formula sheet and worked examples in the report appendix'
    ]
  },
  {
    id: 'mba-mutual-fund-investment-preferences',
    title: 'Mutual Fund Investment Preferences Study',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Primary Research', 'Survey Data', 'Investment Behavior'],
    price: 1899,
    shortDescription: 'Surveys why retail investors pick equity, debt, or hybrid mutual funds, and what they look at before investing.',
    fullDescription: 'Studies investor choice among mutual fund types using a questionnaire on risk appetite, returns, SIP habit, and advisor influence. Findings help explain preference patterns among salaried and student-age investors. Includes charts and chi-square notes for a finance viva.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Investor survey on fund type, SIP vs lumpsum, and risk',
      'Preference analysis by age and income group',
      'Discussion of returns, ratings, and advisor influence',
      'Recommendations for AMCs and financial educators',
      'Questionnaire and coding sheet for SPSS or Excel'
    ]
  },
  {
    id: 'mba-working-capital-management',
    title: 'Working Capital Management Analysis',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Working Capital Ratios', 'Secondary Data', 'Cash Cycle'],
    price: 1999,
    shortDescription: 'Analyses inventory, receivables, and payables to see how efficiently a company funds day-to-day operations.',
    fullDescription: 'Focuses on the cash conversion cycle of a manufacturing or trading firm. Uses annual-report figures for inventory days, debtor days, and creditor days, then comments on liquidity pressure and operating efficiency. Recommendations cover tightening credit and inventory policy.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Current assets and current liabilities trend tables',
      'Cash conversion cycle calculation and interpretation',
      'Receivables and inventory policy discussion',
      'Liquidity-risk comments for management',
      'Worked ratio appendix suitable for finance evaluation'
    ]
  },
  {
    id: 'mba-risk-return-stock-market',
    title: 'Risk and Return Analysis of Stock Market Investments',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Portfolio Theory', 'Secondary Data', 'Excel Analysis'],
    price: 2099,
    shortDescription: 'Compares selected stocks or indices on average return and risk (standard deviation/beta) to show the risk-return trade-off.',
    fullDescription: 'An investments project using historical market data. Computes returns, volatility, and simple beta for a small stock set or index, then discusses diversification in plain language. Ideal for MBA finance students presenting CAPM-style ideas without building trading software.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Return and risk tables for a sample stock basket',
      'Standard deviation and beta discussion in non-jargon terms',
      'Diversification takeaway for a retail investor',
      'Limitations of historical data and short windows',
      'Excel working file notes and PPT charts'
    ]
  },
  {
    id: 'mba-fd-vs-sip-comparison',
    title: 'Comparative Study of Fixed Deposits vs SIP',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Investment Comparison', 'Secondary Data', 'Survey Data'],
    price: 1799,
    shortDescription: 'Compares safety, returns, and liquidity of bank FDs versus mutual-fund SIPs and reports which investors prefer each.',
    fullDescription: 'Contrasts fixed deposits and systematic investment plans on return, risk, lock-in, and ease. Mixes secondary rate/return illustrations with a short investor preference survey. Helps students argue when an FD is enough and when a SIP may suit long-term goals.',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Side-by-side FD vs SIP features: risk, return, liquidity',
      'Illustrative return comparison over sample horizons',
      'Investor preference survey findings',
      'Goal-based recommendation matrix (emergency vs long-term)',
      'Viva notes on inflation and compounding in simple terms'
    ]
  },
  {
    id: 'mba-financial-literacy-investment',
    title: 'Impact of Financial Literacy on Investment Decisions',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Primary Research', 'SPSS Analysis', 'Survey Data'],
    price: 1999,
    shortDescription: 'Tests whether people who score higher on basic finance knowledge invest more confidently and diversify better.',
    fullDescription: 'Links a short financial-literacy quiz with self-reported investment choices. Analyses whether literacy scores relate to equity participation, SIP use, and avoidance of risky tips. Recommendations target campus and workplace literacy programs.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Literacy quiz plus investment-behavior questionnaire',
      'Association tests between literacy score and product choice',
      'Discussion of overconfidence and herd behavior',
      'Program ideas for colleges and HR onboarding',
      'SPSS output interpretation notes for viva'
    ]
  },
  {
    id: 'mba-employee-engagement-satisfaction',
    title: 'Employee Engagement and Job Satisfaction Study',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Primary Research', 'HR Analytics', 'Survey Data'],
    price: 1899,
    shortDescription: 'Measures engagement and job satisfaction in an organization and identifies what most affects both scores.',
    fullDescription: 'An HR field study using engagement and satisfaction scales. Relates factors such as recognition, supervisor support, and workload to overall scores. The report gives HR a short action list rather than a software dashboard.',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Engagement and satisfaction Likert survey',
      'Factor-wise mean scores and gap comments',
      'Link between engagement items and intent to stay',
      'HR action recommendations by priority',
      'Questionnaire and sampling notes for HR viva'
    ]
  },
  {
    id: 'mba-training-development-performance',
    title: 'Impact of Training and Development on Performance',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Primary Research', 'Kirkpatrick Model', 'Survey Data'],
    price: 1999,
    shortDescription: 'Checks whether training programs improve employee skill, confidence, and reported job performance.',
    fullDescription: 'Evaluates T&D effectiveness using trainee feedback and supervisor-rated performance items. Frames results with a simple Kirkpatrick-style reaction and learning view. Useful for HR students defending training ROI in qualitative-plus-survey form.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Pre/post or perception survey of training usefulness',
      'Performance items rated by self or supervisor',
      'Discussion of training design, transfer, and barriers',
      'Recommendations to improve training calendars',
      'PPT with Kirkpatrick levels explained simply'
    ]
  },
  {
    id: 'mba-recruitment-selection-process',
    title: 'Recruitment and Selection Process Analysis',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Process Study', 'Primary Research', 'HR Policy'],
    price: 1799,
    shortDescription: 'Maps how a company hires—from job posting to offer—and flags delays, bias risks, and quality-of-hire issues.',
    fullDescription: 'A process-analysis project on recruitment and selection. Combines HR interviews or a recruiter survey with a flowchart of sourcing, screening, interviews, and offers. Recommends practical fixes such as structured interviews and clearer scorecards.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'As-is hiring process map with time-to-fill discussion',
      'Stakeholder views from HR and hiring managers',
      'Fairness and structured-interview recommendations',
      'Simple scorecard template in the appendix',
      'Viva notes on campus vs lateral hiring differences'
    ]
  },
  {
    id: 'mba-employee-retention-strategy',
    title: 'Employee Retention Strategy Study',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Primary Research', 'Survey Data', 'HR Strategy'],
    price: 1899,
    shortDescription: 'Identifies why employees stay or leave and proposes a retention mix covering pay, growth, and culture.',
    fullDescription: 'Studies attrition drivers through an employee survey and exit-reason themes. Ranks pay, career path, workload, and manager quality, then proposes a retention plan a mid-size firm could actually run. Written for HR specialization submissions.',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Stay/leave factor survey with priority ranking',
      'Thematic summary of common exit reasons',
      'Retention strategy mix (career, recognition, flexibility)',
      '90-day HR action plan for a sample firm',
      'Limitations section on self-report bias'
    ]
  },
  {
    id: 'mba-work-life-balance-productivity',
    title: 'Work-Life Balance Impact on Productivity',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Primary Research', 'SPSS Analysis', 'Survey Data'],
    price: 1899,
    shortDescription: 'Tests whether better work-life balance is linked to higher self-reported productivity and lower burnout.',
    fullDescription: 'Connects WLB items (hours, flexibility, leave) with productivity and burnout scores. Uses correlation and simple regression notes to support the argument. Recommendations cover flexible hours and manager training, framed for Indian service-sector settings.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'WLB, productivity, and burnout scale items',
      'Correlation analysis with interpretation',
      'Gender and role-group comparison tables',
      'Policy ideas for hybrid and shift roles',
      'Ethical notes on surveying employees'
    ]
  },
  {
    id: 'mba-performance-appraisal-system',
    title: 'Performance Appraisal System Analysis',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['HR Policy', 'Primary Research', 'Process Study'],
    price: 1799,
    shortDescription: 'Reviews how appraisals are done in an organization and whether employees see them as fair and useful.',
    fullDescription: 'Analyses appraisal methods (rating scales, KRAs, 360-degree) and employee perception of fairness and feedback quality. Combines a perception survey with a process description. Suggests a clearer cycle, calibration, and development conversations.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Appraisal process description and cycle calendar',
      'Fairness and feedback-quality survey findings',
      'Comparison of rating vs MBO-style approaches',
      'Recommendations for calibration and training of raters',
      'Sample KRA sheet in the appendix'
    ]
  },
  {
    id: 'mba-rewards-employee-motivation',
    title: 'Impact of Rewards on Employee Motivation',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Primary Research', 'Motivation Theory', 'Survey Data'],
    price: 1799,
    shortDescription: 'Compares monetary and non-monetary rewards and their effect on motivation, using a workplace survey.',
    fullDescription: 'Applies motivation ideas (for example Herzberg or expectancy) to real reward practices—bonus, recognition, promotion, and learning. Survey results show which rewards employees value most. The report helps HR balance cash and non-cash recognition.',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Monetary vs non-monetary reward preference ranking',
      'Motivation-theory mapping in accessible language',
      'Survey findings by job level',
      'Recognition-program design suggestions',
      'Viva questions on intrinsic vs extrinsic motivation'
    ]
  },
  {
    id: 'mba-supply-chain-efficiency',
    title: 'Supply Chain Management Efficiency Study',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Operations Research', 'Secondary Data', 'Process Study'],
    price: 1999,
    shortDescription: 'Examines how a firm sources, stores, and delivers goods, and where delays or extra cost appear in the chain.',
    fullDescription: 'An operations project mapping supplier, warehouse, and distribution steps. Uses a case company or published operations data to discuss lead time, stockouts, and coordination. Recommendations cover vendor scorecards and basic visibility, not a coded WMS.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'End-to-end supply-chain process map',
      'Lead-time and stockout discussion with sample metrics',
      'Supplier coordination and information-flow gaps',
      'Efficiency improvement recommendations',
      'PPT process diagrams for operations viva'
    ]
  },
  {
    id: 'mba-inventory-management-analysis',
    title: 'Inventory Management System Analysis',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['EOQ Concepts', 'Secondary Data', 'Operations'],
    price: 1899,
    shortDescription: 'Studies how inventory is planned and controlled, including stockouts, excess stock, and reorder practices.',
    fullDescription: 'Reviews inventory policy using EOQ, safety stock, and ABC ideas at a conceptual and numerical-illustration level. Interprets a firm’s inventory days and turnover from statements or a case. Aimed at operations/BBA students, not software implementation.',
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'ABC classification illustration and policy comments',
      'EOQ and reorder-point worked example',
      'Inventory turnover interpretation from secondary data',
      'Recommendations to cut excess and stockouts',
      'Formula appendix for operations evaluation'
    ]
  },
  {
    id: 'mba-logistics-distribution-strategy',
    title: 'Logistics and Distribution Strategy Study',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Logistics Strategy', 'Secondary Data', 'Case Analysis'],
    price: 1899,
    shortDescription: 'Analyses warehousing, transport modes, and last-mile choices and recommends a distribution setup for a product line.',
    fullDescription: 'Looks at how goods move from plant or port to customer. Compares own fleet versus 3PL, hub-and-spoke versus direct dispatch, and service-level versus cost. A strategy report with a recommended network sketch for a chosen industry.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Mode and warehouse-location discussion',
      '3PL versus in-house trade-off table',
      'Service-level vs cost positioning',
      'Distribution strategy recommendation for a sample SKU set',
      'Map-style slides for the presentation deck'
    ]
  },
  {
    id: 'mba-quality-control-process',
    title: 'Quality Control Process Analysis',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['TQM Concepts', 'Process Study', 'Case Analysis'],
    price: 1799,
    shortDescription: 'Reviews inspection, defect handling, and quality culture in a unit and suggests TQM-style improvements.',
    fullDescription: 'Describes incoming, in-process, and final quality checks in a manufacturing or service setting. Uses TQM and simple defect-type discussion (not a coded dashboard) to recommend SOP and training changes. Fits operations and total quality management papers.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Quality-check process map (incoming to dispatch)',
      'Common defect categories and likely causes',
      'TQM and continuous-improvement recommendations',
      'Role of training and documentation',
      'Viva notes on ISO vs TQM in simple terms'
    ]
  },
  {
    id: 'mba-startup-business-plan',
    title: 'Business Plan for a Startup',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Business Planning', 'Market Sizing', 'Financial Projections'],
    price: 2199,
    shortDescription: 'A full startup plan covering problem, offer, market, operations, marketing, and a three-year financial sketch.',
    fullDescription: 'Builds a complete business plan for a student-scale venture (for example campus services, D2C, or local tech-enabled service). Includes customer problem, value proposition, go-to-market, team, and simple P&L projections. Written so it can be presented to a faculty panel as an entrepreneurship project.',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Problem, solution, and target-customer sections',
      'Go-to-market and 12-month milestone plan',
      'Three-year revenue and cost sketch (assumptions listed)',
      'Risks and mitigation table',
      'Pitch-style PPT plus detailed written plan'
    ]
  },
  {
    id: 'mba-swot-analysis-company',
    title: 'SWOT Analysis of a Company',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['SWOT Framework', 'Secondary Data', 'Strategy'],
    price: 1499,
    shortDescription: 'Maps a company’s strengths, weaknesses, opportunities, and threats and turns them into strategy options.',
    fullDescription: 'A classic strategy assignment using SWOT on a well-known firm. Draws on public information to fill each quadrant, then converts findings into SO/WO/ST/WT options. Short, clear, and viva-friendly for first-year MBA/BBA strategy courses.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Evidence-backed SWOT quadrants',
      'TOWS-style strategy options from the matrix',
      'Priority actions for the next 12 months',
      'Limitations of SWOT as a standalone tool',
      'One-page SWOT slide plus full write-up'
    ]
  },
  {
    id: 'mba-competitive-strategy-analysis',
    title: 'Competitive Strategy Analysis',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ["Porter's Five Forces", 'Competitor Analysis', 'Secondary Data'],
    price: 1999,
    shortDescription: 'Uses industry structure and rival comparison to explain how a firm competes and where it should focus next.',
    fullDescription: 'Applies Porter’s Five Forces and a competitor profile to an industry (for example telecom, QSR, or banking). Explains rivalry, substitutes, and buyer power in accessible language, then comments on cost versus differentiation. Strategy recommendations stay at the business-unit level.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Five Forces assessment with supporting arguments',
      'Competitor comparison on price, reach, and offer',
      'Generic strategy discussion (cost vs differentiation)',
      'Focus areas for the next planning cycle',
      'Framework slides for a strategy viva'
    ]
  },
  {
    id: 'mba-feasibility-new-venture',
    title: 'Feasibility Study for a New Business Venture',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Feasibility Analysis', 'Market Research', 'Financial Viability'],
    price: 2199,
    shortDescription: 'Tests whether a new business idea is viable across market, technical, operational, and financial angles.',
    fullDescription: 'A go/no-go study for a proposed venture. Covers demand clues, location or channel feasibility, basic operations, legal notes, and a break-even sketch. Ends with a clear recommendation and conditions under which the idea should not proceed.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Market, technical, operational, and financial feasibility chapters',
      'Break-even illustration with listed assumptions',
      'Risk register and mitigation',
      'Explicit go / revise / no-go conclusion',
      'Checklist PPT for a panel presentation'
    ]
  },
  {
    id: 'mba-crm-strategy-analysis',
    title: 'CRM Strategy Analysis for a Business',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['CRM Strategy', 'Secondary Data', 'Customer Retention'],
    price: 1899,
    shortDescription: 'Reviews how a firm acquires, retains, and wins back customers, and recommends a clearer CRM playbook.',
    fullDescription: 'Looks at CRM as a business process, not as software code. Maps acquisition, onboarding, loyalty, and complaint handling, then identifies gaps in data use and service recovery. Recommendations cover loyalty tiers and feedback loops a mid-size firm can run.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Customer lifecycle map (acquire–retain–win-back)',
      'Loyalty and complaint-handling gap analysis',
      'CRM metric discussion (retention, NPS-style items)',
      'Playbook recommendations without requiring a coded CRM',
      'Case questions for marketing/CRM viva'
    ]
  },
  {
    id: 'mba-business-analytics-decision-making',
    title: 'Business Analytics for Decision Making Study',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Business Analytics', 'Secondary Data', 'Decision Frameworks'],
    price: 1999,
    shortDescription: 'Shows how managers can use sales, customer, and operations numbers to choose between options, without building a full tech stack.',
    fullDescription: 'A management-analytics paper: what questions to ask, which simple metrics to watch, and how dashboards (as a concept) support decisions. Uses a case dataset or published figures to illustrate a decision (pricing, stocking, or campaign). Emphasis is on managerial interpretation, not Python pipelines.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Decision questions mapped to metrics',
      'Illustrative tables (sales mix, conversion, or region split)',
      'Interpretation guide for non-technical managers',
      'Governance notes (data quality, ethics)',
      'PPT walkthrough of one decision using the numbers'
    ]
  },
  {
    id: 'mba-ai-adoption-business-operations',
    title: 'AI Adoption Impact on Business Operations',
    category: 'MBA/BBA',
    projectType: 'research',
    researchAreas: ['Secondary Data', 'Change Management', 'Operations Strategy'],
    price: 1999,
    shortDescription: 'Studies how companies adopt AI tools in operations, the benefits they expect, and the people-and-process barriers they face.',
    fullDescription: 'A strategy/operations research paper on AI in business—not a coded AI product. Reviews use cases (chat support, demand planning, document work), expected efficiency gains, skills gaps, and ethics. Mixes secondary cases with a short manager or student perception survey where specified.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    deliverables: [...MBA_DELIVERABLES],
    features: [
      'Use-case map of AI in operations and customer service',
      'Benefit vs risk discussion (jobs, bias, data privacy)',
      'Change-management barriers to adoption',
      'Phased adoption recommendations for a mid-size firm',
      'Non-technical viva notes distinguishing this from an AI/ML coding project'
    ]
  }
];
