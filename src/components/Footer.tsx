import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container-padding py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">Muhammad Qasim</h3>
              <p className="text-muted-foreground leading-relaxed">
                Software & Web Developer passionate about creating modern, reliable, 
                and impactful digital solutions that drive business success.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-primary transition-smooth">
                    Skills & Expertise
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth">
                    Featured Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-muted-foreground hover:text-primary transition-smooth">
                    Work Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <a
                  href="mailto:mqasim5171@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Mail className="w-5 h-5" />
                  mqasim5171@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/qasim5171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com/mqasim5171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-center md:text-left">
                © {currentYear} Muhammad Qasim. All rights reserved.
              </p>
              
              <div className="flex gap-4">
                <a
                  href="mailto:mqasim5171@gmail.com"
                  className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-smooth"
                  aria-label="Email Muhammad Qasim"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/qasim5171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-smooth"
                  aria-label="Muhammad Qasim LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/mqasim5171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-smooth"
                  aria-label="Muhammad Qasim GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;