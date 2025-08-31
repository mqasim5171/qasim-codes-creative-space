import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Developer",
      company: "Baraaq AI",
      location: "Remote",
      period: "Jan 2025 – June 2025",
      description: "Worked on AI-powered applications, NLP models, and integrating AI features into scalable solutions. Developed machine learning pipelines and contributed to cutting-edge AI research projects.",
      technologies: ["Python", "NLP", "Machine Learning", "AI Applications", "MLOps"],
      type: "Current Position"
    },
    {
      title: "Website Developer & Manager",
      company: "Elifsoftwares",
      location: "Remote",
      period: "June 2023 – September 2024",
      description: "Developed and managed client websites, handled deployments, optimized performance, and led digital campaigns. Successfully delivered multiple web projects with focus on user experience and conversion optimization.",
      technologies: ["React", "Web Development", "Performance Optimization", "Digital Marketing"],
      type: "Full-time"
    },
    {
      title: "IT Intern",
      company: "Bestway Cement Limited",
      location: "Islamabad, Pakistan",
      period: "Summer 2024",
      description: "Built an inventory management system using PHP & SQL, gained hands-on experience in enterprise IT workflows. Worked with cross-functional teams to implement digital solutions for operational efficiency.",
      technologies: ["PHP", "SQL", "Inventory Systems", "Enterprise Solutions"],
      type: "Internship"
    },
    {
      title: "Game Developer Intern",
      company: "Mindstorm Studios",
      location: "Islamabad, Pakistan",
      period: "2023",
      description: "Designed and developed a game prototype using Unity. Collaborated with design teams to create engaging user experiences and implemented game mechanics with clean, maintainable code.",
      technologies: ["Unity", "C#", "Game Development", "Prototyping"],
      type: "Internship"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted/10">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey spanning AI development, web development, enterprise solutions, 
            and game development across diverse industries and technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card 
                key={index} 
                className="hover-lift card-shadow bg-card border-0 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                          experience.type === "Current Position" 
                            ? "bg-primary/10 text-primary" 
                            : experience.type === "Full-time"
                            ? "bg-secondary/10 text-secondary"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {experience.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-heading font-semibold mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-4 text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{experience.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-smooth"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;