import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ButtonLinkout } from './Button'
import { CloseIcon, MenuIcon } from './icons'
import { textLinkClass } from './Navigation'
import { navLinks, sectionIds } from '../content'

const CLOSED_HEIGHT = 78

/** Mobile header (Figma "Navigation mobile", Nav=closed / Nav=open). */
export function MobileNav({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState(false)
  const [openHeight, setOpenHeight] = useState<number>()
  const contentRef = useRef<HTMLDivElement>(null)

  // The open height is whatever the dropdown content needs.
  useLayoutEffect(() => {
    const el = contentRef.current
    if (!el) return
    const measure = () => setOpenHeight(el.scrollHeight)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      {open && (
        <div aria-hidden="true" className="fixed inset-0 z-40 md:hidden" onClick={close} />
      )}
      <header
        className="fixed inset-x-0 top-0 z-50 overflow-hidden rounded-b-[20px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-[height] duration-300 ease-out md:hidden"
        style={{ height: open ? (openHeight ?? 'auto') : CLOSED_HEIGHT }}
      >
        <div ref={contentRef}>
          <div className="flex items-start justify-between px-5 pt-5 pb-[50px]">
            <a
              href={`#${sectionIds.top}`}
              className={`type-logo tracking-[-0.08em] ${textLinkClass}`}
              onClick={close}
            >
              Area
            </a>
            <button
              type="button"
              className="size-6 cursor-pointer rounded-sm text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-1"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
            </button>
          </div>

          <div id="mobile-menu" inert={!open} className="flex flex-col items-start gap-[50px] px-5 pt-2 pb-8">
            <nav aria-label="Mobile" className="w-full">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href} className="border-t border-divider">
                    <a
                      href={link.href}
                      onClick={close}
                      className="flex py-[30px] type-link text-black transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-accent-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ButtonLinkout
              onClick={() => {
                close()
                onContact()
              }}
            >
              Learn More
            </ButtonLinkout>
          </div>
        </div>
      </header>
    </>
  )
}
