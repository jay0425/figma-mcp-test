import desktopScreen from '../assets/images/hero-screen-desktop.jpg'
import tabletScreen from '../assets/images/hero-screen-tablet.jpg'
import mobileScreen from '../assets/images/hero-screen-mobile.jpg'

const screenAlt = 'Area dashboard showing a 78% efficiency improvement across all regions from 2021 to 2024'

/**
 * Figma "Header": display headline over a green card with a device mock that
 * overflows the card's top edge. The section clips the device at the card's
 * bottom edge, so each screen image only contains the visible part.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto flex w-full max-w-[1500px] flex-col items-center gap-[120px] overflow-hidden px-4 pt-[120px] md:gap-[140px] md:px-0 md:pt-0 lg:gap-[240px]"
    >
      <h1 id="hero-title" className="w-full text-center type-display">
        Browse everything.
      </h1>

      <div className="relative h-[362px] w-full rounded-[30px] bg-mid-green">
        {/* Mobile: iPhone */}
        <div className="absolute top-[-48.91px] left-1/2 h-[541.82px] w-[270px] -translate-x-1/2 overflow-hidden rounded-[34.66px] bg-black shadow-[0_-2.34px_11.71px_rgba(0,0,0,0.1)] md:hidden">
          <div className="absolute top-[10.03px] left-1/2 h-[521.76px] w-[248.11px] -translate-x-1/2 overflow-hidden rounded-[27.36px]">
            <img src={mobileScreen} alt={screenAlt} className="block w-full" />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[34.66px] border border-accent-6" />
        </div>

        {/* Tablet: iPad */}
        <div className="absolute top-[-60px] left-1/2 hidden h-[422.94px] w-[676.55px] -translate-x-1/2 overflow-hidden rounded-t-[17.9px] bg-black shadow-[0_-2.98px_14.92px_rgba(0,0,0,0.1)] md:block lg:hidden">
          <div className="absolute top-[13.8px] left-1/2 h-[453.1px] w-[648.76px] -translate-x-1/2 overflow-hidden rounded-[11.93px]">
            <img src={tabletScreen} alt={screenAlt} className="block w-full" />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-t-[17.9px] border-[1.49px] border-b-0 border-accent-6"
          />
        </div>

        {/* Desktop: iPad */}
        <div className="absolute top-[-141px] left-1/2 hidden h-[644px] w-[907px] -translate-x-1/2 overflow-hidden rounded-[24px] bg-black shadow-[0_-4px_20px_rgba(0,0,0,0.1)] lg:block">
          <div className="absolute top-[18.5px] left-1/2 h-[607.44px] w-[869.74px] -translate-x-1/2 overflow-hidden rounded-[16px]">
            <img src={desktopScreen} alt={screenAlt} className="block w-full" />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[24px] border-2 border-b-0 border-white/50"
          />
        </div>
      </div>
    </section>
  )
}
