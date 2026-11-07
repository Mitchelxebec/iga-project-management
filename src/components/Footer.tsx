import { Mail, MessageCircle, Phone, MapPin } from 'lucide-react'
import { LINKS, WHATSAPP_CONTACT, EMAIL, ADDRESS, PHONE_1, PHONE_2 } from '../data'

const serviceLinks = [
  'Land Acquisition Assistance',
  'Building Project Supervision',
  'Bush Clearing & Maintenance',
  'Linking Engineers & Artisans',
  'Cleaning & Fumigation',
  'Business Clinic & Consultation',
]

const companyLinks: { label: string; href: string }[] = [
  { label: 'Our Process',    href: '#process' },
  { label: 'Join as Talent', href: LINKS.joinTeam },
  { label: 'Partner with Us', href: LINKS.applyVendor },
]

export default function Footer() {
  return (
    <footer className="bg-[#09285D] border-t border-white/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-flex mb-5 group">
              <img
                src="/iga-logo.png"
                alt="IGA Project Management & Business Consults"
                className="h-20 w-auto object-contain bg-white rounded-xl p-2"
              />
            </a>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#D6AA35]/70 mb-3">
              AKS Integrity Labour Market
            </p>
            <p className="text-sm text-white/55 leading-relaxed">
              Let's make things easier for you by managing your projects
              and delivering successful results.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Services
            </p>
            <ul className="space-y-3 text-sm text-white/55">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Company
            </p>
            <ul className="space-y-3 text-sm text-white/55">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_CONTACT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/55 hover:text-white transition-colors"
                >
                  <MessageCircle size={15} className="text-[#25D366] shrink-0 mt-0.5" />
                  <span>
                    <span className="block text-xs text-white/35 mb-0.5">WhatsApp</span>
                    {PHONE_1}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_2}`}
                  className="flex items-start gap-3 text-sm text-white/55 hover:text-white transition-colors"
                >
                  <Phone size={15} className="text-[#D6AA35] shrink-0 mt-0.5" />
                  <span>
                    <span className="block text-xs text-white/35 mb-0.5">Phone</span>
                    {PHONE_2}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 text-sm text-white/55 hover:text-white transition-colors"
                >
                  <Mail size={15} className="text-[#D6AA35] shrink-0 mt-0.5" />
                  <span>
                    <span className="block text-xs text-white/35 mb-0.5">Email</span>
                    {EMAIL}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/55">
                <MapPin size={15} className="text-[#D6AA35] shrink-0 mt-0.5" />
                <span>
                  <span className="block text-xs text-white/35 mb-0.5">Address</span>
                  {ADDRESS}
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>© {new Date().getFullYear()} IGA Project Management & Business Consults. All rights reserved.</p>
          <p>Terms & Conditions apply to all engagements and partnerships.</p>
        </div>
      </div>
    </footer>
  )
}
