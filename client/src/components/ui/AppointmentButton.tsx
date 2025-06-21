import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, Clock, User, Video, MapPin, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  type: 'visio' | 'phone' | 'presential';
}

interface AppointmentButtonProps {
  specialist: 'nutrition' | 'sport';
  variant?: 'default' | 'compact';
}

export function AppointmentButton({ specialist, variant = 'default' }: AppointmentButtonProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [step, setStep] = useState<'date' | 'time' | 'confirm' | 'success'>('date');

  const availableDates = [
    { date: '2025-06-23', label: 'Lundi 23 Juin', slots: 8 },
    { date: '2025-06-24', label: 'Mardi 24 Juin', slots: 6 },
    { date: '2025-06-25', label: 'Mercredi 25 Juin', slots: 12 },
    { date: '2025-06-26', label: 'Jeudi 26 Juin', slots: 4 },
    { date: '2025-06-27', label: 'Vendredi 27 Juin', slots: 9 }
  ];

  const timeSlots: TimeSlot[] = [
    { id: '1', time: '09:00', available: true, type: 'visio' },
    { id: '2', time: '10:30', available: true, type: 'phone' },
    { id: '3', time: '11:00', available: false, type: 'visio' },
    { id: '4', time: '14:00', available: true, type: 'visio' },
    { id: '5', time: '15:30', available: true, type: 'presential' },
    { id: '6', time: '16:00', available: true, type: 'phone' },
    { id: '7', time: '17:30', available: true, type: 'visio' }
  ];

  const specialistInfo = {
    nutrition: {
      name: 'Souheila Yakoubi-Ozel',
      title: 'Nutritionniste & Expert IA Santé',
      duration: '60 minutes',
      price: 'Consultation gratuite',
      avatar: '👩‍⚕️'
    },
    sport: {
      name: 'Coach Sport IA',
      title: 'Coach Personnel Intelligent',
      duration: '45 minutes',
      price: 'Évaluation gratuite',
      avatar: '🏃‍♂️'
    }
  };

  const currentSpecialist = specialistInfo[specialist];

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setStep('time');
  };

  const handleTimeSelect = (slot: TimeSlot) => {
    if (slot.available) {
      setSelectedSlot(slot);
      setStep('confirm');
    }
  };

  const handleConfirm = () => {
    // Ici on enverrait la demande de rendez-vous
    setStep('success');
    setTimeout(() => {
      setStep('date');
      setSelectedDate('');
      setSelectedSlot(null);
    }, 3000);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'visio': return <Video className="h-4 w-4" />;
      case 'phone': return <User className="h-4 w-4" />;
      case 'presential': return <MapPin className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'visio': return 'Visioconférence';
      case 'phone': return 'Téléphone';
      case 'presential': return 'Présentiel';
      default: return 'En ligne';
    }
  };

  if (variant === 'compact') {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" className="w-full">
            <Calendar className="h-4 w-4 mr-2" />
            Prendre RDV
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="text-2xl">{currentSpecialist.avatar}</span>
              Rendez-vous avec {currentSpecialist.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="font-medium">{currentSpecialist.title}</p>
              <p className="text-sm text-gray-600">{currentSpecialist.duration} • {currentSpecialist.price}</p>
            </div>
            <Button className="w-full" onClick={() => setStep('date')}>
              <Calendar className="h-4 w-4 mr-2" />
              Choisir un créneau
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="px-8 py-3">
          <Calendar className="h-5 w-5 mr-2" />
          Prendre Rendez-vous
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <span className="text-3xl">{currentSpecialist.avatar}</span>
            <div>
              <div>Rendez-vous avec {currentSpecialist.name}</div>
              <p className="text-sm text-gray-600 font-normal">{currentSpecialist.title}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {/* Étape 1: Sélection de la date */}
          {step === 'date' && (
            <motion.div
              key="date"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-medium">{currentSpecialist.duration} • {currentSpecialist.price}</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Choisissez une date</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {availableDates.map((dateOption) => (
                    <Card 
                      key={dateOption.date}
                      className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-blue-300"
                      onClick={() => handleDateSelect(dateOption.date)}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{dateOption.label}</p>
                            <p className="text-sm text-gray-600">{dateOption.slots} créneaux disponibles</p>
                          </div>
                          <Calendar className="h-5 w-5 text-blue-600" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Étape 2: Sélection de l'heure */}
          {step === 'time' && (
            <motion.div
              key="time"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 mb-4">
                <Button variant="ghost" size="sm" onClick={() => setStep('date')}>
                  ← Retour
                </Button>
                <div className="font-medium">
                  {availableDates.find(d => d.date === selectedDate)?.label}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Choisissez un créneau</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <Card 
                      key={slot.id}
                      className={`cursor-pointer transition-all ${
                        slot.available 
                          ? 'hover:shadow-md border-2 hover:border-green-300' 
                          : 'opacity-50 cursor-not-allowed bg-gray-100'
                      }`}
                      onClick={() => handleTimeSelect(slot)}
                    >
                      <CardContent className="p-3">
                        <div className="text-center space-y-2">
                          <div className="flex items-center justify-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span className="font-medium">{slot.time}</span>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            {getTypeIcon(slot.type)}
                            <span className="text-xs">{getTypeLabel(slot.type)}</span>
                          </div>
                          {!slot.available && (
                            <Badge variant="secondary" className="text-xs">Occupé</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Étape 3: Confirmation */}
          {step === 'confirm' && selectedSlot && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 mb-4">
                <Button variant="ghost" size="sm" onClick={() => setStep('time')}>
                  ← Retour
                </Button>
                <div className="font-medium">Confirmation</div>
              </div>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">Récapitulatif du rendez-vous</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-gray-600" />
                        <span>{currentSpecialist.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-gray-600" />
                        <span>{availableDates.find(d => d.date === selectedDate)?.label}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-gray-600" />
                        <span>{selectedSlot.time} ({currentSpecialist.duration})</span>
                      </div>
                      <div className="flex items-center gap-3">
                        {getTypeIcon(selectedSlot.type)}
                        <span>{getTypeLabel(selectedSlot.type)}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-600 mb-4">
                        Un email de confirmation sera envoyé avec les détails de connexion.
                      </p>
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1" onClick={() => setStep('time')}>
                          Modifier
                        </Button>
                        <Button className="flex-1" onClick={handleConfirm}>
                          Confirmer le RDV
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Étape 4: Succès */}
          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center space-y-4 py-8"
            >
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-green-600">Rendez-vous confirmé !</h3>
              <p className="text-gray-600">
                Vous recevrez un email de confirmation avec tous les détails.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <CheckCircle className="h-4 w-4" />
                <span>Ajouté à votre agenda</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}