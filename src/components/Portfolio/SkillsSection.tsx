import { Code, Palette, Database, Globe, Smartphone, Layers } from 'lucide-react';

export const SkillsSection = () => {
  const skills = [
    {
      icon: Code,
      title: "WordPress Development",
      description: "Custom themes, plugins, and full website development"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern HTML5, CSS3, JavaScript, and React applications"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design with focus on usability and aesthetics"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display on all devices"
    },
    {
      icon: Database,
      title: "Backend Integration",
      description: "PHP, MySQL, and API integrations for dynamic functionality"
    },
    {
      icon: Layers,
      title: "Frontend Frameworks",
      description: "React, Tailwind CSS, and modern development tools"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="portfolio-card bg-card p-6 rounded-xl border border-border text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Icon size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};