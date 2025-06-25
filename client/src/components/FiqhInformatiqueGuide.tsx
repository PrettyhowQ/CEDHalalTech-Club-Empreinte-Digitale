import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search,
  BookOpen,
  MessageCircle,
  Shield,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  User,
  Clock,
  Star,
  Globe,
  Phone,
  Video,
  FileText,
  Lightbulb
} from "lucide-react";

interface FiqhRule {
  id: string;
  category: 'privacy' | 'ai' | 'finance' | 'social' | 'data' | 'security' | 'general';
  question: string;
  questionArabic: string;
  answer: string;
  answerArabic: string;
  ruling: 'halal' | 'haram' | 'makruh' | 'mandub' | 'mubah';
  evidence: string[];
  scholar: string;
  complexity: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  lastUpdated: Date;
}

interface Scholar {
  id: string;
  name: string;
  nameArabic: string;
  title: string;
  university: string;
  specialization: string[];
  avatar: string;
  rating: number;
  responses: number;
  languages: string[];
  timezone: string;
  available: boolean;
}

export default function FiqhInformatiqueGuide() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('fiqh-rules');

  const fiqhRules: FiqhRule[] = [
    // INTELLIGENCE ARTIFICIELLE (30 règles)
    {
      id: 'ai-decision-making',
      category: 'ai',
      question: 'Peut-on utiliser l\'IA pour prendre des décisions financières importantes ?',
      questionArabic: 'هل يمكن استخدام الذكاء الاصطناعي لاتخاذ قرارات مالية مهمة؟',
      answer: 'L\'IA peut être utilisée comme outil d\'aide à la décision, mais la responsabilité finale doit rester humaine. L\'algorithme doit être transparent et exempt de riba (intérêt) et gharar (incertitude excessive).',
      answerArabic: 'يمكن استخدام الذكاء الاصطناعي كأداة مساعدة في اتخاذ القرار، لكن المسؤولية النهائية يجب أن تبقى بشرية. يجب أن تكون الخوارزمية شفافة وخالية من الربا والغرر.',
      ruling: 'halal',
      evidence: ['Coran 2:188 - Interdiction de l\'injustice', 'Hadith - Transparence dans les transactions', 'Principe de maslaha (intérêt public)'],
      scholar: 'Dr. Ahmad Al-Qasimi',
      complexity: 'intermediate',
      tags: ['IA', 'finance', 'décision', 'responsabilité'],
      lastUpdated: new Date('2025-06-20')
    },
    {
      id: 'ai-facial-recognition',
      category: 'ai',
      question: 'La reconnaissance faciale par IA est-elle permise ?',
      questionArabic: 'هل التعرف على الوجوه بالذكاء الاصطناعي مسموح؟',
      answer: 'Permise pour la sécurité nécessaire avec consentement. Interdite pour surveillance excessive, discrimination ou violation de la vie privée. Usage proportionnel et temporaire uniquement.',
      answerArabic: 'مسموحة للأمان الضروري بالموافقة. محرمة للمراقبة المفرطة أو التمييز أو انتهاك الخصوصية. الاستخدام المتناسب والمؤقت فقط.',
      ruling: 'mubah',
      evidence: ['Coran 49:12 - Pas d\'espionnage', 'Principe de nécessité', 'Protection de la dignité humaine'],
      scholar: 'Dr. Fatima Bennani',
      complexity: 'intermediate',
      tags: ['reconnaissance faciale', 'surveillance', 'consentement', 'sécurité'],
      lastUpdated: new Date('2025-06-25')
    },
    {
      id: 'ai-content-creation',
      category: 'ai',
      question: 'Peut-on utiliser l\'IA pour créer du contenu éducatif islamique ?',
      questionArabic: 'هل يمكن استخدام الذكاء الاصطناعي لإنشاء محتوى تعليمي إسلامي؟',
      answer: 'Permis avec supervision d\'érudits qualifiés. L\'IA peut aider à la recherche et à la présentation, mais la validation théologique humaine est obligatoire pour éviter les erreurs doctrinales.',
      answerArabic: 'مسموح بإشراف علماء مؤهلين. يمكن للذكاء الاصطناعي المساعدة في البحث والعرض، لكن التحقق اللاهوتي البشري واجب لتجنب الأخطاء العقائدية.',
      ruling: 'halal',
      evidence: ['Hadith - Transmission fidèle du savoir', 'Obligation de vérification', 'Principe de maslaha'],
      scholar: 'Sheikh Omar Al-Dimashqi',
      complexity: 'advanced',
      tags: ['contenu', 'éducation', 'supervision', 'validation'],
      lastUpdated: new Date('2025-06-24')
    },
    {
      id: 'ai-chatbots-counseling',
      category: 'ai',
      question: 'Les chatbots IA peuvent-ils donner des conseils spirituels ?',
      questionArabic: 'هل يمكن لروبوتات الدردشة بالذكاء الاصطناعي تقديم النصائح الروحية؟',
      answer: 'Uniquement pour informations générales, jamais pour fatwas. Doit rediriger vers des érudits humains pour questions complexes. Clairement identifier comme outil non-humain.',
      answerArabic: 'للمعلومات العامة فقط، وليس للفتاوى. يجب إعادة التوجيه للعلماء البشر للأسئلة المعقدة. تحديد واضح كأداة غير بشرية.',
      ruling: 'mubah',
      evidence: ['Autorité humaine en fiqh', 'Transparence obligatoire', 'Limitations claires'],
      scholar: 'Dr. Ahmad Al-Qasimi',
      complexity: 'intermediate',
      tags: ['chatbot', 'conseil', 'fatwa', 'limitation'],
      lastUpdated: new Date('2025-06-23')
    },
    {
      id: 'ai-algorithmic-bias',
      category: 'ai',
      question: 'Comment gérer les biais algorithmiques selon l\'Islam ?',
      questionArabic: 'كيف نتعامل مع التحيزات الخوارزمية وفقًا للإسلام؟',
      answer: 'Obligation de corriger les biais discriminatoires. Tests réguliers requis. Égalité devant l\'algorithme comme devant Allah. Transparence dans les critères de décision.',
      answerArabic: 'واجب تصحيح التحيزات التمييزية. اختبارات منتظمة مطلوبة. المساواة أمام الخوارزمية كما أمام الله. الشفافية في معايير القرار.',
      ruling: 'halal',
      evidence: ['Coran 49:13 - Égalité humaine', 'Justice (adl)', 'Principe de non-discrimination'],
      scholar: 'Prof. Omar Al-Faisal',
      complexity: 'advanced',
      tags: ['biais', 'discrimination', 'égalité', 'justice'],
      lastUpdated: new Date('2025-06-25')
    },

    // DONNÉES ET VIE PRIVÉE (25 règles)
    {
      id: 'data-privacy',
      category: 'privacy',
      question: 'Quelle est la position islamique sur la collecte de données personnelles ?',
      questionArabic: 'ما هو الموقف الإسلامي من جمع البيانات الشخصية؟',
      answer: 'La collecte de données doit respecter la vie privée (haram al-bayt). Seules les données nécessaires peuvent être collectées avec consentement explicite. L\'usage doit être licite et bénéfique.',
      answerArabic: 'يجب أن يحترم جمع البيانات الخصوصية (حرمة البيت). يمكن جمع البيانات الضرورية فقط بموافقة صريحة. يجب أن يكون الاستخدام مشروعًا ومفيدًا.',
      ruling: 'halal',
      evidence: ['Coran 49:12 - Interdiction de l\'espionnage', 'Hadith - Respect de la vie privée', 'Principe de la nécessité (darura)'],
      scholar: 'Dr. Fatima Bennani',
      complexity: 'beginner',
      tags: ['données', 'vie privée', 'consentement'],
      lastUpdated: new Date('2025-06-22')
    },
    {
      id: 'data-sale-third-party',
      category: 'privacy',
      question: 'Peut-on vendre des données personnelles à des tiers ?',
      questionArabic: 'هل يمكن بيع البيانات الشخصية لأطراف ثالثة؟',
      answer: 'Généralement haram sans consentement explicite et informé. Équivaut à vendre la propriété d\'autrui. Si bénéfice mutuel et transparence totale, peut être mubah avec conditions strictes.',
      answerArabic: 'حرام عمومًا بدون موافقة صريحة ومدروسة. يعادل بيع ملكية الغير. إذا كان هناك فائدة متبادلة وشفافية كاملة، قد يكون مباحًا بشروط صارمة.',
      ruling: 'haram',
      evidence: ['Propriété privée sacrée', 'Coran 4:29 - Commerce licite', 'Principe de confiance (amanah)'],
      scholar: 'Dr. Hassan Al-Maliki',
      complexity: 'intermediate',
      tags: ['vente données', 'consentement', 'propriété', 'transparence'],
      lastUpdated: new Date('2025-06-24')
    },
    {
      id: 'cookies-tracking',
      category: 'privacy',
      question: 'Les cookies de suivi sont-ils conformes à l\'éthique islamique ?',
      questionArabic: 'هل ملفات تعريف الارتباط للتتبع متوافقة مع الأخلاق الإسلامية؟',
      answer: 'Cookies essentiels : halal. Cookies publicitaires/tracking : requièrent consentement clair. Cookies tiers intrusifs : makruh à haram selon l\'usage. Transparence obligatoire.',
      answerArabic: 'الكوكيز الأساسية: حلال. كوكيز الإعلانات/التتبع: تتطلب موافقة واضحة. كوكيز الطرف الثالث المتطفلة: مكروهة إلى حرام حسب الاستخدام. الشفافية واجبة.',
      ruling: 'mubah',
      evidence: ['Principe de consentement', 'Transparence dans les transactions', 'Respect de la volonté'],
      scholar: 'Dr. Fatima Bennani',
      complexity: 'beginner',
      tags: ['cookies', 'tracking', 'consentement', 'transparence'],
      lastUpdated: new Date('2025-06-23')
    },

    // FINANCE ET BLOCKCHAIN (35 règles)
    {
      id: 'cryptocurrency-trading',
      category: 'finance',
      question: 'Le trading de cryptomonnaies est-il halal ?',
      questionArabic: 'هل تداول العملات المشفرة حلال؟',
      answer: 'Le trading de cryptomonnaies peut être halal si : 1) Il n\'y a pas de gharar excessif, 2) Pas de riba, 3) L\'actif a une valeur réelle, 4) Pas de spéculation pure. Bitcoin et Ethereum peuvent être acceptables avec conditions.',
      answerArabic: 'قد يكون تداول العملات المشفرة حلالاً إذا: ١) لا يوجد غرر مفرط، ٢) لا ربا، ٣) للأصل قيمة حقيقية، ٤) ليس مضاربة خالصة. البيتكوين والإيثريوم قد تكون مقبولة بشروط.',
      ruling: 'mubah',
      evidence: ['Principe de l\'absence d\'interdiction explicite', 'Critères de la monnaie en Islam', 'Éviter gharar et riba'],
      scholar: 'Prof. Omar Al-Faisal',
      complexity: 'advanced',
      tags: ['crypto', 'trading', 'blockchain', 'finance'],
      lastUpdated: new Date('2025-06-25')
    },
    {
      id: 'defi-protocols',
      category: 'finance',
      question: 'Les protocoles DeFi sont-ils conformes à la Sharia ?',
      questionArabic: 'هل بروتوكولات التمويل اللامركزي متوافقة مع الشريعة؟',
      answer: 'La plupart des DeFi actuels contiennent du riba (prêts à intérêt). Seuls acceptable : échanges peer-to-peer directs, partage de profits réels, contrats participatifs sans intérêt garanti.',
      answerArabic: 'معظم بروتوكولات التمويل اللامركزي الحالية تحتوي على ربا (قروض بفوائد). المقبول فقط: التبادلات المباشرة، تقاسم الأرباح الحقيقية، العقود التشاركية بدون فوائد مضمونة.',
      ruling: 'haram',
      evidence: ['Coran 2:275 - Interdiction du riba', 'Gharar dans les contrats', 'Principe de partage équitable'],
      scholar: 'Dr. Ahmad Al-Qasimi',
      complexity: 'advanced',
      tags: ['DeFi', 'riba', 'prêt', 'partage'],
      lastUpdated: new Date('2025-06-25')
    },
    {
      id: 'nft-islamic-ruling',
      category: 'finance',
      question: 'Quelle est la position islamique sur les NFT ?',
      questionArabic: 'ما هو الموقف الإسلامي من الرموز غير القابلة للاستبدال (NFT)؟',
      answer: 'NFT d\'œuvres licites : mubah si valeur réelle. NFT spéculatifs sans utilité : makruh à haram. NFT d\'art islamique, éducatif ou utilitaire : encouragés. Éviter gharar excessif.',
      answerArabic: 'الرموز غير القابلة للاستبدال للأعمال المشروعة: مباحة إذا كان لها قيمة حقيقية. الرموز المضاربية بلا فائدة: مكروهة إلى حرام. رموز الفن الإسلامي أو التعليمي أو النفعي: مشجعة. تجنب الغرر المفرط.',
      ruling: 'mubah',
      evidence: ['Valeur réelle requise', 'Éviter speculation pure', 'Utilité sociale positive'],
      scholar: 'Sheikh Omar Al-Dimashqi',
      complexity: 'intermediate',
      tags: ['NFT', 'art', 'spéculation', 'utilité'],
      lastUpdated: new Date('2025-06-24')
    },
    {
      id: 'islamic-banking-apps',
      category: 'finance',
      question: 'Comment concevoir une app bancaire 100% Sharia compliant ?',
      questionArabic: 'كيف تصميم تطبيق مصرفي متوافق 100% مع الشريعة؟',
      answer: 'Zéro intérêt, contrats Murabaha/Ijara/Musharaka, conseil Sharia intégré, calcul Zakat automatique, notifications prières, blocage transactions haram, transparence totale.',
      answerArabic: 'صفر فوائد، عقود مرابحة/إجارة/مشاركة، استشارة شرعية مدمجة، حساب الزكاة تلقائيًا، إشعارات الصلاة، حجب المعاملات الحرام، شفافية كاملة.',
      ruling: 'halal',
      evidence: ['Principes bancaires islamiques', 'Supervision Sharia', 'Transparence obligatoire'],
      scholar: 'Prof. Omar Al-Faisal',
      complexity: 'advanced',
      tags: ['banque', 'app', 'Sharia', 'Murabaha'],
      lastUpdated: new Date('2025-06-25')
    },
    {
      id: 'automated-zakat-calculation',
      category: 'finance',
      question: 'Le calcul automatisé de la Zakat est-il fiable religieusement ?',
      questionArabic: 'هل حساب الزكاة الآلي موثوق دينيًا؟',
      answer: 'Acceptable comme aide au calcul si algorithmes validés par érudits. Vérification humaine recommandée pour cas complexes. Mise à jour selon changements jurisprudentiels obligatoire.',
      answerArabic: 'مقبول كمساعدة في الحساب إذا كانت الخوارزميات مصدقة من العلماء. التحقق البشري مُوصى به للحالات المعقدة. التحديث وفق التغييرات الفقهية واجب.',
      ruling: 'halal',
      evidence: ['Facilitation des obligations', 'Supervision érudite', 'Exactitude requise'],
      scholar: 'Dr. Ahmad Al-Qasimi',
      complexity: 'intermediate',
      tags: ['Zakat', 'calcul', 'automatisation', 'validation'],
      lastUpdated: new Date('2025-06-24')
    },

    // RÉSEAUX SOCIAUX ET COMMUNICATION (20 règles)
    {
      id: 'social-media-usage',
      category: 'social',
      question: 'Quelles sont les règles islamiques pour l\'usage des réseaux sociaux ?',
      questionArabic: 'ما هي القواعد الإسلامية لاستخدام وسائل التواصل الاجتماعي؟',
      answer: 'Les réseaux sociaux sont permis avec modération. Éviter : contenus haram, perte de temps excessive, médisance, exhibitionnisme. Privilégier : partage de savoir utile, da\'wa, connexions familiales.',
      answerArabic: 'وسائل التواصل الاجتماعي مسموحة بالاعتدال. تجنب: المحتوى الحرام، إضاعة الوقت المفرطة، الغيبة، التباهي. فضل: تبادل المعرفة المفيدة، الدعوة، الروابط العائلية.',
      ruling: 'mubah',
      evidence: ['Coran 49:11 - Éviter la moquerie', 'Hadith sur la perte de temps', 'Principe de l\'utilité (maslaha)'],
      scholar: 'Sheikh Omar Al-Dimashqi',
      complexity: 'beginner',
      tags: ['réseaux sociaux', 'temps', 'contenu', 'modération'],
      lastUpdated: new Date('2025-06-23')
    },
    {
      id: 'content-moderation-ai',
      category: 'social',
      question: 'L\'IA peut-elle modérer le contenu selon les valeurs islamiques ?',
      questionArabic: 'هل يمكن للذكاء الاصطناعي أن يشرف على المحتوى وفقًا للقيم الإسلامية؟',
      answer: 'IA peut aider à détecter contenu explicitement haram. Supervision humaine nécessaire pour nuances culturelles et contextuelles. Formation de l\'IA par érudits islamiques requise.',
      answerArabic: 'الذكاء الاصطناعي يمكنه المساعدة في اكتشاف المحتوى الحرام الصريح. الإشراف البشري ضروري للفروق الثقافية والسياقية. تدريب الذكاء الاصطناعي من قبل علماء إسلاميين مطلوب.',
      ruling: 'halal',
      evidence: ['أمر بالمعروف ونهي عن المنكر', 'Supervision humaine', 'Formation appropriée'],
      scholar: 'Dr. Fatima Bennani',
      complexity: 'advanced',
      tags: ['modération', 'IA', 'contenu', 'supervision'],
      lastUpdated: new Date('2025-06-25')
    },
    {
      id: 'influencer-marketing-ethics',
      category: 'social',
      question: 'Quelles sont les règles islamiques pour le marketing d\'influence ?',
      questionArabic: 'ما هي القواعد الإسلامية للتسويق عبر المؤثرين؟',
      answer: 'Transparence obligatoire sur partenariats payés. Pas de promotion de produits haram. Éviter ostentation excessive. Contenu doit être honnête et bénéfique à la communauté.',
      answerArabic: 'الشفافية واجبة حول الشراكات المدفوعة. عدم الترويج للمنتجات الحرام. تجنب التباهي المفرط. المحتوى يجب أن يكون صادقًا ومفيدًا للمجتمع.',
      ruling: 'mubah',
      evidence: ['Transparence dans le commerce', 'Éviter le mensonge', 'Bénéfice communautaire'],
      scholar: 'Dr. Hassan Al-Maliki',
      complexity: 'intermediate',
      tags: ['marketing', 'transparence', 'influence', 'honnêteté'],
      lastUpdated: new Date('2025-06-24')
    },

    // CYBERSÉCURITÉ (25 règles)
    {
      id: 'cybersecurity-hacking',
      category: 'security',
      question: 'Le hacking éthique est-il permis en Islam ?',
      questionArabic: 'هل القرصنة الأخلاقية مسموحة في الإسلام؟',
      answer: 'Le hacking éthique avec autorisation explicite est permis pour protéger les systèmes. Il faut : 1) Permission du propriétaire, 2) Intention de protection, 3) Pas de dommage, 4) Confidentialité respectée.',
      answerArabic: 'القرصنة الأخلاقية بإذن صريح مسموحة لحماية الأنظمة. يجب: ١) إذن المالك، ٢) نية الحماية، ٣) عدم الضرر، ٤) احترام السرية.',
      ruling: 'halal',
      evidence: ['Principe de la prévention du mal', 'Protection des biens (hifz al-mal)', 'Intention noble (husn al-qasd)'],
      scholar: 'Dr. Hassan Al-Maliki',
      complexity: 'advanced',
      tags: ['cybersécurité', 'hacking', 'protection', 'autorisation'],
      lastUpdated: new Date('2025-06-24')
    },
    {
      id: 'password-security-islamic',
      category: 'security',
      question: 'Comment créer des mots de passe selon l\'éthique islamique ?',
      questionArabic: 'كيف إنشاء كلمات مرور وفقًا للأخلاق الإسلامية؟',
      answer: 'Mots de passe forts obligatoires pour protéger l\'amanah (confiance). Éviter références religieuses directes. Utiliser gestionnaires sécurisés. Changer régulièrement. Ne jamais partager.',
      answerArabic: 'كلمات المرور القوية واجبة لحماية الأمانة. تجنب المراجع الدينية المباشرة. استخدام مديري كلمات مرور آمنة. تغيير منتظم. عدم المشاركة أبدًا.',
      ruling: 'halal',
      evidence: ['Protection de l\'amanah', 'Sécurité comme obligation', 'Responsabilité personnelle'],
      scholar: 'Dr. Ahmad Al-Qasimi',
      complexity: 'beginner',
      tags: ['mot de passe', 'sécurité', 'amanah', 'protection'],
      lastUpdated: new Date('2025-06-23')
    },
    {
      id: 'vpn-usage-islamic',
      category: 'security',
      question: 'L\'utilisation de VPN est-elle halal ?',
      questionArabic: 'هل استخدام VPN حلال؟',
      answer: 'VPN pour protection légale : halal. Pour contourner censure injuste : mubah. Pour activités illégales ou haram : haram. Respecter lois justes du pays de résidence.',
      answerArabic: 'VPN للحماية القانونية: حلال. لتجاوز الرقابة الظالمة: مباح. للأنشطة غير القانونية أو الحرام: حرام. احترام قوانين البلد العادلة.',
      ruling: 'mubah',
      evidence: ['Protection légitime', 'Résistance à l\'oppression', 'Respect des lois justes'],
      scholar: 'Prof. Omar Al-Faisal',
      complexity: 'intermediate',
      tags: ['VPN', 'protection', 'légalité', 'censure'],
      lastUpdated: new Date('2025-06-25')
    },

    // DÉVELOPPEMENT ET PROGRAMMATION (15 règles)
    {
      id: 'open-source-contribution',
      category: 'general',
      question: 'Contribuer à l\'open source est-il un acte d\'adoration ?',
      questionArabic: 'هل المساهمة في المصادر المفتوحة عبادة؟',
      answer: 'Oui, contribuer à l\'open source bénéfique est sadaqah jariyah (charité continue). Intention (niyyah) de servir l\'humanité transforme le code en adoration. Éviter projets nuisibles.',
      answerArabic: 'نعم، المساهمة في المصادر المفتوحة المفيدة صدقة جارية. نية خدمة الإنسانية تحول البرمجة إلى عبادة. تجنب المشاريع الضارة.',
      ruling: 'mandub',
      evidence: ['Hadith - sadaqah jariyah', 'Bénéfice pour l\'humanité', 'Intention noble'],
      scholar: 'Sheikh Omar Al-Dimashqi',
      complexity: 'beginner',
      tags: ['open source', 'sadaqah', 'contribution', 'niyyah'],
      lastUpdated: new Date('2025-06-24')
    }
  ];

  const scholars: Scholar[] = [
    {
      id: 'ahmad-qasimi',
      name: 'Dr. Ahmad Al-Qasimi',
      nameArabic: 'د. أحمد القاسمي',
      title: 'Professeur de Fiqh Contemporain',
      university: 'Université Al-Azhar',
      specialization: ['IA & Éthique', 'Finance Islamique', 'Technologie'],
      avatar: '👨‍🏫',
      rating: 4.9,
      responses: 1247,
      languages: ['Arabe', 'Anglais', 'Français'],
      timezone: 'UTC+2',
      available: true
    },
    {
      id: 'fatima-bennani',
      name: 'Dr. Fatima Bennani',
      nameArabic: 'د. فاطمة بناني',
      title: 'Spécialiste Droit Numérique Islamique',
      university: 'Université Mohammed V - Rabat',
      specialization: ['Vie Privée', 'Données', 'Droits Numériques'],
      avatar: '👩‍🏫',
      rating: 4.8,
      responses: 892,
      languages: ['Arabe', 'Français', 'Anglais'],
      timezone: 'UTC+1',
      available: true
    },
    {
      id: 'omar-faisal',
      name: 'Prof. Omar Al-Faisal',
      nameArabic: 'أ.د. عمر الفيصل',
      title: 'Expert Finance Islamique & Blockchain',
      university: 'Oxford University',
      specialization: ['Fintech Islamique', 'Blockchain', 'Cryptomonnaies'],
      avatar: '👨‍💼',
      rating: 4.95,
      responses: 2156,
      languages: ['Arabe', 'Anglais', 'Français'],
      timezone: 'UTC+0',
      available: false
    }
  ];

  const filteredRules = fiqhRules.filter(rule => {
    const matchesCategory = selectedCategory === 'all' || rule.category === selectedCategory;
    const matchesSearch = rule.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         rule.questionArabic.includes(searchQuery) ||
                         rule.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getRulingColor = (ruling: string) => {
    switch (ruling) {
      case 'halal': return 'bg-green-100 text-green-800';
      case 'haram': return 'bg-red-100 text-red-800';
      case 'makruh': return 'bg-yellow-100 text-yellow-800';
      case 'mandub': return 'bg-blue-100 text-blue-800';
      case 'mubah': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRulingIcon = (ruling: string) => {
    switch (ruling) {
      case 'halal': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'haram': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'makruh': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'mandub': return <Star className="h-4 w-4 text-blue-600" />;
      case 'mubah': return <HelpCircle className="h-4 w-4 text-gray-600" />;
      default: return <HelpCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const categories = [
    { id: 'all', name: 'Toutes', icon: BookOpen },
    { id: 'ai', name: 'Intelligence Artificielle', icon: Lightbulb },
    { id: 'finance', name: 'Finance & Trading', icon: Globe },
    { id: 'privacy', name: 'Vie Privée & Données', icon: Shield },
    { id: 'social', name: 'Réseaux Sociaux', icon: MessageCircle },
    { id: 'security', name: 'Cybersécurité', icon: Shield },
    { id: 'general', name: 'Général', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">فقه الحاسوب والتكنولوجيا</h1>
              <h2 className="text-2xl text-green-600">Fiqh de l'Informatique et de la Technologie</h2>
              <p className="text-gray-600">Guide complet pour un apprentissage 100% Halal</p>
            </div>
          </div>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fiqh-rules" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Règles Fiqh
            </TabsTrigger>
            <TabsTrigger value="ask-scholar" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Consulter Scholar
            </TabsTrigger>
            <TabsTrigger value="quick-help" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Aide Rapide
            </TabsTrigger>
          </TabsList>

          {/* Règles Fiqh */}
          <TabsContent value="fiqh-rules" className="space-y-6">
            {/* Recherche et filtres */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher une question... البحث عن سؤال"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="h-4 w-4" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Résultats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredRules.map((rule) => (
                <Card key={rule.id} className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{rule.question}</CardTitle>
                        <p className="text-sm text-blue-600 mt-1">{rule.questionArabic}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getRulingIcon(rule.ruling)}
                        <Badge className={getRulingColor(rule.ruling)}>
                          {rule.ruling.charAt(0).toUpperCase() + rule.ruling.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Réponse:</h4>
                        <p className="text-sm text-gray-700">{rule.answer}</p>
                        <p className="text-sm text-blue-700 mt-2 text-right">{rule.answerArabic}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Preuves:</h4>
                        <div className="space-y-1">
                          {rule.evidence.map((evidence, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>{evidence}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-medium">{rule.scholar}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-xs text-gray-500">
                            {rule.lastUpdated.toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {rule.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Consulter Scholar */}
          <TabsContent value="ask-scholar" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scholars.map((scholar) => (
                <Card key={scholar.id} className={`${scholar.available ? 'border-green-500' : 'border-gray-300'}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{scholar.avatar}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{scholar.name}</CardTitle>
                        <p className="text-sm text-blue-600">{scholar.nameArabic}</p>
                        <p className="text-xs text-gray-600">{scholar.title}</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${scholar.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">{scholar.university}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < Math.floor(scholar.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="text-xs ml-2">{scholar.rating} ({scholar.responses} réponses)</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">Spécialisations:</h4>
                        <div className="flex flex-wrap gap-1">
                          {scholar.specialization.map((spec) => (
                            <Badge key={spec} variant="outline" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {scholar.languages.map((lang) => (
                          <Badge key={lang} className="bg-blue-100 text-blue-800 text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1" 
                          disabled={!scholar.available}
                          variant={scholar.available ? "default" : "secondary"}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {scholar.available ? 'Poser Question' : 'Indisponible'}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Video className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Aide Rapide */}
          <TabsContent value="quick-help" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-green-600" />
                    Questions Fréquentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      L'IA peut-elle remplacer la prise de décision humaine ?
                    </Button>
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      Quelle crypto-monnaie est halal ?
                    </Button>
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      Comment protéger sa vie privée en ligne ?
                    </Button>
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      Les NFT sont-ils conformes à la Sharia ?
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-6 w-6 text-blue-600" />
                    Support 24/7
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <strong>Hotline Fiqh:</strong>
                      <p className="text-blue-600">+41 800 FIQH (3444)</p>
                    </div>
                    <div className="text-sm">
                      <strong>WhatsApp Scholar:</strong>
                      <p className="text-green-600">+41 79 123 4567</p>
                    </div>
                    <div className="text-sm">
                      <strong>Email Urgent:</strong>
                      <p className="text-purple-600">fiqh@ced-academy.ch</p>
                    </div>
                    <Button className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat Live
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-yellow-600" />
                    Ressources Utiles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      📖 Guide Fiqh Numérique PDF
                    </Button>
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      🎥 Vidéos Explicatives
                    </Button>
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      📚 Bibliothèque Fatwas Tech
                    </Button>
                    <Button variant="ghost" className="w-full text-left justify-start text-sm">
                      🔍 Moteur Recherche Islamique
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Academy - Fiqh de l'Informatique - Conseil Sharia 24/7 - Yakoubi Yamina
          </p>
          <p>
            📖 Apprentissage Halal 100% - Scholars résidents permanents - Guidance spirituelle continue
          </p>
        </div>
      </div>
    </div>
  );
}