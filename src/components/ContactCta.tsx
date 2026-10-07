import { ButtonLinkout } from './Button'
import { sectionIds } from '../content'

/** Figma "Centered CTA". */
export function ContactCta({ onContact }: { onContact: () => void }) {
  return (
    <section
      id={sectionIds.contact}
      aria-labelledby="contact-title"
      className="mx-auto flex w-full max-w-[1500px] scroll-mt-20 flex-col items-center gap-10 border-t-[0.5px] border-divider px-4 py-[120px] text-center md:scroll-mt-24 md:px-[100px] lg:px-[300px]"
    >
      <h2 id="contact-title" className="w-full type-h1">
        Connect with us
      </h2>
      <p className="w-full type-paragraph text-paragraph">
        Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
      </p>
      <ButtonLinkout className="w-full" onClick={onContact}>
        Learn More
      </ButtonLinkout>
    </section>
  )
}
