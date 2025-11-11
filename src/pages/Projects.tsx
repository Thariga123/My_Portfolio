import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TestTube, Leaf } from "lucide-react";
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
    title: "Miniature Chemical Reactor",
    description:
      "Engineered a small-scale chemical reactor using principles of chemical engineering",
    fullDescription:
      "This project involved the complete design and fabrication of a miniature chemical reactor as part of the Chemical Engineering Course. The reactor was built using advanced chemical engineering principles, with a focus on optimizing reaction conditions. Performance tests were conducted to ensure maximum efficiency and safety standards. The project received excellent marks for its innovative approach to reactor design and demonstrated practical application of theoretical concepts.",
    tags: ["Chemical Engineering", "Reactor Design", "Safety", "Optimization"],
    icon: TestTube,
    year: "2028",
    course: "Chemical Engineering Course",
  },
  {
    id: 2,
    title: "The Green Thumb Chemist",
    description:
      "Developed environmentally-friendly lab practices and sustainable chemistry alternatives",
    fullDescription:
      "The Green Thumb Chemist was a comprehensive initiative developed through the Chemistry Club aimed at revolutionizing laboratory practices. The project focused on implementing sustainable alternatives to hazardous chemicals, reducing waste, and promoting green chemistry principles. Educational workshops and forums were organized to spread awareness among peers about the importance of environmental responsibility in chemistry. The project successfully influenced lab protocols and inspired other students to adopt eco-friendly practices.",
    tags: ["Green Chemistry", "Sustainability", "Education", "Innovation"],
    icon: Leaf,
    year: "2029",
    course: "Chemistry Club",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(
    null
  );

  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my research projects and academic initiatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <Card
                  className="glass-effect p-8 h-full cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <div className="text-sm text-primary font-semibold mb-2">
                    {project.year} • {project.course}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Project Detail Modal */}
          <Dialog
            open={!!selectedProject}
            onOpenChange={() => setSelectedProject(null)}
          >
            <DialogContent className="glass-effect max-w-2xl">
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  {selectedProject && (
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <selectedProject.icon className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <div>
                    <div className="text-sm text-primary font-semibold">
                      {selectedProject?.year} • {selectedProject?.course}
                    </div>
                    <DialogTitle className="text-2xl">
                      {selectedProject?.title}
                    </DialogTitle>
                  </div>
                </div>
                <DialogDescription className="text-base leading-relaxed pt-4">
                  {selectedProject?.fullDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-wrap gap-2 pt-4">
                {selectedProject?.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </PageTransition>
  );
}
