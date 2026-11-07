import { ArrowRight, Building2, HardHat } from 'lucide-react'
import { LINKS } from '../data'

export default function TalentVendor() {
  return (
    <section id="talent" className="py-24 bg-[#F4F6FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#D6AA35] mb-3">
            Join the Network
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09285D] tracking-tight">
            Build with IGA
          </h2>
          <p className="mt-3 text-[#667085] text-sm max-w-xl mx-auto leading-relaxed">
            Whether you're a skilled professional or an established firm, there's
            a place for you in our network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Talent Card */}
          <div className="bg-[#09285D] rounded-2xl p-9 flex flex-col">
            <span className="w-9 h-9 rounded-lg bg-[#D6AA35]/10 border border-[#D6AA35]/20 flex items-center justify-center mb-5">
              <HardHat size={17} className="text-[#D6AA35]" strokeWidth={1.8} />
            </span>
            <h3 className="text-lg font-bold text-white mb-3">
              Join Our Team of Experts
            </h3>
            <p className="text-white/65 text-sm leading-relaxed flex-1">
              We work with skilled Engineers, supervisors, and Artisans on a
              contract and project basis. If you're a Civil Engineer, Architect,
              Surveyor, Mason, Block Moulder, Plumber, Electrician, Painter,
              Borehole Driller, Aluminium Engineer, Land Agent, or Unskilled
              Site Worker looking for serious projects with proper documentation
              and growth, IGA is the right platform.
            </p>
            <p className="mt-5 text-xs text-white/35 leading-relaxed pt-4 border-t border-white/10">
              Shortlisted candidates will participate in on-the-job screening
              and formal interviews before project matching.
            </p>
            <a
              href={LINKS.joinTeam}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#D6AA35] hover:bg-[#c49b2e] text-[#09285D] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Join Our Team <ArrowRight size={14} />
            </a>
          </div>

          {/* Vendor Card */}
          <div className="bg-[#09285D] rounded-2xl p-9 flex flex-col">
            <span className="w-9 h-9 rounded-lg bg-[#D6AA35]/10 border border-[#D6AA35]/20 flex items-center justify-center mb-5">
              <Building2 size={17} className="text-[#D6AA35]" strokeWidth={1.8} />
            </span>
            <h3 className="text-lg font-bold text-white mb-3">
              Become a Trusted Vendor Partner
            </h3>
            <p className="text-white/65 text-sm leading-relaxed flex-1">
              We are seeking verified Cleaning companies, Material suppliers,
              and construction firms to join our vendor network. Get access to
              premium building and facility projects across Nigeria and build
              lasting partnerships backed by clear terms and mutual
              accountability.
            </p>
            {/* Spacer keeps button at same height as talent card */}
            <p className="mt-5 text-xs text-transparent leading-relaxed pt-4 border-t border-white/10 select-none" aria-hidden>
              &nbsp;
            </p>
            <a
              href={LINKS.applyVendor}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#D6AA35] hover:bg-[#c49b2e] text-[#09285D] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Apply to Partner <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
