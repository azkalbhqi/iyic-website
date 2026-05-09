'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { courseData } from '../classData'
import { ArrowLeft, Clock, List, Play, ChevronRight, Share2, Info } from 'lucide-react'

export default function ClassDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  
  const course = courseData.find(c => c.id === id)

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 px-4">
        <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
        <Link href="/class" className="text-accent font-semibold hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to all classes
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-7xl">
        {/* Breadcrumbs & Navigation */}
        <nav className="mb-10 flex items-center justify-between">
          <Link 
            href="/class" 
            className="group flex items-center gap-3 text-slate-500 hover:text-orange-500 transition-all font-bold uppercase tracking-wider text-sm"
          >
            <div className="p-3 rounded-2xl bg-orange-50 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span>Back to Classroom</span>
          </Link>
          <div className="flex items-center gap-4">
             <button className="p-3 rounded-2xl border-2 border-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                <Share2 className="w-5 h-5" />
             </button>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area (Left/Top) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Video Player */}
            <div className="aspect-video w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-500/10 bg-black ring-8 ring-orange-50/50">
              <iframe
                src={`https://www.youtube.com/embed/${course.id}?rel=0&modestbranding=1&autoplay=0`}
                title={course.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Content Details */}
            <div className="space-y-8 bg-white p-10 rounded-[3rem] border border-orange-50 shadow-sm">
              <div className="flex flex-wrap items-center gap-6">
                <div className="px-4 py-1.5 rounded-full bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest">
                  Research Lesson
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold">
                  <Clock className="w-5 h-5 text-orange-500" />
                  {course.duration}
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase italic">
                {course.title}
              </h1>

              <div className="prose prose-orange max-w-none">
                <p className="text-xl text-slate-500 leading-relaxed font-medium">
                  {course.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Area (Right/Bottom) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Topics/Chapters Card */}
            <div className="bg-white rounded-[3rem] border-2 border-orange-50 p-8 shadow-xl shadow-orange-500/5 overflow-hidden sticky top-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-orange-500 rounded-2xl text-white shadow-lg shadow-orange-500/20">
                  <List className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase italic">Key Topics</h3>
              </div>

              <div className="space-y-4">
                {course.topics.length > 0 ? (
                  course.topics.map((topic, index) => (
                    <div 
                      key={index}
                      className="group flex items-start gap-5 p-5 rounded-3xl bg-orange-50/30 border-2 border-transparent hover:border-orange-200 hover:bg-white transition-all cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-white border border-orange-100 flex items-center justify-center text-sm font-black text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-grow space-y-1.5">
                        <div className="text-sm font-bold text-slate-900 group-hover:text-orange-500 transition-colors leading-tight">
                          {topic.label}
                        </div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                           <div className="w-1 h-1 rounded-full bg-orange-400" />
                           {topic.time}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-orange-200 group-hover:text-orange-500 group-hover:translate-x-1 transition-all self-center" />
                    </div>
                  ))
                ) : (
                  <div className="py-12 text-center bg-orange-50/20 rounded-3xl border-2 border-dashed border-orange-100">
                    <Info className="w-10 h-10 text-orange-200 mx-auto mb-4" />
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">No topics indexed</p>
                  </div>
                )}
              </div>

              {/* Course Info Card Footer */}
              <div className="mt-10 pt-8 border-t border-orange-100 text-center">
                <button className="w-full py-5 bg-orange-500 text-white rounded-[2rem] font-black uppercase tracking-widest shadow-xl shadow-orange-500/20 hover:bg-orange-600 hover:-translate-y-1 transition-all">
                  Continue Lesson
                </button>
                <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-400 font-black uppercase tracking-widest">
                  <div className="w-4 h-px bg-orange-200" />
                  <span>IYIC CERTIFIED CONTENT</span>
                  <div className="w-4 h-px bg-orange-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-24 border-t border-orange-50 py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
            © 2024 IYIC Research Community • Empowering Global Scholars
          </p>
        </div>
      </footer>
    </div>
  )
}
