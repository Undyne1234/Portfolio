import { Award, GraduationCap, Gamepad2 } from "lucide-react";

export const PROFILE = {
  name: "Wesley — Software Engineer",
  title: "Software Engineering Student @ HZ | Full-stack tinkerer",
  blurb:
    "Tech-obsessed problem solver with a tail for detail. I build clean APIs, data-driven dashboards, and playful interfaces. Pack-friendly, test-driven, and always learning.",
  location: "West-Souburg, NL",
  email: "wesley06@zeelandnet.nl",
  phone: "0611309941",
  cvUrl: "/cv/Undyne_CV.pdf",
};

export const LINKS = {
  github: "https://github.com/Undyne1234",
  linkedin: "https://www.linkedin.com/in/wesley-de-ruiter-8291a3346/",
};

export const SKILLS: Record<string, string[]> = {
  Languages: ["JavaScript/TypeScript", "Python", "Java", "SQL"],
  "Frameworks & Tools": ["Svelte", "React", "Node.js", "Express", "Tailwind", "Laravel"],
  Data: ["Pandas", "scikit-learn", "Time-series", "Azure Blob", "Image recognition"],
  DevOps: ["Docker", "Swagger/OpenAPI", "CI/CD basics"],
};

export const ACHIEVEMENTS = [
  {
    icon: Award,
    title: "MuseTrail: carbon-smart app",
    desc:
      "Microservice architecture (Gateway + services), gamified challenges, and stats. Led API design & MySQL schema.",
  },
  {
    icon: GraduationCap,
    title: "Cloud research (Azure Fibonacci)",
    desc:
      "Benchmarked algorithms, built Azure Functions + Blob storage, wrote reproducible docs & diagrams.",
  },
  {
    icon: Gamepad2,
    title: "Dungeon Chronicles (RPG)",
    desc:
      "Java project showcasing design patterns (Factory, Builder, Strategy, State) with ASCII UI flair.",
  },
  {
    icon: Award,
    title: "HZ Hackathon — WeatherVIS (2025)",
    desc:
      "Built a weather-visualization dashboard (WeatherVIS) in 24h with a small pack. I owned backend/API wiring and data shaping; shipped a demo from the repo.",
  },
  {
    icon: GraduationCap,
    title: "HZ DataFest — Digital History & Data Science (2025)",
    desc:
      "Presented how to preserve history digitally and apply data-science workflows (ingest, clean, analyze, visualize) to surface patterns and context over time.",
  },
];

export const PROJECTS = [
  {
    name: "MuseTrail",
    tags: ["Svelte", "Node", "MySQL", "Docker"],
    blurb:
      "Web app that gamifies shrinking your digital footprint. Built microservices (Educational, Users, Gallery, Stats).",
    links: [{ label: "Code", href: "https://github.com/orgs/Byte-2-Green/repositories" }],
  },
  {
    name: "WWTP Predictive Analytics",
    tags: ["Python", "Time-series", "sklearn"],
    blurb:
      "Merged KNMI weather + plant sensors, engineered features, and trained Random Forests to predict nitrate levels.",
    links: [{ label: "Code", href: "" }],
  },
  {
    name: "Azure Fibonacci",
    tags: ["Azure Functions", "Node", "Blob"],
    blurb:
      "Serverless API comparing iterative vs DP approaches with persisted results and monitoring.",
    links: [{ label: "Code", href: "https://github.com/Undyne1234/Fibinacci" }],
  },
  {
    name: "Dungeon Chronicles",
    tags: ["Java", "Design Patterns"],
    blurb:
      "Text-based RPG with clean package structure and extensible combat AI.",
    links: [{ label: "Code", href: "https://github.com/Undyne1234/ShadowsOfFate" }],
  },
  {
    name: "WeatherVIS (Hackathon)",
    tags: ["Hackathon", "Frontend", "Data Viz"],
    blurb:
      "24h sprint: collaborative weather-visualization dashboard. I handled API integration and data shaping for charts.",
    links: [{ label: "Repo", href: "https://github.com/itsMiniscule/WeatherVIS" }],
  },
  {
    name: "DataFest — Digital History",
    tags: ["Data Science", "Image recognition", "Visualization"],
    blurb:
      "Explored preserving history digitally and using data science to reveal trends across time.",
    links: [],
  },
];

// ---- CV DATA (coded & printable) --------------------------------------------
export const CV = {
  summary:
    "Curious software engineer focused on reliable backends, tidy UIs, and data-driven decisions. Experience with microservices (Node/Express), cloud (Azure Functions, Blob), and ML pipelines (Python/sklearn).",
  experience: [
    {
      role: "Full-stack Student Developer (Project)",
      org: "Byte-2-Green (HZ)",
      period: "2024–2025",
      bullets: [
        "Designed API-Gateway + service contracts; documented with Swagger/OpenAPI.",
        "Built Educational, Users, Gallery, and Stats services with MySQL + Docker Compose.",
        "Implemented challenges, leaderboard, and CO₂ impact stats; improved TTFB by 35% via caching.",
      ],
    },
    {
      role: "Cloud Researcher (Azure)",
      org: "Fibonacci Benchmark",
      period: "2024",
      bullets: [
        "Compared iterative vs DP; deployed Azure Function; persisted results to Blob Storage.",
        "Wrote reproducible docs; monitored performance; set input validation (n ≤ 1476).",
      ],
    },
    {
      role: "Data Science (WWTP)",
      org: "Predictive Nitrate",
      period: "2024",
      bullets: [
        "Merged KNMI weather with plant sensors; engineered time-lag features; trained Random Forests.",
        "Delivered notebooks with visual QA (correlations, residuals) and model evaluation.",
      ],
    },
    {
      role: "Hackathon Backend & Data Lead",
      org: "HZ Hackathon — WeatherVIS",
      period: "2024",
      bullets: [
        "Integrated weather APIs and normalized responses for chart-ready datasets under 24h constraints.",
        "Shipped a working demo from the repo and co-presented architecture, assumptions, and next steps.",
      ],
    },
    {
      role: "Presenter — Digital History & Data Science",
      org: "HZ DataFest",
      period: "2025",
      bullets: [
        "Outlined an end-to-end pipeline to preserve historical data (ingest, cleaning, metadata, analysis, viz).",
        "Demonstrated how feature engineering & visualization uncover temporal patterns and context.",
      ],
    },
  ],
  education: [
    {
      degree: "BSc Software Engineering (ongoing)",
      school: "HZ University of Applied Sciences",
      period: "2023–present",
    },
  ],
  skills: [
    "JavaScript/TypeScript, Node, Express, React/Svelte, Tailwind",
    "Python, Pandas, scikit-learn, time-series, Image recognition",
    "MySQL, Docker, Swagger/OpenAPI",
    "Azure Functions, Blob Storage",
  ],
  links: [
    { label: "GitHub", value: "github.com/Undyne1234" },
    { label: "LinkedIn", value: "https://www.linkedin.com/in/wesley-de-ruiter-8291a3346/" },
  ],
};