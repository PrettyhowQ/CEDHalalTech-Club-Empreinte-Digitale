import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Shield, 
  Globe, 
  Cloud, 
  Brain, 
  Link, 
  DollarSign,
  Database,
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  Building
} from "lucide-react";

export default function FiqhInformatique() {
  const fiqhCategories = [
    {
      title: "Données et Confidentialité",
      titleArabic: "خصوصية البيانات والحماية",
      rules: 2890,
      total: 10200,
      progress: 28,
      remaining: 7310,
      priority: "Priorité",
      importance: "Important",
      icon: Shield,
      color: "bg-red-500"
    },
    {
      title: "E-commerce et Business Digital",
      titleArabic: "التجارة الإلكترونية والأعمال الرقمية",
      rules: 3596,
      total: 13400,
      progress: 27,
      remaining: 9804,
      priority: "Standard",
      importance: "Important",
      icon: DollarSign,
      color: "bg-blue-500"
    },
    {
      title: "Cloud Computing",
      titleArabic: "الحوسبة السحابية",
      rules: 2150,
      total: 9800,
      progress: 22,
      remaining: 7650,
      priority: "Standard",
      importance: "Critique Golfe",
      icon: Cloud,
      color: "bg-blue-500"
    },
    {
      title: "Cybersécurité",
      titleArabic: "الأمن السيبراني",
      rules: 3250,
      total: 11600,
      progress: 28,
      remaining: 8350,
      priority: "Priorité",
      importance: "Critique Golfe",
      icon: Shield,
      color: "bg-red-500"
    },
    {
      title: "FinTech et Banking",
      titleArabic: "التكنولوجيا المالية والمصرفية",
      rules: 4850,
      total: 18900,
      progress: 26,
      remaining: 14050,
      priority: "Priorité",
      importance: "Critique Golfe",
      icon: Building,
      color: "bg-red-500"
    },
    {
      title: "IA et Machine Learning",
      titleArabic: "الذكاء الاصطناعي والتعلم الآلي",
      rules: 4250,
      total: 18500,
      progress: 23,
      remaining: 14250,
      priority: "Priorité",
      importance: "Critique Golfe",
      icon: Brain,
      color: "bg-red-500"
    },
    {
      title: "Blockchain et Cryptomonnaies",
      titleArabic: "البلوك تشين والعملات الرقمية",
      rules: 3850,
      total: 15200,
      progress: 25,
      remaining: 11350,
      priority: "Priorité",
      importance: "Critique Golfe",
      icon: Link,
      color: "bg-red-500"
    },
    {
      title: "IoT et Capteurs",
      titleArabic: "إنترنت الأشياء والاستشعار",
      rules: 2780,
      total: 12400,
      progress: 22,
      remaining: 9620,
      priority: "Priorité",
      importance: "Important",
      icon: Globe,
      color: "bg-red-500"
    }
  ];

  const totalRules = fiqhCategories.reduce((sum, cat) => sum + cat.rules, 0);
  const totalObjectif = fiqhCategories.reduce((sum, cat) => sum + cat.total, 0);
  const globalProgress = Math.round((totalRules / totalObjectif) * 100);
  const totalRemaining = totalObjectif - totalRules;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 p-4">
      {/* Header Expansion Golfe Persique */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg p-6 mb-6">
        <div className="flex items-center mb-2">
          <Globe className="h-6 w-6 mr-2" />
          <h1 className="text-xl font-bold">Expansion Golfe Persique 2025</h1>
          <Globe className="h-6 w-6 ml-2" />
        </div>
        <p className="text-lg mb-2">في دول CED توسع أكاديمية الخليج العربي</p>
        <p className="text-sm mb-4">
          Objectif: Atteindre 100% du Fiqh informatique pour devenir la référence
          mondiale des formations en ligne islamiques dans le Golfe Persique.
        </p>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-teal-200">1 740 000</div>
            <div className="text-sm">Étudiants Potentiels</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-200">618</div>
            <div className="text-sm">Institutions Partenaires</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-200">6</div>
            <div className="text-sm">Pays Marchés Ciblés</div>
          </div>
        </div>
      </div>

      {/* Progress Global */}
      <Card className="mb-6 bg-white border-2 border-teal-200">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center mb-2">
              <Target className="h-5 w-5 text-teal-600 mr-2" />
              <h2 className="text-lg font-bold">Progression vers 100% Fiqh Informatique</h2>
            </div>
            
            <div className="text-3xl font-bold text-teal-600 mb-1">{totalRules.toLocaleString()}</div>
            <div className="text-sm text-gray-600 mb-2">Règles Actuelles</div>
            
            <div className="text-2xl font-bold text-blue-600 mb-1">{totalObjectif.toLocaleString()}</div>
            <div className="text-sm text-gray-600 mb-2">Objectif 100%</div>
            
            <div className="text-xl font-bold text-purple-600 mb-2">{globalProgress}%</div>
            <div className="text-sm text-gray-600 mb-4">Complété</div>
            
            <Progress value={globalProgress} className="h-3 mb-2" />
            <div className="text-sm text-gray-500">
              {totalRemaining.toLocaleString()} règles restantes pour atteindre la couverture complète
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Méthodologie des 4 Sources */}
      <Card className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-purple-800 mb-4 text-center">
            شهادة شيخ الإسلام ابن تيمية
          </h3>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <p className="text-purple-900 font-medium text-center mb-2">
              "الأئمة الأربعة في الهداية، من اتبع أحدهم فهو على سبيل الإسلام"
            </p>
            <p className="text-purple-700 text-center text-sm mb-2">
              "Les quatre imams sont dans la guidée. Celui qui suit l'un d'eux est sur la voie de l'islam."
            </p>
            <p className="text-purple-600 text-center text-xs">— Ibn Taymiyya (رحمه الله)</p>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              <span className="font-medium text-green-800">Toutes les 4 écoles sont valides</span>
            </div>
            <p className="text-green-700 text-center text-sm">
              car elles reposent sur les mêmes sources : Coran, Sunna, Ijmâ', Qiyâs (analogie)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Catégories Fiqh */}
      <div className="mb-4">
        <div className="flex gap-4 text-center text-sm">
          <div className="font-bold text-teal-700">Catégories Fiqh</div>
          <div className="text-gray-500">Marchés Golfe</div>
          <div className="text-gray-500">Roadmap 2025</div>
        </div>
      </div>

      <div className="space-y-4">
        {fiqhCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card key={index} className="bg-white border-2 border-teal-100 hover:border-teal-300 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">{category.title}</h3>
                        <Badge 
                          className={`text-xs text-white ${
                            category.priority === "Priorité" ? "bg-red-500" : "bg-blue-500"
                          }`}
                        >
                          {category.priority}
                        </Badge>
                        <Badge 
                          className={`text-xs text-white ${
                            category.importance === "Critique Golfe" ? "bg-green-500" : "bg-gray-500"
                          }`}
                        >
                          {category.importance}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{category.titleArabic}</p>
                      
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="font-medium">{category.rules.toLocaleString()} règles</span>
                        <span className="text-gray-500">/ {category.total.toLocaleString()}</span>
                      </div>
                      
                      <Progress value={category.progress} className="h-2 mb-2" />
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{category.progress}% complété</span>
                        <span>{category.remaining.toLocaleString()} restantes</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white ml-4">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Rejoignez la Révolution */}
      <Card className="mt-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <CardContent className="p-6">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">Rejoignez la Révolution du Fiqh Informatique</h2>
            <p className="mb-4">
              Devenez partenaire de CED Academy dans l'expansion vers 100% du Fiqh informatique
            </p>
            <Button className="bg-white text-teal-600 hover:bg-gray-100">
              Partenariats Institutionnels
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sources Authentiques */}
      <Card className="mt-6 bg-gray-50">
        <CardContent className="p-6">
          <h3 className="font-bold text-gray-800 mb-4">Sources Authentiques</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm">AAOIFI Standards</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm">Majma Al-Fiqh Al-Islami</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm">Dar Al-Ifta Saudi</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="flex items-center justify-center">
              <Users className="h-5 w-5 text-teal-600 mr-2" />
              <span className="text-sm font-medium">Dr. Mohammad Al-Zuhayli</span>
            </div>
            <div className="flex items-center justify-center mt-1">
              <Users className="h-5 w-5 text-teal-600 mr-2" />
              <span className="text-sm font-medium">Dr. Abdullah Al-Mutlaq</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="bg-gray-800 text-white text-center py-4 mt-8 rounded-lg">
        <div className="text-sm">© 2025 Club Empreinte Digitale - Yakoubi Yamina.</div>
        <div className="text-xs mt-1 opacity-80">Tous droits réservés.</div>
        <div className="text-xs mt-1 opacity-60">
          Développé selon la méthodologie authentique des pieux prédécesseurs (السلف الصالح)
        </div>
      </div>
    </div>
  );
}