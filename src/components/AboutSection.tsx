import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { AnimatedSection } from "./AnimatedSection";

const skills = [
  { name: "Penetration Testing", color: "from-chart-1 to-chart-1" },
  { name: "VAPT", color: "from-chart-2 to-chart-2" },
  { name: "Network Security", color: "from-chart-3 to-chart-3" },
  { name: "Malware Analysis", color: "from-chart-4 to-chart-4" },
  { name: "Python", color: "from-chart-5 to-chart-5" },
  { name: "Java", color: "from-chart-1 to-chart-2" },
  { name: "Linux", color: "from-chart-2 to-chart-3" },
  { name: "Wireshark", color: "from-chart-3 to-chart-4" },
  { name: "Nmap", color: "from-chart-4 to-chart-5" },
  { name: "Burp Suite", color: "from-chart-5 to-chart-1" },
  { name: "Metasploit", color: "from-chart-1 to-chart-3" },
  { name: "OWASP", color: "from-chart-2 to-chart-4" },
  { name: "Kali Linux", color: "from-chart-3 to-chart-5" },
  { name: "TryHackMe", color: "from-chart-4 to-chart-1" },
  { name: "HackTheBox", color: "from-chart-5 to-chart-2" }
];

const experience = [
  {
    title: "Ethical Hacker Intern",
    company: "Huntmetrics",
    period: "Aug-2023 - Sep-2023",
    description:
      "Worked on vulnerability research, malware analysis, and threat hunting, with a focus on a security misconfiguration project in Active Directory",
  }
];

const education = [
  {
    degree: "B.E Computer Science Engineering ",
    institution: "Osmania University",
    location: "Hyderabad, India",
    period: "2021 - 2025",
    grade: "CGPA: 9/10",
    description: "Comprehensive computer science education with focus on programming, software development, and emerging technologies. Specialized coursework in cybersecurity fundamentals, network programming, and system administration.",
    highlights: [
      "Data Structures & Algorithms",
      "Network Programming",
      "Database Management Systems",
      "Cybersecurity Fundamentals",
      "Software Engineering"
    ]
  }
  
];



export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-chart-1/20 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-chart-2/20 to-transparent rounded-full blur-xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <h2 className="text-center mb-12 text-foreground">
              About Me
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="mb-4 text-foreground">My Story</h3>
              <p className="text-muted-foreground mb-4">
                I’m Mohammed Faisal Jahangir, a Computer Science graduate and aspiring cybersecurity professional with a background in web development, Java, and Python. I am passionate about solving cybersecurity problems, from finding phishing websites to examining malware. I constantly improve my skills through projects, labs, and security platforms like TryHackMe and HackTheBox
              </p>
              <p className="text-muted-foreground">
                I enjoy exploring how systems can be broken and secured. I have created hands-on projects and collaborated in hackathons. I am currently building my portfolio to share my journey through blogs and projects. My dream is to work on a global cybersecurity team and help create safer digital spaces.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-foreground">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    className={`bg-gradient-to-r ${skill.color} text-white border-0 hover:scale-105 transition-transform`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <AnimatedSection delay={0.2}>
            <h3 className="mb-6 text-foreground">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  <Card className="border-l-4 border-l-chart-3 hover:shadow-lg transition-all hover:border-l-chart-4 group">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-chart-3 transition-colors">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-chart-3 mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            📍 {edu.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-gradient-to-r from-chart-3 to-chart-4 text-white border-0 mb-2">
                            {edu.period}
                          </Badge>
                          <p className="text-sm font-medium text-chart-4">
                            {edu.grade}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {edu.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm text-foreground">Key Subjects:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs border-chart-3 text-chart-3 hover:bg-chart-3 hover:text-white transition-all"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Experience Section */}
          <AnimatedSection delay={0.4}>
            <h3 className="mb-6 mt-12 text-foreground">Professional Experience</h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div key={index}>
                  <Card className="border-l-4 border-l-chart-1 hover:shadow-lg transition-all hover:border-l-chart-2 group">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg group-hover:text-chart-1 transition-colors">
                            {exp.title}
                          </CardTitle>
                          <p className="text-chart-1">
                            {exp.company}
                          </p>
                        </div>
                        <Badge className="bg-gradient-to-r from-chart-1 to-chart-2 text-white border-0">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}