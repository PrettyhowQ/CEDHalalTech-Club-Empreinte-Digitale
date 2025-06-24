import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  User, 
  MapPin, 
  Globe, 
  Shield, 
  Heart, 
  Users, 
  Building2,
  Phone,
  Send,
  CheckCircle,
  Star,
  Award,
  Handshake,
  Target,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Contact {
  nom: string;
  prenom: string;
  fonction: string;
  service: string;
  email: string;
  region: string;
  specialite: string[];
  status: 'actif' | 'formation' | 'nouveau';
}

const contacts: Contact[] = [
  {
    nom: "Contact Principal",
    prenom: "",
    fonction: "Support général & Orientation",
    service: "Accueil & Information",
    email: "contact@empreintedigitale.club",
    region: "International",
    specialite: ["Support", "Information", "Orientation"],
    status: "actif"
  },
  {
    nom: "Yakoubi",
    prenom: "Yamina",
    fonction: "Fondatrice & CEO",
    service: "Direction / Partenariats / Dons",
    email: "yakoubi.yamina@ik.me",
    region: "Suisse & International",
    specialite: ["Vision stratégique", "Partenariats", "Investissements", "Dons majeurs"],
    status: "actif"
  },
  {
    nom: "Équipe Développement",
    prenom: "",
    fonction: "Tech Lead & Formations",
    service: "Développement / Formations",
    email: "swissyakoubidev.ch@ik.me",
    region: "Suisse",
    specialite: ["Développement web", "Formation IA", "API Banking", "Support technique"],
    status: "actif"
  },
  {
    nom: "",
    prenom: "Aziz",
    fonction: "Responsable Logistique Suisse",
    service: "Logistique – Suisse",
    email: "aziz.logistique.suisse@empreintedigitale.club",
    region: "Suisse",
    specialite: ["Logistique", "Distribution", "Gestion stocks", "Livraisons"],
    status: "nouveau"
  },
  {
    nom: "",
    prenom: "Abdelkarim",
    fonction: "Responsable Logistique Europe",
    service: "Logistique – Europe",
    email: "abdelkarim.logistique.europe@empreintedigitale.club",
    region: "Europe",
    specialite: ["Logistique européenne", "Supply chain", "Douanes", "Distribution"],
    status: "nouveau"
  },
  {
    nom: "Yakoubi",
    prenom: "Brahim",
    fonction: "Gérant Association",
    service: "Gérant Costa del Sol & TechForAll",
    email: "brahim.gerant@empreintedigitale.club",
    region: "Espagne & Europe",
    specialite: ["Gestion association", "Costa del Sol", "TechForAll", "Supervision générale"],
    status: "actif"
  },
  {
    nom: "Kadjouf",
    prenom: "Hanane",
    fonction: "Secrétaire de Direction",
    service: "Secrétariat Brahim Yakoubi",
    email: "hanane.secretaire@empreintedigitale.club",
    region: "Espagne & Europe",
    specialite: ["Secrétariat", "Gestion administrative", "Coordination", "Support direction"],
    status: "nouveau"
  },
  {
    nom: "Yakoubi Ozel",
    prenom: "Souheila",
    fonction: "Responsable Santé",
    service: "Santé & Bien-être",
    email: "souheila.sante@empreintedigitale.club",
    region: "International",
    specialite: ["Santé générale", "Nutrition", "Coaching bien-être", "Suivi médical"],
    status: "actif"
  }
];

const services = [
  {
    name: "Développement Web",
    description: "Solutions sur mesure et formations techniques",
    icon: Globe,
    color: "bg-blue-500"
  },
  {
    name: "Formation Data & IA",
    description: "Apprentissage éthique et responsable",
    icon: Star,
    color: "bg-purple-500"
  },
  {
    name: "Hébergement Sécurisé",
    description: "Infrastructure suisse conforme RGPD/LPD",
    icon: Shield,
    color: "bg-green-500"
  },
  {
    name: "Transformation Digitale",
    description: "Accompagnement numérique responsable",
    icon: Zap,
    color: "bg-orange-500"
  },
  {
    name: "TechForAll Solidaire",
    description: "Dons technologiques et impact social",
    icon: Heart,
    color: "bg-red-500"
  },
  {
    name: "Banking Halal",
    description: "Services financiers conformes Charia",
    icon: Building2,
    color: "bg-emerald-500"
  }
];

export function ClubEmpeinteDigitaleContactPage() {
  const [formData, setFormData] = useState({
    prenom: '',
    email: ''
  });
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getStatusColor = (status: Contact['status']) => {
    switch (status) {
      case 'actif': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'nouveau': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'formation': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            Club Empreinte Digitale
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Propulsé par PrettyhowQ
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              🇨🇭 Hébergement Suisse Sécurisé
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              ✅ Conforme RGPD & LPD
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              🌍 Services Internationaux
            </Badge>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Notre plateforme propose des services en développement web, formation en data et accompagnement digital sur mesure avec une expertise en transformation numérique responsable.
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Nos Pôles d'Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Nous intervenons dans le développement web, les formations spécialisées, l'hébergement sécurisé, et la transformation numérique responsable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${service.color} bg-opacity-20`}>
                        <service.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Restez Informé</CardTitle>
              <CardDescription className="text-lg">
                Recevez les dernières nouvelles de la plateforme et de l'écosystème CED
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="text"
                  name="prenom"
                  placeholder="Votre prénom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  required
                  className="flex-1"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="flex-1"
                />
                <Button type="submit" className="flex items-center gap-2" disabled={isSubscribed}>
                  {isSubscribed ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      Inscrit !
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      S'inscrire
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.section>

        {/* Contacts Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Référents par Service
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Notre équipe dédiée pour vous accompagner dans tous vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <motion.div
                key={`${contact.nom}-${contact.prenom}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                          <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {contact.prenom} {contact.nom}
                          </CardTitle>
                          <CardDescription className="font-medium">
                            {contact.fonction}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(contact.status)}>
                        {contact.status === 'actif' ? 'Actif' : 
                         contact.status === 'nouveau' ? 'Nouveau' : 'Formation'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Building2 className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{contact.service}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>{contact.region}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <a 
                          href={`mailto:${contact.email}`}
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Spécialités :
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {contact.specialite.map((spec, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quick Donation Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="h-6 w-6 text-green-600" />
                <CardTitle className="text-2xl text-green-800 dark:text-green-200">
                  Soutenir Nos Actions
                </CardTitle>
              </div>
              <CardDescription className="text-lg text-green-700 dark:text-green-300">
                Contribuez au développement de nos projets solidaires et technologiques
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.location.href = 'mailto:yakoubi.yamina@ik.me?subject=Don%20TechForAll'}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Faire un Don
                </Button>
                <Button 
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50"
                  onClick={() => window.location.href = '/techforall'}
                >
                  <Handshake className="h-4 w-4 mr-2" />
                  Devenir Partenaire
                </Button>
              </div>
              <p className="text-sm text-green-600 dark:text-green-400">
                Vos contributions soutiennent l'accès équitable à la technologie et l'éducation numérique
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Engagement Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <Card>
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-2xl">Engagement et Confidentialité</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg w-fit mx-auto">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Conformité RGPD & LPD</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Respect total des normes européennes et suisses de protection des données
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg w-fit mx-auto">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold">Hébergement Suisse</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Toutes les données sont hébergées en Suisse de manière sécurisée
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg w-fit mx-auto">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold">Excellence Technique</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Solutions sur mesure avec les meilleures pratiques du marché
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-slate-100 dark:bg-slate-800 rounded-lg p-8 text-center"
        >
          <div className="space-y-4">
            <p className="font-bold text-lg">
              © Yakoubi Yamina – Tous droits réservés | All rights reserved | 
              <span className="mx-2" dir="rtl">جميع الحقوق محفوظة</span> | 版权所有
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge variant="outline">🇪🇺 Conforme RGPD</Badge>
              <Badge variant="outline">🇨🇭 LPD Suisse</Badge>
              <Badge variant="outline">🔒 Hébergement sécurisé Suisse</Badge>
              <Badge variant="outline">🛡️ Données confidentielles protégées</Badge>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Projet confidentiel</strong> – Traçabilité numérique activée – 
              Usage exclusif réservé à l'écosystème <strong>CED & PrettyhowQ</strong>
            </p>
            
            <Separator className="my-4" />
            
            <p className="text-xs text-gray-500 dark:text-gray-500 max-w-4xl mx-auto">
              Ce projet, son contenu, son code, ses idées, ses visuels, ses textes et sa structure sont la propriété exclusive de <strong>Yakoubi Yamina</strong>. 
              Toute reproduction, diffusion, extraction, adaptation, modification ou exploitation – totale ou partielle – sans autorisation écrite préalable est strictement interdite 
              et fera l'objet de poursuites judiciaires conformément au <strong>Code de la propriété intellectuelle</strong> (France / Europe / International).
            </p>
            
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Ce dépôt n'est <strong>ni open source</strong>, ni destiné à un usage public ou commercial sans accord express préalable.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a 
                href="mailto:swissyakoubidev.ch@ik.me" 
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                swissyakoubidev.ch@ik.me
              </a>
              <span className="text-gray-400">·</span>
              <a 
                href="mailto:yakoubi.yamina@ik.me" 
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                yakoubi.yamina@ik.me
              </a>
              <span className="text-gray-400">·</span>
              <a 
                href="mailto:contact@empreintedigitale.club" 
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                contact@empreintedigitale.club
              </a>
            </div>
            
            <Badge variant="secondary" className="mt-4">
              📌 Version complète – Écosystème en production 📎
            </Badge>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}