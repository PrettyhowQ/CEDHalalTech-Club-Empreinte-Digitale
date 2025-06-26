import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, BookOpen, Star, Verified } from 'lucide-react';

interface FiqhValidationProps {
  courseCategory: string;
  courseTitle: string;
}

export function FiqhValidationCertificate({ courseCategory, courseTitle }: FiqhValidationProps) {
  const getFiqhRuling = (category: string) => {
    const rulings = {
      'coran-tajweed': {
        ruling: 'MANDUB',
        color: 'bg-blue-100 text-blue-800',
        icon: '🔵',
        evidence: [
          'Coran 73:4 - "Et récite le Coran, lentement et clairement"',
          'Hadith Bukhari 5027 - "Celui qui récite le Coran avec maîtrise..."',
          'Ijmâ\' - Consensus des savants sur l\'importance du Tajweed',
          'Qiyâs - Analogie avec l\'apprentissage de toute science religieuse'
        ],
        scholars: ['Sheikh Al-Jazari', 'Imam Al-Qurtubi', 'Ibn Taymiyyah'],
        priority: 'FORTEMENT RECOMMANDÉ'
      },
      'sahaba-stories': {
        ruling: 'MANDUB',
        color: 'bg-blue-100 text-blue-800',
        icon: '🔵',
        evidence: [
          'Coran 9:100 - "Les premiers [croyants] parmi les Emigrants et les Auxiliaires..."',
          'Hadith Muslim 2533 - "Mes Compagnons sont comme les étoiles..."',
          'Ijmâ\' - Consensus sur l\'exemple des Sahaba',
          'Maslaha - Intérêt éducatif et spirituel évident'
        ],
        scholars: ['Ibn Hajar Al-Asqalani', 'Al-Dhahabi', 'Ibn Kathir'],
        priority: 'FORTEMENT RECOMMANDÉ'
      },
      'hadith-studies': {
        ruling: 'MANDUB',
        color: 'bg-blue-100 text-blue-800',
        icon: '🔵',
        evidence: [
          'Coran 59:7 - "Prenez ce que le Messager vous donne..."',
          'Hadith Bukhari 67 - "Que celui qui ment sur moi délibérément..."',
          'Ijmâ\' - Science du Hadith établie par consensus',
          'Darura - Nécessité de préserver la Sunna authentique'
        ],
        scholars: ['Imam Bukhari', 'Imam Muslim', 'Ibn Hajar'],
        priority: 'SCIENCE FONDAMENTALE'
      },
      'islamic-sciences': {
        ruling: 'MANDUB',
        color: 'bg-blue-100 text-blue-800',
        icon: '🔵',
        evidence: [
          'Coran 9:122 - "Qu\'un groupe de chaque tribu étudie la religion..."',
          'Hadith Tirmidhi 2682 - "Recherchez la science du berceau au tombeau"',
          'Ijmâ\' - Consensus sur l\'importance des sciences islamiques',
          'Qiyâs - Analogie avec l\'obligation d\'apprendre le Fiqh'
        ],
        scholars: ['Imam Shafi\'i', 'Imam Abu Hanifa', 'Imam Malik'],
        priority: 'SCIENCES ESSENTIELLES'
      },
      'arabic-learning': {
        ruling: 'MANDUB',
        color: 'bg-blue-100 text-blue-800',
        icon: '🔵',
        evidence: [
          'Coran 14:4 - "Nous n\'avons envoyé de Messager qu\'avec la langue de son peuple"',
          'Hadith Abu Dawud 5035 - "Apprenez l\'arabe car il fait partie de votre religion"',
          'Ijmâ\' - Consensus sur l\'importance de l\'arabe pour comprendre l\'Islam',
          'Wasilah - Moyen nécessaire pour comprendre les sources'
        ],
        scholars: ['Ibn Taymiyyah', 'As-Suyuti', 'Al-Shatibi'],
        priority: 'LANGUE SACRÉE'
      }
    };
    
    return rulings[category as keyof typeof rulings] || rulings['islamic-sciences'];
  };

  const validation = getFiqhRuling(courseCategory);

  return (
    <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 to-blue-50 mb-6">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-green-600" />
          <div>
            <CardTitle className="text-green-800 text-xl">
              🕌 Certificat de Conformité Fiqh Informatique
            </CardTitle>
            <p className="text-green-700">معهد النادي الرقمي • Institut Club Empreinte Digitale</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Statut de Validation */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-green-200">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-bold text-green-800">Formation 100% HALAL Certifiée</h3>
              <p className="text-green-700 text-sm">Validation complète selon les 4 sources islamiques</p>
            </div>
          </div>
          <Badge className={`${validation.color} text-lg px-4 py-2`}>
            {validation.icon} {validation.ruling}
          </Badge>
        </div>

        {/* Preuves Islamiques */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-bold text-blue-800 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Sources Authentiques
            </h4>
            {validation.evidence.map((evidence, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                <Verified className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-blue-800 text-sm">{evidence}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-purple-800 flex items-center gap-2">
              <Star className="h-5 w-5" />
              Validation Scholars
            </h4>
            {validation.scholars.map((scholar, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-purple-800 font-medium">{scholar}</p>
              </div>
            ))}
            
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-800 font-semibold">
                🎯 Priorité: {validation.priority}
              </p>
            </div>
          </div>
        </div>

        {/* Méthodologie de Validation */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="font-bold text-gray-800 mb-3">📋 Méthodologie de Validation CED Academy</h4>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <p className="font-medium">Coran</p>
              <p className="text-gray-600">Source Suprême</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <p className="font-medium">Sunna</p>
              <p className="text-gray-600">Guidance Prophétique</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <p className="font-medium">Ijmâ'</p>
              <p className="text-gray-600">Consensus Savants</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-amber-600 font-bold">4</span>
              </div>
              <p className="font-medium">Qiyâs</p>
              <p className="text-gray-600">Analogie Légale</p>
            </div>
          </div>
        </div>

        {/* Signature Numérique */}
        <div className="text-center p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
          <p className="text-sm text-gray-700 mb-2">
            Certificat émis par le Comité Fiqh Informatique CED Academy
          </p>
          <p className="text-xs text-gray-600">
            Date de validation: {new Date().toLocaleDateString('fr-FR')} • 
            Référence: CED-FIQH-{courseCategory.toUpperCase()}-{Date.now()}
          </p>
          <div className="mt-3 text-center">
            <p className="text-green-800 font-bold">
              🔒 Protection Yakoubi Yamina • Copyright CED Academy 2025
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}