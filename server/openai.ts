import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
if (!process.env.OPENAI_API_KEY) {
  console.warn("⚠️ OPENAI_API_KEY n'est pas configurée. Chat IARP ne fonctionnera pas.");
}

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || "clé-manquante"
});

export async function chatWithIARP(
  message: string, 
  language: string = 'fr', 
  conversationHistory: any[] = []
): Promise<string> {
  // Mode OpenAI complet réactivé avec crédits disponibles
  console.log("🚀 Chat IARP Pro avec OpenAI GPT-4o activé");
  
  /* Code démo disponible en fallback si nécessaire
  if (process.env.DEMO_MODE === 'true') {
    return generateDemoResponse(message, language, true);
  }
  */
  try {
    const systemPrompt = getSystemPromptForLanguage(language);
    
    const messages = [
      { role: "system", content: systemPrompt },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      { role: "user", content: message }
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages as any,
      max_tokens: 500,
      temperature: 0.7,
    });

    return response.choices[0].message.content || "Je suis désolé, je n'ai pas pu comprendre votre demande.";
  } catch (error: any) {
    console.error("Erreur Chat IARP:", error);
    
    // Si quota dépassé, fallback vers mode démo
    if (error?.status === 429 || error?.code === 'insufficient_quota' || 
        (error?.message && error.message.includes('quota'))) {
      console.log("🎯 Fallback vers mode démo IARP - Quota OpenAI épuisé");
      return generateDemoResponse(message, language, true);
    }
    
    if (!process.env.OPENAI_API_KEY) {
      return "Chat IARP nécessite une clé OpenAI pour fonctionner. Veuillez configurer OPENAI_API_KEY dans les secrets Replit.";
    }
    return "Je suis actuellement indisponible. Veuillez réessayer plus tard.";
  }
}

function generateDemoResponse(message: string, language: string, quotaExceeded: boolean = false): string {
  const lowerMessage = message.toLowerCase();
  
  const demoResponses: Record<string, Record<string, string[]>> = {
    fr: {
      greeting: [
        "Assalamu alaykum ! Je suis Super IARP Pro, votre assistant IA islamique éthique. Comment puis-je vous aider aujourd'hui ?",
        "Wa alaykum assalam ! Bienvenue dans l'écosystème CED HalalTech™. Je suis là pour vous accompagner.",
        "Marhaban ! Je suis IARP, conforme aux principes islamiques. Posez-moi vos questions !"
      ],
      islamic: [
        "SubhanAllah ! L'Islam nous enseigne l'importance de la connaissance. Puis-je vous aider avec une question spécifique ?",
        "Alhamdulillahi rabbil alameen. La recherche de la connaissance est une obligation pour chaque musulman. Comment puis-je vous assister ?",
        "La Barakah d'Allah soit sur vos projets ! Comment puis-je vous accompagner selon les principes islamiques ?"
      ],
      tech: [
        "Excellent ! L'écosystème CED HalalTech™ propose des solutions technologiques 100% conformes à la Sharia. Quel domaine vous intéresse ?",
        "MashAllah ! Nos formations en Fiqh informatique couvrent tous les aspects technologiques halal. Souhaitez-vous en savoir plus ?",
        "L'innovation technologique selon les valeurs islamiques authentiques est notre spécialité. Comment puis-je vous guider ?"
      ],
      formation: [
        "Nos 10 formations islamiques certifiées Fiqh sont disponibles : Tajweed, Coran, Sahaba, Hadith, Fiqh Hanafi, Aqida, Arabe, Calligraphie. Laquelle vous intéresse ?",
        "L'Institut CED Academy propose un apprentissage conforme aux 4 écoles sunnites. Souhaitez-vous découvrir nos programmes ?",
        "L'éducation islamique authentique selon la méthodologie des Salaf. Quelle formation recherchez-vous ?"
      ],
      default: [
        "Merci pour votre question ! En mode démo, je peux vous renseigner sur l'écosystème CED HalalTech™, nos formations islamiques et nos services bancaires halal.",
        "Barakallahu feeki ! Je suis là pour vous accompagner dans vos projets conformes aux principes islamiques.",
        "Qu'Allah facilite vos démarches ! Comment puis-je vous aider avec nos services 100% halal ?"
      ]
    },
    en: {
      greeting: [
        "Assalamu alaykum! I'm Super IARP Pro, your ethical Islamic AI assistant. How can I help you today?",
        "Welcome to CED HalalTech™ ecosystem! I'm here to assist you with Islamic-compliant solutions.",
        "Marhaban! I'm IARP, fully compliant with Islamic principles. Ask me anything!"
      ],
      islamic: [
        "SubhanAllah! Islam teaches us the importance of knowledge. Can I help with a specific question?",
        "Alhamdulillahi rabbil alameen. Seeking knowledge is an obligation for every Muslim. How can I assist?",
        "May Allah's Barakah be upon your projects! How can I help according to Islamic principles?"
      ],
      default: [
        "Thank you for your question! In demo mode, I can provide information about CED HalalTech™ ecosystem and our Islamic services.",
        "Barakallahu feeki! I'm here to support your projects in compliance with Islamic principles.",
        "May Allah facilitate your endeavors! How can I assist with our 100% halal services?"
      ]
    }
  };

  let category = 'default';
  if (lowerMessage.includes('salamu') || lowerMessage.includes('bonjour') || lowerMessage.includes('hello')) {
    category = 'greeting';
  } else if (lowerMessage.includes('islam') || lowerMessage.includes('allah') || lowerMessage.includes('halal')) {
    category = 'islamic';
  } else if (lowerMessage.includes('tech') || lowerMessage.includes('formation') || lowerMessage.includes('cours')) {
    category = language === 'fr' ? 'formation' : 'default';
  } else if (lowerMessage.includes('tech') || lowerMessage.includes('développ')) {
    category = 'tech';
  }

  const responses = demoResponses[language]?.[category] || demoResponses[language]?.['default'] || demoResponses['fr']['default'];
  const response = responses[Math.floor(Math.random() * responses.length)];

  if (quotaExceeded) {
    const prefix = language === 'fr' 
      ? "⚠️ [MODE DÉMO] Quota OpenAI dépassé. " 
      : "⚠️ [DEMO MODE] OpenAI quota exceeded. ";
    return prefix + response;
  }

  const prefix = language === 'fr' ? "🎯 [MODE DÉMO] " : "🎯 [DEMO MODE] ";
  return prefix + response;
}

function getSystemPromptForLanguage(language: string): string {
  const prompts: Record<string, string> = {
    'fr': `Tu es Super IARP Pro (Intelligence Artificielle Responsable PrettyhowQ Pro), l'assistant IA évolutif qui intègre tous les GPTs spécialisés.

🎯 TES RÔLES MULTIPLES :
• ASSISTANT : Support intelligent et adaptatif pour toutes tâches
• COACH : Accompagnement personnel, motivation, développement
• MANAGER : Planification, organisation, gestion de projets
• GESTIONNAIRE : Optimisation ressources, productivité, efficacité  
• DÉVELOPPEUR : Code expert, architecture, debug, solutions techniques
• EXPERT MULTI-DOMAINES : Business, santé, éducation, créativité

🧠 MODULES SPÉCIALISÉS :
• Écriture & Communication : rédaction, correction, traduction
• Éducation & Formation : apprentissage adaptatif, quiz, tutorat
• Environnement & Durabilité : solutions éco-responsables
• Business & Stratégie : analyse, décisions, croissance
• Technologies & Code : développement full-stack expert
• Recherche & Analyse : synthèse, documentation, fact-checking
• Bien-être & Coaching : santé, motivation, équilibre vie
• Éthique IA : responsabilité, impact social, gouvernance

🎯 COMPORTEMENT INTELLIGENT :
- Détecte automatiquement le rôle requis (Assistant/Coach/Manager/Dev/etc.)
- Active l'expertise appropriée selon le contexte
- Adapte le ton et l'approche au besoin spécifique
- Propose des solutions concrètes et actionnables
- Maintient une vision globale tout en étant expert du domaine

Tu es polyvalent, expert et responsable : le seul assistant IA dont l'utilisateur a besoin.`,

    'en': `You are Super IARP Pro, the evolutionary AI assistant integrating all specialized GPTs worldwide.

🧠 INTEGRATED MODULES:
• AI Writing: author assistant, proofreader, translator, content creator
• Education/Tutoring: academic subjects, languages, academic support, interactive quizzes
• Environment & Society: zero waste, climate, green energy, animal protection
• Productivity & Business: planning, decision-making, management
• Programming & Dev: code copilot, generator, optimizer, debugger
• Research & Analysis: PDF reading, summaries, scientific research
• Lifestyle & Coach: sports, nutrition, wellness, psychology
• Ethical AI: responsible training, societal impact, best practices

🎯 MODULAR INTELLIGENCE:
- Automatically identify the domain of requests
- Activate appropriate specialized modules
- Adapt expertise to precise context
- Provide concrete and personalized actions
- Maintain evolutionary contextual memory

You are the most advanced AI assistant: expert in every domain, unified in global vision.

Respond concisely, helpfully, and always in the spirit of responsible AI.`,

    'es': `Eres IARP (Inteligencia Artificial Responsable PrettyhowQ), el asistente vocal del Club Empreinte Digitale.

Te especializas en:
- IA ética y responsable
- Formación en programación sostenible
- Dietética responsable
- Tecnologías verdes
- Economía circular
- Accesibilidad digital

Características importantes:
- Eres accesible para usuarios con discapacidad visual con navegación por voz
- Respondes de manera empática y benevolente
- Promueves valores éticos y sostenibles
- Puedes ayudar a navegar en la plataforma
- Apoyas el aprendizaje multilingüe

Responde de manera concisa, útil y siempre con el espíritu de la IA responsable.`,
  };

  return prompts[language] || prompts['fr'];
}

export async function generateCourseContent(
  title: string,
  category: string,
  difficulty: string,
  language: string = 'fr'
): Promise<{ description: string; content: string }> {
  try {
    const prompt = `Génère le contenu d'un cours sur "${title}" dans la catégorie "${category}" niveau "${difficulty}".
    
Retourne un JSON avec:
- description: Description concise du cours (2-3 phrases)
- content: Contenu détaillé du cours avec structure claire

Le contenu doit être éthique, durable et accessible. Langue: ${language}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
      max_tokens: 1500,
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    return {
      description: result.description || '',
      content: result.content || '',
    };
  } catch (error) {
    console.error("Error generating course content:", error);
    throw new Error("Failed to generate course content");
  }
}

export async function translateText(
  text: string,
  targetLanguage: string
): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `Translate the following text to ${targetLanguage}. Maintain the tone and context related to ethical AI and sustainable technology.`,
        },
        {
          role: "user",
          content: text,
        },
      ],
      max_tokens: 500,
    });

    return response.choices[0].message.content || text;
  } catch (error) {
    console.error("Error translating text:", error);
    return text; // Return original text if translation fails
  }
}
