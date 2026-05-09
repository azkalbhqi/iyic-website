import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.warn("WARNING: GEMINI_API_KEY is not defined in environment variables.");
}
const genAI = new GoogleGenerativeAI(apiKey || "");

export async function getResearchSuggestions(paperText: string) {
  // Using the latest Gemini 3.1 Flash Lite model as requested
  const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });

  const prompt = `
    You are an expert academic research assistant. I will provide you with the text extracted from a research paper. 
    Your task is to:
    1. Summarize the key contributions.
    2. Identify potential gaps or future research directions.
    3. Suggest 3 specific improvements for the methodology or presentation.
    4. Provide 5 relevant keywords for indexing.

    Paper Text:
    ${paperText.substring(0, 30000)} // Limiting to 30k chars for stability
  `;

  try {
    console.log("Calling Gemini API...");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("Gemini response received successfully.");
    return text;
  } catch (error: any) {
    console.error("Gemini Error Details:", {
      message: error.message,
      stack: error.stack,
      status: error.status,
      statusText: error.statusText
    });
    throw new Error(`Failed to generate suggestions from Gemini: ${error.message}`);
  }
}
