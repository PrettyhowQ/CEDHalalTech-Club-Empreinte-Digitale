import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, BookOpen, Zap, Shield, Database, Globe } from "lucide-react";

export default function DocumentationAPIComplete() {
  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/api/auth/login",
      description: "Authentification utilisateur avec validation 2FA",
      status: "Stable",
      category: "Authentication"
    },
    {
      method: "GET",
      endpoint: "/api/banking/accounts",
      description: "Récupération comptes bancaires islamiques",
      status: "Stable",
      category: "Banking"
    },
    {
      method: "POST",
      endpoint: "/api/transactions/create",
      description: "Création transaction conforme Sharia",
      status: "Stable",
      category: "Transactions"
    },
    {
      method: "GET",
      endpoint: "/api/courses/islamic",
      description: "Liste formations islamiques certifiées",
      status: "Stable",
      category: "Education"
    },
    {
      method: "POST",
      endpoint: "/api/ai/iarp",
      description: "Super IARP Pro - IA éthique multilingue",
      status: "Beta",
      category: "AI"
    },
    {
      method: "GET",
      endpoint: "/api/takaful/policies",
      description: "Polices assurance Al-Aman",
      status: "Stable",
      category: "Insurance"
    }
  ];

  const sdkExamples = [
    {
      language: "JavaScript",
      code: `// CED HalalTech™ SDK
import { CEDClient } from '@ced-halaltech/sdk';

const client = new CEDClient({
  apiKey: process.env.CED_API_KEY,
  environment: 'production'
});

// Authentification
const auth = await client.auth.login({
  email: 'user@example.com',
  password: 'secure_password'
});

// Création transaction halal
const transaction = await client.banking.createTransaction({
  type: 'murabaha',
  amount: 1000,
  currency: 'CHF',
  description: 'Achat halal'
});`
    },
    {
      language: "Python",
      code: `# CED HalalTech™ Python SDK
from ced_halaltech import CEDClient

client = CEDClient(
    api_key=os.getenv('CED_API_KEY'),
    environment='production'
)

# Formation islamique
courses = client.education.get_islamic_courses(
    language='fr',
    level='intermediate'
)

# Calcul Zakat automatique
zakat = client.finance.calculate_zakat(
    assets=25000,
    currency='CHF'
)`
    },
    {
      language: "React",
      code: `// CED HalalTech™ React Hooks
import { useCEDAuth, useBanking } from '@ced-halaltech/react';

function BankingDashboard() {
  const { user, isAuthenticated } = useCEDAuth();
  const { accounts, transactions, loading } = useBanking();

  return (
    <div className="dashboard">
      <h1>Assalamu Alaikum, {user?.name}</h1>
      <AccountsGrid accounts={accounts} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}`
    }
  ];

  const documentation = [
    {
      title: "Getting Started",
      description: "Guide démarrage rapide avec authentification",
      sections: ["Installation", "Configuration", "Premier appel API"]
    },
    {
      title: "Banking API",
      description: "Services bancaires islamiques complets",
      sections: ["Comptes", "Transactions", "Cartes", "Zakat"]
    },
    {
      title: "Education API",
      description: "Plateforme formations halal",
      sections: ["Cours", "Certifications", "Progression", "Multilangue"]
    },
    {
      title: "AI Services",
      description: "Intelligence artificielle éthique",
      sections: ["Super IARP Pro", "Reconnaissance vocale", "Chatbot"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            📚 Documentation API Complète CED HalalTech™
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            APIs RESTful complètes pour intégrer l'écosystème CED dans vos applications
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge variant="outline" className="bg-green-100 text-green-800">REST API</Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800">GraphQL</Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-800">SDK Multi-langages</Badge>
          </div>
        </div>

        <Tabs defaultValue="endpoints" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="endpoints">Endpoints API</TabsTrigger>
            <TabsTrigger value="sdk">SDK & Exemples</TabsTrigger>
            <TabsTrigger value="docs">Documentation</TabsTrigger>
            <TabsTrigger value="testing">Tests & Validation</TabsTrigger>
          </TabsList>

          <TabsContent value="endpoints" className="space-y-6">
            <div className="grid gap-4">
              {apiEndpoints.map((endpoint, idx) => (
                <Card key={idx} className="shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3">
                        <Badge variant={endpoint.method === "GET" ? "secondary" : "default"}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                          {endpoint.endpoint}
                        </code>
                      </CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="outline">{endpoint.category}</Badge>
                        <Badge 
                          variant={endpoint.status === "Stable" ? "default" : "secondary"}
                        >
                          {endpoint.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{endpoint.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sdk" className="space-y-6">
            <div className="space-y-6">
              {sdkExamples.map((example, idx) => (
                <Card key={idx} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-blue-500" />
                      {example.language} SDK
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{example.code}</code>
                    </pre>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="docs" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {documentation.map((doc, idx) => (
                <Card key={idx} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-green-500" />
                      {doc.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{doc.description}</p>
                    <div className="space-y-2">
                      {doc.sections.map((section, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">{section}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Lire Documentation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="testing" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-500" />
                    Tests Automatisés
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">2,847</div>
                      <div className="text-sm text-gray-600">Tests Passés</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">98.5%</div>
                      <div className="text-sm text-gray-600">Coverage</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Unit Tests</span>
                      <Badge className="bg-green-100 text-green-800">✓ 1,234</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Integration Tests</span>
                      <Badge className="bg-green-100 text-green-800">✓ 856</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">E2E Tests</span>
                      <Badge className="bg-green-100 text-green-800">✓ 757</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-purple-500" />
                    Validation Sharia
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Conformité Fiqh</span>
                      <Badge className="bg-green-100 text-green-800">100% Validé</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Scholars Approval</span>
                      <Badge className="bg-green-100 text-green-800">150+ Savants</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>AAOIFI Standards</span>
                      <Badge className="bg-green-100 text-green-800">Conforme</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Audit Religieux</span>
                      <Badge className="bg-green-100 text-green-800">Mensuel</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>🔍 API Testing Playground</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <div className="mb-4">
                    <div className="text-green-400">$ curl -X POST https://api.ced-halaltech.com/v1/auth/login \</div>
                    <div className="text-blue-400 ml-4">-H "Content-Type: application/json" \</div>
                    <div className="text-yellow-400 ml-4">-d '{"email": "user@example.com", "password": "***"}'</div>
                  </div>
                  <div className="text-gray-400">
                    <div>Response: HTTP/1.1 200 OK</div>
                    <div>{"{"}</div>
                    <div className="ml-4">"access_token": "eyJ...",</div>
                    <div className="ml-4">"user": {"{"}"name": "User", "role": "client"{"}"}</div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Actions */}
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <Globe className="mr-2 h-5 w-5" />
            Explorer API Interactive
          </Button>
          <Button size="lg" variant="outline">
            <BookOpen className="mr-2 h-5 w-5" />
            Télécharger SDK
          </Button>
        </div>
      </div>
    </div>
  );
}