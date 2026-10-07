import mountains from '../assets/images/benefits-mountains.jpg'
import { benefits, sectionIds } from '../content'
import { cn } from '../lib/cn'

export function Benefits() {
  return (
    <section
      id={sectionIds.benefits}
      aria-labelledby="benefits-title"
      className="mx-auto flex w-full max-w-[1500px] scroll-mt-20 flex-col px-4 pb-[100px] md:scroll-mt-24 md:px-0 md:pb-[120px]"
    >
      <div className="flex flex-col gap-[50px] border-t-[0.5px] border-divider pt-20 pb-[60px]">
        <div className="flex flex-col gap-[30px] pr-5 md:gap-[50px] md:pr-[200px] lg:pr-[400px]">
          <p className="type-caption text-caption">Benefits</p>
          <h2 id="benefits-title" className="type-h1">
            We’ve cracked the code.
          </h2>
          <p className="type-paragraph text-paragraph">Area provides real insights, without the data overload.</p>
        </div>

        <ul className="flex flex-col gap-5 pt-10 md:flex-row md:flex-wrap">
          {benefits.map(({ title, body, Icon, className }) => (
            <li
              key={title}
              className={cn('flex min-w-[265px] flex-col border-t border-divider py-10 md:flex-1', className)}
            >
              <Icon className="size-6 shrink-0" />
              <div className="flex flex-col gap-5">
                <h3 className="type-h3">{title}</h3>
                <p className="type-paragraph text-paragraph">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-[600px] overflow-hidden rounded-[30px] lg:h-[620px]">
        <img
          src={mountains}
          alt="Snow-dusted, rust-coloured mountain ridges seen from above"
          loading="lazy"
          className="size-full object-cover"
        />
      </div>
    </section>
  )
}
