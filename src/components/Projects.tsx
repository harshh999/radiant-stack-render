import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features user authentication, product management, and payment processing.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and advanced filtering capabilities.",
      technologies: ["Next.js", "TypeScript", "Supabase", "Socket.io", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard with data visualization, real-time metrics, and customizable reports for business intelligence.",
      technologies: ["Vue.js", "Python", "FastAPI", "MongoDB", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Social Media Platform",
      description: "Modern social media platform with user profiles, real-time messaging, content sharing, and advanced privacy controls.",
      technologies: ["React", "Express", "GraphQL", "Redis", "AWS"],
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "AI-Powered Chatbot",
      description: "Intelligent chatbot with natural language processing, machine learning capabilities, and seamless integration with multiple platforms.",
      technologies: ["Python", "TensorFlow", "Flask", "OpenAI API", "Docker"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support, transaction history, and advanced security features for digital asset management.",
      technologies: ["React Native", "Web3.js", "Ethereum", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across different technologies and domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="portfolio-card rounded-xl overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;