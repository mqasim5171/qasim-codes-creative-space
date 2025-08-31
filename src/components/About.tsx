const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-gradient">
            About Me
          </h2>
          
          <div className="prose prose-lg md:prose-xl mx-auto text-muted-foreground leading-relaxed">
            <p className="mb-6 text-lg md:text-xl">
              I'm passionate about IT and have extensive experience working on diverse web and software development projects. 
              My expertise spans modern technologies like React.js, Django, and the MERN stack, with a growing specialization 
              in artificial intelligence and machine learning.
            </p>
            
            <p className="mb-6 text-lg md:text-xl">
              I'm particularly interested in organizational digital transformation and how emerging technologies can create 
              meaningful impact. Whether it's building scalable web applications, developing AI-powered solutions, or 
              optimizing business processes, I approach every project with creativity, technical precision, and a focus 
              on delivering exceptional results.
            </p>
            
            <p className="text-lg md:text-xl">
              My goal is to bridge the gap between innovative technology and practical business solutions, helping 
              organizations leverage digital tools to achieve their objectives efficiently and effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;