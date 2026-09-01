"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code } from "lucide-react"
import CodeSnippet from "./code-snippet"

type Repository = {
  id: number
  name: string
  description: string
  html_url?: string
  homepage: string
  topics: string[]
  language: string
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")

  // Mock data for demonstration - in a real app, this would come from GitHub API
  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      setRepos([
        // {
        //   id: 1,
        //   name: "E-Commerce Platform",
        //   description:
        //     "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
        //   html_url: "https://github.com/username/ecommerce",
        //   homepage: "https://ecommerce-demo.vercel.app",
        //   topics: ["react", "nextjs", "typescript", "prisma", "postgresql", "stripe"],
        //   language: "TypeScript",
        // },
        {
          id: 1,
          name: "Grade Calculator",
          description: "A user-friendly web application that instantly calculates grades, GPA, percentages, and academic performance based on user input.",
          // html_url: "https://github.com/username/taskmanager",
          homepage: "https://gradecalculator.devfinix.com/en",
          topics: ["nextjs", "tailwind css", "typescript"],
          language: "TypeScript",
        },
        {
          id: 2,
          name: "Significant Calculator",
          description: "A precision-focused calculator that accurately counts and rounds significant figures according to standard scientific and mathematical rules.",
          html_url: "https://github.com/manzoor-fullstack/significant-calculator",
          homepage: "https://significant-calculator.devfinix.com/en",
          topics: ["nextjs", "tailwindcss", "shadcn"],
          language: "TypeScript",
        },
        // {
        //   id: 4,
        //   name: "Real-time Chat Application",
        //   description: "A real-time messaging platform with private and group chats, file sharing, and notifications.",
        //   html_url: "https://github.com/username/chatapp",
        //   homepage: "https://chatapp-demo.vercel.app",
        //   topics: ["react", "firebase", "websockets", "authentication", "notifications"],
        //   language: "JavaScript",
        // },
        {
          id: 3,
          name: "MedGo2U",
          description: "MedGo2U is a modern UK-based physiotherapy platform that enables users to explore physiotherapy services, treatment options, and location-specific healthcare information through a fast, responsive, and user-friendly interface.",
          // html_url: "https://github.com/username/chatapp",
          homepage: "https://www.medgo2u.com/uk",
          topics: ["reactjs", "nextjs", "typescript", "tailwindcss"],
          language: "TypeScript",
        },
        {
          id: 4,
          name: "ReClub",
          description:
            "ReClub is a modern real estate platform that helps users discover, explore, and manage property listings through a fast, responsive, and intuitive web experience.",
          // html_url: "https://github.com/username/portfolio-gen",
          homepage: "https://reclub-web.onrender.com",
          topics: ["nextjs", "typescript", "tailwindcss", "shadcnui"],
          language: "TypeScript",
        },
        {
          id: 5,
          name: "Rawq Medicine Portfolio",
          description: "A physiotherapy portfolio website showcasing services and expertise.",
          // html_url: "https://github.com/username/api-gateway",
          homepage: "https://rawq-med.vercel.app/",
          topics: ["nextjs", "tailwindcss", "shadcn", "authentication"],
          language: "TypeScript",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const codeSnippets = {
    "Significant Calculator": `"use client";

import { useState } from "react";
import { evaluate } from "mathjs";
import { Equal, Link2, Save } from "lucide-react";
import Link from "next/link";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [roundTo, setRoundTo] = useState<number | null>(null);

  const buttons = [
    ["÷", "1", "2", "3", "^"],
    ["×", "4", "5", "6", "log"],
    ["+", "7", "8", "9", "ln"],
    ["-", "(", "0", ")", "e"],
  ];

  // Convert UI symbols to mathjs format
  const formatExpression = (expr: string) => {
    return expr
      .replace(/÷/g, "/")
      .replace(/×/g, "*")
      .replace(/log/g, "log10")
      .replace(/ln/g, "log")
      .replace(/e/g, "e");
  };

  // Round to significant figures
  const roundToSigFigs = (num: number, sig: number) => {
    if (num === 0) return 0;
    return Number(num.toPrecision(sig));
  };`,
    "MedGo2U": `"use client";

import BenefitsGrid from "./Benefits/BenefitsGrid";
import FeaturedPackage from "./FeaturedPackage/FeaturedPackage";
import HowItWorks from "./HowItWorks/HowItWorks";
import { packageSteps } from "./HowItWorks/stepsData";
import PackageGrid from "./PackageCards/PackageGrid";

export default function PackageTab() {
  return (
    <>
      <FeaturedPackage />
      <div className="my-8">
        <PackageGrid />
      </div>
      <BenefitsGrid />
      <HowItWorks
        title="How it works"
        steps={packageSteps}
      />
    </>
  );
}`,
    "ReClub": `// Load the member's OWN on-market listings + their like / interested counts.
  async function refresh() {
    const myId = await getCurrentUserId();
    const [all, postings] = await Promise.all([
      listOnMarketProperties(),
      myId ? getMemberOpportunities(myId) : Promise.resolve([]),
    ]);
    const own = myId ? all.filter((p) => p.ownerId === myId) : all;
    const map: Record<string, { likeCount: number; interestedCount: number }> =
      {};
    for (const o of postings) {
      map[o.id] = {
        likeCount: o.likeCount,
        interestedCount: o.interestedCount,
      };
    }
    setRows(own);
    setCounts(map);
  }

  useEffect(() => {
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);`,
  "Rawq Medicine Portfolio": `export const services: Service[] = [
  {
    slug: "vip-physical",
    title: "The VIP Physical",
    badge: "Signature",
    featured: true,
    price: "$299",
    priceNote:
      "One-time visit · $50 credited toward membership if you join within 30 days",
    description:
      "A 90-minute comprehensive physical with basic labwork included, a personalized video review of your results, body composition analysis, and your own health roadmap.",
    longDescription:
      "The VIP Physical is our signature deep-dive into your health: a 90-minute, unhurried appointment that goes well beyond a standard annual exam. It includes your basic labwork, a personalized video review of those results with Dr. Farooqui, a body composition analysis, and a personal health roadmap you'll actually understand. Join Rawq Medicine within 30 days and $50 is credited toward your membership.",
    icon: Sparkles,
    features: [
      "90-minute appointment",
      "basic labwork included",
      "Personalized video review of your lab results",
      "Body composition analysis",
      "Personal health roadmap",
      "$50 credited toward membership if you join within 30 days",
    ],
    whoFor: [
      "Anyone who wants a complete picture of their health",
      "Busy professionals who value one thorough, private visit",
      "Patients focused on prevention and longevity",
      "Someone who wants to test-drive the DPC model before committing",
      "Someone who wants to experience the Direct Primary Care (DPC) model before committing to a membership."
    ],
    details: [
      "A 90-minute, unhurried appointment — no clock-watching",
      "Comprehensive physical exam with basic labwork included",
      "A personalized video review of your lab results",
      "Body composition analysis and a personal health roadmap",
    ],
  },`,
  }

  const filteredRepos =
    activeTab === "all" ? repos : repos.filter((repo) => repo.topics.includes(activeTab.toLowerCase()))

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent full-stack development projects
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="react">React</TabsTrigger>
                  <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                  <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                  <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between">
                        <span>{repo.name}</span>
                        <Badge variant="outline">{repo.language}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-4">{repo.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.topics.slice(0, 4).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-2"
                        onClick={() => {
                          document.getElementById(`code-${repo.id}`)?.scrollIntoView({ behavior: "smooth" })
                        }}
                      >
                        <Code className="mr-2 h-4 w-4" />
                        View Code Snippet
                      </Button>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      {repo.html_url ? (
                        <Button variant="outline" size="sm" asChild>
                          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Source
                          </a>
                        </Button>
                      ) : (
                        <div></div>
                      )
                      }
                      {repo.homepage && (
                        <Button variant="default" size="sm" asChild>
                          <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 space-y-12">
              <h3 className="text-2xl font-bold text-center mb-8">Code Snippets</h3>
              {filteredRepos.map((repo) => (
                <motion.div
                  key={`code-${repo.id}`}
                  id={`code-${repo.id}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="scroll-mt-24"
                >
                  {codeSnippets[repo.name] && (
                    <>
                      <h4 className="text-xl font-semibold mb-4">{repo.name}</h4>
                      <CodeSnippet
                        code={codeSnippets[repo.name] || "// Code snippet not available"}
                        language={repo.language.toLowerCase()}
                      />
                    </>
                  )}

                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
