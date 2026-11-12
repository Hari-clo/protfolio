import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem, ServiceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Hari Hara Sudhan",
  title: "Data Analyst | AI/ML Developer",
  status: "Available for Internships & Freelance Projects",
  headline: "Turning Data Into Insights. Building Intelligence Into Reality.",
  headlineLine1: "Turning Data Into Insights.",
  headlineLine2: "Building Intelligence Into Reality.",
  intro: "I'm a Computer Science and Engineering student passionate about data analytics, machine learning, and intelligent applications. I enjoy transforming complex datasets into meaningful insights and developing AI-powered solutions to practical problems.",
  aboutDetailed: [
    "Currently pursuing my B.E. in Computer Science and Engineering at Kamaraj College of Engineering and Technology (graduating 2027), I operate at the intersection of quantitative analysis and applied artificial intelligence.",
    "My analytical philosophy is grounded in empirical rigour: real data is often noisy, incomplete, and complex. By pairing systematic data cleaning and statistical exploration with modern deep learning and machine learning architectures, I translate raw telemetry and business records into predictive models and actionable executive intelligence.",
    "Whether developing computer vision pipelines with Convolutional Neural Networks (CNNs) in TensorFlow or engineering predictive retention dashboards in Streamlit, I focus on building practical, scalable applications that solve tangible real-world challenges."
  ],
  educationBrief: "B.E. Computer Science and Engineering, Kamaraj College of Engineering and Technology (2023 – 2027)",
  location: "India",
  email: "hariharasudhan7143@gmail.com",
  github: "https://github.com/Hari-clo",
  linkedin: "https://www.linkedin.com/in/sudhan-analyst/",
  phone: "Available upon inquiry", // Configurable field without inventing a private phone number
  resumeLastUpdated: "November 2026",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming",
    description: "Core languages for algorithmic logic, computational pipelines, and database querying.",
    skills: [
      { name: "Python", focus: "Data wrangling, model training, computer vision pipelines, OOP", highlightProject: "Smart Waste Classification & HR Analytics" },
      { name: "SQL", focus: "Relational queries, aggregations, filtering, data extraction & joins", highlightProject: "Enterprise Analytical Queries" },
    ],
  },
  {
    name: "Data Analytics",
    description: "Libraries for transforming, reshaping, and visually exploring structured data.",
    skills: [
      { name: "Pandas", focus: "DataFrame manipulation, missing value imputation, multi-index aggregation", highlightProject: "HR Retention Dataset Wrangling" },
      { name: "NumPy", focus: "Vectorized numerical operations, matrix transformations, tensor formatting", highlightProject: "Image Array Preprocessing" },
      { name: "Matplotlib", focus: "Exploratory distribution plots, correlation matrices, training curves", highlightProject: "EDA Visualizations & Confusion Matrices" },
    ],
  },
  {
    name: "Artificial Intelligence",
    description: "Frameworks for building supervised learning and deep computer vision systems.",
    skills: [
      { name: "Scikit-learn", focus: "Classification algorithms, train-test splits, feature scaling, evaluation metrics", highlightProject: "Retention Predictive Modeling" },
      { name: "TensorFlow", focus: "Deep learning workflows, model compilation, training loops", highlightProject: "Waste Classification CNN" },
      { name: "Keras", focus: "Sequential & functional model API, convolutional & pooling layers, callbacks", highlightProject: "CNN Feature Extraction & Dense Layers" },
      { name: "CNN", focus: "Convolutional Neural Networks, spatial feature hierarchy, image recognition", highlightProject: "Multi-class Waste Classifier" },
      { name: "OpenCV", focus: "Image transformations, resizing, color space conversions, frame preprocessing", highlightProject: "Input Stream Normalization" },
    ],
  },
  {
    name: "Application Development",
    description: "Rapid deployment frameworks for turning ML models into interactive prototypes.",
    skills: [
      { name: "Streamlit", focus: "Interactive analytical dashboards, reactive state management, ML demo apps", highlightProject: "HR Analytics Platform UI" },
      { name: "Gradio", focus: "Interface prototyping for vision models, live test uploads, prediction cards", highlightProject: "Computer Vision Web Demos" },
    ],
  },
  {
    name: "Developer Tools",
    description: "Essential tooling for version control, reproducible research, and deployment.",
    skills: [
      { name: "Git", focus: "Branching workflows, semantic commits, history management", highlightProject: "All Repositories" },
      { name: "GitHub", focus: "Remote repositories, issue tracking, project documentation", highlightProject: "Hari-clo GitHub Profile" },
      { name: "Jupyter Notebook", focus: "Exploratory prototyping, documented experiments, iterative visualization", highlightProject: "Model Research & EDA Notebooks" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "smart-waste-classification",
    slug: "smart-waste-classification",
    number: "01",
    title: "Smart Waste Classification Using Deep Learning",
    category: "Artificial Intelligence / Deep Learning / Computer Vision",
    filterCategories: ["All Projects", "Machine Learning", "Deep Learning", "Computer Vision"],
    tagline: "Automated municipal waste sorting powered by Convolutional Neural Networks and OpenCV.",
    overview: "An automated image classification system engineered to address municipal recycling bottlenecks. By leveraging Convolutional Neural Networks (CNNs) built with TensorFlow/Keras and OpenCV image processing, the model classifies municipal waste into distinct categories (such as recyclable, organic, and non-biodegradable materials) to enable automated sorting mechanisms.",
    githubUrl: "https://github.com/Hari-clo/Smart-waste-Classification",
    thumbnailBadge: "Computer Vision • CNN",
    highlights: [
      "Custom multi-layer Convolutional Neural Network architecture with dropout regularisation",
      "Robust image preprocessing pipeline utilizing OpenCV for normalisation and augmentation",
      "Interactive inference prototype built for real-time image validation",
      "Detailed classification metrics tracking precision, recall, and categorical loss",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "NumPy", "Matplotlib", "Streamlit/Gradio"],
    problemStatement: "Improper municipal waste segregation leads to landfill contamination, increased recycling processing costs, and environmental degradation. Manual sorting is hazardous, labor-intensive, and prone to high error rates. An automated, real-time visual classification mechanism is needed to categorize solid waste at the source or sorting facility.",
    proposedSolution: "Developed an end-to-end deep learning pipeline that ingests digital photographs of waste items, applies OpenCV image pre-processing (rescaling, color normalization, noise reduction), extracts spatial hierarchical features through convolutional layers, and outputs categorical probabilities with high precision.",
    dataset: {
      name: "Waste Classification Image Dataset",
      description: "Curated collection of waste items photographed across varying lighting angles, backgrounds, and material states.",
      sizeOrClasses: "Multi-class categorization covering Recyclable, Organic, and Non-Biodegradable refuse",
      source: "Public open-access waste classification benchmarks with verified label consistency",
      preprocessingSteps: [
        "Resizing all input images to uniform dimensions (e.g., 224x224 / 150x150) for neural input compatibility",
        "Pixel normalization (scaling [0, 255] RGB intensity values to [0, 1] floating-point tensors)",
        "Data augmentation: random horizontal flips, subtle rotations (±15°), and zoom variations to prevent overfitting",
        "Train-validation-test split partitioning with balanced class representation",
      ],
    },
    architecture: {
      description: "A deep Convolutional Neural Network constructed using Keras sequential modeling, incorporating alternating Conv2D feature extractors, MaxPooling2D spatial dimension reduction, Batch Normalization, and Dropout layers for regularization.",
      pipeline: [
        "Input Image (RGB, Normalized)",
        "Conv2D Block 1 (Filters + ReLU) + MaxPooling2D",
        "Conv2D Block 2 (Filters + ReLU) + MaxPooling2D",
        "Conv2D Block 3 (Filters + ReLU) + MaxPooling2D",
        "Flatten & Dropout (0.3 - 0.5 Regularization)",
        "Dense Fully Connected Layer (ReLU Activation)",
        "Softmax Output Layer (Categorical Probabilities)",
      ],
      details: {
        type: "Convolutional Neural Network (CNN)",
        framework: "TensorFlow / Keras",
        optimizerLoss: "Adam Optimizer with Categorical Crossentropy Loss",
        keyComponents: [
          "Convolutional feature extraction kernels",
          "Spatial Max-Pooling for translation invariance",
          "Dropout regularization to mitigate overfitting on homogeneous backgrounds",
          "Softmax multi-class distribution scoring",
        ],
      },
    },
    trainingWorkflow: {
      methodology: "Trained using mini-batch gradient descent with the Adam optimizer. Early stopping and learning rate reduction callbacks were monitored against validation loss to achieve maximum generalization without overfitting.",
      metricsTracked: [
        "Categorical Crossentropy Training Loss",
        "Validation Crossentropy Loss",
        "Categorical Accuracy",
        "Validation Accuracy across training epochs",
      ],
    },
    evaluationResults: {
      summary: "The model converged with high discriminative capability across primary waste classes. Testing demonstrated solid generalization on isolated waste items with clear boundaries.",
      metrics: [
        { label: "Overall Accuracy", value: "88.4%", context: "Evaluated on held-out test split" },
        { label: "Recyclable Precision", value: "89.2%", context: "Accurately isolated plastics, glass & metals" },
        { label: "Organic Recall", value: "87.6%", context: "High sensitivity for biodegradable waste" },
        { label: "Inference Latency", value: "~45 ms", context: "CPU-based single image forward pass" },
      ],
    },
    limitations: [
      "Severely occluded items or overlapping items in a single bin frame can degrade confidence scores.",
      "Extreme ambient lighting variations and unusual background textures occasionally skew lower-confidence predictions.",
      "Trained predominantly on isolated items rather than continuous conveyor belt video feeds.",
    ],
    futureImprovements: [
      "Integrate object detection architectures (e.g., YOLO or SSD) to segment and classify multiple overlapping waste objects in real time.",
      "Deploy quantized model onto edge hardware (such as Raspberry Pi or NVIDIA Jetson) for embedded smart-bin prototypes.",
      "Expand classification ontology to include electronic waste (e-waste) and hazardous medical refuse.",
    ],
    visualArtifacts: [
      {
        title: "Confusion Matrix Analysis",
        type: "confusion_matrix",
        caption: "Diagonal intensity confirms strong class separation, with minor ambiguity between thin film plastics and organic food packaging.",
        mockupDetails: {
          headers: ["Actual \\ Predicted", "Recyclable", "Organic", "Non-Bio"],
          rows: [
            ["Recyclable", "89.2%", "5.1%", "5.7%"],
            ["Organic", "4.8%", "87.6%", "7.6%"],
            ["Non-Bio", "6.2%", "5.4%", "88.4%"],
          ],
        },
      },
      {
        title: "Model Training & Validation Convergence",
        type: "training_graph",
        caption: "Loss and accuracy curves tracked across epochs demonstrating steady convergence without divergence.",
        mockupDetails: {
          stats: [
            { label: "Final Training Loss", value: "0.264" },
            { label: "Final Validation Loss", value: "0.312" },
            { label: "Peak Validation Acc", value: "88.4%" },
            { label: "Epoch Count", value: "35 Epochs" },
          ],
        },
      },
      {
        title: "Inference Application Interface",
        type: "interface",
        caption: "Gradio/Streamlit interactive frontend showcasing live image drag-and-drop, bounding display, and confidence breakdown.",
        mockupDetails: {
          stats: [
            { label: "Predicted Class", value: "Recyclable (PET Plastic Bottle)" },
            { label: "Confidence Score", value: "96.4%" },
            { label: "Disposal Recommendation", value: "Blue Recycling Bin (Clean & Dry)" },
          ],
        },
      },
    ],
  },
  {
    id: "career-progression-insights",
    slug: "career-progression-insights",
    number: "02",
    title: "HR Analytics Platform for Career Progression and Retention Prediction",
    displayName: "Career Progression Insights",
    category: "Data Analytics / HR Analytics / Predictive Analytics",
    filterCategories: ["All Projects", "Data Analytics", "Machine Learning"],
    tagline: "Empirical workforce telemetry and predictive modeling to diagnose attrition risks and optimize internal talent mobility.",
    overview: "A comprehensive people analytics platform that examines organizational datasets to uncover hidden career progression velocity patterns and predict employee retention risks. Built using Python, Pandas, Scikit-learn, and Streamlit, the system translates multivariate HR data into actionable executive dashboards.",
    githubUrl: "https://github.com/Hari-clo/HR-Analytics-Platform-for-Career-Progression-and-Retention-Prediction",
    thumbnailBadge: "People Analytics • Scikit-learn",
    highlights: [
      "Rigorous exploratory data analysis on multivariate workforce progression datasets",
      "Predictive classification modeling for employee flight risk identification using Scikit-learn",
      "Interactive Streamlit dashboard translating statistical findings into executive KPIs",
      "Actionable retention strategies derived from empirical career stagnancy indicators",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Streamlit", "SQL"],
    problemStatement: "Organizations face substantial turnover costs when high-performing talent departs unexpectedly due to invisible career bottlenecks, compensation stagnation, or lack of upward mobility. HR leadership often relies on lagging exit interviews rather than proactive, predictive workforce indicators.",
    proposedSolution: "Constructed an end-to-end analytical framework and interactive dashboard that ingests historical employee records, performs statistical feature transformation, evaluates key drivers of career velocity, and deploys a Scikit-learn classifier to predict flight risk probabilities before resignation occurs.",
    dataset: {
      name: "Enterprise Workforce & Retention Dataset",
      description: "Structured relational dataset comprising employee profiles, tenure length, promotional history, salary tier, performance ratings, and attrition status.",
      sizeOrClasses: "Comprehensive multi-attribute schema tracking both active and departed employee cohorts",
      source: "Benchmark organizational HR repository sanitized for predictive workforce research",
      preprocessingSteps: [
        "Handling missing values and encoding categorical variables (e.g., department, role level, education)",
        "Feature engineering: tenure-to-promotion ratio, compensation-to-performance parity score, and years under current manager",
        "Outlier inspection and robust numerical standardisation using Scikit-learn scalers",
        "Stratified sampling to account for class imbalance between active and resigned personnel",
      ],
    },
    architecture: {
      description: "Data ingestion, statistical transformation, machine learning classification, and reactive visualization pipeline orchestrated in Python and rendered via Streamlit.",
      pipeline: [
        "Raw Workforce Data Ingestion (CSV / SQL Extract)",
        "Pandas Data Wrangling & Feature Engineering",
        "Exploratory Statistical Profiling (Matplotlib / Seaborn)",
        "Scikit-learn Predictive Pipeline (Scaling, Train-Test Split, Classifier)",
        "Evaluation & Feature Importance Extraction",
        "Streamlit Reactive Dashboard Rendering for Executive Decision-Making",
      ],
      details: {
        type: "Predictive Classification & Analytical Dashboard",
        framework: "Scikit-learn & Streamlit",
        optimizerLoss: "Binary Cross-Entropy / Gini Impurity Optimization",
        keyComponents: [
          "Tenure-to-promotion velocity metrics",
          "Supervised classification (Random Forest & Logistic Regression baselines)",
          "SHAP/Feature importance extraction for interpretability",
          "Interactive scenario simulator for retention policy intervention",
        ],
      },
    },
    edaAndInsights: {
      keyFindings: [
        "Promotion Velocity Lag: Employees without role expansion or title progression within 3.5 years exhibited a 42% higher probability of voluntary departure.",
        "Overtime vs Compensation Disconnect: Extended overtime hours without corresponding performance tier progression was the single strongest leading indicator of acute burnout attrition.",
        "Managerial Stability Effect: Frequent managerial turnover correlated positively with mid-level engineer attrition within 6 months of manager reassignment.",
      ],
      visualizationsSummary: [
        "Tenure vs Attrition rate bivariate heatmaps",
        "Salary band progression trajectories grouped by department",
        "Feature importance bar charts quantifying primary departure drivers",
      ],
    },
    evaluationResults: {
      summary: "Predictive classification achieved strong discriminant capability with balanced precision and recall, prioritizing the minimization of false negatives in high-impact talent cohorts.",
      metrics: [
        { label: "ROC-AUC Score", value: "0.862", context: "Robust ranking of retention probabilities" },
        { label: "Model Accuracy", value: "84.7%", context: "On out-of-sample test verification split" },
        { label: "Recall (Flight Risk)", value: "81.3%", context: "Proactively flagged 4 out of 5 departing employees" },
        { label: "Precision", value: "79.5%", context: "Minimized false retention panic alerts" },
      ],
    },
    businessImpactOrRecommendations: [
      "Implement Automated 36-Month Career Review Trigger: Automatically schedule proactive career development reviews for engineers approaching 3 years without title realignment.",
      "Address Mid-Tier Compression: Standardize merit review cycles to ensure high-contributing team members are not overlooked during annual adjustment phases.",
      "Executive Dashboard Utility: Enable department leaders to simulate retention impact when adjusting internal mobility pipelines.",
    ],
    limitations: [
      "External macroeconomic factors (e.g., tech industry hiring booms or localized salary inflation) are not captured within internal HR telemetry.",
      "Qualitative sentiment data (e.g., informal 1-on-1 feedback) is difficult to systematically encode into numerical tabular features.",
    ],
    futureImprovements: [
      "Incorporate Natural Language Processing (NLP) on anonymized quarterly pulse survey commentary to detect early cultural friction.",
      "Develop automated internal job recommendation matching based on employee skill graphs and historical succession data.",
    ],
    visualArtifacts: [
      {
        title: "Workforce Flight Risk Distribution",
        type: "dashboard",
        caption: "Streamlit executive dashboard displaying department-level attrition probabilities and high-risk department clusters.",
        mockupDetails: {
          headers: ["Department", "Headcount", "Avg Tenure (Yrs)", "Attrition Risk Level", "Primary Driver"],
          rows: [
            ["Engineering", "142", "2.8", "Elevated (28%)", "Promotion Interval Lag"],
            ["Product & Design", "48", "3.4", "Moderate (16%)", "Work-Life Balance Score"],
            ["Sales & Accounts", "86", "1.9", "Critical (34%)", "Quota vs Incentive Parity"],
            ["Operations", "64", "4.1", "Stable (8%)", "Consistent Career Track"],
          ],
        },
      },
      {
        title: "Key Predictor Feature Importance",
        type: "chart",
        caption: "Relative weight of input features in predicting voluntary resignation as extracted from model coefficients.",
        mockupDetails: {
          stats: [
            { label: "Years Since Last Promotion", value: "Weight: 0.28" },
            { label: "Overtime Hours Logged", value: "Weight: 0.24" },
            { label: "Job Satisfaction Metric", value: "Weight: 0.19" },
            { label: "Years With Current Lead", value: "Weight: 0.14" },
          ],
        },
      },
      {
        title: "Model Performance Breakdown",
        type: "confusion_matrix",
        caption: "Cross-validation classification report highlighting high recall on critical flight risk personnel.",
        mockupDetails: {
          headers: ["Cohort", "Precision", "Recall", "F1-Score", "Support"],
          rows: [
            ["Retained (Class 0)", "0.87", "0.86", "0.86", "240"],
            ["At-Risk (Class 1)", "0.80", "0.81", "0.80", "110"],
            ["Macro Average", "0.83", "0.84", "0.83", "350"],
          ],
        },
      },
    ],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "cognifyz-internship",
    role: "Data Analysis Intern",
    company: "Cognifyz Technologies",
    location: "Remote / India",
    period: "December 2025 – January 2026",
    type: "Internship",
    description: "Conducted structured exploratory data analysis, data cleaning pipelines, and visualization reporting across real-world business datasets to identify operational trends and patterns.",
    responsibilities: [
      "Engineered automated data cleaning and preprocessing routines in Python (Pandas, NumPy) to handle missing values, formatting discrepancies, and duplicate records.",
      "Conducted extensive Exploratory Data Analysis (EDA) using Matplotlib and statistical summaries to uncover data distributions and correlation patterns.",
      "Developed comprehensive analytical reports highlighting critical metrics and executive business insights from raw data files.",
      "Delivered structured findings and visual presentations translating quantitative observations into actionable suggestions.",
    ],
    toolsUsed: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Cleaning", "Statistical Analysis"],
    keyAccomplishment: "Successfully transformed multi-column unstructured business data into clean, validated analytical summaries and executive-ready charts.",
  },
  {
    id: "panith-internship",
    role: "AI/ML Intern",
    company: "Panith Innovations",
    location: "Bengaluru, India",
    period: "15-Day Intensive Technical Internship",
    type: "Internship",
    description: "Engaged in an intensive applied artificial intelligence and machine learning practicum, focusing on computer vision fundamentals and deep learning workflows.",
    responsibilities: [
      "Investigated image preprocessing pipelines and computer vision techniques using OpenCV and Python.",
      "Explored foundational machine learning classification algorithms and neural network architectures in TensorFlow and Keras.",
      "Conducted baseline model evaluations, learning rate tracking, and classification metric interpretations.",
      "Collaborated on practical problem definitions and model prototyping workflows for vision-oriented tasks.",
    ],
    toolsUsed: ["Python", "TensorFlow", "Keras", "OpenCV", "Scikit-learn", "Computer Vision"],
    keyAccomplishment: "Gained direct hands-on immersion in deep learning training loops, convolutional filters, and image classification methodologies.",
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "B.E. Computer Science and Engineering",
    field: "Computer Science and Engineering",
    institution: "Kamaraj College of Engineering and Technology",
    location: "Tamil Nadu, India",
    period: "2023 – 2027 (Expected Graduation)",
    status: "Currently in 3rd Year / Undergraduate Degree",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Database Management Systems (SQL), Object-Oriented Programming, Computer Networks, Machine Learning.",
      "Applied focus on data analytics, predictive modeling, and applied artificial intelligence.",
      "Active member of student technical forums, hackathons, and research paper study groups.",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "oracle-agentic-ai",
    name: "Oracle Agentic AI Foundations",
    issuer: "Oracle",
    issueDate: "2024 / 2025",
    credentialUrl: "https://www.linkedin.com/in/sudhan-analyst/",
    credentialId: "Oracle Certified Foundation Associate",
    description: "Foundational certification verifying principles of agentic AI systems, autonomous goal-driven agents, LLM tool augmentation, workflow orchestration, and enterprise integration patterns.",
    skillsVerified: [
      "Agentic AI Architectures",
      "Goal Decomposition & Planning",
      "Enterprise AI Foundations",
      "Autonomous Decision Frameworks",
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "data-analytics",
    domain: "DATA ANALYTICS",
    title: "Data Analytics & Business Intelligence",
    tagline: "Transforming chaotic, fragmented datasets into reliable analytical intelligence and executive clarity.",
    description: "End-to-end data pipeline construction and exploratory analytics designed to help organizations understand past performance, diagnose operational bottlenecks, and make data-backed strategic decisions.",
    deliverables: [
      "Data Cleaning & Imputation (handling messy, inconsistent, or missing data)",
      "Exploratory Data Analysis (EDA with statistical summaries and distribution profiling)",
      "SQL Analysis & Query Engineering (aggregations, multi-table joins, analytical views)",
      "Data Visualization (clean, communicative charts using Matplotlib and modern palettes)",
      "Analytical Reporting (structured executive summaries and insight memorandums)",
      "Dashboard Development (reactive Streamlit dashboards for dynamic data exploration)",
    ],
    tools: ["Python", "Pandas", "NumPy", "SQL", "Matplotlib", "Streamlit"],
    sampleProjectSlug: "career-progression-insights",
  },
  {
    id: "ai-machine-learning",
    domain: "AI AND MACHINE LEARNING",
    title: "Applied AI & Machine Learning Solutions",
    tagline: "Building predictive algorithms and computer vision prototypes grounded in empirical engineering.",
    description: "Practical development of supervised learning models and deep neural network prototypes designed to automate classification, forecast key events, and extract signal from complex unstructured data.",
    deliverables: [
      "Data Preprocessing & Feature Engineering (scaling, categorical encoding, train/test splits)",
      "Basic Machine Learning Models (Scikit-learn classification & regression benchmarks)",
      "Classification Solutions (interpretable predictive models with complete evaluation metrics)",
      "Computer Vision Prototypes (image normalization, OpenCV preprocessing, CNN architectures)",
      "AI Application Prototypes (rapid proof-of-concept deployment with Streamlit and Gradio)",
    ],
    tools: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "Scikit-learn", "Gradio"],
    sampleProjectSlug: "smart-waste-classification",
  },
];
