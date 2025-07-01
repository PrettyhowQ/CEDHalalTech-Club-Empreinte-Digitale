import { Router } from 'express';
import OpenAI from 'openai';

const router = Router();

// Configuration OpenAI avec filtre halal (optionnel)
let openai: OpenAI | null = null;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

// Mots-clés et contenu haram à filtrer
const haram_keywords = [
  'alcohol', 'wine', 'beer', 'gambling', 'casino', 'lottery', 'porn', 'sexual', 'nude', 'naked',
  'dating', 'romance', 'flirt', 'music', 'song', 'concert', 'party', 'dance', 'club',
  'pork', 'bacon', 'ham', 'sausage', 'interest', 'usury', 'riba', 'loan with interest'
];

const haram_keywords_ar = [
  'خمر', 'نبيذ', 'بيرة', 'قمار', 'كازينو', 'يانصيب', 'إباحي', 'جنسي', 'عاري', 'مواعدة',
  'رقص', 'موسيقى', 'حفلة', 'نادي ليلي', 'خنزير', 'لحم خنزير', 'ربا', 'فوائد'
];

// Fonction de filtrage halal
function isHalalContent(text: string): { isHalal: boolean; filtered: boolean; cleanText: string } {
  let cleanText = text;
  let filtered = false;
  
  const allKeywords = [...haram_keywords, ...haram_keywords_ar];
  
  for (const keyword of allKeywords) {
    const regex = new RegExp(keyword, 'gi');
    if (regex.test(cleanText)) {
      cleanText = cleanText.replace(regex, '[contenu filtré]');
      filtered = true;
    }
  }
  
  // Vérifications supplémentaires pour contenu islamique approprié
  const inappropriate_phrases = [
    'human figure', 'person drawing', 'face drawing', 'portrait', 'selfie',
    'woman without hijab', 'revealing clothes', 'tight clothes', 'sexy',
    'violence', 'war', 'blood', 'death', 'killing'
  ];
  
  for (const phrase of inappropriate_phrases) {
    const regex = new RegExp(phrase, 'gi');
    if (regex.test(cleanText)) {
      cleanText = cleanText.replace(regex, '[non conforme - filtré]');
      filtered = true;
    }
  }
  
  return {
    isHalal: !filtered,
    filtered,
    cleanText
  };
}

// Prompts système pour différents générateurs
const systemPrompts = {
  'islamic-art': `Tu es un générateur d'art islamique spécialisé dans :
- Motifs géométriques islamiques traditionnels
- Calligraphie arabe élégante
- Patterns ornementaux sans représentation d'êtres vivants
- Designs inspirés de l'architecture islamique
- Couleurs harmonieuses et respectueuses

STRICTEMENT INTERDIT :
- Représentation d'êtres humains ou animaux
- Motifs non islamiques
- Symboles religieux non islamiques
- Contenu inapproprié

Réponds UNIQUEMENT avec des descriptions d'art géométrique islamique.`,

  'halal-code': `Tu es un expert en développement logiciel conforme au Fiqh informatique. Tu génères du code qui :
- Respecte les principes islamiques (pas de gambling, usure, contenu haram)
- Implémente la sécurité renforcée (principe Amâna)
- Protège la vie privée des utilisateurs
- Inclut des fonctionnalités islamiques (horaires prière, Qibla, Zakat)
- Utilise des bonnes pratiques de développement

Génère du code propre, sécurisé et documenté avec commentaires explicatifs.`,

  'islamic-text': `Tu es un rédacteur spécialisé dans le contenu islamique éducatif. Tu créés :
- Articles éducatifs respectueux
- Contenu spirituel authentique
- Guides pratiques islamiques
- Textes familiaux appropriés
- Citations du Coran et Hadith authentiques

STRICTEMENT INTERDIT :
- Contenu sexuel ou suggestif
- Promotion de choses haram
- Interprétations religieuses non autorisées
- Contenu diviseur ou sectaire

Toujours inclure "بسم الله الرحمن الرحيم" au début et "والله أعلم" à la fin.`,

  'nasheed-audio': `Tu es un compositeur de Nasheed (chants islamiques). Tu créés :
- Paroles spirituelles appropriées
- Textes éducatifs islamiques
- Contenu inspirant et respectueux
- Dhikr et rappels islamiques

INSTRUMENTS AUTORISÉS : Duff (tambour) uniquement
STRICTEMENT INTERDIT :
- Instruments musicaux (sauf Duff)
- Voix féminines
- Contenu non islamique
- Rythmes inappropriés

Génère uniquement les paroles, pas la musique.`,

  'islamic-video': `Tu es un créateur de contenu vidéo éducatif islamique. Tu planifies :
- Vidéos éducatives sur l'Islam
- Animations sans personnages vivants
- Contenu familial approprié
- Tutoriels et guides pratiques

STRICTEMENT INTERDIT :
- Représentation d'êtres vivants animés
- Contenu musical (sauf Duff)
- Scènes inappropriées
- Contenu non éducatif

Génère des scripts et descriptions de scènes.`,

  'ui-halal': `Tu es un designer UI/UX spécialisé dans les interfaces halal. Tu créés :
- Designs respectueux et modestes
- Interfaces accessibles
- Couleurs appropriées et harmonieuses
- Typographie claire et professionnelle
- Layouts inclusifs et familiaux

STRICTEMENT INTERDIT :
- Images inappropriées
- Couleurs agressives ou provocantes
- Designs sexualisés
- Interface gambling ou haram

Génère des descriptions détaillées d'interface utilisateur.`
};

// Route principale chat IA
router.post('/chat', async (req, res) => {
  try {
    const { message, model, settings, halalFilter } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ message: "Message requis" });
    }

    // Vérification halal du prompt
    if (halalFilter) {
      const halalCheck = isHalalContent(message);
      if (!halalCheck.isHalal) {
        return res.status(400).json({
          message: "Contenu non conforme aux guidelines halal",
          filtered: true,
          suggestion: "Veuillez reformuler votre demande en respectant les valeurs islamiques"
        });
      }
    }

    // Simulation d'appel OpenAI (remplacer par vraie API)
    let response = "";
    let tokens = 0;
    let filtered = false;

    if (process.env.OPENAI_API_KEY) {
      try {
        const completion = await openai.chat.completions.create({
          model: model.includes('gpt-4') ? 'gpt-4' : 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `Tu es Super IARP Pro, un assistant IA 100% conforme aux valeurs islamiques. 
              
PRINCIPES FONDAMENTAUX :
- Respecter strictement la Sharia et le Fiqh
- Promouvoir les valeurs islamiques positives
- Éviter tout contenu haram ou inapproprié
- Répondre de manière éducative et respectueuse
- Inclure des références islamiques quand approprié

INTERDIT :
- Contenu sexuel, violent ou inapproprié
- Promotion de choses haram (alcool, gambling, usure, etc.)
- Interprétations religieuses non autorisées
- Contenu diviseur ou sectaire

Réponds toujours de manière utile, respectueuse et conforme aux valeurs islamiques.`
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: settings?.maxTokens || 2048,
          temperature: settings?.temperature || 0.7,
          top_p: settings?.topP || 0.9,
          frequency_penalty: settings?.frequencyPenalty || 0,
          presence_penalty: settings?.presencePenalty || 0
        });

        response = completion.choices[0]?.message?.content || "Réponse non disponible";
        tokens = completion.usage?.total_tokens || 0;
      } catch (error) {
        console.error('Erreur OpenAI:', error);
        response = generateFallbackResponse(message);
        tokens = Math.floor(response.length / 4); // Estimation
      }
    } else {
      response = generateFallbackResponse(message);
      tokens = Math.floor(response.length / 4);
    }

    // Filtrage halal de la réponse
    if (halalFilter) {
      const halalCheck = isHalalContent(response);
      response = halalCheck.cleanText;
      filtered = halalCheck.filtered;
    }

    res.json({
      response,
      tokens,
      filtered,
      halalCheck: true,
      model: model
    });

  } catch (error) {
    console.error('Erreur chat IA:', error);
    res.status(500).json({ 
      message: "Erreur technique",
      response: "أعتذر، حدث خطأ تقني. يرجى إعادة المحاولة لاحقاً.\n\nJe m'excuse, une erreur technique s'est produite. Veuillez réessayer plus tard."
    });
  }
});

// Route génération de contenu spécialisé
router.post('/generate', async (req, res) => {
  try {
    const { prompt, generator, settings, halalFilter } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ message: "Prompt requis" });
    }

    if (!generator || !systemPrompts[generator as keyof typeof systemPrompts]) {
      return res.status(400).json({ message: "Générateur non valide" });
    }

    // Vérification halal du prompt
    if (halalFilter) {
      const halalCheck = isHalalContent(prompt);
      if (!halalCheck.isHalal) {
        return res.status(400).json({
          message: "Prompt non conforme aux guidelines halal",
          filtered: true,
          suggestion: "Veuillez reformuler en respectant les valeurs islamiques"
        });
      }
    }

    let result = "";
    let filtered = false;

    if (process.env.OPENAI_API_KEY) {
      try {
        const completion = await openai.chat.completions.create({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: systemPrompts[generator as keyof typeof systemPrompts]
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 2048,
          temperature: 0.8
        });

        result = completion.choices[0]?.message?.content || "Génération non disponible";
      } catch (error) {
        console.error('Erreur génération OpenAI:', error);
        result = generateSpecializedFallback(generator, prompt);
      }
    } else {
      result = generateSpecializedFallback(generator, prompt);
    }

    // Filtrage halal du résultat
    if (halalFilter) {
      const halalCheck = isHalalContent(result);
      result = halalCheck.cleanText;
      filtered = halalCheck.filtered;
    }

    res.json({
      result,
      filtered,
      halalCheck: true,
      generator,
      prompt: prompt.slice(0, 100) + (prompt.length > 100 ? '...' : '')
    });

  } catch (error) {
    console.error('Erreur génération:', error);
    res.status(500).json({ 
      message: "Erreur de génération",
      result: "Une erreur s'est produite lors de la génération. Veuillez réessayer."
    });
  }
});

// Route validation halal
router.post('/validate-halal', async (req, res) => {
  try {
    const { content } = req.body;

    if (!content || typeof content !== 'string') {
      return res.status(400).json({ message: "Contenu requis" });
    }

    const validation = isHalalContent(content);

    res.json({
      isHalal: validation.isHalal,
      filtered: validation.filtered,
      cleanContent: validation.cleanText,
      violations: validation.filtered ? ["Contenu inapproprié détecté"] : [],
      recommendations: validation.filtered ? [
        "Éviter le contenu haram",
        "Utiliser un langage respectueux",
        "Promouvoir les valeurs islamiques"
      ] : []
    });

  } catch (error) {
    console.error('Erreur validation halal:', error);
    res.status(500).json({ message: "Erreur de validation" });
  }
});

// Fonction de réponse de secours
function generateFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('salut') || lowerMessage.includes('bonjour')) {
    return `السلام عليكم ورحمة الله وبركاته

Bonjour et bienvenue ! Je suis Super IARP Pro, votre assistant IA 100% halal. Comment puis-je vous aider aujourd'hui de manière respectueuse et conforme aux valeurs islamiques ?`;
  }
  
  if (lowerMessage.includes('prière') || lowerMessage.includes('salat')) {
    return `Concernant la prière (Salât), voici quelques informations utiles :

🕌 **Les 5 prières obligatoires :**
- Fajr (aube)
- Dhuhr (midi)
- Asr (après-midi)
- Maghrib (coucher du soleil)
- Isha (nuit)

**Ressources recommandées :**
- Applications horaires de prière certifiées
- Boussole Qibla intégrée
- Rappels automatiques respectueux

والله أعلم`;
  }
  
  if (lowerMessage.includes('développement') || lowerMessage.includes('code')) {
    return `Pour le développement halal, voici les principes fondamentaux :

💻 **Fiqh Informatique :**
- Éviter tout système de gambling ou usure
- Protéger la vie privée (Amâna)
- Sécurité renforcée
- Contenu respectueux uniquement

**Fonctionnalités islamiques recommandées :**
- Calculateur Zakat
- Horaires de prière
- Direction Qibla
- Calendrier hijri

Souhaitez-vous des exemples de code spécifiques ?`;
  }
  
  return `بارك الله فيك

Merci pour votre question. Je suis là pour vous aider avec des informations conformes aux valeurs islamiques. 

Voici quelques domaines dans lesquels je peux vous assister :
- Éducation islamique
- Développement web halal
- Art et design respectueux
- Conseils spirituels
- Questions pratiques du quotidien musulman

Comment puis-je vous aider plus spécifiquement ?

والله أعلم`;
}

// Fonction de génération spécialisée de secours
function generateSpecializedFallback(generator: string, prompt: string): string {
  switch (generator) {
    case 'islamic-art':
      return `**Design Islamique Géométrique**

بسم الله الرحمن الرحيم

**Concept :** Motif géométrique inspiré de "${prompt}"

**Description :**
- Motifs octogonaux entrelacés
- Couleurs : bleu cyan et or doré
- Style : Géométrie islamique traditionnelle
- Inspiration : Architecture andalouse
- Symétrie parfaite sur 8 axes

**Éléments décoratifs :**
- Calligraphie "Allahu Akbar" en bordure
- Rosaces géométriques centrales
- Patterns répétitifs harmonieux
- Dégradés respectueux et élégants

والله الموفق`;

    case 'halal-code':
      return `// Code Halal - ${prompt}
بسم الله الرحمن الرحيم

/**
 * Fonction conforme Fiqh informatique
 * Respecte les principes islamiques
 */

class HalalSystem {
  constructor() {
    this.halalCompliant = true;
    this.dataProtection = true; // Principe Amâna
  }
  
  // Exemple de fonction halal
  calculateZakat(wealth, nisab = 85) {
    if (wealth >= nisab) {
      return wealth * 0.025; // 2.5% Zakat
    }
    return 0;
  }
  
  // Protection des données personnelles
  encryptUserData(data) {
    // Chiffrement respectant la vie privée
    return this.secureEncrypt(data);
  }
}

// والله أعلم`;

    case 'islamic-text':
      return `بسم الله الرحمن الرحيم

**${prompt}**

الحمد لله رب العالمين، والصلاة والسلام على رسولنا محمد وعلى آله وصحبه أجمعين.

L'Islam nous enseigne l'importance de ${prompt.toLowerCase()} dans notre vie quotidienne. Cette pratique, enracinée dans les enseignements du Coran et de la Sunna, nous guide vers une meilleure compréhension de notre religion.

**Points clés :**
- Respect des enseignements prophétiques
- Application pratique dans la vie moderne
- Bénéfices spirituels et sociaux
- Conformité aux 4 sources islamiques

**Conclusion :**
Que Allah nous guide sur le droit chemin et nous accorde Sa miséricorde.

والله أعلم وبالله التوفيق`;

    default:
      return `Contenu généré pour "${prompt}" selon les standards halal de ${generator}.`;
  }
}

export default router;