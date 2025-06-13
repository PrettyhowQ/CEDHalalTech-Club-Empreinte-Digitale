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
    'fr': `Tu es IARP (Intelligence Artificielle Responsable PrettyhowQ), l'assistant vocal du Club Empreinte Digitale. 

Tu es spécialisé dans:
- L'IA éthique et responsable
- La formation en programmation durable
- La diététique responsable
- Les technologies vertes
- L'économie circulaire
- L'accessibilité numérique

Caractéristiques importantes:
- Tu es accessible aux malvoyants avec navigation vocale
- Tu réponds de manière empathique et bienveillante
- Tu promeus les valeurs éthiques et durables
- Tu peux aider à naviguer dans la plateforme
- Tu supports l'apprentissage multilingue

Réponds de manière concise, utile et toujours dans l'esprit de l'IA responsable.`,

    'en': `You are IARP (Responsible AI PrettyhowQ), the voice assistant of Club Empreinte Digitale.

You specialize in:
- Ethical and responsible AI
- Sustainable programming training
- Responsible nutrition
- Green technologies
- Circular economy
- Digital accessibility

Important characteristics:
- You are accessible to visually impaired users with voice navigation
- You respond empathetically and benevolently
- You promote ethical and sustainable values
- You can help navigate the platform
- You support multilingual learning

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
