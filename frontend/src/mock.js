import victorImage from "./assets/my-picture.jpg";
import yellowOchreGas from "./assets/yellow-ochre-gas.png";
import brennanComposite from "./assets/brennan-composite-solutions.png";
import movieApp from "./assets/movie-app.png";
import etipeTaxNigeria from "./assets/etipe-tax-nigeria.png";


// Mock data for portfolio - will be replaced with backend API calls

export const portfolioData = {
  hero: {
    name: "Victor Usese",
    tagline: "I build fast, scalable, and human-centered web applications.",
    subtitle: "Frontend-focused full-stack engineer with React, TypeScript, and Node.js. I turn complex problems into clean, performant interfaces — and I own features from UI to API.",
    quote: "Clean code, reusable components, and real user impact.",
    image: victorImage
  },
  
  about: {
    content: "I'm a frontend-focused full-stack engineer based in Nigeria, open to remote roles worldwide. Over the past two years, I've helped businesses in the UK and beyond launch modern, mobile-first web platforms — from gas and plumbing services to composite solutions marketplaces. My sweet spot is React + TypeScript, but I'm equally comfortable building out REST APIs with Node.js and Express when the job requires end-to-end ownership.\n\nWhat drives me? Building things that actually work for people. I love taking a design or a rough idea and turning it into a responsive, accessible, and high-performance UI. I also geek out on component architecture, debugging, and performance optimization — because a beautiful site means nothing if it's slow or broken.\n\nOutside of coding, I teach JavaScript, React, and automation workflows. Breaking down complex topics for others has made me a better engineer and collaborator. I'm currently leveling up my testing skills (Jest, Cypress), exploring Electron for desktop apps, and diving deeper into advanced TypeScript patterns."
  },
  
  skills: {
    frontend: [
      "React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", 
      "Tailwind CSS", "Responsive Design", "Component Architecture"
    ],
    stateManagement: [
      "Context API", "Redux (working knowledge)"
    ],
    backend: [
      "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication"
    ],
    tools: [
      "Git", "GitHub", "Vite", "Postman", "Netlify", "GoDaddy", "Vercel"
    ],
    practices: [
      "Debugging", "Performance Optimization", "Reusable Components", 
      "Clean Code", "Cross-functional Collaboration", "Feature Ownership"
    ],
    familiarWith: [
      "Jest", "Cypress", "Storybook", "Electron", "Advanced TypeScript", 
      "make.com", "n8n.io (automations & workflows)"
    ]
  },
  
  experience: [
    {
      id: 1,
      title: "Frontend Web Developer / Product Engineer",
      company: "Yellow Ochre Gas",
      location: "Remote (UK Market)",
      period: "2025 – Present",
      achievements: [
        "Scaled a modern mobile-first plumbing & heating platform using React, Tailwind CSS, Node.js, and Vercel.",
        "Refactored the entire website into a component-driven architecture — improving performance and maintainability.",
        "Built interactive customer features: animated stats, service modals, floating WhatsApp/call CTAs, smooth-scroll navigation, and review carousels.",
        "Increased conversions through AI-enhanced hero imagery, trust-based UI, Google review integration, and emergency-first UX.",
        "Currently leading PWA transformation, scalable booking flows, local SEO, and assistant-driven customer interaction systems."
      ]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "Brennan Composite Solutions Platform",
      location: "UK Market",
      period: "2024",
      achievements: [
        "Developed a scalable service marketplace connecting local providers with customers.",
        "Built responsive React UI with reusable components for listings, dashboards, and user flows.",
        "Integrated RESTful APIs for dynamic data handling.",
        "Structured backend with Node.js/Express using modular architecture."
      ]
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "GoCardless API Integration",
      location: "Remote",
      period: "2024",
      achievements: [
        "Integrated third-party REST APIs for secure payment processing.",
        "Implemented mandate flows, redirects, and confirmation workflows.",
        "Debugged and optimized API performance and reliability."
      ]
    },
    {
      id: 4,
      title: "Freelance Web Developer",
      company: "Various Clients",
      location: "Remote",
      period: "2023 – Present",
      achievements: [
        "Delivered multiple client websites across industries — from small business to service platforms.",
        "Translated business needs into technical solutions with SEO and performance optimization."
      ]
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "Yellow Ochre Gas Platform",
      description: "Modern plumbing & heating service website with animated stats, review carousels, floating CTAs, and mobile-first design. Built with React, Tailwind, Node.js — achieving faster load times and higher user engagement.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Vercel"],
      liveLink: "https://www.yelloworchregas.co.uk/",
      status: "Live in Production",
      image: yellowOchreGas
    },
    {
      id: 2,
      title: "Brennan Composite Solutions Marketplace",
      description: "Full-stack marketplace connecting service providers with customers. Features reusable React components, REST API integration, and modular Node.js backend. Demonstrated end-to-end feature ownership.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      liveLink: "https://brennancomposites.com/",
      status: "Completed",
      image: brennanComposite
    },
    {
      id: 3,
      title: "Movie Search App",
      description: "High-performance React app with real-time search and filtering. Consumed external movie APIs, handled asynchronous data, and focused on UI responsiveness and component reusability.",
      technologies: ["React", "JavaScript", "REST API", "CSS3"],
      liveLink: "https://victor-usese-portfolio.netlify.app/",
      status: "Live",
      image: movieApp
    },
    {
      id: 4,
      title: "Mobile-First Tax Assistant & Financial Record Platform for Nigerian Traders",
      description: "A mobile-first tax and financial record management platform designed to help Nigerian traders and small businesses track income, calculate estimated taxes, and generate business reports through a simple educational interface.",
      technologies: ["Node.js", "Express", "GoCardless API", "REST API"],
      liveLink: "https://etipetaxnigeria.com/",
      status: "Under Development",
      image: etipeTaxNigeria
    }
  ],
  
  contact: {
    email: "victorusese@gmail.com",
    website: "https://victor-usese-portfolio.netlify.app/",
    github: "https://github.com/VictorUsese",
    linkedin: "https://www.linkedin.com/in/victor-usese-019673116/",
    message: "I'm currently open to remote frontend or full-stack roles where I can bring React, TypeScript, and a problem-solving mindset to your team."
  }
};