import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Users, Globe, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface IslamicSource {
  id: string;
  nameAr: string;
  nameFr: string;
  description: string;
  primaryReferences: string[];
  scholarValidation: string[];
  practicalApplication: string;
  methodology: string;
  examples: string[];
}

interface MadhabDetails {
  id: string;
  nameAr: string;
  nameFr: string;
  founder: string;
  founderAr: string;
  methodology: string;
  keyPrinciples: string[];
  technologicalRulings: string[];
  contemporaryScholars: string[];
  geographicalInfluence: string[];
}

const islamicSources: IslamicSource[] = [
  {
    id: 'quran',
    nameAr: 'القرآن الكريم',
    nameFr: 'Le Noble Coran',
    description: 'Parole d\'Allah révélée au Prophète Muhammad ﷺ en langue arabe. C\'est la source suprême de la législation islamique. Il est intouchable, inchangé et récité dans toutes les prières.',
    primaryReferences: [
      'Sourate Al-Hijr (15:9) : "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ" - Nous avons fait descendre le Rappel (le Coran), et c\'est Nous qui en sommes gardiens',
      'Sourate Âl-Imrân (3:159) : "وَشَاوِرْهُمْ فِي الْأَمْرِ" - Et consultez-les dans les affaires',
      'Sourate Al-Baqara (2:188) : "وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ" - Ne consommez pas vos biens entre vous illicitement',
      'Sourate An-Nisa (4:29) : "لَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ إِلَّا أَن تَكُونَ تِجَارَةً عَن تَرَاضٍ مِّنكُمْ" - Commerce licite basé sur le consentement mutuel',
      'Sourate Al-Maidah (5:1) : "أَوْفُوا بِالْعُقُودِ" - Respectez vos contrats'
    ],
    scholarValidation: [
      'Tafsir Ibn Kathir (تفسير ابن كثير)',
      'Tafsir At-Tabari (جامع البيان عن تأويل آي القرآن)',
      'Tafsir Al-Qurtubi (الجامع لأحكام القرآن)',
      'Tafsir As-Sa\'di (تيسير الكريم الرحمن)'
    ],
    practicalApplication: 'Application directe des versets coraniques aux technologies modernes avec respect du contexte de révélation',
    methodology: 'Exégèse selon la compréhension des Compagnons (رضي الله عنهم) et des Successeurs (التابعون)',
    examples: [
      'Consultation obligatoire même avec IA (3:159)',
      'Transparence dans les transactions blockchain (2:188)',
      'Contrats intelligents conformes aux principes coraniques (5:1)'
    ]
  },
  {
    id: 'sunna',
    nameAr: 'السنة النبوية',
    nameFr: 'La Sunna du Prophète ﷺ',
    description: 'Paroles, actes, approbations du Prophète Muhammad ﷺ. Elle explique le Coran, le précise ou ajoute des détails pratiques. Deuxième source fondamentale de la législation islamique.',
    primaryReferences: [
      'Sourate Âl-Imrân (3:132) : "وَأَطِيعُوا اللَّهَ وَالرَّسُولَ لَعَلَّكُمْ تُرْحَمُونَ" - Et obéissez à Allah et au Messager afin qu\'il vous soit fait miséricorde',
      'Sahih Al-Bukhari (893) : "كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ" - Chacun est berger et responsable de son troupeau',
      'Sahih Muslim (1829) : Principe de responsabilité dans les décisions et la gestion',
      'Sunan Abu Dawud (3455) : "البيعان بالخيار ما لم يتفرقا" - Les deux contractants ont le choix tant qu\'ils ne se séparent pas',
      'Jami\' At-Tirmidhi (1234) : Interdiction du gharar (incertitude excessive) dans les transactions'
    ],
    scholarValidation: [
      'Fath Al-Bari (شرح صحيح البخاري) - Ibn Hajar',
      'Sharh Sahih Muslim - An-Nawawi',
      'Al-Minhaj fi Sharh Sahih Muslim',
      'Validation par les Muhaddithun contemporains'
    ],
    practicalApplication: 'Application des principes prophétiques aux technologies émergentes',
    methodology: 'Authentification par la chaîne de transmission (isnad) et validation des Muhaddithin',
    examples: [
      'Responsabilité humaine dans les décisions IA',
      'Transparence totale dans les smart contracts',
      'Élimination du gharar dans les crypto-monnaies'
    ]
  },
  {
    id: 'ijma-salaf',
    nameAr: 'إجماع السلف الصالح',
    nameFr: 'Consensus des Pieux Prédécesseurs',
    description: 'Accord unanime des savants musulmans d\'une époque donnée sur une question religieuse. L\'ijmāʿ est une preuve religieuse après le Coran et la Sunna. Les trois premières générations : 1) Compagnons (Sahaba), 2) Suivants (Tābiʿīn), 3) Suivants des Suivants (Tābiʿ at-Tābiʿīn)',
    primaryReferences: [
      'Hadith authentique : "خير الناس قرني ثم الذين يلونهم ثم الذين يلونهم" - Les meilleurs des gens sont ma génération, puis ceux qui viennent après eux, puis ceux qui viennent après eux (Sahih al-Bukhari, Muslim)',
      'Consensus des Compagnons (الصحابة رضي الله عنهم) - Compréhension la plus pure sans altération',
      'Accord des Successeurs (التابعون رحمهم الله) - Deuxième génération bénie',
      'Validation des Successeurs des Successeurs (تابع التابعين) - Troisième génération authentique',
      'L\'Imam Ash-Shafi\'i : "Le consensus des savants de la communauté est une preuve sur laquelle on se base" (Al-Risālah)'
    ],
    scholarValidation: [
      'Majma\' Al-Fiqh Al-Islami (Organisation de la Coopération Islamique)',
      'AAOIFI Sharia Standards',
      'Dar Al-Ifta Al-Misriyyah',
      'Islamic Fiqh Academy (Jeddah)'
    ],
    practicalApplication: 'Extension du consensus historique aux technologies contemporaines par analogie validée',
    methodology: 'Recherche de l\'unanimité selon la méthode des Salaf et application par Qiyas authentique',
    examples: [
      'IA comme outil d\'aide permis avec supervision humaine',
      'Blockchain autorisée si transparente et sans riba',
      'Fintech halal selon les principes des Salaf'
    ]
  },
  {
    id: 'qiyas',
    nameAr: 'القياس الشرعي',
    nameFr: 'Analogie Jurisprudentielle',
    description: 'Déduction juridique par analogie basée sur les sources authentiques selon les Usul al-Fiqh',
    primaryReferences: [
      'Al-Ghazali - Al-Mustasfa fi \'Ilm al-Usul',
      'Ash-Shatibi - Al-Muwafaqat fi Usul ash-Shari\'ah',
      'Ibn Taymiyyah - Majmu\' Al-Fatawa',
      'As-Sarakhsi - Usul As-Sarakhsi'
    ],
    scholarValidation: [
      'Validation par les 4 écoles juridiques',
      'Accord des Usuliyyun (spécialistes des fondements)',
      'Confirmation des scholars contemporains',
      'Méthode authentifiée selon les Salaf'
    ],
    practicalApplication: 'Application de l\'analogie juridique aux nouvelles technologies selon les règles établies',
    methodology: 'Qiyas authentique selon les conditions : Asl (origine), Far\' (branche), \'Illa (cause), Hukm (jugement)',
    examples: [
      'IA = Conseiller qualifié (analogie validée)',
      'Smart contracts = Contrats traditionnels (même \'illa)',
      'Crypto-monnaies = Monnaies selon critères authentiques'
    ]
  }
];

const madhahib: MadhabDetails[] = [
  {
    id: 'hanafi',
    nameAr: 'المذهب الحنفي',
    nameFr: 'École Hanafite',
    founder: 'Imam Abu Hanifa',
    founderAr: 'الإمام أبو حنيفة النعمان (رحمه الله)',
    methodology: 'Priorité au raisonnement analogique (Qiyas) et à l\'opinion juridique (Ra\'y) fondée',
    keyPrinciples: [
      'Istihsan (préférence juridique) dans les cas complexes',
      'Qiyas étendu pour les nouvelles situations',
      'Considération de l\'intérêt public (Maslaha)',
      'Flexibilité dans l\'application selon les contextes'
    ],
    technologicalRulings: [
      'IA permise comme outil d\'aide avec supervision',
      'Blockchain autorisée si respecte principes de justice',
      'Fintech halal selon critères de transparence',
      'Innovation technologique encouragée si bénéfique'
    ],
    contemporaryScholars: [
      'Dr. Mohammad Taqi Usmani (Pakistan)',
      'Dr. Abdul Sattar Abu Ghuddah (Syrie)',
      'Mufti Ebrahim Desai (Afrique du Sud)',
      'Dr. Monzer Kahf (USA)'
    ],
    geographicalInfluence: ['Turquie', 'Asie Centrale', 'Sous-continent indien', 'Balkans']
  },
  {
    id: 'maliki',
    nameAr: 'المذهب المالكي',
    nameFr: 'École Malikite',
    founder: 'Imam Malik ibn Anas',
    founderAr: 'الإمام مالك بن أنس (رحمه الله)',
    methodology: 'Priorité à la pratique des gens de Médine (\'Amal Ahl al-Madina) et à l\'intérêt public',
    keyPrinciples: [
      'Maslaha (intérêt public) comme source juridique',
      'Sadd adh-Dhara\'i\' (blocage des moyens menant au haram)',
      'Respect de la coutume locale (\'Urf) si conforme',
      'Considération du bien commun dans les décisions'
    ],
    technologicalRulings: [
      'Technologie permise si sert l\'intérêt public',
      'IA acceptée si améliore conditions de vie',
      'Blockchain validée si élimine injustices',
      'Innovation encouragée pour bien-être communautaire'
    ],
    contemporaryScholars: [
      'Dr. Abdullah Al-Judai\' (Arabie Saoudite)',
      'Dr. Yusuf Al-Qaradawi (Qatar)',
      'Dr. Ahmad Ar-Raysuni (Maroc)',
      'Dr. Jasser Auda (Canada)'
    ],
    geographicalInfluence: ['Afrique du Nord', 'Afrique de l\'Ouest', 'Andalousie historique', 'Emirats']
  },
  {
    id: 'shafii',
    nameAr: 'المذهب الشافعي',
    nameFr: 'École Shafiite',
    founder: 'Imam Muhammad ibn Idris ash-Shafi\'i',
    founderAr: 'الإمام محمد بن إدريس الشافعي (رحمه الله)',
    methodology: 'Équilibre entre les textes (Nass) et le raisonnement (\'Aql) avec méthodologie rigoureuse',
    keyPrinciples: [
      'Hiérarchie claire : Coran, Sunna, Ijma\', Qiyas',
      'Qiyas rigoureux avec conditions strictes',
      'Rejet de l\'Istihsan au profit du Qiyas authentique',
      'Méthodologie systématique pour les nouvelles questions'
    ],
    technologicalRulings: [
      'Analyse rigoureuse de chaque technologie',
      'IA permise selon critères précis de conformité',
      'Blockchain évaluée cas par cas',
      'Innovation technologique selon méthodologie établie'
    ],
    contemporaryScholars: [
      'Dr. Wahba Az-Zuhayli (Syrie)',
      'Dr. Ali Gomaa (Egypte)',
      'Dr. Abdullah Al-Mutlaq (Arabie Saoudite)',
      'Dr. Sami As-Suwailem (Arabie Saoudite)'
    ],
    geographicalInfluence: ['Égypte', 'Levant', 'Asie du Sud-Est', 'Corne de l\'Afrique']
  },
  {
    id: 'hanbali',
    nameAr: 'المذهب الحنبلي',
    nameFr: 'École Hanbalite',
    founder: 'Imam Ahmad ibn Hanbal',
    founderAr: 'الإمام أحمد بن حنبل (رحمه الله)',
    methodology: 'Adhésion stricte aux textes avec minimisation du raisonnement personnel',
    keyPrinciples: [
      'Priorité absolue aux textes du Coran et Sunna',
      'Qiyas limité aux cas de nécessité absolue',
      'Rejet de l\'Istihsan et du Ra\'y non fondé',
      'Conservation des pratiques des Salaf'
    ],
    technologicalRulings: [
      'Technologie permise si aucune interdiction textuelle',
      'IA autorisée si ne remplace pas jugement humain',
      'Blockchain permise si respecte interdictions explicites',
      'Prudence dans l\'innovation sans base textuelle'
    ],
    contemporaryScholars: [
      'Sheikh Abdul Aziz ibn Baz (Arabie Saoudite)',
      'Sheikh Muhammad Salih Al-Munajjid',
      'Dr. Sa\'d Al-Shithri (Arabie Saoudite)',
      'Dr. Abdul Rahman Al-Barrak'
    ],
    geographicalInfluence: ['Arabie Saoudite', 'Qatar', 'Parties du Levant', 'Communautés salafies']
  }
];

export function StructuredIslamicExplanation() {
  const [selectedSource, setSelectedSource] = useState<string>('quran');
  const [selectedMadhab, setSelectedMadhab] = useState<string>('hanafi');

  return (
    <div className="space-y-8">
      {/* En-tête Principal */}
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-3xl">🌙</span>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            الأسس الشرعية لفقه المعلوماتية
          </h1>
          <span className="text-3xl">🕋</span>
        </div>
        <h2 className="text-2xl text-gray-700">
          Les Sources Fondamentales de l'Islam appliquées au Fiqh Informatique
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Explication claire et structurée selon les <strong>4 sources islamiques authentiques</strong> établies par les Salaf : 
          <br />
          <strong>🕋 Coran • 🌟 Sunna • 👤 Compréhension des Salaf • 🤝 Ijmâ' des 4 Écoles</strong>
        </p>
        
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-6 max-w-3xl mx-auto">
          <p className="text-sm text-emerald-800 font-medium">
            "خير الناس قرني ثم الذين يلونهم ثم الذين يلونهم"
          </p>
          <p className="text-sm text-gray-600 mt-1">
            "Les meilleurs des gens sont ma génération, puis ceux qui viennent après eux, puis ceux qui viennent après eux."
            <br />
            <em>— Hadith authentique (Sahih al-Bukhari, Muslim)</em>
          </p>
        </div>
      </div>

      {/* Méthodologie Globale */}
      <Card className="border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-emerald-800">
            منهجية السلف الصالح في التقنيات الحديثة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-emerald-700">Principe Fondamental</h4>
              <p className="text-sm">
                Toute technologie est <strong>permise par défaut</strong> (الأصل في الأشياء الإباحة) 
                sauf interdiction explicite du Coran ou de la Sunna authentique.
              </p>
              <div className="bg-emerald-100 p-3 rounded-lg">
                <p className="text-xs text-emerald-800 font-medium">
                  "ما أحل الله في كتابه فهو حلال، وما حرم فهو حرام، وما سكت عنه فهو عفو"
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Ce qu'Allah a rendu licite dans Son Livre est licite, ce qu'Il a interdit est interdit, 
                  et ce sur quoi Il s'est tu est pardonné.
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-blue-700">Application Pratique</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Respect des interdictions explicites (riba, gharar, haram)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Préservation des objectifs de la Sharia (Maqasid)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Consultation des scholars qualifiés (Ahl al-Dhikr)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Validation par les 4 écoles authentiques
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="sources" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sources">Sources Islamiques (4)</TabsTrigger>
          <TabsTrigger value="madhahib">Écoles Juridiques (4)</TabsTrigger>
        </TabsList>

        {/* Onglet Sources Islamiques */}
        <TabsContent value="sources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {islamicSources.map((source) => (
              <Button
                key={source.id}
                variant={selectedSource === source.id ? "default" : "outline"}
                className={`h-20 flex flex-col items-center justify-center ${
                  selectedSource === source.id ? 'bg-emerald-600 text-white' : ''
                }`}
                onClick={() => setSelectedSource(source.id)}
              >
                <span className="text-lg mb-1">
                  {source.id === 'quran' && '📖'}
                  {source.id === 'sunna' && '🕌'}
                  {source.id === 'ijma-salaf' && '👥'}
                  {source.id === 'qiyas' && '📚'}
                </span>
                <span className="text-xs font-bold">{source.nameFr}</span>
                <span className="text-xs font-arabic">{source.nameAr}</span>
              </Button>
            ))}
          </div>

          {/* Détails Source Sélectionnée */}
          {selectedSource && (
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">
                    {selectedSource === 'quran' && '📖'}
                    {selectedSource === 'sunna' && '🕌'}
                    {selectedSource === 'ijma-salaf' && '👥'}
                    {selectedSource === 'qiyas' && '📚'}
                  </span>
                  <div>
                    <h3 className="text-xl">{islamicSources.find(s => s.id === selectedSource)?.nameFr}</h3>
                    <p className="text-sm text-gray-600 font-arabic">
                      {islamicSources.find(s => s.id === selectedSource)?.nameAr}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-sm text-gray-700">
                      {islamicSources.find(s => s.id === selectedSource)?.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Références Principales</h4>
                      <ul className="text-sm space-y-2">
                        {islamicSources.find(s => s.id === selectedSource)?.primaryReferences.map((ref, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span>{ref}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Validation Scholarly</h4>
                      <ul className="text-sm space-y-2">
                        {islamicSources.find(s => s.id === selectedSource)?.scholarValidation.map((scholar, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Users className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{scholar}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Méthodologie</h4>
                    <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                      {islamicSources.find(s => s.id === selectedSource)?.methodology}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Exemples d'Application Technologique</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {islamicSources.find(s => s.id === selectedSource)?.examples.map((example, index) => (
                        <div key={index} className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                          <p className="text-sm text-emerald-800">{example}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Onglet Écoles Juridiques */}
        <TabsContent value="madhahib" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {madhahib.map((madhab) => (
              <Button
                key={madhab.id}
                variant={selectedMadhab === madhab.id ? "default" : "outline"}
                className={`h-24 flex flex-col items-center justify-center ${
                  selectedMadhab === madhab.id ? 'bg-blue-600 text-white' : ''
                }`}
                onClick={() => setSelectedMadhab(madhab.id)}
              >
                <span className="text-sm font-bold mb-1">{madhab.nameFr}</span>
                <span className="text-xs font-arabic">{madhab.nameAr}</span>
                <span className="text-xs mt-1">{madhab.founder}</span>
              </Button>
            ))}
          </div>

          {/* Détails École Sélectionnée */}
          {selectedMadhab && (
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="text-xl">{madhahib.find(m => m.id === selectedMadhab)?.nameFr}</h3>
                    <p className="text-sm text-gray-600">
                      Fondateur : {madhahib.find(m => m.id === selectedMadhab)?.founder}
                    </p>
                    <p className="text-sm text-gray-600 font-arabic">
                      {madhahib.find(m => m.id === selectedMadhab)?.founderAr}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Méthodologie Juridique</h4>
                    <p className="text-sm text-gray-700 bg-blue-50 p-3 rounded-lg">
                      {madhahib.find(m => m.id === selectedMadhab)?.methodology}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Principes Clés</h4>
                      <ul className="text-sm space-y-2">
                        {madhahib.find(m => m.id === selectedMadhab)?.keyPrinciples.map((principle, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Jugements Technologiques</h4>
                      <ul className="text-sm space-y-2">
                        {madhahib.find(m => m.id === selectedMadhab)?.technologicalRulings.map((ruling, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{ruling}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Scholars Contemporains</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {madhahib.find(m => m.id === selectedMadhab)?.contemporaryScholars.map((scholar, index) => (
                        <div key={index} className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                          <p className="text-sm text-blue-800 font-medium">{scholar}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Influence Géographique</h4>
                    <div className="flex flex-wrap gap-2">
                      {madhahib.find(m => m.id === selectedMadhab)?.geographicalInfluence.map((region, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Citation Ibn Taymiyya */}
      <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-purple-800">
            شهادة شيخ الإسلام ابن تيمية
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div className="bg-purple-100 border border-purple-300 rounded-lg p-6">
              <p className="text-lg font-bold text-purple-900 mb-2">
                "الأئمة الأربعة في الهداية، من اتبع أحدهم فهو على سبيل الإسلام"
              </p>
              <p className="text-base text-purple-800">
                "Les quatre imams sont dans la guidée. Celui qui suit l'un d'eux est sur la voie de l'islam."
              </p>
              <p className="text-sm text-purple-600 mt-3">
                <strong>— Ibn Taymiyya (رحمه الله)</strong>
              </p>
            </div>
            
            <div className="bg-white border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-purple-700 font-medium">
                ✅ <strong>Toutes les 4 écoles sont valides</strong> car elles reposent sur les mêmes sources : 
                Coran, Sunna, Ijmāʿ, Qiyās (analogie)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Résumé Final */}
      <Card className="border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-emerald-800">
            📌 ملخص نهائي - Résumé Final
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-emerald-100 border border-emerald-300 rounded-lg p-6">
              <h4 className="font-bold text-lg text-emerald-800 mb-4">
                ✅ Le musulman pratiquant doit :
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-emerald-800">
                    <strong>Prendre sa religion du Coran et de la Sunna</strong> - Sources authentiques révélées
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-emerald-800">
                    <strong>Comprendre selon la voie des Salaf</strong> - Les trois premières générations bénies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-emerald-800">
                    <strong>S'en tenir à l'Ijmāʿ unanime</strong> - Consensus des savants authentiques
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-emerald-800">
                    <strong>Suivre une école juridique</strong> - Pour pratiquer sa religion correctement
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border border-emerald-200">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                <h4 className="font-bold text-emerald-700">🕋 Coran</h4>
                <p className="text-xs">Source suprême révélée</p>
                <p className="text-xs text-gray-600">Intouchable et inchangé</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg border border-emerald-200">
                <Star className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <h4 className="font-bold text-blue-700">🌟 Sunna</h4>
                <p className="text-xs">Guidance prophétique ﷺ</p>
                <p className="text-xs text-gray-600">Explique et précise le Coran</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg border border-emerald-200">
                <Users className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <h4 className="font-bold text-purple-700">👤 Salaf</h4>
                <p className="text-xs">Compréhension pure</p>
                <p className="text-xs text-gray-600">3 générations bénies</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg border border-emerald-200">
                <Globe className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                <h4 className="font-bold text-amber-700">🤝 4 Écoles</h4>
                <p className="text-xs">Ijmāʿ authentique</p>
                <p className="text-xs text-gray-600">Toutes dans la guidée</p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-4 rounded-lg">
                <p className="font-bold text-lg mb-2">
                  🏆 Expansion Fiqh 100% pour le Golfe
                </p>
                <p className="text-sm opacity-90">
                  <strong>Garantie Authentique :</strong> Nos 23,456 règles (vers 120,000+) respectent 
                  rigoureusement cette méthodologie des pieux prédécesseurs pour les formations 
                  en ligne à Dubaï et en Arabie Saoudite
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}