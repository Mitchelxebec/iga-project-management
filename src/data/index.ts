import {
  MapPin,
  Building2,
  Users,
  Sparkles,
  Home,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ─── External links ───────────────────────────────────────────────────────────

export const WHATSAPP_URL = 'https://whatsapp.com/channel/0029VbDVsHTI7BeHHv3Pp60T'
export const WHATSAPP_CONTACT = 'https://wa.me/2348062326028'
export const EMAIL = 'iga.projectmanagementfirm@gmail.com'

export const LINKS = {
  joinTeam:    'https://docs.google.com/forms/d/e/1FAIpQLScrNzuiUxK4x6gj_0sGgaRqHbEeE7nWEWuzNoV8qmRFA7adYw/viewform?usp=header',
  applyVendor: 'https://docs.google.com/forms/d/e/1FAIpQLSdMpFfCiJVOyPcz0Is1C3fqCk50VT69Nf6GHG7JMndJ0rQAxA/viewform?usp=dialog',
  bookLand:    'https://docs.google.com/forms/d/e/1FAIpQLSdJXUsdOfm5dwMg-75oWK4tAxtoycHqq6gndCZI3fMStFOwCA/viewform?usp=publish-editor',
  bookConst:   'https://docs.google.com/forms/d/e/1FAIpQLSd4UT2aWGm-E92oqBbNMNVDQHzLwmO97uXFzi3BZwo7auSoKA/viewform?usp=publish-editor',
  bookLinking: 'https://docs.google.com/forms/d/e/1FAIpQLSce3HRPlTqZnn7n_pACR03tK3kJKhcWpSenwpYKDbiH-db6uw/viewform?usp=publish-editor',
  bookClean:   'https://docs.google.com/forms/d/e/1FAIpQLSfpBX1YN8Agqy9Y7QeFoDGujIS3WafUQBdpq2ilKzltffmEEw/viewform?usp=publish-editor',
  bookFacility:'https://docs.google.com/forms/d/e/1FAIpQLSfixsVAjDmySBh1oik5SiJOn089D9ljKj0Mhd23wO-i-c0kmw/viewform?usp=publish-editor',
}

// Navbar CTA and generic "Book a Consultation" fallback — kept as reference
// export const BOOK_URL = LINKS.bookLand// ─── Types ────────────────────────────────────────────────────────────────────

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  cta: string
  href: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    icon: MapPin,
    title: 'Land Acquisition Assistant',
    description:
      'Expert guidance through land searches, verification, documentation, and acquisition.',
    cta: 'Book for Land Acquisition',
    href: LINKS.bookLand,
  },
  {
    icon: Building2,
    title: 'House Construction & Project Management',
    description:
      'End-to-end oversight of residential and commercial construction with accountability at every stage.',
    cta: 'Book for Construction / PM',
    href: LINKS.bookConst,
  },
  {
    icon: Users,
    title: 'Linking Workers & General Staffing',
    description:
      'Connecting clients with verified, skilled, and unskilled site workers matched to project needs.',
    cta: 'Book for Linking Workers',
    href: LINKS.bookLinking,
  },
  {
    icon: Sparkles,
    title: 'Site Cleaning & Post-Construction',
    description:
      'Professional finishing cleans, debris removal, and post-construction restoration services.',
    cta: 'Book for Cleaning Service',
    href: LINKS.bookClean,
  },
  {
    icon: Home,
    title: 'Facility & Home Management',
    description:
      'Ongoing maintenance, vendor coordination, and facility oversight for residential and commercial spaces.',
    cta: 'Book for Facility / Home Management',
    href: LINKS.bookFacility,
  },
]

export const commitments: string[] = [
  'Thorough vetting of every engineer and artisan on our roster',
  'Clear, documented project terms before any work begins',
  'Active follow-up throughout the project lifecycle',
  'Adherence to Nigerian building standards and best practices',
  'Transparent communication between clients and contractors',
  'Zero-tolerance policy for substandard delivery',
]

export const navLinks: { label: string; href: string }[] = [
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Join as Talent', href: '#talent' },
  { label: 'Partner with Us', href: '#talent' },
]
