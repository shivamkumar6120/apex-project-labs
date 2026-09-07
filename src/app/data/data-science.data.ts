// Data Science Projects
import { Project } from '../models/project.model';

export const DATA_SCIENCE_PROJECTS: Project[] = [
  {
    id: 'ds-financial-fraud-detection',
    title: 'Credit Card & Financial Transaction Fraud Detection Pipeline',
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
    title: 'Predictive Healthcare Analytics & ICU Mortality Forecasting',
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
    title: 'Multivariate Retail Sales & Demand Forecasting with Prophet & LSTM',
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
    title: 'Customer Lifetime Value & RFM Behavioral Segmentation Engine',
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
    title: 'Algorithmic Stock Trend Prediction & Volatility Backtesting Engine',
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
    title: 'Automated Exploratory Data Analysis & Feature Profiling Platform',
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
    title: 'Customer Churn Prediction & Retention Strategy Pipeline',
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
    title: 'Real Estate Valuation & Hedonic Price Modeling Engine',
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
    title: 'Urban Air Quality Index (AQI) Spatio-Temporal Forecasting',
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
    title: 'Aviation Flight Delay Risk Prediction with Weather Feature Pipelines',
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
    title: 'Dynamic Inventory Optimization & Reorder Point Prediction System',
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
  }
];
