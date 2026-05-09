'use client'

import { createPost } from "@/app/actions/forum"
import { Plus, Loader2 } from "lucide-react"
import { useActionState } from "react"

interface FormState {
  error?: string;
  success?: boolean;
}

const initialState: FormState = {}

export function PostForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState: FormState, formData: FormData): Promise<FormState> => {
      const result = await createPost(formData)
      return result
    },
    initialState
  )

  return (
    <form action={formAction} className="w-full md:w-80 glass p-6 rounded-2xl space-y-4">
      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
        <Plus className="w-5 h-5 text-accent" />
        New Discussion
      </h3>
      
      <input 
        name="title"
        placeholder="Title of your post..."
        className="w-full px-4 py-2 rounded-lg bg-background border border-border text-sm outline-none focus:ring-2 focus:ring-accent"
        required
      />
      
      <textarea 
        name="content"
        placeholder="What's on your mind?"
        rows={4}
        className="w-full px-4 py-2 rounded-lg bg-background border border-border text-sm outline-none focus:ring-2 focus:ring-accent"
        required
      />

      {state?.error && (
        <p className="text-red-500 text-xs">{state.error}</p>
      )}

      {state?.success && (
        <p className="text-green-500 text-xs">Post created successfully!</p>
      )}

      <button 
        type="submit"
        disabled={isPending}
        className="w-full py-2 bg-accent text-white rounded-lg text-sm font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
      >
        {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Post to Community"}
      </button>
    </form>
  )
}
