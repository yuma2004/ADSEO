import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generatePostIdea = async (topic: string): Promise<{title: string, excerpt: string}> => {
  if (!topic.trim()) {
    throw new Error("トピックは空にできません。");
  }

  const prompt = `
    アダルトグッズのレビューブログ用の、極めて魅力的でエロティックな記事タイトルと、読者を惹きつけてやまない2文の抜粋を生成してください。
    製品またはトピックは「${topic}」です。
    トーンは、読者の欲望を掻き立てるような、官能的で、文学的、そして少し挑発的なものにしてください。
    肌が粟立つようなディテール、五感を刺激する比喩表現を用いて、読者が思わず息を飲むような文章を心がけてください。
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                title: { 
                  type: Type.STRING,
                  description: "官能的で文学的なブログ記事のタイトル"
                },
                excerpt: {
                  type: Type.STRING,
                  description: "読者の欲望を掻き立てる2文の抜粋"
                }
              },
              required: ['title', 'excerpt']
            }
        }
    });

    const text = response.text.trim();
    const parsedResponse = JSON.parse(text);
    
    if (parsedResponse.title && parsedResponse.excerpt) {
        return {
            title: parsedResponse.title,
            excerpt: parsedResponse.excerpt,
        };
    } else {
        throw new Error("AIからの応答形式が無効です。");
    }
  } catch (error) {
    console.error("記事のアイデア生成中にエラーが発生しました:", error);
    throw new Error("アイデアの生成に失敗しました。トピックを確認して、もう一度お試しください。");
  }
};
