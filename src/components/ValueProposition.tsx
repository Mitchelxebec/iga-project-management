import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'
import { commitments, WHATSAPP_URL, WHATSAPP_CONTACT } from '../data'

export default function ValueProposition() {
  return (
    <section id="process" className="py-24 bg-[#F4F6FA]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#D6AA35] mb-4">
            Our Promise
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09285D] leading-tight tracking-tight">
            We deliver, we're reliable, and we make things{' '}
            <span className="relative">
              <span className="relative z-10">easy.</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#D6AA35]/30 z-0 rounded" />
            </span>
          </h2>
          <p className="mt-5 text-[#667085] text-sm leading-relaxed max-w-md">
            Every engagement is backed by structured agreements, qualified
            professionals, and a dedicated follow-up process so clients
            never have to wonder what's happening on site.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-2.5 rounded-lg transition-colors"
            >
              <MessageCircle size={14} /> Book a Consultation
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#09285D] border border-[#E2E6ED] hover:border-[#09285D] px-5 py-2.5 rounded-lg transition-colors"
            >
              Learn More <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Right – checklist */}
        <div className="bg-white rounded-2xl border border-[#E2E6ED] p-8 shadow-sm space-y-4">
          {commitments.map((item) => (
            <div key={item} className="flex items-start gap-3.5">
              <CheckCircle2
                size={17}
                className="text-[#176A9E] shrink-0 mt-0.5"
                strokeWidth={2}
              />
              <p className="text-[#17233F] text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
