
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "L'impact des politiques monétaires sur les marchés financiers",
      excerpt: "Une analyse approfondie des effets des décisions des banques centrales sur différentes classes d'actifs.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      date: "15 Mai 2024",
      url: "#"
    },
    {
      title: "Backtesting d'une stratégie Momentum sur les actions du S&P 500",
      excerpt: "Méthodologie et résultats d'une stratégie d'investissement basée sur le momentum.",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      date: "3 Avril 2024",
      url: "#"
    },
    {
      title: "L'intelligence artificielle dans la gestion de portefeuille",
      excerpt: "Comment les algorithmes de machine learning révolutionnent l'allocation d'actifs.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      date: "18 Mars 2024",
      url: "#"
    },
    {
      title: "Simulation Monte Carlo pour l'évaluation des options",
      excerpt: "Une approche pratique pour valoriser les produits dérivés à l'aide de simulations stochastiques.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      date: "25 Février 2024",
      url: "#"
    },
    {
      title: "Analyse des cycles économiques et leur influence sur le trading",
      excerpt: "Comment identifier les phases du cycle économique et adapter sa stratégie d'investissement.",
      image: "https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      date: "10 Janvier 2024",
      url: "#"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Articles & Publications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mes réflexions et analyses sur la finance de marché, le trading algorithmique et la data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg border bg-card shadow-sm hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="h-full w-full object-cover transition-all hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{article.date}</div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <Button asChild>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Lire l'article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
