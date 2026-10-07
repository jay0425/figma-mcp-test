import { AreaLogoMark } from './icons'
import { textLinkClass } from './Navigation'
import { footerLinks, sectionIds } from '../content'

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1500px] flex-col gap-20 border-t border-divider px-4 pt-10 pb-5 md:px-0">
      <div className="flex md:h-10 md:items-center md:justify-between">
        <nav aria-label="Footer">
          <ul className="flex flex-col gap-[27px] md:flex-row md:items-center">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={`type-link ${textLinkClass}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-end gap-10">
        <a href={`#${sectionIds.top}`} aria-label="Back to top" className={`shrink-0 ${textLinkClass}`}>
          <AreaLogoMark className="h-[70px] w-[31.75px]" />
        </a>
        <p className="flex flex-1 items-center gap-4 type-caption text-caption">
          <span>© Area.</span>
          <span>2025</span>
        </p>
        <p className="type-caption text-caption">All Rights Reserved</p>
      </div>
    </footer>
  )
}
