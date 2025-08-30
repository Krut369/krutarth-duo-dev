import React from 'react';
import { usePortfolioMode } from '@/hooks/usePortfolioMode';
import { skills } from '@/data/portfolioData';
import { 
  // Programming Languages
  SiJavascript, SiTypescript, SiHtml5, SiCss3, SiPython, SiCplusplus,
  // Frameworks & Libraries
  SiReact, SiAngular, SiBootstrap, SiTailwindcss, SiRedux,
  // Mobile Development
  SiFlutter, SiDart,
  // Databases & Cloud
  SiMongodb, SiMysql, SiFirebase, SiSupabase, SiAmazon, SiSqlite,
  // Developer Tools
  SiGit, SiGithub, SiDocker, SiFigma, SiPostman,
  // Testing & Security
  SiJest, SiAuth0,
  // Mobile Specific
  SiMaterialdesign, SiGo, SiTile,
  // Additional
  SiNpm, SiYarn, SiWebpack, SiVite, SiNodedotjs, SiExpress
} from 'react-icons/si';

export const Skills: React.FC = () => {
  const { mode } = usePortfolioMode();
  const filteredSkills = skills.filter(skill => skill.category === mode);

  // Icon mapping for dynamic icon rendering with exact technology icons
  const iconMap: { [key: string]: React.ReactNode } = {
    // Core Technologies
    'Zap': <SiJavascript className="h-8 w-8" />,
    'FileType': <SiTypescript className="h-8 w-8" />,
    'Code': <SiHtml5 className="h-8 w-8" />,
    'Palette': <SiCss3 className="h-8 w-8" />,
    'Code2': <SiPython className="h-8 w-8" />,
    'Settings': <SiCplusplus className="h-8 w-8" />,
    
    // Frameworks & Libraries
    'Atom': <SiReact className="h-8 w-8" />,
    'Route': <SiReact className="h-8 w-8" />,
    'Circle': <SiAngular className="h-8 w-8" />,
    'Target': <SiBootstrap className="h-8 w-8" />,
    'Wind': <SiTailwindcss className="h-8 w-8" />,
    
    // State Management
    'Package': <SiRedux className="h-8 w-8" />,
    'Package2': <SiRedux className="h-8 w-8" />,
    'Link': <SiReact className="h-8 w-8" />,
    
    // Authentication & Security
    'Key': <SiAuth0 className="h-8 w-8" />,
    'Lock': <SiAuth0 className="h-8 w-8" />,
    'Shield': <SiAuth0 className="h-8 w-8" />,
    'Accessibility': <SiReact className="h-8 w-8" />,
    
    // Databases & Cloud
    'Database': <SiMongodb className="h-8 w-8" />,
    'Flame': <SiFirebase className="h-8 w-8" />,
    'Rocket': <SiSupabase className="h-8 w-8" />,
    'CloudIcon': <SiAmazon className="h-8 w-8" />,
    'HardDrive': <SiSqlite className="h-8 w-8" />,
    
    // Developer Tools
    'GitBranch': <SiGit className="h-8 w-8" />,
    'Monitor': <SiNodedotjs className="h-8 w-8" />,
    'Send': <SiPostman className="h-8 w-8" />,
    'Box': <SiDocker className="h-8 w-8" />,
    'PenTool': <SiFigma className="h-8 w-8" />,
    'Terminal': <SiNodedotjs className="h-8 w-8" />,
    'ClipboardList': <SiNpm className="h-8 w-8" />,
    'RefreshCw': <SiYarn className="h-8 w-8" />,
    
    // Testing & Methodologies
    'TestTube': <SiJest className="h-8 w-8" />,
    'Search': <SiJest className="h-8 w-8" />,
    'BarChart3': <SiJest className="h-8 w-8" />,
    
    // Mobile Development
    'Smartphone': <SiReact className="h-8 w-8" />,
    'Waves': <SiFlutter className="h-8 w-8" />,
    'Navigation': <SiDart className="h-8 w-8" />,
    'Puzzle': <SiMaterialdesign className="h-8 w-8" />,
    'Gamepad2': <SiGo className="h-8 w-8" />,
    'Map': <SiTile className="h-8 w-8" />,
    'Bot': <SiGo className="h-8 w-8" />,
  };

  // Group skills by category for better organization
  const skillCategories = {
    'Core Technologies': filteredSkills.filter(skill => 
      ['Flutter', 'Dart', 'React Native', 'React.js', 'TypeScript', 'JavaScript (ES6+)'].includes(skill.name)
    ),
    'Frameworks & Libraries': filteredSkills.filter(skill => 
      ['Angular', 'Angular Material', 'Bootstrap', 'Tailwind CSS', 'React Router DOM'].includes(skill.name)
    ),
    'State Management': filteredSkills.filter(skill => 
      ['Redux', 'Zustand', 'Context API', 'Riverpod', 'GetX', 'Provider'].includes(skill.name)
    ),
    'Backend & Database': filteredSkills.filter(skill => 
      ['MongoDB', 'MySQL', 'Firebase', 'Supabase', 'AWS S3', 'SQLite'].includes(skill.name)
    ),
    'Development Tools': filteredSkills.filter(skill => 
      ['Git/GitHub', 'VS Code', 'Docker', 'Figma', 'Postman'].includes(skill.name)
    ),
    'Testing & Security': filteredSkills.filter(skill => 
      ['Jest', 'Karma', 'React Testing Library', 'JWT', 'OAuth2', 'Web Security'].includes(skill.name)
    ),
    'Mobile Specific': filteredSkills.filter(skill => 
      ['Material Design 3', 'Flame Engine', 'Tiled Maps', 'Groq AI'].includes(skill.name)
    )
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Core Technologies': <SiJavascript className="h-5 w-5" />,
      'Frameworks & Libraries': <SiReact className="h-5 w-5" />,
      'State Management': <SiRedux className="h-5 w-5" />,
      'Backend & Database': <SiMongodb className="h-5 w-5" />,
      'Development Tools': <SiGit className="h-5 w-5" />,
      'Testing & Security': <SiJest className="h-5 w-5" />,
      'Mobile Specific': <SiFlutter className="h-5 w-5" />
    };
    return iconMap[category] || <SiReact className="h-5 w-5" />;
  };

  // Function to render skill icon
  const renderSkillIcon = (iconName: string) => {
    return iconMap[iconName] || <SiReact className="h-8 w-8" />;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {mode === 'mobile' ? 'Mobile Development' : 'Web Development'} Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-3xl mx-auto text-lg">
              {mode === 'mobile' 
                ? 'Technologies and frameworks I use to build amazing mobile applications'
                : 'Technologies and tools I use to create modern web applications'
              }
            </p>
          </div>

          {/* Skills by Category */}
          <div className="space-y-12 animate-scale-in">
            {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => {
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 150}ms` }}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="text-primary">
                      {getCategoryIcon(category)}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="group relative bg-gradient-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in border border-border/50 overflow-hidden"
                        style={{ animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms` }}
                      >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Skill Content */}
                        <div className="relative z-10 text-center space-y-4">
                          {/* Icon */}
                          <div className="text-primary group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                            {renderSkillIcon(skill.icon)}
                          </div>
                          
                          {/* Skill Name */}
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm leading-tight">
                            {skill.name}
                          </h4>
                        </div>

                        {/* Hover Effect Border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="bg-gradient-card p-8 rounded-2xl shadow-card max-w-3xl mx-auto border border-border/50">
              <div className="flex items-center justify-center gap-3 mb-4">
                <SiReact className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  Always Learning & Growing
                </h3>
                <SiReact className="h-6 w-6 text-primary" />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
                tools, and best practices in {mode === 'mobile' ? 'mobile' : 'web'} development. 
                Every project is an opportunity to learn something new and improve my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};