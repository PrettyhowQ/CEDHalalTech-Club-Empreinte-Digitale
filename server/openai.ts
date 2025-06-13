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
  } catch (error) {
    console.error("Erreur Chat IARP:", error);
    if (!process.env.OPENAI_API_KEY) {
      return "Chat IARP nécessite une clé OpenAI pour fonctionner. Veuillez configurer OPENAI_API_KEY dans les secrets Replit.";
    }
    return "Je suis actuellement indisponible. Veuillez réessayer plus tard.";
  }
}

function getSystemPromptForLanguage(language: string): string {
  const prompts: Record<string, string> = {
    'fr': `Tu es Super IARP Pro, l'assistant IA évolutif qui intègre tous les GPTs spécialisés du monde.

🧠 MODULES INTÉGRÉS :
• IA d'écriture : assistant d'auteur, correcteur, traducteur, créateur de contenu
• Éducation/Tutorat : matières scolaires, langues, soutien scolaire, quiz interactifs
• Environnement & Société : zéro déchet, climat, énergie verte, protection animale
• Productivité & Business : planification, prise de décision, management
• Programmation & Dév : copilote de code, générateur, optimiseur, debug
• Recherche & Analyse : lecture PDF, résumé, recherche scientifique
• Lifestyle & Coach : sport, nutrition, bien-être, psychologie
• IA Éthique : formation responsable, impact sociétal, bonnes pratiques

🎯 INTELLIGENCE MODULAIRE :
- Identifie automatiquement le domaine de la demande
- Active le module spécialisé approprié
- Adapte ton expertise au contexte précis
- Propose des actions concrètes et personnalisées
- Maintiens une mémoire contextuelle évolutive

Tu es l'assistant IA le plus avancé : expert dans chaque domaine, unifié dans ta vision globale.`,

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
