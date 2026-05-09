'use client'

import { Navbar } from "@/components/navbar"
import { ShieldCheck, Lock, Send, User } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function FeedbackPage() {
  const [user, setUser] = useState<{ name: string, role: string, tier: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const mockUser = localStorage.getItem("mock_user")
    if (mockUser) {
      setUser(JSON.parse(mockUser))
    } else {
      router.push("/auth/login")
    }
  }, [router])

  if (!user) return null

  const isEligible = user.tier === "PRO" || user.tier === "ELITE"

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Peer Feedback</h1>
          <p className="text-slate-500">Get your research reviewed by vetted mentors and expert peers. (Mock Mode)</p>
        </div>

        {!isEligible ? (
          <div className="glass p-12 rounded-3xl text-center border-dashed border-2 border-slate-200 dark:border-slate-800">
            <Lock className="w-16 h-16 mx-auto mb-6 text-slate-300" />
            <h2 className="text-2xl font-bold mb-4">Pro Feature</h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Peer feedback is reserved for our Pro and Elite members. 
              Upgrade your account to unlock professional reviews.
            </p>
            <button className="px-8 py-3 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
              Upgrade to Pro
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-accent" />
                Submit for Review
              </h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Mock submission successful!'); }}>
                <div>
                  <label className="block text-sm font-medium mb-1">Project Title</label>
                  <input required className="w-full px-4 py-2 rounded-lg bg-background border border-border outline-none focus:ring-2 focus:ring-accent" placeholder="Enter your research title..." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Abstract / Content</label>
                  <textarea required rows={6} className="w-full px-4 py-2 rounded-lg bg-background border border-border outline-none focus:ring-2 focus:ring-accent" placeholder="Paste your abstract or project details here..." />
                </div>
                <button type="submit" className="w-full py-3 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 transition-all">
                  Submit to Mentors
                </button>
              </form>
            </div>

            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-amber-500" />
                Available Mentors
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="p-4 bg-muted/50 rounded-xl flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Expert Mentor {i}</p>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400">Senior Researcher</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
