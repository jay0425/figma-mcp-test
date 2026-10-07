import stones from '../assets/images/testimonial-stones.jpg'

export function Testimonial() {
  return (
    <section
      aria-label="Customer testimonial"
      className="mx-auto flex w-full max-w-[1500px] flex-col gap-10 px-4 pb-[100px] md:px-0 md:pb-[120px] lg:flex-row lg:gap-5"
    >
      <div className="aspect-square overflow-hidden rounded-[30px] lg:aspect-[550/624] lg:flex-1">
        <img
          src={stones}
          alt="A stone sphere balanced between two curved stone slabs"
          loading="lazy"
          className="size-full object-cover"
        />
      </div>

      <figure className="flex flex-col justify-center gap-[50px] border-t border-divider px-4 pt-10 md:h-[376px] md:px-0 md:pt-0 lg:h-auto lg:flex-1 lg:pl-[50px]">
        <blockquote className="type-h2">
          “I was skeptical, but Area has completely transformed the way I manage my business. The data
          visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my
          company without it.”
        </blockquote>
        <figcaption className="flex items-center gap-2 lg:flex-col lg:items-start">
          <span className="type-paragraph">John Smith</span>
          <span className="type-caption text-caption">Head of Data</span>
        </figcaption>
      </figure>
    </section>
  )
}
