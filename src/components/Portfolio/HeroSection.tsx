import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Linkedin, Github, ArrowDown } from 'lucide-react';

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

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-hero-gradient-start to-hero-gradient-end"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-accent rounded-full opacity-50 animate-pulse delay-500"></div>
        
        {/* Modern gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl animate-pulse delay-3000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8 fade-in-up">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-accent">Available for Projects</span>
        </div>

        {/* Modern typography hierarchy */}
        <div className="space-y-4 mb-8">
          <h1 className="text-6xl md:text-4xl font-bold text-primary fade-in-up delay-1">
            <span className="">DONIA</span>
            <span className=" text-5xl md:text-7xl font-light text-muted-foreground">ALHOSIN</span>
          </h1>
          
          {/* Modern subtitle with gradient */}
          <div className="relative fade-in-up delay-2">
            <div className="h-px w-16 bg-gradient-to-r from-accent to-transparent mx-auto mb-2"></div>
            <p className="text-lg md:text-xl text-muted-foreground">
              Web Developer & UI Specialist
            </p>
          </div>
        </div>

        {/* Modernized contact info */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 fade-in-up delay-3">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div className="group flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon size={16} className="text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.text}</span>
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

        {/* Modern CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in-up delay-4">
          <Button 
            variant="cta" 
            size="xl"
            onClick={scrollToProjects}
            className="interactive min-w-[220px] group"
          >
            <span>Explore My Work</span>
            <ArrowDown size={18} className="ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            variant="cta-outline" 
            size="xl"
            className="interactive min-w-[220px]"
            onClick={() => {
              window.open('/cv-donia-alhosin.pdf', '_blank');
            }}
          >
            Download Resume
          </Button>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout}
          className="interactive animate-bounce hover:animate-none transition-all fade-in-up delay-5"
          aria-label="Scroll to about section"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
            <span className="text-xs font-medium tracking-wider uppercase">Scroll Down</span>
            <ArrowDown size={20} />
          </div>
        </button>
      </div>
    </section>
  );
};