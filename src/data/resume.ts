export const personalInfo = {
  name: "Srikar Anudeep Remani",
  title: "Generative AI Engineer & AI Coding Analyst",
  email: "srikar1506@gmail.com",
  phone: "512-202-9957",
  location: "Austin, TX",
  image: "/srikar.jpeg",
  resume: "/Srikar.pdf",
  socials: {
    github: "https://github.com/srikar1506",
    linkedin: "https://linkedin.com/in/srikaranudeepremani",
    streamlit: "https://share.streamlit.io/",
  },
  tagline:
    "Building enterprise-grade AI systems with LLMs, RAG, and multi-agent orchestration that drive real-world impact.",
  certifications: ["Certified Google Gen AI Leader"],
};

export const summary =
  "Generative AI Engineer and AI Coding Analyst with experience building enterprise-grade, production-scale AI systems. Specialized in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), multi-agent orchestration, and multimodal AI integrated with real-time ERP and cloud ecosystems. Proven track record of designing scalable microservices architectures, automated data pipelines, evaluation frameworks, and governance dashboards that improve model accuracy, reduce hallucinations, and drive measurable revenue and operational impact.";

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
    category: "Machine Learning & AI",
    icon: "brain",
    skills: [
      { name: "Supervised Learning" },
      { name: "Unsupervised Learning" },
      { name: "Ensemble Methods" },
      { name: "Feature Engineering" },
      { name: "RAG" },
      { name: "Prompt Engineering" },
      { name: "Model Evaluation" },
      { name: "Cross-Validation" },
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
      { name: "Advanced Excel" },
      { name: "Statistical Modeling" },
      { name: "Data Mining" },
      { name: "Anomaly Detection" },
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
      { name: "Pydantic" },
      { name: "FastAPI" },
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
      { name: "GCP Vertex AI" },
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
    role: "AI Coding Analyst",
    company: "Microsoft",
    location: "Redmond, WA",
    period: "November 2025 – Present",
    current: true,
    bullets: [
      "Developing and optimizing Python-based data analysis pipelines to enhance Microsoft Copilot's accuracy and efficiency in automating developer and productivity workflows.",
      "Collaborating cross-functionally with engineering and data science teams to diagnose and resolve multi-step reasoning and iteration issues, significantly reducing LLM hallucinations and response inaccuracies.",
      "Providing structured evaluation feedback and technical insights to AI development teams, driving measurable improvements in system reliability, response quality, and processing efficiency.",
      "Partnered with research teams to evaluate and benchmark prompt engineering strategies for LLM-based code generation, improving output consistency and contextual understanding.",
      "Prototyped automated Python-based evaluation frameworks to aggregate, analyze, and visualize model performance metrics, enabling early detection of regressions and edge-case failures.",
    ],
  },
  {
    role: "Gen AI Developer",
    company: "Jade Business Services",
    location: "Remote - Frisco, TX",
    period: "April 2025 – Present",
    current: true,
    bullets: [
      "Architected Phase 2 transformation of an enterprise Gen AI platform into a scalable, revenue-driving AI ecosystem integrating customer-facing and internal AI agents across web, mobile, and ERP systems.",
      "Designed and deployed a Unified Admin Dashboard with real-time data source analytics, file-delta integrity monitoring, pipeline health tracking, governance KPIs, and audit trails.",
      "Built a No-Code Dynamic Use-Case Builder triggering automated RAG pipelines for scalable self-service AI agent creation.",
      "Delivered a Conversational E-Commerce Sales Agent for natural language product discovery, compatibility checks, upsell recommendations, and dynamic cart redirection.",
      "Built an AI-Assisted CPQ Agent integrating real-time ERP, pricing, and inventory APIs to generate validated, error-free system configurations.",
      "Developed a Multimodal Field Support Agent leveraging Computer Vision, speech recognition, and enhanced RAG for equipment identification and troubleshooting.",
      "Architected a Master Orchestration Agent and containerized microservices framework (FastAPI, Docker, Cloud Run, Vertex AI, BigQuery) enabling multi-agent routing and continuous learning loops.",
    ],
  },
  {
    role: "Researcher",
    company: "Arizona State University",
    location: "Tempe, AZ",
    period: "October 2023 – June 2025",
    current: false,
    bullets: [
      "Engineered end-to-end video analytics pipeline for liquid crystal alignment experiments using OpenCV, TensorFlow (MobileNetV2 CNN), PCA, and Hotelling T² control charts for multivariate change-point detection.",
      "Built ML models (Random Forest) to predict optimal voltage-time parameters and deployed Streamlit inference app for automated feature extraction and reporting.",
      "Performed thermal data analytics for FDM 3D printing using Python, generating heatmaps, statistical analysis, dimensionality reduction, and feature engineering for process optimization.",
    ],
  },
  {
    role: "Junior Data Scientist",
    company: "Findability AI Sciences",
    location: "Boston, MA",
    period: "September 2023 – October 2023",
    current: false,
    bullets: [
      "Developed ETL pipeline for web scraping, data cleaning, and summarization, processing 500+ articles weekly with 95% summarization accuracy.",
      "Applied data mining and statistical techniques to digital media data, creating dashboards in Amazon QuickSight with KPIs such as 30% MoM query volume growth and 15% cost savings.",
    ],
  },
  {
    role: "Researcher",
    company: "Vyoma Linguistic Labs",
    location: "Bengaluru, KA",
    period: "May 2020 – May 2022",
    current: false,
    bullets: [
      "Developed an end-to-end ASR pipeline converting student slokha audio to text using Wav2Vec2 and Transformer-based architectures for low-resource language modeling.",
      "Leveraged BERT embeddings for semantic post-processing including contextual correction, summarization, and translation.",
      "Designed and deployed a production-ready speech-to-text → translation workflow with REST API integration and automated batch processing.",
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
      "End-to-end AI-powered enterprise analytics platform on Azure, integrating data ingestion pipelines, AI inference, and real-time dashboards for employee productivity and project performance insights.",
    tags: ["Azure", "MLOps", "Generative AI", "FastAPI", "Databricks"],
    highlights: [
      "Scalable data engineering pipelines using Azure Data Factory and Databricks",
      "MLOps pipelines with Azure ML for automated model training and deployment",
      "AI inference microservices for real-time NLP summarization",
    ],
  },
  {
    title: "Conversational E-Commerce Sales Agent",
    description:
      "AI-powered conversational agent integrated into e-commerce platforms supporting natural language product discovery, compatibility checks, upsell recommendations, and dynamic cart redirection.",
    tags: ["LangChain", "RAG", "FastAPI", "GCP", "BigQuery"],
    highlights: [
      "Natural language product search and discovery",
      "Real-time compatibility and upsell recommendation engine",
      "Seamless cart integration with dynamic redirection",
    ],
  },
  {
    title: "Multimodal Field Support Agent",
    description:
      "Advanced field support agent leveraging text, voice, and image inputs with Computer Vision and speech recognition for equipment identification and contextual troubleshooting.",
    tags: ["Computer Vision", "Speech Recognition", "RAG", "Vertex AI"],
    highlights: [
      "Multi-input support: text, voice, and image processing",
      "Equipment identification via Computer Vision",
      "Context-aware troubleshooting with enhanced RAG",
    ],
  },
  {
    title: "Video Analytics Pipeline for Liquid Crystal Alignment",
    description:
      "End-to-end video analytics pipeline using OpenCV, TensorFlow MobileNetV2, PCA, and Hotelling T² control charts for multivariate change-point detection in liquid crystal experiments.",
    tags: ["OpenCV", "TensorFlow", "PCA", "Streamlit", "Random Forest"],
    highlights: [
      "MobileNetV2 CNN for visual feature extraction",
      "Statistical process control with Hotelling T² charts",
      "Streamlit inference app for automated reporting",
    ],
  },
  {
    title: "Sanskrit ASR Pipeline",
    description:
      "Automatic Speech Recognition pipeline converting student slokha audio to text using Wav2Vec2 self-supervised pretraining and Transformer-based architectures for low-resource Sanskrit language modeling.",
    tags: ["Wav2Vec2", "BERT", "Transformers", "NLP", "REST API"],
    highlights: [
      "Self-supervised pretraining with fine-tuning for low-resource languages",
      "BERT-based semantic post-processing for accuracy improvement",
      "Production REST API with batch processing",
    ],
  },
  {
    title: "Unified Admin Dashboard & Command Center",
    description:
      "Real-time governance dashboard with data source analytics, file-delta integrity monitoring (GCS ↔ BigQuery), pipeline health tracking, KPIs, and audit trails for enterprise AI operations.",
    tags: ["GCP", "BigQuery", "Cloud Storage", "Pub/Sub", "Streamlit"],
    highlights: [
      "Real-time pipeline health monitoring and alerting",
      "File-delta integrity checks between GCS and BigQuery",
      "Comprehensive audit trail and governance KPIs",
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
      "Presented novel statistical methods to model thermal distributions and predict material behavior during 3D printing processes.",
  },
  {
    title:
      "Enhancing polymer composite performance through optimized alignment with machine learning and in-situ monitoring in electrically assisted vat photopolymerization",
    venue: "Composites Science and Technology",
    year: 2024,
    description:
      "Research on optimizing polymer composite alignment using ML models and real-time monitoring in advanced manufacturing.",
  },
];

export const education = {
  degree: "M.S. in Robotics and Artificial Intelligence",
  university: "Arizona State University",
  location: "Tempe, AZ",
  period: "August 2022 – May 2024",
  gpa: "3.53",
};
