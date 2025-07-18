import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, DollarSign, Zap, Heart, Target, Handshake, Building, Package, Coins } from "lucide-react";

export default function BusinessModelCanvas() {
  const canvasData = {
    keyPartners: [
      "150+ Scholars Islamiques Internationaux",
      "Banques Islamiques (Dubai Islamic Bank, Bank Islam Malaysia)",
      "Universités (Al-Azhar, IIUM, Islamic University Medina)",
      "Organismes Financement (Innosuisse, Horizon Europe, FSE+)",
      "Plateformes Tech (Microsoft Azure, AWS Islamic Services)",
      "Centres Recherche (IRTI-IsDB, AAOIFI, IFSB)"
    ],
    keyActivities: [
      "Développement plateformes fintech islamiques",
      "Formation & certification Fiqh informatique", 
      "Supervision conformité Sharia 24/7",
      "Innovation IA éthique multilingue",
      "Éducation islamique digitale",
      "Services bancaires 0% Riba"
    ],
    keyResources: [
      "27,446+ règles Fiqh informatique validées",
      "Équipe 150+ scholars + 25+ développeurs",
      "Infrastructure cloud halal souveraine",
      "Brevets innovation Islamic fintech",
      "Base utilisateurs 847,592 (67 pays)",
      "Certifications ISO 27001, AAOIFI, FINMA"
    ],
    valuePropositions: [
      "🕌 Premier écosystème fintech 100% halal mondial",
      "🤖 IA éthique conforme Tawhid et Maslaha",
      "📚 Éducation islamique digitale certifiée",
      "💰 Banking islamique 0% Riba multi-devises",
      "🛡️ Assurance Takaful famille complète",
      "🌍 Support 78+ langues avec RTL arabe"
    ],
    customerRelationships: [
      "Support spirituel personnalisé 24/7",
      "Communauté musulmane mondiale connectée",
      "Mentorat scholars en direct",
      "Formation continue certifiée",
      "Assistance multilingue culturellement sensible",
      "Programme fidélité basé bonnes actions"
    ],
    channels: [
      "Applications mobiles natives (iOS/Android)",
      "Plateforme web progressive (PWA)",
      "Réseaux sociaux islamiques",
      "Partenariats mosquées et centres islamiques",
      "Événements fintech halal internationaux",
      "Marketing bouche-à-oreille communautaire"
    ],
    customerSegments: [
      "👨‍👩‍👧‍👦 Familles musulmanes (primary)",
      "🏢 Entreprises halal & startups islamiques",
      "🎓 Étudiants & professionnels musulmans",
      "🏛️ Institutions financières islamiques",
      "🕌 Organisations religieuses",
      "💼 Investisseurs conformes Sharia"
    ],
    costStructure: [
      "Développement & maintenance plateforme (35%)",
      "Supervision scholars & conformité (20%)",
      "Infrastructure cloud & sécurité (15%)",
      "Marketing & acquisition clients (12%)",
      "Équipe & formation continue (10%)",
      "Certifications & audits religieux (8%)"
    ],
    revenueStreams: [
      "💳 Commissions transactions bancaires halal",
      "📱 Abonnements premium applications (CHF 15-45/mois)",
      "🎓 Formations certifiées (CHF 150-890/cours)",
      "🛡️ Primes assurance Takaful",
      "🏢 Licences B2B pour entreprises",
      "💰 Gestion patrimoine islamique (0.5-2% AUM)"
    ]
  };

  const financialProjections = [
    { year: "2025", revenue: "2.8M CHF", users: "1.2M", margin: "15%" },
    { year: "2026", revenue: "8.5M CHF", users: "3.1M", margin: "22%" },
    { year: "2027", revenue: "18.2M CHF", users: "5.8M", margin: "28%" },
    { year: "2028", revenue: "35.7M CHF", users: "9.4M", margin: "35%" },
    { year: "2029", revenue: "65.3M CHF", users: "15.2M", margin: "42%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            📊 Business Model Canvas CED HalalTech™
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Modèle économique révolutionnaire pour l'écosystème fintech islamique mondial
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge variant="outline" className="bg-green-100 text-green-800">Modèle Validé</Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800">Sharia Compliant</Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-800">Scalable</Badge>
          </div>
        </div>

        {/* Business Model Canvas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          {/* Key Partners */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Handshake className="h-4 w-4" />
                Partenaires Clés
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                {canvasData.keyPartners.map((partner, idx) => (
                  <div key={idx} className="text-xs p-2 bg-purple-50 rounded">
                    {partner}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Activities */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4" />
                Activités Clés
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                {canvasData.keyActivities.map((activity, idx) => (
                  <div key={idx} className="text-xs p-2 bg-blue-50 rounded">
                    {activity}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Value Propositions */}
          <Card className="shadow-lg lg:row-span-2">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Heart className="h-4 w-4" />
                Propositions de Valeur
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                {canvasData.valuePropositions.map((value, idx) => (
                  <div key={idx} className="text-xs p-3 bg-emerald-50 rounded border-l-2 border-emerald-500">
                    {value}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Customer Relationships */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Heart className="h-4 w-4" />
                Relations Clients
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                {canvasData.customerRelationships.map((relation, idx) => (
                  <div key={idx} className="text-xs p-2 bg-orange-50 rounded">
                    {relation}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Customer Segments */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                Segments Clients
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                {canvasData.customerSegments.map((segment, idx) => (
                  <div key={idx} className="text-xs p-2 bg-pink-50 rounded">
                    {segment}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Resources */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Building className="h-4 w-4" />
                Ressources Clés
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                {canvasData.keyResources.map((resource, idx) => (
                  <div key={idx} className="text-xs p-2 bg-teal-50 rounded">
                    {resource}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Channels */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Package className="h-4 w-4" />
                Canaux
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                {canvasData.channels.map((channel, idx) => (
                  <div key={idx} className="text-xs p-2 bg-amber-50 rounded">
                    {channel}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cost Structure & Revenue Streams */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Structure des Coûts
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {canvasData.costStructure.map((cost, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-sm">{cost}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Sources de Revenus
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {canvasData.revenueStreams.map((revenue, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm">{revenue}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Projections */}
        <Card className="shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <CardTitle className="flex items-center gap-2">
              <Coins className="h-5 w-5" />
              Projections Financières 2025-2029
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-5 gap-4">
              {financialProjections.map((projection, idx) => (
                <div key={idx} className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                  <div className="text-lg font-bold text-indigo-600">{projection.year}</div>
                  <div className="text-2xl font-bold text-purple-600 my-2">{projection.revenue}</div>
                  <div className="text-sm text-gray-600">{projection.users} utilisateurs</div>
                  <div className="text-sm text-green-600 font-semibold">Marge: {projection.margin}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strategic Advantages */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>🎯 Avantages Concurrentiels Uniques</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6 p-6">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-3xl mb-2">🕌</div>
              <h3 className="font-semibold mb-2">Monopole Religieux</h3>
              <p className="text-sm text-gray-600">Seul écosystème 100% conforme Sharia validé 150+ scholars</p>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-semibold mb-2">IA Éthique Pionnier</h3>
              <p className="text-sm text-gray-600">Première IA respectant Tawhid et Maslaha authentiques</p>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <div className="text-3xl mb-2">🌍</div>
              <h3 className="font-semibold mb-2">Portée Globale</h3>
              <p className="text-sm text-gray-600">78+ langues, 67 pays, 1.8+ milliard musulmans adressables</p>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="mt-8 text-center">
          <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:opacity-90">
            <DollarSign className="mr-2 h-5 w-5" />
            Télécharger Business Plan Complet
          </Button>
        </div>
      </div>
    </div>
  );
}