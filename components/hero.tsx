import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 md:py-28 container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-primary">Mayank Joshi</span>
          <span className="block mt-2 text-2xl md:text-3xl font-medium">Full-Stack Developer</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          I craft responsive, user-centric web applications with modern technologies. Self-taught and passionate about
          creating impactful digital experiences that solve real problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2 px-6" asChild>
            <a href="#projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <a href="/frontend_resume.pdf" download>
  <Button size="lg" variant="outline" className="gap-2 px-6">
    <Download className="h-4 w-4" /> Download Resume
  </Button>
</a>

        </div>
      </div>
    </section>
  )
}
