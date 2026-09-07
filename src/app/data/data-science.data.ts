// Data Science Projects
import { Project } from '../models/project.model';

export const DATA_SCIENCE_PROJECTS: Project[] = [
  {
    id: 'ds-financial-fraud-detection',
    title: 'Credit Card Fraud Detection System',
    category: 'Data Science',
    techStack: ['Python', 'XGBoost', 'Scikit-Learn', 'Pandas', 'Docker'],
    price: 4299,
    shortDescription: 'End-to-end automated fraud detection engine handling highly imbalanced transaction streams using SMOTE and Isolation Forests.',
    fullDescription: 'Addresses severe class imbalance (0.17% fraud rate) in credit card transaction data using advanced synthetic minority oversampling (SMOTE) and an ensemble of XGBoost and Isolation Forests. Achieves 98.4% ROC-AUC score, includes automated feature engineering, SHAP model interpretability charts, and containerized REST microservice.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
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
    title: 'Patient Health Risk & Mortality Predictor',
    category: 'Data Science',
    techStack: ['Python', 'LightGBM', 'Seaborn', 'Streamlit', 'NumPy'],
    price: 4499,
    shortDescription: 'Clinical decision support system predicting patient readmission risk and vitals deterioration using electronic health records.',
    fullDescription: 'A healthcare analytics dashboard trained on MIMIC-III clinical records. Implements LightGBM and survival analysis to predict patient deterioration and ICU mortality risk hours before critical events. Displays real-time feature importance metrics, allowing clinicians to understand which vital sign shifts triggered the alert.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'MIMIC-III clinical dataset pre-processing scripts',
      'LightGBM & Random Forest comparative model evaluation',
      'Interactive patient triage dashboard with interactive sliders',
      'Receiver Operating Characteristic (ROC) & Precision-Recall curves',
      'Ready-to-deliver project documentation and evaluation metrics'
    ]
  },
  {
    id: 'ds-retail-sales-forecasting',
    title: 'Sales Prediction Dashboard',
    category: 'Data Science',
    techStack: ['Python', 'Prophet', 'PyTorch', 'Pandas', 'Streamlit'],
    price: 4299,
    shortDescription: 'Time-series forecasting suite modeling holiday seasonality, promotional discounts, and macroeconomic factors.',
    fullDescription: 'Built on Walmart retail store datasets, this forecasting pipeline leverages Meta Prophet for decomposable seasonal trends alongside a stacked LSTM for nonlinear residual prediction. Generates store-level item forecasts up to 12 weeks out, minimizing stockout penalties and warehouse holding costs.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Hybrid Meta Prophet + Stacked Bi-LSTM time-series forecasting model',
      'Decomposition of trend, weekly seasonality, and localized promotional spikes',
      'Confidence interval calculation (80% and 95% uncertainty bands)',
      'Streamlit analytics dashboard comparing predicted vs. historical actuals',
      'Full academic report including MAPE, RMSE, and MAE benchmark tables'
    ]
  },
  {
    id: 'ds-customer-segmentation-rfm',
    title: 'Customer Buying Pattern Analyzer',
    category: 'Data Science',
    techStack: ['Python', 'Scikit-Learn', 'K-Means', 'Seaborn', 'Dash'],
    price: 3999,
    shortDescription: 'Unsupervised clustering system grouping e-commerce shoppers into actionable marketing personas based on RFM scores.',
    fullDescription: 'Analyzes millions of retail transactions to segment consumers using Recency, Frequency, and Monetary (RFM) modeling. Combines Elbow Method and Silhouette Analysis to determine optimal K-Means cluster counts, pairing findings with PCA 2D/3D visualizations for marketing campaigns.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Automated RFM feature engineering from raw sales transactions',
      'K-Means clustering optimized via Silhouette and Davies-Bouldin indices',
      'Interactive 3D PCA cluster scatter plots built with Dash and Plotly',
      'Automated persona generation (Champions, At-Risk, Loyalists, Hibernating)',
      'Complete Jupyter notebooks and formatted presentation-ready documentation'
    ]
  },
  {
    id: 'ds-stock-market-trend-analysis',
    title: 'Stock Price Trend Predictor',
    category: 'Data Science',
    techStack: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas-TA', 'Streamlit'],
    price: 4699,
    shortDescription: 'Quantitative finance pipeline computing 40+ technical indicators to predict directional equity movement.',
    fullDescription: 'Integrates real-time Yahoo Finance market feeds, computing technical indicators (MACD, RSI, Bollinger Bands, ATR) with Pandas-TA. Employs an ensemble of XGBoost and Random Forests with walk-forward cross-validation to backtest algorithmic trading strategies while penalizing slippage and transaction friction.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      '40+ technical indicators computed with vectorized Pandas-TA routines',
      'Walk-forward time-series split avoiding data lookahead bias',
      'Backtesting engine measuring Sharpe Ratio, Max Drawdown, and Win Rate',
      'Interactive candlestick charts with buy/sell signal overlays',
      'Complete mathematical documentation on quantitative trading metrics'
    ]
  },
  {
    id: 'ds-interactive-eda-dashboard',
    title: 'Automated Data Analysis & Profiling Tool',
    category: 'Data Science',
    techStack: ['Python', 'Dash', 'Plotly', 'Pandas', 'Scikit-Learn'],
    price: 3999,
    shortDescription: 'Web-based zero-code data profiling studio generating statistical distributions, correlations, and anomaly alerts.',
    fullDescription: 'An enterprise-inspired automated EDA portal that ingests any CSV or parquet file. In seconds, it produces missing value matrix plots, skewness checks, Pearson/Spearman correlation heatmaps, boxplot outlier detectors, and automated baseline regression/classification reports.',
    imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Instant statistical profiling with missing value heatmap generation',
      'Interactive Plotly correlation matrices with dynamic threshold filtering',
      'Multivariate distribution plots and automated outlier tagging via IQR',
      'One-click export of synthesized PDF data discovery reports',
      'Clean modular Dash code architecture easily extensible for custom datasets'
    ]
  },
  {
    id: 'ds-telecom-churn-prediction',
    title: 'Customer Churn Predictor',
    category: 'Data Science',
    techStack: ['Python', 'Scikit-Learn', 'CatBoost', 'SHAP', 'Flask'],
    price: 4199,
    shortDescription: 'Supervised predictive classification system identifying high-risk churn customers with personalized retention suggestions.',
    fullDescription: 'Trained on telecom subscriber records to forecast contract cancellations. Leverages CatBoost gradient boosting to handle categorical features with zero target leakage. Integrates SHAP values so customer support managers see the exact reasons (e.g., tenure, pricing tier, tech support calls) behind each churn prediction.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'CatBoost model achieving 89.6% ROC-AUC with fast training convergence',
      'SHAP waterfall explanations showing individual customer churn drivers',
      'Customer risk tiering: High, Moderate, and Low risk thresholds',
      'Flask microservice with batch CSV upload and single-customer scoring',
      'Comprehensive project report with ROI analysis of retention interventions'
    ]
  },
  {
    id: 'ds-house-price-valuation',
    title: 'House Price Prediction System',
    category: 'Data Science',
    techStack: ['Python', 'LightGBM', 'GeoPandas', 'Scikit-Learn', 'Streamlit'],
    price: 4099,
    shortDescription: 'Geospatial property appraisal model integrating regional neighborhood metrics and regression ensembles.',
    fullDescription: 'Predicts residential property valuations using an ensemble of LightGBM and Ridge Regression. Incorporates GeoPandas geospatial coordinates to factor in school district proximity, transit accessibility, and crime rates, delivering accurate price estimations with intuitive feature importance plots.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Geospatial distance calculations to key urban amenities and hubs',
      'LightGBM regression tuned via Bayesian hyperparameter optimization',
      'Streamlit user interface with interactive property feature inputs',
      'Residual diagnostic plots verifying homoscedasticity and normality',
      'Well-commented codebase and full academic documentation package'
    ]
  },
  {
    id: 'ds-air-pollution-forecasting',
    title: 'Air Quality & Pollution Predictor',
    category: 'Data Science',
    techStack: ['Python', 'ARIMA', 'XGBoost', 'Folium', 'Pandas'],
    price: 4399,
    shortDescription: 'Environmental monitoring pipeline forecasting PM2.5 and PM10 concentrations across municipal sensor networks.',
    fullDescription: 'Analyzes historical meteorological observations (humidity, wind velocity, temperature) and particulate matter levels. Combines seasonal ARIMA with XGBoost to forecast AQI levels 48 hours into the future, rendering interactive geospatial heatmaps on municipal maps using Folium.',
    imageUrl: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Spatio-temporal particulate forecasting (PM2.5, PM10, NO2, CO)',
      'Time-lagged cross-feature engineering from meteorological sensor data',
      'Interactive Folium map showing color-coded regional AQI danger zones',
      'Public health advisory generator based on projected AQI thresholds',
      'Clean data pipelines with complete report and reproducible results'
    ]
  },
  {
    id: 'ds-flight-delay-prediction',
    title: 'Flight Delay Prediction System',
    category: 'Data Science',
    techStack: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas', 'FastAPI'],
    price: 4299,
    shortDescription: 'Classification engine evaluating flight departure delays based on airport congestion and live weather metrics.',
    fullDescription: 'Trained on multi-million row US DOT aviation flight data. Merges live METAR meteorological data with airport carrier schedules to predict whether commercial flights will experience delays exceeding 15 minutes, allowing travelers and logistics firms to optimize flight bookings.',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'High-throughput data processing pipeline handling multi-million rows',
      'Integrated airport hub congestion indices and flight origin-destination vectors',
      'XGBoost classifier with threshold tuning to maximize Recall',
      'FastAPI endpoint with JSON input payload validation',
      'Academic project report with precision-recall trade-off documentation'
    ]
  },
  {
    id: 'ds-supply-chain-inventory',
    title: 'Smart Inventory Demand Predictor',
    category: 'Data Science',
    techStack: ['Python', 'Scikit-Learn', 'Statsmodels', 'Pandas', 'Plotly'],
    price: 4599,
    shortDescription: 'Prescriptive analytics engine calculating dynamic safety stock levels and optimal replenishment cycles.',
    fullDescription: 'Helps distribution centers minimize both stockouts and excessive capital lockup. Combines historical sales volatility, supplier lead-time probability distributions, and service-level targets to compute dynamic safety stock and Reorder Points (ROP), visualized through interactive Plotly dashboards.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Stochastic lead-time and demand distribution modeling',
      'Automated Economic Order Quantity (EOQ) and Reorder Point (ROP) calculation',
      'What-if scenario simulator adjusting target service levels from 90% to 99%',
      'Interactive Plotly inventory depletion waterfall graphs',
      'Complete documentation with supply chain management formulations'
    ]
  },
  {
    id: 'ds-employee-attrition-predictor',
    title: 'Employee Attrition Predictor',
    category: 'Data Science',
    techStack: ['Python', 'Scikit-Learn', 'XGBoost', 'Streamlit'],
    price: 4199,
    shortDescription: 'Predicts which employees are likely to leave using HR data such as tenure, overtime, and satisfaction scores.',
    fullDescription: 'Helps HR teams spot attrition risk before people resign. Trains a classification model on workplace data—department, overtime, last appraisal, and commute—and ranks employees by leaving probability. A Streamlit dashboard shows risk tiers and the factors that most influence each prediction.',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'HR dataset cleaning and feature engineering for attrition modeling',
      'XGBoost classifier with high/medium/low risk banding',
      'Factor importance view explaining why an employee is flagged',
      'Streamlit HR dashboard with batch CSV scoring',
      'Project report with ROC metrics and retention discussion'
    ]
  },
  {
    id: 'ds-loan-approval-prediction',
    title: 'Loan Approval Prediction System',
    category: 'Data Science',
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'Flask'],
    price: 4099,
    shortDescription: 'Estimates loan approval chances from applicant income, credit history, and existing debts with a clear yes/no score.',
    fullDescription: 'A banking analytics project that predicts whether a loan application is likely to be approved. Uses applicant income, credit history, loan amount, and dependents to produce an approval probability. The Flask form is designed for classroom demos with both single-applicant and batch CSV modes.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Applicant feature form covering income, credit history, and loan size',
      'Classification model returning approve/reject with probability',
      'Batch scoring for CSV lists of applications',
      'Flask interface with result explanation for each decision',
      'Evaluation notebook with precision, recall, and confusion matrix'
    ]
  },
  {
    id: 'ds-diabetes-prediction',
    title: 'Diabetes Prediction using Health Data',
    category: 'Data Science',
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'Streamlit'],
    price: 3999,
    shortDescription: 'Predicts diabetes risk from health measures such as glucose, BMI, age, and blood pressure using a trained model.',
    fullDescription: 'A healthcare analytics tool trained on standard clinical indicators. Users enter glucose, BMI, age, insulin, and related measures to receive a risk label and probability. Built as a Streamlit app with clean charts so medical and CS students can present the workflow easily.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Health-indicator form based on widely used diabetes datasets',
      'Trained classifier with risk probability and class label',
      'Simple visual explanation of the most influential inputs',
      'Streamlit UI suitable for live project demonstration',
      'Report covering data cleaning, model comparison, and metrics'
    ]
  },
  {
    id: 'ds-social-media-sentiment',
    title: 'Twitter/Social Media Sentiment Dashboard',
    category: 'Data Science',
    techStack: ['Python', 'NLTK', 'Pandas', 'Plotly'],
    price: 4299,
    shortDescription: 'Reads social media posts, labels them as positive, negative, or neutral, and shows trend charts by topic or hashtag.',
    fullDescription: 'Turns a stream of tweets or exported posts into a sentiment dashboard. Cleans text, scores polarity, and plots daily mood around a brand, event, or campus topic. Includes hashtag filters, sample datasets, and Plotly charts for presentations.',
    imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Text cleaning and sentiment labeling for tweets or CSV exports',
      'Positive, negative, and neutral breakdown by day or hashtag',
      'Interactive Plotly charts for volume and mood trends',
      'Keyword and hashtag filters for campaign-style analysis',
      'Documentation with sample social datasets and scoring method'
    ]
  },
  {
    id: 'ds-retail-demand-forecasting',
    title: 'Retail Demand Forecasting Tool',
    category: 'Data Science',
    techStack: ['Python', 'Prophet', 'Pandas', 'Streamlit'],
    price: 4399,
    shortDescription: 'Forecasts product-level retail demand using past sales, seasonality, and promotion dates to reduce stockouts.',
    fullDescription: 'Helps stores plan how much of each SKU to keep in stock. Builds weekly demand forecasts from historical sales, holidays, and promo flags, then shows expected units with uncertainty bands. Distinct from store-wide sales dashboards by focusing on item-level replenishment.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'SKU-level time-series forecasts with holiday and promo effects',
      'Uncertainty bands to support safety-stock decisions',
      'Streamlit planner comparing forecast vs actual units',
      'CSV upload for store sales history',
      'Report with MAPE/RMSE tables and forecast plots'
    ]
  },
  {
    id: 'ds-customer-segmentation-clustering',
    title: 'Customer Segmentation using Clustering',
    category: 'Data Science',
    techStack: ['Python', 'Scikit-Learn', 'K-Means', 'Seaborn'],
    price: 3999,
    shortDescription: 'Groups customers into clusters using spending, visits, and demographics so marketing teams can target each group.',
    fullDescription: 'Segments shoppers with unsupervised clustering on demographics and buying behavior. Finds a practical number of clusters, labels each group, and visualizes them for campaign planning. Complements RFM buying-pattern work by focusing on mixed demographic and behavioral features.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'K-Means clustering with Elbow and Silhouette checks',
      'Customer personas generated from cluster centroids',
      '2D scatter and profile bar charts for each segment',
      'Jupyter notebooks ready for viva walkthrough',
      'Report describing feature scaling and cluster interpretation'
    ]
  },
  {
    id: 'ds-insurance-claim-prediction',
    title: 'Insurance Claim Prediction System',
    category: 'Data Science',
    techStack: ['Python', 'XGBoost', 'Pandas', 'Flask'],
    price: 4299,
    shortDescription: 'Predicts whether an insurance claim is likely to be approved or flagged, using policy and incident details.',
    fullDescription: 'Supports insurance operations by scoring incoming claims. Uses policy type, claim amount, incident data, and customer history to estimate approval likelihood or fraud-risk flags. A Flask app lets users enter a claim and view the predicted outcome with key contributing fields.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Claim scoring model using policy and incident features',
      'Approve vs review flags with probability scores',
      'Flask form and CSV batch prediction modes',
      'Feature-importance view for claim reviewers',
      'Evaluation report with class-balance handling notes'
    ]
  },
  {
    id: 'ds-sports-performance-analytics',
    title: 'Sports Performance Analytics Dashboard',
    category: 'Data Science',
    techStack: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    price: 4099,
    shortDescription: 'Analyzes player and team stats to show form, comparisons, and performance trends across matches or seasons.',
    fullDescription: 'A sports analytics dashboard for cricket, football, or similar match data. Loads player statistics, computes form trends, and compares athletes on key metrics such as scoring rate, consistency, and contribution. Streamlit charts make it easy to present insights in a project demo.',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba6851?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Player and team stat ingestion from CSV match logs',
      'Form trend lines and head-to-head comparison charts',
      'Filter by season, position, or opponent',
      'Streamlit dashboard with Plotly visuals',
      'Documentation covering metrics and sample sports datasets'
    ]
  },
  {
    id: 'ds-real-estate-price-trend',
    title: 'Real Estate Price Trend Analyzer',
    category: 'Data Science',
    techStack: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    price: 4199,
    shortDescription: 'Shows how property prices change by locality and year using historical listing data and trend charts.',
    fullDescription: 'Focuses on market movement rather than a single house valuation. Loads historical listing prices, groups them by locality and property type, and plots year-over-year trends with moving averages. Useful for students presenting city housing market insights.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Locality and property-type trend charts from historical listings',
      'Year-over-year change and moving-average overlays',
      'Filters for BHK, area, and city zone',
      'Streamlit explorer with downloadable summary tables',
      'Report describing data sources and trend calculations'
    ]
  },
  {
    id: 'ds-employee-performance-dashboard',
    title: 'Employee Performance Analysis Dashboard',
    category: 'Data Science',
    techStack: ['Python', 'Pandas', 'Plotly', 'Dash'],
    price: 3999,
    shortDescription: 'Visualizes employee KPIs, appraisal scores, and department comparisons on an interactive HR dashboard.',
    fullDescription: 'Gives managers a clear view of workforce performance. Aggregates KPI scores, attendance, and appraisal ratings into department and individual charts. Dash filters let you compare teams, spot low performers, and export summary tables for reviews.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'KPI and appraisal score aggregation by employee and department',
      'Interactive Dash filters for team and time period',
      'Comparison charts highlighting top and at-risk performers',
      'CSV export of review summaries',
      'Project report with dashboard wireframes and metric definitions'
    ]
  },
  {
    id: 'ds-crop-yield-prediction',
    title: 'Crop Yield Prediction using Data Science',
    category: 'Data Science',
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'Streamlit'],
    price: 4299,
    shortDescription: 'Predicts crop yield from rainfall, temperature, soil type, and fertilizer use to support farm planning.',
    fullDescription: 'An agriculture analytics project that estimates expected yield for a crop and region. Combines weather, soil, and input features in a regression model and shows predicted quintals per hectare. Farmers or students can try different rainfall or fertilizer values in the Streamlit form.',
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Yield regression using weather, soil, and fertilizer features',
      'What-if sliders for rainfall and input changes',
      'Region and crop-type filters with predicted output',
      'Streamlit farm-planning interface',
      'Report with model comparison and error metrics'
    ]
  },
  {
    id: 'ds-movie-data-analysis',
    title: 'Netflix/Movie Data Analysis Dashboard',
    category: 'Data Science',
    techStack: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    price: 3999,
    shortDescription: 'Explores movie and show catalogs to reveal genre trends, ratings, and content added over the years.',
    fullDescription: 'A content analytics dashboard built on a Netflix-style catalog dataset. Answers questions such as which genres grew fastest, how ratings vary by country, and when most titles were added. Plotly visuals make the story easy to present in a data science viva.',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Genre, country, and rating breakdowns from catalog data',
      'Yearly content-addition trend charts',
      'Interactive filters for type, genre, and region',
      'Streamlit dashboard with Plotly visuals',
      'EDA notebook and written findings in the project report'
    ]
  },
  {
    id: 'ds-covid19-data-analysis',
    title: 'Covid-19 Data Analysis & Visualization',
    category: 'Data Science',
    techStack: ['Python', 'Pandas', 'Plotly', 'Folium'],
    price: 4099,
    shortDescription: 'Visualizes Covid-19 cases, recoveries, and vaccination progress with time charts and regional maps.',
    fullDescription: 'Walks through public Covid-19 datasets to show case curves, recovery rates, and vaccination coverage. Includes time-series plots, country comparisons, and a Folium map of regional intensity. Packaged as a reproducible notebook-plus-dashboard project.',
    imageUrl: 'https://images.unsplash.com/photo-1584118624012-df056829fbd0?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Case, recovery, and vaccination time-series charts',
      'Country and state comparison tables',
      'Folium map of regional case intensity',
      'Reproducible notebooks with public dataset links',
      'Report summarizing insights and visualization choices'
    ]
  },
  {
    id: 'ds-ecommerce-sales-analytics',
    title: 'E-commerce Sales Analytics Dashboard',
    category: 'Data Science',
    techStack: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    price: 4199,
    shortDescription: 'Tracks online store sales, top products, and monthly revenue with an interactive e-commerce dashboard.',
    fullDescription: 'Turns raw order data into store performance insights. Shows revenue by month, best-selling products, category mix, and customer order frequency. Streamlit filters let you slice by region, category, or date range for a complete retail analytics demo.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Source Code', 'Report', 'Quick Setup Help', 'Project Detailing'],
    features: [
      'Monthly revenue and order-volume trend charts',
      'Top-product and category contribution views',
      'Region and date-range filters for store performance',
      'Streamlit dashboard with Plotly visuals',
      'Sample e-commerce dataset and KPI definitions in the report'
    ]
  }
];
