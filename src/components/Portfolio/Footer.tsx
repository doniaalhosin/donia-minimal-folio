import { Mail, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/donia-alhosin"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/donia-alhosin"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:donia.alhosin@email.com"
    }
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Me */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Passionate WordPress developer creating modern, responsive websites 
              that deliver exceptional user experiences and drive business success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Courses', 'Projects'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors interactive"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all interactive"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Donia Alhosin Mohamed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};