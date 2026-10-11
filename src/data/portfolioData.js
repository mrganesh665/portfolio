// ─────────────────────────────────────────────────────────────
// Portfolio Data for Ganesh Chaurasiya
// ─────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Ganesh",
  fullName: "Ganesh Chaurasiya",
  initials: "GC",
  avatar: "/Ganesh_Photo.jpg",
  role: "Software Developer & Full Stack Engineer",
  roles: [
    "Software Developer",
    "Full Stack Developer",
    "MERN Stack Engineer",
    "Backend Developer",
    "React Developer",
    "Node.js Developer",
  ],
  experience: "2+ Years",
  location: "Gorakhpur, Uttar Pradesh, India",
  email: "mrganesh665@gmail.com",
  phone: "+91 9005049163",
  availability: "Open to Work",
  resumeLink: "/Ganesh_Resume.pdf",
  shortBio:
    "Software Developer with 2+ years of experience building scalable, production-ready web and mobile applications using React.js, Redux, TypeScript, Node.js, and GenAI. Passionate about component-driven design, secure RESTful backends, and responsive UIs.",
  bio: [
    "I'm a Software Developer with experience building scalable, production-ready web and mobile applications adhering to modern frontend best practices and component-driven design.",
    "My backend expertise includes building robust RESTful services using Node.js and Express, managing data persistence with MongoDB and MySQL, and securing applications with Helmet.js, rate limiting, and express-validator.",
    "I also design intelligent GenAI applications using LangChain, ChromaDB, and OpenAI LLMs for semantic search and Retrieval-Augmented Generation (RAG), as well as mobile applications with React Native.",
  ],
  education: [
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      score: "CGPA: 7.6",
      institute: "Punjab Technical University",
      location: "Jalandhar, India",
      year: "July 2020 – April 2024",
    },
    {
      degree: "Intermediate (CBSE)",
      score: "CGPA: 7.8",
      institute: "Don Bosco Sr. Sec. School",
      location: "Gorakhpur, India",
      year: "July 2018 – April 2019",
    },
  ],
};

export const socialLinks = {
  github: "https://github.com/mrganesh665",
  linkedin: "https://www.linkedin.com/in/ganesh-066a76216/",
  leetcode: "https://leetcode.com/u/mrganesh665",
  twitter: "https://x.com/mrganesh665",
};

export const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Delivered", value: 12, suffix: "+" },
  { label: "REST APIs Built", value: 25, suffix: "+" },
  { label: "Placement Events & Hackathons", value: 30, suffix: "+" },
];

export const skillCategories = [
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "React.js", level: 96 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript (ES6+)", level: 94 },
      { name: "Redux / Redux Toolkit", level: 90 },
      { name: "React Native", level: 82 },
      { name: "Next.js", level: 84 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Material UI (MUI)", level: 88 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    title: "Backend & Security",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "RESTful APIs", level: 92 },
      { name: "JWT Authentication & RBAC", level: 92 },
      { name: "Helmet.js & Rate Limiting", level: 86 },
      { name: "Input Validation (express-validator)", level: 88 },
      { name: "Multer & Cloudinary", level: 88 },
      { name: "Twilio Integration", level: 82 },
    ],
  },
  {
    title: "AI & GenAI",
    skills: [
      { name: "RAG Architecture", level: 90 },
      { name: "LangChain", level: 88 },
      { name: "ChromaDB & Vector Search", level: 85 },
      { name: "OpenAI & Claude LLMs", level: 88 },
      { name: "Embeddings & Chunking", level: 86 },
      { name: "Prompt Engineering", level: 90 },
    ],
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB & Mongoose", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "SQL", level: 84 },
      { name: "Redis", level: 78 },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 96 },
      { name: "Postman", level: 90 },
      { name: "Vite", level: 90 },
      { name: "Razorpay Payment Gateway", level: 88 },
    ],
  },
];

export const projectCategories = [
  "All",
  "MERN",
  "AI",
  "Full Stack",
  "React",
  "React Native"
];

export const projects = [
  {
    id: "study-orbit",
    title: "Study Orbit",
    category: ["MERN", "Full Stack"],
    image: "/projects/study-orbit.jpg",
    description:
      "A responsive MERN Ed-Tech web application featuring role-based access control (Student, Instructor, Admin), interactive course dashboards, and course review systems.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "JWT",
      "Toast Notifications",
    ],
    features: [
      "Role-based access control (Student, Instructor, Admin) with interactive dashboards and review systems",
      "Integrated Razorpay payment gateway for course purchases, cart checkout, and automated email receipts",
      "Toast notifications providing real-time feedback during checkout and product actions",
    ],
    github: "https://github.com/mrganesh665/study-orbit",
    live: "https://frontend-study-orbit.vercel.app/",
    caseStudy: "",
  },
  {
    id: "rag-document-retrieval",
    title: "RAG Document Retrieval Q&A System",
    category: ["AI", "Full Stack"],
    image: "/projects/ai-job-hunter.jpg",
    description:
      "A RAG-based application for uploading documents and answering user queries using semantic vector search and grounded context-aware response generation.",
    tech: [
      "LangChain",
      "ChromaDB",
      "OpenAI LLMs",
      "Python",
      "Vector Search",
      "Embeddings",
    ],
    features: [
      "Document chunking, embeddings creation, and semantic similarity search",
      "Context-aware grounded response generation powered by LangChain and OpenAI LLMs",
      "High-performance vector-search pipeline using ChromaDB for sub-second retrieval",
    ],
    github: "https://github.com/mrganesh665/pdf-retriever",
    live: "https://pdf-retriever-i2m42qfugwaxgknbbshpzd.streamlit.app/",
    caseStudy: "",
  },
  {
    id: "easyweds",
    title: "EasyWeds",
    category: ["MERN", "Full Stack"],
    image: "/projects/school-management.jpg",
    description:
      "A comprehensive end-to-end Wedding management platform built with MongoDB, Express.js, React.js, and Node.js with production security hardening and automated communications.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Helmet.js",
      "Multer",
      "Cloudinary",
      "Twilio",
    ],
    features: [
      "Complete wedding event booking, vendor scheduling, and management workflows",
      "Security hardening with Helmet.js, rate limiting, and express-validator input validation",
      "Secure cloud media uploads with Multer & Cloudinary and automated SMS notifications via Twilio",
    ],
    github: "https://github.com/mrganesh665/EasyWeds",
    live: "https://easy-weds.vercel.app/",
    caseStudy: "",
  },
  {
    id: "srl-transport",
    title: "SRL Transport Platform",
    category: ["MERN", "AI"],
    image: "/projects/srl-transport.jpg",
    description:
      "A full-stack logistics and transport platform featuring a customer booking portal, administrative dashboard, and real-time AI customer chatbot with human handoff.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Redux Toolkit",
      "JWT",
      "bcrypt",
      "Socket.IO",
      "Framer Motion",
      "Recharts",
      "AI/LLM",
    ],
    features: [
      "Customer booking and price estimation",
      "Booking and transport tracking",
      "Admin dashboard for bookings, fleet and drivers",
      "Payment management",
      "Role-based protected routes",
      "Real-time AI customer support chatbot",
      "Human handoff when AI cannot resolve a query",
      "Socket.IO real-time two-way communication",
      "Revenue and payment-status analytics",
      "Responsive public website and admin dashboard",
    ],
    github: "https://github.com/mrganesh665/SRL-transport",
    live: "https://srl-transport.vercel.app/",
    caseStudy: "",
  },
  {
    id: "postify",
    title: "Postify",
    category: ["MERN", "React"],
    image: "/projects/smartpost.jpg",
    description:
      "A role-based collaboration platform where admins, teachers, and students manage posts, tasks, assignments, and polls, backed by an analytics dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    features: [
      "Role-based access (admin/teacher/student)",
      "Public & private CRUD views",
      "Analytics & activity dashboard",
    ],
    github: "https://github.com/mrganesh665/Postify",
    live: "https://postify-tx6o.vercel.app/",
    caseStudy: "",
  },
  {
    id: "blog-x",
    title: "Blog-X Publishing App",
    category: ["React"],
    image: "/projects/blog-x.jpg",
    description:
      "A responsive modern blogging web application where users authenticate, compose, format, and publish articles with real-time cloud data management.",
    tech: ["React", "Firebase Auth", "Firestore", "Tailwind CSS"],
    features: [
      "Firebase authentication and authorized author roles",
      "Rich article composing, editing, and instant publishing",
      "Responsive, clean typography optimized for reading",
    ],
    github: "https://github.com/mrganesh665/Blog-X",
    live: "https://blog-x-u8gr.vercel.app/",
    caseStudy: "",
  },
  {
    id: "volt-ecommerce",
    title: "Volt E-commerce",
    category: ["React Native"],
    image: "/projects/volt-ecommerce.jpg",
    description:
      "A e-commerce mobile-app that provides an online shopping experience with product browsing, cart management, and a responsive user interface.",
    tech: ["React Native", "Node.js", "Express"],
    features: [
      "Product browsing and product details",
      "Shopping cart management",
      "Responsive e-commerce interface",
      "REST API integration",
    ],
    github: "https://github.com/mrganesh665/volt-ecommerce",
    live: "https://drive.google.com/drive/folders/1csFitUhfXWTDhoGe_uB152CKMsspX__r?usp=sharing",
    caseStudy: "",
  },
  {
    id: "mgs-app",
    title: "MGS Appointment Booking Admin App",
    category: ["React Native"],
    image: "/projects/mgs-app.jpg",
    description:
      "A React Native admin application for managing appointment bookings and business operations. Integrated with backend REST APIs to retrieve user and booking data, handle API requests and responses, and display appointment information through a mobile interface.",
    tech: ["React Native", "Expo", "JavaScript", "REST APIs", "Axios", "JWT"],
    features: [
      "Appointment booking management",
      "Backend API integration for retrieving and updating data",
      "User and booking information management",
      "API request and response handling",
      "Mobile admin interface for business operations",
    ],
    github: "https://github.com/mrganesh665/mgs-app",
    live: "https://play.google.com/store/apps/details?id=com.crm_admin.mgsapp&hl=en_IN",
    caseStudy: "",
  },

];

export const experience = [
  {
    role: "Software Developer",
    company: "NeelStack Solutions",
    period: "Jan 2026 — Aug 2026",
    type: "work",
    points: [
      "Developed scalable, production-ready web applications with React.js, Redux, and TypeScript, adhering to modern frontend best practices and component-driven design.",
      "Implemented RESTful backend services using Node.js and Express, supporting secure data handling and optimized API communication.",
      "Improved UI performance and accessibility using Material UI (MUI) and reusable components.",
    ],
  },
  {
    role: "Software Developer",
    company: "Unico Global Solutions",
    period: "Oct 2024 — Dec 2025",
    type: "work",
    points: [
      "Built end-to-end features including authentication, protected routes, state management (Context API / Redux), and reusable components.",
      "Extended web functionality to mobile with React Native, sharing component logic and patterns across platforms.",
      "Collaborated on debugging, testing, and optimizing applications, reducing bugs and improving overall stability.",
    ],
  },
  {
    role: "Software Development Trainee",
    company: "Qspiders",
    period: "Jan 2024 — July 2024",
    type: "training",
    points: [
      "Built reusable organizational components using HTML, CSS, Tailwind CSS, React, and JavaScript.",
      "Collaborated with mentors and peers to understand industry best practices and coding standards.",
      "Engaged in hands-on projects, bridging theoretical knowledge with practical applications in web development.",
    ],
  },
];

export const certifications = [
  {
    title: "React and Node.js Certified",
    issuer: "HackerRank",
    date: "November 20, 2025",
    badge: "Full-Stack Development",
    description:
      "Validated end-to-end full-stack proficiency across modern React.js frontend architecture and scalable Node.js backend development.",
  },
  {
    title: "Mastercard Cybersecurity Virtual Experience",
    issuer: "Forage",
    date: "August 20, 2023",
    badge: "Cybersecurity",
    description:
      "Completed hands-on practical tasks evaluating security controls, data protection mechanisms, and modern web application security practices.",
  },
  {
    title: "Student Coordinator — T&P and IIC",
    issuer: "Training & Placement and IIC",
    date: "2022 — 2024",
    badge: "Leadership & Events",
    description:
      "Spearheaded coordination for 30+ campus recruitment events, technical industry workshops, and student hackathons.",
  },
];

export const services = [
  {
    title: "Full Stack Development",
    desc: "Production-ready web applications built on React.js, Node.js, Express, MongoDB, and TypeScript.",
  },
  {
    title: "React & TypeScript Frontend",
    desc: "Fast, accessible, component-driven user interfaces with clean state management using Redux and Context API.",
  },
  {
    title: "Secure RESTful APIs",
    desc: "Robust backend APIs with JWT authentication, RBAC, input validation, and Helmet.js security hardening.",
  },
  {
    title: "GenAI & RAG Solutions",
    desc: "Intelligent Q&A systems and document retrieval pipelines using LangChain, ChromaDB, and OpenAI LLMs.",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications with React Native, sharing core logic and UI paradigms with web apps.",
  },
  {
    title: "Performance & UI Systems",
    desc: "High-performance styling and design systems using Tailwind CSS, Material UI (MUI), and responsive patterns.",
  },
];

export const whyHireMe = [
  {
    title: "Production-Grade Code",
    desc: "Clean, maintainable, component-driven code adhering to industry best practices.",
  },
  {
    title: "Full-Stack & Mobile Breadth",
    desc: "Seamless integration across React, TypeScript, Node.js, Express, and React Native.",
  },
  {
    title: "Security-First Architecture",
    desc: "Built-in Helmet.js, rate limiting, express-validator, JWT, and role-based permissions.",
  },
  {
    title: "GenAI & RAG Expertise",
    desc: "Real-world experience implementing LangChain, ChromaDB, and OpenAI vector pipelines.",
  },
  {
    title: "Strong Foundation",
    desc: "B.Tech in ECE with verified HackerRank certifications in React and Node.js.",
  },
  {
    title: "Responsive & Accessible UI",
    desc: "Pixel-perfect layouts crafted with Tailwind CSS and Material UI.",
  },
  {
    title: "Reliable API Integrations",
    desc: "Proven integrations with Razorpay payments, Twilio communications, and Cloudinary media.",
  },
  {
    title: "Collaborative Leadership",
    desc: "Experienced coordinator of 30+ corporate placement events and technical hackathons.",
  },
];

export const techMarquee = [
  "React.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Redux",
  "Next.js",
  "React Native",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Material UI",
  "LangChain",
  "ChromaDB",
  "OpenAI LLMs",
  "Git & GitHub",
  "Razorpay",
  "Helmet.js",
];

export const testimonials = [
  {
    name: "Engineering Lead",
    role: "NeelStack Solutions",
    quote:
      "Ganesh consistently delivers clean, modular React and TypeScript code with rock-solid REST backends. His focus on component reusability and performance was invaluable to our releases.",
  },
  {
    name: "Project Manager",
    role: "Unico Global Solutions",
    quote:
      "Working with Ganesh was a breeze. He brought full-stack competence, seamlessly transitioning between web features and React Native mobile modules without missing a beat.",
  },
  {
    name: "Academic Coordinator",
    role: "Training & Placement Cell",
    quote:
      "As Student Coordinator, Ganesh demonstrated exceptional organization and ownership, successfully facilitating 30+ placement recruitment drives and hackathons.",
  },
];

export const faqs = [
  {
    q: "What is your primary technical expertise?",
    a: "My core expertise is full-stack web and mobile development with React.js, TypeScript, Redux, Node.js, Express, and MongoDB/MySQL, as well as AI solutions utilizing LangChain, ChromaDB, and OpenAI LLMs.",
  },
  {
    q: "Are you available for full-time or contract roles?",
    a: "Yes, I am currently open to work for full-time software developer opportunities, contract positions, and impactful freelance projects.",
  },
  {
    q: "Can you build both web and mobile applications?",
    a: "Yes, I have production experience developing both responsive web applications with React and mobile applications using React Native, enabling shared component architecture and rapid cross-platform delivery.",
  },
  {
    q: "How do you ensure web application security?",
    a: "I enforce security best practices including JWT authentication, Role-Based Access Control (RBAC), Helmet.js HTTP headers, rate limiting, and strict input validation using express-validator.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const emailjsConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};
