'use client'

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { GraduationCap, LogIn, Loader2, CheckCircle2 } from "lucide-react"

function LoginContent() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const registered = searchParams.get("registered")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    // MOCK LOGIN LOGIC
    setTimeout(() => {
      if (email && password) {
        const mockUser = {
          name: email.split("@")[0],
          email: email,
          role: "STUDENT",
          tier: "FOUNDATION"
        }
        localStorage.setItem("mock_user", JSON.stringify(mockUser))
        router.push("/dashboard")
        router.refresh()
        // Reload to update navbar
        window.location.href = "/dashboard"
      } else {
        setError("Invalid email or password")
        setLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="max-w-md w-full glass p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            < GraduationCap className="w-10 h-10 text-accent" />
            <span className="text-2xl font-bold tracking-tight text-primary">IYIC</span>
          </Link>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Sign in (Mock Mode)</p>
        </div>

        {registered && (
          <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center gap-3 text-amber-600 dark:text-amber-400 text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>Registration successful! (Mock)</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input 
              name="email" 
              type="email" 
              required 
              defaultValue="student@example.com"
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
              defaultValue="password"
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-accent outline-none"
              placeholder="••••••••"
            />
          </div>

          <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg text-xs text-orange-600 dark:text-orange-400">
            Mock Mode: Any email and password will work.
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <LogIn className="w-5 h-5" />}
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-slate-500 dark:text-slate-400">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-accent font-semibold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <Loader2 className="w-10 h-10 animate-spin text-accent" />
      </div>
    }>
      <LoginContent />
    </Suspense>
  )
}
