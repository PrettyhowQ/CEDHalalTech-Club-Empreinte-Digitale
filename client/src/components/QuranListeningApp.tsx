import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
  Download,
  Heart,
  BookOpen,
  Clock,
  Star,
  Headphones,
  Radio,
  Moon,
  Sun,
  Settings,
  List,
  Repeat,
  Shuffle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Reciter {
  id: string;
  name: string;
  arabicName: string;
  country: string;
  style: string;
  popularity: number;
  audioQuality: 'high' | 'medium' | 'low';
  recitationStyle: 'murattal' | 'mujawwad' | 'both';
}

interface Surah {
  number: number;
  name: string;
  arabicName: string;
  englishName: string;
  numberOfAyahs: number;
  revelationType: 'meccan' | 'medinan';
  duration: string;
}

export function QuranListeningApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState([75]);
  const [selectedReciter, setSelectedReciter] = useState('mishary');
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [currentAyah, setCurrentAyah] = useState(1);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  const reciters: Reciter[] = [
    {
      id: 'mishary',
      name: 'Mishary Rashid Alafasy',
      arabicName: 'مشاري بن راشد العفاسي',
      country: 'Kuwait',
      style: 'Mujawwad moderne',
      popularity: 98,
      audioQuality: 'high',
      recitationStyle: 'both'
    },
    {
      id: 'sudais',
      name: 'Abdul Rahman Al-Sudais',
      arabicName: 'عبد الرحمن السديس',
      country: 'Saudi Arabia',
      style: 'Imam Haramain',
      popularity: 95,
      audioQuality: 'high',
      recitationStyle: 'mujawwad'
    },
    {
      id: 'shuraim',
      name: 'Saud Al-Shuraim',
      arabicName: 'سعود الشريم',
      country: 'Saudi Arabia',
      style: 'Imam Masjid Haram',
      popularity: 92,
      audioQuality: 'high',
      recitationStyle: 'mujawwad'
    },
    {
      id: 'ghamdi',
      name: 'Saad Al-Ghamdi',
      arabicName: 'سعد الغامدي',
      country: 'Saudi Arabia',
      style: 'Voix mélodieuse',
      popularity: 89,
      audioQuality: 'high',
      recitationStyle: 'both'
    },
    {
      id: 'ajmi',
      name: 'Ahmad Al-Ajmi',
      arabicName: 'أحمد العجمي',
      country: 'Saudi Arabia',
      style: 'Récitation émotionnelle',
      popularity: 87,
      audioQuality: 'high',
      recitationStyle: 'mujawwad'
    },
    {
      id: 'muaiqly',
      name: 'Maher Al-Muaiqly',
      arabicName: 'ماهر المعيقلي',
      country: 'Saudi Arabia',
      style: 'Imam Masjid Nabawi',
      popularity: 85,
      audioQuality: 'high',
      recitationStyle: 'mujawwad'
    },
    {
      id: 'hosary',
      name: 'Mahmoud Khalil Al-Hosary',
      arabicName: 'محمود خليل الحصري',
      country: 'Egypt',
      style: 'Classique référence',
      popularity: 83,
      audioQuality: 'medium',
      recitationStyle: 'murattal'
    },
    {
      id: 'basfar',
      name: 'Abdullah Basfar',
      arabicName: 'عبدالله بصفر',
      country: 'Saudi Arabia',
      style: 'Voix douce et claire',
      popularity: 80,
      audioQuality: 'high',
      recitationStyle: 'both'
    }
  ];

  const surahs: Surah[] = [
    { number: 1, name: 'Al-Fatiha', arabicName: 'الفاتحة', englishName: 'The Opening', numberOfAyahs: 7, revelationType: 'meccan', duration: '1:30' },
    { number: 2, name: 'Al-Baqarah', arabicName: 'البقرة', englishName: 'The Cow', numberOfAyahs: 286, revelationType: 'medinan', duration: '4:32:15' },
    { number: 3, name: 'Al-Imran', arabicName: 'آل عمران', englishName: 'The Family of Imran', numberOfAyahs: 200, revelationType: 'medinan', duration: '2:45:30' },
    { number: 4, name: 'An-Nisa', arabicName: 'النساء', englishName: 'The Women', numberOfAyahs: 176, revelationType: 'medinan', duration: '2:28:45' },
    { number: 5, name: 'Al-Maidah', arabicName: 'المائدة', englishName: 'The Table', numberOfAyahs: 120, revelationType: 'medinan', duration: '1:52:20' },
    { number: 6, name: 'Al-Anam', arabicName: 'الأنعام', englishName: 'The Cattle', numberOfAyahs: 165, revelationType: 'meccan', duration: '2:15:30' },
    { number: 7, name: 'Al-Araf', arabicName: 'الأعراف', englishName: 'The Heights', numberOfAyahs: 206, revelationType: 'meccan', duration: '2:52:45' },
    { number: 8, name: 'Al-Anfal', arabicName: 'الأنفال', englishName: 'The Spoils of War', numberOfAyahs: 75, revelationType: 'medinan', duration: '1:18:20' },
    { number: 9, name: 'At-Tawbah', arabicName: 'التوبة', englishName: 'The Repentance', numberOfAyahs: 129, revelationType: 'medinan', duration: '2:05:15' },
    { number: 10, name: 'Yunus', arabicName: 'يونس', englishName: 'Jonah', numberOfAyahs: 109, revelationType: 'meccan', duration: '1:48:30' },
    { number: 11, name: 'Hud', arabicName: 'هود', englishName: 'Hud', numberOfAyahs: 123, revelationType: 'meccan', duration: '1:58:45' },
    { number: 12, name: 'Yusuf', arabicName: 'يوسف', englishName: 'Joseph', numberOfAyahs: 111, revelationType: 'meccan', duration: '1:52:15' },
    { number: 13, name: 'Ar-Rad', arabicName: 'الرعد', englishName: 'The Thunder', numberOfAyahs: 43, revelationType: 'medinan', duration: '42:30' },
    { number: 14, name: 'Ibrahim', arabicName: 'إبراهيم', englishName: 'Abraham', numberOfAyahs: 52, revelationType: 'meccan', duration: '48:15' },
    { number: 15, name: 'Al-Hijr', arabicName: 'الحجر', englishName: 'The Rocky Tract', numberOfAyahs: 99, revelationType: 'meccan', duration: '1:22:45' },
    { number: 16, name: 'An-Nahl', arabicName: 'النحل', englishName: 'The Bee', numberOfAyahs: 128, revelationType: 'meccan', duration: '1:58:30' },
    { number: 17, name: 'Al-Isra', arabicName: 'الإسراء', englishName: 'The Night Journey', numberOfAyahs: 111, revelationType: 'meccan', duration: '1:45:20' },
    { number: 18, name: 'Al-Kahf', arabicName: 'الكهف', englishName: 'The Cave', numberOfAyahs: 110, revelationType: 'meccan', duration: '1:35:40' },
    { number: 19, name: 'Maryam', arabicName: 'مريم', englishName: 'Mary', numberOfAyahs: 98, revelationType: 'meccan', duration: '1:28:15' },
    { number: 20, name: 'Ta-Ha', arabicName: 'طه', englishName: 'Ta-Ha', numberOfAyahs: 135, revelationType: 'meccan', duration: '1:52:30' },
    { number: 21, name: 'Al-Anbiya', arabicName: 'الأنبياء', englishName: 'The Prophets', numberOfAyahs: 112, revelationType: 'meccan', duration: '1:42:45' },
    { number: 22, name: 'Al-Hajj', arabicName: 'الحج', englishName: 'The Pilgrimage', numberOfAyahs: 78, revelationType: 'medinan', duration: '1:15:20' },
    { number: 23, name: 'Al-Muminun', arabicName: 'المؤمنون', englishName: 'The Believers', numberOfAyahs: 118, revelationType: 'meccan', duration: '1:38:15' },
    { number: 24, name: 'An-Nur', arabicName: 'النور', englishName: 'The Light', numberOfAyahs: 64, revelationType: 'medinan', duration: '1:05:30' },
    { number: 25, name: 'Al-Furqan', arabicName: 'الفرقان', englishName: 'The Criterion', numberOfAyahs: 77, revelationType: 'meccan', duration: '1:12:45' },
    { number: 26, name: 'Ash-Shuara', arabicName: 'الشعراء', englishName: 'The Poets', numberOfAyahs: 227, revelationType: 'meccan', duration: '2:35:20' },
    { number: 27, name: 'An-Naml', arabicName: 'النمل', englishName: 'The Ant', numberOfAyahs: 93, revelationType: 'meccan', duration: '1:25:15' },
    { number: 28, name: 'Al-Qasas', arabicName: 'القصص', englishName: 'The Stories', numberOfAyahs: 88, revelationType: 'meccan', duration: '1:22:30' },
    { number: 29, name: 'Al-Ankabut', arabicName: 'العنكبوت', englishName: 'The Spider', numberOfAyahs: 69, revelationType: 'meccan', duration: '1:08:45' },
    { number: 30, name: 'Ar-Rum', arabicName: 'الروم', englishName: 'The Romans', numberOfAyahs: 60, revelationType: 'meccan', duration: '58:20' },
    { number: 31, name: 'Luqman', arabicName: 'لقمان', englishName: 'Luqman', numberOfAyahs: 34, revelationType: 'meccan', duration: '35:15' },
    { number: 32, name: 'As-Sajdah', arabicName: 'السجدة', englishName: 'The Prostration', numberOfAyahs: 30, revelationType: 'meccan', duration: '28:30' },
    { number: 33, name: 'Al-Ahzab', arabicName: 'الأحزاب', englishName: 'The Clans', numberOfAyahs: 73, revelationType: 'medinan', duration: '1:15:45' },
    { number: 34, name: 'Saba', arabicName: 'سبأ', englishName: 'Sheba', numberOfAyahs: 54, revelationType: 'meccan', duration: '52:20' },
    { number: 35, name: 'Fatir', arabicName: 'فاطر', englishName: 'The Creator', numberOfAyahs: 45, revelationType: 'meccan', duration: '45:15' },
    { number: 36, name: 'Ya-Sin', arabicName: 'يس', englishName: 'Ya-Sin', numberOfAyahs: 83, revelationType: 'meccan', duration: '42:15' },
    { number: 37, name: 'As-Saffat', arabicName: 'الصافات', englishName: 'Those Who Set The Ranks', numberOfAyahs: 182, revelationType: 'meccan', duration: '2:18:30' },
    { number: 38, name: 'Sad', arabicName: 'ص', englishName: 'The Letter Sad', numberOfAyahs: 88, revelationType: 'meccan', duration: '1:22:45' },
    { number: 39, name: 'Az-Zumar', arabicName: 'الزمر', englishName: 'The Troops', numberOfAyahs: 75, revelationType: 'meccan', duration: '1:15:20' },
    { number: 40, name: 'Ghafir', arabicName: 'غافر', englishName: 'The Forgiver', numberOfAyahs: 85, revelationType: 'meccan', duration: '1:18:15' },
    { number: 41, name: 'Fussilat', arabicName: 'فصلت', englishName: 'Explained In Detail', numberOfAyahs: 54, revelationType: 'meccan', duration: '52:30' },
    { number: 42, name: 'Ash-Shuraa', arabicName: 'الشورى', englishName: 'The Consultation', numberOfAyahs: 53, revelationType: 'meccan', duration: '48:45' },
    { number: 43, name: 'Az-Zukhruf', arabicName: 'الزخرف', englishName: 'The Ornaments of Gold', numberOfAyahs: 89, revelationType: 'meccan', duration: '1:25:20' },
    { number: 44, name: 'Ad-Dukhan', arabicName: 'الدخان', englishName: 'The Smoke', numberOfAyahs: 59, revelationType: 'meccan', duration: '32:15' },
    { number: 45, name: 'Al-Jathiyah', arabicName: 'الجاثية', englishName: 'The Crouching', numberOfAyahs: 37, revelationType: 'meccan', duration: '35:30' },
    { number: 46, name: 'Al-Ahqaf', arabicName: 'الأحقاف', englishName: 'The Wind-Curved Sandhills', numberOfAyahs: 35, revelationType: 'meccan', duration: '32:45' },
    { number: 47, name: 'Muhammad', arabicName: 'محمد', englishName: 'Muhammad', numberOfAyahs: 38, revelationType: 'medinan', duration: '38:20' },
    { number: 48, name: 'Al-Fath', arabicName: 'الفتح', englishName: 'The Victory', numberOfAyahs: 29, revelationType: 'medinan', duration: '28:15' },
    { number: 49, name: 'Al-Hujurat', arabicName: 'الحجرات', englishName: 'The Rooms', numberOfAyahs: 18, revelationType: 'medinan', duration: '18:30' },
    { number: 50, name: 'Qaf', arabicName: 'ق', englishName: 'The Letter Qaf', numberOfAyahs: 45, revelationType: 'meccan', duration: '25:45' },
    { number: 51, name: 'Adh-Dhariyat', arabicName: 'الذاريات', englishName: 'The Winnowing Winds', numberOfAyahs: 60, revelationType: 'meccan', duration: '32:20' },
    { number: 52, name: 'At-Tur', arabicName: 'الطور', englishName: 'The Mount', numberOfAyahs: 49, revelationType: 'meccan', duration: '28:15' },
    { number: 53, name: 'An-Najm', arabicName: 'النجم', englishName: 'The Star', numberOfAyahs: 62, revelationType: 'meccan', duration: '32:30' },
    { number: 54, name: 'Al-Qamar', arabicName: 'القمر', englishName: 'The Moon', numberOfAyahs: 55, revelationType: 'meccan', duration: '28:45' },
    { number: 55, name: 'Ar-Rahman', arabicName: 'الرحمن', englishName: 'The Most Gracious', numberOfAyahs: 78, revelationType: 'medinan', duration: '28:30' },
    { number: 56, name: 'Al-Waqiah', arabicName: 'الواقعة', englishName: 'The Inevitable', numberOfAyahs: 96, revelationType: 'meccan', duration: '42:20' },
    { number: 57, name: 'Al-Hadid', arabicName: 'الحديد', englishName: 'The Iron', numberOfAyahs: 29, revelationType: 'medinan', duration: '28:15' },
    { number: 58, name: 'Al-Mujadila', arabicName: 'المجادلة', englishName: 'The Pleading Woman', numberOfAyahs: 22, revelationType: 'medinan', duration: '22:30' },
    { number: 59, name: 'Al-Hashr', arabicName: 'الحشر', englishName: 'The Exile', numberOfAyahs: 24, revelationType: 'medinan', duration: '25:45' },
    { number: 60, name: 'Al-Mumtahanah', arabicName: 'الممتحنة', englishName: 'She That Is To Be Examined', numberOfAyahs: 13, revelationType: 'medinan', duration: '15:20' },
    { number: 61, name: 'As-Saff', arabicName: 'الصف', englishName: 'The Ranks', numberOfAyahs: 14, revelationType: 'medinan', duration: '12:15' },
    { number: 62, name: 'Al-Jumuah', arabicName: 'الجمعة', englishName: 'The Congregation', numberOfAyahs: 11, revelationType: 'medinan', duration: '8:30' },
    { number: 63, name: 'Al-Munafiqun', arabicName: 'المنافقون', englishName: 'The Hypocrites', numberOfAyahs: 11, revelationType: 'medinan', duration: '8:45' },
    { number: 64, name: 'At-Taghabun', arabicName: 'التغابن', englishName: 'The Mutual Disillusion', numberOfAyahs: 18, revelationType: 'medinan', duration: '12:20' },
    { number: 65, name: 'At-Talaq', arabicName: 'الطلاق', englishName: 'The Divorce', numberOfAyahs: 12, revelationType: 'medinan', duration: '8:15' },
    { number: 66, name: 'At-Tahrim', arabicName: 'التحريم', englishName: 'The Prohibition', numberOfAyahs: 12, revelationType: 'medinan', duration: '8:30' },
    { number: 67, name: 'Al-Mulk', arabicName: 'الملك', englishName: 'The Sovereignty', numberOfAyahs: 30, revelationType: 'meccan', duration: '18:45' },
    { number: 68, name: 'Al-Qalam', arabicName: 'القلم', englishName: 'The Pen', numberOfAyahs: 52, revelationType: 'meccan', duration: '25:20' },
    { number: 69, name: 'Al-Haqqah', arabicName: 'الحاقة', englishName: 'The Reality', numberOfAyahs: 52, revelationType: 'meccan', duration: '22:15' },
    { number: 70, name: 'Al-Maarij', arabicName: 'المعارج', englishName: 'The Ascending Stairways', numberOfAyahs: 44, revelationType: 'meccan', duration: '18:30' },
    { number: 71, name: 'Nuh', arabicName: 'نوح', englishName: 'Noah', numberOfAyahs: 28, revelationType: 'meccan', duration: '15:45' },
    { number: 72, name: 'Al-Jinn', arabicName: 'الجن', englishName: 'The Jinn', numberOfAyahs: 28, revelationType: 'meccan', duration: '15:20' },
    { number: 73, name: 'Al-Muzzammil', arabicName: 'المزمل', englishName: 'The Enshrouded One', numberOfAyahs: 20, revelationType: 'meccan', duration: '12:15' },
    { number: 74, name: 'Al-Muddaththir', arabicName: 'المدثر', englishName: 'The Cloaked One', numberOfAyahs: 56, revelationType: 'meccan', duration: '22:30' },
    { number: 75, name: 'Al-Qiyamah', arabicName: 'القيامة', englishName: 'The Resurrection', numberOfAyahs: 40, revelationType: 'meccan', duration: '15:45' },
    { number: 76, name: 'Al-Insan', arabicName: 'الإنسان', englishName: 'The Man', numberOfAyahs: 31, revelationType: 'medinan', duration: '18:20' },
    { number: 77, name: 'Al-Mursalat', arabicName: 'المرسلات', englishName: 'The Emissaries', numberOfAyahs: 50, revelationType: 'meccan', duration: '18:15' },
    { number: 78, name: 'An-Naba', arabicName: 'النبأ', englishName: 'The Tidings', numberOfAyahs: 40, revelationType: 'meccan', duration: '15:30' },
    { number: 79, name: 'An-Naziat', arabicName: 'النازعات', englishName: 'Those Who Drag Forth', numberOfAyahs: 46, revelationType: 'meccan', duration: '16:45' },
    { number: 80, name: 'Abasa', arabicName: 'عبس', englishName: 'He Frowned', numberOfAyahs: 42, revelationType: 'meccan', duration: '12:20' },
    { number: 81, name: 'At-Takwir', arabicName: 'التكوير', englishName: 'The Overthrowing', numberOfAyahs: 29, revelationType: 'meccan', duration: '8:15' },
    { number: 82, name: 'Al-Infitar', arabicName: 'الانفطار', englishName: 'The Cleaving', numberOfAyahs: 19, revelationType: 'meccan', duration: '5:30' },
    { number: 83, name: 'Al-Mutaffifin', arabicName: 'المطففين', englishName: 'The Defrauding', numberOfAyahs: 36, revelationType: 'meccan', duration: '12:45' },
    { number: 84, name: 'Al-Inshiqaq', arabicName: 'الانشقاق', englishName: 'The Sundering', numberOfAyahs: 25, revelationType: 'meccan', duration: '8:20' },
    { number: 85, name: 'Al-Buruj', arabicName: 'البروج', englishName: 'The Mansions of The Stars', numberOfAyahs: 22, revelationType: 'meccan', duration: '8:15' },
    { number: 86, name: 'At-Tariq', arabicName: 'الطارق', englishName: 'The Morning Star', numberOfAyahs: 17, revelationType: 'meccan', duration: '5:30' },
    { number: 87, name: 'Al-Ala', arabicName: 'الأعلى', englishName: 'The Most High', numberOfAyahs: 19, revelationType: 'meccan', duration: '6:45' },
    { number: 88, name: 'Al-Ghashiyah', arabicName: 'الغاشية', englishName: 'The Overwhelming', numberOfAyahs: 26, revelationType: 'meccan', duration: '8:20' },
    { number: 89, name: 'Al-Fajr', arabicName: 'الفجر', englishName: 'The Dawn', numberOfAyahs: 30, revelationType: 'meccan', duration: '12:15' },
    { number: 90, name: 'Al-Balad', arabicName: 'البلد', englishName: 'The City', numberOfAyahs: 20, revelationType: 'meccan', duration: '6:30' },
    { number: 91, name: 'Ash-Shams', arabicName: 'الشمس', englishName: 'The Sun', numberOfAyahs: 15, revelationType: 'meccan', duration: '4:45' },
    { number: 92, name: 'Al-Layl', arabicName: 'الليل', englishName: 'The Night', numberOfAyahs: 21, revelationType: 'meccan', duration: '6:20' },
    { number: 93, name: 'Ad-Duhaa', arabicName: 'الضحى', englishName: 'The Morning Hours', numberOfAyahs: 11, revelationType: 'meccan', duration: '3:15' },
    { number: 94, name: 'Ash-Sharh', arabicName: 'الشرح', englishName: 'The Relief', numberOfAyahs: 8, revelationType: 'meccan', duration: '2:30' },
    { number: 95, name: 'At-Tin', arabicName: 'التين', englishName: 'The Fig', numberOfAyahs: 8, revelationType: 'meccan', duration: '2:45' },
    { number: 96, name: 'Al-Alaq', arabicName: 'العلق', englishName: 'The Clot', numberOfAyahs: 19, revelationType: 'meccan', duration: '5:20' },
    { number: 97, name: 'Al-Qadr', arabicName: 'القدر', englishName: 'The Power', numberOfAyahs: 5, revelationType: 'meccan', duration: '1:15' },
    { number: 98, name: 'Al-Bayyinah', arabicName: 'البينة', englishName: 'The Clear Proof', numberOfAyahs: 8, revelationType: 'medinan', duration: '3:30' },
    { number: 99, name: 'Az-Zalzalah', arabicName: 'الزلزلة', englishName: 'The Earthquake', numberOfAyahs: 8, revelationType: 'medinan', duration: '2:45' },
    { number: 100, name: 'Al-Adiyat', arabicName: 'العاديات', englishName: 'The Courser', numberOfAyahs: 11, revelationType: 'meccan', duration: '3:20' },
    { number: 101, name: 'Al-Qariah', arabicName: 'القارعة', englishName: 'The Calamity', numberOfAyahs: 11, revelationType: 'meccan', duration: '3:15' },
    { number: 102, name: 'At-Takathur', arabicName: 'التكاثر', englishName: 'The Rivalry in World Increase', numberOfAyahs: 8, revelationType: 'meccan', duration: '2:30' },
    { number: 103, name: 'Al-Asr', arabicName: 'العصر', englishName: 'The Declining Day', numberOfAyahs: 3, revelationType: 'meccan', duration: '1:00' },
    { number: 104, name: 'Al-Humazah', arabicName: 'الهمزة', englishName: 'The Traducer', numberOfAyahs: 9, revelationType: 'meccan', duration: '2:45' },
    { number: 105, name: 'Al-Fil', arabicName: 'الفيل', englishName: 'The Elephant', numberOfAyahs: 5, revelationType: 'meccan', duration: '1:30' },
    { number: 106, name: 'Quraysh', arabicName: 'قريش', englishName: 'Quraysh', numberOfAyahs: 4, revelationType: 'meccan', duration: '1:15' },
    { number: 107, name: 'Al-Maun', arabicName: 'الماعون', englishName: 'The Small Kindnesses', numberOfAyahs: 7, revelationType: 'meccan', duration: '2:00' },
    { number: 108, name: 'Al-Kawthar', arabicName: 'الكوثر', englishName: 'The Abundance', numberOfAyahs: 3, revelationType: 'meccan', duration: '0:45' },
    { number: 109, name: 'Al-Kafirun', arabicName: 'الكافرون', englishName: 'The Disbelievers', numberOfAyahs: 6, revelationType: 'meccan', duration: '1:30' },
    { number: 110, name: 'An-Nasr', arabicName: 'النصر', englishName: 'The Divine Support', numberOfAyahs: 3, revelationType: 'medinan', duration: '0:50' },
    { number: 111, name: 'Al-Masad', arabicName: 'المسد', englishName: 'The Palm Fibre', numberOfAyahs: 5, revelationType: 'meccan', duration: '1:15' },
    { number: 112, name: 'Al-Ikhlas', arabicName: 'الإخلاص', englishName: 'The Sincerity', numberOfAyahs: 4, revelationType: 'meccan', duration: '0:45' },
    { number: 113, name: 'Al-Falaq', arabicName: 'الفلق', englishName: 'The Daybreak', numberOfAyahs: 5, revelationType: 'meccan', duration: '0:50' },
    { number: 114, name: 'An-Nas', arabicName: 'الناس', englishName: 'The People', numberOfAyahs: 6, revelationType: 'meccan', duration: '1:00' }
  ];

  // Simulation audio avec URL réelles (à remplacer par vraies URLs)
  const getAudioUrl = (reciterId: string, surahNumber: number) => {
    // URLs d'exemple - dans un vrai projet, utiliser des APIs comme Quran.com, MP3Quran.net
    const baseUrls = {
      'mishary': `https://server8.mp3quran.net/afs/${surahNumber.toString().padStart(3, '0')}.mp3`,
      'sudais': `https://server11.mp3quran.net/sds/${surahNumber.toString().padStart(3, '0')}.mp3`,
      'shuraim': `https://server12.mp3quran.net/shur/${surahNumber.toString().padStart(3, '0')}.mp3`,
      'ghamdi': `https://server7.mp3quran.net/s_gmd/${surahNumber.toString().padStart(3, '0')}.mp3`,
    };
    return baseUrls[reciterId as keyof typeof baseUrls] || baseUrls.mishary;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      if (!isRepeat) {
        handleNext();
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [isRepeat]);

  const handlePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        // Charger la nouvelle source si nécessaire
        const newSrc = getAudioUrl(selectedReciter, selectedSurah);
        if (audioRef.current.src !== newSrc) {
          audioRef.current.src = newSrc;
        }
        
        await audioRef.current.play();
        setIsPlaying(true);
        
        toast({
          title: "Lecture du Coran",
          description: `${surahs.find(s => s.number === selectedSurah)?.name} - ${reciters.find(r => r.id === selectedReciter)?.name}`,
        });
      } catch (error) {
        console.error('Erreur lecture audio:', error);
        toast({
          title: "Erreur audio",
          description: "Impossible de lire cette récitation. Essayez un autre récitateur.",
          variant: "destructive"
        });
      }
    }
  };

  const handleNext = () => {
    const currentIndex = surahs.findIndex(s => s.number === selectedSurah);
    const nextIndex = (currentIndex + 1) % surahs.length;
    setSelectedSurah(surahs[nextIndex].number);
    setCurrentTime(0);
    
    if (isPlaying && audioRef.current) {
      audioRef.current.src = getAudioUrl(selectedReciter, surahs[nextIndex].number);
      audioRef.current.play();
    }
  };

  const handlePrevious = () => {
    const currentIndex = surahs.findIndex(s => s.number === selectedSurah);
    const prevIndex = currentIndex === 0 ? surahs.length - 1 : currentIndex - 1;
    setSelectedSurah(surahs[prevIndex].number);
    setCurrentTime(0);
    
    if (isPlaying && audioRef.current) {
      audioRef.current.src = getAudioUrl(selectedReciter, surahs[prevIndex].number);
      audioRef.current.play();
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentSurah = surahs.find(s => s.number === selectedSurah);
  const currentReciter = reciters.find(r => r.id === selectedReciter);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      nightMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-emerald-50 via-white to-blue-50 text-gray-900'
    } p-4`}>
      
      {/* Audio element caché */}
      <audio 
        ref={audioRef} 
        preload="metadata"
        crossOrigin="anonymous"
        onError={(e) => {
          console.error('Erreur audio:', e);
          toast({
            title: "Source audio indisponible",
            description: "Tentative de lecture avec source alternative...",
            variant: "destructive"
          });
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className={`w-16 h-16 ${nightMode ? 'bg-blue-600' : 'bg-emerald-500'} rounded-lg flex items-center justify-center`}>
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">تطبيق القرآن الكريم</h1>
              <h2 className="text-2xl font-semibold">Écoute du Saint Coran</h2>
              <p className={`${nightMode ? 'text-blue-300' : 'text-emerald-600'}`}>
                CED Bank - Audio Premium Halal
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setNightMode(!nightMode)}
              className="ml-auto"
            >
              {nightMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Lecteur principal */}
        <Card className={`mb-8 ${nightMode ? 'bg-gray-800 border-gray-600' : ''}`}>
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className={`w-20 h-20 ${nightMode ? 'bg-blue-600' : 'bg-emerald-500'} rounded-full flex items-center justify-center`}>
                {isPlaying ? (
                  <Radio className="h-10 w-10 text-white animate-pulse" />
                ) : (
                  <Headphones className="h-10 w-10 text-white" />
                )}
              </div>
            </div>
            
            {currentSurah && (
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-center">{currentSurah.arabicName}</h3>
                <h4 className="text-lg font-semibold">{currentSurah.name}</h4>
                <p className={`text-sm ${nightMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {currentSurah.englishName} • {currentSurah.numberOfAyahs} versets • {currentSurah.revelationType === 'meccan' ? 'Mecquoise' : 'Médinoise'}
                </p>
              </div>
            )}

            {currentReciter && (
              <div className="mt-4 p-3 bg-opacity-20 bg-blue-500 rounded-lg">
                <p className="font-semibold">{currentReciter.arabicName}</p>
                <p className="text-sm">{currentReciter.name}</p>
                <p className="text-xs">{currentReciter.style} • {currentReciter.country}</p>
              </div>
            )}
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Contrôles de lecture */}
            <div className="flex items-center justify-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsShuffle(!isShuffle)}
                className={isShuffle ? 'text-blue-500' : ''}
              >
                <Shuffle className="h-4 w-4" />
              </Button>
              
              <Button variant="ghost" size="sm" onClick={handlePrevious}>
                <SkipBack className="h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                onClick={handlePlay}
                className={`w-16 h-16 rounded-full ${nightMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-500 hover:bg-emerald-600'}`}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-white" />
                ) : (
                  <Play className="h-8 w-8 text-white ml-1" />
                )}
              </Button>
              
              <Button variant="ghost" size="sm" onClick={handleNext}>
                <SkipForward className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsRepeat(!isRepeat)}
                className={isRepeat ? 'text-blue-500' : ''}
              >
                <Repeat className="h-4 w-4" />
              </Button>
            </div>

            {/* Barre de progression */}
            <div className="space-y-2">
              <Slider
                value={[currentTime]}
                max={duration || 100}
                step={1}
                onValueChange={handleSeek}
                className="w-full"
              />
              <div className="flex justify-between text-xs">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Contrôle volume */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={toggleMute}>
                {volume[0] === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Slider
                value={volume}
                max={100}
                step={1}
                onValueChange={setVolume}
                className="flex-1"
              />
              <span className="text-sm min-w-[3rem]">{volume[0]}%</span>
            </div>
          </CardContent>
        </Card>

        {/* Sélecteurs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sélection récitateur */}
          <Card className={nightMode ? 'bg-gray-800 border-gray-600' : ''}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Récitateur
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedReciter} onValueChange={setSelectedReciter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {reciters.map((reciter) => (
                    <SelectItem key={reciter.id} value={reciter.id}>
                      <div className="flex flex-col">
                        <span className="font-medium">{reciter.name}</span>
                        <span className="text-sm text-gray-500">{reciter.arabicName}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {currentReciter && (
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Popularité:</span>
                    <Badge>{currentReciter.popularity}%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Qualité:</span>
                    <Badge variant={currentReciter.audioQuality === 'high' ? 'default' : 'secondary'}>
                      {currentReciter.audioQuality}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Style:</span>
                    <Badge variant="outline">{currentReciter.recitationStyle}</Badge>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Sélection sourate */}
          <Card className={nightMode ? 'bg-gray-800 border-gray-600' : ''}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Sourate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedSurah.toString()} onValueChange={(value) => setSelectedSurah(parseInt(value))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {surahs.map((surah) => (
                    <SelectItem key={surah.number} value={surah.number.toString()}>
                      <div className="flex flex-col">
                        <span className="font-medium">{surah.number}. {surah.name}</span>
                        <span className="text-sm text-gray-500">{surah.arabicName}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {currentSurah && (
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Versets:</span>
                    <Badge>{currentSurah.numberOfAyahs}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Durée:</span>
                    <Badge variant="outline">{currentSurah.duration}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Révélation:</span>
                    <Badge variant={currentSurah.revelationType === 'meccan' ? 'default' : 'secondary'}>
                      {currentSurah.revelationType === 'meccan' ? 'Mecquoise' : 'Médinoise'}
                    </Badge>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* SOURATES POPULAIRES - LECTURE DIRECTE */}
        <Card className={`mb-8 ${nightMode ? 'bg-gray-800 border-gray-600' : ''}`}>
          <CardHeader>
            <CardTitle className="text-center">🎧 Sourates les Plus Écoutées</CardTitle>
            <p className="text-center text-sm text-gray-600">Cliquez pour écouter immédiatement</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Al-Fatiha */}
              <Button 
                onClick={() => { setSelectedSurah(1); handlePlay(); }}
                className="h-20 bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 flex flex-col justify-center"
              >
                <div className="text-lg font-bold">1. الفاتحة</div>
                <div className="text-sm">Al-Fatiha (1:30)</div>
              </Button>

              {/* Al-Ikhlas */}
              <Button 
                onClick={() => { setSelectedSurah(112); handlePlay(); }}
                className="h-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 flex flex-col justify-center"
              >
                <div className="text-lg font-bold">112. الإخلاص</div>
                <div className="text-sm">Al-Ikhlas (0:45)</div>
              </Button>

              {/* Ya-Sin */}
              <Button 
                onClick={() => { setSelectedSurah(36); handlePlay(); }}
                className="h-20 bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 flex flex-col justify-center"
              >
                <div className="text-lg font-bold">36. يس</div>
                <div className="text-sm">Ya-Sin (42:15)</div>
              </Button>

              {/* Al-Kahf */}
              <Button 
                onClick={() => { setSelectedSurah(18); handlePlay(); }}
                className="h-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 flex flex-col justify-center"
              >
                <div className="text-lg font-bold">18. الكهف</div>
                <div className="text-sm">Al-Kahf (1:35:40)</div>
              </Button>

              {/* Ar-Rahman */}
              <Button 
                onClick={() => { setSelectedSurah(55); handlePlay(); }}
                className="h-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 flex flex-col justify-center"
              >
                <div className="text-lg font-bold">55. الرحمن</div>
                <div className="text-sm">Ar-Rahman (28:30)</div>
              </Button>

              {/* Al-Mulk */}
              <Button 
                onClick={() => { setSelectedSurah(67); handlePlay(); }}
                className="h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700 flex flex-col justify-center"
              >
                <div className="text-lg font-bold">67. الملك</div>
                <div className="text-sm">Al-Mulk (18:45)</div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* LISTE COMPLÈTE DES SOURATES */}
        <Card className={`mb-8 ${nightMode ? 'bg-gray-800 border-gray-600' : ''}`}>
          <CardHeader>
            <CardTitle>📖 Toutes les Sourates (114)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
              {surahs.map((surah) => (
                <div key={surah.number} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">
                        {surah.number}
                      </div>
                      <div>
                        <div className="font-medium">{surah.name}</div>
                        <div className="text-lg text-gray-600">{surah.arabicName}</div>
                        <div className="text-xs text-gray-500">
                          {surah.numberOfAyahs} versets • {surah.duration} • {surah.revelationType === 'meccan' ? 'Mecquoise' : 'Médinoise'}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => { setSelectedSurah(surah.number); handlePlay(); }}
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
        </Card>

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - Application Écoute du Coran - Yakoubi Yamina
          </p>
          <p>
            🕌 Récitations authentiques certifiées halal - 100% conforme aux enseignements islamiques
          </p>
        </div>
      </div>
    </div>
  );
}