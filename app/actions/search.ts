'use server'

const MOCK_PAPERS = [
  {
    paperId: "1",
    title: "Advancements in Quantum Computing Architecture",
    authors: [{ name: "Alice Zhang" }, { name: "Robert Chen" }],
    abstract: "This paper explores new qubit topology designs that significantly reduce decoherence rates in superconducting circuits.",
    year: 2024,
    venue: "Nature Physics",
    url: "#"
  },
  {
    paperId: "2",
    title: "Impact of Artificial Intelligence on Modern Pedagogy",
    authors: [{ name: "Sarah Johnson" }],
    abstract: "A comprehensive study on how large language models are transforming primary education with personalized learning paths.",
    year: 2023,
    venue: "Journal of Educational Technology",
    url: "#"
  },
  // --- NEW MOCK DATA (3-50) ---
  {
    paperId: "3",
    title: "The 'Paper Ceiling': Barriers to Research Commercialization in SE Asia",
    authors: [{ name: "Azkal Baihaqi" }, { name: "Gabriela Terranova" }],
    abstract: "Investigating why 90% of undergraduate theses remain unread and proposing a digital bridge for TRL 1-3 research.",
    year: 2026,
    venue: "ASEAN Innovation Review",
    url: "#"
  },
  {
    paperId: "4",
    title: "Deep Learning for Real-time Gold Market Prediction",
    authors: [{ name: "Zaki Ramadhan" }],
    abstract: "A hybrid LSTM-transformer model designed to predict intraday volatility in gold and crypto markets with 84% accuracy.",
    year: 2025,
    venue: "Financial Intelligence Journal",
    url: "#"
  },
  {
    paperId: "5",
    title: "Cyber-Noir Aesthetics in Dashboard Design",
    authors: [{ name: "Laksmi Dewantari" }],
    abstract: "Analyzing the impact of high-density holographic UI elements on user cognitive load and data retention in tech platforms.",
    year: 2024,
    venue: "Digital Design Quarterly",
    url: "#"
  },
  {
    paperId: "6",
    title: "Blockchain-Based E-Voting for Student Organizations",
    authors: [{ name: "Kevin Hartanto" }],
    abstract: "Implementing a transparent voting system for University communities to prevent electoral fraud and increase participation.",
    year: 2025,
    venue: "IEEE Systems Journal",
    url: "#"
  },
  {
    paperId: "7",
    title: "Vertical Farming in Jakarta: A Sustainability Feasibility Study",
    authors: [{ name: "Siti Aminah" }, { name: "Budi Santoso" }],
    abstract: "Evaluating the energy-to-yield ratio of hydroponic systems in tropical megacities facing high land costs.",
    year: 2024,
    venue: "Global Urban Sustainability",
    url: "#"
  },
  {
    paperId: "8",
    title: "Psychological Effects of HMR in Next.js Development",
    authors: [{ name: "Devin J. Code" }],
    abstract: "How Hot Module Replacement reloads affect the flow state of fullstack developers during 10-hour coding sessions.",
    year: 2023,
    venue: "Software Engineering Insights",
    url: "#"
  },
  {
    paperId: "9",
    title: "Micro-grid Resilience in Remote Indonesian Islands",
    authors: [{ name: "Agus Pratama" }],
    abstract: "Proposing a decentralized solar-battery hybrid system for the Maluku region to reduce dependency on fossil fuel shipments.",
    year: 2025,
    venue: "Renewable Energy Focus",
    url: "#"
  },
  {
    paperId: "10",
    title: "Ethics of Gene Editing in Pediatric Rare Diseases",
    authors: [{ name: "Dr. Elena Vance" }],
    abstract: "A philosophical and medical review of CRISPR applications in non-communicable childhood disorders.",
    year: 2024,
    venue: "The Lancet",
    url: "#"
  },

  ...Array.from({ length: 40 }).map((_, i) => ({
    paperId: (i + 11).toString(),
    title: `Scientific Inquiry Study ${i + 11}: ${["AI", "Climate", "Education", "Robotics", "Fintech"][i % 5]} Trends`,
    authors: [{ name: `Researcher ${i + 11}` }],
    abstract: `This study focuses on the intersection of ${["Machine Learning", "Oceanography", "Critical Thinking", "Automation", "Blockchain"][i % 5]} and the future of Indonesian development.`,
    year: 2022 + (i % 5),
    venue: ["Modern Science", "Innovation Lab", "Tech Progress", "Nature", "Academic Frontiers"][i % 5],
    url: "#"
  }))
]

export async function searchJournals(query: string) {
  if (!query) return { data: [] }

  // 
  await new Promise(resolve => setTimeout(resolve, 800))

  const lowerQuery = query.toLowerCase()
  const filtered = MOCK_PAPERS.filter(paper =>
    paper.title.toLowerCase().includes(lowerQuery) ||
    paper.abstract.toLowerCase().includes(lowerQuery) ||
    paper.authors.some(a => a.name.toLowerCase().includes(lowerQuery))
  )

  return { data: filtered }
}