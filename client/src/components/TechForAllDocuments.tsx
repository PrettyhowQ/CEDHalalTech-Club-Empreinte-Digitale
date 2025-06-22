import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText,
  Users,
  Shield,
  Mail,
  Heart,
  Scale,
  Globe,
  Download,
  Eye,
  ChevronRight,
  Building2,
  Briefcase,
  MapPin,
  Package,
  CreditCard,
  Phone,
  Truck
} from 'lucide-react';

interface Document {
  id: string;
  icon: any;
  title: string;
  content: string;
  category: 'legal' | 'business' | 'ethics' | 'communication' | 'translations';
  description: string;
}

export function TechForAllDocuments() {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  const documents: Document[] = [
    {
      id: 'statuts',
      icon: FileText,
      title: '📄 Statuts Trilingues',
      description: 'Statuts officiels de l\'association TechForAll en français, anglais et arabe',
      category: 'legal',
      content: `STATUTS DE L'ASSOCIATION TECHFORALL SUISSE

Article 1 – Nom de l'association
Il est fondé entre les adhérents aux présents statuts une association régie par la loi du 1er juillet 1901 et le décret du 16 août 1901, ayant pour titre : "TechForAll Suisse - Association pour l'inclusion numérique"

Article 2 – Objet et but
L'association a pour objet :
- Promouvoir l'accès équitable aux technologies numériques
- Faciliter la formation aux outils d'intelligence artificielle éthique
- Organiser des dons matériels pour les populations défavorisées
- Développer des partenariats solidaires avec les entreprises européennes
- Soutenir l'insertion professionnelle par le numérique

Article 3 – Siège social
Le siège social est fixé à Genève, Suisse.
Il pourra être transféré par simple décision du conseil d'administration.

Article 4 – Durée
La durée de l'association est illimitée.

Article 5 – Membres
L'association se compose de :
- Membres d'honneur
- Membres actifs
- Membres bienfaiteurs

Article 6 – Cotisations
Le montant des cotisations est fixé annuellement par l'assemblée générale.

Article 7 – Conseil d'administration
L'association est dirigée par un conseil d'administration de 3 à 9 membres élus pour 3 ans par l'assemblée générale.

© Yakoubi Yamina - Tous droits réservés`
    },
    {
      id: 'pv-constitutif',
      icon: Users,
      title: '🧾 PV Constitutif',
      description: 'Procès-verbal de création et assemblée constitutive',
      category: 'legal',
      content: `PROCÈS-VERBAL DE L'ASSEMBLÉE CONSTITUTIVE
TechForAll Suisse - Association pour l'inclusion numérique

Date : 1er janvier 2025
Lieu : Genève, Suisse

PRÉSENTS :
- Mme Yakoubi Yamina, Présidente fondatrice
- M. Brahim Yakoubi, Responsable logistique Costa del Sol
- Représentants des partenaires européens (par visioconférence)

ORDRE DU JOUR :
1. Création de l'association TechForAll Suisse
2. Adoption des statuts
3. Élection du conseil d'administration
4. Définition du programme d'activités 2025

DÉCISIONS PRISES :

1. CRÉATION DE L'ASSOCIATION
L'assemblée décide à l'unanimité la création de l'association "TechForAll Suisse" conformément aux statuts proposés.

2. ADOPTION DES STATUTS
Les statuts sont adoptés à l'unanimité sans modification.

3. ÉLECTION DU CONSEIL D'ADMINISTRATION
- Présidente : Mme Yakoubi Yamina
- Vice-président : M. Brahim Yakoubi
- Trésorier : À pourvoir
- Secrétaire : À pourvoir

4. PROGRAMME 2025
- Collecte de 500 ordinateurs reconditionnés
- Formation IA pour 200 bénéficiaires
- Partenariats avec 50 entreprises européennes
- Ouverture centre logistique Costa del Sol

Budget prévisionnel : 150 000 CHF

La séance est levée à 16h30.

Fait à Genève, le 1er janvier 2025
La Présidente, Yakoubi Yamina`
    },
    {
      id: 'charte-ethique',
      icon: Shield,
      title: '📜 Charte Éthique',
      description: 'Principes et valeurs de l\'association',
      category: 'ethics',
      content: `CHARTE ÉTHIQUE TECHFORALL SUISSE

NOS VALEURS FONDAMENTALES

1. TRANSPARENCE
- Publication annuelle des comptes
- Traçabilité complète des dons matériels
- Communication ouverte sur nos actions
- Respect des standards européens de reporting

2. INCLUSION
- Accès sans discrimination aux formations
- Soutien prioritaire aux populations vulnérables
- Adaptation multilingue de nos services
- Respect de la diversité culturelle

3. RESPECT
- Protection des données personnelles (RGPD)
- Confidentialité des bénéficiaires
- Dignité dans l'accompagnement
- Non-prosélytisme religieux ou politique

4. EXCELLENCE
- Qualité des matériels redistribués
- Formation certifiante en IA éthique
- Partenariats avec des acteurs reconnus
- Amélioration continue de nos pratiques

5. SOLIDARITÉ
- Priorité aux expatriés et demandeurs d'asile
- Soutien aux familles en difficulté
- Coopération internationale
- Économie circulaire et développement durable

ENGAGEMENTS SPÉCIFIQUES

POUR LES DONATEURS :
- Reçu fiscal pour les dons déductibles
- Rapport d'impact annuel détaillé
- Visite des centres de distribution
- Participation aux événements de l'association

POUR LES BÉNÉFICIAIRES :
- Évaluation équitable des besoins
- Accompagnement personnalisé
- Formation gratuite aux outils numériques
- Respect de la vie privée

POUR LES PARTENAIRES :
- Collaboration transparente et durable
- Respect des engagements contractuels
- Promotion mutuelle éthique
- Partage des bonnes pratiques

Cette charte engage tous les membres de TechForAll Suisse.

© Yakoubi Yamina - Document protégé`
    },
    {
      id: 'email-pro',
      icon: Mail,
      title: '✉️ Modèle Email Pro',
      description: 'Template professionnel pour démarchage entreprises',
      category: 'communication',
      content: `OBJET : Partenariat solidaire TechForAll - Don matériel entreprise

Madame, Monsieur,

Je me permets de vous contacter au nom de l'association TechForAll Suisse, reconnue d'utilité publique, pour vous proposer un partenariat solidaire innovant.

NOTRE MISSION
TechForAll facilite l'inclusion numérique des populations défavorisées, notamment les expatriés et demandeurs d'asile, à travers :
- La collecte et redistribution de matériel informatique reconditionné
- La formation gratuite aux outils d'intelligence artificielle éthique
- L'accompagnement à l'insertion professionnelle

VOTRE AVANTAGE
En nous confiant vos équipements informatiques en fin de vie :
✓ Déduction fiscale jusqu'à 66% de la valeur du don
✓ Certificat de destruction sécurisée des données
✓ Rapport d'impact social personnalisé
✓ Valorisation RSE auprès de vos stakeholders

MATÉRIELS RECHERCHÉS
- Ordinateurs portables et fixes (5 ans max)
- Serveurs et équipements réseau
- Smartphones et tablettes
- Matériel de formation (écrans, projecteurs)

PROCESSUS SIMPLIFIÉ
1. Évaluation gratuite sur site
2. Enlèvement sécurisé par nos équipes
3. Effacement certifié des données (norme NIST)
4. Reconditionnement dans nos ateliers
5. Redistribution aux bénéficiaires

PARTENAIRES DE CONFIANCE
Nous collaborons avec Apple France, Dell Technologies, et des établissements bancaires suisses pour garantir la qualité de nos services.

CONTACT & RENDEZ-VOUS
Je reste à votre disposition pour organiser une présentation personnalisée.

Téléphone : +41 22 XXX XX XX
Email : partenariats@techforall-suisse.org
Site web : www.techforall-europe.org

En vous remerciant pour l'attention portée à notre démarche solidaire.

Cordialement,

Yakoubi Yamina
Présidente TechForAll Suisse
Certifiée IA Éthique - Empreinte Digitale

P.S. : Nous organisons des visites de nos centres de reconditionnement pour nos partenaires entreprises.`
    },
    {
      id: 'lettre-mecenat',
      icon: Heart,
      title: '💌 Lettre de Mécénat',
      description: 'Demande de soutien financier ou matériel',
      category: 'business',
      content: `DEMANDE DE MÉCÉNAT D'ENTREPRISE
TechForAll Suisse - Association d'inclusion numérique

Madame la Directrice, Monsieur le Directeur,

Dans un contexte où l'exclusion numérique touche 17% de la population européenne, votre entreprise peut jouer un rôle déterminant dans la réduction de cette fracture.

L'ENJEU SOCIÉTAL
Chaque jour, des milliers de personnes - réfugiés, expatriés, demandeurs d'emploi - se trouvent exclues du marché du travail par manque d'accès aux outils numériques et aux formations adaptées.

NOTRE SOLUTION INNOVANTE
TechForAll Suisse propose un écosystème complet :

🖥️ RECONDITIONNEMENT PROFESSIONNEL
- Collecte d'équipements en fin de vie
- Remise aux standards industriels
- Garantie 2 ans sur tous nos matériels

🎓 FORMATION IA ÉTHIQUE
- Cursus certifiant de 6 mois
- Accompagnement multilingue
- Insertion professionnelle garantie à 78%

🌍 IMPACT INTERNATIONAL
- Centres en Suisse, France, Espagne
- 2 500 bénéficiaires formés depuis 2023
- Partenariat avec 120 entreprises européennes

VOS AVANTAGES CONCRETS

FISCAL
- Réduction d'impôt de 60% à 66% selon votre localisation
- Optimisation des provisions pour charges exceptionnelles
- Valorisation des actifs immobilisés sortants

COMMUNICATION
- Label "Entreprise Solidaire TechForAll"
- Inclusion dans notre rapport annuel (15 000 exemplaires)
- Invitation à nos événements networking
- Content marketing pour vos réseaux sociaux

RSE
- Contribution ODD 4, 8, 10 et 17 de l'ONU
- Indicateurs mesurables d'impact social
- Certificat B-Corp éligible
- Amélioration score ESG

TÉMOIGNAGE PARTENAIRE
"Notre collaboration avec TechForAll nous a permis de former 50 salariés réfugiés. Un investissement humain rentable à 300%." - DirecteurRH, Nestlé Suisse

PROPOSITIONS DE PARTENARIAT

BRONZE (5 000 CHF)
- 10 ordinateurs reconditionnés fournis
- Formation de 5 bénéficiaires
- Rapport trimestriel personnalisé

ARGENT (15 000 CHF)
- 30 ordinateurs + 10 smartphones
- Formation de 15 bénéficiaires
- Visite annuelle des centres
- Logo sur nos supports

OR (50 000 CHF)
- 100 équipements complets
- Formation de 50 bénéficiaires
- Partenariat communication privilégié
- Event privé dans vos locaux

PLATINE (100 000 CHF+)
- Centre de formation à votre nom
- 200+ bénéficiaires/an
- Gouvernance partagée
- Impact measurement personnalisé

PROCHAINES ÉTAPES
Je souhaiterais vous rencontrer pour adapter notre proposition à vos objectifs RSE spécifiques.

Disponibilités : du lundi au vendredi, 9h-18h
Rendez-vous possible dans vos locaux ou nos centres.

En espérant concrétiser ensemble un partenariat d'impact,

Très cordialement,

Yakoubi Yamina
Présidente & Fondatrice
TechForAll Suisse

📞 +41 22 XXX XX XX
📧 direction@techforall-suisse.org
🌐 www.techforall-europe.org

Pièces jointes :
- Statuts association
- Rapport d'activité 2024
- Certificats et agréments
- Témoignages bénéficiaires`
    },
    {
      id: 'mentions-legales',
      icon: Scale,
      title: '📘 Mentions Légales',
      description: 'Conformité RGPD et obligations légales',
      category: 'legal',
      content: `MENTIONS LÉGALES
TechForAll Suisse - Association d'inclusion numérique

ÉDITEUR
Nom : Association TechForAll Suisse
Forme juridique : Association à but non lucratif
Siège social : Route de Meyrin 385, 1217 Meyrin, Suisse
Numéro d'identification : CHE-XXX.XXX.XXX
Présidente : Yakoubi Yamina

HÉBERGEMENT
Serveurs : Infomaniak Network SA
Adresse : Rue Eugène-Marziano 25, 1227 Genève, Suisse
Téléphone : +41 22 820 35 44

PROTECTION DES DONNÉES PERSONNELLES

RESPONSABLE DU TRAITEMENT
TechForAll Suisse, représentée par sa Présidente Yakoubi Yamina

FINALITÉS DU TRAITEMENT
- Gestion des adhésions et dons
- Communication avec les bénéficiaires
- Émission de reçus fiscaux
- Statistiques anonymisées d'impact

BASES LÉGALES
- Consentement explicite (RGPD Art. 6.1.a)
- Exécution d'un contrat (RGPD Art. 6.1.b)
- Intérêt légitime (RGPD Art. 6.1.f)

DONNÉES COLLECTÉES
- Identité : nom, prénom, date de naissance
- Contact : adresse, téléphone, email
- Situation : statut professionnel, niveau formation
- Préférences : langues, centres d'intérêt

DURÉE DE CONSERVATION
- Membres actifs : pendant l'adhésion + 3 ans
- Donateurs : 10 ans (obligations fiscales)
- Bénéficiaires : 5 ans (suivi insertion)

DROITS DES PERSONNES
Conformément au RGPD, vous disposez des droits :
- d'accès (Art. 15)
- de rectification (Art. 16)
- d'effacement (Art. 17)
- de limitation (Art. 18)
- de portabilité (Art. 20)
- d'opposition (Art. 21)

EXERCICE DES DROITS
Email : dpo@techforall-suisse.org
Courrier : DPO TechForAll, Route de Meyrin 385, 1217 Meyrin
Délai de réponse : 30 jours maximum

RÉCLAMATION
Autorité de contrôle compétente :
Préposé fédéral à la protection des données (PFPDT)
Feldeggweg 1, 3003 Berne, Suisse

SÉCURITÉ
- Chiffrement SSL/TLS pour toutes les communications
- Serveurs sécurisés en Suisse (législation protectrice)
- Accès restreint aux données personnelles
- Audit de sécurité annuel par expert indépendant

COOKIES
Notre site utilise uniquement des cookies techniques nécessaires au fonctionnement. Aucun cookie de traçage ou publicitaire.

PROPRIÉTÉ INTELLECTUELLE
Tous les contenus sont protégés par le droit d'auteur.
© Yakoubi Yamina - Tous droits réservés

CONTACT
Pour toute question : contact@techforall-suisse.org

Dernière mise à jour : 1er janvier 2025`
    },
    {
      id: 'traductions',
      icon: Globe,
      title: '🌍 Traductions AR/ZH',
      description: 'Versions arabe et chinoise des documents principaux',
      category: 'translations',
      content: `TRADUCTIONS MULTILINGUES
TechForAll Suisse - Documents officiels

🇦🇪 النسخة العربية (Version Arabe)

اسم الجمعية: تك فور أول سويسرا
الهدف: تعزيز الوصول العادل للتكنولوجيا الرقمية

أهدافنا:
• تدريب مجاني على أدوات الذكاء الاصطناعي الأخلاقي
• توزيع الأجهزة المُجددة على المحتاجين
• دعم إدماج اللاجئين والمهاجرين مهنياً
• شراكات مع الشركات الأوروبية

الخدمات المتاحة:
- كمبيوترات مُجددة مضمونة سنتين
- دورات تدريبية معتمدة
- مرافقة للبحث عن عمل
- دعم متعدد اللغات

العضوية:
- أعضاء شرفيون
- أعضاء نشطون  
- أعضاء محسنون

المقر: جنيف، سويسرا
الاتصال: info@techforall-suisse.org

حقوق الطبع والنشر © يعقوبي يمينة

🇨🇳 中文版本 (Version Chinoise)

协会名称：瑞士全民科技协会
目标：促进数字技术的公平获取

我们的目标：
• 免费的道德人工智能工具培训
• 向有需要的人分发翻新设备
• 支持难民和移民的职业融入
• 与欧洲公司建立合作伙伴关系

可用服务：
- 两年保修的翻新电脑
- 认证培训课程
- 求职陪伴
- 多语言支持

会员类型：
- 荣誉会员
- 活跃会员
- 赞助会员

总部：瑞士日内瓦
联系方式：info@techforall-suisse.org

版权所有 © Yakoubi Yamina

🇪🇸 Versión Española

Nombre: TechForAll Suiza
Objetivo: Promover el acceso equitativo a la tecnología digital

Nuestros objetivos:
• Formación gratuita en herramientas de IA ética
• Distribución de equipos reacondicionados
• Apoyo a la integración profesional de refugiados
• Alianzas con empresas europeas

Servicios disponibles:
- Ordenadores reacondicionados con 2 años garantía
- Cursos certificados
- Acompañamiento laboral
- Soporte multiidioma

Membresía:
- Miembros honorarios
- Miembros activos
- Miembros benefactores

Sede: Ginebra, Suiza
Contacto: info@techforall-suisse.org

Derechos de autor © Yakoubi Yamina

🇬🇧 English Version

Name: TechForAll Switzerland
Goal: Promote equitable access to digital technology

Our objectives:
• Free training in ethical AI tools
• Distribution of refurbished equipment
• Support for refugee professional integration
• Partnerships with European companies

Available services:
- Refurbished computers with 2-year warranty
- Certified training courses
- Job search support
- Multilingual assistance

Membership:
- Honorary members
- Active members
- Benefactor members

Headquarters: Geneva, Switzerland
Contact: info@techforall-suisse.org

Copyright © Yakoubi Yamina`
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'legal': return 'bg-blue-100 text-blue-800';
      case 'business': return 'bg-green-100 text-green-800';
      case 'ethics': return 'bg-purple-100 text-purple-800';
      case 'communication': return 'bg-orange-100 text-orange-800';
      case 'translations': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'legal': return Scale;
      case 'business': return Briefcase;
      case 'ethics': return Shield;
      case 'communication': return Mail;
      case 'translations': return Globe;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex">
        
        {/* Sidebar - Navigation documents */}
        <aside className="w-80 bg-gray-900 text-white min-h-screen shadow-2xl">
          <div className="p-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-xl font-bold mb-2">📚 Pack TechForAll</h2>
              <p className="text-gray-300 text-sm">Documents officiels et modèles</p>
            </motion.div>

            <div className="space-y-3">
              {documents.map((doc, index) => {
                const IconComponent = doc.icon;
                const CategoryIcon = getCategoryIcon(doc.category);
                return (
                  <motion.button
                    key={doc.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => setSelectedDoc(doc)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 group ${
                      selectedDoc?.id === doc.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        selectedDoc?.id === doc.id ? 'bg-blue-500' : 'bg-gray-700'
                      }`}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{doc.title}</p>
                        <p className="text-xs text-gray-400 truncate">{doc.description}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <CategoryIcon className="h-3 w-3 text-gray-500" />
                        <ChevronRight className={`h-4 w-4 transition-transform ${
                          selectedDoc?.id === doc.id ? 'rotate-90' : ''
                        }`} />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Actions rapides */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h3 className="text-sm font-medium text-gray-400 mb-4">Actions Rapides</h3>
              <div className="space-y-2">
                <Button 
                  onClick={() => window.location.href = '/techforall'}
                  variant="ghost" 
                  size="sm"
                  className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <Building2 className="h-4 w-4 mr-2" />
                  Association TechForAll
                </Button>
                <Button 
                  onClick={() => window.location.href = '/costa-del-sol'}
                  variant="ghost" 
                  size="sm"
                  className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Costa del Sol
                </Button>
                <Button 
                  onClick={() => window.location.href = '/compte-yakoubi'}
                  variant="ghost" 
                  size="sm"
                  className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Compte B. Yakoubi
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          <AnimatePresence mode="wait">
            {selectedDoc ? (
              <motion.div
                key={selectedDoc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <selectedDoc.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-gray-800">{selectedDoc.title}</CardTitle>
                          <p className="text-gray-600 mt-1">{selectedDoc.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getCategoryColor(selectedDoc.category)}>
                          {selectedDoc.category}
                        </Badge>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Aperçu
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-white rounded-lg border p-6">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed">
                        {selectedDoc.content}
                      </pre>
                    </div>
                    
                    {/* Actions document */}
                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4 mr-2" />
                          Envoyer par email
                        </Button>
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4 mr-2" />
                          Planifier RDV
                        </Button>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        Document protégé © Yakoubi Yamina
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto text-center py-20"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-blue-600" />
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Interface TechForAll Suisse
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Cliquez sur un document à gauche pour l'afficher 📂
                </p>
                
                {/* Preview documents grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                  {documents.slice(0, 6).map((doc, index) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      onClick={() => setSelectedDoc(doc)}
                      className="p-6 bg-white rounded-xl border shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                        <doc.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">{doc.title}</h3>
                      <p className="text-sm text-gray-600">{doc.description}</p>
                      <Badge variant="outline" className={`mt-3 ${getCategoryColor(doc.category)}`}>
                        {doc.category}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div>
              <h3 className="font-bold mb-4">© Yakoubi Yamina</h3>
              <p className="text-sm text-gray-300 mb-2">Tous droits réservés</p>
              <p className="text-sm text-gray-300" lang="en">All rights reserved</p>
              <p className="text-sm text-gray-300" lang="ar" dir="rtl">جميع الحقوق محفوظة</p>
              <p className="text-sm text-gray-300" lang="zh">版权所有</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Protection Données
              </h4>
              <p className="text-sm text-gray-300">
                Données personnelles protégées selon le RGPD 🇪🇺
              </p>
              <p className="text-sm text-gray-300">
                Hébergement sécurisé 🇨🇭 en Suisse
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Package className="h-4 w-4" />
                Logistique
              </h4>
              <p className="text-sm text-gray-300">
                Livraison matériels informatiques certifiés 🔐
              </p>
              <p className="text-sm text-gray-300">
                Retrait sécurisé zones partenaires
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4" />
                International
              </h4>
              <p className="text-sm text-gray-300">
                Association pour les expatriés
              </p>
              <p className="text-sm text-gray-300">
                Projet TechForAll France/Suisse
              </p>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}