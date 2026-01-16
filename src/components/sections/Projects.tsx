import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment integration",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      link: "#"
    },
    {
      title: "Resume Ranking System",
      description: "Machine learning-based resume screening tool for automated candidate evaluation",
      technologies: ["Python", "Pandas", "ML", "Flask"],
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard for business metrics and KPIs",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "AI Chat Application",
      description: "Interactive chat application with AI-powered responses and NLP integration",
      technologies: ["React", "Next.js", "Python", "LLM APIs"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-primary hover:underline font-semibold"
                >
                  View Project →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
