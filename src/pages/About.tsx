import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Code, Database, Server, Globe, Palette, Zap } from "lucide-react";

const skills = [
  { name: "Programming", items: ["Java", "HTML", "CSS", "JavaScript", "Python"], icon: Code },
  { name: "Frontend", items: ["React.js", "Responsive Design"], icon: Globe },
  { name: "Backend", items: ["Node.js", "Express.js", "REST APIs"], icon: Server },
  { name: "Database", items: ["MongoDB", "SQL"], icon: Database },
  { name: "Tools", items: ["Git & GitHub", "VS Code", "Postman", "Canva"], icon: Palette },
  { name: "Salesforce", items: ["Apex (Basics)", "LWC", "Flow Builder"], icon: Zap },
];

const timeline = [
  {
    year: "2025-Present",
    title: "Full Stack Developer Intern",
    organization: "Syncner (Remote)",
    description: "Built web apps using React.js and Node.js. Designed APIs with Postman and optimized database queries.",
  },
  {
    year: "Sep 2025 – Nov 2025",
    title: "Artificial Intelligence Intern",
    organization: "Infosys Springboard (Remote)",
    description: "Built an AI based Speech Translation System using Flask, JavaScript and Google/Microsoft APIs. Gained experience in AI integration, web development and multilingual communication systems.",
  },
  {
    year: "2022-2026",
    title: "B.E. Electronics and Communication",
    organization: "SNS College of Engineering",
    description: "CGPA: 9.82 - Pursuing engineering with focus on innovation and technical excellence",
  },
];

export default function About() {
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
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Motivated and enthusiastic Full Stack Developer and AI enthusiast looking forward to an opportunity within the IT field to apply technical expertise in web development and artificial intelligence. 
              Eager to contribute to innovative projects associated with frontend, backend, and intelligent system integrations while continuously enhancing skills and adapting to emerging technologies.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                >
                  <Card className="glass-effect p-6 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <skill.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{skill.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-muted rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className={`mb-8 flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                  <Card
                    className={`glass-effect p-6 w-5/12 ${
                      index % 2 === 0 ? "mr-auto" : "ml-auto"
                    }`}
                  >
                    <div className="text-sm text-primary font-semibold mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.organization}
                    </p>
                    <p className="text-sm">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
