import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase, Award, FileText } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering, Electronics and Communication Engineering",
    institution: "SNS College of Engineering",
    location: "Coimbatore",
    period: "2022-2026",
    score: "CGPA: 9.82",
  },
  {
    degree: "Senior School",
    institution: "Kongunadu Matric Higher Secondary School",
    location: "Namakkal",
    period: "2022",
    score: "87.16%",
  },
  {
    degree: "Secondary School",
    institution: "Kongunadu Matric Higher Secondary School",
    location: "Namakkal",
    period: "2020",
    score: "98.6%",
  },
];

const experience = [
  {
    title: "Full Stack Developer Intern",
    organization: "Syncner (Remote)",
    period: "Jul 2025 - Present",
    responsibilities: [
      "Built web apps using React.js and Node.js",
      "Designed APIs with Postman and optimized database queries",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    organization: "Infosys Springboard (Remote)",
    period: "Sep 2025 – Nov 2025",
    responsibilities: [
      "Built an AI based Speech Translation System using Flask, JavaScript and Google/Microsoft APIs",
      "Gained experience in AI integration, web development and multilingual communication systems",
    ],
  },
];

const certifications = [
  { name: "Azure AI Fundamentals", issuer: "Microsoft", date: "Jun 2025" },
  { name: "Agentforce Specialist", issuer: "Salesforce", date: "Aug 2025" },
  { name: "AI Associate", issuer: "Salesforce", date: "Oct 2024" },
  { name: "SnowPro Associate", issuer: "Snowflake", date: "Jul 2025" },
  { name: "Cloud Infrastructure Certified Foundations Associate", issuer: "Oracle", date: "Feb 2025" },
  { name: "Java", issuer: "PrepInsta", date: "Sep 2023" },
  { name: "SQL (Basics)", issuer: "HackerRank", date: "Jul 2025" },
];

const credentials = [
  { name: "TCS iON National Qualifier Test (Cognitive)", issuer: "TCS iON", date: "May 2025" },
  { name: "GitHub Advanced Security Practitioner", issuer: "GitHub", date: "Jun 2025" },
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

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className={index !== education.length - 1 ? "pb-6 border-b border-border/50" : ""}>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-primary font-semibold">
                      {edu.institution}{edu.location && `, ${edu.location}`}
                    </p>
                    <p className="text-muted-foreground">
                      {edu.period} • {edu.score}
                    </p>
                  </div>
                ))}
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

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className={index !== experience.length - 1 ? "pb-6 border-b border-border/50" : ""}>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-primary font-semibold">{exp.organization}</p>
                    <p className="text-muted-foreground mb-3">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-8"
          >
            <Card className="glass-effect p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Additional Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Card className="glass-effect p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Additional Credentials</h2>
              </div>

              <div className="space-y-3">
                {credentials.map((cred, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{cred.name}</p>
                      <p className="text-xs text-muted-foreground">{cred.issuer} • {cred.date}</p>
                    </div>
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
