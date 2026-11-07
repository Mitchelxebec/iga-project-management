import { HardHat } from 'lucide-react'
import { navLinks, WHATSAPP_CONTACT } from '../data'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#09285D] border-b border-[#09285D] shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
            <HardHat size={16} className="text-[#D6AA35]" strokeWidth={2} />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-white">IGA</span>
          <span className="text-[11px] font-medium text-white/50 leading-tight hidden sm:block border-l border-white/20 pl-2.5">
            Project<br />Management
          </span>
        </a>

        {/* Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — gold button, navy text */}
        <a
          href={WHATSAPP_CONTACT}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-[#D6AA35] hover:bg-[#c49b2e] text-[#09285D] text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
        >
          Book a Consultation
        </a>
      </nav>
    </header>
  )
}
