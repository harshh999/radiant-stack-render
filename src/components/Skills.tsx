const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", 
        "SCSS", "JavaScript", "HTML5", "CSS3", "Framer Motion"
      ]
    },
    {
      title: "Backend", 
      skills: [
        "Node.js", "Express", "Python", "Django", "FastAPI",
        "REST APIs", "GraphQL", "Serverless", "Microservices", "Socket.io"
      ]
    },
    {
      title: "Database",
      skills: [
        "PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase",
        "MySQL", "Prisma", "Mongoose", "SQL", "NoSQL"
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        "AWS", "Docker", "Git", "CI/CD", "Linux", "Kubernetes",
        "Vercel", "Netlify", "Jest", "Cypress"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Constantly evolving toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="portfolio-card p-8 rounded-xl"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-badge px-4 py-2 rounded-lg text-center text-sm font-medium"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Rust", "WebAssembly", "Three.js", "AI/ML", "Blockchain"].map((skill, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30 text-primary font-medium hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;