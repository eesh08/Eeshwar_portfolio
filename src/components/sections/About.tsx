import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Professional Background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I'm a passionate full-stack developer with expertise in building scalable web applications,
                data analysis, and cloud technologies.
              </p>
              <p>
                With a background in computer science and multiple years of hands-on development experience,
                I combine technical knowledge with creative problem-solving to deliver impactful solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Core Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>✓ Full Stack Web Development</li>
                <li>✓ Data Science & Analytics</li>
                <li>✓ Cloud Architecture (AWS)</li>
                <li>✓ Database Design & Optimization</li>
                <li>✓ DevOps & CI/CD</li>
                <li>✓ Agile Methodologies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
