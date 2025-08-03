import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';

export const HeroSection = () => {
  const contactInfo = [
    { icon: MapPin, text: 'Egypt', href: null },
    { icon: Phone, text: '+20 106 164 2356', href: 'tel:+201061642356' },
    { icon: Mail, text: 'donia.alhosin@email.com', href: 'mailto:donia.alhosin@email.com' },
    { icon: Linkedin, text: 'LinkedIn', href: 'https://linkedin.com/in/donia-alhosin' },
    { icon: Github, text: 'GitHub', href: 'https://github.com/donia-alhosin' },
  ];

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 fade-in-up">
          DONIA ALHOSIN
          <br />
          <span className="text-4xl md:text-6xl">MOHAMED</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light fade-in-up delay-1">
          WordPress Developer | Web Developer & UI Specialist
        </p>

        {/* Contact info inline list */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 fade-in-up delay-2">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Icon size={18} />
                <span className="text-sm">{item.text}</span>
              </div>
            );

            return item.href ? (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="interactive"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-3">
          <Button 
            variant="cta" 
            size="lg"
            onClick={scrollToProjects}
            className="interactive min-w-[200px]"
          >
            View My Work
          </Button>
          <Button 
            variant="cta-outline" 
            size="lg"
            className="interactive min-w-[200px]"
            onClick={() => {
              // This would typically download a CV file
              window.open('/cv-donia-alhosin.pdf', '_blank');
            }}
          >
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};