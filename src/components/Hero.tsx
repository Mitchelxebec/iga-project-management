import { ArrowRight } from 'lucide-react'
import { WHATSAPP_URL } from '../data'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">
      {/* LCP image — fetchPriority high, no lazy, matches preload in index.html */}
      <img
        src="/images/header.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0a0f1a]/90 via-[#0a0f1a]/70 to-[#0a0f1a]/40" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1a]/60 via-transparent to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-block mb-5 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-amber-300 border border-amber-400/30 rounded-full bg-amber-400/10">
            Nigeria's Professional Construction Network
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-tight tracking-tight">
            Connecting Master Building Engineers &amp;{' '}
            <span className="text-amber-400">Skilled Artisans</span> with
            Visionary Clients
          </h1>

          <p className="mt-6 text-base text-slate-300 leading-relaxed max-w-xl">
            IGA Project Management Firm specializes in connecting professional
            Building Engineers and skilled Artisans with prospective clients
            who value quality and reliability. We facilitate partnerships with
            trusted firms under clear terms, with thorough project follow-up to
            ensure standard delivery and adherence to best practices.
          </p>

          <div className="mt-9">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm backdrop-blur-sm"
            >
              Learn More <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
