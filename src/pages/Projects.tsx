import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "JobCuro",
    description: "Full-stack job platform for exploring and applying to opportunities",
    longDescription:
      "Built a full-stack platform for job seekers to explore and apply for opportunities using React.js, Tailwind CSS, Node.js, and MongoDB. Integrated real-time job listings and secure JWT authentication for a smooth user experience.",
    tags: ["React.js", "Node.js", "MongoDB", "JWT"],
    image: "src/assets/JobCuro.png",
    code: "https://github.com/One-to-Infinity-Team/JobCuro-Backend",
    demo: "https://jobcuro-frontend.onrender.com",
  },
  {
    id: 2,
    title: "Employee Attendance Managment System",
    description: "Full-stack attendance monitoring platform for tracking employee attendance",
    longDescription:
      "Built a full-stack platform for employees and managers to manage and track the attendance using React.js, Node.js,Tailwind CSS, Framer motion and MongoDB. Integrated secure JWT authentication for a smooth user experience.",
    tags: ["React.js", "Node.js", "MongoDB", "JWT"],
    image: "src/assets/Attendence.png",
    code: "https://github.com/Thariga123/Employee-Attendance-Management-System-----Frontend",
    demo: "https://employee-frontend-kohl-psi.vercel.app/",
  },
  {
    id: 3,
    title: "AI-Powered Real Time Speech Translation",
    description: "Multilingual speech translation system with real-time capabilities",
    longDescription:
      "Developed an AI-powered real-time speech translation web app using Flask, JavaScript, and Google/Microsoft APIs, supporting 12+ languages. Integrated speech recognition, translation, and text-to-speech with a responsive teal glassmorphic UI for seamless multilingual interaction.",
    tags: ["Flask", "JavaScript", "Google APIs", "Microsoft APIs", "AI"],
    image: "src/assets/Speech translator.png",
    code: "https://github.com/Thariga123/AI-Powered-Real-Time-Speech-Translation-for-Multilingual-Content",
  },
  {
    id: 4,
    title: "WeatherDashboard",
    description: "Comprehensive weather dashboard with forecasts and historical data",
    longDescription:
      "Built Weather Dash, a React + Node.js dashboard displaying current weather, 5-day forecast, and historical charts. Implemented user preferences, caching, and rate limiting for optimized performance and personalized experience.",
    tags: ["React.js", "Node.js", "REST API", "Charts"],
    image: "src/assets/Weather.png",
    code: "https://github.com/Thariga123/Phase-1/tree/main/Level-20/Weather%20Dashboard",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              A showcase of my web development work and technical projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Card className="glass-effect overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.code, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>

                      {/* Demo button visible only if project.demo exists */}
                      {project.demo && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
                <DialogDescription className="text-base pt-4">
                  {selectedProject?.longDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedProject?.image}
                  alt={selectedProject?.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject?.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="default"
                    onClick={() => window.open(selectedProject?.code, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>

                  {/* Demo button only if demo exists */}
                  {selectedProject?.demo && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </PageTransition>
  );
}
