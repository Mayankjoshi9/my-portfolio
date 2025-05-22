import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "SmartCity – Urban Issue Reporting Platform",
    description: "A platform for citizens to report city issues with real-time tracking and chatbot support.",
    image: "/smartcity.png", // replace with your actual image in /public
    tags: ["React", "Node.js", "MongoDB", "WebSockets"],
    github: "https://github.com/Mayankjoshi9/smart-city-hackethon",
    demo: "https://smartcity-fsd8.onrender.com/", // link if deployed
    challenges: "Built real-time issue tracking with WebSockets and integrated chatbot support for UX enhancement.",
  },
  {
    title: "MBuddy – Learning Management System",
    description: "An LMS with dashboards for students and instructors, integrated payments, and real-time feedback.",
    image: "/mbuddy.png", // replace with your actual image in /public
    tags: ["React", "Redux", "Node.js", "Razorpay"],
    github: "https://github.com/Mayankjoshi9/MBuddy-EdTech",
    demo: "https://mbuddy-edtech.onrender.com/", // link if deployed
    challenges: "Implemented role-based dashboards, Razorpay integration, and smooth UI with Redux.",
  },
  {
    title: "Sensai AI Career Coach",
    description: "An AI-driven career coach that generates resumes and cover letters, with job prep insights.",
    image: "/sensai.png", // replace with your actual image in /public
    tags: ["Next.js", "Clerk", "Gemini API", "PostgreSQL", "Prisma"],
    github: "https://github.com/Mayankjoshi9/sensai-ai_career_coach",
    demo: "https://sensai-ai-career-coach-gamma.vercel.app/", // link if deployed
    challenges: "Used Gemini API for dynamic AI content, built an industry insights dashboard and MCQ system.",
  },
  {
    title: "Prescripto – Medical Appointment & Prescription System",
    description: "A full-stack medical platform with role-based dashboards for patients, doctors, and admins to manage appointments, prescriptions, and payments.",
    image: "/prescripto.png", // Replace with an actual image stored in /public
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"],
    github: "https://github.com/Mayankjoshi9/Prescripto",
    demo: "https://prescripto-a3wn.onrender.com",
    challenges: "Implemented secure role-based access, real-time doctor availability, and Razorpay payment integration across separate dashboards.",
  }
  
]


export default function Projects() {
  return (
    <section id="projects" className="py-20 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Projects</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          Here are some of the personal projects I've built to solve real problems and practice my skills. Each project
          has taught me valuable lessons in development and problem-solving.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border/40 transition-all hover:border-primary/20 hover:shadow-md"
            >
              <div className="aspect-video w-full bg-muted overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Challenges & Learnings:</h4>
                  <p className="text-muted-foreground">{project.challenges}</p>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
