import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import profilePhoto from 'figma:asset/295e2681dd3f906a80831a3a6dbb07154d2a6284.png';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 via-background to-chart-2/10 opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-tr from-chart-3/5 via-transparent to-chart-4/5 opacity-60" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative flex justify-center">
              <div className="rounded-full bg-gradient-to-r from-chart-1 to-chart-2 p-1">
                <div className="rounded-full bg-background p-2">
                  <img
                    src={profilePhoto}
                    alt="Mohammed Faisal Jahangir - Cybersecurity Professional"
                    className="size-28 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-chart-1 to-chart-2 text-white border-0">
                Available for opportunities
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              Cybersecurity Enthusiast | Think Secure Build Secure | VAPT
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Dedicated cybersecurity professional focused on identifying vulnerabilities, securing systems, 
              and building robust defense mechanisms. Specializing in penetration testing, vulnerability assessment, 
              and threat analysis to create safer digital environments.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-2 hover:to-chart-3"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg"
                className="border-chart-1 text-chart-1 hover:bg-chart-1 hover:text-white"
                onClick={() => window.open('https://www.linkedin.com/in/mohammed-faisal-jahangir/', '_blank')}
              >
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex gap-3 justify-center mt-8 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            {["Penetration Testing", "VAPT", "Threat Analysis", "Network Security", "Malware Analysis"].map((tech, index) => (
              <motion.span 
                key={tech}
                className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r cursor-default ${
                  index % 5 === 0 ? 'from-chart-1/20 to-chart-1/10 text-chart-1' :
                  index % 5 === 1 ? 'from-chart-2/20 to-chart-2/10 text-chart-2' :
                  index % 5 === 2 ? 'from-chart-3/20 to-chart-3/10 text-chart-3' :
                  index % 5 === 3 ? 'from-chart-4/20 to-chart-4/10 text-chart-4' :
                  'from-chart-5/20 to-chart-5/10 text-chart-5'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.9 + (index * 0.1), 
                  ease: "easeOut" 
                }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}