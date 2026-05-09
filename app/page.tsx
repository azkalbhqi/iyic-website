'use client'

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { Search, Users, Shield, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Search,
    title: "AI Journal Search",
    description: "Browse millions of indexed research papers with AI-powered discovery tools.",
    tier: "Foundation"
  },
  {
    icon: Users,
    title: "Community Forums",
    description: "Connect with peers and mentors in dedicated research discussion spaces.",
    tier: "Foundation"
  },
  {
    icon: Shield,
    title: "Peer Feedback",
    description: "Get structured reviews from vetted mentors and researchers.",
    tier: "Pro"
  },
  {
    icon: BookOpen,
    title: "Institutional Access",
    description: "Tailored solutions for schools and research organizations.",
    tier: "Elite"
  }
]

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 academic-gradient opacity-20 dark:opacity-30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                Elevating <span className="text-accent">Research</span> <br />
                for the Next Generation
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10">
                A comprehensive platform for students, mentors, and schools to collaborate, 
                discover journals, and build the future of academic excellence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/auth/register"
                  className="px-8 py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent/90 transition-all shadow-xl shadow-accent/25 flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/search"
                  className="px-8 py-4 glass rounded-xl font-bold text-lg hover:bg-muted transition-all flex items-center justify-center gap-2"
                >
                  Explore Journals <Search className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Core Features</h2>
              <p className="text-slate-600 dark:text-slate-400">Everything you need to excel in your research journey.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-all"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{feature.description}</p>
                  <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-accent/10 text-accent rounded-md">
                    {feature.tier}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border/50 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>© 2026 IYIC Research Education Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
