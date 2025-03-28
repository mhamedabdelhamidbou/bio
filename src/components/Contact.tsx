
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAnimation, setSubmitAnimation] = useState(false);
  const { toast } = useToast();

  const validateField = (name: keyof ContactFormData, value: string) => {
    try {
      contactFormSchema.shape[name].parse(value);
      setErrors(prev => ({ ...prev, [name]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [name]: error.errors[0].message }));
      }
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (value.length > 0) {
      validateField(name as keyof ContactFormData, value);
    } else {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let isValid = true;
    const newErrors: Partial<ContactFormData> = {};
    
    // Validate all fields
    Object.entries(formData).forEach(([key, value]) => {
      const fieldKey = key as keyof ContactFormData;
      if (!validateField(fieldKey, value)) {
        isValid = false;
        try {
          contactFormSchema.shape[fieldKey].parse(value);
        } catch (error) {
          if (error instanceof z.ZodError) {
            newErrors[fieldKey] = error.errors[0].message;
          }
        }
      }
    });
    
    setErrors(newErrors);
    
    if (!isValid) {
      toast({
        title: "Formulaire invalide",
        description: "Veuillez corriger les erreurs dans le formulaire",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitAnimation(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      setSubmitAnimation(false);
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Téléphone",
      value: "+212 663-899784"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "mhamedabdelhamidbou@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Localisation",
      value: "Agadir, Maroc"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/mhamed-abdelhamid-bou",
      label: "LinkedIn"
    },
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/mhamedbou",
      label: "GitHub"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/mhamedbou",
      label: "Twitter"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-12 -left-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Contact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de projets, opportunités ou simplement échanger
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-medium mb-4">Mes réseaux sociaux</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 hover:scale-110 transform"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border/50">
              <h4 className="text-lg font-medium mb-3">Disponibilité</h4>
              <p className="text-muted-foreground">
                Je suis disponible pour des opportunités de stage et des projets 
                freelance en finance quantitative et développement d'algorithmes de trading.
              </p>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Actuellement disponible</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border shadow-sm animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  rows={5}
                  className={errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}
                  required
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className={`w-full relative overflow-hidden ${submitAnimation ? 'submit-animation' : ''}`} 
                disabled={isSubmitting}
              >
                <span className="flex items-center justify-center">
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  <Send className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
