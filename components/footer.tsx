import { Github, Linkedin } from "lucide-react"
import { Button } from "./ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© {currentYear} Mayank Joshi. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
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
    </footer>
  )
}
