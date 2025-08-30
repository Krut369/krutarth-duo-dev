export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
  category: 'mobile' | 'web';
}

export interface Skill {
  name: string;
  icon: string;
  category: 'mobile' | 'web';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  category: 'mobile' | 'web';
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript (ES6+)', icon: '⚡', category: 'web' },
  { name: 'TypeScript', icon: '📘', category: 'web' },
  { name: 'HTML5', icon: '🌐', category: 'web' },
  { name: 'CSS3/SCSS', icon: '🎨', category: 'web' },
  { name: 'Python', icon: '🐍', category: 'web' },
  { name: 'C++', icon: '⚙️', category: 'web' },
  
  // Frameworks & Libraries
  { name: 'React.js', icon: '⚛️', category: 'web' },
  { name: 'React Router DOM', icon: '🔄', category: 'web' },
  { name: 'Angular', icon: '🅰️', category: 'web' },
  { name: 'Angular Material', icon: '🎯', category: 'web' },
  { name: 'Bootstrap', icon: '🎨', category: 'web' },
  { name: 'Tailwind CSS', icon: '💨', category: 'web' },
  
  // State Management
  { name: 'Redux', icon: '📦', category: 'web' },
  { name: 'Zustand', icon: '🐻', category: 'web' },
  { name: 'Context API', icon: '🔗', category: 'web' },
  
  // Authentication & Security
  { name: 'JWT', icon: '🔐', category: 'web' },
  { name: 'OAuth2', icon: '🔒', category: 'web' },
  { name: 'Web Security', icon: '🛡️', category: 'web' },
  { name: 'Accessibility (a11y)', icon: '♿', category: 'web' },
  
  // Databases & Cloud
  { name: 'MySQL', icon: '🗄️', category: 'web' },
  { name: 'Firebase Firestore', icon: '🔥', category: 'web' },
  { name: 'Supabase', icon: '🚀', category: 'web' },
  { name: 'AWS S3', icon: '☁️', category: 'web' },
  { name: 'SQLite', icon: '💾', category: 'web' },
  
  // Developer Tools
  { name: 'Git/GitHub', icon: '📚', category: 'web' },
  { name: 'VS Code', icon: '💻', category: 'web' },
  { name: 'Postman', icon: '📮', category: 'web' },
  { name: 'Docker', icon: '🐳', category: 'web' },
  { name: 'Figma', icon: '🎨', category: 'web' },
  { name: 'Linux Shell', icon: '🐧', category: 'web' },
  { name: 'Jira', icon: '📋', category: 'web' },
  { name: 'CI/CD', icon: '🔄', category: 'web' },
  
  // Testing & Methodologies
  { name: 'Jest', icon: '🧪', category: 'web' },
  { name: 'Karma', icon: '⚡', category: 'web' },
  { name: 'React Testing Library', icon: '🔍', category: 'web' },
  { name: 'Agile/Scrum', icon: '📊', category: 'web' },
  
  // Mobile Development Skills
  // Mobile Development Skills
{ name: 'Flutter', icon: '📱', category: 'mobile' },
{ name: 'Dart', icon: '🎯', category: 'mobile' },
{ name: 'React Native', icon: '⚛️', category: 'mobile' },
{ name: 'Material Design 3', icon: '🎨', category: 'mobile' },
{ name: 'Riverpod', icon: '🌊', category: 'mobile' },
{ name: 'GetX', icon: '🚦', category: 'mobile' },        // Added
{ name: 'Provider', icon: '🧩', category: 'mobile' },     // Added
{ name: 'Firebase', icon: '🔥', category: 'mobile' },
{ name: 'Supabase', icon: '🚀', category: 'mobile' },
{ name: 'Flame Engine', icon: '🎮', category: 'mobile' },
{ name: 'Tiled Maps', icon: '🗺️', category: 'mobile' },
{ name: 'Groq AI', icon: '🤖', category: 'mobile' },

];

export const projects: Project[] = [
  // Web Projects
  {
    id: 'web-1',
    title: 'OrganEase',
    description: 'Streamlined organ transfer between procurement and transplant centres with a real-time web application. Enabled secure organ requests and token-based confirmations, reducing manual errors. Designed a responsive UI with TailwindCSS and optimized backend APIs for performance.',
    techStack: ['MERN', 'TailwindCSS', 'MongoDB', 'Node.js'],
    image: '/src/assets/organse.jpeg',
    link: 'https://github.com/Krut369/OranseShareMernApp.git',
    category: 'web'
  },
  {
    id: 'web-2',
    title: 'MERN eCommerce Platform',
    description: 'Developed a full-featured online shopping platform with user authentication, product management, and order tracking. Integrated Razorpay payments and Brevo email notifications for seamless checkout and communication. Built a responsive UI and admin dashboard, deployed live.',
    techStack: ['MERN', 'TailwindCSS', 'Razorpay', 'Brevo SMTP'],
    image: '/src/assets/ecommerce.png',
    link: 'https://mern-shop-abxs.onrender.com/',
    category: 'web'
  },
  {
    id: 'web-3',
    title: 'AI Resume Analyzer (CV IntelliCheck)',
    description: 'Built an AI-powered resume analysis platform with ATS scoring, smart feedback, and job-tailored recommendations. Implemented OAuth authentication, file upload, and dashboard management for users to track applications securely. Developed a responsive and accessible UI using React, TailwindCSS, and TypeScript.',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Puter.js', 'Claude AI'],
    image: '/src/assets/ai-resume-analyer.png',
    link: 'https://cv-intelli-check.vercel.app/',
    category: 'web'
  },
  {
    id: 'web-4',
    title: 'GlowSort Visualizer Studio',
    description: 'Developed an interactive sorting algorithm visualizer with real-time animations for Bubble, Merge, Quick, Insertion, and Selection Sort. Implemented customizable controls for speed, array size, start/pause/reset, and dynamic array generation. Created a responsive, modern UI using React, TailwindCSS, and Shadcn/UI.',
    techStack: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Shadcn/UI'],
    image: '/src/assets/algorithm-visulize.png',
    link: 'https://algorithm-visualizer-hazel-eight.vercel.app/',
    category: 'web'
  },

  // Mobile Projects
  {
    id: 'mobile-5',
    title: 'Event Management App with Inventory System',
    description: 'Built a comprehensive event management solution that streamlines event planning, decoration management, and inventory tracking. Integrated real-time updates and task assignment features for seamless event coordination. The app features JWT authentication, PostgreSQL database integration, and Firebase cloud services for notifications. Deployed backend on Heroku with Node.js/Express.js RESTful APIs, providing a robust and scalable solution for event planners.',
    techStack: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'PostgreSQL', 'Riverpod', 'JWT', 'Firebase', 'Heroku'],
    image: '/src/assets/inventory.png',
    link: 'https://github.com/Krut369/eventmanagement-app.git',
    category: 'mobile'
  },
  {
    id: 'mobile-1',
    title: 'CampusQuest',
    description: 'Architected a campus app used by 50+ students and faculty to manage 30+ courses, notes, and events. Integrated Supabase for auth, role-based content delivery, and secure handling of 500+ file uploads. Deployed on Android and iOS with consistent performance and responsive UI across devices.',
    techStack: ['Flutter', 'Supabase'],
    image: '/src/assets/campus.png',
    link: 'https://github.com/Krut369/campusquest.git',
    category: 'mobile'
  },
  {
    id: 'mobile-2',
    title: 'GuruNest',
    description: 'Engineered a smart learning app with role-based access, serving 100+ students and teachers. Built dashboards for progress tracking, quiz feedback, and mentor chat to boost learner engagement. Enabled instructors to upload 50+ video modules and 100+ quizzes, enhancing course quality. Integrated AI-driven quiz generation via Groq, reducing manual assessment effort by 60%.',
    techStack: ['Flutter', 'Supabase', 'Groq AI'],
    image: '/src/assets/gurunest.png',
    link: 'https://github.com/Krut369/guru_nest.git',
    category: 'mobile'
  },
  {
    id: 'mobile-3',
    title: 'Darkness Dungeon',
    description: 'Developed a 2D dungeon crawler game with smooth animations, collision detection, and enemy AI. Designed procedurally generated dungeon maps using Tiled, ensuring unique gameplay in each session. Implemented player combat system with melee attacks, health points, and inventory management. Optimized game performance for mobile, achieving 60 FPS on both Android and iOS devices.',
    techStack: ['Flutter', 'Flame', 'Tiled'],
    image: '/src/assets/darkes_dunken.png',
    link: 'https://github.com/Krut369/darkness_dungeon',
    category: 'mobile'
  },
  {
    id: 'mobile-4',
    title: 'HealthyHub',
    description: 'Developed a cross-platform health and wellness app with real-time BMI calculation and personalized fitness recommendations. Designed an adaptive UI that dynamically tailors diet and exercise plans based on user age, gender, height, and weight. Integrated progress tracking with interactive charts, empowering users to monitor and achieve health goals. Optimized performance for Android and iOS, ensuring smooth and responsive user experiences across devices.',
    techStack: ['Flutter', 'Dart'],
    image: '/src/assets/healthyhub.png',
    link: 'https://github.com/Krut369/healthyhub',
    category: 'mobile'
  },
  
];

export const experience: Experience[] = [
  {
    id: 'exp-1',
    company: 'Dhirubhai Ambani University (DAU)',
    position: 'Flutter Developer Intern',
    location: 'Gandhinagar, Gujarat',
    duration: 'May 2025 -- Aug 2025',
    description: [
      'Collaborated with Prof. Jayprakash Lalchandani to develop a cross-platform mobile app using Flutter and Dart.',
      'Designed adaptive and responsive UI components following Material Design 3, ensuring consistency across Android and iOS.',
      'Implemented an online course management module, enhancing student access to resources and course materials.',
      'Optimized state management with Riverpod, reducing boilerplate and improving app scalability and performance.'
    ],
    category: 'mobile'
  },
  {
    id: 'exp-2',
    company: 'Freelance Web Development',
    position: 'Full-Stack Web Developer',
    location: 'Remote',
    duration: 'Jan 2024 -- Present',
    description: [
      'Developed and deployed multiple full-stack web applications using MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Built responsive and accessible user interfaces with modern CSS frameworks like Tailwind CSS and Bootstrap.',
      'Implemented secure authentication systems using JWT and OAuth2, ensuring data protection and user privacy.',
      'Optimized application performance through code splitting, lazy loading, and database query optimization.',
      'Collaborated with clients to understand requirements and delivered custom solutions within deadlines.'
    ],
    category: 'web'
  },
  {
    id: 'exp-3',
    company: 'Open Source Contributions',
    position: 'Contributor',
    location: 'GitHub',
    duration: '2023 -- Present',
    description: [
      'Contributed to various open-source projects in React, TypeScript, and Flutter ecosystems.',
      'Fixed bugs, improved documentation, and added new features to popular repositories.',
      'Collaborated with developers worldwide through pull requests and code reviews.',
      'Gained experience in modern development workflows and best practices.'
    ],
    category: 'web'
  }
];

export const aboutContent = {
  mobile: {
    title: "Mobile App Developer",
    description: "I'm a passionate mobile app developer with expertise in creating beautiful, performant, and user-friendly mobile applications. I specialize in Flutter and React Native, bringing ideas to life across iOS and Android platforms. My focus is on delivering exceptional user experiences through clean code, intuitive design, and robust functionality.",
    highlights: [
      "Cross-platform mobile development",
      "Native iOS and Android development", 
      "UI/UX design implementation",
      "App Store optimization",
      "Firebase integration"
    ]
  },
  web: {
    title: "Web Developer",
    description: "I'm a full-stack web developer passionate about building modern, scalable web applications. From responsive front-end interfaces to robust back-end systems, I create digital solutions that solve real-world problems. I specialize in React ecosystem and modern JavaScript technologies.",
    highlights: [
      "Full-stack web development",
      "Responsive design implementation",
      "Database design and optimization",
      "API development and integration",
      "Performance optimization"
    ]
  }
};

export const technicalSkills = {
  programmingLanguages: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3/SCSS', 'Python', 'C++'],
  frameworksLibraries: ['React.js', 'React Router DOM', 'Angular', 'Angular Material', 'Bootstrap', 'Tailwind CSS'],
  stateManagement: ['Redux', 'Zustand', 'Context API'],
  authenticationSecurity: ['JWT', 'OAuth2', 'Input sanitization', 'Basic web security principles', 'Accessibility (a11y)'],
  databasesCloud: ['MySQL', 'Firebase Firestore', 'Supabase', 'AWS (S3)', 'SQLite'],
  developerTools: ['Git/GitHub', 'VS Code', 'Postman', 'Docker', 'Figma', 'Linux Shell', 'Jira', 'CI/CD pipelines'],
  testingMethodologies: ['Unit Testing (Jest, Karma, React Testing Library)', 'Agile/Scrum Practices'],
  coursework: ['Data Structures and Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'Software Engineering'],
  areasOfInterest: ['Frontend Development', 'Full-Stack Web Development', 'UI/UX Design', 'Responsive & Accessible Web Applications']
};