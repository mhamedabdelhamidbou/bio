
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Articles from "@/components/Articles";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "articles",  "about", "contact"];
      
      const currentPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (
            currentPosition >= offsetTop &&
            currentPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute top-0 left-0 w-full h-96 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/50"></div>
      </div>
      
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Articles />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
