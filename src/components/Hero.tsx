
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, DownloadIcon, ExternalLink, Github,  Linkedin, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  const texts = [
    " Élève ingénieur en Finance et Ingénierie Décisionnelle"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    if (isTyping) {
      if (typedText.length < texts[currentText].length) {
        const timeout = setTimeout(() => {
          setTypedText(texts[currentText].substring(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setTypedText("");
          setCurrentText((prev) => (prev + 1) % texts.length);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, isTyping, typedText, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 dark:bg-purple-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 left-1/2 w-72 h-72 bg-yellow-200 dark:bg-yellow-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4">
        <div className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            Hello, Je m'appelle
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient animate-pulse">
            Mhamed Abdelhamid Bou
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-primary transition-all duration-500 animate-fade-in">
             {typedText}
              <span className="animate-blink">|</span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
             Passionné par l'application des mathématiques
            aux marchés financiers, développant des solutions d'analyse quantitative innovantes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              variant="outline"
             className="w-full sm:w-auto group" size="lg"
             onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}>
              <DownloadIcon className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Mon CV 
            </Button>
            
            <Button
              variant="outline"
              className="w-full sm:w-auto group"
              size="lg"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Mes Projets
              <ArrowDownIcon className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex justify-center gap-4 mt-8 pt-4">
            <a 
              href="https://github.com/mhamedbou" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/mhamed-abdelhamid-bou" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://www.instagram.com/_m_a_bou_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;
