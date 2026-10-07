import logo1 from '../assets/images/logo-1.png'
import logo2 from '../assets/images/logo-2.png'
import logo3 from '../assets/images/logo-3.png'
import logo4 from '../assets/images/logo-4.png'
import logo5 from '../assets/images/logo-5.png'
import logo6 from '../assets/images/logo-6.png'

// The sixth tile is slightly smaller on desktop in the design.
const logos = [
  { src: logo1, size: 'lg:h-[84px] lg:w-[154px]' },
  { src: logo2, size: 'lg:h-[84px] lg:w-[154px]' },
  { src: logo3, size: 'lg:h-[84px] lg:w-[154px]' },
  { src: logo4, size: 'lg:h-[84px] lg:w-[154px]' },
  { src: logo5, size: 'lg:h-[84px] lg:w-[154px]' },
  { src: logo6, size: '' },
]

export function LogoCloud() {
  return (
    <section
      aria-label="Customers"
      className="mx-auto flex w-full max-w-[1500px] flex-col items-center gap-[30px] px-4 py-[50px] md:px-0"
    >
      <p className="w-full type-paragraph text-paragraph">Trusted by:</p>
      <ul className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {logos.map((logo, index) => (
          <li key={logo.src} className={`flex h-[81.82px] w-[150px] p-5 ${logo.size}`}>
            <img
              src={logo.src}
              alt={`Customer logo ${index + 1}`}
              loading="lazy"
              className="size-full object-contain opacity-60 mix-blend-exclusion"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
