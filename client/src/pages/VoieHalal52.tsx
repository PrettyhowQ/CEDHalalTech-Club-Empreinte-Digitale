import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'wouter';
import { 
  Star, 
  BookOpen, 
  Heart, 
  Shield, 
  Lightbulb,
  Users,
  CheckCircle,
  Clock,
  Target,
  Award,
  Globe,
  TrendingUp
} from 'lucide-react';

export default function VoieHalal52() {
  const etapes52 = [
    // Fondements (1-13)
    { numero: 1, titre: "Niyyah - L'Intention Pure", categorie: "Fondement", status: "completed", color: "emerald" },
    { numero: 2, titre: "Tawakkul - La Confiance en Allah", categorie: "Fondement", status: "completed", color: "emerald" },
    { numero: 3, titre: "Ikhlas - La Sincérité", categorie: "Fondement", status: "completed", color: "emerald" },
    { numero: 4, titre: "Sabr - La Patience", categorie: "Fondement", status: "in-progress", color: "emerald" },
    { numero: 5, titre: "Shukr - La Gratitude", categorie: "Fondement", status: "upcoming", color: "emerald" },
    { numero: 6, titre: "Taqwa - La Piété", categorie: "Fondement", status: "upcoming", color: "emerald" },
    { numero: 7, titre: "Rahma - La Miséricorde", categorie: "Fondement", status: "upcoming", color: "emerald" },
    { numero: 8, titre: "Adl - La Justice", categorie: "Fondement", status: "upcoming", color: "emerald" },
    { numero: 9, titre: "Amanah - La Confiance", categorie: "Fondement", status: "upcoming", color: "emerald" },
    { numero: 10, titre: "Haya - La Pudeur", categorie: "Fondement", status: "upcoming", color: "emerald" },
    { numero: 11, titre: "Hikmah - La Sagesse", categorie: "Fondement", status: "upcoming", color: "emerald" },
    { numero: 12, titre: "Tawhid - L'Unicité", categorie: "Fondement", status: "upcoming", color: "emerald" },
    { numero: 13, titre: "Barakah - La Bénédiction", categorie: "Fondement", status: "upcoming", color: "emerald" },
    
    // Développement Personnel (14-26)
    { numero: 14, titre: "Connaissance de Soi", categorie: "Personnel", status: "upcoming", color: "blue" },
    { numero: 15, titre: "Gestion du Temps selon les Prières", categorie: "Personnel", status: "upcoming", color: "blue" },
    { numero: 16, titre: "Communication Bienveillante", categorie: "Personnel", status: "upcoming", color: "blue" },
    { numero: 17, titre: "Leadership Spirituel", categorie: "Personnel", status: "upcoming", color: "blue" },
    { numero: 18, titre: "Intelligence Émotionnelle", categorie: "Personnel", status: "upcoming", color: "blue" },
    { numero: 19, titre: "Résilience et Persévérance", categorie: "Personnel", status: "upcoming", color: "blue" },
    { numero: 20, titre: "Créativité Halal", categorie: "Personnel", status: "upcoming", color: "blue" },
    { numero: 21, titre: "Innovation Éthique", categorie: "Personnel", status: "upcoming", color: "blue" },
    { numero: 22, titre: "Résolution de Conflits", categorie: "Personnel", status: "upcoming", color: "blue" },
    { numero: 23, titre: "Mentoring et Enseignement", categorie: "Personnel", status: "upcoming", color: "blue" },
    { numero: 24, titre: "Networking Communautaire", categorie: "Personnel", status: "upcoming", color: "blue" },
    { numero: 25, titre: "Équilibre Vie-Travail-Spiritualité", categorie: "Personnel", status: "upcoming", color: "blue" },
    { numero: 26, titre: "Planification Stratégique", categorie: "Personnel", status: "upcoming", color: "blue" },
    
    // Entrepreneuriat (27-39)
    { numero: 27, titre: "Vision Entrepreneuriale Halal", categorie: "Business", status: "upcoming", color: "purple" },
    { numero: 28, titre: "Étude de Marché Éthique", categorie: "Business", status: "upcoming", color: "purple" },
    { numero: 29, titre: "Business Plan Conforme Sharia", categorie: "Business", status: "upcoming", color: "purple" },
    { numero: 30, titre: "Financement Islamique", categorie: "Business", status: "upcoming", color: "purple" },
    { numero: 31, titre: "Marketing Halal", categorie: "Business", status: "upcoming", color: "purple" },
    { numero: 32, titre: "Gestion d'Équipe Islamique", categorie: "Business", status: "upcoming", color: "purple" },
    { numero: 33, titre: "Comptabilité Sharia", categorie: "Business", status: "upcoming", color: "purple" },
    { numero: 34, titre: "Négociation Win-Win", categorie: "Business", status: "upcoming", color: "purple" },
    { numero: 35, titre: "Partenariats Stratégiques", categorie: "Business", status: "upcoming", color: "purple" },
    { numero: 36, titre: "Expansion Internationale", categorie: "Business", status: "upcoming", color: "purple" },
    { numero: 37, titre: "Innovation Produit/Service", categorie: "Business", status: "upcoming", color: "purple" },
    { numero: 38, titre: "Gestion de Crise", categorie: "Business", status: "upcoming", color: "purple" },
    { numero: 39, titre: "Succession d'Entreprise", categorie: "Business", status: "upcoming", color: "purple" },
    
    // Impact Social (40-52)
    { numero: 40, titre: "Responsabilité Sociale", categorie: "Impact", status: "upcoming", color: "orange" },
    { numero: 41, titre: "Économie Circulaire", categorie: "Impact", status: "upcoming", color: "orange" },
    { numero: 42, titre: "Développement Durable", categorie: "Impact", status: "upcoming", color: "orange" },
    { numero: 43, titre: "Éducation Communautaire", categorie: "Impact", status: "upcoming", color: "orange" },
    { numero: 44, titre: "Santé et Bien-être", categorie: "Impact", status: "upcoming", color: "orange" },
    { numero: 45, titre: "Technology for Good", categorie: "Impact", status: "upcoming", color: "orange" },
    { numero: 46, titre: "Zakat et Wakf Modernes", categorie: "Impact", status: "upcoming", color: "orange" },
    { numero: 47, titre: "Inclusion et Diversité", categorie: "Impact", status: "upcoming", color: "orange" },
    { numero: 48, titre: "Environnement et Climat", categorie: "Impact", status: "upcoming", color: "orange" },
    { numero: 49, titre: "Paix et Réconciliation", categorie: "Impact", status: "upcoming", color: "orange" },
    { numero: 50, titre: "Gouvernance Éthique", categorie: "Impact", status: "upcoming", color: "orange" },
    { numero: 51, titre: "Héritage Spirituel", categorie: "Impact", status: "upcoming", color: "orange" },
    { numero: 52, titre: "Vision Futuriste Halal", categorie: "Impact", status: "upcoming", color: "orange" }
  ];

  const statistiques = {
    total_etapes: 52,
    completees: etapes52.filter(e => e.status === 'completed').length,
    en_cours: etapes52.filter(e => e.status === 'in-progress').length,
    a_venir: etapes52.filter(e => e.status === 'upcoming').length,
    pourcentage: Math.round((etapes52.filter(e => e.status === 'completed').length / 52) * 100)
  };

  const categories = [
    { 
      nom: "Fondement", 
      description: "Bases spirituelles et éthiques islamiques", 
      couleur: "emerald", 
      icone: Heart,
      etapes: etapes52.filter(e => e.categorie === 'Fondement').length 
    },
    { 
      nom: "Personnel", 
      description: "Développement personnel et compétences", 
      couleur: "blue", 
      icone: Users,
      etapes: etapes52.filter(e => e.categorie === 'Personnel').length 
    },
    { 
      nom: "Business", 
      description: "Entrepreneuriat et business halal", 
      couleur: "purple", 
      icone: TrendingUp,
      etapes: etapes52.filter(e => e.categorie === 'Business').length 
    },
    { 
      nom: "Impact", 
      description: "Impact social et communautaire", 
      couleur: "orange", 
      icone: Globe,
      etapes: etapes52.filter(e => e.categorie === 'Impact').length 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Header Hero */}
      <div className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Star className="h-16 w-16 text-yellow-300" />
            <h1 className="text-6xl font-bold">
              Voie Halal 52
            </h1>
            <Star className="h-16 w-16 text-yellow-300" />
          </div>
          
          <h2 className="text-3xl font-semibold mb-4 text-emerald-100">
            Bâtir un Univers Éthique & Prospère
          </h2>
          
          <p className="text-xl mb-6 text-blue-100" dir="rtl">
            طريق الحلال ٥٢ – لبناء عالم أخلاقي ومزدهر
          </p>
          
          <div className="bg-white/20 backdrop-blur rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              <strong className="text-yellow-300">🧭 "52 étapes vers une réussite alignée avec tes valeurs"</strong>
            </p>
            <p className="mt-4 text-emerald-100">
              Un programme de transformation en 52 modules pour construire un projet de vie, 
              d'entreprise ou de contribution aligné avec les principes de l'Islam : 
              justice, bienveillance, transparence et excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Statistiques de Progression */}
        <Card className="mb-12 bg-white/90 backdrop-blur border-2 border-emerald-200">
          <CardHeader className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Target className="h-8 w-8" />
              Progression Voie Halal 52
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  {statistiques.completees}
                </div>
                <p className="text-gray-600">Étapes Complétées</p>
                <CheckCircle className="h-6 w-6 text-emerald-500 mx-auto mt-2" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {statistiques.en_cours}
                </div>
                <p className="text-gray-600">En Cours</p>
                <Clock className="h-6 w-6 text-blue-500 mx-auto mt-2" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-600 mb-2">
                  {statistiques.a_venir}
                </div>
                <p className="text-gray-600">À Venir</p>
                <BookOpen className="h-6 w-6 text-gray-500 mx-auto mt-2" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {statistiques.pourcentage}%
                </div>
                <p className="text-gray-600">Progression</p>
                <Award className="h-6 w-6 text-purple-500 mx-auto mt-2" />
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progression globale</span>
                <span className="text-sm font-medium text-gray-700">{statistiques.pourcentage}%</span>
              </div>
              <Progress value={statistiques.pourcentage} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Catégories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((categorie, index) => {
            const IconComponent = categorie.icone;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur">
                <div className={`bg-gradient-to-r from-${categorie.couleur}-500 to-${categorie.couleur}-600 p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="h-8 w-8" />
                    <h3 className="font-bold text-xl">{categorie.nom}</h3>
                  </div>
                  <p className="text-sm opacity-90">{categorie.description}</p>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Étapes</span>
                    <Badge variant="outline" className="text-lg font-bold">
                      {categorie.etapes}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Liste des 52 Étapes */}
        <Card className="bg-white/90 backdrop-blur border-2 border-blue-200">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Lightbulb className="h-8 w-8" />
              Les 52 Étapes de Transformation
            </CardTitle>
            <p className="text-blue-100 mt-2">
              Chaque étape est une pierre précieuse sur le chemin de la réussite éthique
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {etapes52.map((etape, index) => (
                <Card key={index} className={`
                  p-4 hover:shadow-md transition-all duration-300 cursor-pointer
                  ${etape.status === 'completed' ? 'bg-emerald-50 border-emerald-200' : 
                    etape.status === 'in-progress' ? 'bg-blue-50 border-blue-200' : 
                    'bg-gray-50 border-gray-200'}
                `}>
                  <div className="flex items-start gap-3">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                      ${etape.status === 'completed' ? 'bg-emerald-500 text-white' : 
                        etape.status === 'in-progress' ? 'bg-blue-500 text-white' : 
                        'bg-gray-300 text-gray-600'}
                    `}>
                      {etape.status === 'completed' ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        etape.numero
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm leading-tight mb-2">
                        {etape.titre}
                      </h4>
                      <Badge 
                        variant="outline" 
                        className={`
                          text-xs
                          ${etape.color === 'emerald' ? 'border-emerald-300 text-emerald-700' :
                            etape.color === 'blue' ? 'border-blue-300 text-blue-700' :
                            etape.color === 'purple' ? 'border-purple-300 text-purple-700' :
                            'border-orange-300 text-orange-700'}
                        `}
                      >
                        {etape.categorie}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white p-8">
            <CardContent>
              <h3 className="text-3xl font-bold mb-4">
                🌟 Commence Ta Transformation Aujourd'hui
              </h3>
              <p className="text-xl mb-6 text-emerald-100">
                "Que vous soyez entrepreneur, étudiant, parent, éducateur ou créatif, 
                Voie Halal 52 vous guide avec rigueur et spiritualité sur le chemin du halal."
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/methodes-apprentissage-islamique-tech">
                  <Button className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-3">
                    🎓 Méthodes d'Apprentissage
                  </Button>
                </Link>
                <Link href="/methodologie-etudiants-islamique-tech">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
                    📚 Méthodologie Étudiants
                  </Button>
                </Link>
                <Link href="/finance-islamique-halal">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3">
                    💰 Finance Islamique
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer de protection */}
        <div className="mt-12 text-center text-sm text-gray-600">
          <p className="mb-2">
            🔒 <strong>Protection Intellectuelle Yakoubi Yamina</strong> - Tous droits réservés
          </p>
          <p>
            Programme "Voie Halal 52" développé selon les principes islamiques authentiques | 
            Validation par 150+ scholars internationaux
          </p>
        </div>
      </div>
    </div>
  );
}