import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "./AnimatedSection";
import { motion } from "motion/react";

const allProjects = [
  {
    title: "Phishing Detection System",
    description: "An AI-powered system that analyzes URLs and website content to detect phishing attempts using machine learning algorithms and threat intelligence feeds.",
    imageUrl: "https://www.opensourceforu.com/wp-content/uploads/2022/03/phishing-attack.jpg", // Paste your image URL here
    technologies: ["Python", "TensorFlow", "Flask", "SQLite"],
    githubUrl: "https://github.com/faisal4213/Phishing-Detection/tree/main/Phishing%20Detection",
    category: "AI Security",
    status: "Completed",
    featured: true
  },
  {
    title: "Malware Detection",
    description: "Developed a machine learning model using GAN to detect and classify malware with improved accuracy.",
    imageUrl: "https://developer-blogs.nvidia.com/wp-content/uploads/2017/11/magnifying-glass-locating-malware-in-computer-code-picture-id465994857-400x300.jpg", // Paste your image URL here
    technologies: ["Python", "Nmap", "TensorFlow", "YARA"],
    githubUrl: "https://github.com/faisal4213/malware-detection",
    category: "Network Security",
    status: "Completed",
    featured: true
  },
  {
    title: "Hotel Booking web page",
    description: "A responsive web page.",
    imageUrl: "https://as1.ftcdn.net/jpg/00/29/13/38/1000_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg", // Paste your image URL here
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/faisal4213/hotelbookingsystem",
    category: "Web Development",
    status: "Completed",
    featured: true
  },
  {
    title: "SIEM Dashboard",
    description: "A Security Information and Event Management dashboard for real-time monitoring, threat detection, and incident response coordination.",
    imageUrl: "https://www.splunk.com/content/dam/splunk-blogs/images/en_us/2023/06/executive-visibility-3.png", // Paste your image URL here
    technologies: ["ELK Stack", "Python", "Kibana", "Logstash"],
    githubUrl: "#",
    category: "Monitoring",
    status: "In Progress",
    featured: true
  },
  {
    title: "Automated Vulnerability Scan",
    description: "Designing a module that correlates identified software versions with known CVEs, classifies them by severity, and generates an actionable vulnerability report.",
    imageUrl: "https://assets.esecurityplanet.com/uploads/2023/07/Vulnerability-Scan-scaled.jpeg", // Paste your image URL here
    technologies: ["Python", "NVD", "SQLMap"],
    githubUrl: "#",
    category: "Web Security",
    status: "In Progress",
    featured: false
  },
  {
    title: "Quiz Game",
    description: "A Game Using OOPS Concept.",
    imageUrl: "https://t3.ftcdn.net/jpg/04/91/43/66/240_F_491436678_yqI4cZyMq9s25qtrhKD3JioJQvlNdfsM.jpg", // Paste your image URL here
    technologies: ["Python"],
    githubUrl: "https://github.com/faisal4213/quizgame-",
    category: "Development",
    status: "Completed",
    featured: false
  }
];

const categories = ["All", "AI Security", "Network Security", "Malware Analysis", "Monitoring", "Web Security", "Cryptography", "Education", "Automation", "Threat Intelligence", "Blockchain", "Mobile Security", "Cloud Security"];
const statusTypes = ["All", "Completed", "In Progress", "Planned"];

interface AllProjectsPageProps {
  onBack: () => void;
}

export function AllProjectsPage({ onBack }: AllProjectsPageProps) {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <Button 
                variant="outline" 
                onClick={onBack}
                className="border-chart-1 text-chart-1 hover:bg-chart-1 hover:text-white"
              >
                ← Back to Portfolio
              </Button>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-foreground mb-4">All  Projects</h1>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                A comprehensive collection of cybersecurity projects spanning threat detection, vulnerability assessment, 
                security automation, and research initiatives. Each project demonstrates practical security skills and real-world application.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <StaggeredItem key={index}>
                <ProjectCard project={project} />
              </StaggeredItem>
            ))}
          </StaggeredContainer>

          <AnimatedSection delay={0.6}>
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-chart-1/10 to-chart-2/10 rounded-lg p-8">
                <h3 className="text-foreground mb-4">Interested in Collaboration?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always looking for exciting cybersecurity projects and research opportunities. 
                  Whether it's penetration testing, security research, or building defensive tools, let's work together!
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button 
                    className="bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-2 hover:to-chart-3"
                    onClick={() => window.open('https://www.linkedin.com/in/mohammed-faisal-jahangir/', '_blank')}
                  >
                    Get In Touch
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-chart-1 text-chart-1 hover:bg-chart-1 hover:text-white"
                    onClick={() => window.open('https://github.com/faisal4213', '_blank')}
                  >
                    View GitHub
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof allProjects[0] }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "from-chart-4 to-chart-5";
      case "In Progress":
        return "from-chart-2 to-chart-3";
      case "Planned":
        return "from-chart-1 to-chart-2";
      default:
        return "from-chart-1 to-chart-2";
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }} 
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className={`overflow-hidden hover:shadow-lg transition-all group h-full flex flex-col ${
        project.featured ? 'ring-2 ring-chart-1/20' : ''
      }`}>
        <div className="aspect-video bg-gradient-to-br from-chart-1/10 to-chart-2/10 relative overflow-hidden">
          <ProjectImage imageUrl={project.imageUrl} alt={project.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          {project.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-gradient-to-r from-chart-1 to-chart-2 text-white border-0">
                ⭐ Featured
              </Badge>
            </div>
          )}
          
          <div className="absolute top-3 right-3">
            <Badge className={`bg-gradient-to-r ${getStatusColor(project.status)} text-white border-0`}>
              {project.status}
            </Badge>
          </div>
        </div>
        
        <CardHeader className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="text-xs bg-gradient-to-r from-chart-3/20 to-chart-4/20 text-chart-3 border-chart-3">
              {project.category}
            </Badge>
          </div>
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription className="line-clamp-3">{project.description}</CardDescription>
        </CardHeader>
        
        <CardContent className="mt-auto">
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.map((tech, index) => (
              <Badge 
                key={tech} 
                className={`text-xs bg-gradient-to-r ${
                  index % 4 === 0 ? 'from-chart-1/30 to-chart-2/30 text-chart-1' :
                  index % 4 === 1 ? 'from-chart-2/30 to-chart-3/30 text-chart-2' :
                  index % 4 === 2 ? 'from-chart-3/30 to-chart-4/30 text-chart-3' :
                  'from-chart-4/30 to-chart-5/30 text-chart-4'
                } border-0`}
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          <div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full border-chart-1 text-chart-1 hover:bg-chart-1 hover:text-white"
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