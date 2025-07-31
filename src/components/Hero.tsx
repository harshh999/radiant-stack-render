import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
            Full Stack
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
              Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies.
            <br />
            Specializing in React, Node.js, and cloud solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-glow-primary"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-3 text-lg font-semibold"
            >
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow-secondary"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;