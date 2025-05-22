import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    description: "Technologies I use to build interactive user interfaces",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    description: "Tools and frameworks I use for server-side development",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Firebase", "Supabase"],
  },
  {
    title: "DevOps & Tools",
    description: "Tools I use for development workflow and deployment",
    skills: ["Git", "GitHub", "VS Code", "Docker", "Vercel", "Netlify", "Jest", "Cypress", "Figma"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Through self-study and project work, I've developed proficiency in these technologies. I'm constantly
            expanding my skillset and exploring new tools.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border border-border/40">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">Learning Journey</h3>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border/40">
                <span className="text-sm text-muted-foreground">APRIL 2023</span>
                <h4 className="font-medium mt-1">Built a Real-time Chat Application</h4>
                <p className="text-muted-foreground">
                  Learned Socket.IO and implemented real-time communication features
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border/40">
                <span className="text-sm text-muted-foreground">FEBRUARY 2023</span>
                <h4 className="font-medium mt-1">Mastered React Hooks and Context API</h4>
                <p className="text-muted-foreground">
                  Refactored projects to use modern React patterns and state management
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border/40">
                <span className="text-sm text-muted-foreground">DECEMBER 2022</span>
                <h4 className="font-medium mt-1">Learned TypeScript</h4>
                <p className="text-muted-foreground">Implemented type safety in projects and improved code quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
