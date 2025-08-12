import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'krutarth.solanki@email.com',
      href: 'mailto:krutarth.solanki@email.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/krutarthsolanki',
      href: 'https://linkedin.com/in/krutarthsolanki'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/krutarthsolanki',
      href: 'https://github.com/krutarthsolanki'
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

          <div className="grid lg:grid-cols-2 gap-12">
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
                    <div key={item.label} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-normal">
                        <IconComponent className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors duration-normal font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <h4 className="text-lg font-medium text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-12 h-12 p-0 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-normal"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-12 h-12 p-0 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-normal"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-12 h-12 p-0 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-normal"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-card p-8 rounded-xl shadow-card animate-scale-in">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-normal"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-normal"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-normal"
                    placeholder="Project discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-normal resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:bg-gradient-secondary text-primary-foreground font-medium py-3 rounded-lg transition-all duration-normal hover:scale-105 shadow-card hover:shadow-card-hover"
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