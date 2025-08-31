import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mqasim5171@gmail.com",
      href: "mailto:mqasim5171@gmail.com",
      description: "Send me an email for project inquiries"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/qasim5171",
      href: "https://linkedin.com/in/qasim5171",
      description: "Connect with me professionally"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/mqasim5171",
      href: "https://github.com/mqasim5171",
      description: "Check out my code repositories"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your digital vision to life? Let's discuss how I can help you 
            build reliable, modern, and impactful solutions for your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 text-center hover-lift card-shadow bg-card border-0 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 group-hover:scale-110 transition-bounce">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {contact.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {contact.description}
                  </p>
                  
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(contact.href, "_blank")}
                  >
                    {contact.value}
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-12 card-shadow bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you need a modern web application, AI-powered solution, or digital transformation 
                strategy, I'm here to help turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open("mailto:mqasim5171@gmail.com", "_blank")}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start a Conversation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open("https://linkedin.com/in/qasim5171", "_blank")}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;