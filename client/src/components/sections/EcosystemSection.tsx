import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Brain, Store, Sun, ArrowRight, Laptop, Anchor, Hammer, Home } from 'lucide-react';

export function EcosystemSection() {
  const { data: products } = useQuery({
    queryKey: ['/api/products'],
  });

  const productCategories = [
    { icon: Laptop, name: 'Informatique' },
    { icon: Anchor, name: 'Équipement marin' },
    { icon: Hammer, name: 'Construction' },
    { icon: Home, name: 'Maison & Jardin' },
  ];

  return (
    <section id="boutique" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Écosystème Solidaire</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre réseau de partenaires et notre boutique solidaire Costa del Sol contribuent 
            à une économie circulaire et responsable.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* PrettyhowQ & HeardPower */}
          <Card className="bg-gradient-to-br from-accent-50 to-accent-100 border-accent-200">
            <CardHeader>
              <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="text-white h-8 w-8" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                PrettyhowQ & HeardPower
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Technologies d'intelligence du cœur pour une IA responsable et une écoute empathique 
                des besoins humains et environnementaux.
              </p>
              <Button variant="ghost" className="text-accent-600 hover:text-accent-700 p-0">
                <span>En savoir plus</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Boutique Solidaire */}
          <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
            <CardHeader>
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6">
                <Store className="text-white h-8 w-8" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Boutique Solidaire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Équipements reconditionnés, outils professionnels et matériel marin. 
                Économie circulaire au service de la solidarité.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {productCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                      <Icon className="text-primary-500 h-4 w-4" />
                      <span>{category.name}</span>
                    </div>
                  );
                })}
              </div>
              <Button variant="ghost" className="text-primary-600 hover:text-primary-700 p-0">
                <span>Visiter la boutique</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Costa del Sol */}
          <Card className="bg-gradient-to-br from-secondary-50 to-secondary-100 border-secondary-200">
            <CardHeader>
              <div className="w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center mb-6">
                <Sun className="text-white h-8 w-8" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Costa del Sol
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Centre de reconditionnement et hub logistique pour notre économie circulaire. 
                Partenariat local avec les pêcheurs et artisans.
              </p>
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Équipements traités</span>
                  <span className="font-semibold text-secondary-600">1,240+</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <Button variant="ghost" className="text-secondary-600 hover:text-secondary-700 p-0">
                <span>Découvrir</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
