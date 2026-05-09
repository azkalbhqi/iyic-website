import { Navbar } from "@/components/navbar"
import { Check, Shield, Star, Crown } from "lucide-react"

const tiers = [
  {
    name: "Foundation",
    price: "Free",
    description: "Perfect for students starting their research journey.",
    features: ["AI Journal Search", "Community Forums", "Basic Dashboard", "Saved Papers (up to 5)"],
    icon: Shield,
    color: "text-slate-500",
    bg: "bg-slate-500/10"
  },
  {
    name: "Pro",
    price: "$19/mo",
    description: "Advanced tools for dedicated researchers.",
    features: ["Everything in Foundation", "Peer Feedback Module", "Mentor Direct Messaging", "Unlimited Saved Papers", "Priority Search Results"],
    icon: Star,
    color: "text-accent",
    bg: "bg-accent/10",
    popular: true
  },
  {
    name: "Elite",
    price: "$49/mo",
    description: "Comprehensive solutions for high-achievers and schools.",
    features: ["Everything in Pro", "Institutional Analytics", "White-label Reports", "Exclusive Webinars", "Dedicated Account Manager"],
    icon: Crown,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Choose Your Path</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Flexible plans designed to support every stage of academic research.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative glass p-10 rounded-3xl border-2 transition-all hover:scale-[1.02] ${tier.popular ? 'border-accent shadow-2xl shadow-accent/10' : 'border-border/50'}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className={`w-14 h-14 ${tier.bg} rounded-2xl flex items-center justify-center mb-8`}>
                <tier.icon className={`w-8 h-8 ${tier.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black">{tier.price}</span>
                {tier.price !== "Free" && <span className="text-slate-500">/month</span>}
              </div>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                {tier.description}
              </p>
              
              <div className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 bg-accent/20 rounded-full p-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.popular ? 'bg-accent text-white hover:bg-accent/90' : 'bg-muted hover:bg-slate-200 dark:hover:bg-slate-800'}`}>
                {tier.name === "Foundation" ? "Get Started" : "Upgrade Now"}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
