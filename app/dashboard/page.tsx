'use client'

import { Navbar } from "@/components/navbar"
import { Shield, Star, Crown, Book, MessageSquare, Award, ArrowRight, Sparkles, User as UserIcon } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
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

  const tier = user.tier

  const tierColors = {
    FOUNDATION: "text-slate-500",
    PRO: "text-accent",
    ELITE: "text-amber-500",
  }

  const tierIcons = {
    FOUNDATION: Shield,
    PRO: Star,
    ELITE: Crown,
  }

  const TierIcon = (tierIcons as any)[tier] || Shield

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">Welcome back, {user.name}</h1>
            <p className="text-slate-500 dark:text-slate-400">Manage your research projects and collaborations. (Mock Mode)</p>
          </div>

          <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-muted`}>
              <TierIcon className={`w-8 h-8 ${(tierColors as any)[tier]}`} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Subscription Tier</p>
              <p className={`text-xl font-black ${(tierColors as any)[tier]}`}>{tier}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="md:col-span-2 space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <DashboardCard
                icon={Book}
                title="Journal Search"
                description="Search and save academic papers."
                link="/search"
                color="bg-accent/10 text-accent"
              />
              <DashboardCard 
                icon={Sparkles}
                title="AI Research Assistant"
                description="Analyze your papers with Gemini."
                link="/dashboard/research-ai"
                color="bg-orange-500/10 text-orange-500"
              />
              <DashboardCard
                icon={MessageSquare}
                title="Community"
                description="Join discussions and ask questions."
                link="/community"
                color="bg-amber-500/10 text-amber-500"
              />
            </div>

            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-accent" />
                Featured for your tier
              </h3>

              <div className="space-y-4">
                {tier === "FOUNDATION" && (
                  <div className="p-4 bg-muted/50 rounded-xl border border-border">
                    <p className="font-semibold mb-1 text-sm">Upgrade to Pro</p>
                    <p className="text-xs text-slate-500">Get access to peer feedback and unlimited saved papers.</p>
                  </div>
                )}
                {tier !== "FOUNDATION" && (
                  <div className="p-4 bg-accent/10 rounded-xl border border-accent/20">
                    <p className="font-semibold mb-1 text-sm text-accent">Peer Feedback Enabled</p>
                    <p className="text-xs text-slate-500">You can now submit your research for mentor review.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar / Profile Info */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl text-center">
              <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">{user.name?.[0]}</span>
              </div>
              <h3 className="text-xl font-bold">{user.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{user.role}</p>
              <button className="w-full py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-all">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function DashboardCard({ icon: Icon, title, description, link, color }: any) {
  return (
    <Link href={link} className="glass p-6 rounded-2xl hover:scale-[1.02] transition-all group">
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold mb-2 flex items-center justify-between">
        {title}
        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
      </h3>
      <p className="text-sm text-slate-500">{description}</p>
    </Link>
  )
}
