import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HalalTechMarketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const halalProducts = [
    {
      id: 1,
      name: "CED Banking API",
      category: "finance",
      price: "2,500 CHF/mois",
      description: "API bancaire 100% halal avec conformité Sharia intégrée",
      features: ["0% Riba", "Validation Fiqh", "Multi-devises", "Temps réel"],
      certification: "AAOIFI Certifié",
      popularity: 94,
      icon: "🏦"
    },
    {
      id: 2,
      name: "Assistant IA Aïcha Al-Aman",
      category: "ai",
      price: "890 CHF/mois",
      description: "Intelligence artificielle éthique validée 150+ scholars",
      features: ["78 langues", "Fiqh intégré", "Mode prière", "Guidance spirituelle"],
      certification: "Scholars Validé",
      popularity: 98,
      icon: "🤖"
    },
    {
      id: 3,
      name: "HalalCloud Infrastructure",
      category: "cloud",
      price: "1,200 CHF/mois",
      description: "Hébergement souverain dans pays musulmans exclusivement",
      features: ["Pays musulmans", "Chiffrement Quranic", "99.99% uptime", "RGPD+Sharia"],
      certification: "OIC Compliant",
      popularity: 87,
      icon: "☁️"
    },
    {
      id: 4,
      name: "E-commerce Halal Suite",
      category: "ecommerce",
      price: "1,890 CHF/mois",
      description: "Plateforme e-commerce conforme aux règles islamiques",
      features: ["Produits halal", "Paiement Murabaha", "Zakat auto", "Filtres Sharia"],
      certification: "Halal Certifié",
      popularity: 91,
      icon: "🛒"
    },
    {
      id: 5,
      name: "Islamic Learning Management",
      category: "education",
      price: "650 CHF/mois",
      description: "Système éducatif avec méthodologie islamique authentique",
      features: ["Ijaza numérique", "Halaqah virtuelle", "Progress Barakah", "Multilingual"],
      certification: "Al-Azhar Validé",
      popularity: 89,
      icon: "📚"
    },
    {
      id: 6,
      name: "Halal Cybersecurity Shield",
      category: "security",
      price: "3,200 CHF/mois",
      description: "Protection cybersécurité avec principes Hifz et Amanah",
      features: ["Protection Amanah", "Détection Haram", "Audit Sharia", "24/7 Monitor"],
      certification: "ISO+Islamic",
      popularity: 93,
      icon: "🛡️"
    }
  ];

  const categories = [
    { id: "all", name: "Tous les produits", icon: "🏢" },
    { id: "finance", name: "Finance Islamique", icon: "🏦" },
    { id: "ai", name: "IA Éthique", icon: "🤖" },
    { id: "cloud", name: "Cloud Halal", icon: "☁️" },
    { id: "ecommerce", name: "E-commerce", icon: "🛒" },
    { id: "education", name: "Éducation", icon: "📚" },
    { id: "security", name: "Cybersécurité", icon: "🛡️" }
  ];

  const filteredProducts = halalProducts.filter(product => 
    (selectedCategory === "all" || product.category === selectedCategory) &&
    (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     product.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">🏪</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            HalalTech™ Marketplace
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Premier marché mondial de solutions technologiques 100% halal
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <Badge className="bg-emerald-500 text-white px-4 py-2">
              ✅ Certifié AAOIFI
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2">
              🔒 Conforme RGPD + Sharia
            </Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2">
              🌍 150+ Scholars Validés
            </Badge>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <Input
              placeholder="Rechercher un produit halal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-lg p-4"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-4 rounded-lg border bg-white text-lg min-w-[200px]"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">🏪</div>
              <div className="text-3xl font-bold">127</div>
              <div className="text-sm opacity-90">Produits Halal</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">🌍</div>
              <div className="text-3xl font-bold">67</div>
              <div className="text-sm opacity-90">Pays Couverts</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-violet-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">👥</div>
              <div className="text-3xl font-bold">89,456</div>
              <div className="text-sm opacity-90">Développeurs Actifs</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">💰</div>
              <div className="text-3xl font-bold">12.4B</div>
              <div className="text-sm opacity-90">CHF Transigés</div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <Card key={product.id} className="bg-white shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 hover:border-emerald-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="text-6xl">{product.icon}</div>
                  <Badge className="bg-green-500 text-white">
                    {product.certification}
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  {product.name}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-emerald-600">
                    {product.price}
                  </div>
                  <Badge variant="outline" className="ml-auto">
                    {product.popularity}% satisfaction
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-lg">
                  {product.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Fonctionnalités:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        ✓ {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white text-lg py-3">
                    Essai Gratuit 30 jours
                  </Button>
                  <Button variant="outline" className="w-full text-lg py-3">
                    Voir Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact & Support */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">
                Besoin d'un produit personnalisé ?
              </h3>
              <p className="text-xl mb-6">
                Notre équipe développe des solutions sur mesure 100% conformes Sharia
              </p>
              <div className="flex flex-col lg:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8">
                  📧 yakoubi.yamina@ik.me
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8">
                  📞 Consultation Gratuite
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center py-6 border-t">
          <p className="text-gray-600">
            © 2025 HalalTech™ Marketplace - Yakoubi Yamina | Club Empreinte Digitale
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Première marketplace technologique 100% conforme Sharia au monde
          </p>
        </div>
      </div>
    </div>
  );
};

export default HalalTechMarketplace;

<footer>
  <p><strong>🛡️ Protection & Licence</strong><br>
  Utilisation exclusivement halal – Toute exploitation commerciale nécessite accord écrit.<br>
  Licence éthique en conformité avec les valeurs islamiques.</p>
  <p>© Yakoubi Yamina – Tous droits réservés | <strong>CED HalalTech™ certifié mondialement</strong></p>
  <p>🇨🇭 Données hébergées en Suisse – Serveurs ISO 27001 & ISO 14001 (Infomaniak SA, Genève)</p>
  <p>Conforme RGPD (UE) & LPD (Suisse) – Usage éthique & halal uniquement</p>
  <p><em>جميع الحقوق محفوظة | All rights reserved | 版权所有</em></p>
  <p><em>CED HalalTech™ – Technologie 100% Halal • Certifiée et protégée mondialement</em><br>
  Écosystème révolutionnaire conforme aux valeurs islamiques authentiques</p>
</footer>

    