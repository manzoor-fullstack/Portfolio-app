"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Experience = {
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
  responsibilities: string[]
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      company: "Dev Layers",
      position: "MERN Stack Developer",
      period: "Jun 2026 - Present",
      description: "Developing SaaS platforms for physiotherapists to provide services to patients UK-base and world wide.",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
      responsibilities: [
        "Built a full-stack web application using MERN technology with a scalable and modular architecture",
        "Led a team of 5 developers using Agile methodologies",
        "Implemented secure user authentication and authorization",
        "Implemented CI/CD pipelines with GitHub Actions and AWS",
        "Collaborated with UX designers to create intuitive user interfaces",
      ],
    },
    {
      company: "Devfinix PVT LTD",
      position: "MERN Stack Developer Intern",
      period: "Jan 2026 - Mar 2021",
      description: "Developed Clinic Appointment & Patient Management System, Grade and Significant Calculators.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      responsibilities: [
        "Built responsive dashboards with real-time appointments",
        "Developed RESTful for data retrieval and manipulation",
        "Implemented authentication and authorization systems",
        "Optimized database queries for large datasets",
        "Participated in code reviews and collaborated senior developers",
      ],
    },
    {
      company: "Cure Logics Software House",
      position: "MERN Stack Developer Intern",
      period: "Jun 2025 - Sep 2025",
      description: "Created interactive web applications for e-commerce and media clients.",
      technologies: ["React", "Redux", "JavaScript", "TypeScript", "Next.js", "Node.js", "Express.js", "MongoDB"],
      responsibilities: [
        "Developed responsive and accessible user interfaces",
        "Implemented state management with Redux and Context API",
        "Created reusable component libraries",
        "Wrote unit and integration tests with Jest and React Testing Library",
        "Collaborated with backend developers to integrate APIs",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/50 scroll-mt-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey building real-world applications
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                    <Badge variant="outline" className="md:ml-auto w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <div className="text-lg font-medium text-primary">{exp.company}</div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
