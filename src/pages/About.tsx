import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Beaker, GraduationCap, Award, Target } from "lucide-react";

const skills = [
  "Organic Chemistry",
  "Inorganic Chemistry",
  "Physical Chemistry",
  "Analytical Chemistry",
  "Chemical Engineering",
  "Thermodynamics",
  "Material Science",
  "Laboratory Techniques",
  "Chromatography",
  "Spectroscopy",
  "Data Analysis",
  "Research Methodology",
];

const timeline = [
  {
    year: "2030",
    title: "Research Publication",
    description: "Contributed to research paper on synthesis of novel organic compounds",
    icon: Beaker,
  },
  {
    year: "2029-2030",
    title: "Undergraduate Research Assistant",
    description: "Chemistry Department at East State University",
    icon: Target,
  },
  {
    year: "2027",
    title: "Chemistry Olympiad",
    description: "Received Gold Award in Chemistry Olympiad",
    icon: Award,
  },
  {
    year: "2026",
    title: "Started Bachelor's Degree",
    description: "Began B.S. in Chemistry at East State University",
    icon: GraduationCap,
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A chemistry graduate passionate about innovation and research
            </p>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-16"
          >
            <Card className="glass-effect p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Professional Summary
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I am a chemistry graduate seeking to apply my extensive academic
                background and laboratory experience in an organization with an
                innovative vision. I am looking forward to contributing to a dynamic
                team and supporting research and development efforts.
              </p>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-4 rounded-lg text-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">My Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full glass-effect flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Card className="glass-effect flex-1 p-6 hover:scale-[1.02] transition-transform">
                    <div className="text-sm text-primary font-semibold mb-1">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
