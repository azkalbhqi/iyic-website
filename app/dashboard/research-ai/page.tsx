'use client'

import { Navbar } from "@/components/navbar"
import { useState } from "react"
import { analyzeResearchPaper } from "@/app/actions/rag"
import { FileUp, Sparkles, Loader2, BookOpen, CheckCircle2, AlertCircle } from "lucide-react"
import ReactMarkdown from 'react-markdown'

export default function ResearchAIPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)

  async function handleUpload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const file = formData.get('file') as File
    
    if (!file || file.size === 0) {
      setError("Please select a valid PDF file.")
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)
    setFileName(file.name)

    const res = await analyzeResearchPaper(formData)

    if (res.error) {
      setError(res.error)
    } else {
      setResult(res.data)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-accent/10 rounded-2xl">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">AI Research Assistant</h1>
            <p className="text-slate-500">Upload your paper to get instant suggestions and academic recommendations.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Upload Sidebar */}
          <div className="lg:col-span-2">
            <div className="glass p-8 rounded-3xl sticky top-24">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <FileUp className="w-5 h-5 text-accent" />
                Upload Paper
              </h3>
              
              <form onSubmit={handleUpload} className="space-y-6">
                <div className="relative group">
                  <input 
                    type="file" 
                    name="file" 
                    accept=".pdf"
                    required
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="border-2 border-dashed border-border group-hover:border-accent/50 transition-all rounded-2xl p-8 text-center bg-muted/30">
                    <BookOpen className="w-10 h-10 mx-auto mb-4 text-slate-300 group-hover:text-accent transition-colors" />
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {fileName || "Click or drag PDF here"}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-2">Max 10MB • PDF Only</p>
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-2 text-red-600 text-xs">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Start AI Analysis</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  Note: This tool uses Gemini 1.5 Flash. Your research remains private and is only used for session analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Results Area */}
          <div className="lg:col-span-3">
            {!result && !loading && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center glass rounded-3xl border-dashed border-2 opacity-50 text-center p-12">
                <Sparkles className="w-16 h-16 text-slate-200 mb-6" />
                <h3 className="text-xl font-bold mb-2">Ready to Analyze</h3>
                <p className="text-sm text-slate-500 max-w-xs">Upload your research paper to see the AI analysis results here.</p>
              </div>
            )}

            {loading && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center glass rounded-3xl text-center p-12 space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
                  <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Processing Your Research</h3>
                  <p className="text-sm text-slate-500 max-w-xs">Our AI is reading your paper and generating professional suggestions...</p>
                </div>
              </div>
            )}

            {result && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="glass p-8 rounded-3xl border-l-4 border-l-accent">
                  <div className="flex items-center gap-2 mb-6 text-accent">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">Analysis Complete</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{result.fileName}</h2>
                  <div className="prose prose-slate dark:prose-invert max-w-none mt-8 text-slate-600 dark:text-slate-300">
                    <ReactMarkdown>{result.suggestions}</ReactMarkdown>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
