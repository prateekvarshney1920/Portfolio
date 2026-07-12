/**
 * Central content data — single source of truth for the entire portfolio.
 * Edit this file to update any section's content without touching components.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface JourneyMilestone {
  readonly year: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string; // Lucide icon name
}

export interface ExperienceEntry {
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
}

export interface SkillCategory {
  readonly name: string;
  readonly icon: string;
  readonly skills: readonly Skill[];
}

export interface Skill {
  readonly name: string;
  readonly level: number; // 0–100
}

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly tagline: string;
  readonly description: string;
  readonly longDescription: string;
  readonly tags: readonly string[];
  readonly features: readonly string[];
  readonly category: 'ai' | 'automation' | 'mobile' | 'web';
  readonly gradient: string; // CSS gradient for card accent
  readonly links: {
    readonly github?: string;
    readonly live?: string;
  };
  readonly featured: boolean;
}

export interface TechItem {
  readonly name: string;
  readonly category: string;
  readonly icon: string; // Lucide icon name or custom
}

export interface StatItem {
  readonly value: string;
  readonly label: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Personal Info
// ─────────────────────────────────────────────────────────────────────────────

export const personalInfo = {
  name: 'Prateek Varshney',
  roles: ['AI Engineer', 'Automation Developer', 'Full-Stack Developer', 'Agent Builder'],
  tagline: 'Building intelligent systems that think, automate, and scale.',
  bio: `I'm an AI Engineer who has journeyed from building Android apps to crafting 
intelligent AI agents and multi-agent systems. My path through mobile development, 
UI design, and automation engineering has given me a unique perspective — I don't 
just build AI, I build AI that works beautifully in production.`,
  bioExtended: `Today, I specialise in building AI agents, workflow automation with n8n, 
and production-grade AI systems. From a weather app to multi-agent content pipelines, 
every project has been a step toward building technology that genuinely augments human capability.`,
  location: 'India',
  email: 'hello@prateekvarshney.dev',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Stats
// ─────────────────────────────────────────────────────────────────────────────

export const stats: readonly StatItem[] = [
  { value: '3+', label: 'Years Experience' },
  { value: '9+', label: 'Projects Shipped' },
  { value: '5+', label: 'AI Agents Built' },
  { value: '10+', label: 'Automations Live' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Journey Timeline
// ─────────────────────────────────────────────────────────────────────────────

export const journeyMilestones: readonly JourneyMilestone[] = [
  {
    year: '2021',
    title: 'Android Development',
    description:
      'Started building native Android applications, learning the fundamentals of mobile development, Java, and the Android SDK ecosystem.',
    icon: 'Smartphone',
  },
  {
    year: '2021',
    title: 'Jetpack Compose',
    description:
      'Adopted Kotlin and Jetpack Compose early, embracing declarative UI patterns that transformed how I think about interface design.',
    icon: 'Layers',
  },
  {
    year: '2022',
    title: 'Firebase Integration',
    description:
      'Deep-dived into Firebase — authentication, Firestore, Cloud Functions, and real-time databases — powering full-stack mobile experiences.',
    icon: 'Flame',
  },
  {
    year: '2022',
    title: 'Freelance UI Designer',
    description:
      'Took on freelance UI/UX design projects, sharpening my eye for aesthetics, layout systems, design tokens, and user-centered thinking.',
    icon: 'Palette',
  },
  {
    year: '2023',
    title: 'Technical Coordinator',
    description:
      'Led technical initiatives, coordinated development teams, managed project timelines, and bridged the gap between design and engineering.',
    icon: 'Users',
  },
  {
    year: '2023',
    title: 'Automation Engineer',
    description:
      'Discovered the power of workflow automation with n8n, Zapier, and custom scripts — automating everything from data pipelines to content workflows.',
    icon: 'Workflow',
  },
  {
    year: '2024',
    title: 'AI Engineer',
    description:
      'Transitioned into AI engineering — building with LLMs, prompt engineering, RAG systems, and integrating AI into production applications.',
    icon: 'Brain',
  },
  {
    year: '2025',
    title: 'Building AI Agents',
    description:
      'Now building autonomous AI agents and multi-agent systems that can reason, plan, and execute complex tasks — the frontier of applied AI.',
    icon: 'Bot',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Experience
// ─────────────────────────────────────────────────────────────────────────────

export const experiences: readonly ExperienceEntry[] = [
  {
    role: 'AI Engineer & Agent Builder',
    company: 'Independent',
    location: 'Remote',
    period: '2024 – Present',
    description:
      'Designing and building AI agents, multi-agent workflows, and production-grade automation systems using LLMs, n8n, and modern AI tooling.',
    highlights: [
      'Built multi-agent content pipeline generating marketing campaigns end-to-end',
      'Developed AI image generation agent with autonomous style selection',
      'Created content calendar automation reducing planning time by 80%',
      'Implemented RAG-based virtual assistant for plant care guidance',
    ],
    technologies: ['Python', 'TypeScript', 'n8n', 'LangChain', 'OpenAI', 'Next.js', 'Supabase'],
  },
  {
    role: 'Automation Engineer',
    company: 'Freelance',
    location: 'Remote',
    period: '2023 – 2024',
    description:
      'Built custom automation workflows for businesses, connecting APIs, databases, and services to eliminate manual processes.',
    highlights: [
      'Automated client onboarding workflows saving 15+ hours per week',
      'Built real-time notification systems across Slack, email, and SMS',
      'Created data synchronisation pipelines between CRM and marketing tools',
      'Developed custom n8n nodes for niche API integrations',
    ],
    technologies: ['n8n', 'Node.js', 'REST APIs', 'PostgreSQL', 'Webhooks', 'Zapier'],
  },
  {
    role: 'Technical Coordinator & UI Designer',
    company: 'Freelance',
    location: 'India',
    period: '2022 – 2023',
    description:
      'Led technical project coordination while delivering freelance UI/UX design work for mobile and web applications.',
    highlights: [
      'Coordinated cross-functional teams on 4+ concurrent projects',
      'Designed and shipped UI for 3 production Android applications',
      'Established design systems and component libraries for client projects',
      'Managed sprint planning, code reviews, and technical documentation',
    ],
    technologies: ['Figma', 'Kotlin', 'Jetpack Compose', 'Firebase', 'Material Design'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Skills
// ─────────────────────────────────────────────────────────────────────────────

export const skillCategories: readonly SkillCategory[] = [
  {
    name: 'AI & Machine Learning',
    icon: 'Brain',
    skills: [
      { name: 'LLM Integration', level: 92 },
      { name: 'Prompt Engineering', level: 95 },
      { name: 'AI Agents', level: 90 },
      { name: 'RAG Systems', level: 85 },
      { name: 'LangChain', level: 82 },
    ],
  },
  {
    name: 'Automation & Workflows',
    icon: 'Workflow',
    skills: [
      { name: 'n8n', level: 95 },
      { name: 'Workflow Design', level: 90 },
      { name: 'API Integration', level: 92 },
      { name: 'Data Pipelines', level: 85 },
      { name: 'Zapier', level: 80 },
    ],
  },
  {
    name: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'React / Next.js', level: 88 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 82 },
      { name: 'Jetpack Compose', level: 78 },
    ],
  },
  {
    name: 'Backend & Infrastructure',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 88 },
      { name: 'Firebase', level: 85 },
      { name: 'Supabase', level: 80 },
      { name: 'PostgreSQL', level: 78 },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Tech Stack
// ─────────────────────────────────────────────────────────────────────────────

export const techStack: readonly TechItem[] = [
  { name: 'TypeScript', category: 'Language', icon: 'FileCode' },
  { name: 'Python', category: 'Language', icon: 'FileCode' },
  { name: 'Kotlin', category: 'Language', icon: 'FileCode' },
  { name: 'React', category: 'Frontend', icon: 'Component' },
  { name: 'Next.js', category: 'Frontend', icon: 'Globe' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'Paintbrush' },
  { name: 'Jetpack Compose', category: 'Mobile', icon: 'Smartphone' },
  { name: 'Node.js', category: 'Backend', icon: 'Server' },
  { name: 'Firebase', category: 'Backend', icon: 'Flame' },
  { name: 'Supabase', category: 'Backend', icon: 'Database' },
  { name: 'PostgreSQL', category: 'Database', icon: 'Database' },
  { name: 'n8n', category: 'Automation', icon: 'Workflow' },
  { name: 'LangChain', category: 'AI', icon: 'Link' },
  { name: 'OpenAI', category: 'AI', icon: 'Brain' },
  { name: 'Docker', category: 'DevOps', icon: 'Container' },
  { name: 'Git', category: 'DevOps', icon: 'GitBranch' },
  { name: 'Vercel', category: 'DevOps', icon: 'Triangle' },
  { name: 'Figma', category: 'Design', icon: 'Figma' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Projects
// ─────────────────────────────────────────────────────────────────────────────

export const projects: readonly Project[] = [
  {
    slug: 'marketing-agent',
    title: 'Marketing Agent',
    tagline: 'AI-powered multi-agent marketing campaign generator',
    description:
      'A multi-agent system that autonomously creates complete marketing campaigns — from market research and audience analysis to copywriting and visual content generation.',
    longDescription: `The Marketing Agent is a sophisticated multi-agent system built to automate the 
entire marketing campaign creation process. It employs specialised AI agents for market research, 
audience segmentation, copywriting, and visual content generation — all orchestrated through n8n 
workflows. The system takes a product brief and autonomously produces a complete campaign including 
ad copy, social media posts, email sequences, and visual assets.`,
    tags: ['AI Agents', 'n8n', 'LangChain', 'OpenAI', 'Multi-Agent'],
    features: [
      'Multi-agent orchestration with specialised roles',
      'Autonomous market research and competitor analysis',
      'AI-generated copywriting for multiple channels',
      'Visual asset generation with style consistency',
      'Campaign performance prediction scoring',
    ],
    category: 'ai',
    gradient: 'linear-gradient(135deg, #4f7dff 0%, #7c5cff 50%, #22d3ee 100%)',
    links: { github: 'https://github.com/prateekvarshney' },
    featured: true,
  },
  {
    slug: 'ai-image-generation-agent',
    title: 'AI Image Generation Agent',
    tagline: 'Autonomous agent for intelligent image creation',
    description:
      'An AI agent that autonomously generates images based on natural language descriptions, with intelligent style selection, prompt engineering, and quality refinement.',
    longDescription: `This agent goes beyond simple text-to-image generation. It analyses the user's intent, 
selects appropriate artistic styles, engineers optimised prompts, generates multiple variations, and 
self-evaluates output quality. Built with a feedback loop that refines results based on aesthetic 
scoring, it produces consistently high-quality visual content without manual prompt crafting.`,
    tags: ['AI Agent', 'Image Generation', 'Python', 'OpenAI', 'Automation'],
    features: [
      'Natural language to optimised prompt translation',
      'Intelligent artistic style selection',
      'Multi-variation generation with quality scoring',
      'Automated prompt refinement feedback loop',
      'Batch processing for content pipelines',
    ],
    category: 'ai',
    gradient: 'linear-gradient(135deg, #7c5cff 0%, #f472b6 50%, #fbbf24 100%)',
    links: { github: 'https://github.com/prateekvarshney' },
    featured: true,
  },
  {
    slug: 'content-calendar-agent',
    title: 'Content Calendar Agent',
    tagline: 'AI agent that plans and schedules content automatically',
    description:
      'An intelligent agent that generates complete content calendars — topics, formats, schedules, and drafts — tailored to brand voice, audience, and platform requirements.',
    longDescription: `The Content Calendar Agent eliminates the most time-consuming part of content marketing: 
planning. Given a brand profile and target audience, it generates a month-long content calendar with 
topic ideas, post formats, optimal scheduling times, and first drafts. It understands platform-specific 
requirements (LinkedIn vs. Twitter vs. Instagram) and maintains brand voice consistency throughout.`,
    tags: ['AI Agent', 'n8n', 'Content Strategy', 'LLM', 'Automation'],
    features: [
      'Brand voice analysis and consistency enforcement',
      'Platform-specific content formatting',
      'Optimal posting schedule generation',
      'First draft creation for each content piece',
      'Trend-aware topic suggestion engine',
    ],
    category: 'ai',
    gradient: 'linear-gradient(135deg, #22d3ee 0%, #4f7dff 50%, #7c5cff 100%)',
    links: { github: 'https://github.com/prateekvarshney' },
    featured: true,
  },
  {
    slug: 'virtual-plant-care-assistant',
    title: 'Virtual Plant Care Assistant',
    tagline: 'AI-powered plant health advisor with RAG',
    description:
      'A conversational AI assistant that provides personalised plant care guidance using Retrieval Augmented Generation (RAG) over a curated botanical knowledge base.',
    longDescription: `This virtual assistant combines RAG architecture with a carefully curated botanical 
knowledge base to provide accurate, personalised plant care advice. Users can describe symptoms, 
upload images, and receive diagnosis and treatment recommendations. The system retrieves relevant 
botanical information and synthesises it with the LLM's reasoning to produce expert-level guidance.`,
    tags: ['RAG', 'AI Assistant', 'LangChain', 'Vector DB', 'Python'],
    features: [
      'RAG-powered knowledge retrieval from botanical database',
      'Symptom-based plant diagnosis',
      'Personalised care schedules based on environment',
      'Seasonal care adjustment recommendations',
      'Conversational follow-up for complex diagnoses',
    ],
    category: 'ai',
    gradient: 'linear-gradient(135deg, #34d399 0%, #22d3ee 50%, #4f7dff 100%)',
    links: { github: 'https://github.com/prateekvarshney' },
    featured: false,
  },
  {
    slug: 'workflow-automation',
    title: 'Workflow Automation Suite',
    tagline: 'Custom n8n workflow collection for business automation',
    description:
      'A comprehensive suite of n8n workflows automating business processes — from client onboarding and invoice processing to social media scheduling and CRM synchronisation.',
    longDescription: `This collection represents dozens of battle-tested n8n workflows built for real 
businesses. Each workflow is designed for reliability with error handling, retry logic, and monitoring. 
The suite covers client onboarding (automatic account setup, welcome emails, Slack notifications), 
financial processing (invoice generation, payment tracking), and marketing (social media scheduling, 
newsletter automation, analytics aggregation).`,
    tags: ['n8n', 'Automation', 'APIs', 'Webhooks', 'Node.js'],
    features: [
      'Client onboarding automation pipeline',
      'Invoice processing and payment tracking',
      'Multi-platform social media scheduler',
      'CRM and marketing tool synchronisation',
      'Real-time monitoring and error alerting',
    ],
    category: 'automation',
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #f472b6 50%, #7c5cff 100%)',
    links: { github: 'https://github.com/prateekvarshney' },
    featured: false,
  },
  {
    slug: 'n8n-automations',
    title: 'n8n Automations',
    tagline: 'Production-grade automation templates and custom nodes',
    description:
      'A collection of production-grade n8n automation templates and custom nodes, designed for scalability, error resilience, and easy deployment.',
    longDescription: `Beyond simple workflows, this project includes custom n8n nodes for niche API integrations, 
reusable workflow templates with parameterised configuration, and a deployment pipeline for managing 
n8n instances across environments. Each template follows best practices: idempotent execution, 
structured error handling, rate limiting, and comprehensive logging.`,
    tags: ['n8n', 'Automation', 'Custom Nodes', 'TypeScript', 'Docker'],
    features: [
      'Custom n8n nodes for specialised API integrations',
      'Parameterised workflow templates for rapid deployment',
      'Multi-environment deployment pipeline',
      'Structured error handling and retry patterns',
      'Comprehensive execution logging and monitoring',
    ],
    category: 'automation',
    gradient: 'linear-gradient(135deg, #f97316 0%, #fbbf24 50%, #34d399 100%)',
    links: { github: 'https://github.com/prateekvarshney' },
    featured: false,
  },
  {
    slug: 'task-tracker',
    title: 'Task Tracker',
    tagline: 'Full-stack task management application',
    description:
      'A full-featured task management application with role-based access, Kanban boards, calendar views, and real-time collaboration — built with React and TypeScript.',
    longDescription: `Task Tracker is a production-ready task management system supporting multiple user roles 
(admin, manager, employee) with distinct dashboards and permissions. Features include drag-and-drop 
Kanban boards, calendar integration, file attachments, activity logging, and real-time updates. 
Built with a focus on clean architecture and reusable component patterns.`,
    tags: ['React', 'TypeScript', 'Tailwind', 'Full-Stack', 'Firebase'],
    features: [
      'Role-based access control (Admin, Manager, Employee)',
      'Drag-and-drop Kanban board with status columns',
      'Calendar view with task deadlines and reminders',
      'Real-time collaboration and activity feed',
      'File attachments and rich text task descriptions',
    ],
    category: 'web',
    gradient: 'linear-gradient(135deg, #4f7dff 0%, #22d3ee 50%, #34d399 100%)',
    links: { github: 'https://github.com/prateekvarshney' },
    featured: false,
  },
  {
    slug: 'neon-anime',
    title: 'Neon Anime',
    tagline: 'Anime discovery platform with vibrant neon aesthetics',
    description:
      'An anime discovery and tracking platform featuring a striking neon-themed UI, real-time search, filtering, and personalised watchlists.',
    longDescription: `Neon Anime is a visually striking anime discovery platform that pulls data from anime 
APIs to provide comprehensive browsing, searching, and tracking capabilities. The UI features a 
bold neon colour palette with glassmorphism effects, smooth animations, and a responsive grid layout. 
Users can search by genre, rating, season, and maintain personalised watchlists with progress tracking.`,
    tags: ['React', 'API Integration', 'Tailwind', 'Framer Motion', 'UI Design'],
    features: [
      'Real-time search with instant results',
      'Advanced filtering by genre, rating, and season',
      'Personalised watchlist with progress tracking',
      'Neon-themed glassmorphism UI design',
      'Responsive grid layout with smooth animations',
    ],
    category: 'web',
    gradient: 'linear-gradient(135deg, #f472b6 0%, #7c5cff 50%, #22d3ee 100%)',
    links: { github: 'https://github.com/prateekvarshney' },
    featured: false,
  },
  {
    slug: 'weather-app',
    title: 'Weather App',
    tagline: 'Beautiful weather application with Android native UI',
    description:
      'A native Android weather application built with Kotlin and Jetpack Compose, featuring real-time weather data, 7-day forecasts, and location-based updates.',
    longDescription: `My first major project — a weather application that showcases clean Android development 
with Kotlin and Jetpack Compose. It fetches real-time weather data via API, displays current conditions 
with dynamic weather-themed backgrounds, provides 7-day forecasts with hourly breakdowns, and supports 
location-based automatic updates. The project represents the foundation of my development journey.`,
    tags: ['Kotlin', 'Jetpack Compose', 'Android', 'REST API', 'Material Design'],
    features: [
      'Real-time weather data from OpenWeatherMap API',
      'Dynamic weather-themed backgrounds and icons',
      '7-day forecast with hourly temperature breakdowns',
      'Location-based automatic weather updates',
      'Clean Material Design 3 interface with Compose',
    ],
    category: 'mobile',
    gradient: 'linear-gradient(135deg, #60a5fa 0%, #4f7dff 50%, #7c5cff 100%)',
    links: { github: 'https://github.com/prateekvarshney' },
    featured: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Navigation (derived — keep in sync with siteConfig.nav for convenience)
// ─────────────────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;
