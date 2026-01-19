"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, BookOpen, Award, Users } from "lucide-react";

const education = {
  institution: "SRM University",
  degree: "Bachelor of Technology in Computer Science",
  location: "Chennai, India",
  period: "2021 - 2025",
  gpa: "8.5 CGPA",
  highlights: [
    "Completed numerous projects in Python, SQL, and C++",
    "Active participant in hackathons and ideathons",
    "Developed full-stack applications and data analytics solutions",
    "Strong foundation in algorithms, data structures, and database management",
  ],
  leadership: {
    title: "Community Teaching Initiative",
    description: "Led weekly sessions for a class of 40 students, teaching basic hygiene, spoken English, and essential academic skills through structured activities.",
    achievements: [
      "Coordinated with school staff to deliver consistent lessons",
      "Built strong practical skills in communication and classroom management",
      "Developed leadership abilities through regular student engagement",
    ],
  },
};

export default function Education() {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5">
            <GraduationCap className="w-3 h-3 mr-2" />
            Education
          </Badge>
          <h2 className="heading-lg mb-4">Academic Background</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and data analytics
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
              {/* Accent line */}
              <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <CardHeader className="space-y-4 pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      {education.institution}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground font-medium">
                      {education.degree}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <Badge variant="secondary" className="w-fit">
                      <Calendar className="w-3 h-3 mr-1" />
                      {education.period}
                    </Badge>
                    <Badge variant="outline" className="w-fit">
                      <Award className="w-3 h-3 mr-1" />
                      {education.gpa}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Academic Highlights */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Academic Achievements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {education.highlights.map((highlight, index) => {
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-foreground">{highlight}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Leadership Experience */}
                <div className="border-t pt-6">
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 border border-primary/10">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      {education.leadership.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {education.leadership.description}
                    </p>
                    <div className="space-y-2">
                      {education.leadership.achievements.map((achievement, index) => {
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-1 h-1 rounded-full bg-accent" />
                            <span className="text-foreground">{achievement}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
