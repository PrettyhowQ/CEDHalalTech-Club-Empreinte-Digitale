import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book, Play, Pause, Search, Heart, BookOpen, Volume2, Download, Settings, Star, Clock, Eye } from 'lucide-react';

// Données complètes des 114 sourates du Coran
const sourates = [
  { id: 1, nom: 'Al-Fatiha', nomArabe: 'الفاتحة', versets: 7, revelation: 'Mecque', ordre: 5, signification: 'L\'Ouverture' },
  { id: 2, nom: 'Al-Baqarah', nomArabe: 'البقرة', versets: 286, revelation: 'Médine', ordre: 87, signification: 'La Vache' },
  { id: 3, nom: 'Ali \'Imran', nomArabe: 'آل عمران', versets: 200, revelation: 'Médine', ordre: 89, signification: 'La Famille d\'Imran' },
  { id: 4, nom: 'An-Nisa', nomArabe: 'النساء', versets: 176, revelation: 'Médine', ordre: 92, signification: 'Les Femmes' },
  { id: 5, nom: 'Al-Ma\'idah', nomArabe: 'المائدة', versets: 120, revelation: 'Médine', ordre: 112, signification: 'La Table' },
  { id: 6, nom: 'Al-An\'am', nomArabe: 'الأنعام', versets: 165, revelation: 'Mecque', ordre: 55, signification: 'Les Bestiaux' },
  { id: 7, nom: 'Al-A\'raf', nomArabe: 'الأعراف', versets: 206, revelation: 'Mecque', ordre: 39, signification: 'Les Limbes' },
  { id: 8, nom: 'Al-Anfal', nomArabe: 'الأنفال', versets: 75, revelation: 'Médine', ordre: 88, signification: 'Le Butin' },
  { id: 9, nom: 'At-Tawbah', nomArabe: 'التوبة', versets: 129, revelation: 'Médine', ordre: 113, signification: 'Le Repentir' },
  { id: 10, nom: 'Yunus', nomArabe: 'يونس', versets: 109, revelation: 'Mecque', ordre: 51, signification: 'Jonas' },
  { id: 11, nom: 'Hud', nomArabe: 'هود', versets: 123, revelation: 'Mecque', ordre: 52, signification: 'Hud' },
  { id: 12, nom: 'Yusuf', nomArabe: 'يوسف', versets: 111, revelation: 'Mecque', ordre: 53, signification: 'Joseph' },
  { id: 13, nom: 'Ar-Ra\'d', nomArabe: 'الرعد', versets: 43, revelation: 'Médine', ordre: 96, signification: 'Le Tonnerre' },
  { id: 14, nom: 'Ibrahim', nomArabe: 'إبراهيم', versets: 52, revelation: 'Mecque', ordre: 72, signification: 'Abraham' },
  { id: 15, nom: 'Al-Hijr', nomArabe: 'الحجر', versets: 99, revelation: 'Mecque', ordre: 54, signification: 'Al-Hijr' },
  { id: 16, nom: 'An-Nahl', nomArabe: 'النحل', versets: 128, revelation: 'Mecque', ordre: 70, signification: 'Les Abeilles' },
  { id: 17, nom: 'Al-Isra', nomArabe: 'الإسراء', versets: 111, revelation: 'Mecque', ordre: 50, signification: 'Le Voyage Nocturne' },
  { id: 18, nom: 'Al-Kahf', nomArabe: 'الكهف', versets: 110, revelation: 'Mecque', ordre: 69, signification: 'La Caverne' },
  { id: 19, nom: 'Maryam', nomArabe: 'مريم', versets: 98, revelation: 'Mecque', ordre: 44, signification: 'Marie' },
  { id: 20, nom: 'Ta-Ha', nomArabe: 'طه', versets: 135, revelation: 'Mecque', ordre: 45, signification: 'Ta-Ha' },
  { id: 21, nom: 'Al-Anbiya', nomArabe: 'الأنبياء', versets: 112, revelation: 'Mecque', ordre: 73, signification: 'Les Prophètes' },
  { id: 22, nom: 'Al-Hajj', nomArabe: 'الحج', versets: 78, revelation: 'Médine', ordre: 103, signification: 'Le Pèlerinage' },
  { id: 23, nom: 'Al-Mu\'minun', nomArabe: 'المؤمنون', versets: 118, revelation: 'Mecque', ordre: 74, signification: 'Les Croyants' },
  { id: 24, nom: 'An-Nur', nomArabe: 'النور', versets: 64, revelation: 'Médine', ordre: 102, signification: 'La Lumière' },
  { id: 25, nom: 'Al-Furqan', nomArabe: 'الفرقان', versets: 77, revelation: 'Mecque', ordre: 42, signification: 'Le Discernement' },
  { id: 26, nom: 'Ash-Shu\'ara', nomArabe: 'الشعراء', versets: 227, revelation: 'Mecque', ordre: 47, signification: 'Les Poètes' },
  { id: 27, nom: 'An-Naml', nomArabe: 'النمل', versets: 93, revelation: 'Mecque', ordre: 48, signification: 'Les Fourmis' },
  { id: 28, nom: 'Al-Qasas', nomArabe: 'القصص', versets: 88, revelation: 'Mecque', ordre: 49, signification: 'Le Récit' },
  { id: 29, nom: 'Al-\'Ankabut', nomArabe: 'العنكبوت', versets: 69, revelation: 'Mecque', ordre: 85, signification: 'L\'Araignée' },
  { id: 30, nom: 'Ar-Rum', nomArabe: 'الروم', versets: 60, revelation: 'Mecque', ordre: 84, signification: 'Les Romains' },
  { id: 31, nom: 'Luqman', nomArabe: 'لقمان', versets: 34, revelation: 'Mecque', ordre: 57, signification: 'Luqman' },
  { id: 32, nom: 'As-Sajdah', nomArabe: 'السجدة', versets: 30, revelation: 'Mecque', ordre: 75, signification: 'La Prosternation' },
  { id: 33, nom: 'Al-Ahzab', nomArabe: 'الأحزاب', versets: 73, revelation: 'Médine', ordre: 90, signification: 'Les Coalisés' },
  { id: 34, nom: 'Saba', nomArabe: 'سبأ', versets: 54, revelation: 'Mecque', ordre: 58, signification: 'Saba' },
  { id: 35, nom: 'Fatir', nomArabe: 'فاطر', versets: 45, revelation: 'Mecque', ordre: 43, signification: 'Le Créateur' },
  { id: 36, nom: 'Ya-Sin', nomArabe: 'يس', versets: 83, revelation: 'Mecque', ordre: 41, signification: 'Ya-Sin' },
  { id: 37, nom: 'As-Saffat', nomArabe: 'الصافات', versets: 182, revelation: 'Mecque', ordre: 56, signification: 'Les Rangés' },
  { id: 38, nom: 'Sad', nomArabe: 'ص', versets: 88, revelation: 'Mecque', ordre: 38, signification: 'Sad' },
  { id: 39, nom: 'Az-Zumar', nomArabe: 'الزمر', versets: 75, revelation: 'Mecque', ordre: 59, signification: 'Les Groupes' },
  { id: 40, nom: 'Ghafir', nomArabe: 'غافر', versets: 85, revelation: 'Mecque', ordre: 60, signification: 'Le Pardonneur' },
  { id: 41, nom: 'Fussilat', nomArabe: 'فصلت', versets: 54, revelation: 'Mecque', ordre: 61, signification: 'Les Versets Détaillés' },
  { id: 42, nom: 'Ash-Shura', nomArabe: 'الشورى', versets: 53, revelation: 'Mecque', ordre: 62, signification: 'La Consultation' },
  { id: 43, nom: 'Az-Zukhruf', nomArabe: 'الزخرف', versets: 89, revelation: 'Mecque', ordre: 63, signification: 'L\'Ornement' },
  { id: 44, nom: 'Ad-Dukhan', nomArabe: 'الدخان', versets: 59, revelation: 'Mecque', ordre: 64, signification: 'La Fumée' },
  { id: 45, nom: 'Al-Jathiyah', nomArabe: 'الجاثية', versets: 37, revelation: 'Mecque', ordre: 65, signification: 'L\'Agenouillée' },
  { id: 46, nom: 'Al-Ahqaf', nomArabe: 'الأحقاف', versets: 35, revelation: 'Mecque', ordre: 66, signification: 'Les Dunes' },
  { id: 47, nom: 'Muhammad', nomArabe: 'محمد', versets: 38, revelation: 'Médine', ordre: 95, signification: 'Muhammad' },
  { id: 48, nom: 'Al-Fath', nomArabe: 'الفتح', versets: 29, revelation: 'Médine', ordre: 111, signification: 'La Victoire' },
  { id: 49, nom: 'Al-Hujurat', nomArabe: 'الحجرات', versets: 18, revelation: 'Médine', ordre: 106, signification: 'Les Appartements' },
  { id: 50, nom: 'Qaf', nomArabe: 'ق', versets: 45, revelation: 'Mecque', ordre: 34, signification: 'Qaf' },
  { id: 51, nom: 'Adh-Dhariyat', nomArabe: 'الذاريات', versets: 60, revelation: 'Mecque', ordre: 67, signification: 'Qui Éparpillent' },
  { id: 52, nom: 'At-Tur', nomArabe: 'الطور', versets: 49, revelation: 'Mecque', ordre: 76, signification: 'Le Mont' },
  { id: 53, nom: 'An-Najm', nomArabe: 'النجم', versets: 62, revelation: 'Mecque', ordre: 23, signification: 'L\'Étoile' },
  { id: 54, nom: 'Al-Qamar', nomArabe: 'القمر', versets: 55, revelation: 'Mecque', ordre: 37, signification: 'La Lune' },
  { id: 55, nom: 'Ar-Rahman', nomArabe: 'الرحمن', versets: 78, revelation: 'Médine', ordre: 97, signification: 'Le Miséricordieux' },
  { id: 56, nom: 'Al-Waqi\'ah', nomArabe: 'الواقعة', versets: 96, revelation: 'Mecque', ordre: 46, signification: 'L\'Événement' },
  { id: 57, nom: 'Al-Hadid', nomArabe: 'الحديد', versets: 29, revelation: 'Médine', ordre: 94, signification: 'Le Fer' },
  { id: 58, nom: 'Al-Mujadilah', nomArabe: 'المجادلة', versets: 22, revelation: 'Médine', ordre: 105, signification: 'La Discussions' },
  { id: 59, nom: 'Al-Hashr', nomArabe: 'الحشر', versets: 24, revelation: 'Médine', ordre: 101, signification: 'L\'Exode' },
  { id: 60, nom: 'Al-Mumtahanah', nomArabe: 'الممتحنة', versets: 13, revelation: 'Médine', ordre: 91, signification: 'L\'Éprouvée' },
  { id: 61, nom: 'As-Saff', nomArabe: 'الصف', versets: 14, revelation: 'Médine', ordre: 109, signification: 'Le Rang' },
  { id: 62, nom: 'Al-Jumu\'ah', nomArabe: 'الجمعة', versets: 11, revelation: 'Médine', ordre: 110, signification: 'Le Vendredi' },
  { id: 63, nom: 'Al-Munafiqun', nomArabe: 'المنافقون', versets: 11, revelation: 'Médine', ordre: 104, signification: 'Les Hypocrites' },
  { id: 64, nom: 'At-Taghabun', nomArabe: 'التغابن', versets: 18, revelation: 'Médine', ordre: 108, signification: 'La Duperie Réciproque' },
  { id: 65, nom: 'At-Talaq', nomArabe: 'الطلاق', versets: 12, revelation: 'Médine', ordre: 99, signification: 'Le Divorce' },
  { id: 66, nom: 'At-Tahrim', nomArabe: 'التحريم', versets: 12, revelation: 'Médine', ordre: 107, signification: 'L\'Interdiction' },
  { id: 67, nom: 'Al-Mulk', nomArabe: 'الملك', versets: 30, revelation: 'Mecque', ordre: 77, signification: 'La Royauté' },
  { id: 68, nom: 'Al-Qalam', nomArabe: 'القلم', versets: 52, revelation: 'Mecque', ordre: 2, signification: 'La Plume' },
  { id: 69, nom: 'Al-Haqqah', nomArabe: 'الحاقة', versets: 52, revelation: 'Mecque', ordre: 78, signification: 'Celle qui Montre la Vérité' },
  { id: 70, nom: 'Al-Ma\'arij', nomArabe: 'المعارج', versets: 44, revelation: 'Mecque', ordre: 79, signification: 'Les Voies d\'Ascension' },
  { id: 71, nom: 'Nuh', nomArabe: 'نوح', versets: 28, revelation: 'Mecque', ordre: 71, signification: 'Noé' },
  { id: 72, nom: 'Al-Jinn', nomArabe: 'الجن', versets: 28, revelation: 'Mecque', ordre: 40, signification: 'Les Djinns' },
  { id: 73, nom: 'Al-Muzzammil', nomArabe: 'المزمل', versets: 20, revelation: 'Mecque', ordre: 3, signification: 'L\'Enveloppé' },
  { id: 74, nom: 'Al-Muddaththir', nomArabe: 'المدثر', versets: 56, revelation: 'Mecque', ordre: 4, signification: 'Le Revêtu d\'un Manteau' },
  { id: 75, nom: 'Al-Qiyamah', nomArabe: 'القيامة', versets: 40, revelation: 'Mecque', ordre: 31, signification: 'La Résurrection' },
  { id: 76, nom: 'Al-Insan', nomArabe: 'الإنسان', versets: 31, revelation: 'Médine', ordre: 98, signification: 'L\'Homme' },
  { id: 77, nom: 'Al-Mursalat', nomArabe: 'المرسلات', versets: 50, revelation: 'Mecque', ordre: 33, signification: 'Les Envoyés' },
  { id: 78, nom: 'An-Naba', nomArabe: 'النبأ', versets: 40, revelation: 'Mecque', ordre: 80, signification: 'La Nouvelle' },
  { id: 79, nom: 'An-Nazi\'at', nomArabe: 'النازعات', versets: 46, revelation: 'Mecque', ordre: 81, signification: 'Les Anges qui Arrachent' },
  { id: 80, nom: 'Abasa', nomArabe: 'عبس', versets: 42, revelation: 'Mecque', ordre: 24, signification: 'Il s\'est Renfrogné' },
  { id: 81, nom: 'At-Takwir', nomArabe: 'التكوير', versets: 29, revelation: 'Mecque', ordre: 7, signification: 'L\'Obscurcissement' },
  { id: 82, nom: 'Al-Infitar', nomArabe: 'الانفطار', versets: 19, revelation: 'Mecque', ordre: 82, signification: 'La Rupture' },
  { id: 83, nom: 'Al-Mutaffifin', nomArabe: 'المطففين', versets: 36, revelation: 'Mecque', ordre: 86, signification: 'Les Fraudeurs' },
  { id: 84, nom: 'Al-Inshiqaq', nomArabe: 'الانشقاق', versets: 25, revelation: 'Mecque', ordre: 83, signification: 'La Déchirure' },
  { id: 85, nom: 'Al-Buruj', nomArabe: 'البروج', versets: 22, revelation: 'Mecque', ordre: 27, signification: 'Les Constellations' },
  { id: 86, nom: 'At-Tariq', nomArabe: 'الطارق', versets: 17, revelation: 'Mecque', ordre: 36, signification: 'L\'Astre Nocturne' },
  { id: 87, nom: 'Al-A\'la', nomArabe: 'الأعلى', versets: 19, revelation: 'Mecque', ordre: 8, signification: 'Le Très-Haut' },
  { id: 88, nom: 'Al-Ghashiyah', nomArabe: 'الغاشية', versets: 26, revelation: 'Mecque', ordre: 68, signification: 'L\'Enveloppante' },
  { id: 89, nom: 'Al-Fajr', nomArabe: 'الفجر', versets: 30, revelation: 'Mecque', ordre: 10, signification: 'L\'Aube' },
  { id: 90, nom: 'Al-Balad', nomArabe: 'البلد', versets: 20, revelation: 'Mecque', ordre: 35, signification: 'La Cité' },
  { id: 91, nom: 'Ash-Shams', nomArabe: 'الشمس', versets: 15, revelation: 'Mecque', ordre: 26, signification: 'Le Soleil' },
  { id: 92, nom: 'Al-Layl', nomArabe: 'الليل', versets: 21, revelation: 'Mecque', ordre: 9, signification: 'La Nuit' },
  { id: 93, nom: 'Ad-Duha', nomArabe: 'الضحى', versets: 11, revelation: 'Mecque', ordre: 11, signification: 'Le Jour Montant' },
  { id: 94, nom: 'Ash-Sharh', nomArabe: 'الشرح', versets: 8, revelation: 'Mecque', ordre: 12, signification: 'L\'Ouverture' },
  { id: 95, nom: 'At-Tin', nomArabe: 'التين', versets: 8, revelation: 'Mecque', ordre: 28, signification: 'Le Figuier' },
  { id: 96, nom: 'Al-\'Alaq', nomArabe: 'العلق', versets: 19, revelation: 'Mecque', ordre: 1, signification: 'L\'Adhérence' },
  { id: 97, nom: 'Al-Qadr', nomArabe: 'القدر', versets: 5, revelation: 'Mecque', ordre: 25, signification: 'La Destinée' },
  { id: 98, nom: 'Al-Bayyinah', nomArabe: 'البينة', versets: 8, revelation: 'Médine', ordre: 100, signification: 'La Preuve' },
  { id: 99, nom: 'Az-Zalzalah', nomArabe: 'الزلزلة', versets: 8, revelation: 'Médine', ordre: 93, signification: 'La Secousse' },
  { id: 100, nom: 'Al-\'Adiyat', nomArabe: 'العاديات', versets: 11, revelation: 'Mecque', ordre: 14, signification: 'Les Coursiers' },
  { id: 101, nom: 'Al-Qari\'ah', nomArabe: 'القارعة', versets: 11, revelation: 'Mecque', ordre: 30, signification: 'Le Fracas' },
  { id: 102, nom: 'At-Takathur', nomArabe: 'التكاثر', versets: 8, revelation: 'Mecque', ordre: 16, signification: 'La Course aux Richesses' },
  { id: 103, nom: 'Al-\'Asr', nomArabe: 'العصر', versets: 3, revelation: 'Mecque', ordre: 13, signification: 'Le Temps' },
  { id: 104, nom: 'Al-Humazah', nomArabe: 'الهمزة', versets: 9, revelation: 'Mecque', ordre: 32, signification: 'Les Calomniateurs' },
  { id: 105, nom: 'Al-Fil', nomArabe: 'الفيل', versets: 5, revelation: 'Mecque', ordre: 19, signification: 'L\'Éléphant' },
  { id: 106, nom: 'Quraysh', nomArabe: 'قريش', versets: 4, revelation: 'Mecque', ordre: 29, signification: 'Qouraych' },
  { id: 107, nom: 'Al-Ma\'un', nomArabe: 'الماعون', versets: 7, revelation: 'Mecque', ordre: 17, signification: 'L\'Ustensile' },
  { id: 108, nom: 'Al-Kawthar', nomArabe: 'الكوثر', versets: 3, revelation: 'Mecque', ordre: 15, signification: 'L\'Abondance' },
  { id: 109, nom: 'Al-Kafirun', nomArabe: 'الكافرون', versets: 6, revelation: 'Mecque', ordre: 18, signification: 'Les Mécréants' },
  { id: 110, nom: 'An-Nasr', nomArabe: 'النصر', versets: 3, revelation: 'Médine', ordre: 114, signification: 'Les Secours' },
  { id: 111, nom: 'Al-Masad', nomArabe: 'المسد', versets: 5, revelation: 'Mecque', ordre: 6, signification: 'Les Fibres' },
  { id: 112, nom: 'Al-Ikhlas', nomArabe: 'الإخلاص', versets: 4, revelation: 'Mecque', ordre: 22, signification: 'Le Monothéisme Pur' },
  { id: 113, nom: 'Al-Falaq', nomArabe: 'الفلق', versets: 5, revelation: 'Mecque', ordre: 20, signification: 'L\'Aube Naissante' },
  { id: 114, nom: 'An-Nas', nomArabe: 'الناس', versets: 6, revelation: 'Mecque', ordre: 21, signification: 'Les Hommes' }
];

// Récitateurs authentiques renommés
const recitateursComplets = [
  { 
    id: 1, 
    nom: 'Sheikh Abd Al-Basit Abd As-Samad', 
    nomArabe: 'عبد الباسط عبد الصمد', 
    style: 'Mujawwad',
    pays: 'Égypte',
    description: 'Maître de la récitation avec règles Tajweed parfaites'
  },
  { 
    id: 2, 
    nom: 'Sheikh Muhammad Siddiq Al-Minshawi', 
    nomArabe: 'محمد صديق المنشاوي', 
    style: 'Mujawwad',
    pays: 'Égypte',
    description: 'Voix mélodieuse et émouvante, récitation contemplative'
  },
  { 
    id: 3, 
    nom: 'Sheikh Maher Al-Mueaqly', 
    nomArabe: 'ماهر المعيقلي', 
    style: 'Murattal',
    pays: 'Arabie Saoudite',
    description: 'Imam de la Mosquée Sacrée de La Mecque'
  },
  { 
    id: 4, 
    nom: 'Sheikh Mishary Rashid Al-Afasy', 
    nomArabe: 'مشاري راشد العفاسي', 
    style: 'Murattal',
    pays: 'Koweït',
    description: 'Récitation claire et éducative, parfaite pour apprentissage'
  },
  { 
    id: 5, 
    nom: 'Sheikh Mahmoud Khalil Al-Husary', 
    nomArabe: 'محمود خليل الحصري', 
    style: 'Muallim',
    pays: 'Égypte',
    description: 'Référence mondiale pour l\'enseignement du Tajweed'
  },
  { 
    id: 6, 
    nom: 'Sheikh Saad Al-Ghamidi', 
    nomArabe: 'سعد الغامدي', 
    style: 'Murattal',
    pays: 'Arabie Saoudite',
    description: 'Voix apaisante et spirituelle'
  },
  { 
    id: 7, 
    nom: 'Sheikh Ali Abdur-Rahman Al-Hudhaifi', 
    nomArabe: 'علي عبد الرحمن الحذيفي', 
    style: 'Murattal',
    pays: 'Arabie Saoudite',
    description: 'Ancien imam de la Mosquée du Prophète à Médine'
  },
  { 
    id: 8, 
    nom: 'Sheikh Ahmed ibn Ali Al-Ajamy', 
    nomArabe: 'أحمد بن علي العجمي', 
    style: 'Murattal',
    pays: 'Arabie Saoudite',
    description: 'Récitation émouvante et profondément spirituelle'
  }
];

// Horaires de prière pour gestion spirituelle du temps
const horairesPriere = {
  fajr: { nom: 'Fajr', nomArabe: 'الفجر', heure: '05:30', description: 'Prière de l\'aube' },
  dhuhr: { nom: 'Dhuhr', nomArabe: 'الظهر', heure: '12:30', description: 'Prière de midi' },
  asr: { nom: 'Asr', nomArabe: 'العصر', heure: '15:45', description: 'Prière de l\'après-midi' },
  maghrib: { nom: 'Maghrib', nomArabe: 'المغرب', heure: '18:15', description: 'Prière du coucher du soleil' },
  isha: { nom: 'Isha', nomArabe: 'العشاء', heure: '19:45', description: 'Prière de la nuit' }
};

// Citations spirituelles pour motivation quotidienne
const citationsSpirituelles = [
  {
    texteArabe: 'وَاذْكُر رَّبَّكَ فِي نَفْسِكَ تَضَرُّعًا وَخِيفَةً',
    traduction: 'Et invoque ton Seigneur en toi-même, avec humilité et crainte',
    reference: 'Al-A\'raf 7:205'
  },
  {
    texteArabe: 'فَاذْكُرُونِي أَذْكُرْكُمْ',
    traduction: 'Souvenez-vous de Moi, Je Me souviendrai de vous',
    reference: 'Al-Baqarah 2:152'
  },
  {
    texteArabe: 'إِنَّ فِي ذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    traduction: 'C\'est dans le rappel d\'Allah que les cœurs trouvent leur tranquillité',
    reference: 'Ar-Ra\'d 13:28'
  }
];

// Versets célèbres avec leur contenu complet
const versetsCelebres = [
  {
    id: 'ayat-kursi',
    nom: 'Ayat Al-Kursi',
    nomArabe: 'آية الكرسي',
    sourate: 2,
    verset: 255,
    texteArabe: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    traduction: 'Allah - il n\'y a de divinité que Lui, le Vivant, Celui qui subsiste par lui-même. Ni somnolence ni sommeil ne Le saisissent. A Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et, de Sa science, ils n\'embrassent que ce qu\'Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand.',
    bienfaits: ['Protection suprême contre le mal', 'Bénédictions et baraka', 'Paix intérieure et tranquillité', 'Connexion spirituelle renforcée']
  },
  {
    id: 'al-fatiha',
    nom: 'Al-Fatiha',
    nomArabe: 'الفاتحة',
    sourate: 1,
    verset: 1,
    texteArabe: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَٰنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
    traduction: 'Au nom d\'Allah, le Clément, le Miséricordieux. Louange à Allah, Seigneur des mondes. Le Clément, le Miséricordieux. Maître du Jour de la rétribution. C\'est Toi que nous adorons, et c\'est Toi dont nous implorons secours. Guide-nous dans le droit chemin, le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.',
    bienfaits: ['Récitée dans chaque prière obligatoire', 'Guérison spirituelle et physique', 'Guide vers le droit chemin', 'Protection et guidance divine']
  },
  {
    id: 'al-ikhlas',
    nom: 'Al-Ikhlas',
    nomArabe: 'الإخلاص',
    sourate: 112,
    verset: 1,
    texteArabe: 'قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
    traduction: 'Dis: Il est Allah, Unique. Allah, le Seul à être imploré pour ce que nous désirons. Il n\'a jamais engendré, n\'a pas été engendré non plus. Et nul n\'est égal à Lui.',
    bienfaits: ['Équivaut au tiers du Coran', 'Purification du cœur', 'Renforcement de la foi', 'Protection contre le polythéisme']
  }
];

const LecteurCoranComplet: React.FC = () => {
  const [sourateSelectionnee, setSourateSelectionnee] = useState<number>(1);
  const [recitateurSelectionne, setRecitateurSelectionne] = useState<number>(1);
  const [versetSelectionne, setVersetSelectionne] = useState<number>(1);
  const [recherche, setRecherche] = useState('');
  const [estEnLecture, setEstEnLecture] = useState(false);
  const [audioActuel, setAudioActuel] = useState<HTMLAudioElement | null>(null);
  const [vitesseLecture, setVitesseLecture] = useState(1);
  const [modeRepetition, setModeRepetition] = useState(false);
  const [favoris, setFavoris] = useState<number[]>([1, 2, 36, 55, 67, 112, 113, 114]);
  const [modeSombre, setModeSombre] = useState(false);
  const [taillePoliceCoran, setTaillePoliceCoran] = useState('text-xl');
  const audioRef = useRef<HTMLAudioElement>(null);

  // Filtrer les sourates selon la recherche
  const souratesFiltrees = sourates.filter(sourate => 
    sourate.nom.toLowerCase().includes(recherche.toLowerCase()) ||
    sourate.nomArabe.includes(recherche) ||
    sourate.signification.toLowerCase().includes(recherche.toLowerCase())
  );

  // Obtenir la sourate actuelle
  const sourateActuelle = sourates.find(s => s.id === sourateSelectionnee);

  // Fonctions de contrôle audio
  const lancerRecitation = async (sourateId: number, versetId: number, recitateurId: number) => {
    try {
      // Arrêter l'audio actuel
      if (audioActuel) {
        audioActuel.pause();
        audioActuel.currentTime = 0;
      }

      // En production, utiliser une vraie API de récitation Coran
      // URL exemple : https://cdn.islamic.network/quran/audio-surah/128/${sourateId}.mp3
      const urlAudio = `/api/coran/audio/${recitateurId}/${sourateId.toString().padStart(3, '0')}${versetId.toString().padStart(3, '0')}.mp3`;
      
      const nouvelAudio = new Audio();
      // Pour la démonstration, utiliser un son de notification
      nouvelAudio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMaBUSN2e/JdSAELHfP9OGIMAYROcHr8qFREAhHn9//zX0qBC12x+3aizoICl+z6OOIKgQJU7Xt8bWNOQcPT7Hj8atRGQMHO8Pr9qhREAhHn9//zX0qBC12x+3aizoICl+z6OOIKwQJU7Xt8bWNOQcPT7Hj8atRGQMHO8Pr9qhREAhHn9//zX0qBC12x+3aizoICl+z6OOIKwQJU7Xt8bWNOQcPT7Hj8atRGQMH';
      
      nouvelAudio.onloadstart = () => setEstEnLecture(true);
      nouvelAudio.onended = () => {
        setEstEnLecture(false);
        if (modeRepetition) {
          // Relancer la récitation
          setTimeout(() => lancerRecitation(sourateId, versetId, recitateurId), 1000);
        }
      };
      nouvelAudio.onerror = () => {
        setEstEnLecture(false);
        console.log('Audio de récitation non disponible - Intégration avec API Coran requise');
      };

      nouvelAudio.playbackRate = vitesseLecture;
      setAudioActuel(nouvelAudio);
      
      await nouvelAudio.play();
    } catch (error) {
      setEstEnLecture(false);
      console.log('Erreur lors de la lecture audio:', error);
    }
  };

  const arreterRecitation = () => {
    if (audioActuel) {
      audioActuel.pause();
      audioActuel.currentTime = 0;
      setEstEnLecture(false);
    }
  };

  const ajouterAuxFavoris = (sourateId: number) => {
    if (favoris.includes(sourateId)) {
      setFavoris(favoris.filter(id => id !== sourateId));
    } else {
      setFavoris([...favoris, sourateId]);
    }
  };

  const obtenirVersetCelebre = (id: string) => {
    return versetsCelebres.find(v => v.id === id);
  };

  return (
    <div className={`min-h-screen ${modeSombre ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">📖 القرآن الكريم - Lecteur Coran Complet</h1>
            <p className="text-xl opacity-90">114 sourates • 6,236 versets • 8 récitateurs authentiques</p>
            <p className="text-lg opacity-80 mt-2">Récitation complète avec Tajweed et traductions</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="liste-sourates" className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full max-w-4xl mx-auto">
            <TabsTrigger value="liste-sourates" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Sourates
            </TabsTrigger>
            <TabsTrigger value="versets-celebres" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Versets Célèbres
            </TabsTrigger>
            <TabsTrigger value="gestion-temps-priere" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Prières & Temps
            </TabsTrigger>
            <TabsTrigger value="favoris" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favoris
            </TabsTrigger>
            <TabsTrigger value="parametres" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Paramètres
            </TabsTrigger>
          </TabsList>

          {/* Onglet Liste des Sourates */}
          <TabsContent value="liste-sourates" className="space-y-6">
            {/* Barre de recherche et filtres */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Rechercher une sourate..."
                      value={recherche}
                      onChange={(e) => setRecherche(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <Select value={recitateurSelectionne.toString()} onValueChange={(value) => setRecitateurSelectionne(parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un récitateur" />
                    </SelectTrigger>
                    <SelectContent>
                      {recitateursComplets.map((rec) => (
                        <SelectItem key={rec.id} value={rec.id.toString()}>
                          <div className="text-left">
                            <div className="font-medium">{rec.nom}</div>
                            <div className="text-xs text-gray-500">{rec.nomArabe} - {rec.style}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="flex gap-2">
                    <Button
                      variant={modeRepetition ? "default" : "outline"}
                      onClick={() => setModeRepetition(!modeRepetition)}
                      className="flex-1"
                    >
                      🔄 Répétition
                    </Button>
                    <Select value={vitesseLecture.toString()} onValueChange={(value) => setVitesseLecture(parseFloat(value))}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0.5">0.5x</SelectItem>
                        <SelectItem value="0.75">0.75x</SelectItem>
                        <SelectItem value="1">1x</SelectItem>
                        <SelectItem value="1.25">1.25x</SelectItem>
                        <SelectItem value="1.5">1.5x</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grille des sourates */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {souratesFiltrees.map((sourate) => (
                <Card key={sourate.id} className={`hover:shadow-lg transition-all duration-200 border-2 ${
                  sourateSelectionnee === sourate.id ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          <span className="text-emerald-600 font-bold">{sourate.id}.</span> {sourate.nom}
                        </CardTitle>
                        <CardDescription className="text-right text-xl font-arabic">
                          {sourate.nomArabe}
                        </CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => ajouterAuxFavoris(sourate.id)}
                        className={favoris.includes(sourate.id) ? 'text-red-500' : 'text-gray-400'}
                      >
                        <Heart className={`h-4 w-4 ${favoris.includes(sourate.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <Badge variant="outline" className="text-xs">
                          {sourate.versets} versets
                        </Badge>
                      </div>
                      <div>
                        <Badge variant={sourate.revelation === 'Mecque' ? 'default' : 'secondary'} className="text-xs">
                          {sourate.revelation}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <strong>Signification:</strong> {sourate.signification}
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button
                        onClick={() => setSourateSelectionnee(sourate.id)}
                        variant={sourateSelectionnee === sourate.id ? "default" : "outline"}
                        className="flex-1"
                        size="sm"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Voir
                      </Button>
                      
                      <Button
                        onClick={() => {
                          if (estEnLecture && sourateSelectionnee === sourate.id) {
                            arreterRecitation();
                          } else {
                            setSourateSelectionnee(sourate.id);
                            setVersetSelectionne(1);
                            lancerRecitation(sourate.id, 1, recitateurSelectionne);
                          }
                        }}
                        variant={estEnLecture && sourateSelectionnee === sourate.id ? "destructive" : "default"}
                        className="flex-1"
                        size="sm"
                      >
                        {estEnLecture && sourateSelectionnee === sourate.id ? (
                          <>
                            <Pause className="h-4 w-4 mr-1" />
                            Stop
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-1" />
                            Écouter
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Affichage de la sourate sélectionnée */}
            {sourateActuelle && (
              <Card className="mt-8 border-emerald-200">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                  <CardTitle className="text-center">
                    <div className="text-2xl font-bold text-emerald-700">
                      {sourateActuelle.nom} - {sourateActuelle.nomArabe}
                    </div>
                    <div className="text-lg text-gray-600 mt-2">
                      {sourateActuelle.signification} • {sourateActuelle.versets} versets • Révélée à {sourateActuelle.revelation}
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    {/* Bismillah pour toutes les sourates sauf At-Tawbah */}
                    {sourateActuelle.id !== 9 && (
                      <div className={`${taillePoliceCoran} font-arabic leading-relaxed text-emerald-800 py-4 border-b border-emerald-200`}>
                        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                      </div>
                    )}
                    
                    {/* Contrôles de lecture */}
                    <div className="flex justify-center items-center gap-4 py-4">
                      <Button
                        onClick={() => {
                          if (estEnLecture) {
                            arreterRecitation();
                          } else {
                            lancerRecitation(sourateActuelle.id, versetSelectionne, recitateurSelectionne);
                          }
                        }}
                        variant={estEnLecture ? "destructive" : "default"}
                        size="lg"
                      >
                        {estEnLecture ? (
                          <>
                            <Pause className="h-5 w-5 mr-2" />
                            Arrêter la récitation
                          </>
                        ) : (
                          <>
                            <Play className="h-5 w-5 mr-2" />
                            Commencer la récitation
                          </>
                        )}
                      </Button>
                      
                      <Select value={versetSelectionne.toString()} onValueChange={(value) => setVersetSelectionne(parseInt(value))}>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Verset" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({length: sourateActuelle.versets}, (_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                              Verset {i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Information sur le récitateur sélectionné */}
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="text-sm text-purple-700">
                        <strong>Récitateur:</strong> {recitateursComplets.find(r => r.id === recitateurSelectionne)?.nom}
                      </div>
                      <div className="text-xs text-purple-600 mt-1">
                        {recitateursComplets.find(r => r.id === recitateurSelectionne)?.description}
                      </div>
                    </div>

                    {/* Note technique */}
                    <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                      💡 <strong>Note technique:</strong> L'intégration complète avec les services de récitation Coran est en cours de développement. 
                      Chaque sourate sera disponible avec tous les récitateurs authentiques et navigation par versets.
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Onglet Versets Célèbres */}
          <TabsContent value="versets-celebres" className="space-y-6">
            <div className="grid gap-6">
              {versetsCelebres.map((verset) => (
                <Card key={verset.id} className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div>
                        <span className="text-purple-600">{verset.nomArabe}</span>
                        <span className="text-gray-600 text-lg ml-3">{verset.nom}</span>
                      </div>
                      <Badge variant="outline" className="bg-purple-50">
                        Sourate {verset.sourate}:{verset.verset}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className={`${taillePoliceCoran} font-arabic leading-relaxed text-right text-purple-800 bg-purple-50 p-6 rounded-lg`}>
                      {verset.texteArabe}
                    </div>
                    
                    <div className="text-gray-700 leading-relaxed">
                      {verset.traduction}
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-600 mb-2">Bienfaits spirituels:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {verset.bienfaits.map((bienfait, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            {bienfait}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        onClick={() => lancerRecitation(verset.sourate, verset.verset, recitateurSelectionne)}
                        variant="default"
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <Volume2 className="h-4 w-4 mr-2" />
                        Écouter la récitation
                      </Button>
                      
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger l'audio
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Onglet Gestion du Temps basée sur les Prières */}
          <TabsContent value="gestion-temps-priere" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-emerald-700 mb-2">
                ⏰ الصلوات الخمس - Gestion Spirituelle du Temps
              </h2>
              <p className="text-lg text-gray-600">
                "La prière est un excellent gestionnaire du temps - organisez votre journée autour des 5 prières"
              </p>
              <div className="text-sm text-emerald-600 mt-2 font-arabic">
                آمين آمين آمين يا مجيب يا صمد يا حي قيوم برحمتك الرحمة الراحمين
              </div>
            </div>

            {/* Horaires de prière du jour */}
            <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <Clock className="h-5 w-5" />
                  مواقيت الصلاة - Horaires des Prières du Jour
                </CardTitle>
                <CardDescription>
                  Organiser votre journée autour des cinq prières obligatoires
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {Object.entries(horairesPriere).map(([key, priere]) => (
                    <div key={key} className="bg-white p-4 rounded-lg border border-emerald-200 text-center">
                      <div className="text-lg font-arabic text-emerald-700 mb-1">
                        {priere.nomArabe}
                      </div>
                      <div className="font-medium text-emerald-800">
                        {priere.nom}
                      </div>
                      <div className="text-2xl font-bold text-emerald-600 my-2">
                        {priere.heure}
                      </div>
                      <div className="text-xs text-gray-600">
                        {priere.description}
                      </div>
                      <Button size="sm" variant="outline" className="mt-2 text-xs">
                        🔔 Rappel
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Citations spirituelles pour motivation */}
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-700">
                  <Star className="h-5 w-5" />
                  آيات للتذكير - Versets pour le Rappel Quotidien
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {citationsSpirituelles.map((citation, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <div className="font-arabic text-lg text-purple-800 mb-2 text-right leading-relaxed">
                      {citation.texteArabe}
                    </div>
                    <div className="text-gray-700 mb-2">
                      {citation.traduction}
                    </div>
                    <Badge variant="outline" className="bg-purple-100 text-purple-700">
                      {citation.reference}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Planification de la journée spirituelle */}
            <Card className="border-teal-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-teal-700">
                  <Clock className="h-5 w-5" />
                  تنظيم اليوم - Organisation Spirituelle de la Journée
                </CardTitle>
                <CardDescription>
                  Structurez vos activités entre les prières pour une journée bénie
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Période Fajr - Dhuhr */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-bold text-orange-700 mb-2">
                        ☀️ Matin (Fajr → Dhuhr) 05:30 - 12:30
                      </h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Dhikr matinal et invocations</li>
                        <li>• Lecture du Coran (recommandé)</li>
                        <li>• Travail/Étude concentré</li>
                        <li>• Activités importantes</li>
                      </ul>
                    </div>

                    {/* Période Dhuhr - Asr */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-blue-700 mb-2">
                        🌅 Après-midi (Dhuhr → Asr) 12:30 - 15:45
                      </h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Pause déjeuner avec gratitude</li>
                        <li>• Travail collaboratif</li>
                        <li>• Réunions et échanges</li>
                        <li>• Temps en famille</li>
                      </ul>
                    </div>

                    {/* Période Asr - Maghrib */}
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-lg border border-emerald-200">
                      <h4 className="font-bold text-emerald-700 mb-2">
                        🌿 Fin d'après-midi (Asr → Maghrib) 15:45 - 18:15
                      </h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Finalisation du travail</li>
                        <li>• Dhikr et istighfar</li>
                        <li>• Préparation du retour</li>
                        <li>• Activités douces</li>
                      </ul>
                    </div>

                    {/* Période Maghrib - Isha */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-bold text-purple-700 mb-2">
                        🌅 Soirée (Maghrib → Isha) 18:15 - 19:45
                      </h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Temps en famille</li>
                        <li>• Repas iftar avec gratitude</li>
                        <li>• Dhikr du soir</li>
                        <li>• Préparation spirituelle</li>
                      </ul>
                    </div>
                  </div>

                  {/* Conseils spirituels */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200 mt-6">
                    <h4 className="font-bold text-gray-700 mb-3 text-center">
                      🤲 نصائح روحانية - Conseils pour une Gestion Spirituelle du Temps
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-1.5"></div>
                          <span>Planifiez vos tâches importantes avant les prières</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-1.5"></div>
                          <span>Utilisez les transitions entre prières pour le dhikr</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-1.5"></div>
                          <span>Récitez le Coran pendant les moments calmes</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5"></div>
                          <span>Demandez la guidance d'Allah avant chaque décision</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5"></div>
                          <span>Pratiquez la gratitude à chaque transition</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5"></div>
                          <span>Terminez chaque période par une invocation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Invocation finale */}
            <Card className="border-emerald-200 bg-gradient-to-r from-emerald-100 to-teal-100">
              <CardContent className="p-6 text-center">
                <div className="font-arabic text-xl text-emerald-800 mb-3 leading-relaxed">
                  اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ
                </div>
                <div className="text-emerald-700 mb-2">
                  "Ô Allah, aide-moi à T'invoquer, à Te remercier et à bien T'adorer"
                </div>
                <div className="text-sm text-emerald-600">
                  Invocation du Prophète ﷺ pour une journée bénie et productive
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Favoris */}
          <TabsContent value="favoris" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Mes Sourates Favorites
                </CardTitle>
                <CardDescription>
                  {favoris.length} sourate{favoris.length > 1 ? 's' : ''} dans vos favoris
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {favoris.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Heart className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                    <p>Aucune sourate favorite encore.</p>
                    <p className="text-sm">Cliquez sur ❤️ pour ajouter des sourates à vos favoris.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {favoris.map(sourateId => {
                      const sourate = sourates.find(s => s.id === sourateId);
                      if (!sourate) return null;
                      
                      return (
                        <Card key={sourateId} className="border-red-200">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex justify-between items-center">
                              <span>{sourate.id}. {sourate.nom}</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => ajouterAuxFavoris(sourateId)}
                                className="text-red-500"
                              >
                                <Heart className="h-4 w-4 fill-current" />
                              </Button>
                            </CardTitle>
                            <CardDescription className="text-right font-arabic text-lg">
                              {sourate.nomArabe}
                            </CardDescription>
                          </CardHeader>
                          
                          <CardContent>
                            <div className="flex gap-2">
                              <Button
                                onClick={() => setSourateSelectionnee(sourateId)}
                                size="sm"
                                variant="outline"
                                className="flex-1"
                              >
                                Voir
                              </Button>
                              <Button
                                onClick={() => lancerRecitation(sourateId, 1, recitateurSelectionne)}
                                size="sm"
                                className="flex-1"
                              >
                                <Play className="h-4 w-4 mr-1" />
                                Écouter
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Paramètres */}
          <TabsContent value="parametres" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres d'Affichage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium block mb-2">Taille du texte arabe</label>
                    <Select value={taillePoliceCoran} onValueChange={setTaillePoliceCoran}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text-lg">Petite</SelectItem>
                        <SelectItem value="text-xl">Normale</SelectItem>
                        <SelectItem value="text-2xl">Grande</SelectItem>
                        <SelectItem value="text-3xl">Très grande</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Mode sombre</label>
                    <Button
                      variant={modeSombre ? "default" : "outline"}
                      size="sm"
                      onClick={() => setModeSombre(!modeSombre)}
                    >
                      {modeSombre ? '🌙' : '☀️'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Paramètres Audio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium block mb-2">Récitateur par défaut</label>
                    <Select value={recitateurSelectionne.toString()} onValueChange={(value) => setRecitateurSelectionne(parseInt(value))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {recitateursComplets.map((rec) => (
                          <SelectItem key={rec.id} value={rec.id.toString()}>
                            {rec.nom}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium block mb-2">Vitesse de lecture</label>
                    <Select value={vitesseLecture.toString()} onValueChange={(value) => setVitesseLecture(parseFloat(value))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0.5">0.5x (Très lent)</SelectItem>
                        <SelectItem value="0.75">0.75x (Lent)</SelectItem>
                        <SelectItem value="1">1x (Normal)</SelectItem>
                        <SelectItem value="1.25">1.25x (Rapide)</SelectItem>
                        <SelectItem value="1.5">1.5x (Très rapide)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Mode répétition</label>
                    <Button
                      variant={modeRepetition ? "default" : "outline"}
                      size="sm"
                      onClick={() => setModeRepetition(!modeRepetition)}
                    >
                      🔄
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Statistiques */}
            <Card>
              <CardHeader>
                <CardTitle>Statistiques du Coran</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">114</div>
                    <div className="text-sm text-gray-600">Sourates</div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600">6,236</div>
                    <div className="text-sm text-gray-600">Versets</div>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-600">77,934</div>
                    <div className="text-sm text-gray-600">Mots</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">323,015</div>
                    <div className="text-sm text-gray-600">Lettres</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer de protection */}
      <div className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Club Empreinte Digitale - Yakoubi Yamina. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Lecteur Coran authentique • Conformité Sharia 100% • Sources vérifiées
          </p>
        </div>
      </div>
    </div>
  );
};

export default LecteurCoranComplet;