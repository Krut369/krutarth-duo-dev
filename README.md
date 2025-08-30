# 🚀 Krutarth Duo Dev - Portfolio

A modern, responsive portfolio website showcasing both **Web Development** and **Mobile Development** skills. Built with React, TypeScript, and Tailwind CSS for a professional and engaging user experience.

## ✨ Features

### 🎯 **Dual Portfolio Modes**
- **Web Development Portfolio** - Showcasing web technologies and projects
- **Mobile Development Portfolio** - Highlighting mobile app development skills
- Seamless switching between modes with dynamic content

### 🎨 **Modern Design**
- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme** - Automatic theme switching
- **Smooth Animations** - Engaging hover effects and transitions
- **Professional UI** - Built with shadcn/ui components

### 🛠️ **Interactive Components**
- **Hero Section** - Compelling introduction with call-to-action
- **Skills Showcase** - Professional technology icons from React Icons
- **Project Gallery** - Beautiful project cards with filtering
- **Experience Timeline** - Professional work history presentation
- **Contact Form** - Interactive contact section
- **Responsive Navigation** - Mobile-friendly navigation menu

## 🚀 Technologies Used

### **Frontend Framework**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **CSS Animations** - Smooth transitions and hover effects

### **Icons & Assets**
- **React Icons** - Professional technology icons (SiJavascript, SiReact, SiFlutter, etc.)
- **Custom Gradients** - Beautiful color schemes
- **Responsive Images** - Optimized for all screen sizes

### **Development Tools**
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing
- **Git** - Version control

## 📱 Portfolio Modes

### **Web Development Mode**
- JavaScript (ES6+), TypeScript, HTML5, CSS3/SCSS
- React.js, Angular, Bootstrap, Tailwind CSS
- Redux, Context API, React Router
- MongoDB, MySQL, Firebase, Supabase, AWS
- Git, VS Code, Docker, Figma, Postman

### **Mobile Development Mode**
- Flutter, Dart, React Native
- Material Design 3, Flame Engine
- Tiled Maps, Groq AI integration
- Mobile-specific testing and deployment

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd krutarth-duo-dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:8081` (or the port shown in terminal)
   - The portfolio will automatically reload when you make changes

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Project gallery
│   ├── Experience.tsx  # Work experience
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── data/               # Portfolio data
│   └── portfolioData.ts # Skills, projects, experience data
├── hooks/              # Custom React hooks
├── context/            # React context providers
├── lib/                # Utility functions
└── pages/              # Page components
```

## 🎨 Customization

### **Adding New Skills**
Edit `src/data/portfolioData.ts` to add new skills with appropriate icons:

```typescript
export const skills: Skill[] = [
  {
    name: 'New Technology',
    icon: 'IconName', // Must match iconMap in Skills.tsx
    category: 'web' // or 'mobile'
  }
];
```

### **Adding New Projects**
Add projects to the `projects` array in the same file:

```typescript
export const projects: Project[] = [
  {
    id: 'unique-id',
    title: 'Project Name',
    description: 'Project description',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    image: 'project-image.png',
    link: 'https://project-url.com',
    category: 'web' // or 'mobile'
  }
];
```

### **Modifying Icons**
Update the `iconMap` in `src/components/Skills.tsx` to use different React Icons:

```typescript
import { SiNewIcon } from 'react-icons/si';

const iconMap = {
  'IconName': <SiNewIcon className="h-8 w-8" />
};
```

## 🌐 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deploy Options**
- **Vercel** - Recommended for React apps
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting for open source
- **AWS S3** - Scalable cloud hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Krutarth Duo Dev**
- Portfolio showcasing both Web and Mobile development skills
- Built with modern technologies and best practices
- Professional design with smooth animations

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful UI components
- **React Icons** for professional technology icons
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development experience

---

⭐ **Star this repository if you found it helpful!**
