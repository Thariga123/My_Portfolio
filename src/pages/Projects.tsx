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
    title: "E-Commerce Web Application",
    description: "Full-stack e-commerce platform with React.js frontend and Node.js backend",
    longDescription: "Built a complete e-commerce solution featuring user authentication, product catalog, shopping cart, and secure payment integration. Implemented RESTful APIs and optimized database queries for performance.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "Interactive messaging platform with real-time communication features",
    longDescription: "Developed a real-time chat application using WebSocket technology for instant messaging. Features include group chats, file sharing, and user presence indicators.",
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "Collaborative project management tool with intuitive UI",
    longDescription: "Created a comprehensive task management system with drag-and-drop functionality, team collaboration features, and progress tracking. Integrated with third-party APIs for notifications.",
    tags: ["React.js", "Tailwind CSS", "REST API"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Portfolio Website Generator",
    description: "Dynamic portfolio builder with customizable templates",
    longDescription: "Developed a platform that allows users to create personalized portfolio websites using pre-built templates. Features include drag-and-drop editor, theme customization, and one-click deployment.",
    tags: ["React.js", "Node.js", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
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
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
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
                  <Button variant="default">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </PageTransition>
  );
}
