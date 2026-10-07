import { Button } from './Button'
import { CheckIcon, CrossIcon } from './icons'
import { comparison, sectionIds } from '../content'
import { cn } from '../lib/cn'

/** Figma "Specifications table": intro copy and a three-way comparison. */
export function Specifications() {
  return (
    <section
      id={sectionIds.specifications}
      aria-labelledby="specs-title"
      className="mx-auto flex w-full max-w-[1500px] scroll-mt-20 flex-col gap-5 overflow-hidden pb-[120px] md:scroll-mt-24"
    >
      <div className="flex flex-col items-center border-t border-accent-6 px-4 py-20 md:px-20 lg:px-60">
        <div className="flex w-full flex-col items-center gap-[30px] text-center md:gap-10">
          <p className="type-caption text-caption">Specs</p>
          <h2 id="specs-title" className="type-h1">
            Why Choose Area?
          </h2>
          <p className="type-paragraph text-paragraph">
            You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to
            streamline your business.
          </p>
          <Button href={`#${sectionIds.comparison}`}>Discover More</Button>
        </div>
      </div>

      {/* Mobile scrolls the fixed-width columns horizontally. */}
      <div
        id={sectionIds.comparison}
        role="region"
        aria-label="Comparison of Area, WebSurge and HyperView"
        tabIndex={0}
        className="flex scroll-mt-20 snap-x snap-mandatory overflow-x-auto rounded-[20px] pl-2 focus-visible:outline-2 focus-visible:outline-accent-1 md:scroll-mt-24 md:snap-none md:overflow-hidden md:p-[2px] lg:p-0"
      >
        {comparison.map((column, columnIndex) => {
          const isLast = columnIndex === comparison.length - 1
          return (
            <div
              key={column.name}
              className={cn(
                'flex w-[200px] shrink-0 snap-start flex-col md:w-auto md:min-w-[200px] md:flex-1 md:shrink',
                column.highlighted &&
                  'overflow-hidden rounded-[20px] border border-divider bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
              )}
            >
              <h3 className="flex h-24 shrink-0 justify-center border-b border-accent-6 px-[30px] pt-10">
                <span className={column.nameClassName}>{column.name}</span>
              </h3>
              <ul aria-label={`${column.name} features`}>
                {column.rows.map((row, rowIndex) => {
                  const isLastRow = rowIndex === column.rows.length - 1
                  return (
                    <li
                      key={rowIndex}
                      className={cn(
                        'flex items-center gap-2 border-divider px-[30px] py-8 md:px-5 lg:px-[30px]',
                        !(isLast && isLastRow) && 'border-b-[0.5px]',
                        isLast && 'border-l-[0.5px]',
                      )}
                    >
                      {row.included ? (
                        <CheckIcon className="size-3.5 shrink-0" />
                      ) : (
                        <CrossIcon className="size-3.5 shrink-0" />
                      )}
                      <span className="sr-only">{row.included ? 'Included:' : 'Not included:'}</span>
                      <span className="type-caption text-black">{row.label}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
