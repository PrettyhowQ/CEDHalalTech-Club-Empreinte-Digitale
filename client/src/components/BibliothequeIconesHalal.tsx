import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BibliothequeIconesHalal() {
  const iconCategories = [
    {
      id: "finance",
      title: "Finance & Comptabilité (Halal)",
      description: "Icônes pour système financier 100% conforme Sharia",
      icons: [
        { icon: "📊", usage: "Tableau financier", description: "États, dashboards", fr: "Tableau", en: "Financial report", ar: "جدول مالي" },
        { icon: "🧮", usage: "Calculs", description: "Comptabilité, Zakat calc", fr: "Calculs", en: "Calculations", ar: "حسابات" },
        { icon: "📅", usage: "Prévisions datées", description: "Budget mensuel/annuel", fr: "Calendrier", en: "Calendar", ar: "تقويم" },
        { icon: "💼", usage: "Dossier pro", description: "Comptable, cabinet", fr: "Dossier", en: "Portfolio / Ledger", ar: "ملف مهني" },
        { icon: "💡", usage: "Projection intelligente", description: "Sans divination", fr: "Projection", en: "Forecast Insight", ar: "رؤية تقديرية" },
        { icon: "✅", usage: "Validation", description: "Budget approuvé", fr: "Validé", en: "Approved", ar: "تم اعتماد" },
      ],
      combo: "📊🧮📅💼💡",
      comboDescription: "Combo prévisionnel halal complet"
    },
    {
      id: "ethique",
      title: "Éthique, Contrats & Protection",
      description: "Protection juridique et conformité Sharia",
      icons: [
        { icon: "🛡️", usage: "Licence, protection données", description: "RGPD/LPD conforme", fr: "Protection", en: "Protection", ar: "حماية" },
        { icon: "📜", usage: "Contrat, charte", description: "Conditions d'usage", fr: "Contrat", en: "Contract", ar: "عقد" },
        { icon: "✍️", usage: "Signature numérique", description: "Autorisée islamiquement", fr: "Signature", en: "Signature", ar: "توقيع" },
        { icon: "✅", usage: "Clause validée", description: "Conforme Fiqh", fr: "Validé", en: "Validated", ar: "مُصدَّق" },
        { icon: "🚫", usage: "Interdit / non conforme", description: "Riba, usage haram", fr: "Interdit", en: "Forbidden", ar: "ممنوع" },
      ]
    },
    {
      id: "apprentissage",
      title: "Apprentissage, Formations & Diplômes",
      description: "Éducation et certifications islamiques",
      icons: [
        { icon: "🎓", usage: "Certification, diplôme", description: "Obtenu avec mérite", fr: "Diplôme", en: "Certificate", ar: "شهادة" },
        { icon: "📘", usage: "Cours, module", description: "Formation structurée", fr: "Cours", en: "Course", ar: "دورة" },
        { icon: "🧠", usage: "Compétences, savoir", description: "Intelligence développée", fr: "Compétences", en: "Skills", ar: "مهارات" },
        { icon: "🧭", usage: "Orientation professionnelle", description: "Guidance éthique", fr: "Orientation", en: "Guidance", ar: "توجيه" },
        { icon: "📈", usage: "Progression", description: "Niveau atteint", fr: "Progression", en: "Progress", ar: "تقدم" },
        { icon: "⭐", usage: "Excellence", description: "Méritée, non-idolâtre", fr: "Excellence", en: "Excellence", ar: "تميز" },
      ]
    },
    {
      id: "productivite",
      title: "Productivité, Planification & Pomodoro",
      description: "Organisation du temps selon principes islamiques",
      icons: [
        { icon: "⏱️", usage: "Pomodoro / Timer", description: "Gestion temps bénie", fr: "Minuteur", en: "Timer", ar: "مؤقت" },
        { icon: "📅", usage: "Planning général", description: "Organisation quotidienne", fr: "Planning", en: "Schedule", ar: "جدولة" },
        { icon: "✅", usage: "Tâche complétée", description: "Accomplie avec Baraka", fr: "Complété", en: "Completed", ar: "مكتمل" },
        { icon: "🗂️", usage: "Organisation dossiers", description: "Classement méthodique", fr: "Organisation", en: "Organization", ar: "تنظيم" },
        { icon: "🔁", usage: "Cycle / récurrence", description: "Routine spirituelle", fr: "Cycle", en: "Cycle", ar: "دورة" },
        { icon: "📌", usage: "Priorité épinglée", description: "Importante selon Maslaha", fr: "Priorité", en: "Priority", ar: "أولوية" },
      ]
    },
    {
      id: "communaute",
      title: "Communauté, Partenaires & Collaboration",
      description: "Relations basées sur Ukhuwah et Ta'awun",
      icons: [
        { icon: "🤝", usage: "Accord, partenariat", description: "Halal et éthique", fr: "Partenariat", en: "Partnership", ar: "شراكة" },
        { icon: "🗣️", usage: "Discussion / feedback", description: "Échange constructif", fr: "Discussion", en: "Discussion", ar: "نقاش" },
        { icon: "👥", usage: "Groupe / famille", description: "Communauté test", fr: "Groupe", en: "Group", ar: "مجموعة" },
        { icon: "🌍", usage: "International", description: "Multilingue global", fr: "International", en: "International", ar: "دولي" },
        { icon: "💬", usage: "Messagerie interne", description: "Communication directe", fr: "Messages", en: "Messages", ar: "رسائل" },
        { icon: "📣", usage: "Annonces officielles", description: "Communications importantes", fr: "Annonces", en: "Announcements", ar: "إعلانات" },
      ]
    },
    {
      id: "securite",
      title: "Sécurité, Données & Infrastructure",
      description: "Protection technique selon Amanah",
      icons: [
        { icon: "🔐", usage: "Chiffrement", description: "Accès sécurisé", fr: "Sécurité", en: "Security", ar: "أمان" },
        { icon: "🗄️", usage: "Base de données", description: "Archive protégée", fr: "Base données", en: "Database", ar: "قاعدة بيانات" },
        { icon: "🖥️", usage: "Serveur / plateforme", description: "Infrastructure tech", fr: "Serveur", en: "Server", ar: "خادم" },
        { icon: "🇨🇭", usage: "Hébergement Suisse", description: "Conformité LPD", fr: "Suisse", en: "Switzerland", ar: "سويسرا" },
        { icon: "🧭", usage: "Compliance", description: "Conformité directionnelle", fr: "Conformité", en: "Compliance", ar: "امتثال" },
        { icon: "⚙️", usage: "Paramètres techniques", description: "Configuration système", fr: "Paramètres", en: "Settings", ar: "إعدادات" },
      ]
    },
    {
      id: "spiritualite",
      title: "Spiritualité & Services Islamiques",
      description: "Utilisés avec respect et intention claire",
      icons: [
        { icon: "🕌", usage: "Mosquée / Spiritualité", description: "Lieux de culte", fr: "Mosquée", en: "Mosque", ar: "مسجد" },
        { icon: "📿", usage: "Dhikr / Invocations", description: "Rappel spirituel", fr: "Dhikr", en: "Dhikr", ar: "ذكر" },
        { icon: "📖", usage: "Coran / Lecture", description: "Récitation sacrée", fr: "Coran", en: "Quran", ar: "قرآن" },
        { icon: "🤲", usage: "Dua / Prière", description: "Invocation à Allah", fr: "Prière", en: "Prayer", ar: "دعاء" },
        { icon: "🌙", usage: "Calendrier Hijri", description: "Dates islamiques", fr: "Calendrier", en: "Calendar", ar: "تقويم هجري" },
        { icon: "⭐", usage: "Excellence spirituelle", description: "Ihsan dans l'adoration", fr: "Ihsan", en: "Excellence", ar: "إحسان" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            📚 Bibliothèque d'Icônes Halal - Version 1.0
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Collection complète d'icônes conformes aux valeurs islamiques pour Figma Pro, Norton Pro et tous vos projets de design éthique
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <Badge variant="outline" className="text-green-700 border-green-300">
              100% Halal Certifié
            </Badge>
            <Badge variant="outline" className="text-blue-700 border-blue-300">
              Respectueux des Valeurs Islamiques
            </Badge>
            <Badge variant="outline" className="text-purple-700 border-purple-300">
              Compatible Figma Pro
            </Badge>
          </div>
        </div>

        {/* Combo Prévisionnel Halal Mis en Évidence */}
        <Card className="mb-8 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 flex items-center gap-3">
              ⭐ Combo Prévisionnel Halal Recommandé
            </CardTitle>
            <CardDescription className="text-green-700">
              Alternative éthique aux symboles de divination - Planification financière conforme Sharia
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-6 rounded-lg border border-green-200 text-center">
              <div className="text-6xl mb-4">📊🧮📅💼💡</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Prévisionnel Halal Complet
              </h3>
              <p className="text-gray-600">
                Tableaux financiers + Calculs + Calendrier + Dossier professionnel + Projection intelligente
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Catégories d'Icônes */}
        <Tabs defaultValue="finance" className="w-full">
          <TabsList className="grid grid-cols-3 lg:grid-cols-7 w-full mb-6">
            {iconCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs">
                {category.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {iconCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.icons.map((iconData, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="text-center">
                          <div className="text-4xl mb-3">{iconData.icon}</div>
                          <h4 className="font-semibold text-gray-800 mb-2">{iconData.usage}</h4>
                          <p className="text-sm text-gray-600 mb-3">{iconData.description}</p>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div>
                              <span className="font-medium text-blue-700">FR:</span>
                              <p className="text-gray-600">{iconData.fr}</p>
                            </div>
                            <div>
                              <span className="font-medium text-green-700">EN:</span>
                              <p className="text-gray-600">{iconData.en}</p>
                            </div>
                            <div>
                              <span className="font-medium text-purple-700">AR:</span>
                              <p className="text-gray-600 font-arabic">{iconData.ar}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {category.combo && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Combo Recommandé:</h4>
                      <div className="text-3xl mb-2">{category.combo}</div>
                      <p className="text-green-700">{category.comboDescription}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Guide d'Usage */}
        <Card className="mt-8 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">
              📋 Guide d'Usage pour Designers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">✅ Recommandations</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Utilisez 1 icône principale par module</li>
                  <li>• Ajoutez 1-2 icônes de soutien si nécessaire</li>
                  <li>• Respectez l'intention spirituelle</li>
                  <li>• Privilégiez la clarté et la simplicité</li>
                  <li>• Testez la compréhension interculturelle</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-3">🚫 À Éviter</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Usage décoratif superficiel</li>
                  <li>• Accumulation excessive d'icônes</li>
                  <li>• Détournement du sens spirituel</li>
                  <li>• Mélange avec symboles non-halal</li>
                  <li>• Usage sans contextualisation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">
            Bibliothèque d'Icônes Halal - Conçue pour respecter les valeurs islamiques authentiques
          </p>
          <p className="text-sm">
            Compatible avec Figma Pro, Norton Pro et tous outils de design professionnel
          </p>
        </div>
      </div>
    </div>
  );
}