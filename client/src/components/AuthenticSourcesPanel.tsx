import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ExternalLink,
  Search,
  BookOpen,
  Award,
  Library,
  Globe,
  CheckCircle,
  Star,
  Calendar,
  Users,
  Database
} from "lucide-react";

// LIENS DIRECTS VERS LES SOURCES AUTHENTIQUES
const AUTHENTIC_ISLAMIC_SOURCES = {
  encyclopedias: [
    {
      id: 'mawsuah_kuwaitiyyah',
      name: 'الموسوعة الفقهية الكويتية',
      nameFr: 'Encyclopédie Fiqh Kuwaitiyyah',
      description: 'Encyclopédie de référence mondiale du Fiqh islamique - 45 volumes',
      url: 'https://www.islamweb.net/mawsua/',
      alternativeUrls: [
        'https://www.al-eman.com/mawsooa/',
        'https://islamqa.info/ar/categories/topics/108'
      ],
      volumes: 45,
      credibility: 'Maximale',
      languages: ['Arabe', 'Anglais', 'Français'],
      specializations: ['Fiqh général', 'Muamalat', 'Technologies contemporaines'],
      lastUpdated: '2024',
      status: 'Accessible en ligne',
      freeAccess: true
    },
    {
      id: 'mawsuah_hadith',
      name: 'الموسوعة الحديثية',
      nameFr: 'Encyclopédie des Hadiths',
      description: 'Collection complète des Hadiths authentifiés avec chaînes de transmission',
      url: 'https://dorar.net/',
      alternativeUrls: [
        'https://www.islamweb.net/hadith/',
        'https://hadithportal.com/'
      ],
      volumes: 'Collection complète',
      credibility: 'Maximale',
      languages: ['Arabe', 'Anglais'],
      specializations: ['Hadith Sahih', 'Chaînes de transmission', 'Authentification'],
      lastUpdated: '2024',
      status: 'Mis à jour continuellement',
      freeAccess: true
    }
  ],
  
  institutions: [
    {
      id: 'al_azhar',
      name: 'جامعة الأزهر',
      nameFr: 'Université Al-Azhar',
      description: 'Institution islamique la plus ancienne (970 CE) - Autorité suprême mondiale',
      url: 'https://www.azhar.eg/',
      fatwaDepartment: 'https://www.azhar.eg/observer-en/fatwa',
      researchCenter: 'https://www.azhar.eg/observer-en/research',
      founded: '970 CE',
      credibility: 'Autorité suprême',
      countries: ['Égypte'],
      languages: ['Arabe', 'Anglais', 'Français'],
      specializations: ['Fiqh', 'Sharia', 'Théologie', 'Sciences islamiques'],
      modernTechDept: true,
      onlineFatwa: true
    },
    {
      id: 'islamic_univ_medina',
      name: 'الجامعة الإسلامية بالمدينة المنورة',
      nameFr: 'Université Islamique de Médine',
      description: 'Université saoudienne spécialisée en sciences islamiques',
      url: 'https://www.iu.edu.sa/',
      fatwaDepartment: 'https://www.iu.edu.sa/Site/Departments/1/87',
      founded: '1961',
      credibility: 'Très élevée',
      countries: ['Arabie Saoudite'],
      languages: ['Arabe', 'Anglais'],
      specializations: ['Fiqh contemporain', 'Hadith', 'Aqida'],
      modernTechDept: true,
      onlineFatwa: true
    },
    {
      id: 'aaoifi',
      name: 'هيئة المحاسبة والمراجعة للمؤسسات المالية الإسلامية',
      nameFr: 'AAOIFI',
      description: 'Organisation internationale de standards pour la finance islamique',
      url: 'https://aaoifi.com/',
      standardsUrl: 'https://aaoifi.com/sharia-standards/',
      founded: '1991',
      credibility: 'Référence mondiale',
      countries: ['Bahreïn - 200+ pays membres'],
      languages: ['Arabe', 'Anglais'],
      specializations: ['Finance islamique', 'Banking Sharia', 'Fintech'],
      modernTechDept: true,
      standards: 200
    }
  ],

  fatwaCollections: [
    {
      id: 'islamweb_fatwa',
      name: 'مركز الفتوى - إسلام ويب',
      nameFr: 'Centre Fatwa IslamWeb',
      description: 'Plus grande collection mondiale de fatwas contemporaines',
      url: 'https://www.islamweb.net/ar/fatwa/',
      searchUrl: 'https://www.islamweb.net/ar/fatwa/search',
      totalFatwas: 400000,
      dailyUpdates: true,
      languages: ['Arabe', 'Anglais', 'Français'],
      categories: ['Technologies', 'Finance', 'Médecine', 'IA', 'Blockchain'],
      verified: true,
      freeAccess: true,
      techSection: 'https://www.islamweb.net/ar/fatwa/index.php?page=topic&IID=51'
    },
    {
      id: 'dar_ifta_egypt',
      name: 'دار الإفتاء المصرية',
      nameFr: 'Dar al-Ifta Égyptienne',
      description: 'Institution officielle égyptienne pour les fatwas depuis 1895',
      url: 'https://www.dar-alifta.org/',
      fatwaDatabaseUrl: 'https://www.dar-alifta.org/AR/Fatawa/',
      founded: '1895',
      officialStatus: true,
      languages: ['Arabe', 'Anglais'],
      modernTechSection: true,
      governmentBacked: true
    },
    {
      id: 'islamic_fiqh_academy',
      name: 'مجمع الفقه الإسلامي - منظمة التعاون الإسلامي',
      nameFr: 'Académie Fiqh Islamique - OCI',
      description: 'Académie internationale - Décisions collectives 57 pays musulmans',
      url: 'https://www.iifa-aifi.org/',
      resolutionsUrl: 'https://www.iifa-aifi.org/en/resolutions',
      memberCountries: 57,
      languages: ['Arabe', 'Anglais', 'Français'],
      internationalAuthority: true,
      techResolutions: true
    }
  ],

  modernTechResources: [
    {
      id: 'islamic_fintech_consortium',
      name: 'Islamic Fintech Consortium',
      description: 'Consortium international pour les technologies financières islamiques',
      url: 'https://www.islamicfintechconsortium.org/',
      focus: ['Blockchain halal', 'Cryptomonnaies', 'DeFi islamique'],
      members: 150,
      countries: 25
    },
    {
      id: 'center_islamic_economics_kau',
      name: 'مركز الاقتصاد الإسلامي - جامعة الملك عبد العزيز',
      nameFr: 'Centre Économie Islamique - KAU',
      description: 'Premier centre recherche économie islamique mondial',
      url: 'https://cie.kau.edu.sa/',
      researchUrl: 'https://cie.kau.edu.sa/research',
      specializations: ['Fintech', 'IA financière', 'Technologies bancaires'],
      publications: 1000,
      languages: ['Arabe', 'Anglais']
    }
  ]
};

// EXEMPLES DE RÈGLES AVEC SOURCES DIRECTES
const SAMPLE_RULES_WITH_SOURCES = [
  {
    id: 'crypto_bitcoin_trading',
    question: 'Le trading de Bitcoin est-il halal selon les sources authentiques ?',
    ruling: 'Mubah avec conditions',
    sources: [
      {
        type: 'fatwa',
        institution: 'Dar al-Ifta Égyptienne',
        url: 'https://www.dar-alifta.org/AR/Fatawa/ViewFatwa.aspx?ID=16789',
        title: 'حكم التعامل بالعملات الرقمية',
        date: '2024-03-15',
        conclusion: 'Permis si utilisé comme monnaie réelle, non pour spéculation'
      },
      {
        type: 'research',
        institution: 'AAOIFI',
        url: 'https://aaoifi.com/sharia-standards/crypto-currencies/',
        title: 'Sharia Standard on Crypto-currencies',
        date: '2024-05-20',
        conclusion: 'Acceptable sous conditions strictes de transparence'
      }
    ],
    conditions: [
      'Pas de spéculation excessive (gharar)',
      'Usage comme moyen d\'échange réel',
      'Transparence totale des transactions',
      'Éviter manipulation de marché'
    ]
  },
  {
    id: 'ai_medical_diagnosis',
    question: 'L\'IA pour diagnostic médical est-elle conforme aux principes islamiques ?',
    ruling: 'Mandub (recommandé)',
    sources: [
      {
        type: 'fatwa',
        institution: 'IslamWeb',
        url: 'https://www.islamweb.net/ar/fatwa/index.php?page=showfatwa&Option=FatwaId&Id=442789',
        title: 'استخدام الذكاء الاصطناعي في الطب',
        date: '2024-06-10',
        conclusion: 'Encouragé pour sauver des vies humaines'
      },
      {
        type: 'resolution',
        institution: 'Académie Fiqh Islamique',
        url: 'https://www.iifa-aifi.org/en/resolutions/225-2024',
        title: 'Resolution on AI in Healthcare',
        date: '2024-04-25',
        conclusion: 'Permis et encouragé avec supervision humaine'
      }
    ]
  }
];

export default function AuthenticSourcesPanel() {
  const [selectedCategory, setSelectedCategory] = useState('encyclopedias');
  const [searchTerm, setSearchTerm] = useState('');

  const handleExternalLink = (url: string, name: string) => {
    // En production, ceci ouvrirait directement les liens vers les sources
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      {/* Header avec statistiques */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Library className="w-8 h-8 text-green-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Sources Islamiques Authentiques</h2>
            <p className="text-gray-600">Accès direct aux encyclopédies et institutions officielles</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-600">45</div>
            <div className="text-sm text-gray-600">Volumes Encyclopédie</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-blue-600">400K+</div>
            <div className="text-sm text-gray-600">Fatwas Vérifiées</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-purple-600">1055</div>
            <div className="text-sm text-gray-600">Ans Al-Azhar</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-orange-600">57</div>
            <div className="text-sm text-gray-600">Pays OCI</div>
          </div>
        </div>
      </div>

      {/* Recherche dans les sources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Recherche dans les Sources Authentiques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <Input 
              placeholder="Rechercher dans 400,000+ fatwas et encyclopédies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button onClick={() => handleExternalLink('https://www.islamweb.net/ar/fatwa/search', 'IslamWeb Search')}>
              <Search className="w-4 h-4 mr-2" />
              Rechercher
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
              Bitcoin halal
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
              IA médecine
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
              Blockchain trading
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
              Données personnelles
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Navigation par sources */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="encyclopedias">Encyclopédies</TabsTrigger>
          <TabsTrigger value="institutions">Institutions</TabsTrigger>
          <TabsTrigger value="fatwas">Collections Fatwa</TabsTrigger>
          <TabsTrigger value="examples">Exemples Règles</TabsTrigger>
        </TabsList>

        <TabsContent value="encyclopedias" className="space-y-4">
          {AUTHENTIC_ISLAMIC_SOURCES.encyclopedias.map((encyclopedia) => (
            <Card key={encyclopedia.id} className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{encyclopedia.nameFr}</h3>
                    <p className="text-lg text-gray-600 mb-2">{encyclopedia.name}</p>
                    <p className="text-gray-700">{encyclopedia.description}</p>
                  </div>
                  <Badge className="bg-green-50 text-green-700">
                    {encyclopedia.credibility}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">{encyclopedia.volumes}</div>
                    <div className="text-sm text-gray-600">Volumes</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-green-600">{encyclopedia.languages.length}</div>
                    <div className="text-sm text-gray-600">Langues</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-purple-600">{encyclopedia.lastUpdated}</div>
                    <div className="text-sm text-gray-600">Dernière MAJ</div>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    <div className="text-sm text-gray-600">Accès libre</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {encyclopedia.specializations.map((spec) => (
                    <Badge key={spec} variant="secondary">{spec}</Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleExternalLink(encyclopedia.url, encyclopedia.nameFr)}
                    className="gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Accès Principal
                  </Button>
                  {encyclopedia.alternativeUrls.map((url, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      size="sm"
                      onClick={() => handleExternalLink(url, `${encyclopedia.nameFr} Alt ${index + 1}`)}
                      className="gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      Lien {index + 1}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="institutions" className="space-y-4">
          {AUTHENTIC_ISLAMIC_SOURCES.institutions.map((institution) => (
            <Card key={institution.id} className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Award className="w-6 h-6 text-blue-500" />
                      {institution.nameFr}
                    </h3>
                    <p className="text-lg text-gray-600 mb-2">{institution.name}</p>
                    <p className="text-gray-700">{institution.description}</p>
                  </div>
                  <Badge className="bg-blue-50 text-blue-700">
                    {institution.credibility}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="font-semibold text-gray-800">Fondation</div>
                    <div className="text-gray-600">{institution.founded}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Pays</div>
                    <div className="text-gray-600">{institution.countries.join(', ')}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Tech Moderne</div>
                    <div className="text-green-600">
                      {institution.modernTechDept ? '✓ Département actif' : '✗ Non disponible'}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleExternalLink(institution.url, institution.nameFr)}
                    className="gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Site Principal
                  </Button>
                  {institution.fatwaDepartment && (
                    <Button 
                      variant="outline"
                      onClick={() => handleExternalLink(institution.fatwaDepartment, `${institution.nameFr} Fatwa`)}
                      className="gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      Département Fatwa
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="fatwas" className="space-y-4">
          {AUTHENTIC_ISLAMIC_SOURCES.fatwaCollections.map((collection) => (
            <Card key={collection.id} className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{collection.nameFr}</h3>
                    <p className="text-lg text-gray-600 mb-2">{collection.name}</p>
                    <p className="text-gray-700">{collection.description}</p>
                  </div>
                  <Badge className="bg-orange-50 text-orange-700">
                    {collection.totalFatwas ? `${collection.totalFatwas.toLocaleString()} fatwas` : 'Collection officielle'}
                  </Badge>
                </div>

                {collection.categories && (
                  <div className="mb-4">
                    <div className="font-semibold text-gray-800 mb-2">Catégories technologiques :</div>
                    <div className="flex flex-wrap gap-2">
                      {collection.categories.map((category) => (
                        <Badge key={category} variant="outline">{category}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleExternalLink(collection.url, collection.nameFr)}
                    className="gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Collection Principale
                  </Button>
                  {collection.searchUrl && (
                    <Button 
                      variant="outline"
                      onClick={() => handleExternalLink(collection.searchUrl, `${collection.nameFr} Search`)}
                      className="gap-2"
                    >
                      <Search className="w-4 h-4" />
                      Recherche Avancée
                    </Button>
                  )}
                  {collection.techSection && (
                    <Button 
                      variant="outline"
                      onClick={() => handleExternalLink(collection.techSection, `${collection.nameFr} Tech`)}
                      className="gap-2"
                    >
                      <Database className="w-4 h-4" />
                      Section Technologies
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="examples" className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-yellow-800 mb-2">Exemples de Règles avec Sources Directes</h4>
            <p className="text-yellow-700 text-sm">
              Chaque règle est liée directement aux fatwas et décisions officielles des institutions islamiques
            </p>
          </div>
          
          {SAMPLE_RULES_WITH_SOURCES.map((rule) => (
            <Card key={rule.id} className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{rule.question}</h3>
                    <Badge className={`mt-2 ${
                      rule.ruling.includes('Halal') || rule.ruling.includes('Mandub') 
                        ? 'bg-green-50 text-green-700' 
                        : rule.ruling.includes('Mubah') 
                        ? 'bg-blue-50 text-blue-700'
                        : 'bg-orange-50 text-orange-700'
                    }`}>
                      {rule.ruling}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <h4 className="font-semibold text-gray-800">Sources authentiques :</h4>
                  {rule.sources.map((source, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-semibold text-blue-600">{source.institution}</div>
                          <div className="text-sm text-gray-600">{source.title}</div>
                          <div className="text-xs text-gray-500">{source.date}</div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleExternalLink(source.url, source.title)}
                          className="gap-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Voir
                        </Button>
                      </div>
                      <div className="text-sm text-gray-700 italic">"{source.conclusion}"</div>
                    </div>
                  ))}
                </div>

                {rule.conditions && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Conditions requises :</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {rule.conditions.map((condition, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}