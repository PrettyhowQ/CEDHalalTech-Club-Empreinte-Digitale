import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calendar, 
  Plus, 
  Clock, 
  AlertCircle,
  CheckCircle2,
  X,
  Edit3,
  Save,
  ChevronDown,
  ChevronUp,
  Target,
  User,
  BookOpen
} from 'lucide-react';

interface AgendaEvent {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  date: string;
  category: 'formation' | 'coaching' | 'personnel' | 'reunion';
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  participants?: string[];
}

interface QuickAgendaProps {
  userId?: string;
  variant?: 'compact' | 'expanded';
}

export function QuickAgenda({ userId = 'guest', variant = 'compact' }: QuickAgendaProps) {
  const [isExpanded, setIsExpanded] = useState(variant === 'expanded');
  const [events, setEvents] = useState<AgendaEvent[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<AgendaEvent | null>(null);
  const [currentDate] = useState(new Date());
  const [agendaPosition, setAgendaPosition] = useState({ x: 0, y: 0 });

  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    date: new Date().toISOString().split('T')[0],
    category: 'personnel' as const,
    priority: 'medium' as const
  });

  // Charger les événements sauvegardés
  useEffect(() => {
    const savedEvents = localStorage.getItem(`agenda_${userId}`);
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    } else {
      // Événements par défaut pour démonstration
      const defaultEvents: AgendaEvent[] = [
        {
          id: '1',
          title: 'Formation IA Éthique',
          description: 'Module 1: Introduction aux principes éthiques',
          startTime: '09:00',
          endTime: '10:30',
          date: new Date().toISOString().split('T')[0],
          category: 'formation',
          priority: 'high',
          completed: false,
          participants: ['Yakoubi Yamina']
        },
        {
          id: '2',
          title: 'Session Coaching Sportif',
          description: 'Entraînement cardio avec Souheila Yakoubi-Ozel',
          startTime: '14:00',
          endTime: '15:00',
          date: new Date().toISOString().split('T')[0],
          category: 'coaching',
          priority: 'medium',
          completed: false
        }
      ];
      setEvents(defaultEvents);
    }

    // Charger position sauvegardée
    const savedPosition = localStorage.getItem('agenda_position');
    if (savedPosition) {
      setAgendaPosition(JSON.parse(savedPosition));
    }
  }, [userId]);

  // Sauvegarder les événements
  const saveEvents = (updatedEvents: AgendaEvent[]) => {
    setEvents(updatedEvents);
    localStorage.setItem(`agenda_${userId}`, JSON.stringify(updatedEvents));
  };

  const addEvent = () => {
    if (!newEvent.title.trim()) return;

    const event: AgendaEvent = {
      id: Date.now().toString(),
      ...newEvent,
      completed: false,
      participants: []
    };

    saveEvents([...events, event]);
    setNewEvent({
      title: '',
      description: '',
      startTime: '',
      endTime: '',
      date: new Date().toISOString().split('T')[0],
      category: 'personnel',
      priority: 'medium'
    });
    setShowAddForm(false);
  };

  const toggleEventComplete = (eventId: string) => {
    const updatedEvents = events.map(event =>
      event.id === eventId ? { ...event, completed: !event.completed } : event
    );
    saveEvents(updatedEvents);
  };

  const deleteEvent = (eventId: string) => {
    const updatedEvents = events.filter(event => event.id !== eventId);
    saveEvents(updatedEvents);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'formation': return <BookOpen className="h-3 w-3" />;
      case 'coaching': return <Target className="h-3 w-3" />;
      case 'reunion': return <User className="h-3 w-3" />;
      default: return <Calendar className="h-3 w-3" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'formation': return 'bg-blue-100 text-blue-800';
      case 'coaching': return 'bg-green-100 text-green-800';
      case 'reunion': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      default: return 'border-l-green-500';
    }
  };

  const todaysEvents = events.filter(event => event.date === currentDate.toISOString().split('T')[0]);
  const upcomingEvents = events.filter(event => event.date > currentDate.toISOString().split('T')[0]).slice(0, 3);

  return (
    <motion.div
      drag
      dragConstraints={{ left: -400, right: 400, top: -200, bottom: 200 }}
      dragElastic={0.1}
      onDragEnd={(event, info) => {
        const newPosition = { 
          x: agendaPosition.x + info.offset.x, 
          y: agendaPosition.y + info.offset.y 
        };
        setAgendaPosition(newPosition);
        localStorage.setItem('agenda_position', JSON.stringify(newPosition));
      }}
      style={{
        x: agendaPosition.x,
        y: agendaPosition.y
      }}
      className="fixed top-20 left-4 z-40 cursor-grab active:cursor-grabbing"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Card className="glass-effect hover-lift animate-float border-2 border-purple-200/30 shadow-xl w-80">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm flex items-center gap-2">
              <Calendar className="h-4 w-4 text-white drop-shadow-lg" />
              <span className="text-white drop-shadow-lg">Agenda Rapide</span>
            </CardTitle>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAddForm(!showAddForm)}
                className="h-6 w-6 p-0"
              >
                <Plus className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-6 w-6 p-0"
              >
                {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 space-y-3">
          {/* Formulaire d'ajout */}
          <AnimatePresence>
            {showAddForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2 p-3 bg-gray-50 rounded-lg"
              >
                <Input
                  placeholder="Titre de l'événement"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="h-8 text-sm"
                />
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    type="time"
                    value={newEvent.startTime}
                    onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
                    className="h-8 text-sm"
                  />
                  <Input
                    type="time"
                    value={newEvent.endTime}
                    onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
                    className="h-8 text-sm"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={addEvent}
                    className="h-7 text-xs"
                  >
                    <Save className="h-3 w-3 mr-1" />
                    Ajouter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAddForm(false)}
                    className="h-7 text-xs"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Événements d'aujourd'hui */}
          <div>
            <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Aujourd'hui ({todaysEvents.length})
            </h4>
            {todaysEvents.length === 0 ? (
              <p className="text-xs text-gray-500 italic">Aucun événement prévu</p>
            ) : (
              <div className="space-y-2">
                {todaysEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-2 bg-white rounded border-l-2 ${getPriorityColor(event.priority)} ${event.completed ? 'opacity-60' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={`${getCategoryColor(event.category)} text-xs px-1 py-0`}>
                            {getCategoryIcon(event.category)}
                          </Badge>
                          <span className={`text-xs font-medium ${event.completed ? 'line-through' : ''}`}>
                            {event.title}
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {event.startTime} - {event.endTime}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleEventComplete(event.id)}
                          className="h-5 w-5 p-0"
                        >
                          {event.completed ? (
                            <CheckCircle2 className="h-3 w-3 text-green-600" />
                          ) : (
                            <div className="h-3 w-3 border border-gray-400 rounded-full" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteEvent(event.id)}
                          className="h-5 w-5 p-0 text-red-500"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Événements à venir (si étendu) */}
          <AnimatePresence>
            {isExpanded && upcomingEvents.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  À venir
                </h4>
                <div className="space-y-1">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-2 bg-gray-50 rounded text-xs">
                      <div className="flex items-center gap-2">
                        <Badge className={`${getCategoryColor(event.category)} text-xs px-1 py-0`}>
                          {getCategoryIcon(event.category)}
                        </Badge>
                        <span className="font-medium">{event.title}</span>
                      </div>
                      <div className="text-gray-600 mt-1">
                        {new Date(event.date).toLocaleDateString('fr-FR')} à {event.startTime}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}