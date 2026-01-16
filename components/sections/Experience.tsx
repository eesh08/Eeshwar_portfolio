"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { internships } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
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
            <Briefcase className="w-3 h-3 mr-2" />
            Experience
          </Badge>
          <h2 className="heading-lg mb-4">Internships</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical experience gained through internships, applying data analytics
            skills in real-world business environments.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            {internships.map((internship, index) => (
              <motion.div
                key={internship.id}
                variants={itemVariants}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                <Card className="md:ml-16 overflow-hidden group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30">
                  {/* Accent line */}
                  <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                  
                  <CardHeader className="pb-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                          {internship.role}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-foreground/80 mt-1">
                          {internship.company}
                        </CardDescription>
                      </div>
                      
                      {/* Company logo placeholder */}
                      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center text-2xl font-bold text-primary/40">
                        {internship.company.charAt(0)}
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {internship.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {internship.period}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {internship.description}
                    </p>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                        Key Responsibilities
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {internship.responsibilities.map((responsibility, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                        Skills Applied
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Certificate placeholder */}
                    {internship.certificate && (
                      <div className="pt-4 border-t border-border">
                        <a
                          href={internship.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm font-medium"
                        >
                          View Certificate →
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
