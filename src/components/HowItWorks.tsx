import { Button } from './Button'
import { sectionIds, steps } from '../content'

/** Figma "How it works section". The three steps scroll sideways on mobile. */
export function HowItWorks() {
  return (
    <section
      id={sectionIds.howItWorks}
      aria-labelledby="how-title"
      className="mx-auto flex w-full max-w-[1500px] scroll-mt-20 flex-col gap-20 overflow-hidden border-t border-divider px-4 pt-20 pb-[100px] md:scroll-mt-24 md:overflow-visible md:px-0 md:pb-[120px]"
    >
      <div className="flex flex-col items-start gap-10 md:flex-row md:justify-between md:gap-20">
        <h2 id="how-title" className="type-h1">
          Map Your Success
        </h2>
        <Button href={`#${sectionIds.contact}`}>Discover More</Button>
      </div>

      <ol className="flex snap-x snap-mandatory gap-5 overflow-x-auto md:snap-none md:overflow-visible lg:justify-center">
        {steps.map((step) => (
          <li
            key={step.number}
            className="flex w-[240px] shrink-0 snap-start flex-col gap-[60px] border-t border-divider pt-[60px] pr-[30px] pb-5 md:w-auto md:min-w-0 md:flex-1 md:shrink lg:min-w-[240px]"
          >
            <span className="type-stat text-accent-6">{step.number}</span>
            <div className="flex flex-col gap-5">
              <h3 className="type-h3">{step.title}</h3>
              <p className="type-paragraph text-paragraph">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
