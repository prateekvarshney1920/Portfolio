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
  roles: [
    'AI Engineer / Android Developer',
    'Android Developer',
    'AI Agent Builder',
    'Automation Specialist',
  ],
  tagline: 'Building intelligent systems that think, automate, and scale.',
  bio: "I am an Android Developer and AI Engineer specializing in building modern, scalable mobile applications and autonomous systems. With expertise in Kotlin, Jetpack Compose, and Firebase, combined with AI agent orchestration and workflow automation, I bridge the gap between design and high-performance engineering.",
  bioExtended: "Passionate about clean architecture and performance optimization, I have built 10+ Android applications and integrated REST API and Firebase-based systems. I coordinate technical teams, design intuitive user interfaces, and build automated developer tools that turn ideas into production-ready software.",
  location: 'India',
  email: 'prateekvarshney697@gmail.com',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Stats
// ─────────────────────────────────────────────────────────────────────────────

export const stats: readonly StatItem[] = [
  { value: '1+', label: 'Years Experience' },
  { value: '6+', label: 'Projects Shipped' },
  { value: '10+', label: 'Android Apps Built' },
  { value: '30+', label: 'Students Mentored' },
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
      'Designed and delivered user interfaces for a mobile app focused on providing on-demand household services. Collaborated with the client to translate requirements into design.',
    icon: 'Palette',
  },
  {
    year: '2025',
    title: 'Technical Coordinator',
    description:
      'Selected as Technical Coordinator at GeeksforGeeks Club. Led technical initiatives, coordinated development teams, managed project timelines, and mentored 30+ students in Android development, problem-solving, and project building. Collaborated with teams to manage events and workshops.',
    icon: 'Users',
  },
  {
    year: '2025',
    title: 'Automation Engineer',
    description:
      'Discovered the power of workflow automation with n8n, Zapier, and custom scripts — automating everything from data pipelines to content workflows.',
    icon: 'Workflow',
  },
  {
    year: '2026',
    title: 'AI Engineer',
    description:
      'Transitioned into AI engineering — building with LLMs, prompt engineering, RAG systems, and integrating AI into production applications.',
    icon: 'Brain',
  },
  {
    year: '2026',
    title: 'Building AI Agents',
    description:
      'Now building autonomous AI agents and multi-agent systems that can reason, plan, and execute complex tasks — the frontier of applied AI.',
    icon: 'Bot',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Skills (LangChain removed)
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
// Tech Stack (LangChain removed)
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
  { name: 'OpenAI', category: 'AI', icon: 'Brain' },
  { name: 'Docker', category: 'DevOps', icon: 'Container' },
  { name: 'Git', category: 'DevOps', icon: 'GitBranch' },
  { name: 'Vercel', category: 'DevOps', icon: 'Triangle' },
  { name: 'Figma', category: 'Design', icon: 'Figma' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Projects (Virtual Plant Care Assistant removed, Neon Anime moved to Mobile,
// CookMate, QRScanner, Music Player, CodeBaseExplainer added)
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
    tags: ['AI Agents', 'n8n', 'OpenAI', 'Multi-Agent'],
    features: [
      'Multi-agent orchestration with specialised roles',
      'Autonomous market research and competitor analysis',
      'AI-generated copywriting for multiple channels',
      'Visual asset generation with style consistency',
      'Campaign performance prediction scoring',
    ],
    category: 'ai',
    gradient: 'linear-gradient(135deg, #4f7dff 0%, #7c5cff 50%, #22d3ee 100%)',
    links: { github: 'https://github.com/prateekvarshney1920' },
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
    links: { github: 'https://github.com/prateekvarshney1920' },
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
    links: { github: 'https://github.com/prateekvarshney1920' },
    featured: true,
  },
  {
    slug: 'codebase-explainer',
    title: 'CodeBaseExplainer',
    tagline: 'AI tool that explains your codebase and repository',
    description:
      'An AI-powered developer tool that analyzes directories and explains code repository layout, dependencies, and file relationships in natural language.',
    longDescription: `CodeBaseExplainer helps engineering teams onboard and navigate massive repositories. 
By scanning directory file structures and analyzing files, it generates module explanations, dependency 
graphs, and import path maps, providing developers with automated natural language walkthroughs.`,
    tags: ['Python', 'OpenAI API', 'Directory Analysis', 'RAG'],
    features: [
      'Automated codebase index mapping',
      'Traces component and model dependencies',
      'Explains functions, variables, and modules',
      'Interactive AI chatbot for directory Q&A',
    ],
    category: 'web',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    links: { github: 'https://github.com/prateekvarshney1920/CodeBaseExplainer' },
    featured: false,
  },
  {
    slug: 'cookmate',
    title: 'CookMate',
    tagline: 'Modern recipe discovery and sharing Android app',
    description:
      'A recipe sharing and discovery app built using Kotlin and Jetpack Compose, showcasing clean architecture, repository and MVVM patterns.',
    longDescription: `CookMate is a native Android application built entirely in Kotlin and declarative UI patterns 
using Jetpack Compose. It integrates third-party REST APIs for recipe searches, lists step-by-step guides, 
and supports client-side favorites caching. Implements MVVM layout architecture.`,
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'Android'],
    features: [
      'Dynamic recipe filtering and text search',
      'Step-by-step cooking steps viewer',
      'Favorites bookmarking with offline support',
      'Hilt-based clean separation repository layer',
    ],
    category: 'mobile',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    links: { github: 'https://github.com/prateekvarshney1920/CookMate' },
    featured: false,
  },
  {
    slug: 'qrscanner',
    title: 'QRScanner',
    tagline: 'Fast and lightweight native QR code utility',
    description:
      'A native Android QR scanner and generator utility leveraging Jetpack Compose, CameraX, and ZXing.',
    longDescription: `QRScanner is a fast native utility built to demonstrate hardware integration on Android. 
Using CameraX with ML Kit analyzers, it detects QR codes in real-time. Features include custom QR creation, 
history tracking, and material design themes.`,
    tags: ['Kotlin', 'Jetpack Compose', 'CameraX', 'ZXing', 'Hilt'],
    features: [
      'Instant real-time camera scanning detection',
      'Custom QR code layout styling generator',
      'History logging with Room database caching',
      'Light/dark mode system alignment',
    ],
    category: 'mobile',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    links: { github: 'https://github.com/prateekvarshney1920/QRScanner' },
    featured: false,
  },
  {
    slug: 'music-player',
    title: 'Music Player',
    tagline: 'Elegant local audio player with Media3',
    description:
      'An Android local music player utilizing Jetpack Media3 ExoPlayer and Jetpack Compose for smooth audio playback.',
    longDescription: `Music Player is a native audio utility implementing material design guidelines. 
Using Media3 components, it plays audio tracks in a background service, integrates lockscreen controls, 
reads local device files, and renders smooth sound controls.`,
    tags: ['Kotlin', 'Jetpack Compose', 'Media3', 'ExoPlayer', 'Hilt'],
    features: [
      'Background media service with notification center widgets',
      'Active audio queue and custom playlist structures',
      'Headphone plug state listeners and volume ducking',
      'Elegant animations synced to local playback state',
    ],
    category: 'mobile',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    links: { github: 'https://github.com/prateekvarshney1920' },
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
    links: { github: 'https://github.com/prateekvarshney1920' },
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
    links: { github: 'https://github.com/prateekvarshney1920' },
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
    links: { github: 'https://github.com/prateekvarshney1920' },
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
    category: 'mobile',
    gradient: 'linear-gradient(135deg, #f472b6 0%, #7c5cff 50%, #22d3ee 100%)',
    links: { github: 'https://github.com/prateekvarshney1920' },
    featured: false,
  },
  {
    slug: 'weather-app',
    title: 'Weather App',
    tagline: 'Beautiful weather application with Android native UI',
    description:
      'A native Android weather application built with Kotlin and Jetpack Compose, featuring real-time weather data, 7-day forecasts, and location-based updates.',
    longDescription: `Developed a native weather app showcasing modern Android standards. Fetches real-time 
climate data via API calls, structures code using MVVM architecture, and renders fluid layout screens 
with Compose layouts.`,
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
    links: { github: 'https://github.com/prateekvarshney1920' },
    featured: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;
