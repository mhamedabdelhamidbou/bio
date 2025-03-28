
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lock, Calendar, Tag, Code } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
        title: "Simulation de Monte Carlo pour l'évaluation des options",
        description: "Utilisation des méthodes Monte Carlo pour évaluer la juste valeur des options financières.",
        image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["Python", "Monte Carlo", "Finance Quantitative", "Mathématiques"],
        github: "#",
        demo: "#",
        date: "Mars 2024",
        features: [
            "Support des options européennes, américaines et exotiques",
            "Utilisation du mouvement brownien géométrique",
            "Méthodes avancées de réduction de variance",
            "Simulation de volatilité stochastique (Heston, SABR)"
        ]
    },
    {
        title: "Credit & Savings Simulator",
        description: "Outil interactif permettant aux utilisateurs de simuler et d'optimiser leurs stratégies d'épargne et de crédit.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["Python", "Finance Personnelle", "Simulation", "Streamlit"],
        github: "#",
        demo: "#",
        date: "Février 2024",
        features: [
            "Calcul des intérêts composés et des amortissements",
            "Analyse de scénarios de remboursement",
            "Optimisation des stratégies d'épargne",
            "Interface utilisateur intuitive"
        ]
    },
    {
        title: "Calcul de la Volatilité Impliquée avec Python",
        description: "Détermination de la volatilité implicite des options à partir des prix du marché.",
        image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["Python", "Finance Quantitative", "Options", "Volatilité"],
        github: "#",
        demo: "#",
        date: "Janvier 2024",
        features: [
            "Utilisation de la méthode de Newton-Raphson",
            "Comparaison avec des modèles de volatilité historiques",
            "Analyse graphique de la volatilité implicite",
            "Application aux options européennes et américaines"
        ]
    },
    {
        title: "𝐓𝐫𝐚𝐝𝐞𝐌𝐞𝐧𝐭𝐨𝐫 - Trading Signal Suggestion, Backtesting Development & AI Chatbot Integration",
        description: "Plateforme complète pour l'analyse et le backtesting de stratégies de trading, intégrant un chatbot IA.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["Python", "Backtrader", "AI Chatbot", "Finance"],
        github: "#",
        demo: "#",
        date: "Décembre 2023",
        features: [
            "Suggestions de signaux de trading basées sur l'analyse technique et fondamentale",
            "Backtesting avancé avec optimisation de paramètres",
            "Intégration d'un chatbot IA pour l'analyse des marchés",
            "Métriques de performance complètes pour l'évaluation des stratégies"
        ]
    },
    {
        title: "Application Web de Classification Hiérarchique et K-Means pour l'Analyse de Données",
        description: "Outil interactif permettant la segmentation et l'analyse de données financières avec K-Means et classification hiérarchique.",
        image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        tags: ["Python", "Machine Learning", "K-Means", "Données Financières"],
        github: "#",
        demo: "#",
        date: "Novembre 2023",
        features: [
            "Clustering des actifs financiers",
            "Visualisation interactive des groupes",
            "Analyse de corrélation et de similarité",
            "Optimisation du nombre de clusters"
        ]
    }
];


  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Projets</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes principaux projets en finance de marché et data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-500 ${
                hoveredProject === index ? 'scale-[1.02] shadow-lg border-primary/50' : 'hover:-translate-y-1'
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-video w-full overflow-hidden bg-muted relative">
                <div className={`absolute inset-0 bg-primary/80 flex items-center justify-center transition-opacity duration-300 z-10 ${
                  hoveredProject === index ? 'opacity-80' : 'opacity-0'
                }`}>
                  <ul className="text-white text-sm space-y-2 px-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-white mr-2 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`h-full w-full object-cover transition-all duration-500 ${
                    hoveredProject === index ? 'scale-110 blur-sm' : 'hover:scale-105'
                  }`}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-xs mb-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{project.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="flex items-center text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="sm" asChild className="group">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover:animate-spin" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="group">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
