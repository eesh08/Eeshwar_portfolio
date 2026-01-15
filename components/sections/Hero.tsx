export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
          Eeshwar
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Building innovative solutions with modern technologies. Specialized in web development,
          data science, and cloud technologies.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
