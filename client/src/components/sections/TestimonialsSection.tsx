import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ['/api/testimonials'],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages</h2>
            <p className="text-xl text-gray-600">Ce que disent nos apprenants sur leur expérience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="ressources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages</h2>
          <p className="text-xl text-gray-600">Ce que disent nos apprenants sur leur expérience</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials?.slice(0, 3).map((testimonial: any) => (
            <Card key={testimonial.id} className="bg-gray-50 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.imageUrl} alt={`Portrait de ${testimonial.name}`} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {testimonial.content}
                </p>
                <div className="flex text-accent-500">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          )) || [
            // Fallback testimonials if none in database
            {
              id: 1,
              name: 'Sarah Chen',
              role: 'Développeuse IA',
              content: 'Les formations en IA éthique m\'ont permis de développer des solutions responsables. Le Chat IARP multilingue est révolutionnaire pour l\'accessibilité.',
              rating: 5,
              imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b047?w=100&h=100&fit=crop&crop=face',
            },
            {
              id: 2,
              name: 'Marcus Johnson',
              role: 'Consultant RSE',
              content: 'L\'approche éthique de PrettyhowQ transforme vraiment la façon dont nous pensons la technologie. Les 78 langues supportées sont impressionnantes.',
              rating: 5,
              imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
            },
            {
              id: 3,
              name: 'Amira Benali',
              role: 'Entrepreneur sociale',
              content: 'En tant que malvoyante, l\'accessibilité du Chat IARP a complètement changé mon expérience d\'apprentissage. Innovation remarquable !',
              rating: 5,
              imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
            },
          ].map((testimonial) => (
            <Card key={testimonial.id} className="bg-gray-50 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.imageUrl} alt={`Portrait de ${testimonial.name}`} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {testimonial.content}
                </p>
                <div className="flex text-accent-500">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
