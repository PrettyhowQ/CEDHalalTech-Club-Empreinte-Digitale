import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, Pause, Volume2, SkipBack, SkipForward, List } from "lucide-react";

interface Surah {
  number: number;
  name: string;
  arabicName: string;
  frenchName: string;
  meaning: string;
  verses: number;
  revelation: 'meccan' | 'medinan';
}

export function SimpleCoran() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSurah, setCurrentSurah] = useState<Surah | null>(null);
  const [selectedSurahNumber, setSelectedSurahNumber] = useState<number>(1);
  const [showAllSurahs, setShowAllSurahs] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Liste complète des 114 sourates
  const allSurahs: Surah[] = [
    { number: 1, name: 'Al-Fatiha', arabicName: 'الفاتحة', frenchName: 'L\'Ouverture', meaning: 'Celle qui ouvre', verses: 7, revelation: 'meccan' },
    { number: 2, name: 'Al-Baqarah', arabicName: 'البقرة', frenchName: 'La Vache', meaning: 'La Génisse', verses: 286, revelation: 'medinan' },
    { number: 3, name: 'Al-Imran', arabicName: 'آل عمران', frenchName: 'La Famille d\'Imran', meaning: 'La Famille d\'Imran', verses: 200, revelation: 'medinan' },
    { number: 4, name: 'An-Nisa', arabicName: 'النساء', frenchName: 'Les Femmes', meaning: 'Les Femmes', verses: 176, revelation: 'medinan' },
    { number: 5, name: 'Al-Maidah', arabicName: 'المائدة', frenchName: 'La Table Servie', meaning: 'La Table', verses: 120, revelation: 'medinan' },
    { number: 6, name: 'Al-Anam', arabicName: 'الأنعام', frenchName: 'Les Bestiaux', meaning: 'Le Bétail', verses: 165, revelation: 'meccan' },
    { number: 7, name: 'Al-Araf', arabicName: 'الأعراف', frenchName: 'Al-Araf', meaning: 'Les Murailles', verses: 206, revelation: 'meccan' },
    { number: 8, name: 'Al-Anfal', arabicName: 'الأنفال', frenchName: 'Le Butin', meaning: 'Les Dépouilles', verses: 75, revelation: 'medinan' },
    { number: 9, name: 'At-Tawbah', arabicName: 'التوبة', frenchName: 'Le Repentir', meaning: 'Le Repentir', verses: 129, revelation: 'medinan' },
    { number: 10, name: 'Yunus', arabicName: 'يونس', frenchName: 'Jonas', meaning: 'Jonas', verses: 109, revelation: 'meccan' },
    { number: 11, name: 'Hud', arabicName: 'هود', frenchName: 'Hud', meaning: 'Hud', verses: 123, revelation: 'meccan' },
    { number: 12, name: 'Yusuf', arabicName: 'يوسف', frenchName: 'Joseph', meaning: 'Joseph', verses: 111, revelation: 'meccan' },
    { number: 13, name: 'Ar-Rad', arabicName: 'الرعد', frenchName: 'Le Tonnerre', meaning: 'Le Tonnerre', verses: 43, revelation: 'medinan' },
    { number: 14, name: 'Ibrahim', arabicName: 'إبراهيم', frenchName: 'Abraham', meaning: 'Abraham', verses: 52, revelation: 'meccan' },
    { number: 15, name: 'Al-Hijr', arabicName: 'الحجر', frenchName: 'Al-Hijr', meaning: 'La Vallée de Pierres', verses: 99, revelation: 'meccan' },
    { number: 16, name: 'An-Nahl', arabicName: 'النحل', frenchName: 'Les Abeilles', meaning: 'L\'Abeille', verses: 128, revelation: 'meccan' },
    { number: 17, name: 'Al-Isra', arabicName: 'الإسراء', frenchName: 'Le Voyage Nocturne', meaning: 'Le Voyage Nocturne', verses: 111, revelation: 'meccan' },
    { number: 18, name: 'Al-Kahf', arabicName: 'الكهف', frenchName: 'La Caverne', meaning: 'La Caverne', verses: 110, revelation: 'meccan' },
    { number: 19, name: 'Maryam', arabicName: 'مريم', frenchName: 'Marie', meaning: 'Marie', verses: 98, revelation: 'meccan' },
    { number: 20, name: 'Ta-Ha', arabicName: 'طه', frenchName: 'Ta-Ha', meaning: 'Ta-Ha', verses: 135, revelation: 'meccan' },
    { number: 21, name: 'Al-Anbiya', arabicName: 'الأنبياء', frenchName: 'Les Prophètes', meaning: 'Les Prophètes', verses: 112, revelation: 'meccan' },
    { number: 22, name: 'Al-Hajj', arabicName: 'الحج', frenchName: 'Le Pèlerinage', meaning: 'Le Pèlerinage', verses: 78, revelation: 'medinan' },
    { number: 23, name: 'Al-Muminun', arabicName: 'المؤمنون', frenchName: 'Les Croyants', meaning: 'Les Croyants', verses: 118, revelation: 'meccan' },
    { number: 24, name: 'An-Nur', arabicName: 'النور', frenchName: 'La Lumière', meaning: 'La Lumière', verses: 64, revelation: 'medinan' },
    { number: 25, name: 'Al-Furqan', arabicName: 'الفرقان', frenchName: 'Le Discernement', meaning: 'Le Discernement', verses: 77, revelation: 'meccan' },
    { number: 26, name: 'Ash-Shuara', arabicName: 'الشعراء', frenchName: 'Les Poètes', meaning: 'Les Poètes', verses: 227, revelation: 'meccan' },
    { number: 27, name: 'An-Naml', arabicName: 'النمل', frenchName: 'Les Fourmis', meaning: 'La Fourmi', verses: 93, revelation: 'meccan' },
    { number: 28, name: 'Al-Qasas', arabicName: 'القصص', frenchName: 'Les Récits', meaning: 'Le Récit', verses: 88, revelation: 'meccan' },
    { number: 29, name: 'Al-Ankabut', arabicName: 'العنكبوت', frenchName: 'L\'Araignée', meaning: 'L\'Araignée', verses: 69, revelation: 'meccan' },
    { number: 30, name: 'Ar-Rum', arabicName: 'الروم', frenchName: 'Les Romains', meaning: 'Les Byzantins', verses: 60, revelation: 'meccan' },
    { number: 31, name: 'Luqman', arabicName: 'لقمان', frenchName: 'Luqman', meaning: 'Luqman', verses: 34, revelation: 'meccan' },
    { number: 32, name: 'As-Sajdah', arabicName: 'السجدة', frenchName: 'La Prosternation', meaning: 'La Prosternation', verses: 30, revelation: 'meccan' },
    { number: 33, name: 'Al-Ahzab', arabicName: 'الأحزاب', frenchName: 'Les Coalisés', meaning: 'Les Coalisés', verses: 73, revelation: 'medinan' },
    { number: 34, name: 'Saba', arabicName: 'سبأ', frenchName: 'Saba', meaning: 'Saba', verses: 54, revelation: 'meccan' },
    { number: 35, name: 'Fatir', arabicName: 'فاطر', frenchName: 'Le Créateur', meaning: 'Le Créateur', verses: 45, revelation: 'meccan' },
    { number: 36, name: 'Ya-Sin', arabicName: 'يس', frenchName: 'Ya-Sin', meaning: 'Ya-Sin', verses: 83, revelation: 'meccan' },
    { number: 37, name: 'As-Saffat', arabicName: 'الصافات', frenchName: 'Les Rangés', meaning: 'Ceux Rangés en Rangs', verses: 182, revelation: 'meccan' },
    { number: 38, name: 'Sad', arabicName: 'ص', frenchName: 'Sad', meaning: 'Sad', verses: 88, revelation: 'meccan' },
    { number: 39, name: 'Az-Zumar', arabicName: 'الزمر', frenchName: 'Les Groupes', meaning: 'Les Groupes', verses: 75, revelation: 'meccan' },
    { number: 40, name: 'Ghafir', arabicName: 'غافر', frenchName: 'Le Pardonneur', meaning: 'Le Pardonneur', verses: 85, revelation: 'meccan' },
    { number: 41, name: 'Fussilat', arabicName: 'فصلت', frenchName: 'Les Versets Détaillés', meaning: 'Les Versets Détaillés', verses: 54, revelation: 'meccan' },
    { number: 42, name: 'Ash-Shuraa', arabicName: 'الشورى', frenchName: 'La Consultation', meaning: 'La Consultation', verses: 53, revelation: 'meccan' },
    { number: 43, name: 'Az-Zukhruf', arabicName: 'الزخرف', frenchName: 'L\'Ornement', meaning: 'L\'Ornement', verses: 89, revelation: 'meccan' },
    { number: 44, name: 'Ad-Dukhan', arabicName: 'الدخان', frenchName: 'La Fumée', meaning: 'La Fumée', verses: 59, revelation: 'meccan' },
    { number: 45, name: 'Al-Jathiyah', arabicName: 'الجاثية', frenchName: 'L\'Agenouillée', meaning: 'L\'Agenouillée', verses: 37, revelation: 'meccan' },
    { number: 46, name: 'Al-Ahqaf', arabicName: 'الأحقاف', frenchName: 'Al-Ahqaf', meaning: 'Les Dunes', verses: 35, revelation: 'meccan' },
    { number: 47, name: 'Muhammad', arabicName: 'محمد', frenchName: 'Muhammad', meaning: 'Muhammad', verses: 38, revelation: 'medinan' },
    { number: 48, name: 'Al-Fath', arabicName: 'الفتح', frenchName: 'La Victoire', meaning: 'La Victoire Éclatante', verses: 29, revelation: 'medinan' },
    { number: 49, name: 'Al-Hujurat', arabicName: 'الحجرات', frenchName: 'Les Appartements', meaning: 'Les Appartements', verses: 18, revelation: 'medinan' },
    { number: 50, name: 'Qaf', arabicName: 'ق', frenchName: 'Qaf', meaning: 'Qaf', verses: 45, revelation: 'meccan' },
    { number: 51, name: 'Adh-Dhariyat', arabicName: 'الذاريات', frenchName: 'Qui Éparpillent', meaning: 'Qui Éparpillent', verses: 60, revelation: 'meccan' },
    { number: 52, name: 'At-Tur', arabicName: 'الطور', frenchName: 'At-Tur', meaning: 'Le Mont', verses: 49, revelation: 'meccan' },
    { number: 53, name: 'An-Najm', arabicName: 'النجم', frenchName: 'L\'Étoile', meaning: 'L\'Étoile', verses: 62, revelation: 'meccan' },
    { number: 54, name: 'Al-Qamar', arabicName: 'القمر', frenchName: 'La Lune', meaning: 'La Lune', verses: 55, revelation: 'meccan' },
    { number: 55, name: 'Ar-Rahman', arabicName: 'الرحمن', frenchName: 'Le Tout Miséricordieux', meaning: 'Le Tout Miséricordieux', verses: 78, revelation: 'medinan' },
    { number: 56, name: 'Al-Waqiah', arabicName: 'الواقعة', frenchName: 'L\'Événement', meaning: 'L\'Événement', verses: 96, revelation: 'meccan' },
    { number: 57, name: 'Al-Hadid', arabicName: 'الحديد', frenchName: 'Le Fer', meaning: 'Le Fer', verses: 29, revelation: 'medinan' },
    { number: 58, name: 'Al-Mujadila', arabicName: 'المجادلة', frenchName: 'La Disputeuse', meaning: 'La Disputeuse', verses: 22, revelation: 'medinan' },
    { number: 59, name: 'Al-Hashr', arabicName: 'الحشر', frenchName: 'L\'Exode', meaning: 'L\'Exode', verses: 24, revelation: 'medinan' },
    { number: 60, name: 'Al-Mumtahanah', arabicName: 'الممتحنة', frenchName: 'L\'Éprouvée', meaning: 'L\'Éprouvée', verses: 13, revelation: 'medinan' },
    { number: 61, name: 'As-Saff', arabicName: 'الصف', frenchName: 'Le Rang', meaning: 'Le Rang', verses: 14, revelation: 'medinan' },
    { number: 62, name: 'Al-Jumuah', arabicName: 'الجمعة', frenchName: 'Le Vendredi', meaning: 'Le Vendredi', verses: 11, revelation: 'medinan' },
    { number: 63, name: 'Al-Munafiqun', arabicName: 'المنافقون', frenchName: 'Les Hypocrites', meaning: 'Les Hypocrites', verses: 11, revelation: 'medinan' },
    { number: 64, name: 'At-Taghabun', arabicName: 'التغابن', frenchName: 'La Grande Perte', meaning: 'La Grande Perte', verses: 18, revelation: 'medinan' },
    { number: 65, name: 'At-Talaq', arabicName: 'الطلاق', frenchName: 'Le Divorce', meaning: 'Le Divorce', verses: 12, revelation: 'medinan' },
    { number: 66, name: 'At-Tahrim', arabicName: 'التحريم', frenchName: 'L\'Interdiction', meaning: 'L\'Interdiction', verses: 12, revelation: 'medinan' },
    { number: 67, name: 'Al-Mulk', arabicName: 'الملك', frenchName: 'La Royauté', meaning: 'La Royauté', verses: 30, revelation: 'meccan' },
    { number: 68, name: 'Al-Qalam', arabicName: 'القلم', frenchName: 'La Plume', meaning: 'La Plume', verses: 52, revelation: 'meccan' },
    { number: 69, name: 'Al-Haqqah', arabicName: 'الحاقة', frenchName: 'Celle qui Montre la Vérité', meaning: 'Celle qui Montre la Vérité', verses: 52, revelation: 'meccan' },
    { number: 70, name: 'Al-Maarij', arabicName: 'المعارج', frenchName: 'Les Voies d\'Ascension', meaning: 'Les Voies d\'Ascension', verses: 44, revelation: 'meccan' },
    { number: 71, name: 'Nuh', arabicName: 'نوح', frenchName: 'Noé', meaning: 'Noé', verses: 28, revelation: 'meccan' },
    { number: 72, name: 'Al-Jinn', arabicName: 'الجن', frenchName: 'Les Djinns', meaning: 'Les Djinns', verses: 28, revelation: 'meccan' },
    { number: 73, name: 'Al-Muzzammil', arabicName: 'المزمل', frenchName: 'L\'Enveloppé', meaning: 'L\'Enveloppé', verses: 20, revelation: 'meccan' },
    { number: 74, name: 'Al-Muddaththir', arabicName: 'المدثر', frenchName: 'Le Revêtu d\'un Manteau', meaning: 'Le Revêtu d\'un Manteau', verses: 56, revelation: 'meccan' },
    { number: 75, name: 'Al-Qiyamah', arabicName: 'القيامة', frenchName: 'La Résurrection', meaning: 'La Résurrection', verses: 40, revelation: 'meccan' },
    { number: 76, name: 'Al-Insan', arabicName: 'الإنسان', frenchName: 'L\'Homme', meaning: 'L\'Homme', verses: 31, revelation: 'medinan' },
    { number: 77, name: 'Al-Mursalat', arabicName: 'المرسلات', frenchName: 'Les Envoyés', meaning: 'Les Envoyés', verses: 50, revelation: 'meccan' },
    { number: 78, name: 'An-Naba', arabicName: 'النبأ', frenchName: 'La Nouvelle', meaning: 'La Grande Nouvelle', verses: 40, revelation: 'meccan' },
    { number: 79, name: 'An-Naziat', arabicName: 'النازعات', frenchName: 'Les Anges qui Arrachent', meaning: 'Celles qui Arrachent', verses: 46, revelation: 'meccan' },
    { number: 80, name: 'Abasa', arabicName: 'عبس', frenchName: 'Il s\'est Renfrogné', meaning: 'Il s\'est Renfrogné', verses: 42, revelation: 'meccan' },
    { number: 81, name: 'At-Takwir', arabicName: 'التكوير', frenchName: 'L\'Obscurcissement', meaning: 'L\'Obscurcissement', verses: 29, revelation: 'meccan' },
    { number: 82, name: 'Al-Infitar', arabicName: 'الانفطار', frenchName: 'La Rupture', meaning: 'La Rupture', verses: 19, revelation: 'meccan' },
    { number: 83, name: 'Al-Mutaffifin', arabicName: 'المطففين', frenchName: 'Les Fraudeurs', meaning: 'Ceux qui Fraudent', verses: 36, revelation: 'meccan' },
    { number: 84, name: 'Al-Inshiqaq', arabicName: 'الانشقاق', frenchName: 'La Déchirure', meaning: 'La Déchirure', verses: 25, revelation: 'meccan' },
    { number: 85, name: 'Al-Buruj', arabicName: 'البروج', frenchName: 'Les Constellations', meaning: 'Les Constellations', verses: 22, revelation: 'meccan' },
    { number: 86, name: 'At-Tariq', arabicName: 'الطارق', frenchName: 'L\'Astre Nocturne', meaning: 'L\'Astre Nocturne', verses: 17, revelation: 'meccan' },
    { number: 87, name: 'Al-Ala', arabicName: 'الأعلى', frenchName: 'Le Très-Haut', meaning: 'Le Très-Haut', verses: 19, revelation: 'meccan' },
    { number: 88, name: 'Al-Ghashiyah', arabicName: 'الغاشية', frenchName: 'L\'Enveloppante', meaning: 'L\'Enveloppante', verses: 26, revelation: 'meccan' },
    { number: 89, name: 'Al-Fajr', arabicName: 'الفجر', frenchName: 'L\'Aube', meaning: 'L\'Aube', verses: 30, revelation: 'meccan' },
    { number: 90, name: 'Al-Balad', arabicName: 'البلد', frenchName: 'La Cité', meaning: 'La Cité', verses: 20, revelation: 'meccan' },
    { number: 91, name: 'Ash-Shams', arabicName: 'الشمس', frenchName: 'Le Soleil', meaning: 'Le Soleil', verses: 15, revelation: 'meccan' },
    { number: 92, name: 'Al-Layl', arabicName: 'الليل', frenchName: 'La Nuit', meaning: 'La Nuit', verses: 21, revelation: 'meccan' },
    { number: 93, name: 'Ad-Duhaa', arabicName: 'الضحى', frenchName: 'Le Jour Montant', meaning: 'Le Jour Montant', verses: 11, revelation: 'meccan' },
    { number: 94, name: 'Ash-Sharh', arabicName: 'الشرح', frenchName: 'L\'Ouverture', meaning: 'L\'Ouverture', verses: 8, revelation: 'meccan' },
    { number: 95, name: 'At-Tin', arabicName: 'التين', frenchName: 'Le Figuier', meaning: 'Le Figuier', verses: 8, revelation: 'meccan' },
    { number: 96, name: 'Al-Alaq', arabicName: 'العلق', frenchName: 'L\'Adhérence', meaning: 'L\'Adhérence', verses: 19, revelation: 'meccan' },
    { number: 97, name: 'Al-Qadr', arabicName: 'القدر', frenchName: 'La Destinée', meaning: 'La Destinée', verses: 5, revelation: 'meccan' },
    { number: 98, name: 'Al-Bayyinah', arabicName: 'البينة', frenchName: 'La Preuve', meaning: 'La Preuve', verses: 8, revelation: 'medinan' },
    { number: 99, name: 'Az-Zalzalah', arabicName: 'الزلزلة', frenchName: 'La Secousse', meaning: 'Le Séisme', verses: 8, revelation: 'medinan' },
    { number: 100, name: 'Al-Adiyat', arabicName: 'العاديات', frenchName: 'Les Coursiers', meaning: 'Les Coursiers', verses: 11, revelation: 'meccan' },
    { number: 101, name: 'Al-Qariah', arabicName: 'القارعة', frenchName: 'Le Fracas', meaning: 'Le Fracas', verses: 11, revelation: 'meccan' },
    { number: 102, name: 'At-Takathur', arabicName: 'التكاثر', frenchName: 'La Course aux Richesses', meaning: 'La Course aux Richesses', verses: 8, revelation: 'meccan' },
    { number: 103, name: 'Al-Asr', arabicName: 'العصر', frenchName: 'Le Temps', meaning: 'Le Temps', verses: 3, revelation: 'meccan' },
    { number: 104, name: 'Al-Humazah', arabicName: 'الهمزة', frenchName: 'Les Calomniateurs', meaning: 'Le Calomniateur', verses: 9, revelation: 'meccan' },
    { number: 105, name: 'Al-Fil', arabicName: 'الفيل', frenchName: 'L\'Éléphant', meaning: 'L\'Éléphant', verses: 5, revelation: 'meccan' },
    { number: 106, name: 'Quraysh', arabicName: 'قريش', frenchName: 'Qoraych', meaning: 'Qouraych', verses: 4, revelation: 'meccan' },
    { number: 107, name: 'Al-Maun', arabicName: 'الماعون', frenchName: 'L\'Ustensile', meaning: 'L\'Ustensile', verses: 7, revelation: 'meccan' },
    { number: 108, name: 'Al-Kawthar', arabicName: 'الكوثر', frenchName: 'L\'Abondance', meaning: 'L\'Abondance', verses: 3, revelation: 'meccan' },
    { number: 109, name: 'Al-Kafirun', arabicName: 'الكافرون', frenchName: 'Les Infidèles', meaning: 'Les Mécréants', verses: 6, revelation: 'meccan' },
    { number: 110, name: 'An-Nasr', arabicName: 'النصر', frenchName: 'Les Secours', meaning: 'Le Secours', verses: 3, revelation: 'medinan' },
    { number: 111, name: 'Al-Masad', arabicName: 'المسد', frenchName: 'Les Fibres', meaning: 'Les Fibres', verses: 5, revelation: 'meccan' },
    { number: 112, name: 'Al-Ikhlas', arabicName: 'الإخلاص', frenchName: 'Le Monothéisme Pur', meaning: 'La Pureté de la Foi', verses: 4, revelation: 'meccan' },
    { number: 113, name: 'Al-Falaq', arabicName: 'الفلق', frenchName: 'L\'Aube Naissante', meaning: 'L\'Aube Naissante', verses: 5, revelation: 'meccan' },
    { number: 114, name: 'An-Nas', arabicName: 'الناس', frenchName: 'Les Hommes', meaning: 'Les Hommes', verses: 6, revelation: 'meccan' }
  ];

  // Récitateurs disponibles
  const reciters = [
    { id: 'Alafasy', name: 'Mishary Rashid Alafasy', arabicName: 'مشاري راشد العفاسي', country: 'Koweït' },
    { id: 'AbdulBasit', name: 'Abdul Basit Abdul Samad', arabicName: 'عبد الباسط عبد الصمد', country: 'Égypte' },
    { id: 'Husary', name: 'Mahmoud Khalil Al-Husary', arabicName: 'محمود خليل الحصري', country: 'Égypte' },
    { id: 'Sudais', name: 'Abdul Rahman Al-Sudais', arabicName: 'عبد الرحمن السديس', country: 'Arabie Saoudite' },
    { id: 'Shuraim', name: 'Saud Al-Shuraim', arabicName: 'سعود الشريم', country: 'Arabie Saoudite' },
    { id: 'Ghamdi', name: 'Saad Al-Ghamdi', arabicName: 'سعد الغامدي', country: 'Arabie Saoudite' },
    { id: 'Ajmi', name: 'Ahmad Al-Ajmi', arabicName: 'أحمد العجمي', country: 'Arabie Saoudite' },
    { id: 'Muaiqly', name: 'Maher Al-Muaiqly', arabicName: 'ماهر المعيقلي', country: 'Arabie Saoudite' }
  ];

  const [selectedReciter, setSelectedReciter] = useState('Alafasy');

  // Fonction pour obtenir l'URL audio selon le récitateur et la sourate (sourate complète)
  const getAudioUrl = (reciterId: string, surahNumber: number) => {
    const paddedNumber = surahNumber.toString().padStart(3, '0');
    
    const audioUrls: Record<string, string> = {
      'Alafasy': `https://server8.mp3quran.net/afs/${paddedNumber}.mp3`,
      'AbdulBasit': `https://server7.mp3quran.net/basit/${paddedNumber}.mp3`,
      'Husary': `https://server8.mp3quran.net/hos/${paddedNumber}.mp3`,
      'Sudais': `https://server11.mp3quran.net/sds/${paddedNumber}.mp3`,
      'Shuraim': `https://server12.mp3quran.net/shur/${paddedNumber}.mp3`,
      'Ghamdi': `https://server7.mp3quran.net/s_gmd/${paddedNumber}.mp3`,
      'Ajmi': `https://server10.mp3quran.net/ajm/${paddedNumber}.mp3`,
      'Muaiqly': `https://server13.mp3quran.net/maher/${paddedNumber}.mp3`
    };
    
    return audioUrls[reciterId] || audioUrls['Alafasy'];
  };

  const nextSurah = () => {
    if (currentSurah && currentSurah.number < 114) {
      playSurah(currentSurah.number + 1);
    }
  };

  const previousSurah = () => {
    if (currentSurah && currentSurah.number > 1) {
      playSurah(currentSurah.number - 1);
    }
  };

  const playSurah = (surahNumber: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    const surah = allSurahs.find(s => s.number === surahNumber);
    if (!surah) return;

    // Stop current audio if playing
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }

    // Load and play new audio
    const audioUrl = getAudioUrl(selectedReciter, surahNumber);
    console.log('Tentative lecture:', audioUrl, 'Récitateur:', selectedReciter);
    
    audio.src = audioUrl;
    setCurrentSurah(surah);
    
    // Forcer le chargement
    audio.load();
    
    audio.play()
      .then(() => {
        console.log('Audio démarré avec succès');
        setIsPlaying(true);
      })
      .catch((error) => {
        console.error('Erreur lecture audio:', error);
        
        // Essayer avec Alafasy en fallback
        const fallbackUrl = getAudioUrl('Alafasy', surahNumber);
        console.log('Tentative source alternative:', fallbackUrl);
        
        audio.src = fallbackUrl;
        audio.load();
        
        audio.play()
          .then(() => {
            console.log('Source alternative fonctionne');
            setIsPlaying(true);
          })
          .catch((err) => {
            console.error('Toutes sources échouent:', err);
            alert(`Erreur audio: ${error.message}\n\nVérifiez:\n1. Connexion internet\n2. Autorisations audio navigateur\n3. Volume système`);
          });
      });
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-emerald-800 mb-4">🕌 Écoute du Saint Coran</h1>
          <p className="text-xl text-emerald-600">Récitations authentiques - 114 sourates complètes</p>
        </div>

        {/* Sélection du récitateur */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🎙️ Choisir un Récitateur</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedReciter} onValueChange={setSelectedReciter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionner un récitateur" />
              </SelectTrigger>
              <SelectContent>
                {reciters.map((reciter) => (
                  <SelectItem key={reciter.id} value={reciter.id}>
                    <div className="flex flex-col">
                      <span className="font-medium">{reciter.name}</span>
                      <span className="text-sm text-gray-500">{reciter.arabicName} - {reciter.country}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Lecteur actuel */}
        {currentSurah && (
          <Card className="mb-8 bg-white/80 backdrop-blur">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-3xl font-bold text-emerald-800 mb-2">{currentSurah.arabicName}</h3>
                <h4 className="text-xl font-semibold">{currentSurah.number}. {currentSurah.name}</h4>
                <p className="text-gray-600">{currentSurah.frenchName} - {currentSurah.meaning}</p>
                <p className="text-sm text-gray-500">{currentSurah.verses} versets • Révélation {currentSurah.revelation === 'meccan' ? 'Mecquoise' : 'Médinoise'}</p>
                <p className="text-emerald-600 font-medium mt-2">
                  Récitateur: {reciters.find(r => r.id === selectedReciter)?.name}
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <Button onClick={previousSurah} disabled={!currentSurah || currentSurah.number === 1}>
                  <SkipBack className="h-5 w-5" />
                </Button>
                
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                  {isPlaying ? (
                    <Volume2 className="h-8 w-8 text-white animate-pulse" />
                  ) : (
                    <Play className="h-8 w-8 text-white" />
                  )}
                </div>
                
                <Button 
                  onClick={togglePlayPause}
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                
                <Button onClick={nextSurah} disabled={!currentSurah || currentSurah.number === 114}>
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Sourates populaires */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">🎧 Sourates les Plus Récitées</CardTitle>
            <p className="text-center text-gray-600">Cliquez pour écouter immédiatement</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Button 
                onClick={() => playSurah(1)}
                className="h-24 bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 flex flex-col justify-center text-left"
              >
                <div className="text-2xl font-bold mb-1">الفاتحة</div>
                <div className="text-sm opacity-90">1. Al-Fatiha (L'Ouverture)</div>
                <div className="text-xs opacity-75">7 versets • Sourate complète</div>
              </Button>

              <Button 
                onClick={() => playSurah(112)}
                className="h-24 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 flex flex-col justify-center"
              >
                <div className="text-2xl font-bold mb-1">الإخلاص</div>
                <div className="text-sm opacity-90">112. Al-Ikhlas (La Pureté)</div>
                <div className="text-xs opacity-75">4 versets • Sourate complète</div>
              </Button>

              <Button 
                onClick={() => playSurah(36)}
                className="h-24 bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 flex flex-col justify-center"
              >
                <div className="text-2xl font-bold mb-1">يس</div>
                <div className="text-sm opacity-90">36. Ya-Sin</div>
                <div className="text-xs opacity-75">83 versets • Sourate complète</div>
              </Button>

              <Button 
                onClick={() => playSurah(67)}
                className="h-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 flex flex-col justify-center"
              >
                <div className="text-2xl font-bold mb-1">الملك</div>
                <div className="text-sm opacity-90">67. Al-Mulk (La Royauté)</div>
                <div className="text-xs opacity-75">30 versets • Sourate complète</div>
              </Button>

              <Button 
                onClick={() => playSurah(113)}
                className="h-24 bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 flex flex-col justify-center"
              >
                <div className="text-2xl font-bold mb-1">الفلق</div>
                <div className="text-sm opacity-90">113. Al-Falaq (L'Aube)</div>
                <div className="text-xs opacity-75">5 versets • Sourate complète</div>
              </Button>

              <Button 
                onClick={() => playSurah(114)}
                className="h-24 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700 flex flex-col justify-center"
              >
                <div className="text-2xl font-bold mb-1">الناس</div>
                <div className="text-sm opacity-90">114. An-Nas (Les Hommes)</div>
                <div className="text-xs opacity-75">6 versets • Sourate complète</div>
              </Button>

            </div>
          </CardContent>
        </Card>

        {/* Test Audio Direct */}
        <div className="mt-8 text-center">
          <div className="bg-white/80 backdrop-blur rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">🔊 Test Audio Direct</h3>
            <div className="flex justify-center gap-4 mb-4">
              <button 
                onClick={() => {
                  const testAudio = new Audio('https://verses.quran.com/Alafasy/mp3/001001.mp3');
                  testAudio.play().catch(e => alert('Erreur: ' + e.message));
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                TEST 1: Verse Quran.com
              </button>
              
              <button 
                onClick={() => {
                  const testAudio = new Audio('https://server8.mp3quran.net/afs/001.mp3');
                  testAudio.play().catch(e => alert('Erreur: ' + e.message));
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                TEST 2: MP3Quran.net
              </button>
              
              <button 
                onClick={() => {
                  const testAudio = new Audio('https://audio.quranwbw.com/audio/mishary/001.mp3');
                  testAudio.play().catch(e => alert('Erreur: ' + e.message));
                }}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                TEST 3: QuranWBW
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-2xl mb-2">1️⃣</div>
                <p><strong>Testez</strong> les boutons TEST ci-dessus</p>
              </div>
              <div>
                <div className="text-2xl mb-2">2️⃣</div>
                <p><strong>Si ça marche</strong>, les sourates marchent aussi</p>
              </div>
              <div>
                <div className="text-2xl mb-2">3️⃣</div>
                <p><strong>Sinon</strong> problème de connexion/navigateur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Audio player (hidden) */}
        <audio
          ref={audioRef}
          onEnded={() => setIsPlaying(false)}
          onError={(e) => {
            console.error('Erreur audio:', e);
            setIsPlaying(false);
            alert('Erreur de lecture audio. Vérifiez votre connexion.');
          }}
        />

        {/* Liste complète des 114 sourates */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <List className="h-5 w-5" />
              Toutes les Sourates du Saint Coran (114)
            </CardTitle>
            <Button 
              onClick={() => setShowAllSurahs(!showAllSurahs)}
              variant="outline"
              className="w-fit"
            >
              {showAllSurahs ? 'Masquer' : 'Afficher toutes les sourates'}
            </Button>
          </CardHeader>
          {showAllSurahs && (
            <CardContent className="max-h-96 overflow-y-auto">
              <div className="grid grid-cols-1 gap-2">
                {allSurahs.map((surah) => (
                  <div key={surah.number} className="flex items-center justify-between p-3 border rounded-lg hover:bg-emerald-50">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">
                          {surah.number}
                        </div>
                        <div>
                          <div className="font-medium">{surah.name}</div>
                          <div className="text-xl text-emerald-700 font-bold">{surah.arabicName}</div>
                          <div className="text-sm text-gray-600">{surah.frenchName} - {surah.meaning}</div>
                          <div className="text-xs text-gray-500">
                            {surah.verses} versets • {surah.revelation === 'meccan' ? 'Mecquoise' : 'Médinoise'}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button 
                      onClick={() => playSurah(surah.number)}
                      size="sm"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white"
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Écouter
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-emerald-200 text-center text-sm text-emerald-600">
          <p className="mb-2">© 2025 Club Empreinte Digitale - Yakoubi Yamina</p>
          <p className="mb-2">🕌 Récitations authentiques certifiées halal - 8 récitateurs renommés</p>
          <p className="text-xs text-gray-500">
            Sources: MP3Quran.net • Toutes les 114 sourates du Saint Coran disponibles en intégralité
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Récitateurs: Mishary Al-Afasy, Abdul Basit, Al-Husary, Al-Sudais, Al-Shuraim, Al-Ghamdi, Al-Ajmi, Al-Muaiqly
          </p>
        </div>

      </div>
    </div>
  );
}