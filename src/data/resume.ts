export const personalInfo = {
  name: "Srikar Anudeep Remani",
  title: "Applied Gen AI Engineer & Code Judge (GitHub Copilot)",
  email: "srikar1506@gmail.com",
  phone: "512-202-9957",
  location: "Austin, TX",
  image: "/srikar.jpeg",
  resume: "/Srikar.pdf",
  socials: {
    github: "https://github.com/srikar1506",
    linkedin: "https://www.linkedin.com/in/asr143/",
    portfolio: "https://srikarremani143.github.io/srikar-portfolio/",
    streamlit: "https://share.streamlit.io/",
  },
  tagline:
    "Production LLM systems—multi-agent orchestration, RAG on BigQuery, NL2SQL, and multimodal interfaces—with quality loops from evaluation to fine-tuning exports.",
  certifications: ["Certified Google Gen AI Leader"],
};

export const summary =
  "Applied Generative AI engineer specializing in production LLM systems: multi-agent orchestration, RAG on BigQuery, text-to-SQL, and multimodal interfaces, built with FastAPI, GCP, and Vertex AI / Gemini, with explicit quality loops (feedback, reporting, corrections, and fine-tuning exports). Strengthens model reliability through Copilot-oriented code evaluation and RLHF-adjacent workflows at Microsoft. Background includes ML research (computer vision and process analytics), data science (ETL, NLP, dashboards), and an Azure analytics/MLOps platform project.";

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    icon: "code",
    skills: [{ name: "Python" }, { name: "SQL" }],
  },
  {
    category: "Generative AI & LLM Systems",
    icon: "sparkles",
    skills: [
      { name: "RAG" },
      { name: "Vector search & embeddings" },
      { name: "Multi-agent orchestration" },
      { name: "Natural language to SQL" },
      { name: "Multimodal workflows (text, speech, vision)" },
      { name: "Prompt design & evaluation" },
      { name: "Guardrails & relevance filtering" },
      { name: "Human-in-the-loop feedback loops" },
      { name: "Fine-tuning data export (JSONL)" },
    ],
  },
  {
    category: "Machine Learning & AI",
    icon: "brain",
    skills: [
      { name: "Supervised Learning" },
      { name: "Unsupervised Learning" },
      { name: "Ensemble Methods" },
      { name: "Feature Engineering" },
      { name: "Model Evaluation (ROC-AUC, F1)" },
      { name: "Cross-Validation" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "server",
    skills: [
      { name: "FastAPI" },
      { name: "REST API design" },
      { name: "WebSockets (streaming)" },
      { name: "Pydantic" },
      { name: "Async Python" },
      { name: "Microservices layout" },
      { name: "GCP service accounts" },
    ],
  },
  {
    category: "Data & Business Intelligence",
    icon: "bar-chart",
    skills: [
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "GCP Looker Studio" },
      { name: "Amazon QuickSight" },
      { name: "Excel dashboards" },
      { name: "Statistical modeling" },
      { name: "Data mining" },
      { name: "Anomaly detection" },
    ],
  },
  {
    category: "AI Frameworks & Libraries",
    icon: "layers",
    skills: [
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "CrewAI" },
      { name: "PhiData" },
      { name: "Hugging Face" },
      { name: "Streamlit" },
      { name: "OpenCV" },
      { name: "TensorFlow" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Scikit-learn" },
      { name: "SciPy" },
      { name: "Statsmodels" },
      { name: "Pydantic" },
    ],
  },
  {
    category: "Cloud Platforms",
    icon: "cloud",
    skills: [
      { name: "Azure SQL Database" },
      { name: "Azure Blob Storage" },
      { name: "Azure ML" },
      { name: "Azure Data Factory" },
      { name: "GCP BigQuery" },
      { name: "GCP Cloud Storage" },
      { name: "GCP Cloud Run" },
      { name: "GCP Vertex AI / Gemini" },
      { name: "AWS QuickSight" },
      { name: "Docker" },
    ],
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    role: "Code Judge",
    company: "Microsoft",
    location: "Remote - Redmond, WA",
    period: "November 2025 – Present",
    current: true,
    bullets: [
      "Evaluated AI-generated Python solutions for GitHub Copilot, applying rigorous software engineering principles to assess correctness, efficiency, and adherence to best practices in support of reinforcement learning from human feedback (RLHF).",
      "Prototyped automation tools in Python to aggregate, analyze, and visualize evaluation metrics across prompt versions, enabling rapid detection of performance regressions and systematic improvement of code generation quality.",
      "Authored internal documentation and contributed to the creation of a centralized prompt library and evaluation framework, expanding coverage of prompt diversity and failure-case handling.",
      "Developed and optimized Python-based data analysis pipelines, significantly improving Microsoft Copilot's accuracy and reducing hallucinations in multi-step reasoning and task automation scenarios.",
    ],
  },
  {
    role: "Applied Gen AI Engineer",
    company: "Jade Business Services LLC",
    location: "Remote - Frisco, TX",
    period: "April 2025 – Present",
    current: true,
    bullets: [
      "Architected and led Phase 2 transformation of an enterprise Gen AI platform into a scalable, revenue-driving AI ecosystem integrating customer-facing and internal AI agents across web, mobile, and ERP systems.",
      "Built a Master orchestration service (FastAPI) that routes natural language to specialized agents (E-Commerce, Web UI, Staff, Customer), with per-session conversation state, hybrid SQL+RAG answer merging, domain-aware vision pre-processing for images, and guardrails for out-of-scope and low-confidence or empty-SQL outcomes.",
      "Implemented retrieval-augmented generation (RAG) on Google BigQuery using embedding-based vector search, cosine-distance thresholds, optional re-ranking, conversation-aware context, entity-focused chunk filtering, and LLM answers grounded strictly on retrieved chunks to reduce hallucinations.",
      "Built an Agent Builder exposing automated pipelines (GCS ingestion, multi-format parsing—PDF, tabular, images, text—chunking, synthetic augmentation where configured, batch embedding, BigQuery indexing) with job progress via WebSockets and a storage/BigQuery Watchdog that polls cloud state and broadcasts operational events for near-real-time pipeline visibility.",
      "Delivered governed RAG: link/unlink agent builder knowledge agents to orchestrator agents, plus hybrid merge of document answers with SQL/structured agents and image citation support.",
      "Delivered a Conversational E-Commerce Sales Agent integrated into uri.com supporting natural language product discovery, compatibility and substitution logic, upsell recommendations, and dynamic cart redirection.",
      "Built an AI-Assisted CPQ (Configure-Price-Quote) Agent integrating real-time ERP, pricing, and inventory APIs to generate validated configurations and quote packages.",
      "Developed a Multimodal Field Support Agent (text, voice, image) using speech-to-text, Gemini vision for structured extraction from labels and documents, and RAG-backed answers with reference images and signed URL patterns for secure asset delivery.",
      "Architected containerized microservices (FastAPI; Docker/Cloud Run where deployed) with Vertex AI/Gemini and BigQuery, enabling multi-agent routing, real-time API integrations (ERP and related systems), recommendation surfaces, and continuous improvement workflows.",
      "Implemented an end-to-end user feedback and quality analytics stack: thumbs up/down with optional comments persisted to BigQuery, automatic dataset/table provisioning, per-answer query log for coverage versus silent non-feedback, time-windowed feedback reports (totals, satisfaction rate, top topics, downvote samples), and admin CSV/API export for audit and stakeholder review.",
      "Built a Corrections Knowledge Base on top of negative feedback: queue of pending issues from downvotes, CRUD and approval workflow for gold answers, embedding-based retrieval to surface corrections on similar future queries, test endpoints for match quality, and JSONL export plus stats for Gemini/Vertex fine-tuning and supervised improvement loops.",
    ],
  },
  {
    role: "Researcher",
    company: "Arizona State University",
    location: "Tempe, AZ",
    period: "October 2023 – June 2025",
    current: false,
    bullets: [
      "Engineered end-to-end video analytics pipeline for liquid crystal alignment experiments using OpenCV, TensorFlow (MobileNetV2 CNN), PCA, and Hotelling T² control charts for multivariate change-point detection; built ML models (Random Forest) to predict optimal voltage–time parameters and deployed Streamlit inference app for automated feature extraction and reporting.",
      "Performed thermal data analytics for FDM 3D printing using Python (NumPy, Pandas, Matplotlib), generating heatmaps, statistical analysis (mean, median, std, box plots), dimensionality reduction, and feature engineering to study temperature evolution; integrated data transformation, anomaly detection, and visualization for process optimization and experimental validation.",
    ],
  },
  {
    role: "Junior Data Scientist",
    company: "Findability AI Sciences",
    location: "Boston, MA",
    period: "September 2022 – October 2023",
    current: false,
    bullets: [
      "Developed ETL pipeline for web scraping, data cleaning, and summarization, retrieving top news URLs and generating interactive reports using SQL, Python, and BERT-integrated tools, processing 500+ articles weekly with 95% summarization accuracy.",
      "Applied data mining and statistical techniques to digital media data, creating dashboards in Amazon QuickSight for operational insights and performance tracking, with KPIs such as query volume growth (30% MoM) and cost savings (15%).",
    ],
  },
  {
    role: "Researcher",
    company: "Vyoma Linguistic Labs",
    location: "Bengaluru, KA",
    period: "May 2020 – May 2022",
    current: false,
    bullets: [
      "Developed an end-to-end Automatic Speech Recognition (ASR) pipeline converting student slokha audio to text using Wav2Vec2 (self-supervised pretraining + fine-tuning) and Transformer-based architectures for low-resource language modeling.",
      "Leveraged BERT embeddings for semantic post-processing including contextual correction, summarization, and translation to improve transcription accuracy and linguistic coherence.",
      "Designed and deployed a production-ready speech-to-text → translation workflow with REST API integration, automated batch processing, and real-time monitoring to support scalable processing of large audio datasets.",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "Enterprise AI Productivity Insights Platform",
    description:
      "End-to-end AI-powered enterprise analytics on Azure: ingestion, AI inference, and real-time dashboards for employee productivity and project performance.",
    tags: ["Azure", "MLOps", "Generative AI", "FastAPI", "Databricks"],
    highlights: [
      "Designed and deployed an end-to-end AI-powered enterprise analytics platform on Azure, integrating data ingestion pipelines, AI inference, and real-time dashboards for actionable productivity and project insights.",
      "Implemented scalable data engineering pipelines using Azure Data Factory and Azure Databricks for structured and unstructured enterprise data (emails, meetings, tasks, project logs).",
      "Built MLOps pipelines with Azure ML for automated model training, versioning, deployment, and monitoring—including task prioritization and automated report generation.",
      "Developed AI inference microservices using Azure Functions + FastAPI for real-time predictions and NLP-based summarization of meeting notes, emails, and project reports.",
    ],
  },
  {
    title: "CricAgent AI — Cricket Analytics & NL2SQL Platform",
    description:
      "AI-native cricket intelligence stack: FastAPI + Next.js over BigQuery, NL2SQL, multi-turn chat, intent routing, BQ ML hooks, and AI report studio with PDF export.",
    tags: [
      "FastAPI",
      "Next.js",
      "BigQuery",
      "Gemini",
      "NL2SQL",
      "RAG",
      "WeasyPrint",
    ],
    highlights: [
      "Built an end-to-end stack querying a multi-format Google BigQuery warehouse (IPL/BBL/MLC ball-by-ball, ODI/T20 career tables, Test matches, partnerships, venues).",
      "Implemented natural language to SQL: schema-grounded prompts, Gemini-generated BigQuery Standard SQL, async execution with optional dataset location pinning, and structured narrative answers tied to row previews.",
      "Delivered multi-turn “Data + SQL” chat with transcript-aware SQL generation and answer synthesis; separate pure chat mode over message history.",
      "Shipped an intent-based query router (stat SQL, comparison, prediction narrative, reports, debate settlement, open chat) plus a lightweight RAG path over curated schema and domain snippets.",
      "Integrated BigQuery ML (boosted-tree outcomes, K-Means archetyping, ARIMA-style forecasting hooks) with heuristic SQL analytics and Gemini explanations for prediction UX.",
      "Productized modules as REST APIs and UI flows: dashboards, player profiles, compare (radar + head-to-head), matches/venues, bowling phase views, Test partnerships, debate settler; optional tiers, CORS, API key auth, and rate limiting.",
      "Implemented AI report studio: Gemini-generated scout reports from live stats; WeasyPrint Markdown → HTML → PDF with shared export patterns across reports, predictions, compare, and query threads.",
    ],
  },
];

export interface Publication {
  title: string;
  venue: string;
  year: number;
  description: string;
}

export const publications: Publication[] = [
  {
    title:
      "A Physical Comprehensive Model for Studying Temperature Evolution in FDM 3D Printing",
    venue: "ASME MSEC 2024",
    year: 2024,
    description:
      "Presented novel statistical methods to model thermal distributions and predict material behavior during printing.",
  },
  {
    title:
      "Enhancing polymer composite performance through optimized alignment with machine learning and in-situ monitoring in electrically assisted vat photopolymerization",
    venue: "Composites Science and Technology",
    year: 2024,
    description:
      "Research on optimizing polymer composite alignment using ML and in-situ monitoring in advanced manufacturing.",
  },
];

export const education = {
  degree: "M.S. in Robotics and Artificial Intelligence",
  university: "Arizona State University",
  location: "Tempe, AZ",
  period: "August 2022 – May 2024",
  gpa: "3.53",
};
