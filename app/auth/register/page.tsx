'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { GraduationCap, ArrowRight, Loader2 } from "lucide-react"

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)

    // MOCK REGISTRATION
    setTimeout(() => {
      router.push("/auth/login?registered=true")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="max-w-md w-full glass p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="w-10 h-10 text-accent" />
            <span className="text-2xl font-bold tracking-tight text-primary">IYIC</span>
          </Link>
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Join the academic community (Mock)</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input 
              name="name" 
              type="text" 
              required 
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-accent outline-none"
              placeholder="Dr. John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input 
              name="email" 
              type="email" 
              required 
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-accent outline-none"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              name="password" 
              type="password" 
              required 
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-accent outline-none"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">I am a...</label>
            <select 
              name="role" 
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-accent outline-none"
            >
              <option value="STUDENT">Student</option>
              <option value="MENTOR">Mentor</option>
              <option value="SCHOOL">School Administrator</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign Up"}
            {!loading && <ArrowRight className="w-5 h-5" />}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-slate-500 dark:text-slate-400">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-accent font-semibold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  )
}
