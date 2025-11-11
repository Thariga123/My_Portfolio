import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase, Award, FileText } from "lucide-react";

const education = {
  degree: "Bachelor of Science in Chemistry",
  university: "East State University",
  location: "Valley City",
  period: "2026-2030",
  gpa: "3.8",
  coursework: [
    "Organic Chemistry",
    "Inorganic Chemistry",
    "Physical Chemistry",
    "Analytical Chemistry",
    "Chemical Engineering Principles",
    "Thermodynamics",
    "Material Science",
  ],
};

const experience = {
  title: "Undergraduate Research Assistant",
  organization: "Chemistry Department of East State University",
  period: "2029-2030",
  responsibilities: [
    "Collaborated with a research team to study the synthesis of novel organic compounds",
    "Conducted experiments using chromatography, spectroscopy, and other analytical techniques",
    "Analyzed and interpreted data, contributing to a research paper submitted for publication",
  ],
};

const awards = [
  "Dean's List, East State University (2026-2030)",
  "Gold Award, Chemistry Olympiad (2027)",
];

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Emma_Ahearn_Resume.pdf";
    link.click();
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Resume
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              A comprehensive overview of my academic and professional journey
            </p>
            <Button onClick={handleDownload} size="lg" className="group">
              <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
              Download PDF
            </Button>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <Card className="glass-effect p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold">{education.degree}</h3>
                <p className="text-primary font-semibold">
                  {education.university}, {education.location}
                </p>
                <p className="text-muted-foreground mb-2">
                  {education.period} • GPA: {education.gpa}
                </p>
              </div>

              <div>
                <p className="font-semibold mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            <Card className="glass-effect p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Research Experience</h2>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <p className="text-primary font-semibold">
                  {experience.organization}
                </p>
                <p className="text-muted-foreground mb-4">{experience.period}</p>
              </div>

              <ul className="space-y-2">
                {experience.responsibilities.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="glass-effect p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Notable Awards</h2>
              </div>

              <ul className="space-y-3">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
