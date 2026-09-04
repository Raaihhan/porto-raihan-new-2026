export interface NavigationItem {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  shortName: string;
  role: string;
  location: string;
  period: string;
  summary: readonly string[];
}

export interface ProjectItem {
  title: string;
  role: string;
  period: string;
  summary: readonly string[];
  technologies: readonly string[];
}

export const navigation: readonly NavigationItem[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Proyek", href: "#proyek" },
  { label: "Pendidikan", href: "#pendidikan" },
  { label: "Kontak", href: "#kontak" },
];

export const portfolioData = {
  name: "Muhammad Raihan Nur Rizqi Amin",
  shortName: "Muhammad Raihan",
  title: "Backend Developer",
  contact: {
    email: "raihanamin2212@gmail.com",
    phone: "+62 812 8469 7557",
    phoneHref: "tel:+6281284697557",
    linkedin: "https://linkedin.com/in/muhammadraihandev/",
    cv: "/cv/muhammad-raihan-cv.pdf",
  },
  skills: [
    "Golang",
    "Gin",
    "gRPC",
    "REST API",
    "Protobuf",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Microservices",
    "OpenShift",
    "Jaeger",
    "Unit Testing",
    "Java",
    "Teamwork",
  ],
  experiences: [
    {
      company: "Bank Rakyat Indonesia (BRI)",
      shortName: "BRI",
      role: "Associate IT - Project Officer 3 Level 6",
      location: "Jakarta",
      period: "Dec 2025 – Present",
      summary: [
        "Supported internal banking initiatives by analyzing business flows, operational needs, and end-to-end transaction processes.",
        "Translated business requirements into functional specifications, process flows, system references, and implementation notes.",
        "Reviewed teller, branch cash, vault, approval, monitoring, reporting, and service integration flows.",
        "Coordinated with business users, QA, frontend, backend, and cross-functional teams across delivery and issue resolution.",
        "Assisted SIT/UAT and release analysis by validating results, reviewing logs, mappings, configuration, and integration behavior.",
        "Prepared flow analysis, test evidence, issue summaries, implementation notes, and operational handover materials.",
      ],
    },
    {
      company: "PT Steradian Data Optima",
      shortName: "Steradian",
      role: "Backend Developer",
      location: "Jakarta",
      period: "Feb 2025 – Dec 2025",
      summary: [
        "Developed enterprise banking backend services with Golang, gRPC, REST APIs, Protobuf, and modular service architecture.",
        "Implemented transaction features, service integrations, data processing, validation flows, and error mapping.",
        "Used Redis caching, Go cron background jobs, PostgreSQL, and MySQL for operational service needs.",
        "Improved reliability through structured logging, Jaeger tracing, timeout handling, and standardized error management.",
        "Refactored legacy modules and developed tests with GoConvey, Testify, and sqlmock.",
        "Supported SIT/UAT, debugging, deployment checks, and OpenShift configuration troubleshooting.",
      ],
    },
  ] satisfies readonly ExperienceItem[],
  education: {
    institution: "Universitas Negeri Semarang",
    location: "Semarang",
    period: "Sep 2020 – Aug 2024",
    degree: "Bachelor of Computer Science, Informatics Engineering",
    gpa: "GPA 3.70 / 4.00",
    honor: "Cumlaude",
  },
  certification: {
    issuer: "Udemy",
    name: "Pemrograman Go-Lang",
    period: "Sep 2024",
  },
  projects: [
    {
      title: "SMS (System Management School)",
      role: "Mobile Application Developer",
      period: "Mar 2025 – Dec 2025",
      summary: [
        "Developed RESTful and gRPC APIs using Golang for academic and administrative management.",
        "Implemented JWT-based authentication, role-based access control, and PostgreSQL database design.",
        "Optimized performance using Redis caching and Dockerized services for deployment readiness.",
      ],
      technologies: ["Golang", "gRPC", "PostgreSQL", "Redis", "Docker"],
    },
    {
      title: "EDC Bank",
      role: "Mobile Application Developer",
      period: "Oct 2024 – Feb 2025",
      summary: [
        "Developed an EDC application using Java for secure and efficient payment processing.",
        "Integrated payment gateway APIs for credit-card and debit-card transactions.",
        "Built a backend for transaction data and real-time processing with a focus on system reliability.",
      ],
      technologies: ["Java", "Payment Gateway", "Real-time Processing"],
    },
  ] satisfies readonly ProjectItem[],
} as const;
