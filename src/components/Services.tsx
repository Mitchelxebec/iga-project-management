import { ArrowRight } from 'lucide-react'
import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#D6AA35] mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09285D] tracking-tight">
            Our Core Services
          </h2>
          <p className="mt-3 text-[#667085] text-sm max-w-xl leading-relaxed">
            Five focused pillars covering every stage of a construction or
            facility project — from land acquisition to long-term management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white border border-[#E2E6ED] rounded-xl p-6 hover:border-[#09285D]/30 hover:shadow-sm transition-all duration-200 flex flex-col"
            >
              {/* Icon — royal blue bg */}
              <span className="w-9 h-9 rounded-lg bg-[#176A9E]/10 flex items-center justify-center mb-4">
                <s.icon size={16} className="text-[#176A9E]" strokeWidth={1.8} />
              </span>
              <h3 className="text-sm font-bold text-[#09285D] leading-snug mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed flex-1">
                {s.description}
              </p>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[#09285D] hover:text-[#D6AA35] transition-colors"
              >
                {s.cta} <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
