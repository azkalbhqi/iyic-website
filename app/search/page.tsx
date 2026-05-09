'use client'

import { useState } from "react"
import { searchJournals } from "@/app/actions/search"
import { Navbar } from "@/components/navbar"
import { Search, Loader2, BookOpen, ExternalLink, Bookmark, Filter } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError(null)

    const result = await searchJournals(query)

    if (result.data === null || result.data === undefined) {
      setError("Failed to search journals.")
    } else {
      setResults(result.data)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">AI Journal Search</h1>
          <p className="text-slate-500">Discover millions of academic papers using our indexed research engine.</p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative mb-12">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by topic, keyword, or author..."
            className="w-full pl-14 pr-32 py-5 rounded-2xl glass text-lg focus:ring-4 focus:ring-accent/20 outline-none transition-all shadow-2xl"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-3 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center gap-2"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Search"}
          </button>
        </form>

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-center mb-8">
            {error}
          </div>
        )}

        {/* Results */}
        <div className="space-y-6">
          <AnimatePresence>
            {results.map((paper, index) => (
              <motion.div
                key={paper.paperId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass p-6 rounded-2xl border border-border/50 hover:border-accent/30 transition-all group"
              >
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-accent" />
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                        {paper.venue || "Academic Journal"} • {paper.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors line-clamp-2">
                      {paper.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-muted rounded-lg transition-all text-slate-400 hover:text-accent" title="Save Paper">
                      <Bookmark className="w-5 h-5" />
                    </button>
                    {paper.url && (
                      <a
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-muted rounded-lg transition-all text-slate-400 hover:text-accent"
                        title="View Source"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 mb-6">
                  {paper.abstract || "No abstract available for this paper."}
                </p>

                <div className="flex flex-wrap gap-2">
                  {paper.authors?.slice(0, 3).map((author: any) => (
                    <span key={author.authorId} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                      {author.name}
                    </span>
                  ))}
                  {paper.authors?.length > 3 && (
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                      +{paper.authors.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {!loading && results.length === 0 && query && (
            <div className="text-center py-20 text-slate-500">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>No papers found for "{query}"</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
