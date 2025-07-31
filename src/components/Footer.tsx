import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Dev
              </span>
              Portfolio
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Crafting exceptional digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="space-y-3">
              <a 
                href="mailto:hello@developer.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail size={18} />
                <span>hello@developer.com</span>
              </a>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} DevPortfolio. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center space-x-1">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;