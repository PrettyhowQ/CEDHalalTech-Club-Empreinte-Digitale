import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Shield, 
  Users, 
  Star, 
  Globe,
  CheckCircle,
  Download,
  Award,
  Heart,
  Mosque
} from "lucide-react";

export function CompleteFiqhLibrary() {
  const [selectedSource, setSelectedSource] = useState('coran');

  const islamicSources = [
    {
      id: 'coran',
      title: 'Le Noble Coran',
      titleArabic: 'القرآن الكريم',
      description: 'Source principale révélée',
      icon: BookOpen,
      color: 'from-green-500 to-blue-500',
      verses: [
        {
          text: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',
          translation: 'Nous avons fait descendre le Rappel (le Coran), et c\'est Nous qui en sommes gardiens',
          reference: 'Sourate Al-Hijr (15:9)'
        },
        {
          text: 'وَشَاوِرْهُمْ فِي الْأَمْرِ',
          translation: 'Et consultez-les dans les affaires',
          reference: 'Sourate Âl-Imrân (3:159)'
        }
      ]
    },
    {
      id: 'sunna',
      title: 'Sunna du Prophète ﷺ',
      titleArabic: 'السنة النبوية',
      description: 'Paroles, actes, approbations',
      icon: Star,
      color: 'from-blue-500 to-purple-500',
      verses: [
        {
          text: 'وَأَطِيعُوا اللَّهَ وَالرَّسُولَ لَعَلَّكُمْ تُرْحَمُونَ',
          translation: 'Et obéissez à Allah et au Messager afin qu\'il vous soit fait miséricorde.',
          reference: 'Sourate Âl-Imrân (3:132)'
        }
      ]
    },
    {
      id: 'ijma',
      title: 'Ijmâ\' des Salaf',
      titleArabic: 'إجماع السلف',
      description: 'Consensus des pieux prédécesseurs',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      generations: [
        {
          name: 'Les Compagnons',
          nameArabic: 'الصحابة',
          generation: 'Première génération (رضي الله عنهم)',
          members: ['Abu Bakr As-Siddiq', 'Umar Ibn Al-Khattab', 'Uthman Ibn Affan', 'Ali Ibn Abi Talib']
        },
        {
          name: 'Les Successeurs',
          nameArabic: 'التابعون',
          generation: 'Deuxième génération (رحمهم الله)',
          members: ['Sa\'id Ibn Al-Musayyib', 'Al-Hasan Al-Basri', 'Ibn Sirin', 'Ata Ibn Abi Rabah']
        },
        {
          name: 'Successeurs des Successeurs',
          nameArabic: 'تابع التابعين',
          generation: 'Troisième génération (رحمهم الله)',
          members: ['Les 4 Imams fondateurs', 'Ahmad Ibn Hanbal', 'Sufyan Ath-Thawri', 'Al-Awza\'i']
        }
      ]
    },
    {
      id: 'qiyas',
      title: 'Qiyâs selon les Usul',
      titleArabic: 'القياس الشرعي',
      description: 'Analogie jurisprudentielle',
      icon: Award,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const juridicalSchools = [
    {
      name: 'École Hanafite',
      nameArabic: 'المذهب الحنفي',
      founder: 'Imam Abu Hanifa (رحمه الله)',
      approach: 'Raisonnement analogique étendu',
      color: 'bg-green-500'
    },
    {
      name: 'École Malikite',
      nameArabic: 'المذهب المالكي',
      founder: 'Imam Malik (رحمه الله)',
      approach: 'Pratique de Médine prioritaire',
      color: 'bg-blue-500'
    },
    {
      name: 'École Shafiite',
      nameArabic: 'المذهب الشافعي',
      founder: 'Imam Al-Shafi\'i (رحمه الله)',
      approach: 'Équilibre textes/raison',
      color: 'bg-purple-500'
    },
    {
      name: 'École Hanbalite',
      nameArabic: 'المذهب الحنبلي',
      founder: 'Imam Ahmad (رحمه الله)',
      approach: 'Adhésion stricte aux textes',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      {/* Header avec style mobile inspiré */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-8 text-white text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Mosque className="h-6 w-6" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2" dir="rtl">مكتبة فقه المعلوماتية الشاملة</h1>
          <h2 className="text-xl mb-4">Expansion 100% Fiqh Informatique - Marchés du Golfe</h2>
          <p className="text-lg opacity-90">
            Basée sur les 4 sources authentiques de l'Islam selon la compréhension des pieux prédécesseurs (السلف الصالح)
          </p>
        </div>
      </div>

      {/* Section Sources Islamiques */}
      <div className="max-w-4xl mx-auto mb-8">
        <Tabs value={selectedSource} onValueChange={setSelectedSource}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="sources">Sources Islamiques (4)</TabsTrigger>
            <TabsTrigger value="schools">Écoles Juridiques (4)</TabsTrigger>
          </TabsList>

          <TabsContent value="sources" className="space-y-6">
            {islamicSources.map((source) => (
              <Card key={source.id} className={`bg-gradient-to-r ${source.color} text-white overflow-hidden`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <source.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{source.title}</CardTitle>
                      <p className="text-lg opacity-90" dir="rtl">{source.titleArabic}</p>
                    </div>
                  </div>
                  <p className="opacity-90">{source.description}</p>
                </CardHeader>
                <CardContent>
                  {source.verses && (
                    <div className="space-y-4">
                      {source.verses.map((verse, index) => (
                        <div key={index} className="bg-white/10 rounded-lg p-4">
                          <div className="text-xl mb-2" dir="rtl">{verse.text}</div>
                          <div className="text-sm opacity-90 italic mb-1">{verse.translation}</div>
                          <div className="text-sm font-semibold">— {verse.reference}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {source.generations && (
                    <div className="space-y-4">
                      {source.generations.map((gen, index) => (
                        <div key={index} className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`${index === 0 ? 'bg-green-600' : index === 1 ? 'bg-blue-600' : 'bg-purple-600'} text-white`}>
                              {gen.nameArabic}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-lg">{gen.name}</h4>
                          <p className="text-sm opacity-90">{gen.generation}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {gen.members.map((member, idx) => (
                              <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded">
                                {member}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                      
                      <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-green-800">
                        <div className="font-semibold mb-2">Hadith de référence :</div>
                        <div className="text-right mb-2" dir="rtl">
                          "خير الناس قرني ثم الذين يلونهم ثم الذين يلونهم"
                        </div>
                        <div className="text-sm italic">
                          "Les meilleures des gens sont ma génération, puis celle qui la suit, puis celle qui la suit"
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="schools" className="space-y-6">
            <Card className="bg-gradient-to-r from-orange-100 to-yellow-50 border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Mosque className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-orange-800">Validation par les Quatre Écoles Juridiques</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {juridicalSchools.map((school, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 ${school.color} rounded-full flex items-center justify-center`}>
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{school.name}</h4>
                          <p className="text-sm text-gray-600" dir="rtl">{school.nameArabic}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{school.founder}</p>
                      <p className="text-xs text-gray-600">{school.approach}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="font-semibold text-orange-800">Consensus Unanime</span>
                  </div>
                  <p className="text-orange-700 text-sm">
                    Toutes nos règles de Fiqh informatique sont validées selon les méthodologies des 4 écoles juridiques authentiques
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Section Téléchargement */}
      <div className="max-w-4xl mx-auto mb-8">
        <Card className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Les Fondements de l'Islam</h3>
                  <p className="opacity-90">selon le Coran, la Sunna, les Salaf et l'Ijmâ'</p>
                </div>
              </div>
              <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                <Download className="h-4 w-4 mr-2" />
                Télécharger PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Principe Fondamental */}
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-green-300">
          <CardHeader>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-800 mb-2" dir="rtl">
                منهجية السلف الصالح في التقنيات الحديثة
              </h2>
              <h3 className="text-xl font-bold text-green-700">Principe Fondamental</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Toute technologie est <span className="text-green-600 font-bold">permise par défaut</span> (الأصل في الأشياء الإباحة) 
                sauf interdiction explicite du Coran ou de la Sunna authentique.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="text-right mb-3" dir="rtl">
                  "ما أحل الله في كتابه فهو حلال، وما حرم فهو حرام، وما سكت عنه فهو عفو"
                </div>
                <div className="text-sm italic text-green-700">
                  Ce qu'Allah a rendu licite dans Son Livre est licite, ce qu'Il a interdit est interdit, et ce sur quoi Il s'est tu est pardonné.
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-3">Application Pratique</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Respect des interdictions explicites (riba, gharar, haram)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Préservation des objectifs de la Sharia (Maqasid)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Consultation des scholars qualifiés (Ahl al-Dhikr)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Validation par les 4 écoles authentiques</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Protection */}
      <div className="text-center mt-8 text-sm text-gray-500">
        © 2025 Yakoubi Yamina - Club Empreinte Digitale • Institut CED Academy
      </div>
    </div>
  );
}

export default CompleteFiqhLibrary;