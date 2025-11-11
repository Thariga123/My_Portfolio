import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase, Award, FileText } from "lucide-react";

const education = {
  degree: "B.E. Electronics and Communication Engineering",
  university: "SNS College of Engineering",
  location: "Coimbatore",
  period: "2022-2026",
  cgpa: "9.82",
};

const experience = {
  title: "Full Stack Developer",
  organization: "Syncner (Remote, India)",
  period: "Jul 2025 - Present",
  responsibilities: [
    "Built web applications using React.js and Node.js",
    "Designed APIs with Postman and optimized database queries",
    "Collaborated with cross-functional teams to deliver high-quality solutions",
  ],
};

const certifications = [
  "SnowPro Associate: Platform - Snowflake",
  "Python - Prep Insta",
  "AI Specialist - Salesforce",
  "AI Associate - Salesforce",
  "Agentforce Specialist - Salesforce",
  "SecOps Certified Network Security Practitioner - SecOps",
  "Oracle AI Foundation Associate - Oracle",
  "SecOps Certified AppSec Practitioner - SecOps",
  "GitHub Advanced Security Practitioner - GitHub",
  "Microsoft Azure AI Fundamentals - Microsoft",
  "SQL (Basic) - HackerRank",
  "Web Development Fundamentals - IBM",
];

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Thariga_Shrinithi_Resume.pdf";
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
                  {education.period} • CGPA: {education.cgpa}
                </p>
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
                <h2 className="text-2xl font-bold">Experience</h2>
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

          {/* Certifications */}
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
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
