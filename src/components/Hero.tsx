import { ArrowRight, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL, WHATSAPP_CONTACT } from '../data'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">
      {/* LCP image */}
      <img
        src="/images/header.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Navy-toned overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-[#09285D]/92 via-[#09285D]/75 to-[#09285D]/40" />
      <div className="absolute inset-0 bg-linear-to-t from-[#09285D]/65 via-transparent to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-block mb-5 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[#D6AA35] border border-[#D6AA35]/30 rounded-full bg-[#D6AA35]/10">
            Nigeria's Professional Construction Network
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-tight tracking-tight">
            Connecting Master Building Engineers &amp;{' '}
            <span className="text-[#D6AA35]">Skilled Artisans</span> with
            Visionary Clients
          </h1>

          <p className="mt-6 text-base text-white/75 leading-relaxed max-w-xl">
            IGA Project Management Firm specializes in connecting professional
            Building Engineers and skilled Artisans with prospective clients
            who value quality and reliability. We facilitate partnerships with
            trusted firms under clear terms, with thorough project follow-up to
            ensure standard delivery and adherence to best practices.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {/* Primary — gold, navy text */}
            <a
              href={WHATSAPP_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D6AA35] hover:bg-[#c49b2e] text-[#09285D] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              <MessageCircle size={15} /> Book a Consultation
            </a>
            {/* Secondary — navy outline */}
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
