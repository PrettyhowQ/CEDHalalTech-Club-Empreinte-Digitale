import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageCircle, Calendar, MapPin, Heart, BookOpen, Building, Globe, UserPlus, Bell, Settings } from "lucide-react";

interface CommunityMember {
  id: string;
  nom: string;
  pays: string;
  avatar: string;
  statut: 'en ligne' | 'absent' | 'en prière';
  dernierActivite: string;
  contribution: number;
  badges: string[];
}

interface Event {
  id: string;
  titre: string;
  type: 'étude' | 'prière' | 'iftar' | 'conference' | 'social';
  date: Date;
  organisateur: string;
  participants: number;
  maxParticipants: number;
  lieu: string;
  description: string;
}

interface Discussion {
  id: string;
  sujet: string;
  auteur: string;
  categorie: 'fiqh' | 'coran' | 'hadith' | 'general' | 'support';
  messages: number;
  dernierMessage: Date;
  resolu: boolean;
}

export default function GestionCommunautaireMusulmane() {
  const [activeTab, setActiveTab] = useState('communaute');
  const [nouveauMessage, setNouveauMessage] = useState('');
  const [membresEnLigne, setMembresEnLigne] = useState(247);

  // Simulation mise à jour temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setMembresEnLigne(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const membresCommunaute: CommunityMember[] = [
    {
      id: '1',
      nom: 'Ahmed Al-Mansouri',
      pays: '🇸🇦 Arabie Saoudite',
      avatar: 'AM',
      statut: 'en ligne',
      dernierActivite: 'Il y a 2 min',
      contribution: 94,
      badges: ['Scholar', 'Contributeur Actif', 'Mentor Fiqh']
    },
    {
      id: '2',
      nom: 'Fatima Zahra',
      pays: '🇲🇦 Maroc',
      avatar: 'FZ',
      statut: 'en prière',
      dernierActivite: 'Il y a 15 min',
      contribution: 87,
      badges: ['Hafiza', 'Tafsir Expert', 'Communauté']
    },
    {
      id: '3',
      nom: 'Omar Hassan',
      pays: '🇪🇬 Égypte',
      avatar: 'OH',
      statut: 'en ligne',
      dernierActivite: 'Il y a 5 min',
      contribution: 76,
      badges: ['Hadith Scholar', 'Modérateur']
    },
    {
      id: '4',
      nom: 'Aisha Sultana',
      pays: '🇹🇷 Turquie',
      avatar: 'AS',
      statut: 'en ligne',
      dernierActivite: 'Il y a 1 min',
      contribution: 82,
      badges: ['Language Expert', 'Traductrice']
    },
    {
      id: '5',
      nom: 'Ibrahim Malik',
      pays: '🇵🇰 Pakistan',
      avatar: 'IM',
      statut: 'absent',
      dernierActivite: 'Il y a 2h',
      contribution: 69,
      badges: ['Tech Halal', 'Developer']
    }
  ];

  const evenementsCommunaute: Event[] = [
    {
      id: '1',
      titre: 'Cercle d\'étude - Tafsir Sourate Al-Baqarah',
      type: 'étude',
      date: new Date('2025-01-06T19:00:00'),
      organisateur: 'Sheikh Mohammed Al-Azhari',
      participants: 34,
      maxParticipants: 50,
      lieu: 'Salle virtuelle CED',
      description: 'Étude approfondie des versets 1-20 avec explications en arabe et français'
    },
    {
      id: '2',
      titre: 'Iftar Communautaire Virtuel',
      type: 'iftar',
      date: new Date('2025-01-07T18:30:00'),
      organisateur: 'Équipe CED Community',
      participants: 127,
      maxParticipants: 200,
      lieu: 'Espace Ramadan CED',
      description: 'Partage du repas de rupture avec invocations et discussions fraternelles'
    },
    {
      id: '3',
      titre: 'Conférence : IA et Éthique Islamique',
      type: 'conference',
      date: new Date('2025-01-08T20:00:00'),
      organisateur: 'Dr. Yassin Tech',
      participants: 89,
      maxParticipants: 150,
      lieu: 'Amphithéâtre CED',
      description: 'Discussion sur l\'intégration de l\'IA dans les pratiques islamiques'
    }
  ];

  const discussionsActives: Discussion[] = [
    {
      id: '1',
      sujet: 'Règles Fiqh pour les transactions crypto halal',
      auteur: 'Ahmad_Scholar',
      categorie: 'fiqh',
      messages: 23,
      dernierMessage: new Date('2025-01-05T15:30:00'),
      resolu: false
    },
    {
      id: '2',
      sujet: 'Mémorisation du Coran - Conseils pratiques',
      auteur: 'Hafiza_Maryam',
      categorie: 'coran',
      messages: 41,
      dernierMessage: new Date('2025-01-05T14:45:00'),
      resolu: true
    },
    {
      id: '3',
      sujet: 'Horaires de prière précis avec GPS',
      auteur: 'Tech_Muslim',
      categorie: 'support',
      messages: 12,
      dernierMessage: new Date('2025-01-05T16:20:00'),
      resolu: false
    }
  ];

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'en ligne': return 'bg-green-500';
      case 'en prière': return 'bg-blue-500';
      case 'absent': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getCategorieColor = (categorie: string) => {
    switch (categorie) {
      case 'fiqh': return 'bg-purple-100 text-purple-800';
      case 'coran': return 'bg-green-100 text-green-800';
      case 'hadith': return 'bg-blue-100 text-blue-800';
      case 'support': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeEvenementIcon = (type: string) => {
    switch (type) {
      case 'étude': return <BookOpen className="h-4 w-4" />;
      case 'prière': return <Building className="h-4 w-4" />;
      case 'iftar': return <Heart className="h-4 w-4" />;
      case 'conference': return <Users className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🕌 Gestion Communautaire Musulmane Globale
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Plateforme communautaire islamique • Connexion fraternelle • Apprentissage collectif
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge className="bg-green-100 text-green-800 px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              {membresEnLigne.toLocaleString()} En ligne
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              67 Pays Connectés
            </Badge>
          </div>
        </div>

        {/* Navigation principale */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="communaute">👥 Communauté</TabsTrigger>
            <TabsTrigger value="evenements">📅 Événements</TabsTrigger>
            <TabsTrigger value="discussions">💬 Discussions</TabsTrigger>
            <TabsTrigger value="mentors">🎓 Mentors</TabsTrigger>
          </TabsList>

          {/* Onglet Communauté */}
          <TabsContent value="communaute" className="space-y-6">
            
            {/* Statistiques communauté */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">12,847</h3>
                  <p className="text-green-100">Membres Actifs</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">3,429</h3>
                  <p className="text-blue-100">Messages Aujourd'hui</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">89</h3>
                  <p className="text-purple-100">Événements Mois</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">67</h3>
                  <p className="text-orange-100">Pays Représentés</p>
                </CardContent>
              </Card>
            </div>

            {/* Membres en ligne */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-green-600" />
                    Membres Actifs en ce Moment
                  </span>
                  <Button size="sm">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Inviter
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {membresCommunaute.map((membre) => (
                    <div key={membre.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <Avatar>
                            <AvatarFallback className="bg-teal-100 text-teal-800">
                              {membre.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatutColor(membre.statut)}`}></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{membre.nom}</h3>
                          <p className="text-sm text-gray-600">{membre.pays}</p>
                          <p className="text-xs text-gray-500">{membre.dernierActivite}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium">Contribution: {membre.contribution}%</span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${membre.contribution}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {membre.badges.slice(0, 2).map((badge, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Événements */}
          <TabsContent value="evenements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {evenementsCommunaute.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {getTypeEvenementIcon(event.type)}
                      <span className="text-lg">{event.titre}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {event.date.toLocaleDateString('fr-FR', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        {event.lieu}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        {event.participants}/{event.maxParticipants} participants
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700">{event.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Places disponibles:</span>
                        <span>{event.maxParticipants - event.participants}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      Rejoindre l'événement
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Discussions */}
          <TabsContent value="discussions" className="space-y-6">
            
            {/* Nouvelle discussion */}
            <Card>
              <CardHeader>
                <CardTitle>💬 Démarrer une nouvelle discussion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Sujet de discussion..." />
                <Textarea 
                  placeholder="Votre message..."
                  value={nouveauMessage}
                  onChange={(e) => setNouveauMessage(e.target.value)}
                />
                <div className="flex justify-between items-center">
                  <select className="px-3 py-2 border rounded-md">
                    <option value="general">Général</option>
                    <option value="fiqh">Fiqh</option>
                    <option value="coran">Coran</option>
                    <option value="hadith">Hadith</option>
                    <option value="support">Support</option>
                  </select>
                  <Button disabled={!nouveauMessage.trim()}>
                    Publier
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Discussions actives */}
            <div className="space-y-4">
              {discussionsActives.map((discussion) => (
                <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg text-gray-900">
                            {discussion.sujet}
                          </h3>
                          <Badge className={getCategorieColor(discussion.categorie)}>
                            {discussion.categorie}
                          </Badge>
                          {discussion.resolu && (
                            <Badge className="bg-green-100 text-green-800">
                              ✓ Résolu
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Par {discussion.auteur}</span>
                          <span>•</span>
                          <span>{discussion.messages} messages</span>
                          <span>•</span>
                          <span>Dernière activité: {discussion.dernierMessage.toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>
                      
                      <Button variant="outline">
                        Rejoindre
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Mentors */}
          <TabsContent value="mentors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  🎓 Programme de Mentorat Islamique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Mentors Fiqh</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Guidance spirituelle et juridique islamique
                    </p>
                    <Badge className="bg-blue-100 text-blue-800">23 Mentors</Badge>
                  </div>

                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Mentors Coran</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Mémorisation et récitation du Saint Coran
                    </p>
                    <Badge className="bg-green-100 text-green-800">18 Mentors</Badge>
                  </div>

                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Mentors Tech</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Technologie halal et développement islamique
                    </p>
                    <Badge className="bg-purple-100 text-purple-800">12 Mentors</Badge>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-800 font-medium text-center">
                    🤝 Rejoignez notre programme de mentorat pour apprendre auprès de scholars 
                    et experts reconnus dans la communauté musulmane mondiale
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Section valeurs communautaires */}
        <Card className="mt-8 bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-200">
          <CardHeader>
            <CardTitle className="text-2xl text-teal-800">
              🕌 Valeurs de Notre Communauté
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg">
                <Heart className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Fraternité (Ukhuwah)</h3>
                <p className="text-sm text-gray-600">
                  Lien fraternel authentique entre tous les membres de la communauté
                </p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Recherche du Savoir (Ilm)</h3>
                <p className="text-sm text-gray-600">
                  Apprentissage continu et partage des connaissances islamiques
                </p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Entraide (Ta'awun)</h3>
                <p className="text-sm text-gray-600">
                  Support mutuel dans le bien et la piété selon les enseignements
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-teal-100 rounded-lg">
              <p className="text-teal-800 font-medium text-center">
                🌟 Plateforme communautaire respectant les valeurs islamiques authentiques 
                pour rassembler la Oummah mondiale dans l'apprentissage et l'entraide
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}