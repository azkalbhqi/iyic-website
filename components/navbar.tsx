'use client'

import Link from "next/link"
import { ThemeToggle } from "./ui/theme-toggle"
import { GraduationCap, LogIn, User, LogOut, Search, Users, CreditCard, Sparkles, PlayCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
  // Simple mock session state
  const [session, setSession] = useState<{ user: { name: string, role: string, tier: string } } | null>(null)

  useEffect(() => {
    // Check local storage for mock session
    const mockUser = localStorage.getItem("mock_user")
    if (mockUser) {
      setSession({ user: JSON.parse(mockUser) })
    }
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem("mock_user")
    setSession(null)
    window.location.href = "/"
  }

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-accent" />
            <span className="text-xl font-bold tracking-tight text-primary">IYIC</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/search" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
              <Search className="w-4 h-4" />
              <span>Journal Search</span>
            </Link>
            <Link href="/community" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
              <Users className="w-4 h-4" />
              <span>Community</span>
            </Link>
            <Link href="/class" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
              <PlayCircle className="w-4 h-4" />
              <span>Classroom</span>
            </Link>
            <Link href="/pricing" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
              <CreditCard className="w-4 h-4" />
              <span>Tiers</span>
            </Link>
            <Link href="/dashboard/research-ai" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
              <Sparkles className="w-4 h-4" />
              <span>AI Assistant</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {session ? (
              <div className="flex items-center gap-4">
                <Link href="/dashboard" className="flex items-center gap-2 text-sm font-medium hover:text-accent">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center font-bold text-accent text-xs">
                    {session.user.name[0]}
                  </div>
                  <span className="hidden sm:inline">Dashboard</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="p-2 hover:text-red-500 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
