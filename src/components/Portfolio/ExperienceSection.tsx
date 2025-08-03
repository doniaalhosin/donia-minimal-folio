export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior WordPress Developer",
      company: "Freelance",
      period: "2022 - Present",
      achievements: [
        "Delivered 30+ custom WordPress websites for diverse clients",
        "Specialized in e-commerce solutions using WooCommerce",
        "Achieved 98% client satisfaction rate with on-time delivery"
      ]
    },
    {
      title: "Web Developer",
      company: "Digital Agency",
      period: "2021 - 2022",
      achievements: [
        "Developed responsive websites using modern web technologies",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Optimized website performance improving load times by 40%"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Tech Startup",
      period: "2020 - 2021",
      achievements: [
        "Built interactive web applications using React and JavaScript",
        "Maintained and updated existing WordPress installations",
        "Learned best practices in version control and team collaboration"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Local Business",
      period: "2019 - 2020",
      achievements: [
        "Created first WordPress website from scratch",
        "Gained experience in HTML, CSS, and basic PHP",
        "Developed passion for web development and user experience"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-section-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">
            My professional journey in web development and WordPress expertise.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-muted-foreground font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-muted-foreground flex items-start">
                      <span className="text-accent mr-2 mt-1.5">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};