
import { GoogleGenAI, Modality } from "@google/genai";

const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // remove the data:mime/type;base64, part
      resolve(result.split(',')[1]);
    };
    reader.onerror = (error) => reject(error);
  });

export const removeBackground = async (imageFile: File): Promise<string | null> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
  }
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const base64Data = await fileToBase64(imageFile);

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Data,
              mimeType: imageFile.type,
            },
          },
          {
            text: 'Remove the background of this image. The output should be the main subject with a transparent background.',
          },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64ImageBytes: string = part.inlineData.data;
        return `data:image/png;base64,${base64ImageBytes}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error removing background:", error);
    return null;
  }
};
