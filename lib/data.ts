// Portfolio Data - Eeshwar's Data Analytics Engineer Portfolio

export const personalInfo = {
  name: "Eeshwar",
  role: "Data Analytics Engineer",
  tagline: "Turning Data into Actionable Insights",
  description: "Entry-level Data Analytics Engineer with hands-on experience in building data-driven solutions, creating interactive dashboards, and leveraging modern analytics tools to drive business decisions.",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
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
    shortDescription: "Interactive business intelligence dashboard providing comprehensive data visualization and insights.",
    fullDescription: `A sophisticated data analytics dashboard built to transform raw business data into meaningful visualizations and actionable insights. The dashboard provides real-time monitoring, trend analysis, and KPI tracking for business stakeholders.`,
    problemStatement: "Organizations struggle to consolidate data from multiple sources and present it in a way that enables quick decision-making.",
    solution: "Created an interactive dashboard that aggregates data from multiple sources and presents it through intuitive visualizations with drill-down capabilities.",
    techStack: ["Power BI", "SQL Server", "Python", "DAX", "Excel", "Azure Data Factory"],
    keyFeatures: [
      "Multi-source data integration",
      "Interactive visualizations with filters",
      "Automated data refresh schedules",
      "Custom KPI tracking",
      "Export and sharing capabilities",
    ],
    outcomes: [
      "Reduced reporting time by 60%",
      "Enabled real-time business monitoring",
      "Improved data accessibility across teams",
    ],
    images: [],
    documents: [],
    github: "https://github.com/eesh08/analytics-dashboard",
    liveDemo: null,
    duration: "3 months",
    role: "Data Analytics Developer",
  },
];

export const internships = [
  {
    id: "stride-future",
    company: "Stride Future",
    role: "Data Analytics Intern",
    location: "Bangalore, India",
    duration: "Duration here", // Update with actual duration
    period: "Month Year - Month Year", // Update with actual period
    description: "Worked on data analytics projects involving data collection, cleaning, analysis, and visualization to support business decision-making processes.",
    responsibilities: [
      "Analyzed large datasets to identify trends and patterns",
      "Created interactive dashboards and reports",
      "Collaborated with cross-functional teams",
      "Presented insights to stakeholders",
    ],
    skills: ["Python", "SQL", "Power BI", "Excel", "Data Cleaning"],
    certificate: null, // Path to certificate image/PDF
    logo: null, // Company logo
  },
  {
    id: "internship-2",
    company: "Company Name", // Update with actual company
    role: "Role Title", // Update with actual role
    location: "Location",
    duration: "Duration",
    period: "Month Year - Month Year",
    description: "Description of your role and contributions.",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      "Responsibility 3",
    ],
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    certificate: null,
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
