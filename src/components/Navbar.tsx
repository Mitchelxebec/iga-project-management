import { navLinks, WHATSAPP_CONTACT } from '../data'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E6ED] shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo — navbar is white so the logo PNG sits perfectly */}
        <a href="#" className="flex items-center group">
          <img
            src="/iga-logo.png"
            alt="IGA Project Management & Business Consults"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-[#09285D]/70 hover:text-[#09285D] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — WhatsApp green */}
        <a
          href={WHATSAPP_CONTACT}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
        >
          Book a Consultation
        </a>
      </nav>
    </header>
  )
}
