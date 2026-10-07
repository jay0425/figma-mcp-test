import pillars from '../assets/images/features-pillars.jpg'
import { Button } from './Button'
import { features, sectionIds } from '../content'

/** Figma "Features carousel": numbered feature list beside (desktop) or above a photo. */
export function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className="mx-auto flex w-full max-w-[1500px] flex-col px-8 pb-20 md:px-0 md:pb-[120px] lg:flex-row lg:gap-5"
    >
      <div className="flex flex-col items-start gap-10 border-t border-divider pt-[60px] pb-20 lg:flex-1">
        <div className="flex w-full flex-col gap-10 md:pr-20">
          <h2 id="features-title" className="type-h1">
            See the Big Picture
          </h2>
          <p className="type-paragraph text-paragraph">
            Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.
          </p>
        </div>

        <ol className="flex w-full flex-col">
          {features.map((feature, index) => (
            <li key={feature} className="flex gap-[30px] border-t border-divider py-5 md:pr-20">
              <span className="type-paragraph font-bold text-paragraph">{String(index + 1).padStart(2, '0')}</span>
              <p className="flex-1 type-paragraph">{feature}</p>
            </li>
          ))}
        </ol>

        <Button href={`#${sectionIds.specifications}`}>Discover More</Button>
      </div>

      {/* Tablet stacks the photo with a -12px gap, overlapping the text block. */}
      <div className="relative h-[385px] overflow-hidden rounded-[30px] md:-mt-3 md:h-[744px] lg:mt-0 lg:h-auto lg:flex-1">
        <img
          src={pillars}
          alt="Stone cylinders of varying heights on a warm beige background"
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/[0.06]" />
      </div>
    </section>
  )
}
