
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award, Book, Globe, Languages, Users } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");
  
  const experiences = [
    {
      title: "PFA - ORACLE CAPITAL",
      period: "Ingénieur produits structurés  (Mars 2025 - Aujourd'hui)",
      description: "Analyse des Produits Structurés : Pricing et Couverture des Autocalls Adossés aux Indices Boursiers."
    },
    {
      title: "Stage - MODERN BUILDING ART",
      period: "Analyste financier  (Juil - Août 2022)",
      description: "Développement d'un Tableau de Bord Dynamique de Gestion Financière pour un Bureau d'Études en Génie Civil."
    }
  ];

  const education = [
    {
      degree: "Ingénieur en Finance et Ingénierie Décisionnelle",
      school: "École Nationale des Sciences Appliquées (ENSA) Agadir",
      period: "2023 - Aujourd'hui ",
      details: "Spécialisation en finance quantitative, analyse de marché et trading algorithmique."
    },
    {
      degree: "Classes Préparatoires Intégrées",
      school: "École Nationale des Sciences Appliquées (ENSA) Agadir",
      period: "2021 - 2023"
    },
    {
      degree: "Baccalauréat Sciences Mathématiques A",
      period: "2021",
      details: "Mention Très Bien."
    }
  ];
  
  const certifications = [
    {
        title: "Portfolio Diversification using Correlation Matrix - Coursera",
        date: "juil. 2024",
        description: "Analyse de la diversification de portefeuille à l'aide de la matrice de corrélation."
    },
    {
        title: "Python for Finance - 365 Data Science",
        date: "nov. 2023",
        description: "Application de Python aux marchés financiers, modélisation et analyse quantitative."
    },
    {
        title: "Intermediate Python for Finance - DataCamp",
        date: "oct. 2023",
        description: "Concepts avancés de Python pour la finance, incluant l'analyse de données et la gestion de portefeuilles.",
        certificationId: "31,260,219"
    },
    {
        title: "Problem Solving - HackerRank",
        date: "oct. 2022",
        description: "Évaluation et amélioration des compétences en résolution de problèmes algorithmiques."
    }
];

  
  const languages = [
    { name: "Français", percent: 100 },
    { name: "Anglais", percent: 90 },
    { name: "Arabe", percent: 100 },
    { name: "Espagnol", percent: 60 }
  ];

  const interests = [
    "Finance comportementale",
    "Intelligence artificielle",
    "Économie internationale",
    "Trading sportif",
    "Échecs",
    "Lecture scientifique"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">À Propos de Moi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez mon parcours, mes compétences et mes passions
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Button 
              variant={activeTab === "experience" ? "default" : "outline"} 
              onClick={() => setActiveTab("experience")}
              className="flex items-center"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Expérience
            </Button>
            <Button 
              variant={activeTab === "education" ? "default" : "outline"} 
              onClick={() => setActiveTab("education")}
              className="flex items-center"
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              Formation
            </Button>
            <Button 
              variant={activeTab === "certifications" ? "default" : "outline"} 
              onClick={() => setActiveTab("certifications")}
              className="flex items-center"
            >
              <Award className="mr-2 h-4 w-4" />
              Certifications
            </Button>
            <Button 
              variant={activeTab === "languages" ? "default" : "outline"} 
              onClick={() => setActiveTab("languages")}
              className="flex items-center"
            >
              <Globe className="mr-2 h-4 w-4" />
              Langues
            </Button>
            <Button 
              variant={activeTab === "interests" ? "default" : "outline"} 
              onClick={() => setActiveTab("interests")}
              className="flex items-center"
            >
              <Book className="mr-2 h-4 w-4" />
              Intérêts
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p className="text-lg">
                Étudiant ingénieur en <strong>Finance et Ingénierie Décisionnelle</strong> à ENSA Agadir, 
                passionné par la finance de marché, l'analyse quantitative et le trading algorithmique.
              </p>
              <p>
                Mon expertise se situe à l'intersection de la finance mathématique et de la programmation. 
                Je développe des modèles prédictifs et des algorithmes de trading en utilisant des méthodes 
                statistiques avancées et des techniques d'apprentissage machine.
              </p>
              <p>
                Mon objectif professionnel est de travailler dans une banque d'investissement ou un fonds 
                quantitatif pour développer des stratégies de trading algorithmique basées sur l'intelligence 
                artificielle et l'analyse de données massives.
              </p>
              <p>
                Je suis constamment à la recherche de nouvelles opportunités pour appliquer mes compétences 
                techniques à des problèmes financiers complexes et créer de la valeur à travers l'innovation 
                en ingénierie financière.
              </p>
            </div>
            <Button className="mt-8 group" asChild>
              <a href="https://cvbou.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Mon CV
              </a>
            </Button>
          </div>

          <div className="space-y-8">
            {activeTab === "experience" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-6 w-6 mr-3 text-primary" />
                  <h3 className="text-2xl font-semibold">Expérience Professionnelle</h3>
                </div>
                <div className="space-y-6">
                  {experiences.map((experience, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 py-1 hover:bg-muted/20 transition-colors">
                      <h4 className="text-lg font-medium">{experience.title}</h4>
                      <p className="text-sm text-muted-foreground">{experience.period}</p>
                      <p className="mt-2">{experience.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-6 w-6 mr-3 text-primary" />
                  <h3 className="text-2xl font-semibold">Formation</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 py-1 hover:bg-muted/20 transition-colors">
                      <h4 className="text-lg font-medium">{edu.degree}</h4>
                      <p className="text-sm">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                      <p className="mt-1 text-sm">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === "certifications" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center mb-6">
                  <Award className="h-6 w-6 mr-3 text-primary" />
                  <h3 className="text-2xl font-semibold">Certifications</h3>
                </div>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 py-1 hover:bg-muted/20 transition-colors">
                      <h4 className="text-lg font-medium">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                      <p className="mt-1 text-sm">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === "languages" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center mb-6">
                  <Languages className="h-6 w-6 mr-3 text-primary" />
                  <h3 className="text-2xl font-semibold">Langues</h3>
                </div>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="hover:bg-muted/20 p-2 rounded-md transition-colors">
                      <div className="mb-1">
                        <span className="font-medium">{lang.name}</span>
                      </div>
                      <div className="">
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === "interests" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center mb-6">
                  <Users className="h-6 w-6 mr-3 text-primary" />
                  <h3 className="text-2xl font-semibold">Centres d'Intérêt</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <span 
                      key={index} 
                      className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
