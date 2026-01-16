"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-8">
            <FileQuestion className="w-24 h-24 mx-auto text-muted-foreground" />
          </div>
          <h1 className="heading-xl mb-4">Project Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            The project you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          <Button size="lg" asChild>
            <Link href="/#projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
