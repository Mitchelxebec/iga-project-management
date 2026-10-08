import { HardHat } from 'lucide-react'
import { LINKS } from '../data'

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
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-md bg-[#1e293b] flex items-center justify-center">
                <HardHat size={16} className="text-amber-400" strokeWidth={2} />
              </span>
              <span className="text-lg font-extrabold text-white">IGA</span>
              <span className="text-[11px] font-medium text-slate-500 border-l border-slate-700 pl-2.5">
                Project Management Firm
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
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
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} IGA Project Management Firm. All rights reserved.</p>
          <p>Terms & Conditions apply to all engagements and partnerships.</p>
        </div>
      </div>
    </footer>
  )
}
