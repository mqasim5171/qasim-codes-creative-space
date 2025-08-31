import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Professional Cleaning Services",
      description: "A comprehensive cleaning services website for Sydney-based business featuring drone-powered solutions, pressure washing, window cleaning, and solar panel maintenance. Built with modern design and conversion-focused user experience.",
      technologies: ["React", "Tailwind CSS", "Modern UI/UX"],
      liveUrl: "https://lighthearted-lollipop-5aeb49.netlify.app/",
      category: "Business Website"
    },
    {
      title: "Bookstore Client MERN",
      description: "Full-featured bookstore application built with the MERN stack, featuring user authentication, book catalog management, shopping cart functionality, and secure payment integration.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      liveUrl: "https://bookstore-client-mern.netlify.app/",
      category: "E-commerce Platform"
    },
    {
      title: "Bookstore 2 Client",
      description: "Enhanced version of the bookstore platform with improved performance, advanced search capabilities, and better user experience. Features modern design patterns and optimized functionality.",
      technologies: ["React", "Advanced UI/UX", "Performance Optimization"],
      liveUrl: "https://bookstore2-client.netlify.app/",
      category: "E-commerce Platform"
    },
    {
      title: "RinseWise Laundry Services",
      description: "Professional laundry service website featuring pickup & delivery booking system, service management, customer testimonials, and responsive design for enhanced user engagement.",
      technologies: ["React", "Service Booking", "Responsive Design"],
      liveUrl: "https://laundrysite-web.netlify.app/",
      category: "Service Platform"
    },
    {
      title: "Paisley Jewels",
      description: "Elegant e-commerce platform for handcrafted jewelry featuring product catalogs, detailed product pages, and seamless shopping experience with beautiful visual design.",
      technologies: ["E-commerce", "Product Management", "Modern Design"],
      liveUrl: "https://paisleyjewels.store/",
      category: "E-commerce Platform"
    },
    {
      title: "Mexivida USA",
      description: "Health and wellness e-commerce platform featuring organic supplements, subscription services, customer reviews, and comprehensive product information with modern design.",
      technologies: ["E-commerce", "Subscription System", "Health Platform"],
      liveUrl: "https://mexividausa.com/",
      category: "Health & Wellness"
    },
    {
      title: "Care at Home",
      description: "Healthcare service platform providing home care solutions, service booking, caregiver profiles, and comprehensive care management system with user-friendly interface.",
      technologies: ["Healthcare Platform", "Service Management", "User Experience"],
      liveUrl: "https://ccareathome.com/",
      category: "Healthcare Platform"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of live projects demonstrating expertise in modern web development, 
            e-commerce solutions, and digital transformation across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover-lift card-shadow bg-card border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;