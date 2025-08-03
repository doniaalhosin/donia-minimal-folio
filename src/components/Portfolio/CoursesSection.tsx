export const CoursesSection = () => {
  const courses = [
    {
      name: "Advanced WordPress Development",
      provider: "WordPress Academy",
      period: "Jan 2023 - Mar 2023",
      skillsGained: [
        "Custom plugin development and WordPress hooks",
        "Advanced theme customization and child themes",
        "WordPress REST API integration and custom endpoints",
        "Performance optimization and caching strategies"
      ]
    },
    {
      name: "React & Modern JavaScript",
      provider: "Frontend Masters",
      period: "Sep 2022 - Dec 2022",
      skillsGained: [
        "React Hooks and Context API for state management",
        "Modern ES6+ JavaScript features and async programming",
        "Component-based architecture and reusable design patterns",
        "Testing with Jest and React Testing Library"
      ]
    },
    {
      name: "UI/UX Design Fundamentals",
      provider: "Design Institute",
      period: "May 2022 - Aug 2022",
      skillsGained: [
        "User research methods and persona development",
        "Wireframing and prototyping with Figma",
        "Color theory, typography, and visual hierarchy",
        "Usability testing and accessibility best practices"
      ]
    },
    {
      name: "Full-Stack Web Development",
      provider: "Code Academy",
      period: "Jan 2021 - Jun 2021",
      skillsGained: [
        "Frontend development with HTML5, CSS3, and JavaScript",
        "Backend development with Node.js and Express",
        "Database design and management with MySQL",
        "Version control with Git and collaborative development"
      ]
    },
    {
      name: "Responsive Web Design Certification",
      provider: "freeCodeCamp",
      period: "Aug 2020 - Dec 2020",
      skillsGained: [
        "Mobile-first responsive design principles",
        "CSS Grid and Flexbox for modern layouts",
        "CSS animations and transitions",
        "Cross-browser compatibility and web standards"
      ]
    }
  ];

  return (
    <section id="courses" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 fade-in-up">
            Courses & Training
          </h2>
          <p className="text-xl text-muted-foreground fade-in-up delay-1">
            Continuous learning and skill development through professional courses and certifications.
          </p>
        </div>

        <div className="space-y-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`timeline-item fade-in-up delay-${Math.min(index + 2, 3)}`}
            >
              <div className="portfolio-card bg-card p-6 rounded-xl border border-border shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">
                      {course.name}
                    </h3>
                    <p className="text-accent font-medium">
                      {course.provider}
                    </p>
                  </div>
                  <span className="text-muted-foreground font-medium mt-2 md:mt-0 text-sm">
                    {course.period}
                  </span>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-primary mb-3">Skills Gained:</h4>
                  <ul className="space-y-2">
                    {course.skillsGained.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-muted-foreground flex items-start text-sm">
                        <span className="text-accent mr-2 mt-1.5 text-xs">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};