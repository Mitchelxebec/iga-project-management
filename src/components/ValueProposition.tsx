import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'
import { commitments, WHATSAPP_URL, WHATSAPP_CONTACT } from '../data'

export default function ValueProposition() {
  return (
    <section id="process" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-500 mb-4">
            Our Promise
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight tracking-tight">
            We deliver, we're reliable, and we make things{' '}
            <span className="relative">
              <span className="relative z-10">easy.</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-amber-200/70 z-0 rounded" />
            </span>
          </h2>
          <p className="mt-5 text-slate-500 text-sm leading-relaxed max-w-md">
            Every engagement is backed by structured agreements, qualified
            professionals, and a dedicated follow-up process so clients
            never have to wonder what's happening on site.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg transition-colors"
            >
              <MessageCircle size={14} /> Book a Consultation
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f172a] border border-slate-300 hover:border-[#0f172a] px-5 py-2.5 rounded-lg transition-colors"
            >
              Learn More <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Right – checklist */}
        <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm space-y-4">
          {commitments.map((item) => (
            <div key={item} className="flex items-start gap-3.5">
              <CheckCircle2
                size={17}
                className="text-amber-500 shrink-0 mt-0.5"
                strokeWidth={2}
              />
              <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
