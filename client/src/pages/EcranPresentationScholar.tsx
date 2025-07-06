import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Star, 
  Shield, 
  CheckCircle, 
  Users, 
  Globe,
  Award,
  ChevronRight,
  Heart
} from 'lucide-react';

export default function EcranPresentationScholar() {
  const [currentScholar, setCurrentScholar] = useState(0);
  const [showMadhhab, setShowMadhhab] = useState(true);

  const scholars = [
    {
      name: "Sheikh Dr. Muhammad Al-Jazairi",
      title: "رئيس اللجنة الشرعية",
      speciality: "Fiqh Informatique & IA Islamique",
      madhhab: "الحنبلي",
      madhhabAr: "المذهب الحنبلي",
      location: "Arabie Saoudite",
      experience: "25+ ans",
      certifications: ["جامعة الإمام", "الأزهر الشريف", "AAOIFI"],
      supervision: "Super IARP Pro",
      validation: "27,446+ règles Fiqh",
      avatar: "🧔‍♂️",
      color: "amber"
    },
    {
      name: "Dr. Fatima Al-Ansari",
      title: "نائبة الرئيس",
      speciality: "Finance Islamique Technologique",
      madhhab: "المالكي",
      madhhabAr: "المذهب المالكي",
      location: "Émirats Arabes Unis",
      experience: "20+ ans",
      certifications: ["جامعة دبي الإسلامية", "CIFE", "IFSB"],
      supervision: "CED Bank & Al-Aman Takaful",
      validation: "Banking 100% Halal",
      avatar: "👩‍🎓",
      color: "cyan"
    },
    {
      name: "Sheikh Omar Benedetti",
      title: "الأمين العام",
      speciality: "Fiqh Européen & Technologie",
      madhhab: "الحنفي",
      madhhabAr: "المذهب الحنفي",
      location: "France",
      experience: "15+ ans",
      certifications: ["IESH Paris", "Al-Azhar", "ECFR"],
      supervision: "Conformité Européenne",
      validation: "RGPD Islamique",
      avatar: "👨‍🏫",
      color: "purple"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScholar((prev) => (prev + 1) % scholars.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scholar = scholars[currentScholar];
  const colorClasses = {
    amber: "from-amber-50 to-orange-100 border-amber-300 text-amber-800",
    cyan: "from-cyan-50 to-blue-100 border-cyan-300 text-cyan-800",
    purple: "from-purple-50 to-indigo-100 border-purple-300 text-purple-800"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 p-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header avec logo CED */}
        <Card className="mb-6 text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🕌</span>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-green-800">
              🕌 CED HalalTech™ - Supervision Savante
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Technologie Islamique Authentique sous Supervision de Scholars Qualifiés
            </p>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Présentation Scholar Principal */}
          <div className="lg:col-span-2">
            <Card className={`bg-gradient-to-br ${colorClasses[scholar.color]} border-2`}>
              <CardHeader className="text-center">
                <div className="text-6xl mb-3">{scholar.avatar}</div>
                <CardTitle className="text-2xl">{scholar.name}</CardTitle>
                <p className="text-lg font-semibold">{scholar.title}</p>
                <Badge variant="outline" className="mt-2 text-sm">
                  {scholar.speciality}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                
                {/* Madhhab Prominence */}
                {showMadhhab && (
                  <div className="bg-white/80 p-4 rounded-lg border-2 border-green-300">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-green-800 mb-2">
                        📖 École Juridique (المذهب)
                      </h3>
                      <div className="text-3xl font-bold text-green-700 mb-1">
                        {scholar.madhhabAr}
                      </div>
                      <p className="text-sm text-green-600">
                        Madhhab {scholar.madhhab} - Tradition authentique des Salaf Salih
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 p-3 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="h-4 w-4" />
                      <span className="font-semibold text-sm">Localisation</span>
                    </div>
                    <p className="text-sm">{scholar.location}</p>
                  </div>
                  
                  <div className="bg-white/60 p-3 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="h-4 w-4" />
                      <span className="font-semibold text-sm">Expérience</span>
                    </div>
                    <p className="text-sm">{scholar.experience}</p>
                  </div>
                </div>

                <div className="bg-white/60 p-3 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-4 w-4" />
                    <span className="font-semibold text-sm">Certifications</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {scholar.certifications.map((cert, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-white/60 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="h-4 w-4" />
                    <span className="font-semibold text-sm">Supervision CED</span>
                  </div>
                  <p className="text-sm font-medium">{scholar.supervision}</p>
                  <p className="text-xs text-gray-600">{scholar.validation}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Panel latéral - Informations Madhhab */}
          <div className="space-y-4">
            
            {/* 4 Écoles Reconnues */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  المذاهب الأربعة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "الحنفية", founder: "Imam Abu Hanifa", color: "purple" },
                  { name: "المالكية", founder: "Imam Malik", color: "cyan" },
                  { name: "الشافعية", founder: "Imam Shafi'i", color: "green" },
                  { name: "الحنابلة", founder: "Imam Ahmad", color: "amber" }
                ].map((madhhab, index) => (
                  <div 
                    key={index} 
                    className={`p-2 rounded border-l-4 ${
                      madhhab.name === scholar.madhhabAr 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-300 bg-gray-50'
                    }`}
                  >
                    <div className="font-semibold text-sm">{madhhab.name}</div>
                    <div className="text-xs text-gray-600">{madhhab.founder}</div>
                    {madhhab.name === scholar.madhhabAr && (
                      <Badge className="mt-1 text-xs">Actuel</Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Navigation Scholars */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Équipe Supervision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {scholars.map((sch, index) => (
                  <Button
                    key={index}
                    variant={index === currentScholar ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start text-xs"
                    onClick={() => setCurrentScholar(index)}
                  >
                    <span className="mr-2">{sch.avatar}</span>
                    {sch.name.split(' ')[0]} - {sch.madhhab}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Validation Conformité */}
            <Card className="border-green-300">
              <CardContent className="pt-4">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-bold text-green-800 mb-1">100% Conforme</h3>
                  <p className="text-xs text-green-600">
                    Validation par 3 scholars
                  </p>
                  <p className="text-xs text-green-600">
                    4 écoles juridiques
                  </p>
                  <div className="flex justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-2">
              <Button className="w-full" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Consulter Scholar
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                <ChevronRight className="h-4 w-4 mr-2" />
                Accéder CED HalalTech™
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Validation */}
        <Card className="mt-6 bg-green-50 border-green-200">
          <CardContent className="pt-4">
            <div className="text-center">
              <p className="text-sm text-green-800 font-medium mb-2">
                🌟 Technologie Islamique Authentique - بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-green-700">
                <div>✓ Supervision Continue</div>
                <div>✓ Conformité 4 Madhabs</div>
                <div>✓ Sources Authentiques</div>
                <div>✓ Validation Scholars</div>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                CED HalalTech™ © 2025 - Yakoubi Yamina | Supervision Savante Permanente
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Controls */}
        <div className="fixed bottom-4 right-4 space-y-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowMadhhab(!showMadhhab)}
            className="bg-white/80"
          >
            {showMadhhab ? 'Masquer' : 'Afficher'} Madhhab
          </Button>
        </div>
      </div>
    </div>
  );
}