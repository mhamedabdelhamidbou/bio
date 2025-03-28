
import { GithubIcon, LinkedinIcon, TwitterIcon, Heart, ArrowUp, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const quotes = [
    "Ne cessez jamais d'apprendre, car la vie ne cesse jamais d'enseigner.",
    "Les marchés sont comme des miroirs : ils reflètent les peurs, les espoirs et les croyances de ceux qui y participent.",
    "Le succès n'est pas définitif, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
    "La bourse est un transfert d'argent des impatients vers les patients.",
    "Le risque vient de ne pas savoir ce que vous faites.",
    "Les meilleurs investissements sont ceux qui correspondent à votre philosophie personnelle."
  ];
  
  return (
    <footer className="py-16 bg-muted/30 border-t relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="space-y-4">
              {quotes.slice(0, 2).map((quote, index) => (
                <p key={index} className="italic text-muted-foreground hover:text-foreground transition-colors">
                  "{quote}"
                </p>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4 text-lg">Liens Rapides</h4>
              <ul className="space-y-2">
                {["Home", "Skills", "Projects", "About", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold mb-4 text-lg">Me Contacter</h4>
              <ul className="space-y-2">
                <li className="flex items-center justify-center md:justify-start">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <a 
                    href="mailto:mhamedabdelhamidbou@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    mhamedabdelhamidbou@gmail.com
                  </a>
                </li>
                <li className="text-muted-foreground">Agadir, Maroc</li>
              </ul>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-4 text-lg">Me Suivre</h4>
              <div className="flex items-center justify-center md:justify-end space-x-4">
                <a 
                  href="https://github.com/mhamedabdelhamidbou/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border w-full max-w-4xl pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-muted-foreground flex items-center mb-4 md:mb-0">
                &copy; {currentYear} M. Abdelhamid Bou. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 animate-float"
          aria-label="Retour en haut"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
