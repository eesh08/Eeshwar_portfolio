// Portfolio Data - Eeshwar's Data Analytics Engineer Portfolio

export const personalInfo = {
  name: "Eeshwar",
  role: "Data Analytics Engineer",
  tagline: "Turning Data into Actionable Insights",
  description: "Entry-level Data Analytics Engineer and Computer Science graduate with hands-on experience building end-to-end data solutions using Python and SQL. Completed Microsoft Fabric Analytics Engineer (DP-600) with practical exposure to data pipelines, lakehouse, dataflows, and warehousing, along with full-stack Python application development and Git/GitHub collaboration. Adaptable, quick-learning, and comfortable across analytics, data engineering, and development roles, with strong problem-solving and communication skills.",
  email: "eeshwar080803@gmail.com",
  linkedin: "https://www.linkedin.com/in/saieeshwar",
  github: "https://github.com/eesh08",
  location: "India",
};

export const projects = [
  {
    id: "growgreen",
    title: "GrowGreen",
    subtitle: "Major Project - Full Stack E-Commerce Platform",
    shortDescription: "A farm-to-consumer e-commerce platform connecting farmers directly with buyers through location-based matching and intelligent recommendations.",
    fullDescription: `GrowGreen is a comprehensive e-commerce web application built with Python Django and SQL that revolutionizes the agricultural supply chain by eliminating middlemen and connecting farmers directly with consumers. The platform leverages geolocation technology to match nearby farmers with consumers, ensuring fresh produce delivery while supporting local agriculture.`,
    problemStatement: "Farmers lose significant profit margins due to multiple intermediaries in the supply chain, while consumers pay premium prices for produce that may not be fresh. The lack of direct connection between producers and buyers results in inefficient distribution, food waste, and reduced farmer income.",
    solution: "Developed a full-stack Django web application with role-based access control (Admin, Farmer, Consumer) that enables farmers to list fresh produce directly to nearby consumers. The platform uses geographic proximity matching to minimize delivery time, implements intelligent product recommendations based on purchase history, and provides real-time delivery estimates to enhance user experience.",
    techStack: ["Python", "Django", "SQL", "HTML/CSS", "JavaScript", "Geolocation API", "RESTful API"],
    keyFeatures: [
      "Geographic location-based farmer-consumer matching algorithm for optimal delivery routes and reduced transit time",
      "Role-based authentication system with three user types: Admin, Farmer, and Consumer with distinct dashboards",
      "Intelligent recommendation engine that analyzes purchase history and suggests frequently bought products to consumers",
      "Real-time inventory management where farmers can add, update, and manage fresh produce listings with availability status",
      "Dynamic delivery time estimation based on distance calculation between farmer location and consumer address",
      "Automated order management system with status tracking from placement to delivery",
      "Consumer purchase history and personalized product recommendations for repeat purchases",
      "Admin dashboard for monitoring platform activity, user management, and transaction oversight",
      "Secure payment integration and order confirmation system",
      "Mobile-responsive design for accessibility across devices",
    ],
    outcomes: [
      "Successfully eliminated intermediary costs, enabling farmers to earn higher margins while consumers access fresh produce at competitive prices",
      "Implemented location-aware matching that reduces average delivery time by connecting consumers with nearest available farmers",
      "Built a scalable recommendation system that increases repeat purchase rates through personalized product suggestions",
      "Created an intuitive multi-role platform serving distinct needs of admins, farmers, and consumers through specialized interfaces",
    ],
    images: ["/images/growgreen-preview.jpeg"],
    documents: [],
    github: "https://github.com/eesh08/growgreen",
    liveDemo: null,
    duration: "6 months",
    role: "Full Stack Developer",
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
    images: ["/images/analytics-dashboard-preview.jpeg"],
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
    items: ["Power BI", "Tableau", "DAX", "Data Modeling", "Statistical Analysis", ],
  },
  engineering: {
    title: "Data Engineering",
    items: ["ETL/ELT", "Data Pipelines", "Snowflake Schemas", "Warehousing","Dataflows Gen2" ],
  },
  programming: {
    title: "Programming",
    items: ["Python", "SQL", "Javascript", "OOPs Concepts"],
  },
  tools: {
    title: "Tools & Platforms",
    items: ["Azure", "Git", "Jupyter", "Microsoft Fabric", "VS Code"],
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
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
