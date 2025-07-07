import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const FamilyBetaAccess = () => {
  const [selectedMember, setSelectedMember] = useState("yamina");

  const familyMembers = [
    {
      id: "yamina",
      name: "Yakoubi Yamina",
      role: "Fondatrice & Directrice Générale",
      access: "Accès Total Administrateur",
      permissions: ["Tous modules", "Configuration système", "Gestion utilisateurs", "Analytics avancées"],
      modules: 75,
      status: "Actif",
      lastLogin: "Aujourd'hui 11:20",
      avatar: "🧕",
      priority: 1
    },
    {
      id: "souheila",
      name: "Souheila Yakoubi-Ozel",
      role: "Co-Directrice Santé & IA Coaching",
      access: "Accès Privilégié Santé",
      permissions: ["Modules santé", "IA Coaching Halal", "Sports haut niveau", "Formations médicales"],
      modules: 45,
      status: "Actif",
      lastLogin: "Hier 18:30",
      avatar: "🧕",
      priority: 2
    },
    {
      id: "hanae",
      name: "Hanaé-Denise Ozel",
      role: "Co-Directrice Juridique & Finance",
      access: "Accès Privilégié Juridique",
      permissions: ["Modules juridiques", "Finance islamique", "Conformité Sharia", "Contrats halal"],
      modules: 38,
      status: "Actif",
      lastLogin: "Hier 15:45",
      avatar: "🧕",
      priority: 3
    },
    {
      id: "malik",
      name: "Malik Ketar",
      role: "Développeur Web HalalTech™",
      access: "Accès Technique Développement",
      permissions: ["Modules techniques", "UX/UI Design", "Coaching sportif hommes", "Code source"],
      modules: 42,
      status: "Actif",
      lastLogin: "Aujourd'hui 09:15",
      avatar: "🫥",
      priority: 4
    },
    {
      id: "brahim",
      name: "Brahim",
      role: "Gestionnaire TechForAll",
      access: "Accès TechForAll & Costa del Sol",
      permissions: ["TechForAll", "Costa del Sol", "Économie circulaire", "Dons technologiques"],
      modules: 25,
      status: "Actif",
      lastLogin: "Aujourd'hui 08:30",
      avatar: "🫥",
      priority: 5
    },
    {
      id: "karim",
      name: "Yakoubi Karim",
      role: "Responsable Logistique Europe",
      access: "Accès Logistique",
      permissions: ["Logistique Europe", "Gestion équipements", "Transport", "Coordination"],
      modules: 20,
      status: "Actif",
      lastLogin: "Hier 16:20",
      avatar: "🫥",
      priority: 6
    },
    {
      id: "aziz",
      name: "Yakoubi Aziz",
      role: "Responsable Logistique Suisse",
      access: "Accès Logistique",
      permissions: ["Logistique Suisse", "Gestion matériel", "Coordination locale", "Support"],
      modules: 18,
      status: "Actif",
      lastLogin: "Hier 14:10",
      avatar: "🫥",
      priority: 7
    }
  ];

  const betaTestingModules = [
    {
      name: "HalalTech Marketplace",
      status: "Nouveau",
      completion: 95,
      testers: ["yamina", "malik"],
      priority: "Haute",
      description: "Marketplace produits technologiques halal"
    },
    {
      name: "Islamic Startup Incubator",
      status: "Nouveau", 
      completion: 90,
      testers: ["yamina", "hanae"],
      priority: "Haute",
      description: "Incubateur startups islamiques"
    },
    {
      name: "Interactive Journey Map",
      status: "En test",
      completion: 100,
      testers: ["yamina", "souheila", "malik"],
      priority: "Moyenne",
      description: "Parcours interactif HalalTech"
    },
    {
      name: "Voice Assistant Aïcha",
      status: "En test",
      completion: 100,
      testers: ["yamina", "souheila"],
      priority: "Haute",
      description: "Assistant vocal IA islamique"
    },
    {
      name: "Community Impact Dashboard",
      status: "Validé",
      completion: 100,
      testers: ["yamina", "brahim"],
      priority: "Moyenne",
      description: "Visualisation impact communautaire"
    }
  ];

  const selectedFamilyMember = familyMembers.find(m => m.id === selectedMember);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">👨‍👩‍👧‍👦</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Version Bêta Familiale CED
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Accès privilégié famille Yakoubi pour tests internes avant lancement public
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <Badge className="bg-blue-500 text-white px-6 py-3">
              👥 7 Membres Famille Actifs
            </Badge>
            <Badge className="bg-purple-500 text-white px-6 py-3">
              🧪 75 Modules en Test
            </Badge>
            <Badge className="bg-emerald-500 text-white px-6 py-3">
              ✅ 100% Conforme Sharia
            </Badge>
          </div>
        </div>

        {/* Family Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {familyMembers.map(member => (
            <Card 
              key={member.id}
              className={`cursor-pointer transition-all hover:shadow-xl ${
                selectedMember === member.id 
                  ? 'ring-4 ring-blue-400 bg-blue-50' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => setSelectedMember(member.id)}
            >
              <CardHeader>
                <div className="text-center">
                  <div className="text-6xl mb-3">{member.avatar}</div>
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <Badge 
                    className={`mb-3 ${
                      member.priority <= 3 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                    }`}
                  >
                    {member.role}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Niveau d'accès</div>
                    <div className="text-sm font-bold text-emerald-600">{member.access}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Modules accessibles</div>
                    <div className="text-2xl font-bold text-blue-600">{member.modules}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Dernière connexion</div>
                    <div className="text-sm">{member.lastLogin}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      member.status === 'Actif' ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                    <span className="text-sm font-medium">{member.status}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Member Details */}
        {selectedFamilyMember && (
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardHeader>
                <div className="flex items-center gap-6">
                  <div className="text-8xl">{selectedFamilyMember.avatar}</div>
                  <div>
                    <CardTitle className="text-4xl mb-2">
                      {selectedFamilyMember.name}
                    </CardTitle>
                    <p className="text-2xl opacity-90 mb-4">
                      {selectedFamilyMember.role}
                    </p>
                    <Badge className="bg-white text-blue-600 text-lg px-4 py-2">
                      {selectedFamilyMember.access}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Permissions Spéciales</h3>
                    <div className="space-y-3">
                      {selectedFamilyMember.permissions.map((permission, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-lg">{permission}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Statistiques d'Accès</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Modules Accessibles</span>
                          <span className="font-bold">{selectedFamilyMember.modules}/75</span>
                        </div>
                        <Progress 
                          value={(selectedFamilyMember.modules / 75) * 100} 
                          className="h-3"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-3xl font-bold">{selectedFamilyMember.priority}</div>
                          <div className="text-sm opacity-90">Priorité Accès</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold">100%</div>
                          <div className="text-sm opacity-90">Disponibilité</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Beta Testing Modules */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Modules en Phase de Test Familial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {betaTestingModules.map((module, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{module.name}</CardTitle>
                    <Badge 
                      className={`${
                        module.status === 'Nouveau' ? 'bg-blue-500' :
                        module.status === 'En test' ? 'bg-yellow-500' :
                        'bg-green-500'
                      } text-white`}
                    >
                      {module.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{module.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Completion</span>
                      <span className="text-sm font-bold">{module.completion}%</span>
                    </div>
                    <Progress value={module.completion} className="h-2" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-2">Testeurs Assignés</div>
                    <div className="flex flex-wrap gap-2">
                      {module.testers.map(testerId => {
                        const tester = familyMembers.find(m => m.id === testerId);
                        return tester ? (
                          <Badge key={testerId} variant="outline" className="text-xs">
                            {tester.avatar} {tester.name.split(' ')[1] || tester.name}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="outline" 
                      className={`${
                        module.priority === 'Haute' ? 'border-red-500 text-red-600' :
                        module.priority === 'Moyenne' ? 'border-yellow-500 text-yellow-600' :
                        'border-green-500 text-green-600'
                      }`}
                    >
                      Priorité: {module.priority}
                    </Badge>
                    <Button size="sm" className="bg-blue-500 text-white">
                      Tester
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Family Feedback Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
            <CardContent className="p-12">
              <div className="text-6xl mb-6">📝</div>
              <h3 className="text-4xl font-bold mb-6">
                Feedback Famille Prioritaire
              </h3>
              <p className="text-2xl mb-8 opacity-95">
                Vos retours façonnent l'écosystème CED HalalTech™ avant le lancement public
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">🐛</div>
                  <h4 className="text-xl font-bold mb-2">Signaler Bug</h4>
                  <p className="text-sm opacity-90">Rapporter problèmes techniques</p>
                </div>
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">💡</div>
                  <h4 className="text-xl font-bold mb-2">Suggestions</h4>
                  <p className="text-sm opacity-90">Proposer améliorations</p>
                </div>
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">✅</div>
                  <h4 className="text-xl font-bold mb-2">Validation</h4>
                  <p className="text-sm opacity-90">Approuver modules prêts</p>
                </div>
              </div>
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-xl px-12 py-4">
                📧 yakoubi.yamina@ik.me - Feedback Famille
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center py-6 border-t">
          <p className="text-gray-600 text-lg">
            © 2025 Version Bêta Familiale CED HalalTech™ - Yakoubi Yamina | Club Empreinte Digitale
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Accès exclusif famille Yakoubi - Tests internes avant lancement public
          </p>
        </div>
      </div>
    </div>
  );
};

export default FamilyBetaAccess;