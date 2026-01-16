import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Data & AI",
      skills: ["Pandas", "NumPy", "Machine Learning", "Data Analysis", "Python"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-2xl font-semibold">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
