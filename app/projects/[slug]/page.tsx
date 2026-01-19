"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers,
  Target,
  User,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p: any) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary),0.1),transparent_50%)]" />

        <div className="container-custom relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link href="/#projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge className="mb-4">{project.subtitle}</Badge>
            </motion.div>

            <motion.h1
              className="heading-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.shortDescription}
            </motion.p>

            {/* Quick Info */}
            <motion.div
              className="flex flex-wrap gap-6 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="w-4 h-4" />
                <span>{project.role}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{project.duration}</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {project.github && (
                <Button asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Link>
                </Button>
              )}
              {project.liveDemo && (
                <Button variant={project.github ? "outline" : "default"} asChild>
                  <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.id === "analytics-dashboard" ? "View Dashboard" : "Live Demo"}
                  </Link>
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Hero Image - For Analytics Dashboard */}
              {project.id === "analytics-dashboard" && project.images && project.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </motion.div>
              )}

              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <h2 className="heading-md mb-4 flex items-center gap-3">
                  <Layers className="w-6 h-6 text-primary" />
                  Project Overview
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
                  <p className="text-lg font-medium text-foreground">
                    {project.fullDescription}
                  </p>
                  {project.id === "analytics-dashboard" && (
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10">
                      <p className="text-foreground">
                        This project demonstrates a complete <span className="font-semibold text-primary">end-to-end data analytics workflow</span>, 
                        from raw data ingestion to interactive business intelligence dashboards. The solution handles real-world KPI tracking 
                        with emphasis on <span className="font-semibold">data quality, validation, and actionable insights</span>.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Problem & Solution Combined */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* Problem */}
                <Card className="bg-red-500/5 border-red-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Target className="w-5 h-5 text-red-500" />
                      <span>The Challenge</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </CardContent>
                </Card>

                {/* Solution */}
                <Card className="bg-green-500/5 border-green-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Lightbulb className="w-5 h-5 text-green-500" />
                      <span>The Solution</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Key Features - Enhanced Layout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-md mb-6">Core Features & Capabilities</h2>
                <div className="space-y-3">
                  {project.keyFeatures.map((feature: string, index: number) => {
                    return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-medium text-foreground">{feature}</p>
                      </div>
                    </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-md mb-6">Impact & Results</h2>
                <div className="space-y-4">
                  {project.outcomes.map((outcome: string, index: number) => {
                    return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-l-4 border-primary hover:shadow-lg transition-shadow"
                    >
                      <span className="text-3xl font-bold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground text-base">{outcome}</p>
                      </div>
                    </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Images Section - Placeholder for uploaded images */}
              {project.images && project.images.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="heading-md mb-6">Project Gallery</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.images.slice(1).map((image: string, index: number) => (
                      <div
                        key={index}
                        className="aspect-video bg-muted rounded-lg overflow-hidden"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">Tech Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech: string) => {
                        return (
                        <Badge key={tech} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Documents Section - Placeholder */}
              {project.documents && project.documents.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Documents</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {project.documents.map((doc: string, index: number) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full justify-start"
                          asChild
                        >
                          <Link href={doc} target="_blank">
                            📄 Document {index + 1}
                          </Link>
                        </Button>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-16 border-t border-border">
        <div className="container-custom text-center">
          <p className="text-muted-foreground mb-4">Want to see more?</p>
          <Button size="lg" asChild>
            <Link href="/#projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
