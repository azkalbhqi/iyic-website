'use client'

import { getPosts, type PostWithAuthor } from "@/app/actions/forum"
import { Navbar } from "@/components/navbar"
import { MessageSquare, Clock } from "lucide-react"
import { PostForm } from "@/components/community/post-form"
import { useState, useEffect } from "react"

export default function CommunityPage() {
  const [session, setSession] = useState<any>(null)
  const [posts, setPosts] = useState<PostWithAuthor[]>([])

  useEffect(() => {
    // Mock session check
    const mockUser = localStorage.getItem("mock_user")
    if (mockUser) setSession({ user: JSON.parse(mockUser) })

    // Fetch mock posts
    getPosts().then(setPosts)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">Research Community</h1>
            <p className="text-slate-500">Share ideas, ask questions, and collaborate with other researchers. (Mock Mode)</p>
          </div>
          
          {session ? (
            <PostForm />
          ) : (
            <div className="p-4 glass rounded-xl text-sm">
              Please <a href="/auth/login" className="text-accent font-bold">Sign In</a> to join the discussion.
            </div>
          )}
        </div>

        <div className="space-y-6">
          {posts.map((post: PostWithAuthor) => (
            <div key={post.id} className="glass p-8 rounded-3xl border border-border/50 hover:border-accent/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center font-bold text-accent">
                  {post.author.name?.[0]}
                </div>
                <div>
                  <p className="font-bold text-sm">{post.author.name}</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">{post.author.role}</p>
                </div>
                <div className="ml-auto text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {post.content}
              </p>
              
              <div className="flex items-center gap-6 pt-6 border-t border-border/50">
                <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span>{post._count.comments} Comments</span>
                </button>
              </div>
            </div>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-20 glass rounded-3xl opacity-50">
              <MessageSquare className="w-12 h-12 mx-auto mb-4" />
              <p>No discussions yet. Be the first to start one!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
