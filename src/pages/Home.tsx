import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { useEffect, useState } from "react";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Thariga Shrinithi";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="gradient-text">{displayText}</span>
            {showCursor && <span className="animate-pulse">|</span>}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Full Stack Developer | Tech Enthusiast | Problem Solver
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Aspiring engineering student driven to develop innovative solutions through technical expertise and creativity. 
            Passionate about continuous learning and eager to apply skills in real-world projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/projects">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          {/* Floating particles */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary/20"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                  ],
                  x: [
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                  ],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
