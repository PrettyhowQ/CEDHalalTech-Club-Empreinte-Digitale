import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Clock,
  Star,
  Book,
  Scale,
  Mosque,
  Globe,
  Brain,
  Shield,
  Zap,
  Trophy,
  Heart,
  Lightbulb,
  Search,
  Filter
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ShariaQuery {
  id: string;
  question: string;
  category: 'banking' | 'investment' | 'insurance' | 'trade' | 'zakat' | 'general';
  timestamp: Date;
  status: 'pending' | 'processing' | 'answered' | 'verified';
  urgency: 'low' | 'medium' | 'high' | 'critical';
}

interface ShariaResponse {
  id: string;
  queryId: string;
  response: string;
  ruling: 'halal' | 'haram' | 'makruh' | 'mubah' | 'mustahab';
  confidence: number;
  sources: string[];
  scholar: string;
  timestamp: Date;
  verified: boolean;
  additionalNotes?: string;
}

interface ShariaScholar {
  id: string;
  name: string;
  arabicName: string;
  specialization: string[];
  institution: string;
  country: string;
  availability: 'online' | 'offline' | 'busy';
  rating: number;
  responsesCount: number;
  averageResponseTime: number; // en minutes
}

export function RealTimeShariaMQL() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('banking');
  const [urgency, setUrgency] = useState<string>('medium');
  const [conversation, setConversation] = useState<(ShariaQuery & { response?: ShariaResponse })[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeScholars, setActiveScholars] = useState<ShariaScholar[]>([]);
  const [selectedScholar, setSelectedScholar] = useState<string>('');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const categories = [
    { id: 'banking', name: 'المصرفية الإسلامية', icon: Building, color: 'bg-blue-500' },
    { id: 'investment', name: 'الاستثمار', icon: TrendingUp, color: 'bg-green-500' },
    { id: 'insurance', name: 'التأمين التكافلي', icon: Shield, color: 'bg-purple-500' },
    { id: 'trade', name: 'التجارة', icon: Scale, color: 'bg-orange-500' },
    { id: 'zakat', name: 'الزكاة', icon: Heart, color: 'bg-red-500' },
    { id: 'general', name: 'عام', icon: Book, color: 'bg-gray-500' }
  ];

  const scholars: ShariaScholar[] = [
    {
      id: 'scholar1',
      name: 'Dr. Ahmed Al-Mahmoud',
      arabicName: 'د. أحمد المحمود',
      specialization: ['Islamic Banking', 'Financial Jurisprudence', 'Sukuk'],
      institution: 'AAOIFI',
      country: 'Bahrain',
      availability: 'online',
      rating: 4.9,
      responsesCount: 1247,
      averageResponseTime: 3
    },
    {
      id: 'scholar2',
      name: 'Prof. Fatima Al-Zahra',
      arabicName: 'أ.د. فاطمة الزهراء',
      specialization: ['Takaful Insurance', 'Investment Ethics', 'Zakat Calculation'],
      institution: 'Islamic University of Madinah',
      country: 'Saudi Arabia',
      availability: 'online',
      rating: 4.8,
      responsesCount: 892,
      averageResponseTime: 5
    },
    {
      id: 'scholar3',
      name: 'Sheikh Omar Ibn Rashid',
      arabicName: 'الشيخ عمر بن راشد',
      specialization: ['Trade & Commerce', 'Modern Financial Instruments', 'Cryptocurrency'],
      institution: 'Dubai Islamic Economics Institute',
      country: 'UAE',
      availability: 'online',
      rating: 4.7,
      responsesCount: 634,
      averageResponseTime: 7
    },
    {
      id: 'ai_assistant',
      name: 'IARP Sharia AI',
      arabicName: 'مساعد الذكي الشرعي',
      specialization: ['Real-time Analysis', 'Quick Rulings', 'Basic Consultations'],
      institution: 'CED Bank AI Division',
      country: 'Global',
      availability: 'online',
      rating: 4.6,
      responsesCount: 15420,
      averageResponseTime: 0.5
    }
  ];

  const commonQuestions = [
    {
      question: "هل يجوز الاستثمار في الذهب الرقمي؟",
      category: "investment",
      urgency: "medium"
    },
    {
      question: "ما حكم التأمين على السيارة في سويسرا؟",
      category: "insurance",
      urgency: "high"
    },
    {
      question: "كيف أحسب زكاة الأسهم في الشركات المختلطة؟",
      category: "zakat",
      urgency: "medium"
    },
    {
      question: "هل البنك الرقمي بدون فروع حلال؟",
      category: "banking",
      urgency: "low"
    },
    {
      question: "ما حكم التداول بالعملات المشفرة؟",
      category: "investment",
      urgency: "high"
    }
  ];

  useEffect(() => {
    setActiveScholars(scholars.filter(s => s.availability === 'online'));
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  const submitQuery = async () => {
    if (!query.trim()) {
      toast({
        title: "يرجى إدخال سؤالك",
        description: "اكتب سؤالك الشرعي للحصول على الإجابة",
        variant: "destructive"
      });
      return;
    }

    const newQuery: ShariaQuery = {
      id: Date.now().toString(),
      question: query,
      category: selectedCategory as any,
      timestamp: new Date(),
      status: 'processing',
      urgency: urgency as any
    };

    setConversation(prev => [...prev, newQuery]);
    setQuery('');
    setIsLoading(true);

    // Simulation de traitement IA
    setTimeout(async () => {
      const response = await generateShariaResponse(newQuery);
      
      setConversation(prev => 
        prev.map(item => 
          item.id === newQuery.id 
            ? { ...item, response, status: 'answered' as const }
            : item
        )
      );
      setIsLoading(false);

      toast({
        title: "تم استلام الإجابة الشرعية",
        description: `إجابة من ${response.scholar} - درجة الثقة: ${response.confidence}%`,
      });
    }, 2000);
  };

  const generateShariaResponse = async (query: ShariaQuery): Promise<ShariaResponse> => {
    // Simulation IA - dans la réalité, ceci appellerait une vraie API IA/base de données
    const responses = {
      banking: {
        response: "وفقاً للمعايير الشرعية للمؤسسات المالية الإسلامية (AAOIFI)، هذا النوع من التعاملات المصرفية يعتبر جائزاً بشروط محددة تشمل تجنب الربا والغرر المفرط والقمار. يجب التأكد من امتثال المنتج للضوابط الشرعية المعتمدة.",
        ruling: 'mubah' as const,
        confidence: 92,
        sources: ['AAOIFI Standard No. 1', 'Islamic Fiqh Academy Resolution 65', 'Sahih Al-Bukhari 2067'],
        scholar: 'د. أحمد المحمود'
      },
      investment: {
        response: "الاستثمار في هذا المجال جائز شرعاً إذا كان خالياً من الربا والغرر والميسر. يُنصح بالتأكد من أن الاستثمار يتم في أنشطة حلال ووفقاً لمبادئ المشاركة في الربح والخسارة. يجب تجنب الاستثمارات المشبوهة أو التي تحتوي على نسبة عالية من المحرمات.",
        ruling: 'halal' as const,
        confidence: 88,
        sources: ['Quran 2:275', 'OIC Fiqh Academy Resolution 63', 'IFSB Guidelines'],
        scholar: 'أ.د. فاطمة الزهراء'
      },
      insurance: {
        response: "التأمين التكافلي (التعاوني) جائز شرعاً كونه يقوم على مبدأ التعاون والتكافل بين المشتركين وليس على المقامرة. يجب أن يكون الهيكل خالياً من الربا والغرر المفرط، مع وجود هيئة رقابة شرعية معتمدة لضمان الامتثال.",
        ruling: 'mustahab' as const,
        confidence: 95,
        sources: ['AAOIFI Takaful Standard', 'Islamic Insurance Guidelines', 'Majma Al-Fiqh Resolution'],
        scholar: 'د. أحمد المحمود'
      }
    };

    const defaultResponse = responses[query.category as keyof typeof responses] || responses.banking;
    
    return {
      id: Date.now().toString(),
      queryId: query.id,
      response: defaultResponse.response,
      ruling: defaultResponse.ruling,
      confidence: defaultResponse.confidence,
      sources: defaultResponse.sources,
      scholar: defaultResponse.scholar,
      timestamp: new Date(),
      verified: true,
      additionalNotes: query.urgency === 'critical' ? 'تم تسريع هذه الإجابة نظراً لأهميتها العالية' : undefined
    };
  };

  const getRulingColor = (ruling: string) => {
    switch (ruling) {
      case 'halal': return 'bg-green-100 text-green-800';
      case 'haram': return 'bg-red-100 text-red-800';
      case 'makruh': return 'bg-orange-100 text-orange-800';
      case 'mubah': return 'bg-blue-100 text-blue-800';
      case 'mustahab': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRulingArabic = (ruling: string) => {
    switch (ruling) {
      case 'halal': return 'حلال';
      case 'haram': return 'حرام';
      case 'makruh': return 'مكروه';
      case 'mubah': return 'مباح';
      case 'mustahab': return 'مستحب';
      default: return 'غير محدد';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">مستشار الشريعة الذكي</h1>
              <h2 className="text-2xl font-semibold text-emerald-600">Real-Time Sharia Advisory AI</h2>
              <p className="text-gray-600">استشارات شرعية فورية بالذكاء الاصطناعي - علماء معتمدون ٢٤/٧</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Interface de consultation */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    الاستشارة الشرعية المباشرة
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge className="bg-green-500 text-white">
                      {activeScholars.length} علماء متاحون
                    </Badge>
                    <Badge variant="outline">وقت الاستجابة: أقل من دقيقة</Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                {/* Zone de conversation */}
                <div className="flex-1 overflow-y-auto bg-gray-50 rounded-lg p-4 mb-4">
                  {conversation.length === 0 ? (
                    <div className="text-center text-gray-500 mt-20">
                      <Mosque className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                      <h3 className="text-lg font-semibold mb-2">مرحباً بك في المستشار الشرعي</h3>
                      <p className="mb-4">اسأل أي سؤال شرعي متعلق بالخدمات المالية الإسلامية</p>
                      <div className="grid grid-cols-1 gap-2 max-w-md mx-auto">
                        {commonQuestions.slice(0, 3).map((q, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-xs p-2 h-auto"
                            onClick={() => setQuery(q.question)}
                          >
                            {q.question}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {conversation.map((item) => (
                        <div key={item.id} className="space-y-4">
                          {/* Question de l'utilisateur */}
                          <div className="flex justify-end">
                            <div className="max-w-xl bg-emerald-500 text-white rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <User className="h-4 w-4" />
                                <span className="text-sm font-medium">أنت</span>
                                <Badge 
                                  className={`${getUrgencyColor(item.urgency)} text-white text-xs`}
                                >
                                  {item.urgency}
                                </Badge>
                              </div>
                              <p className="text-sm leading-relaxed">{item.question}</p>
                              <div className="text-xs opacity-80 mt-2">
                                {item.timestamp.toLocaleTimeString('ar-SA')}
                              </div>
                            </div>
                          </div>

                          {/* Réponse du système */}
                          {item.response ? (
                            <div className="flex justify-start">
                              <div className="max-w-2xl bg-white border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-3">
                                  <Bot className="h-4 w-4 text-emerald-600" />
                                  <span className="text-sm font-medium">{item.response.scholar}</span>
                                  {item.response.verified && (
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  )}
                                  <Badge className={getRulingColor(item.response.ruling)}>
                                    {getRulingArabic(item.response.ruling)}
                                  </Badge>
                                </div>
                                
                                <p className="text-sm leading-relaxed mb-4 text-gray-800">
                                  {item.response.response}
                                </p>

                                <div className="space-y-3">
                                  <div className="flex items-center gap-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-xs text-gray-600">
                                      درجة الثقة: {item.response.confidence}%
                                    </span>
                                    <Clock className="h-4 w-4 text-blue-500 ml-4" />
                                    <span className="text-xs text-gray-600">
                                      {item.response.timestamp.toLocaleTimeString('ar-SA')}
                                    </span>
                                  </div>

                                  <div>
                                    <h5 className="text-xs font-semibold text-gray-700 mb-1">المراجع الشرعية:</h5>
                                    <div className="flex flex-wrap gap-1">
                                      {item.response.sources.map((source, index) => (
                                        <Badge key={index} variant="outline" className="text-xs">
                                          {source}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>

                                  {item.response.additionalNotes && (
                                    <div className="p-2 bg-blue-50 rounded text-xs text-blue-700">
                                      <AlertTriangle className="h-3 w-3 inline mr-1" />
                                      {item.response.additionalNotes}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ) : item.status === 'processing' ? (
                            <div className="flex justify-start">
                              <div className="bg-white border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center gap-2">
                                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-emerald-500"></div>
                                  <span className="text-sm text-gray-600">جاري البحث في المراجع الشرعية...</span>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      ))}
                      <div ref={chatEndRef} />
                    </div>
                  )}
                </div>

                {/* Zone de saisie */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">الفئة</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full text-sm border border-gray-300 rounded-md p-2"
                      >
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">الأولوية</label>
                      <select
                        value={urgency}
                        onChange={(e) => setUrgency(e.target.value)}
                        className="w-full text-sm border border-gray-300 rounded-md p-2"
                      >
                        <option value="low">منخفضة</option>
                        <option value="medium">متوسطة</option>
                        <option value="high">عالية</option>
                        <option value="critical">حرجة</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="اكتب سؤالك الشرعي هنا..."
                      className="flex-1"
                      onKeyPress={(e) => e.key === 'Enter' && submitQuery()}
                      disabled={isLoading}
                    />
                    <Button 
                      onClick={submitQuery} 
                      disabled={isLoading || !query.trim()}
                      className="px-6"
                    >
                      {isLoading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Panel latéral */}
          <div className="space-y-6">
            {/* Scholars en ligne */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-gold-500" />
                  العلماء المتاحون
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activeScholars.map((scholar) => (
                    <div key={scholar.id} className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-emerald-600">
                            {scholar.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{scholar.arabicName}</div>
                          <div className="text-xs text-gray-600">{scholar.institution}</div>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      
                      <div className="text-xs text-gray-600 mb-2">
                        <div className="flex justify-between">
                          <span>التقييم:</span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            {scholar.rating}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>وقت الاستجابة:</span>
                          <span>{scholar.averageResponseTime} دقيقة</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {scholar.specialization.slice(0, 2).map((spec, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Questions courantes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  أسئلة شائعة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {commonQuestions.map((q, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="w-full text-right justify-start h-auto p-2 text-xs"
                      onClick={() => setQuery(q.question)}
                    >
                      <div className="text-right">
                        <div className="font-medium">{q.question}</div>
                        <div className="text-gray-500 text-xs">
                          {categories.find(c => c.id === q.category)?.name}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Statut système */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  حالة النظام
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">الذكاء الاصطناعي</span>
                    <Badge className="bg-green-500 text-white">نشط</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">قاعدة البيانات الشرعية</span>
                    <Badge className="bg-green-500 text-white">محدثة</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">الامتثال للمعايير</span>
                    <Badge className="bg-green-500 text-white">١٠٠٪</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">العلماء المعتمدون</span>
                    <Badge className="bg-blue-500 text-white">{activeScholars.length} متاح</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p className="mb-2">
            © 2025 CED Bank - مستشار الشريعة الذكي - Yakoubi Yamina
          </p>
          <p>
            🕌 استشارات معتمدة من علماء الشريعة - ذكاء اصطناعي أخلاقي - امتثال كامل للمعايير الإسلامية
          </p>
        </div>
      </div>
    </div>
  );
}