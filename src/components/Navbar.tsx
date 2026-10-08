import { HardHat } from 'lucide-react'
import { navLinks, LINKS } from '../data'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-md bg-[#0f172a] flex items-center justify-center">
            <HardHat size={16} className="text-amber-400" strokeWidth={2} />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-[#0f172a]">IGA</span>
          <span className="text-[11px] font-medium text-slate-400 leading-tight hidden sm:block border-l border-slate-200 pl-2.5">
            Project<br />Management
          </span>
        </a>

        {/* Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-500 hover:text-[#0f172a] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={LINKS.joinTeam}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Join Our Team
        </a>
      </nav>
    </header>
  )
}
