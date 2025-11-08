import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "./AnimatedSection";
import { motion } from "motion/react";

const projects = [
  {
    title: "Phishing Detection System",
    description: "An AI-powered system that analyzes URLs and website content to detect phishing attempts using machine learning algorithms and threat intelligence feeds.",
    imageUrl: "https://www.opensourceforu.com/wp-content/uploads/2022/03/phishing-attack.jpg", // Paste your image URL here
    technologies: ["Python", "TensorFlow", "Flask", "SQLite"],
    githubUrl: "https://github.com/faisal4213/Phishing-Detection/tree/main/Phishing%20Detection"
  },
  {
    title: "Malware Detection",
    description: "Developed a machine learning model using GAN to detect and classify malware with improved accuracy.",
    imageUrl: "https://developer-blogs.nvidia.com/wp-content/uploads/2017/11/magnifying-glass-locating-malware-in-computer-code-picture-id465994857-400x300.jpg", // Paste your image URL here
    technologies: ["Python", "Nmap", "Scapy", "Django"],
    githubUrl: "https://github.com/faisal4213/malware-detection"
  },
  {
    title: "Automated Vulnerability Scan",
    description: " Designing a module that correlates identified software versions with known CVEs, classifies them by severity, and generates an actionable vulnerability report.",
    imageUrl: "https://assets.esecurityplanet.com/uploads/2023/07/Vulnerability-Scan-scaled.jpeg", // Paste your image URL here
    technologies: ["VirtualBox", "Python", "Wireshark", "NVD"],
    githubUrl: "#"
  },
  {
    title: "SIEM Dashboard",
    description: "A Security Information and Event Management dashboard for real-time monitoring, threat detection, and incident response coordination.",
    imageUrl: "https://www.splunk.com/content/dam/splunk-blogs/images/en_us/2023/06/executive-visibility-3.png", // Paste your image URL here
    technologies: ["ELK Stack", "Python", "Kibana", "Logstash"],
    githubUrl: "#"
  }
];

interface ProjectsSectionProps {
  onNavigateToProjects?: () => void;
}

export function ProjectsSection({ onNavigateToProjects }: ProjectsSectionProps) {
  return (
    <AnimatedSection>
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection delay={0.2}>
              <h2 className="text-center mb-12 text-foreground">Cybersecurity Projects</h2>
            </AnimatedSection>
            
            <StaggeredContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {projects.map((project, index) => (
                <StaggeredItem key={index} className="h-full">
                  <ProjectCard project={project} />
                </StaggeredItem>
              ))}
            </StaggeredContainer>
            
            <AnimatedSection delay={0.6}>
              <div className="text-center mt-12">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={onNavigateToProjects}
                  className="transition-all hover:shadow-lg hover:shadow-chart-1/20"
                >
                  View All Projects
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
      <Card className="overflow-hidden hover:shadow-lg transition-all group h-full flex flex-col">
      <div className="aspect-[4/3] bg-gradient-to-br from-chart-1/10 to-chart-2/10 relative overflow-hidden">
        <ProjectImage imageUrl={project.imageUrl} alt={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <CardHeader className="p-4 pb-3 flex-shrink-0">
        <CardTitle className="line-clamp-1 text-base">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow flex flex-col justify-between">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.technologies.map((tech, index) => (
            <Badge 
              key={tech} 
              className={`text-xs px-2 py-0.5 bg-gradient-to-r ${
                index % 4 === 0 ? 'from-chart-1 to-chart-2' :
                index % 4 === 1 ? 'from-chart-2 to-chart-3' :
                index % 4 === 2 ? 'from-chart-3 to-chart-4' :
                'from-chart-4 to-chart-5'
              } text-white border-0`}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-auto">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-xs h-8 border-chart-1 text-chart-1 hover:bg-chart-1 hover:text-white"
            onClick={() => project.githubUrl && project.githubUrl !== '#' && window.open(project.githubUrl, '_blank')}
            disabled={!project.githubUrl || project.githubUrl === '#'}
          >
            View Code
          </Button>
        </div>
      </CardContent>
    </Card>
    </motion.div>
  );
}

function ProjectImage({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  // If imageUrl is provided, display the image
  if (imageUrl && imageUrl.trim() !== "") {
    return (
      <ImageWithFallback
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover"
      />
    );
  }

  // Otherwise, show placeholder with project title
  return (
    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
      <span className="text-muted-foreground text-sm text-center px-4">{alt}</span>
    </div>
  );
}
