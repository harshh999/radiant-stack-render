import { Code2, Server, Database, Globe } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: <Code2 size={48} />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      color: "text-primary"
    },
    {
      icon: <Server size={48} />,
      title: "Backend Development", 
      description: "Node.js, Express, Python, REST APIs",
      color: "text-secondary"
    },
    {
      icon: <Database size={48} />,
      title: "Database Management",
      description: "PostgreSQL, MongoDB, Redis, Supabase",
      color: "text-accent"
    },
    {
      icon: <Globe size={48} />,
      title: "Cloud & DevOps",
      description: "AWS, Docker, CI/CD, Serverless",
      color: "text-primary-glow"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate full stack developer with 5+ years of experience building scalable 
            web applications. I love turning complex problems into simple, beautiful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="portfolio-card p-8 rounded-xl text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${item.color} mb-6 flex justify-center transition-transform duration-300 group-hover:scale-110`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 portfolio-card p-8 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                My Journey
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Started as a curious student who loved solving problems with code. 
                Over the years, I've evolved into a full stack developer who thrives 
                on creating impactful digital solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying updated 
                with the latest technologies. My goal is to build applications that 
                not only function perfectly but also provide exceptional user experiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-glow mb-2">24/7</div>
                <div className="text-muted-foreground">Learning Mindset</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;