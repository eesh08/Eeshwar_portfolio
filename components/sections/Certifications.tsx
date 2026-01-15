import { Badge } from "@/components/ui/badge";

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023"
    },
    {
      title: "Professional Data Scientist",
      issuer: "DataCamp",
      date: "2023"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udacity",
      date: "2022"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2022"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
        
        <div className="max-w-2xl mx-auto space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                </div>
                <Badge variant="outline">{cert.date}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
