import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-3 gap-10 items-center text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/UserImage.jpg"
                  alt="User Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <p className="text-base sm:text-lg leading-relaxed">
                I'm a self-taught developer who discovered passion for coding through solving real-world problems. My
                journey began two years ago when I wanted to build a tool to organize my digital life, and I've been
                hooked on development ever since.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Without a traditional CS background, I've built my skills through online courses, documentation,
                open-source contributions, and countless hours of practice. I believe in continuous learning and pushing
                beyond my comfort zone with each new project.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                I'm currently seeking opportunities to work with a team where I can contribute my skills, learn from
                experienced developers, and grow as a professional.
              </p>

              <div className="flex justify-center md:justify-start gap-4 pt-2">
                <a
                  href="https://github.com/Mayankjoshi9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/mayank-joshi-837262250"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
