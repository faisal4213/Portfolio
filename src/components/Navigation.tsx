import { Button } from "./ui/button";
import { motion } from "motion/react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2"></div>
            <span className="text-foreground">Faisal Jahangir</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <Button 
              onClick={() => scrollToSection('#contact')}
              size="sm"
              variant="outline"
              className="border-chart-1 text-chart-1 hover:bg-chart-1 hover:text-white"
            >
              Contact
            </Button>
            <Button 
              onClick={() => window.open('https://www.linkedin.com/in/mohammed-faisal-jahangir/', '_blank')}
              size="sm"
              className="bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-2 hover:to-chart-3"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}