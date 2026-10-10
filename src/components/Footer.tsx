import { HardHat, Mail, MessageCircle } from 'lucide-react'
import { LINKS, WHATSAPP_CONTACT, EMAIL } from '../data'

const serviceLinks = [
  'Land Acquisition',
  'House Construction',
  'Staffing & Linking',
  'Site Cleaning',
  'Facility Management',
]

const companyLinks: { label: string; href: string }[] = [
  { label: 'Our Process', href: '#process' },
  { label: 'Join as Talent', href: LINKS.joinTeam },
  { label: 'Partner with Us', href: LINKS.applyVendor },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] border-t border-slate-800/60 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-slate-800/60">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-md bg-[#1e293b] flex items-center justify-center">
                <HardHat size={16} className="text-amber-400" strokeWidth={2} />
              </span>
              <span className="text-lg font-extrabold text-white">IGA</span>
              <span className="text-[11px] font-medium text-slate-500 border-l border-slate-700 pl-2.5">
                Project Management Firm
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Connecting professional Building Engineers and skilled Artisans
              with clients who value quality, reliability, and proper process.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-5">
              Services
            </p>
            <ul className="space-y-3 text-sm text-slate-500">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-slate-300 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-5">
              Company
            </p>
            <ul className="space-y-3 text-sm text-slate-500">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="hover:text-slate-300 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_CONTACT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-slate-500 hover:text-slate-300 transition-colors group"
                >
                  <MessageCircle size={15} className="text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <span className="block text-xs text-slate-600 mb-0.5">WhatsApp</span>
                    0806 232 6028
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  <Mail size={15} className="text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <span className="block text-xs text-slate-600 mb-0.5">Email</span>
                    {EMAIL}
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} IGA Project Management Firm. All rights reserved.</p>
          <p>Terms & Conditions apply to all engagements and partnerships.</p>
        </div>
      </div>
    </footer>
  )
}
