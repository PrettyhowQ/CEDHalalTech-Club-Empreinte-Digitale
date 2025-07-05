import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CertificateData {
  studentName: string;
  courseName: string;
  completionDate: string;
  instructorName: string;
  grade: string;
  courseCategory: string;
  duration: string;
  skills: string[];
}

const COURSE_CATEGORIES = [
  { value: 'python-halal', label: 'Python Halal', skills: ['Programmation éthique', 'Algorithmes conformes', 'Clean Code islamique'] },
  { value: 'ia-ethique', label: 'IA Éthique', skills: ['Machine Learning responsable', 'Fiqh informatique IA', 'Éthique algorithmique'] },
  { value: 'cybersecurite-islamique', label: 'Cybersécurité Islamique', skills: ['Sécurité réseau halal', 'Cryptographie éthique', 'Audit conformité'] },
  { value: 'blockchain-halal', label: 'Blockchain Halal', skills: ['Smart contracts conformes', 'DeFi islamique', 'Crypto-monnaies licites'] },
  { value: 'web-halal', label: 'Développement Web Halal', skills: ['Frontend éthique', 'Backend conforme', 'UX/UI respectueuse'] },
  { value: 'fiqh-informatique', label: 'Fiqh Informatique', skills: ['Sources islamiques', 'Jurisprudence numérique', 'Éthique technologique'] },
  { value: 'arabe-coranique', label: 'Arabe Coranique Tech', skills: ['Programmation arabe', 'Interfaces RTL', 'Localisation islamique'] }
];

const CertificateTemplate: React.FC<{ data: CertificateData }> = ({ data }) => {
  const currentDate = new Date().toLocaleDateString('fr-FR');
  const selectedCategory = COURSE_CATEGORIES.find(cat => cat.value === data.courseCategory);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border-8 border-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg shadow-2xl overflow-hidden">
      {/* Header avec gradient animé */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white p-8 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse"></div>
        
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">🎓</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                CED HalalTech™ Academy
              </h1>
              <p className="text-sm text-cyan-300">Technologie 100% Halal • Certifiée mondialement</p>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-white">CERTIFICAT DE RÉUSSITE</h2>
          <p className="text-xl text-cyan-200">Certificate of Achievement</p>
        </div>
      </div>

      {/* Corps du certificat */}
      <div className="p-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center space-y-8">
          {/* Message principal */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700">Il est certifié par les présentes que</p>
            <p className="text-xl text-gray-600 italic">This is to certify that</p>
          </div>

          {/* Nom de l'étudiant */}
          <div className="border-b-2 border-cyan-400 pb-2 mx-auto max-w-md">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {data.studentName}
            </h3>
          </div>

          {/* Texte de certification */}
          <div className="space-y-3">
            <p className="text-lg text-gray-700">
              a réussi avec excellence la formation
            </p>
            <p className="text-base text-gray-600 italic">
              has successfully completed with excellence the training program
            </p>
          </div>

          {/* Nom du cours */}
          <div className="bg-gradient-to-r from-cyan-900/10 to-blue-900/10 rounded-lg p-6 border border-cyan-200">
            <h4 className="text-3xl font-bold text-blue-800 mb-2">
              {data.courseName}
            </h4>
            <p className="text-lg text-cyan-600 font-medium">
              {selectedCategory?.label}
            </p>
          </div>

          {/* Compétences acquises */}
          <div className="bg-white rounded-lg p-6 border-l-4 border-cyan-400 shadow-lg">
            <h5 className="text-lg font-bold text-gray-800 mb-3">Compétences certifiées • Certified Skills</h5>
            <div className="flex flex-wrap gap-2 justify-center">
              {selectedCategory?.skills.map((skill, index) => (
                <span key={index} className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium border border-cyan-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Détails du cours */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
              <p className="text-sm text-gray-600">Date d'achèvement</p>
              <p className="text-lg font-bold text-blue-600">{data.completionDate}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
              <p className="text-sm text-gray-600">Durée de formation</p>
              <p className="text-lg font-bold text-blue-600">{data.duration}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
              <p className="text-sm text-gray-600">Note finale</p>
              <p className="text-lg font-bold text-green-600">{data.grade}</p>
            </div>
          </div>

          {/* Signatures */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="text-center">
              <div className="border-b border-gray-400 pb-2 mb-2 mx-auto max-w-48">
                <p className="text-lg font-bold text-gray-800">{data.instructorName}</p>
              </div>
              <p className="text-sm text-gray-600">Instructeur Certifié • Certified Instructor</p>
              <p className="text-xs text-gray-500">CED HalalTech™ Academy</p>
            </div>
            <div className="text-center">
              <div className="border-b border-gray-400 pb-2 mb-2 mx-auto max-w-48">
                <p className="text-lg font-bold text-gray-800">Yakoubi Yamina</p>
              </div>
              <p className="text-sm text-gray-600">Directrice Académique • Academic Director</p>
              <p className="text-xs text-gray-500">CED HalalTech™ Founder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer de protection obligatoire */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white p-6 border-t-4 border-cyan-400">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-lg">🛡️</span>
            <strong className="text-lg font-bold text-cyan-300">Licence HalalTech™</strong>
          </div>
          
          <p className="text-sm text-gray-300 max-w-3xl mx-auto">
            Usage exclusivement halal – Toute reproduction ou diffusion commerciale est strictement interdite sans autorisation écrite.
          </p>
          
          <div className="space-y-2 text-xs">
            <div className="flex flex-wrap justify-center items-center gap-2">
              <span className="text-gray-300">© Yakoubi Yamina – Tous droits réservés</span>
              <span className="text-gray-400">|</span>
              <strong className="text-cyan-300">CED HalalTech™ – Technologie 100% Halal • Certifiée mondialement</strong>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-2 text-gray-400">
              <span className="inline-flex items-center gap-1">
                🇨🇭 <span>Données hébergées en Suisse</span>
              </span>
              <span>|</span>
              <span>Conforme RGPD & LPD</span>
            </div>
            
            <div className="flex justify-center gap-3">
              <span className="text-cyan-300">جميع الحقوق محفوظة</span>
              <span className="text-gray-400">|</span>
              <span className="text-blue-300">All rights reserved</span>
              <span className="text-gray-400">|</span>
              <span className="text-purple-300">版权所有</span>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-600">
            <p className="text-xs text-gray-500">
              Certificat généré le {currentDate} • Certificate issued on {currentDate}
            </p>
            <p className="text-xs text-gray-500">
              ID Certificat: CED-{data.courseCategory.toUpperCase()}-{Date.now().toString().slice(-6)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CertificateGenerator: React.FC = () => {
  const [certificateData, setCertificateData] = useState<CertificateData>({
    studentName: '',
    courseName: '',
    completionDate: new Date().toISOString().split('T')[0],
    instructorName: '',
    grade: '',
    courseCategory: '',
    duration: '',
    skills: []
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleCategoryChange = (value: string) => {
    const category = COURSE_CATEGORIES.find(cat => cat.value === value);
    setCertificateData(prev => ({
      ...prev,
      courseCategory: value,
      courseName: category?.label || '',
      skills: category?.skills || []
    }));
  };

  const handleGenerate = () => {
    setShowPreview(true);
  };

  const handlePrint = () => {
    window.print();
  };

  if (showPreview) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Button 
              onClick={() => setShowPreview(false)}
              variant="outline"
              className="bg-white"
            >
              ← Retour à l'édition
            </Button>
            <div className="flex gap-3">
              <Button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700">
                🖨️ Imprimer le certificat
              </Button>
              <Button 
                onClick={() => {/* TODO: Implement download */}}
                className="bg-green-600 hover:bg-green-700"
              >
                💾 Télécharger PDF
              </Button>
            </div>
          </div>
          
          <CertificateTemplate data={certificateData} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-2xl border-t-4 border-cyan-400">
          <CardHeader className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
            <CardTitle className="text-center text-3xl font-bold">
              🎓 Générateur de Certificats CED HalalTech™
            </CardTitle>
            <p className="text-center text-cyan-300">
              Créez des diplômes et certificats personnalisés 100% conformes
            </p>
          </CardHeader>
          
          <CardContent className="p-8 space-y-6">
            {/* Informations étudiant */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 border-b-2 border-cyan-400 pb-2">
                👤 Informations Étudiant
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet de l'étudiant *
                  </label>
                  <Input
                    type="text"
                    placeholder="Ex: Ahmed Ben Mohamed"
                    value={certificateData.studentName}
                    onChange={(e) => setCertificateData(prev => ({ ...prev, studentName: e.target.value }))}
                    className="border-cyan-200 focus:border-cyan-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Note finale *
                  </label>
                  <Select onValueChange={(value) => setCertificateData(prev => ({ ...prev, grade: value }))}>
                    <SelectTrigger className="border-cyan-200 focus:border-cyan-400">
                      <SelectValue placeholder="Choisir la note" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Excellent (18-20/20)">Excellent (18-20/20)</SelectItem>
                      <SelectItem value="Très Bien (16-17/20)">Très Bien (16-17/20)</SelectItem>
                      <SelectItem value="Bien (14-15/20)">Bien (14-15/20)</SelectItem>
                      <SelectItem value="Assez Bien (12-13/20)">Assez Bien (12-13/20)</SelectItem>
                      <SelectItem value="Satisfaisant (10-11/20)">Satisfaisant (10-11/20)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Informations cours */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 border-b-2 border-cyan-400 pb-2">
                📚 Informations Formation
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Catégorie de formation *
                  </label>
                  <Select onValueChange={handleCategoryChange}>
                    <SelectTrigger className="border-cyan-200 focus:border-cyan-400">
                      <SelectValue placeholder="Choisir une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      {COURSE_CATEGORIES.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durée de formation *
                  </label>
                  <Select onValueChange={(value) => setCertificateData(prev => ({ ...prev, duration: value }))}>
                    <SelectTrigger className="border-cyan-200 focus:border-cyan-400">
                      <SelectValue placeholder="Durée" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30 heures">30 heures (1 semaine)</SelectItem>
                      <SelectItem value="60 heures">60 heures (2 semaines)</SelectItem>
                      <SelectItem value="120 heures">120 heures (1 mois)</SelectItem>
                      <SelectItem value="240 heures">240 heures (2 mois)</SelectItem>
                      <SelectItem value="480 heures">480 heures (3 mois)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date d'achèvement *
                  </label>
                  <Input
                    type="date"
                    value={certificateData.completionDate}
                    onChange={(e) => setCertificateData(prev => ({ ...prev, completionDate: e.target.value }))}
                    className="border-cyan-200 focus:border-cyan-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instructeur responsable *
                  </label>
                  <Input
                    type="text"
                    placeholder="Ex: Dr. Omar Al-Mahmoud"
                    value={certificateData.instructorName}
                    onChange={(e) => setCertificateData(prev => ({ ...prev, instructorName: e.target.value }))}
                    className="border-cyan-200 focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>

            {/* Compétences prévisualisées */}
            {certificateData.courseCategory && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 border-b-2 border-cyan-400 pb-2">
                  ⭐ Compétences Certifiées
                </h3>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                  <div className="flex flex-wrap gap-2">
                    {COURSE_CATEGORIES.find(cat => cat.value === certificateData.courseCategory)?.skills.map((skill, index) => (
                      <span key={index} className="bg-white text-cyan-800 px-3 py-1 rounded-full text-sm font-medium border border-cyan-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Bouton de génération */}
            <div className="pt-6 border-t border-gray-200">
              <Button 
                onClick={handleGenerate}
                disabled={!certificateData.studentName || !certificateData.courseCategory || !certificateData.instructorName || !certificateData.grade}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 text-lg"
              >
                🎓 Générer le Certificat
              </Button>
              
              {(!certificateData.studentName || !certificateData.courseCategory || !certificateData.instructorName || !certificateData.grade) && (
                <p className="text-center text-sm text-red-600 mt-2">
                  * Veuillez remplir tous les champs obligatoires
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CertificateGenerator;