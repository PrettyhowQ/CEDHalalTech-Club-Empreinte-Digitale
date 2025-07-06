import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Mail, Phone, Globe, Star, Award, Users, MessageSquare } from 'lucide-react';

export default function ContactScholars() {
  const scholars = [
    {
      name: "Sheikh Dr. Muhammad Al-Jazairi",
      speciality: "Fiqh Informatique",
      location: "Arabie Saoudite",
      languages: ["العربية", "English", "Français"],
      expertise: ["IA Islamique", "Blockchain Halal", "Cybersécurité"],
      contact: "sheikh.jazairi@islamictech.sa",
      availability: "Disponible",
      rating: 5
    },
    {
      name: "Dr. Fatima Al-Ansari",
      speciality: "Finance Islamique Tech",
      location: "Émirats Arabes Unis",
      languages: ["العربية", "English"],
      expertise: ["Banking Digital", "Takaful Tech", "DeFi Halal"],
      contact: "dr.ansari@shariafin.ae",
      availability: "Occupé",
      rating: 5
    },
    {
      name: "Sheikh Omar Benedetti",
      speciality: "Fiqh Européen",
      location: "France",
      languages: ["Français", "العربية", "English"],
      expertise: ["RGPD Islamique", "Tech Compliance", "Fiqh Moderne"],
      contact: "omar.benedetti@fiqh.fr",
      availability: "Disponible",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-green-800 flex items-center justify-center gap-3">
              <BookOpen className="h-8 w-8" />
              📞 Contact Scholars Islamiques
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Consultez nos savants experts en Fiqh informatique et technologie halal
            </p>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {scholars.map((scholar, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{scholar.name}</CardTitle>
                  <Badge variant={scholar.availability === "Disponible" ? "default" : "secondary"}>
                    {scholar.availability}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{scholar.speciality}</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: scholar.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{scholar.location}</span>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-1">Langues :</p>
                  <div className="flex flex-wrap gap-1">
                    {scholar.languages.map((lang, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{lang}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Expertise :</p>
                  <div className="flex flex-wrap gap-1">
                    {scholar.expertise.map((exp, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{exp}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-blue-600">{scholar.contact}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Consulter
                  </Button>
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Comment Contacter nos Scholars
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">📧 Consultation par Email</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Réponse sous 24-48h</li>
                <li>• Questions détaillées avec sources</li>
                <li>• Fatwa personnalisée si nécessaire</li>
                <li>• Suivi de votre demande</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">📞 Consultation Urgente</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Disponible 7j/7 pour urgences</li>
                <li>• Vidéoconférence possible</li>
                <li>• Traduction simultanée</li>
                <li>• Validation en temps réel</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}