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

export const skills: Skill[] = [
  // Mobile Development Skills
  { name: 'Flutter', icon: '📱', category: 'mobile' },
  { name: 'React Native', icon: '⚛️', category: 'mobile' },
  { name: 'Swift', icon: '🍎', category: 'mobile' },
  { name: 'Kotlin', icon: '🤖', category: 'mobile' },
  { name: 'Firebase', icon: '🔥', category: 'mobile' },
  
  // Web Development Skills
  { name: 'HTML', icon: '🌐', category: 'web' },
  { name: 'CSS', icon: '🎨', category: 'web' },
  { name: 'JavaScript', icon: '⚡', category: 'web' },
  { name: 'React', icon: '⚛️', category: 'web' },
  { name: 'Node.js', icon: '🟢', category: 'web' },
  { name: 'MySQL', icon: '🗄️', category: 'web' },
  { name: 'MongoDB', icon: '🍃', category: 'web' },
];

export const projects: Project[] = [
  // Mobile Projects
  {
    id: 'mobile-1',
    title: 'TaskFlow Mobile',
    description: 'A beautiful task management app built with Flutter featuring real-time sync, custom animations, and intuitive user interface.',
    techStack: ['Flutter', 'Firebase', 'Dart'],
    image: '/src/assets/mobile-project-1.jpg',
    link: '#',
    category: 'mobile'
  },
  {
    id: 'mobile-2',
    title: 'ShopEase',
    description: 'React Native e-commerce application with advanced features like wishlist, cart management, and secure payment integration.',
    techStack: ['React Native', 'Redux', 'Node.js'],
    image: '/src/assets/mobile-project-2.jpg',
    link: '#',
    category: 'mobile'
  },
  {
    id: 'mobile-3',
    title: 'FitTracker Pro',
    description: 'iOS fitness tracking app with health analytics, workout planning, and social features for fitness enthusiasts.',
    techStack: ['Swift', 'Core Data', 'HealthKit'],
    image: '/src/assets/mobile-project-3.jpg',
    link: '#',
    category: 'mobile'
  },
  
  // Web Projects
  {
    id: 'web-1',
    title: 'Analytics Dashboard',
    description: 'Modern web application dashboard with real-time data visualization, interactive charts, and responsive design.',
    techStack: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    image: '/src/assets/web-project-1.jpg',
    link: '#',
    category: 'web'
  },
  {
    id: 'web-2',
    title: 'Portfolio Showcase',
    description: 'Responsive portfolio website with smooth animations, dark mode support, and optimized performance.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/src/assets/web-project-2.jpg',
    link: '#',
    category: 'web'
  },
  {
    id: 'web-3',
    title: 'Task Management System',
    description: 'Full-stack web application for project management with team collaboration, real-time updates, and advanced filtering.',
    techStack: ['React', 'Node.js', 'Express', 'MySQL'],
    image: '/src/assets/web-project-3.jpg',
    link: '#',
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