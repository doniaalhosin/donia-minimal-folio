export const AboutSection = () => {
  const aboutItems = [
    {
      title: "Career Objective",
      content: "Passionate WordPress and web developer with expertise in creating modern, responsive websites and user-friendly interfaces. Dedicated to delivering high-quality solutions that meet client needs and exceed expectations.",
      span: "md:col-span-2"
    },
    {
      title: "Education",
      content: "Bachelor's Degree in Computer Science with focus on web development and user interface design. Continuously learning new technologies and best practices.",
      span: "md:col-span-1"
    },
    {
      title: "Key Technical Skills",
      content: "WordPress Development, Custom Theme Creation, PHP, JavaScript, React, HTML5, CSS3, Responsive Design, UI/UX Design",
      span: "md:col-span-1"
    },
    {
      title: "Personal Skills",
      content: "Problem Solving, Creative Thinking, Team Collaboration, Project Management, Client Communication, Attention to Detail",
      span: "md:col-span-1"
    },
    {
      title: "Languages",
      content: "Arabic (Native), English (Fluent), Basic German",
      span: "md:col-span-1"
    },
    {
      title: "Achievements & Awards",
      content: "Successfully delivered 50+ WordPress projects, Recognized for exceptional client satisfaction, Featured developer on freelancing platforms",
      span: "md:col-span-2"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for web development.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={`portfolio-card bg-card p-6 rounded-xl border border-border shadow-sm ${item.span}`}
            >
              <h3 className="text-lg font-semibold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};