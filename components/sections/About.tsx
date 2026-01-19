"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Database, TrendingUp, CheckCircle2 } from "lucide-react";
import { personalInfo, skills } from "@/lib/data";

const highlights = [
  "Data-driven decision making",
  "Data Warehousing and Modeling",
  "ETL/ELT Pipeline Development",
  "Dashboard Design & Visualization",
  "SQL & Database Management",
  "Cloud Analytics (Azure)",
];

export default function About() {
  return (
    <section id="about" className="section-padding">
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
            <User className="w-3 h-3 mr-2" />
            About Me
          </Badge>
          <h2 className="heading-lg mb-4">Who I Am</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An aspiring data professional passionate about transforming raw data
            into meaningful business insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              {/* Professional Summary with highlighted styling */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    Professional Summary
                  </h3>
                  <p className="text-lg leading-relaxed text-foreground">
                    <span className="font-semibold text-primary">Entry-level Data Analytics Engineer</span> and{" "}
                    <span className="font-semibold text-primary">Computer Science graduate</span> with hands-on experience building{" "}
                    <span className="font-medium text-foreground">end-to-end data solutions</span> using{" "}
                    <Badge variant="secondary" className="mx-1 inline-flex">Python</Badge> and{" "}
                    <Badge variant="secondary" className="mx-1 inline-flex">SQL</Badge>.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Completed{" "}
                    <span className="font-semibold text-foreground bg-primary/10 px-2 py-0.5 rounded">
                      Microsoft Fabric Analytics Engineer (DP-600)
                    </span>{" "}
                    with practical exposure to data pipelines, lakehouse, dataflows, and warehousing, along with full-stack Python application development and Git/GitHub collaboration.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">Adaptable</span>,{" "}
                    <span className="font-medium text-foreground">quick-learning</span>, and comfortable across{" "}
                    <span className="text-accent font-medium">analytics</span>,{" "}
                    <span className="text-accent font-medium">data engineering</span>, and{" "}
                    <span className="text-accent font-medium">development roles</span>, with strong problem-solving and communication skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((highlight, index) => {
                return (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{highlight}</span>
                </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Skills Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4"
          >
            {Object.entries(skills).map(([key, category], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                        {key === "analytics" && <TrendingUp className="w-5 h-5" />}
                        {key === "engineering" && <Database className="w-5 h-5" />}
                        {key === "programming" && <Code className="w-5 h-5" />}
                        {key === "tools" && <User className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {(category as any).title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {(category as any).items.map((skill: string) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="font-normal text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
