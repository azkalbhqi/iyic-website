'use server'

import { revalidatePath } from "next/cache"

// Mock data store
let mockPosts = [
  {
    id: "1",
    title: "How to structure a research paper?",
    content: "I'm a first-year student and I'm struggling with the methodology section. Any tips?",
    author: { name: "John Doe", role: "STUDENT" },
    createdAt: new Date().toISOString(),
    _count: { comments: 5 }
  },
  {
    id: "2",
    title: "New discovery in renewable energy",
    content: "Our team just published a paper on perovskite solar cells. Check it out!",
    author: { name: "Dr. Smith", role: "MENTOR" },
    createdAt: new Date().toISOString(),
    _count: { comments: 12 }
  }
]

export type PostWithAuthor = typeof mockPosts[0]

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string
  const content = formData.get("content") as string

  if (!title || !content) return { error: "Missing fields" }

  const newPost = {
    id: Math.random().toString(36).substr(2, 9),
    title,
    content,
    author: { name: "Mock User", role: "STUDENT" },
    createdAt: new Date().toISOString(),
    _count: { comments: 0 }
  }

  mockPosts = [newPost, ...mockPosts]
  revalidatePath("/community")
  return { success: true }
}

export async function getPosts(): Promise<PostWithAuthor[]> {
  return mockPosts
}
