import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ContactSection } from "./components/ContactSection";
import { AllProjectsPage } from "./components/AllProjectsPage";
import { Toaster } from "./components/ui/sonner";
import { useState, useEffect } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "projects">("home");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigateToProjects = () => {
    setCurrentPage("projects");
  };
  
  const handleNavigateHome = () => {
    setCurrentPage("home");
  };

  if (currentPage === "projects") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <AllProjectsPage onBack={handleNavigateHome} />
        <Toaster position="top-right" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection onNavigateToProjects={handleNavigateToProjects} />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2"></div>
                <span className="text-foreground">Faisal Jahangir</span>
              </div>
              
              <div className="flex gap-6 text-muted-foreground">
                <a 
                  href="https://www.linkedin.com/in/mohammed-faisal-jahangir/"
                  className="flex items-center gap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-chart-1 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/faisal4213" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-chart-2 transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://x.com/faisal_jah8775" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-chart-3 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
            
            <div className="border-t mt-6 pt-6 text-center text-muted-foreground">
              <p>© 2025 Faisal Jahangir. Securing the digital world, one vulnerability at a time.</p>
            </div>
          </div>
        </div>
      </footer>
      <Toaster position="top-right" />
    </div>
  );
}