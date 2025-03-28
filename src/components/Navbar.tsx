
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  GithubIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  Menu, 
  X,
  ExternalLink
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", section: "home" },
    { href: "#skills", label: "Skills", section: "skills" },
    { href: "#projects", label: "Projects", section: "projects" },
    { href: "#about", label: "About", section: "about" },
    { href: "#contact", label: "Contact", section: "contact" }
  ];

  const socialLinks = [
    { icon: <GithubIcon className="h-5 w-5" />, href: "https://github.com/mhamedabdelhamidbou", label: "GitHub" },
    { icon: <LinkedinIcon className="h-5 w-5" />, href: "https://linkedin.com/in/mhamed-abdelhamid-bou", label: "LinkedIn" },
    { icon: <InstagramIcon className="h-5 w-5" />, href: "https://www.instagram.com/_m_a_bou_/", label: "Instagram" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b' : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-bold text-gradient">
            MHAMED ABDELHAMID BOU
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.section}
                href={link.href} 
                className={`nav-link ${activeSection === link.section ? 'text-primary after:w-full' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="ghost" size="icon" asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
            
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col space-y-6 py-6">
                    <div className="px-4">
                      <div className="text-xl font-bold text-gradient mb-8">Menu</div>
                      <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                          <a
                            key={link.section}
                            href={link.href}
                            className={`text-lg py-2 ${activeSection === link.section ? 'text-primary font-medium' : ''}`}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {link.label}
                          </a>
                        ))}
                      </nav>
                    </div>
                    <div className="px-4 pt-4 border-t">
                      <div className="text-sm font-medium text-muted-foreground mb-4">Connect with me</div>
                      <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="p-2 rounded-full hover:bg-muted transition-colors"
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
