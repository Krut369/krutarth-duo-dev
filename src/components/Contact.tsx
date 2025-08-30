import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, FileText, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'krutarth.solanki@email.com',
      href: 'mailto:krutarthsolanki9@email.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/krutarthsolanki',
      href: 'https://www.linkedin.com/in/krutarth21'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/krutarthsolanki',
      href: 'https://github.com/krut369'
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download Resume',
      href: 'https://drive.google.com/drive/folders/1cIqi6fR5aWtdb-7t9Wq427fF7zMZ5sYu?usp=drive_link'
    },
    {
      icon: Target,
      label: 'Areas of Interest',
      value: 'Mobile & Web Development, UI/UX Design, AI Integration',
      href: null
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gujarat, India',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Have a project in mind? I'd love to discuss how we can bring your ideas to life. 
              Let's connect and create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you need a mobile app, web application, or have questions about development, 
                  feel free to reach out.
                </p>
              </div>

                             <div className="space-y-4">
                 {contactInfo.map((item) => {
                   const IconComponent = item.icon;
                   return (
                     <div key={item.label} className="flex items-start gap-3 sm:gap-4 group">
                       <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-normal flex-shrink-0">
                         <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                       </div>
                       <div className="min-w-0 flex-1">
                         <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                         {item.href ? (
                           <a
                             href={item.href}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="text-foreground hover:text-primary transition-colors duration-normal font-medium text-sm sm:text-base break-words"
                           >
                             {item.value}
                           </a>
                         ) : (
                           <div className="text-foreground font-medium text-sm sm:text-base break-words leading-relaxed">
                             {item.value}
                           </div>
                         )}
                       </div>
                     </div>
                   );
                 })}
               </div>


            </div>

            {/* Contact Form */}
            <div className="bg-gradient-card p-6 sm:p-8 rounded-xl shadow-card animate-scale-in">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-normal text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-normal text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-normal text-sm sm:text-base"
                    placeholder="Project discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-normal resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:bg-gradient-secondary text-primary-foreground font-medium py-2.5 sm:py-3 rounded-lg transition-all duration-normal hover:scale-105 shadow-card hover:shadow-card-hover text-sm sm:text-base"
                >
                  Send Message
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};