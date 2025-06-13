import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Sun, Brain, Recycle, BookOpen } from 'lucide-react';

export function IAEthiqueSection() {
  const ethicsTopics = [
    {
      icon: Leaf,
      title: 'Technologie Verte',
      description: 'Innovation technologique respectueuse de l\'environnement',
      color: 'bg-green-100 text-green-600 group-hover:bg-green-200',
    },
    {
      icon: Sun,
      title: 'Énergies Renouvelables',
      description: 'Solutions énergétiques durables et accessibles',
      color: 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-200',
    },
    {
      icon: Brain,
      title: 'IA Responsable',
      description: 'Développement éthique de l\'intelligence artificielle',
      color: 'bg-blue-100 text-blue-600 group-hover:bg-blue-200',
    },
    {
      icon: Recycle,
      title: 'Économie Circulaire',
      description: 'Modèles économiques durables et regeneratifs',
      color: 'bg-purple-100 text-purple-600 group-hover:bg-purple-200',
    },
  ];

  const ethicsPrinciples = [
    { color: 'bg-primary-500', principle: 'Transparence algorithmique' },
    { color: 'bg-secondary-500', principle: 'Non-discrimination' },
    { color: 'bg-accent-500', principle: 'Souveraineté des données' },
    { color: 'bg-green-500', principle: 'Durabilité environnementale' },
    { color: 'bg-purple-500', principle: 'Accessibilité universelle' },
  ];

  const resourcesStats = [
    { count: '150+', label: 'Guides pratiques', color: 'text-primary-600' },
    { count: '89', label: 'Études de cas', color: 'text-secondary-600' },
    { count: '52', label: 'Webinaires', color: 'text-accent-500' },
    { count: '320+', label: 'Articles blog', color: 'text-green-600' },
  ];

  return (
    <section id="ia-ethique" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">IA Éthique & Durable</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos innovations en technologie verte, énergies renouvelables et économie circulaire 
            guidées par les principes de l'IA responsable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ethicsTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Card 
                key={index} 
                className="hover:border-primary-300 transition-colors cursor-pointer group border border-gray-100"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${topic.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{topic.title}</h3>
                  <p className="text-sm text-gray-600">{topic.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Ethics Resources Hub */}
        <Card className="shadow-xl border border-gray-100">
          <CardContent className="p-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Centre de Ressources IA Éthique
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Accédez à notre bibliothèque complète de guides, études de cas et webinaires 
                  sur l'intelligence artificielle responsable.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {resourcesStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold ${stat.color}`}>
                        {stat.count}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Accéder aux ressources
                </Button>
              </div>
              
              <div className="mt-8 lg:mt-0">
                {/* Ethics principles visualization */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Nos Principes Éthiques</h4>
                  <div className="space-y-3">
                    {ethicsPrinciples.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 ${item.color} rounded-full`} />
                        <span className="text-sm text-gray-700">{item.principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
