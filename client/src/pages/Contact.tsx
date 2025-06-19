import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Instagram,
  Twitter,
  Linkedin,
  Globe,
  Users,
  Heart,
  Headphones
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    console.log('Contact form submitted:', formData);
    alert('Message envoyé avec succès ! Nous vous répondrons dans les 24h.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Principal',
      value: 'contact@empreintedigitale.club',
      description: 'Réponse sous 24h maximum',
      action: 'mailto:contact@empreintedigitale.club'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@empreintedigitale',
      description: 'Suivez nos actualités',
      action: 'https://instagram.com/empreintedigitale'
    },
    {
      icon: MessageCircle,
      title: 'Support Technique',
      value: 'support@empreintedigitale.club',
      description: 'Aide technique et formation',
      action: 'mailto:support@empreintedigitale.club'
    },
    {
      icon: Users,
      title: 'Partenariats',
      value: 'partenaires@empreintedigitale.club',
      description: 'Collaborations et alliances',
      action: 'mailto:partenaires@empreintedigitale.club'
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Siège Social',
      value: 'Genève, Suisse 🇨🇭',
      description: 'Conforme RGPD & LPD Suisse'
    },
    {
      icon: Clock,
      title: 'Horaires Support',
      value: '7j/7 - 24h/24',
      description: 'Support multilingue disponible'
    },
    {
      icon: Globe,
      title: 'Couverture Mondiale',
      value: '78 langues supportées',
      description: 'Service client international'
    },
    {
      icon: Headphones,
      title: 'Assistance IA',
      value: 'Chat IARP disponible',
      description: 'Assistant intelligent intégré'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour vous accompagner dans votre parcours 
            d'apprentissage IA éthique. Contactez-nous via le canal qui vous convient le mieux.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-blue-600" />
                  Envoyez-nous un message
                </CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom complet *</label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Sujet *</label>
                    <Input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Objet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre demande en détail..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Méthodes de contact */}
            <Card>
              <CardHeader>
                <CardTitle>Nos coordonnées</CardTitle>
                <CardDescription>
                  Choisissez le canal de communication qui vous convient
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{method.title}</h3>
                      <p className="text-blue-600 font-medium">{method.value}</p>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(method.action, '_blank')}
                    >
                      Contacter
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Informations pratiques */}
            <Card>
              <CardHeader>
                <CardTitle>Informations pratiques</CardTitle>
                <CardDescription>
                  Tout ce que vous devez savoir sur notre support
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {officeInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-gray-800">{info.value}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Engagement qualité */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Notre engagement</h3>
                    <p className="text-green-700 text-sm mb-3">
                      Nous nous engageons à vous répondre dans les 24h et à vous accompagner 
                      tout au long de votre parcours d'apprentissage IA éthique.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Support 24/7
                      </Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        78 langues
                      </Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        IA éthique
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}