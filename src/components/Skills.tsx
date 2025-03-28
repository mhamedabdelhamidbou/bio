
import { 
  BarChart4, 
  Code2, 
  TrendingUp, 
  ShieldAlert, 
  Globe, 
  Database, 
  Monitor,
  BrainCircuit
} from "lucide-react";
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  
  const skills = [
    {
      icon: <BarChart4 className="h-8 w-8 mb-2" />,
      title: "Analyse Quantitative",
      description: "Modélisation stochastique, prévision des séries temporelles",
      details: "Expertise en modèles ARIMA, GARCH, et réseaux de neurones pour la prévision des prix d'actifs financiers. Application de processus stochastiques pour la modélisation des mouvements de marché."
    },
    {
      icon: <Code2 className="h-8 w-8 mb-2" />,
      title: "Programmation Financière",
      description: "Python (Pandas, NumPy, SciPy), R, MATLAB",
      details: "Développement d'algorithmes de trading automatisés, backtesting de stratégies d'investissement, et analyse de données financières à grande échelle."
    },
    {
      icon: <TrendingUp className="h-8 w-8 mb-2" />,
      title: "Trading & Stratégies d'Investissement",
      description: "Trading algorithmique, optimisation de portefeuille",
      details: "Conception de stratégies de trading basées sur l'analyse technique et fondamentale. Optimisation de portefeuille selon Markowitz, Black-Litterman et approches alternatives."
    },
    {
      icon: <ShieldAlert className="h-8 w-8 mb-2" />,
      title: "Gestion des Risques",
      description: "VaR, Simulations Monte Carlo, Modèle Black-Scholes",
      details: "Évaluation et mitigation des risques de marché, de crédit et de liquidité. Développement de modèles de stress tests et application de techniques avancées de VaR (Expected Shortfall, Cornish-Fisher)."
    },
    {
      icon: <Globe className="h-8 w-8 mb-2" />,
      title: "Analyse Macroéconomique",
      description: "Impact des politiques économiques sur les marchés",
      details: "Étude de l'influence des décisions des banques centrales, des indicateurs économiques et des événements géopolitiques sur le comportement des différentes classes d'actifs."
    },
    {
      icon: <Database className="h-8 w-8 mb-2" />,
      title: "Data Science pour la Finance",
      description: "ML appliqué aux marchés financiers",
      details: "Application de l'apprentissage supervisé et non-supervisé pour la détection d'anomalies, la classification des actifs, et la prévision des mouvements de marché."
    },
    {
      icon: <Monitor className="h-8 w-8 mb-2" />,
      title: "Développement Web pour la Finance",
      description: "Streamlit, Dash, Flask, React",
      details: "Création d'applications web interactives pour visualiser et analyser les données financières en temps réel, avec des tableaux de bord personnalisables."
    },
    {
      icon: <BrainCircuit className="h-8 w-8 mb-2" />,
      title: "Intelligence Artificielle Financière",
      description: "Deep Learning pour la prédiction des marchés",
      details: "Utilisation de réseaux de neurones profonds (LSTM, GRU, Transformer) pour capturer les dynamiques complexes et non-linéaires des marchés financiers."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Compétences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un ensemble de compétences spécialisées en finance de marché et ingénierie décisionnelle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg border bg-card shadow-sm transition-all duration-300 text-center ${
                hoveredSkill === index 
                  ? 'scale-105 shadow-md bg-primary/5 border-primary/50' 
                  : 'hover:shadow-md hover:-translate-y-1 card-hover'
              }`}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`text-primary flex justify-center transition-transform duration-300 ${hoveredSkill === index ? 'scale-110' : ''}`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground mb-2">{skill.description}</p>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                hoveredSkill === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-sm mt-3 text-muted-foreground">{skill.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
