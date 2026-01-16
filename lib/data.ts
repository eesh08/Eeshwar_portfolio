// Portfolio Data - Eeshwar's Data Analytics Engineer Portfolio

export const personalInfo = {
  name: "Eeshwar",
  role: "Data Analytics Engineer",
  tagline: "Turning Data into Actionable Insights",
  description: "Entry-level Data Analytics Engineer with hands-on experience in building data-driven solutions, creating interactive dashboards, and leveraging modern analytics tools to drive business decisions.",
  email: "eeshwar080803@gmail.com",
  linkedin: "https://www.linkedin.com/in/saieeshwar",
  github: "https://github.com/eesh08",
  location: "India",
};

export const projects = [
  {
    id: "growgreen",
    title: "GrowGreen",
    subtitle: "Major Project",
    shortDescription: "An innovative agricultural technology solution leveraging data analytics for sustainable farming practices.",
    fullDescription: `GrowGreen is a comprehensive agricultural technology platform designed to help farmers make data-driven decisions for sustainable and profitable farming. The project combines IoT sensor data, weather analytics, and machine learning to provide actionable insights.`,
    problemStatement: "Farmers often lack access to real-time data and insights that could help them optimize crop yields, reduce water usage, and make informed decisions about planting and harvesting.",
    solution: "Developed an end-to-end data analytics solution that collects, processes, and visualizes agricultural data to provide farmers with actionable recommendations.",
    techStack: ["Python", "Power BI", "SQL", "Azure", "Machine Learning", "IoT"],
    keyFeatures: [
      "Real-time crop monitoring dashboard",
      "Predictive analytics for yield forecasting",
      "Water usage optimization recommendations",
      "Weather pattern analysis and alerts",
      "Historical data trend analysis",
    ],
    outcomes: [
      "Improved crop yield predictions by 25%",
      "Reduced water consumption recommendations",
      "User-friendly dashboard for non-technical users",
    ],
    images: [], // Will be populated with actual images
    documents: [], // PDFs, reports, etc.
    github: "https://github.com/eesh08/growgreen",
    liveDemo: null,
    duration: "6 months",
    role: "Lead Data Analyst",
  },
  {
    id: "analytics-dashboard",
    title: "Data Analytics Dashboard",
    subtitle: "Analytics Project",
    shortDescription: "End-to-end data pipeline with interactive dashboards for KPI tracking and data-driven decision-making.",
    fullDescription: `Built an end-to-end data pipeline using Python and SQL to ingest, clean, and transform raw KPI data into analytics-ready datasets. Designed interactive dashboards to track key performance metrics, trends, and variances, enabling data-driven decision-making across the organization.`,
    problemStatement: "Organizations need a reliable system to process raw KPI data and visualize key metrics for timely business decisions.",
    solution: "Developed a complete data pipeline with Python and SQL for data processing, combined with interactive dashboards that track performance metrics, trends, and variances in real-time.",
    techStack: ["Python", "SQL", "Power BI", "DAX", "Excel", "Data Validation"],
    keyFeatures: [
      "End-to-end data pipeline for ingestion and transformation",
      "Interactive dashboards tracking KPIs and trends",
      "Data validation and aggregation logic",
      "Variance analysis across time periods",
      "Reliable reporting with accuracy checks",
    ],
    outcomes: [
      "Ensured data accuracy and consistency across reporting",
      "Enabled data-driven decision-making through visualization",
      "Implemented reliable data validation and aggregation",
    ],
    images: [],
    documents: [],
    github: null,
    liveDemo: "https://www.linkedin.com/posts/saieeshwar_sales-force-effectiveness-dashboard-fy2025-activity-7400055820333436928-exPT?utm_source=share&utm_medium=member_desktop",
    duration: "3 months",
    role: "Data Analytics Developer",
  },
];

export const internships = [
  {
    id: "stride-future",
    company: "Stride Future",
    role: "Project Intern — Data Engineering & Testing",
    location: "Bangalore, India",
    duration: "3 months",
    period: "2024",
    description: "Built and validated data processing workflows using Python and SQL, ensuring accurate data ingestion, transformation, and storage.",
    responsibilities: [
      "Built and validated data processing workflows using Python and SQL",
      "Performed data quality checks and backend testing, identifying inconsistencies and edge cases",
      "Debugged data and application issues to improve reliability",
      "Collaborated with the team to deliver stable, production-ready outputs",
    ],
    skills: ["Python", "SQL", "Data Engineering", "Data Quality", "Backend Testing", "Debugging"],
    certificate: "/certificates/stride-future-certificate.pdf",
    logo: null,
  },
  {
    id: "aicte",
    company: "AICTE",
    role: "Project Intern — Machine Learning & Data Engineering",
    location: "India",
    duration: "3 months",
    period: "2024",
    description: "Developed a resume screening system using Python and machine learning techniques to analyze and rank candidate profiles.",
    responsibilities: [
      "Developed a resume screening system using Python and ML techniques",
      "Designed data preprocessing and feature extraction pipelines",
      "Integrated ML outputs with SQL-based data storage",
      "Validated results to ensure consistency and correctness",
    ],
    skills: ["Python", "Machine Learning", "SQL", "Data Preprocessing", "Feature Engineering", "NLP"],
    certificate: "/certificates/aicte-certificate.pdf",
    logo: null,
  },
];

export const certifications = [
  {
    id: "dp-600",
    name: "Microsoft Certified: Fabric Analytics Engineer Associate",
    issuer: "Microsoft",
    credentialId: "DP-600",
    issueDate: "Date", // Update with actual date
    expiryDate: null,
    description: "Validates expertise in implementing and managing enterprise-scale analytics solutions using Microsoft Fabric, including data ingestion, transformation, and semantic modeling.",
    skills: [
      "Microsoft Fabric",
      "Data Engineering",
      "Semantic Modeling",
      "Data Transformation",
      "Lakehouse Architecture",
    ],
    verificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/fabric-analytics-engineer-associate/",
    badgeImage: "/images/certifications/dp-600-badge.png", // Update with actual path
    certificateImage: null, // Path to certificate image
  },
];

export const skills = {
  analytics: {
    title: "Data Analytics",
    items: ["Power BI", "Tableau", "DAX", "Data Modeling", "Statistical Analysis", "Data Visualization"],
  },
  engineering: {
    title: "Data Engineering",
    items: ["ETL/ELT", "Data Pipelines", "SQL", "Data Warehousing", "Microsoft Fabric"],
  },
  programming: {
    title: "Programming",
    items: ["Python", "SQL", "R", "Excel VBA"],
  },
  tools: {
    title: "Tools & Platforms",
    items: ["Azure", "Git", "Jupyter", "VS Code", "Excel"],
  },
};

export const education = {
  degree: "Your Degree",
  field: "Your Field of Study",
  institution: "Your Institution",
  year: "Year",
  achievements: [],
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
