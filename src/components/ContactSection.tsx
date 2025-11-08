import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";
import { useState } from "react";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "./AnimatedSection";
import { motion } from "motion/react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      // Simulate form submission (replace with actual email service like EmailJS)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mailto link for now
      const mailtoLink = `mailto:faisal.cybersec@gmail.com?subject=${encodeURIComponent(data.subject as string)}&body=${encodeURIComponent(
        `From: ${data.firstName} ${data.lastName} (${data.email})\n\nMessage:\n${data.message}`
      )}`;
      
      window.open(mailtoLink);
      toast.success("Message prepared! Your email client should open shortly.");
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection>
      <section id="contact" className="py-20 relative">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-chart-5/5 via-transparent to-chart-1/5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="text-center mb-12">
                <h2 className="text-foreground mb-4">Let's Work Together</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Interested in cybersecurity collaboration, penetration testing projects, or security research? 
                  Let's connect and work together to build a more secure digital world!
                </p>
              </div>
            </AnimatedSection>
            
            <StaggeredContainer className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <StaggeredItem>
              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="FirstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="LastName" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="example@.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell me about your cybersecurity project, research collaboration, or just say hello!"
                      className="min-h-32"
                      required 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-2 hover:to-chart-3 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message 🚀"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            </StaggeredItem>
            
            {/* Contact Information */}
            <StaggeredItem>
              <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    Prefer to reach out directly? Here are some other ways to connect.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="size-10 rounded-lg bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-chart-1">📧</span>
                    </motion.div>
                    <div>
                      <p className="text-sm"></p>
                      <a 
                        href="mailto:mohammedfaisaljahangir@gmail.com" 
                        className="text-muted-foreground hover:text-chart-1 transition-colors"
                      > Email
                        
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="size-10 rounded-lg bg-gradient-to-br from-chart-2/20 to-chart-3/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-chart-2">💼</span>
                    </motion.div>
                    <div>
                      <p className="text-sm"></p>
                      <a 
                        href="https://www.linkedin.com/in/mohammed-faisal-jahangir/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-chart-2 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="size-10 rounded-lg bg-gradient-to-br from-chart-3/20 to-chart-4/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-chart-3">🐙</span>
                    </motion.div>
                    <div>
                      <p className="text-sm"></p>
                      <a 
                        href="https://github.com/faisal4213" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-chart-3 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="size-10 rounded-lg bg-gradient-to-br from-chart-4/20 to-chart-5/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-chart-4">🐦</span>
                    </motion.div>
                    <div>
                      <p className="text-sm"></p>
                      <a 
                        href="https://x.com/faisal_jah8775" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-chart-4 transition-colors"
                      >
                        Twitter
                      </a>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Let's Collaborate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Always excited to discuss cybersecurity challenges, research opportunities, 
                    and innovative security solutions. Let's make the digital world safer together.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">🔒 Available for security assessments</p>
                    <p className="text-sm">🔍 Open to penetration testing projects</p>
                    <p className="text-sm">🤝 Interested in research collaboration</p>
                    <p className="text-sm">💼 Available for cybersecurity consulting</p>
                  </div>
                </CardContent>
              </Card>
              </div>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}