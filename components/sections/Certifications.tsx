"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, Shield } from "lucide-react";
import Link from "next/link";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-muted/30">
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
            <Award className="w-3 h-3 mr-2" />
            Credentials
          </Badge>
          <h2 className="heading-lg mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating expertise in data analytics
            and cloud technologies.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30">
                <div className="grid md:grid-cols-[200px,1fr] gap-0">
                  {/* Badge/Logo Section */}
                  <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 p-8 flex items-center justify-center">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Certification badge placeholder */}
                      <div className="w-32 h-32 rounded-xl bg-card border-2 border-primary/20 flex items-center justify-center shadow-lg">
                        <Shield className="w-16 h-16 text-primary" />
                      </div>
                      {/* Verified badge */}
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-1.5">
                        <Award className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                            {cert.name}
                          </CardTitle>
                          <CardDescription className="text-base font-medium text-foreground/80 mt-1">
                            {cert.issuer}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {cert.issueDate}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Skills covered */}
                      <div>
                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-muted-foreground">
                          Skills Validated
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="font-normal">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Credential ID & Verification */}
                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          Credential ID: <span className="font-mono font-medium text-foreground">{cert.credentialId}</span>
                        </span>
                        {cert.verificationUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <Link
                              href={cert.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-3 h-3 mr-2" />
                              Verify
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
