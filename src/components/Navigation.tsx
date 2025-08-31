
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ContactForm from "./ContactForm";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border card-shadow" 
        : "bg-background/80 backdrop-blur-sm"
    }`}>
      <div className="container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-xl md:text-2xl font-heading font-bold text-primary hover:text-primary-hover transition-smooth"
          >
            Muhammad Qasim
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/90 hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </button>
            ))}
            <ContactForm>
              <Button variant="default" size="sm">
                Get in Touch
              </Button>
            </ContactForm>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground/90 hover:text-primary transition-smooth"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border card-shadow">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-smooth font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <ContactForm>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get in Touch
                </Button>
              </ContactForm>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
