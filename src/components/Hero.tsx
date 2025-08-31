import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    // This would link to the actual CV file
    window.open("#", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-padding text-center text-white animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 animate-float">
            <img
              src={profilePhoto}
              alt="Muhammad Qasim - Professional Headshot"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white/30 hero-shadow"
            />
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
            Muhammad Qasim
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white/90">
            Software & Web Developer | AI Enthusiast
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Building reliable, modern, and impactful digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="hero"
              onClick={handleDownloadCV}
              className="group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="hero"
              className="border-white/30 text-white hover:bg-white hover:text-primary"
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="mailto:mqasim5171@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth hover:scale-110"
              aria-label="Email Muhammad Qasim"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/qasim5171"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth hover:scale-110"
              aria-label="Muhammad Qasim LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/mqasim5171"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth hover:scale-110"
              aria-label="Muhammad Qasim GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-white/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;