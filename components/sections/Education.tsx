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
  gpa: "7.88 CGPA",
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
    <section id="education" className="section-padding bg-gradient-to-br from-background to-accent/5">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 backdrop-blur-sm bg-card/50">
            <GraduationCap className="w-3 h-3 mr-2" />
            Education
          </Badge>
          <h2 className="heading-lg mb-6 text-balance">Academic Background</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
            <Card className="card-featured overflow-hidden">
              {/* Accent line */}
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary/80" />
              
              <CardHeader className="space-y-6 pb-6 bg-gradient-to-br from-card/50 to-card/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-3">
                    <CardTitle className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-balance">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl">
                        <GraduationCap className="w-7 h-7 text-primary" />
                      </div>
                      {education.institution}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground font-medium">
                      {education.degree}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <Badge variant="secondary" className="w-fit bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border-primary/30">
                      <Calendar className="w-3 h-3 mr-1" />
                      {education.period}
                    </Badge>
                    <Badge variant="outline" className="w-fit bg-gradient-to-r from-primary/10 to-transparent">
                      <Award className="w-3 h-3 mr-1" />
                      {education.gpa}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8 p-8">
                {/* Academic Highlights */}
                <div>
                  <h3 className="heading-md mb-5 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    Academic Achievements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {education.highlights.map((highlight, index) => {
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                          <span className="text-sm font-medium text-foreground leading-relaxed">{highlight}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Leadership Experience */}
                <div className="gradient-divider pt-8">
                  <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-background rounded-2xl p-6 md:p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                    <h3 className="heading-md mb-4 flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      {education.leadership.title}
                    </h3>
                    <p className="text-muted-foreground mb-5 leading-relaxed text-base">
                      {education.leadership.description}
                    </p>
                    <div className="space-y-3">
                      {education.leadership.achievements.map((achievement, index) => {
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-start gap-3 group"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                            <span className="text-sm font-medium text-foreground leading-relaxed">{achievement}</span>
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
