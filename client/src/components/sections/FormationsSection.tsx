import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Apple, Brain, Award, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const categoryIcons = {
  'programmation': Code,
  'dietetique': Apple,
  'ia-domains': Brain,
  'certifications': Award,
};

const categoryColors = {
  'programmation': 'bg-primary-100 text-primary-600 group-hover:bg-primary-200',
  'dietetique': 'bg-green-100 text-green-600 group-hover:bg-green-200',
  'ia-domains': 'bg-secondary-100 text-secondary-600 group-hover:bg-secondary-200',
  'certifications': 'bg-accent-100 text-accent-600 group-hover:bg-accent-200',
};

const categoryTitles = {
  'programmation': 'Programmation',
  'dietetique': 'Diététique',
  'ia-domains': '10 Domaines IA',
  'certifications': 'Certifications',
};

const categoryDescriptions = {
  'programmation': 'Maîtrisez les langages de programmation modernes avec une approche éthique et durable.',
  'dietetique': 'Nutrition responsable et alimentation durable pour un mode de vie équilibré.',
  'ia-domains': 'Explorez les applications de l\'IA dans 10 domaines professionnels différents.',
  'certifications': 'Obtenez des certifications reconnues en IA éthique et technologies responsables.',
};

export function FormationsSection() {
  const { data: courses, isLoading } = useQuery({
    queryKey: ['/api/courses'],
  });

  // Group courses by category and count them
  const coursesByCategory = courses?.reduce((acc: Record<string, number>, course: any) => {
    acc[course.category] = (acc[course.category] || 0) + 1;
    return acc;
  }, {}) || {};

  const categories = ['programmation', 'dietetique', 'ia-domains', 'certifications'];

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Formations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Développez vos compétences avec nos formations certifiantes en IA responsable, 
              programmation éthique et technologies durables.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="formations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Formations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Développez vos compétences avec nos formations certifiantes en IA responsable, 
            programmation éthique et technologies durables.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            const iconColorClass = categoryColors[category as keyof typeof categoryColors];
            const title = categoryTitles[category as keyof typeof categoryTitles];
            const description = categoryDescriptions[category as keyof typeof categoryDescriptions];
            const courseCount = coursesByCategory[category] || 0;
            
            return (
              <Link href={`/formations/${category}`} key={category}>
                <Card className="hover:shadow-xl transition-shadow cursor-pointer group border border-gray-100">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${iconColorClass}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-3">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-primary-600 bg-primary-50">
                        {courseCount} cours{courseCount > 1 ? 's' : ''}
                      </Badge>
                      <ArrowRight className="h-4 w-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
