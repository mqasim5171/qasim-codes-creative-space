import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  category: string;
  codeUrl?: string; // optional
};

const Projects = () => {
  const projects: Project[] = [
    // ⭐ New client project (based on the provided live site)
    {
      title: "Usman Zafar — Portfolio Website",
      description:
        "A clean, responsive personal portfolio that highlights projects and services with a modern hero, smooth section transitions, and conversion-focused CTAs. Built with a minimal aesthetic, consistent typography, and a well-structured layout for fast scanning.",
      technologies: ["React", "Tailwind CSS", "Responsive Layout", "Smooth Scrolling", "Accessible UI"],
      liveUrl: "https://stalwart-cat-f9d3c7.netlify.app/",
      category: "Personal Portfolio",
      // codeUrl: "" // add a repo URL when available to show the Code button
    },

    {
      title: "Professional Cleaning Services",
      description:
        "A comprehensive cleaning services website for a Sydney-based business featuring drone-powered solutions, pressure washing, window cleaning, and solar panel maintenance. Built with modern design and conversion-focused UX.",
      technologies: ["React", "Tailwind CSS", "Modern UI/UX"],
      liveUrl: "https://lighthearted-lollipop-5aeb49.netlify.app/",
      category: "Business Website"
    },
    {
      title: "Bookstore Client MERN",
      description:
        "Full-featured bookstore app with user authentication, catalog management, shopping cart, and secure checkout—implemented on the MERN stack.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      liveUrl: "https://bookstore-client-mern.netlify.app/",
      category: "E-commerce Platform"
      // codeUrl: "https://github.com/your/repo"
    },
    {
      title: "Bookstore 2 Client",
      description:
        "Enhanced bookstore experience with faster loads, advanced search, and an upgraded UX using modern design patterns and optimized state management.",
      technologies: ["React", "Advanced UI/UX", "Performance Optimization"],
      liveUrl: "https://bookstore2-client.netlify.app/",
      category: "E-commerce Platform"
    },
    {
      title: "RinseWise Laundry Services",
      description:
        "Professional laundry service site with pickup & delivery booking, service management, testimonials, and a fully responsive layout for higher engagement.",
      technologies: ["React", "Service Booking", "Responsive Design"],
      liveUrl: "https://laundrysite-web.netlify.app/",
      category: "Service Platform"
    },
    {
      title: "Paisley Jewels",
      description:
        "Elegant e-commerce experience for handcrafted jewelry—includes product catalogs, detailed PDPs, and a seamless shopping journey with refined visuals.",
      technologies: ["E-commerce", "Product Management", "Modern Design"],
      liveUrl: "https://paisleyjewels.store/",
      category: "E-commerce Platform"
    },
    {
      title: "Mexivida USA",
      description:
        "Health & wellness storefront for organic supplements with subscriptions, rich product content, and customer reviews—shipped with a modern UI.",
      technologies: ["E-commerce", "Subscription System", "Health Platform"],
      liveUrl: "https://mexividausa.com/",
      category: "Health & Wellness"
    },
    {
      title: "Care at Home",
      description:
        "Home-care services platform featuring service booking, caregiver profiles, and an intuitive dashboard for smoother care coordination.",
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
            e-commerce solutions, and digital transformation across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title + index}
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
                        key={`${project.title}-tech-${techIndex}`}
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
                    onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>

                  {project.codeUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.codeUrl!, "_blank", "noopener,noreferrer")}
                      aria-label={`Open source code for ${project.title}`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
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
