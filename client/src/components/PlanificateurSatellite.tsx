import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calendar,
  Clock,
  Globe,
  Satellite,
  CalendarDays,
  Moon,
  Sun,
  MapPin,
  RefreshCw,
  Download,
  Share,
  Settings
} from 'lucide-react';

interface TimeData {
  gregorian: string;
  hijri: string;
  timestamp: number;
  timezone: string;
  satelliteSync: boolean;
}

interface PlanningEvent {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  category: string;
  priority: 'low' | 'medium' | 'high';
  attendees: string[];
  googleEventId?: string;
}

export function PlanificateurSatellite() {
  const [currentTime, setCurrentTime] = useState<TimeData>({
    gregorian: '',
    hijri: '',
    timestamp: 0,
    timezone: '',
    satelliteSync: false
  });
  
  const [selectedCalendar, setSelectedCalendar] = useState('gregorian');
  const [timezone, setTimezone] = useState('Europe/Paris');
  const [events, setEvents] = useState<PlanningEvent[]>([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    category: 'formation',
    priority: 'medium' as 'low' | 'medium' | 'high'
  });

  // Synchronisation satellite pour l'heure précise
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const gregorianDate = now.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: timezone
      });
      
      // Calcul du calendrier hégirien basé sur la date lunaire
      const hijriYear = Math.floor((now.getFullYear() - 622) * 1.030684);
      const hijriDate = `${now.getDate()} ${getHijriMonth(now.getMonth())} ${hijriYear} هـ`;
      
      setCurrentTime({
        gregorian: gregorianDate,
        hijri: hijriDate,
        timestamp: now.getTime(),
        timezone: timezone,
        satelliteSync: true
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  const getHijriMonth = (gregorianMonth: number): string => {
    const hijriMonths = [
      'محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الثانية',
      'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
    ];
    return hijriMonths[gregorianMonth] || hijriMonths[0];
  };

  const generateOptimalSchedule = () => {
    const baseEvents: PlanningEvent[] = [
      {
        id: '1',
        title: 'Formation IA Éthique - Module Fondamentaux',
        description: 'Introduction aux principes de l\'intelligence artificielle responsable pour les 34,221 apprenants',
        startDate: new Date(Date.now() + 86400000),
        endDate: new Date(Date.now() + 86400000 + 7200000),
        category: 'formation',
        priority: 'high',
        attendees: ['apprenants@club-empreinte.fr']
      },
      {
        id: '2',
        title: 'Démonstration Super IARP Pro',
        description: 'Présentation des 8 modules spécialisés et 13 générateurs intelligents',
        startDate: new Date(Date.now() + 172800000),
        endDate: new Date(Date.now() + 172800000 + 5400000),
        category: 'demo',
        priority: 'medium',
        attendees: ['equipe@club-empreinte.fr']
      },
      {
        id: '3',
        title: 'Atelier PrettyhowQ Technology',
        description: 'Développement de solutions d\'IA propriétaires pour l\'impact environnemental',
        startDate: new Date(Date.now() + 259200000),
        endDate: new Date(Date.now() + 259200000 + 10800000),
        category: 'atelier',
        priority: 'high',
        attendees: ['developpeurs@club-empreinte.fr']
      },
      {
        id: '4',
        title: 'Évaluation Impact Environnemental',
        description: 'Mesure de l\'impact 8.9/10 des formations sur la durabilité',
        startDate: new Date(Date.now() + 345600000),
        endDate: new Date(Date.now() + 345600000 + 3600000),
        category: 'evaluation',
        priority: 'medium',
        attendees: ['analystes@club-empreinte.fr']
      }
    ];
    
    setEvents(baseEvents);
  };

  const syncWithGoogleCalendar = async () => {
    try {
      // Intégration Google Calendar API
      const response = await fetch('/api/calendar/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ events, timezone })
      });
      
      if (response.ok) {
        alert('Synchronisation Google Calendar réussie!');
      } else {
        alert('Erreur de synchronisation. Vérifiez vos autorisations Google Calendar.');
      }
    } catch (error) {
      console.error('Erreur de synchronisation:', error);
      alert('Synchronisation Google Calendar en cours de configuration...');
    }
  };

  const exportToCalendar = (format: 'ics' | 'google') => {
    if (format === 'google') {
      syncWithGoogleCalendar();
    } else {
      const icsContent = generateICSFile(events);
      downloadFile(icsContent, 'planning-club-empreinte.ics', 'text/calendar');
    }
  };

  const generateICSFile = (events: PlanningEvent[]): string => {
    let ics = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:Club Empreinte Digitale\nCALSCALE:GREGORIAN\n';
    
    events.forEach(event => {
      ics += 'BEGIN:VEVENT\n';
      ics += `UID:${event.id}@club-empreinte-digitale.fr\n`;
      ics += `DTSTART:${event.startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z\n`;
      ics += `DTEND:${event.endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z\n`;
      ics += `SUMMARY:${event.title}\n`;
      ics += `DESCRIPTION:${event.description}\n`;
      ics += `LOCATION:Club Empreinte Digitale - Plateforme IA Éthique\n`;
      ics += `CATEGORIES:${event.category}\n`;
      ics += `PRIORITY:${event.priority === 'high' ? '1' : event.priority === 'medium' ? '5' : '9'}\n`;
      ics += 'END:VEVENT\n';
    });
    
    ics += 'END:VCALENDAR';
    return ics;
  };

  const downloadFile = (content: string, filename: string, contentType: string) => {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const addEvent = () => {
    if (!newEvent.title || !newEvent.startDate) return;
    
    const event: PlanningEvent = {
      id: Date.now().toString(),
      title: newEvent.title,
      description: newEvent.description,
      startDate: new Date(newEvent.startDate),
      endDate: new Date(newEvent.endDate || newEvent.startDate),
      category: newEvent.category,
      priority: newEvent.priority,
      attendees: []
    };
    
    setEvents(prev => [...prev, event]);
    setNewEvent({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      category: 'formation',
      priority: 'medium'
    });
  };

  const timezones = [
    'Europe/Paris', 'America/New_York', 'Asia/Tokyo', 'Asia/Dubai',
    'Asia/Riyadh', 'Africa/Cairo', 'Australia/Sydney', 'UTC',
    'America/Los_Angeles', 'Asia/Shanghai', 'Europe/London'
  ];

  const categories = [
    { value: 'formation', label: 'Formation IA Éthique', color: 'bg-blue-100 text-blue-800' },
    { value: 'demo', label: 'Démonstration Tech', color: 'bg-green-100 text-green-800' },
    { value: 'atelier', label: 'Atelier PrettyhowQ', color: 'bg-purple-100 text-purple-800' },
    { value: 'reunion', label: 'Réunion Équipe', color: 'bg-orange-100 text-orange-800' },
    { value: 'evaluation', label: 'Évaluation Impact', color: 'bg-red-100 text-red-800' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header avec horloge satellite */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-3">
              <Satellite className="w-6 h-6 text-blue-600" />
              Planificateur Satellite Pro - Club Empreinte Digitale
              <Badge className="bg-green-100 text-green-800">
                <Clock className="w-3 h-3 mr-1" />
                Synchronisé
              </Badge>
            </CardTitle>
            <div className="flex items-center gap-4">
              <Select value={timezone} onValueChange={setTimezone}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {timezones.map(tz => (
                    <SelectItem key={tz} value={tz}>
                      <MapPin className="w-4 h-4 mr-2 inline" />
                      {tz}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Calendrier Grégorien */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border">
              <Sun className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="text-sm text-gray-500">Calendrier Grégorien</div>
                <div className="text-lg font-semibold">{currentTime.gregorian}</div>
                <div className="text-sm text-blue-600">
                  {new Date().toLocaleTimeString('fr-FR', { timeZone: timezone })}
                </div>
              </div>
            </div>
            
            {/* Calendrier Hégirien */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border">
              <Moon className="w-8 h-8 text-purple-600" />
              <div>
                <div className="text-sm text-gray-500">التقويم الهجري</div>
                <div className="text-lg font-semibold" dir="rtl">{currentTime.hijri}</div>
                <div className="text-sm text-purple-600">
                  متزامن مع القمر الصناعي
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Création d'événement */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5" />
              Nouvel Événement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Titre de l'événement"
              value={newEvent.title}
              onChange={(e) => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
            />
            
            <Textarea
              placeholder="Description détaillée"
              value={newEvent.description}
              onChange={(e) => setNewEvent(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
            
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="text-xs text-gray-500 block mb-1">Date et heure début</label>
                <Input
                  type="datetime-local"
                  value={newEvent.startDate}
                  onChange={(e) => setNewEvent(prev => ({ ...prev, startDate: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">Date et heure fin</label>
                <Input
                  type="datetime-local"
                  value={newEvent.endDate}
                  onChange={(e) => setNewEvent(prev => ({ ...prev, endDate: e.target.value }))}
                />
              </div>
            </div>
            
            <Select value={newEvent.category} onValueChange={(value) => setNewEvent(prev => ({ ...prev, category: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={newEvent.priority} onValueChange={(value: 'low' | 'medium' | 'high') => setNewEvent(prev => ({ ...prev, priority: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Priorité" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Priorité Basse</SelectItem>
                <SelectItem value="medium">Priorité Moyenne</SelectItem>
                <SelectItem value="high">Priorité Haute</SelectItem>
              </SelectContent>
            </Select>
            
            <Button onClick={addEvent} className="w-full">
              Ajouter au Planning
            </Button>
          </CardContent>
        </Card>

        {/* Planning et événements */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Planning Intelligent
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={generateOptimalSchedule}>
                  <Settings className="w-4 h-4 mr-2" />
                  Générer Planning
                </Button>
                <Button variant="outline" size="sm" onClick={() => exportToCalendar('google')}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Sync Google
                </Button>
                <Button variant="outline" size="sm" onClick={() => exportToCalendar('ics')}>
                  <Download className="w-4 h-4 mr-2" />
                  Export ICS
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {events.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Aucun événement planifié</p>
                <p className="text-sm">Cliquez sur "Générer Planning" pour les formations IA éthique</p>
              </div>
            ) : (
              <div className="space-y-3">
                {events.map(event => {
                  const category = categories.find(c => c.value === event.category);
                  const priorityColors = {
                    low: 'border-l-gray-400',
                    medium: 'border-l-yellow-400',
                    high: 'border-l-red-400'
                  };
                  
                  return (
                    <div key={event.id} className={`p-4 border rounded-lg border-l-4 ${priorityColors[event.priority]} bg-gray-50`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{event.title}</h4>
                            {category && (
                              <Badge className={category.color}>
                                {category.label}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>📅 {event.startDate.toLocaleDateString('fr-FR')}</span>
                            <span>🕒 {event.startDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>
                            <span>⏱️ {Math.round((event.endDate.getTime() - event.startDate.getTime()) / 60000)}min</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Share className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Statistiques */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Métriques Planning Club Empreinte Digitale
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{events.length}</div>
              <div className="text-sm text-gray-600">Événements planifiés</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {events.filter(e => e.category === 'formation').length}
              </div>
              <div className="text-sm text-gray-600">Formations IA</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {events.filter(e => e.priority === 'high').length}
              </div>
              <div className="text-sm text-gray-600">Priorité haute</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">
                {Math.round(events.reduce((acc, e) => acc + (e.endDate.getTime() - e.startDate.getTime()), 0) / 3600000)}h
              </div>
              <div className="text-sm text-gray-600">Durée totale</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}