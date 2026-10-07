import type { ComponentType, SVGProps } from 'react'
import { AccountIcon, CableIcon, ChartIcon, EarthIcon } from './components/icons'

export const sectionIds = {
  top: 'top',
  benefits: 'benefits',
  specifications: 'specifications',
  comparison: 'comparison',
  howItWorks: 'how-it-works',
  contact: 'contact',
} as const

export type NavLink = { label: string; href: string }

export const navLinks: NavLink[] = [
  { label: 'Benefits', href: `#${sectionIds.benefits}` },
  { label: 'Specifications', href: `#${sectionIds.specifications}` },
  { label: 'How-to', href: `#${sectionIds.howItWorks}` },
  { label: 'Contact Us', href: `#${sectionIds.contact}` },
]

/** The footer repeats the nav without "Contact Us". */
export const footerLinks = navLinks.slice(0, 3)

export type Benefit = {
  title: string
  body: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  /** Per-lockup spacing differs slightly in the design. */
  className: string
}

export const benefits: Benefit[] = [
  {
    title: 'Amplify Insights',
    body: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
    Icon: CableIcon,
    className: 'pr-5 gap-6',
  },
  {
    title: 'Control Your Global Presence',
    body: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
    Icon: EarthIcon,
    className: 'pr-5 gap-5',
  },
  {
    title: 'Remove Language Barriers',
    body: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
    Icon: AccountIcon,
    className: 'pr-10 gap-6',
  },
  {
    title: 'Visualize Growth',
    body: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.',
    Icon: ChartIcon,
    className: 'pr-10 gap-6',
  },
]

export const features = [
  'Spot Trends in Seconds: No more digging through numbers.',
  'Get Everyone on the Same Page: Share easy-to-understand reports with your team.',
  'Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.',
  'Your Global Snapshot: Get a quick, clear overview of your entire operation.',
]

export type ComparisonColumn = {
  name: string
  /** Each product name is set in its own typeface in the design. */
  nameClassName: string
  highlighted?: boolean
  rows: Array<{ label: string; included: boolean }>
}

export const comparison: ComparisonColumn[] = [
  {
    name: 'Area',
    nameClassName: 'font-sans font-medium text-[25.71px] leading-[1.2] tracking-[-0.08em] text-black',
    highlighted: true,
    rows: [
      { label: 'Ultra-fast browsing', included: true },
      { label: 'Advanced AI insights', included: true },
      { label: 'Seamless integration', included: true },
      { label: 'Advanced AI insights', included: true },
      { label: 'Ultra-fast browsing', included: true },
      { label: 'Full UTF-8 support', included: true },
    ],
  },
  {
    name: 'WebSurge',
    nameClassName: 'font-rethink font-medium text-[22.86px] leading-[1.2] tracking-[-0.08em] text-accent-5',
    rows: [
      { label: 'Fast browsing', included: true },
      { label: 'Basic AI recommendations', included: true },
      { label: 'Restricts customization', included: true },
      { label: 'Basic AI insights', included: false },
      { label: 'Fast browsing', included: true },
      { label: 'Potential display errors', included: false },
    ],
  },
  {
    name: 'HyperView',
    nameClassName: 'font-reddit-mono font-medium text-[21.65px] leading-[1.2] tracking-[-0.08em] text-accent-5',
    rows: [
      { label: 'Moderate speeds', included: false },
      { label: 'No AI assistance', included: false },
      { label: 'Steep learning curve', included: false },
      { label: 'No AI assistance', included: false },
      { label: 'Moderate speeds', included: false },
      { label: 'Partial UTF-8 support', included: false },
    ],
  },
]

export const steps = [
  { number: '01', title: 'Get Started', body: 'With our intuitive setup, you’re up and running in minutes.' },
  { number: '02', title: 'Customize and Configure', body: 'Adapt Area to your specific requirements and preferences.' },
  { number: '03', title: 'Grow Your Business', body: 'Make informed decisions to exceed your goals.' },
]
