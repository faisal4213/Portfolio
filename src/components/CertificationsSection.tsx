import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { AnimatedSection } from "./AnimatedSection";
import { motion, useMotionValue, useAnimationFrame } from "motion/react";
import { useState, useRef } from "react";

const certifications = [
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2025",
    status: "In Progress",
    description: "Foundational certification covering network security, compliance, operational security, and threats and vulnerabilities.",
  
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2025",
    status: "Planned",
    description: "Comprehensive certification covering ethical hacking methodologies, penetration testing, and vulnerability assessment.",
    
  },
  {
    title: "Python",
    issuer: "HackerRank",
    date: "2023",
    status: "Completed",
    description: "certification demonstrating expertise in Python Programming language.",
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/da8c012aace9" // Add your credential URL here
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "2024",
    status: "Completed",
    description: "Learned the fundamentals of web design and development, including HTML, CSS, and JavaScript, to build responsive and user-friendly web interfaces.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/QUEEAQFJJM5N" // Add your credential URL here
  },
  {
    title: "Foundation of Cybersecurity",
    issuer: "Google",
    date: "2024",
    status: "Completed",
    description: "Recognize core skills and knowledge needed to become a cybersecurity analyst.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/LNFQD9WJMVTX" // Add your credential URL here
  },
  {
    title: "Play It safe: Manage Security Risk",
    issuer: "Google",
    date: "2024",
    status: "Completed",
    description: "Identify the primary threats, risks, and vulnerabilities to business operations.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/68UVC9BPY57B" // Add your credential URL here
  },
   {
    title: "Tools of The Trade: Linux and Sql",
    issuer: "Google",
    date: "2024",
    status: "Completed",
    description: "Explain the relationship between operating systems, applications, and hardware.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/94E52NFDLYH3" // Add your credential URL here
  },
 {
    title: "Connect and protect: Network and Network Security ",
    issuer: "Google",
    date: "2024",
    status: "Completed",
    description: "Covers types and components of networks, data transmission processes, network intrusion prevention methods, and system hardening techniques to enhance overall cybersecurity.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/GSWM4UZYWFX9" // Add your credential URL here
  },
   {
    title: "Networking Basics ",
    issuer: "Cisco Networking Academy",
    date: "2025",
    status: "Completed",
    description: "learned the basics of computer networking and discover how networks operate.",
    credentialUrl: "https://www.netacad.com/certificates/?issuanceId=1981d25e-ad5f-43c0-a382-61b9e87ba1cd" // Add your credential URL here
  },
   {
    title: "Ethical Hacker ",
    issuer: "Cisco Networking Academy",
    date: "2025",
    status: "Inprogress",
    description: "Learning the art of offensive security to uncover cyber threats and vulnerabilities before the cybercriminals do.",
    credentialUrl: "#" // Add your credential URL here
  }
];

export function CertificationsSection() {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  
  // Calculate proper dimensions for smooth animation
  const cardWidth = 320; // 80 * 4 (w-80 = 320px)
  const gap = 24; // gap-6 = 24px
  const totalCardWidth = cardWidth + gap;
  const totalWidth = certifications.length * totalCardWidth;
  
  // Continuous animation that resumes from current position
  useAnimationFrame((time, delta) => {
    if (!isHovered) {
      const currentX = x.get();
      // Move 50 pixels per second (adjust speed as needed)
      const newX = currentX - (delta / 1000) * 50;
      
      // Reset position when first set completes
      if (newX <= -totalWidth) {
        x.set(newX + totalWidth);
      } else {
        x.set(newX);
      }
    }
  });

  return (
    <AnimatedSection>
      <section id="certifications" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="text-center mb-12">
                <h2 className="text-foreground mb-4">Certifications & Achievements</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  The cybersecurity landscape evolves rapidly, requiring continuous learning and skill development. 
                  Here are my current certifications and planned achievements.
                </p>
              </div>
            </AnimatedSection>
            
            {/* Continuous Carousel Container */}
            <div 
              className="relative overflow-hidden py-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div 
                className="flex gap-6"
                style={{ 
                  x,
                  width: `${totalWidth * 2}px`,
                  willChange: "transform"
                }}
              >
                {/* First set of cards */}
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={`first-${index}`}
                    className="flex-shrink-0 w-80 px-2"
                    whileHover={{ 
                      y: -12,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className="hover:shadow-2xl hover:shadow-chart-4/20 transition-all duration-300 group border-t-4 border-t-transparent hover:border-t-chart-4 h-full backdrop-blur-sm cursor-pointer"
                      onClick={() => cert.credentialUrl && window.open(cert.credentialUrl, '_blank')}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                          >
                            <Badge 
                              className={`text-xs ${
                                cert.status === "Active" 
                                  ? 'bg-gradient-to-r from-chart-4 to-chart-5 text-white border-0' 
                                  : cert.status === "Completed"
                                  ? 'bg-gradient-to-r from-chart-2 to-chart-3 text-white border-0'
                                  : 'bg-gradient-to-r from-chart-1 to-chart-2 text-white border-0'
                              }`}
                            >
                              {cert.status === "Active" ? "✅ Active" : 
                               cert.status === "Completed" ? "✓ Completed" : "📚 " + cert.status}
                            </Badge>
                          </motion.div>
                          <span className="text-xs text-muted-foreground">{cert.date}</span>
                        </div>
                        <CardTitle className="text-lg group-hover:text-chart-4 transition-colors duration-300">{cert.title}</CardTitle>
                        <CardDescription className="text-chart-4 group-hover:text-chart-5 transition-colors duration-300">
                          {cert.issuer}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          {cert.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
                {/* Second set of cards for seamless loop */}
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={`second-${index}`}
                    className="flex-shrink-0 w-80 px-2"
                    whileHover={{ 
                      y: -12,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className="hover:shadow-2xl hover:shadow-chart-4/20 transition-all duration-300 group border-t-4 border-t-transparent hover:border-t-chart-4 h-full backdrop-blur-sm cursor-pointer"
                      onClick={() => cert.credentialUrl && window.open(cert.credentialUrl, '_blank')}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge 
                            className={`text-xs ${
                              cert.status === "Active" 
                                ? 'bg-gradient-to-r from-chart-4 to-chart-5 text-white border-0' 
                                : cert.status === "Completed"
                                ? 'bg-gradient-to-r from-chart-2 to-chart-3 text-white border-0'
                                : 'bg-gradient-to-r from-chart-1 to-chart-2 text-white border-0'
                            }`}
                          >
                            {cert.status === "Active" ? "✅ Active" : 
                             cert.status === "Completed" ? "✓ Completed" : "📚 " + cert.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{cert.date}</span>
                        </div>
                        <CardTitle className="text-lg group-hover:text-chart-4 transition-colors duration-300">{cert.title}</CardTitle>
                        <CardDescription className="text-chart-4 group-hover:text-chart-5 transition-colors duration-300">
                          {cert.issuer}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          {cert.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* TryHackMe Achievements Section */}
            <AnimatedSection delay={0.6}>
              <div className="mt-16">
                <div className="text-center mb-8">
                  <h3 className="text-foreground mb-2">Platform Achievements</h3>
                  <p className="text-muted-foreground">
                    Active participation in hands-on cybersecurity challenges and CTF platforms
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {/* TryHackMe Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card 
                      className="hover:shadow-2xl hover:shadow-chart-1/20 transition-all duration-300 group border-l-4 border-l-chart-1 cursor-pointer"
                      onClick={() => window.open('https://tryhackme.com/p/xhacker3', '_blank')}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl group-hover:text-chart-1 transition-colors flex items-center gap-2">
                            <span className="text-2xl">🎯</span>
                            TryHackMe
                          </CardTitle>
                          <Badge className="bg-gradient-to-r from-chart-1 to-chart-2 text-white border-0">
                            Active
                          </Badge>
                        </div>
                        <CardDescription>Hands-on Cybersecurity Training</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-muted/50 p-3 rounded-lg text-center group-hover:bg-chart-1/10 transition-colors">
                              <p className="text-2xl font-bold text-chart-1">38</p>
                              <p className="text-xs text-muted-foreground">Rooms Completed</p>
                            </div>
                            <div className="bg-muted/50 p-3 rounded-lg text-center group-hover:bg-chart-2/10 transition-colors">
                              <p className="text-2xl font-bold text-chart-2">249870</p>
                              <p className="text-xs text-muted-foreground">Current Rank</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs border-chart-1 text-chart-1">
                              Web Security
                            </Badge>
                            <Badge variant="outline" className="text-xs border-chart-2 text-chart-2">
                              Network Security
                            </Badge>
                            <Badge variant="outline" className="text-xs border-chart-3 text-chart-3">
                              Cryptography
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-muted-foreground">
                            Click to view full TryHackMe profile and achievements
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* HackTheBox Card (Optional - can be customized) */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card 
                      className="hover:shadow-2xl hover:shadow-chart-3/20 transition-all duration-300 group border-l-4 border-l-chart-3 cursor-pointer"
                      onClick={() => window.open('https://app.hackthebox.com/profile/overview', '_blank')}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl group-hover:text-chart-3 transition-colors flex items-center gap-2">
                            <span className="text-2xl">📦</span>
                            HackTheBox
                          </CardTitle>
                          <Badge className="bg-gradient-to-r from-chart-3 to-chart-4 text-white border-0">
                            Active
                          </Badge>
                        </div>
                        <CardDescription>Penetration Testing Labs</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-muted/50 p-3 rounded-lg text-center group-hover:bg-chart-3/10 transition-colors">
                              <p className="text-2xl font-bold text-chart-3">--</p>
                              <p className="text-xs text-muted-foreground">Machines Owned</p>
                            </div>
                            <div className="bg-muted/50 p-3 rounded-lg text-center group-hover:bg-chart-4/10 transition-colors">
                              <p className="text-2xl font-bold text-chart-4">--</p>
                              <p className="text-xs text-muted-foreground">Current Rank</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs border-chart-3 text-chart-3">
                              Penetration Testing
                            </Badge>
                            <Badge variant="outline" className="text-xs border-chart-4 text-chart-4">
                              Red Team
                            </Badge>
                            <Badge variant="outline" className="text-xs border-chart-5 text-chart-5">
                              OSINT
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-muted-foreground">
                            Click to view full HackTheBox profile and achievements
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">
                  Continuously expanding knowledge in cybersecurity. Currently pursuing industry-standard certifications and hands-on training.
                </p>
                <motion.div 
                  className="flex gap-2 justify-center flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge className="bg-gradient-to-r from-chart-1/20 to-chart-2/20 text-chart-1 border-chart-1">
                      🎯 In Progress: CEH (Certified Ethical Hacker)
                    </Badge>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge className="bg-gradient-to-r from-chart-3/20 to-chart-4/20 text-chart-3 border-chart-3">
                      🎯 Next: CompTIA Security+
                    </Badge>
                  </motion.div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}