'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { courseData } from './classData'
import { Play, Clock, Search, BookOpen, ChevronRight } from 'lucide-react'

export default function ClassListingPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredClasses = useMemo(() => {
    return courseData.filter(course =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-bold mb-6 border border-orange-100">
            <BookOpen className="w-4 h-4" />
            <span>LEARNING LIBRARY</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 uppercase italic">
            IYIC <span className="text-orange-500">Classroom</span>
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
            Master the art of research with our curated video series.
            From fundamentals to advanced methodologies.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for a topic or lesson..."
              className="w-full pl-14 pr-6 py-5 rounded-full bg-white border-2 border-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all shadow-xl shadow-orange-500/5 text-slate-900 placeholder:text-slate-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredClasses.length > 0 ? (
            filteredClasses.map((course) => (
              <Link
                key={course.id}
                href={`/class/${course.id}`}
                className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500 relative"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-orange-600 text-[10px] font-black uppercase tracking-tighter border border-orange-100 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    Lesson Video
                  </div>

                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-white text-xs font-bold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-orange-400" />
                    {course.duration}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500 border-4 border-white/30">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-8 font-medium leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-orange-50">
                    <div className="flex items-center gap-1 text-sm font-black text-orange-500 group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                      Watch Now
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-32 text-center bg-orange-50/30 rounded-[3rem] border border-dashed border-orange-100">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/5">
                <Search className="w-10 h-10 text-orange-300" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase italic">No matches found</h3>
              <p className="text-slate-500 font-medium">Try different keywords or browse all categories.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-8 px-8 py-3 bg-white text-orange-500 border border-orange-200 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all shadow-lg"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-orange-50 py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white">
              <Play className="w-5 h-5 fill-current" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase italic">IYIC <span className="text-orange-500">CLASS</span></span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © 2024 INTERNATIONAL YOUNG INDEPENDENT RESEARCHER COMMUNITY
          </p>
        </div>
      </footer>
    </div>
  )
}
