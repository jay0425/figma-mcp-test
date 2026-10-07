import { ButtonLinkout } from './Button'
import { navLinks, sectionIds } from '../content'

export const textLinkClass =
  'rounded-sm text-black transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-1'

/** Tablet + desktop top bar: wordmark left, CTA right. Scrolls with the page. */
export function Navigation({ onContact }: { onContact: () => void }) {
  return (
    <div className="mx-auto hidden h-[148px] w-full max-w-[1500px] items-center justify-between pt-5 pb-20 md:flex">
      <a href={`#${sectionIds.top}`} className={`type-logo ${textLinkClass}`}>
        Area
      </a>
      <ButtonLinkout onClick={onContact}>Learn More</ButtonLinkout>
    </div>
  )
}

/** Tablet + desktop floating pill that stays pinned to the top of the viewport. */
export function NavPill() {
  return (
    <nav
      aria-label="Primary"
      className="fixed top-4 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-[27px] rounded-full bg-white/40 px-6 py-5 backdrop-blur-[15px] md:flex"
    >
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} className={`type-link ${textLinkClass}`}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}
