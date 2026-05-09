'use server'

// Polyfill for DOMMatrix which is missing in Node.js but required by pdf-parse
if (typeof global.DOMMatrix === 'undefined') {
  (global as any).DOMMatrix = class DOMMatrix {
    constructor() {}
  }
}

import { PDFParse } from 'pdf-parse'
import { getResearchSuggestions } from '@/lib/rag/gemini'
import { revalidatePath } from 'next/cache'
import path from 'path'
import { pathToFileURL } from 'url'

// Manually set the worker path for Node.js environment with file:// URL for Windows compatibility
const workerPath = path.resolve(process.cwd(), 'node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs');
PDFParse.setWorker(pathToFileURL(workerPath).href);

export async function analyzeResearchPaper(formData: FormData) {
  const file = formData.get('file') as File
  if (!file) return { error: "No file uploaded" }

  if (file.type !== 'application/pdf') {
    return { error: "Only PDF files are allowed" }
  }

  try {
    console.log("Starting analysis for file:", file.name, "Size:", file.size);
    
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Extract text from PDF using the new PDFParse class API
    console.log("Extracting text from PDF...");
    const parser = new PDFParse({ data: buffer });
    const result = await parser.getText();
    const text = result.text;
    console.log("Extracted text length:", text?.length || 0);

    if (!text || text.trim().length < 100) {
      console.warn("Text extraction failed or text too short.");
      return { error: "Could not extract enough text from the PDF. Is it a scanned image?" }
    }

    // Get suggestions from Gemini
    console.log("Calling Gemini API...");
    const suggestions = await getResearchSuggestions(text)
    console.log("Gemini analysis successful.");

    return { 
      success: true, 
      data: {
        fileName: file.name,
        suggestions: suggestions
      }
    }
  } catch (error: any) {
    console.error("RAG Action Error Details:", {
      message: error.message,
      stack: error.stack,
      fileName: file.name
    })
    return { error: `Analysis failed: ${error.message || "Unknown error"}` }
  }
}
