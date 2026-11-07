import {
  MapPin,
  Building2,
  Users,
  Sparkles,
  Scissors,
  Briefcase,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ─── External links ───────────────────────────────────────────────────────────

export const WHATSAPP_URL     = 'https://whatsapp.com/channel/0029VbDVsHTI7BeHHv3Pp60T'
export const WHATSAPP_CONTACT = 'https://wa.me/2348062326028'
export const EMAIL            = 'iga.projectmanagementfirm@gmail.com'
export const ADDRESS          = 'No 7 Umoren Close, Off Umoren Street, Uyo, Akwa Ibom State, Nigeria'
export const PHONE_1          = '08062326028'
export const PHONE_2          = '08153272954'

export const LINKS = {
  joinTeam:    'https://docs.google.com/forms/d/e/1FAIpQLScrNzuiUxK4x6gj_0sGgaRqHbEeE7nWEWuzNoV8qmRFA7adYw/viewform?usp=header',
  applyVendor: 'https://docs.google.com/forms/d/e/1FAIpQLSdMpFfCiJVOyPcz0Is1C3fqCk50VT69Nf6GHG7JMndJ0rQAxA/viewform?usp=dialog',
  bookLand:    'https://docs.google.com/forms/d/e/1FAIpQLSdJXUsdOfm5dwMg-75oWK4tAxtoycHqq6gndCZI3fMStFOwCA/viewform?usp=publish-editor',
  bookConst:   'https://docs.google.com/forms/d/e/1FAIpQLSd4UT2aWGm-E92oqBbNMNVDQHzLwmO97uXFzi3BZwo7auSoKA/viewform?usp=publish-editor',
  bookLinking: 'https://docs.google.com/forms/d/e/1FAIpQLSce3HRPlTqZnn7n_pACR03tK3kJKhcWpSenwpYKDbiH-db6uw/viewform?usp=publish-editor',
  bookClean:   'https://docs.google.com/forms/d/e/1FAIpQLSfpBX1YN8Agqy9Y7QeFoDGujIS3WafUQBdpq2ilKzltffmEEw/viewform?usp=publish-editor',
  bookFacility:'https://docs.google.com/forms/d/e/1FAIpQLSfixsVAjDmySBh1oik5SiJOn089D9ljKj0Mhd23wO-i-c0kmw/viewform?usp=publish-editor',
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  // href = Google Form URL, null = no form yet (show WhatsApp CTA instead)
  href: string | null
  cta: string
}

// ─── Services (6 — from registered flyer) ────────────────────────────────────

export const services: Service[] = [
  {
    icon: MapPin,
    title: 'Land Acquisition Assistance',
    description:
      'Expert guidance through land searches, verification, documentation, and acquisition across Akwa Ibom and beyond.',
    cta: 'Book for Land Acquisition',
    href: LINKS.bookLand,
  },
  {
    icon: Building2,
    title: 'Building Project Supervision & General Project Management',
    description:
      'End-to-end oversight of residential and commercial construction projects with accountability at every stage.',
    cta: 'Book for Construction / PM',
    href: LINKS.bookConst,
  },
  {
    icon: Scissors,
    title: 'Bush Clearing, Grass Cutting & Football Field Maintenance',
    description:
      'Professional land clearing, grass cutting, and ongoing maintenance of football fields and open spaces.',
    cta: 'Enquire via WhatsApp',
    href: null,
  },
  {
    icon: Users,
    title: 'Linking Engineers, Artisans & Labourers to Clients',
    description:
      'Connecting clients directly with verified Engineers, skilled Artisans, and reliable labourers for any project scale.',
    cta: 'Book for Linking Workers',
    href: LINKS.bookLinking,
  },
  {
    icon: Sparkles,
    title: 'Home, Facility, Schools & Industrial Cleaning and Fumigation',
    description:
      'Thorough cleaning and fumigation services for homes, schools, offices, and industrial facilities.',
    cta: 'Book for Cleaning Service',
    href: LINKS.bookClean,
  },
  {
    icon: Briefcase,
    title: 'Business Clinic, Referral, Training & Consultation',
    description:
      'Business advisory, professional referrals, skills training, and consultancy support for individuals and organisations.',
    cta: 'Enquire via WhatsApp',
    href: null,
  },
]

// ─── Other data ───────────────────────────────────────────────────────────────

export const commitments: string[] = [
  'Thorough vetting of every engineer and artisan on our roster',
  'Clear, documented project terms before any work begins',
  'Active follow-up throughout the project lifecycle',
  'Adherence to Nigerian building standards and best practices',
  'Transparent communication between clients and contractors',
  'Zero-tolerance policy for substandard delivery',
]

export const navLinks: { label: string; href: string }[] = [
  { label: 'Services',      href: '#services' },
  { label: 'Our Process',   href: '#process' },
  { label: 'Join as Talent', href: '#talent' },
  { label: 'Partner with Us', href: '#talent' },
]
