import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, Palette, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Web Development",
      skills: ["React.js", "Django", "MERN Stack", "Tailwind CSS"],
      color: "text-primary"
    },
    {
      icon: Database,
      title: "Software Development",
      skills: ["PHP", "SQL", "Inventory Systems", "Enterprise Solutions"],
      color: "text-secondary"
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment",
      skills: ["Netlify", "Vercel", "AWS Basics", "Performance Optimization"],
      color: "text-primary"
    },
    {
      icon: Palette,
      title: "Design & Collaboration",
      skills: ["UI/UX Design", "Team Leadership", "Project Management", "Digital Campaigns"],
      color: "text-secondary"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["Natural Language Processing", "MLOps Basics", "AI-powered Solutions", "Data Analysis"],
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Professional Skills",
      skills: ["Client Management", "Problem Solving", "Technical Documentation", "Agile Development"],
      color: "text-secondary"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/10">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning modern web technologies, software development, 
            and emerging AI solutions to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-lift card-shadow bg-card border-0 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 group-hover:scale-110 transition-bounce`}>
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-3 py-2 bg-muted/50 rounded-lg text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-smooth"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;