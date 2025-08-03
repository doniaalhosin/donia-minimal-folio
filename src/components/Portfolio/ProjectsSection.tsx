import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

type ProjectFilter = 'all' | 'native' | 'wordpress' | 'ui';

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectFilter;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce WordPress Site",
      description: "Custom WooCommerce solution with advanced product filtering and payment integration.",
      category: "wordpress",
      technologies: ["WordPress", "WooCommerce", "PHP", "CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      title: "React Portfolio Website",
      description: "Modern, responsive portfolio built with React and TypeScript featuring smooth animations.",
      category: "native",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Business Website Redesign",
      description: "Complete UI/UX redesign and development for a professional services company.",
      category: "ui",
      technologies: ["Figma", "WordPress", "Custom CSS", "JavaScript"],
      liveUrl: "https://example.com"
    },
    {
      id: 4,
      title: "Custom WordPress Theme",
      description: "Bespoke WordPress theme with custom post types and advanced customizer options.",
      category: "wordpress",
      technologies: ["WordPress", "PHP", "ACF", "SCSS"],
      githubUrl: "https://github.com"
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Full-stack web application for project and task management with team collaboration features.",
      category: "native",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 6,
      title: "Restaurant Website UI",
      description: "Elegant restaurant website design with online menu and reservation system interface.",
      category: "ui",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      liveUrl: "https://example.com"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'native', label: 'Native Web' },
    { key: 'wordpress', label: 'WordPress' },
    { key: 'ui', label: 'UI Design' }
  ] as const;

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent work in WordPress development, web applications, and UI design.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? "cta" : "outline"}
                onClick={() => setActiveFilter(filter.key)}
                className="interactive"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card bg-card rounded-xl border border-border overflow-hidden"
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                <div className="text-accent/30 font-bold text-lg">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      variant="cta"
                      size="sm"
                      asChild
                      className="interactive flex-1"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="interactive flex-1"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};