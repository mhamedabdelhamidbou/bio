
import { Award, Trophy } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      icon: <Trophy className="h-12 w-12 text-yellow-500" />,
      title: "1ère place - Championnat de Bourse Financial Day ENSA Agadir (2024)",
      description: [
        "Compétition de trading en temps réel",
        "Performance basée sur la rentabilité et la gestion des risques",
        "Stratégie gagnante: Analyse technique avancée (RSI, MACD, Fibonacci) + Machine Learning pour prédiction des prix"
      ]
    },
    {
      icon: <Award className="h-12 w-12 text-blue-500" />,
      title: "Finaliste - Hackathon Fintech 2023 (Casablanca, Maroc)",
      description: [
        "Développement d'une plateforme d'analyse prédictive des marchés",
        "Utilisation de l'IA pour détecter les signaux d'achat/vente"
      ]
    }
  ];

  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Awards & Distinctions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reconnaissances et prix obtenus lors de compétitions et événements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg border bg-card shadow-sm mb-8 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center p-4 bg-muted rounded-full">
                {award.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{award.title}</h3>
                <ul className="space-y-2">
                  {award.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
