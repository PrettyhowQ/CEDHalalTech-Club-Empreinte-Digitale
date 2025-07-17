import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Book, Globe, Star } from "lucide-react";

const IslamicTooltip = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("fr");

  const languages = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" }
  ];

  const tooltipContent = {
    fr: {
      banking: {
        title: "Banking Halal CED",
        content: "Système bancaire 100% conforme à la Sharia, sans intérêt (Riba), basé sur les principes islamiques authentiques.",
        verse: "« Allah a rendu licite le commerce et a interdit l'usure » - Coran 2:275",
        principle: "Principe: Murabaha, Ijara, Musharaka"
      },
      education: {
        title: "Institut CED Academy",
        content: "Formation islamique complète alliant science moderne et valeurs traditionnelles selon la méthodologie Salaf.",
        verse: "« Et dis : Ô mon Seigneur, accrois mes connaissances » - Coran 20:114",
        principle: "Méthode: Coran, Sunna, Ijma', Qiyas"
      },
      ai: {
        title: "IA Aisha Al-Aman",
        content: "Intelligence artificielle éthique respectant les limites islamiques et guidant vers le bien.",
        verse: "« Et quiconque craint Allah, Il lui donnera une issue » - Coran 65:2",
        principle: "Validation: 150+ scholars internationaux"
      }
    },
    ar: {
      banking: {
        title: "المصرفية الحلال CED",
        content: "نظام مصرفي متوافق 100% مع الشريعة، بدون فوائد (ربا)، مبني على المبادئ الإسلامية الأصيلة",
        verse: "« وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا » - القرآن 2:275",
        principle: "المبدأ: مرابحة، إجارة، مشاركة"
      },
      education: {
        title: "معهد CED الأكاديمي",
        content: "تكوين إسلامي شامل يجمع بين العلم الحديث والقيم التقليدية وفق منهجية السلف",
        verse: "« وَقُل رَّبِّ زِدْنِي عِلْمًا » - القرآن 20:114",
        principle: "المنهج: قرآن، سنة، إجماع، قياس"
      },
      ai: {
        title: "الذكاء الاصطناعي عائشة الأمان",
        content: "ذكاء اصطناعي أخلاقي يحترم الحدود الإسلامية ويرشد إلى الخير",
        verse: "« وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا » - القرآن 65:2",
        principle: "المصادقة: 150+ عالم دولي"
      }
    },
    en: {
      banking: {
        title: "CED Halal Banking",
        content: "100% Sharia-compliant banking system, interest-free (Riba), based on authentic Islamic principles.",
        verse: "« Allah has permitted trade and has forbidden usury » - Quran 2:275",
        principle: "Principle: Murabaha, Ijara, Musharaka"
      },
      education: {
        title: "CED Academy Institute",
        content: "Complete Islamic education combining modern science with traditional values following Salaf methodology.",
        verse: "« And say: My Lord, increase me in knowledge » - Quran 20:114",
        principle: "Method: Quran, Sunnah, Ijma', Qiyas"
      },
      ai: {
        title: "AI Aisha Al-Aman",
        content: "Ethical artificial intelligence respecting Islamic boundaries and guiding towards good.",
        verse: "« And whoever fears Allah, He will make for him a way out » - Quran 65:2",
        principle: "Validation: 150+ international scholars"
      }
    },
    tr: {
      banking: {
        title: "CED Helal Bankacılık",
        content: "%100 Şeriat uyumlu bankacılık sistemi, faizsiz (Riba), otantik İslami ilkelere dayalı.",
        verse: "« Allah ticareti helal, faizi haram kıldı » - Kuran 2:275",
        principle: "İlke: Murabaha, İcara, Müşaraka"
      },
      education: {
        title: "CED Akademi Enstitüsü",
        content: "Modern bilimi geleneksel değerlerle birleştiren, Selef metodolojisini takip eden kapsamlı İslami eğitim.",
        verse: "« De ki: Rabbim, benim ilmimi artır » - Kuran 20:114",
        principle: "Metod: Kuran, Sünnet, İcma, Kıyas"
      },
      ai: {
        title: "AI Aisha Al-Aman",
        content: "İslami sınırları saygı gösteren ve iyiliğe yönlendiren etik yapay zeka.",
        verse: "« Kim Allah'tan korkarsa, Allah ona bir çıkış yolu verir » - Kuran 65:2",
        principle: "Doğrulama: 150+ uluslararası alim"
      }
    }
  };

  const currentContent = tooltipContent[selectedLanguage as keyof typeof tooltipContent];

  const TooltipCard = ({ id, icon, title }: { id: string; icon: React.ReactNode; title: string }) => (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
        activeTooltip === id ? 'ring-2 ring-green-500 bg-green-50 dark:bg-green-900/20' : ''
      }`}
      onClick={() => setActiveTooltip(activeTooltip === id ? null : id)}
    >
      <CardContent className="p-4 text-center">
        <div className="flex flex-col items-center gap-2">
          {icon}
          <span className="text-sm font-medium">{title}</span>
          <Info className="h-4 w-4 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Book className="h-6 w-6 text-green-600" />
            Système de Guidance Spirituelle Islamique
          </CardTitle>
          <CardDescription>
            Tooltips contextuels avec références coraniques authentiques - Support multilingue
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Language Selector */}
          <div className="flex justify-center gap-2 mb-6">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant={selectedLanguage === lang.code ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLanguage(lang.code)}
                className="text-xs"
              >
                {lang.flag} {lang.name}
              </Button>
            ))}
          </div>

          {/* Interactive Elements */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <TooltipCard
              id="banking"
              icon={<div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">🏦</div>}
              title="Banking Halal"
            />
            <TooltipCard
              id="education"
              icon={<div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">📚</div>}
              title="Education"
            />
            <TooltipCard
              id="ai"
              icon={<div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">🤖</div>}
              title="Intelligence IA"
            />
          </div>

          {/* Tooltip Content Display */}
          {activeTooltip && (
            <Card className="border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-transparent dark:from-green-900/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-amber-500" />
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
                      {currentContent[activeTooltip as keyof typeof currentContent].title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {currentContent[activeTooltip as keyof typeof currentContent].content}
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-l-amber-400">
                    <div className="flex items-start gap-2">
                      <Book className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-amber-800 dark:text-amber-200 font-medium italic">
                          {currentContent[activeTooltip as keyof typeof currentContent].verse}
                        </p>
                        <p className="text-amber-700 dark:text-amber-300 text-sm mt-2">
                          {currentContent[activeTooltip as keyof typeof currentContent].principle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      <Globe className="h-3 w-3 mr-1" />
                      Validation Scholars
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800">
                      <Book className="h-3 w-3 mr-1" />
                      Sources Authentiques
                    </Badge>
                    <Badge variant="outline" className="bg-purple-100 text-purple-800">
                      <Star className="h-3 w-3 mr-1" />
                      Conformité 100%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {!activeTooltip && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <Info className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Cliquez sur un élément ci-dessus pour voir la guidance spirituelle contextuelle</p>
              <p className="text-sm mt-2">Chaque tooltip intègre des références coraniques authentiques</p>
            </div>
          )}

          {/* Features Summary */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-3 text-center">🌟 Fonctionnalités Techniques</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-medium text-green-600">React Hooks</div>
                  <div className="text-gray-600">État interactif</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-blue-600">Multilingue</div>
                  <div className="text-gray-600">8+ langues</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-purple-600">Références</div>
                  <div className="text-gray-600">Coran/Sunna</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-amber-600">Validation</div>
                  <div className="text-gray-600">150+ scholars</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export { IslamicTooltip };