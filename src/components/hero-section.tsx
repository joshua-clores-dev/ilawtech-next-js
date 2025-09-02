import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-gradient-to-br from-background via-muted/30 to-accent/5"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">
            <span className="text-balance">ILAWTECH</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl font-medium text-accent">
            Making IT Life Easier and Lite.
          </p>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto text-pretty">
            At ILAWTECH, we believe technology should simplify, not complicate.
            That&apos;s why we provide smart, secure, and streamlined IT
            solutions that lighten your workload and make daily operations more
            efficient. From infrastructure to support, we keep your systems
            running so you can focus on what matters most.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
