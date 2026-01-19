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
    <section id="about" className="section-padding bg-gradient-to-br from-background via-background to-primary/5">
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
            <User className="w-3 h-3 mr-2" />
            About Me
          </Badge>
          <h2 className="heading-lg mb-6 text-balance">Who I Am</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            An aspiring data professional passionate about transforming raw data
            into meaningful business insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-8">
              {/* Professional Summary with highlighted styling */}
              <div className="relative group">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="space-y-5 pl-4">
                  <h3 className="heading-md flex items-center gap-3 text-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    Professional Summary
                  </h3>
                  <div className="space-y-4 text-base leading-relaxed">
                    <p className="text-foreground font-medium">
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                        Entry-level Data Analytics Engineer
                      </span>{" "}
                      and{" "}
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                        Computer Science graduate
                      </span>{" "}
                      with hands-on experience building{" "}
                      <span className="font-semibold text-foreground">end-to-end data solutions</span> using{" "}
                      <Badge variant="secondary" className="mx-1 inline-flex px-2.5 py-0.5 text-xs font-medium">Python</Badge>{" "}
                      and{" "}
                      <Badge variant="secondary" className="mx-1 inline-flex px-2.5 py-0.5 text-xs font-medium">SQL</Badge>.
                    </p>
                    <p className="text-muted-foreground">
                      Completed{" "}
                      <span className="font-semibold text-foreground bg-gradient-to-r from-primary/10 to-accent/10 px-3 py-1 rounded-lg inline-block">
                        Microsoft Fabric Analytics Engineer (DP-600)
                      </span>{" "}
                      with practical exposure to data pipelines, lakehouse, dataflows, and warehousing, along with full-stack Python application development and Git/GitHub collaboration.
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Adaptable</span>,{" "}
                      <span className="font-medium text-foreground">quick-learning</span>, and comfortable across{" "}
                      <span className="text-accent font-medium">analytics</span>,{" "}
                      <span className="text-accent font-medium">data engineering</span>, and{" "}
                      <span className="text-accent font-medium">development roles</span>, with strong problem-solving and communication skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide opacity-70">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((highlight, index) => {
                  return (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{highlight}</span>
                  </motion.div>
                  );
                })}
              </div>
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
                <Card className="card-featured overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
