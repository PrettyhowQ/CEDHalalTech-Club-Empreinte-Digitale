import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, BookOpen, User } from 'lucide-react';

interface SupervisionBannerProps {
  showWarning?: boolean;
  showScholar?: boolean;
  compact?: boolean;
}

export default function SupervisionBanner({ showWarning = true, showScholar = true, compact = false }: SupervisionBannerProps) {
  if (compact) {
    return (
      <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-4">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-green-600" />
          <span className="text-sm font-medium text-green-800">
            Supervisé par Sheikh Dr. Muhammad Al-Jazairi (École Hanbali)
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 mb-6">
      
      {/* Avertissement IA Non-Mufti */}
      {showWarning && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-2">
                <p className="font-bold text-red-800">⚠️ AVERTISSEMENT RELIGIEUX</p>
                <p className="text-sm text-red-700">
                  Cette application utilise une intelligence artificielle éducative, mais <strong>elle ne remplace en aucun cas un savant qualifié ni une fatwa personnalisée</strong>.
                </p>
                <p className="text-sm text-red-700">
                  En cas de doute religieux ou de situation personnelle spécifique, merci de consulter un érudit reconnu dans votre pays ou école juridique.
                </p>
                <p className="text-sm italic text-red-800">
                  <em>La responsabilité religieuse reste individuelle devant Allah سبحانه وتعالى.</em>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Section Supervision */}
      {showScholar && (
        <div className="supervision bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-green-700" />
              <h3 className="font-semibold text-green-800">🎓 Supervision religieuse</h3>
            </div>
          </div>
          
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-green-600" />
              <p className="text-sm">
                Contenu vérifié par : <strong>Sheikh Dr. Muhammad Al-Jazairi</strong> – École Hanbali (الحنبلي), Université Imam Muhammad ibn Saud
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline" className="text-xs">Coran</Badge>
              <Badge variant="outline" className="text-xs">Sahih Bukhari</Badge>
              <Badge variant="outline" className="text-xs">Sahih Muslim</Badge>
              <Badge variant="outline" className="text-xs">4 Écoles Juridiques</Badge>
            </div>
            
            <p className="text-xs italic text-green-700 mt-2">
              <em>Sources utilisées : Coran, Hadiths sahih, avis majoritaires des quatre écoles de jurisprudence.</em>
            </p>
            
            <div className="border-t border-green-200 pt-2 mt-3">
              <small className="text-xs text-green-600">
                Application développée par Yakoubi Yamina – CED HalalTech™
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}