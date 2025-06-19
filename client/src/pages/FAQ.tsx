import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle,
  BookOpen,
  Users,
  CreditCard,
  Shield,
  Globe,
  Smartphone,
  Brain,
  Heart
} from 'lucide-react';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Toutes les questions', icon: HelpCircle },
    { id: 'formations', label: 'Formations', icon: BookOpen },
    { id: 'communaute', label: 'Communauté', icon: Users },
    { id: 'tarifs', label: 'Tarifs', icon: CreditCard },
    { id: 'securite', label: 'Sécurité', icon: Shield },
    { id: 'technique', label: 'Technique', icon: Smartphone }
  ];

  const faqData = [
    {
      category: 'formations',
      question: 'Qu\'est-ce que l\'IA éthique et pourquoi est-ce important ?',
      answer: 'L\'IA éthique consiste à développer et utiliser l\'intelligence artificielle en respectant les valeurs humaines, la transparence, l\'équité et la responsabilité. C\'est crucial car l\'IA influence de plus en plus nos vies quotidiennes. Notre approche garantit que cette technologie serve l\'humanité de manière positive et équitable.'
    },
    {
      category: 'formations',
      question: 'Combien de langues sont supportées sur la plateforme ?',
      answer: 'Notre plateforme supporte actuellement 78 langues différentes, permettant un accès universel à l\'éducation IA éthique. Cette diversité linguistique fait partie de notre engagement pour l\'accessibilité mondiale.'
    },
    {
      category: 'formations',
      question: 'Quels sont les 10 domaines IA couverts dans les formations ?',
      answer: 'Nos formations couvrent : Machine Learning, Deep Learning, NLP (Traitement du langage naturel), Computer Vision, IA éthique et gouvernance, Robotique, IoT et IA, Data Science, IA conversationnelle, et Automatisation intelligente. Chaque domaine est enseigné avec une approche éthique.'
    },
    {
      category: 'communaute',
      question: 'Comment fonctionne la communauté du Club Empreinte Digitale ?',
      answer: 'Notre communauté de 34,221+ apprenants actifs partage connaissances, projets et expériences. Vous avez accès à des forums, des groupes d\'étude, des événements virtuels et un mentorat par des experts. L\'entraide et la collaboration sont au cœur de notre écosystème.'
    },
    {
      category: 'tarifs',
      question: 'Quels sont les tarifs de l\'application mobile de coaching ?',
      answer: 'Notre app mobile "Mon coach sportif à emporter partout" propose 3 formules : Débutant (19€/mois), Intermédiaire (39€/mois), et Expert (79€/mois). Chaque formule inclut des programmes personnalisés avec Souheila Yakoubi-Ozel, notre experte nutrition.'
    },
    {
      category: 'tarifs',
      question: 'Y a-t-il des formations gratuites disponibles ?',
      answer: 'Oui, nous proposons des contenus d\'introduction gratuits et des webinaires ouverts à tous. Notre mission d\'accessibilité universelle inclut des bourses d\'études et des tarifs solidaires pour les apprenants en situation de précarité.'
    },
    {
      category: 'securite',
      question: 'Comment mes données personnelles sont-elles protégées ?',
      answer: 'Nous respectons strictement le RGPD et la LPD Suisse. Vos données sont hébergées à Genève avec chiffrement de bout en bout. Notre technologie PrettyhowQ garantit la confidentialité tout en personnalisant votre apprentissage.'
    },
    {
      category: 'securite',
      question: 'Qu\'est-ce que PrettyhowQ et comment ça fonctionne ?',
      answer: 'PrettyhowQ est notre technologie IA éthique propriétaire qui personnalise l\'apprentissage tout en respectant votre vie privée. Elle adapte le contenu à votre rythme et style d\'apprentissage sans collecter de données sensibles.'
    },
    {
      category: 'technique',
      question: 'L\'application mobile fonctionne-t-elle hors ligne ?',
      answer: 'Oui, de nombreuses fonctionnalités sont disponibles hors ligne, notamment les programmes d\'entraînement téléchargés, l\'horloge mondiale, et le timer Pomodoro. La synchronisation se fait automatiquement lors de la reconnexion.'
    },
    {
      category: 'technique',
      question: 'Comment fonctionne l\'horloge mondiale synchronisée par satellite ?',
      answer: 'L\'horloge détecte automatiquement votre localisation et se synchronise avec les serveurs de temps mondiaux. Elle affiche 6 fuseaux horaires principaux avec mise à jour temps réel, similaire aux systèmes Apple. Le téléchargement des données horaires inclut horodatage pour l\'organisation.'
    },
    {
      category: 'formations',
      question: 'Qui est Yakoubi Yamina et quel est son rôle ?',
      answer: 'Yakoubi Yamina est la fondatrice et CEO du Club Empreinte Digitale. Visionnaire de l\'IA éthique, elle dirige le développement de notre plateforme d\'apprentissage avec pour mission de démocratiser l\'accès à l\'éducation IA responsable.'
    },
    {
      category: 'formations',
      question: 'Qui est Souheila Yakoubi-Ozel ?',
      answer: 'Souheila Yakoubi-Ozel est notre experte en nutrition et santé. Elle conçoit les programmes nutritionnels personnalisés de notre application mobile de coaching sportif, intégrant 70+ sports avec des conseils nutritionnels adaptés.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Questions Fréquentes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur le Club Empreinte Digitale, 
            nos formations IA éthique et nos services.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Rechercher dans les questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          {filteredFAQ.length === 0 ? (
            <Card>
              <CardContent className="pt-8 pb-8 text-center">
                <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Aucune question trouvée pour votre recherche.</p>
              </CardContent>
            </Card>
          ) : (
            filteredFAQ.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="flex-shrink-0 mt-1">
                          {item.category === 'formations' && <BookOpen className="h-5 w-5 text-blue-600" />}
                          {item.category === 'communaute' && <Users className="h-5 w-5 text-green-600" />}
                          {item.category === 'tarifs' && <CreditCard className="h-5 w-5 text-purple-600" />}
                          {item.category === 'securite' && <Shield className="h-5 w-5 text-red-600" />}
                          {item.category === 'technique' && <Smartphone className="h-5 w-5 text-orange-600" />}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-left text-lg font-semibold">
                            {item.question}
                          </CardTitle>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {openItems.includes(index) ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="pt-0">
                          <p className="text-gray-700 leading-relaxed pl-8">
                            {item.answer}
                          </p>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="pt-8 pb-8 text-center">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Vous ne trouvez pas votre réponse ?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Notre équipe support est disponible 24/7 dans 78 langues pour vous aider. 
                N'hésitez pas à nous contacter pour toute question spécifique.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={() => window.location.href = '/contact'}>
                  Nous contacter
                </Button>
                <Button variant="outline" onClick={() => window.open('mailto:contact@empreintedigitale.club')}>
                  Email direct
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}