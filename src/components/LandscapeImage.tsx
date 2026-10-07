import river from '../assets/images/landscape-river.jpg'

/** Figma "Hero image" (the full-width photo between How-to and the CTA). */
export function LandscapeImage() {
  return (
    <div className="mx-auto w-full max-w-[1500px] px-4 pb-10 md:px-0">
      <div className="h-[600px] overflow-hidden rounded-[30px] md:h-[664.29px] lg:aspect-[1120/620] lg:h-auto lg:max-h-[830.36px]">
        <img
          src={river}
          alt="Aerial view of a winding river through green hills"
          loading="lazy"
          className="size-full object-cover"
        />
      </div>
    </div>
  )
}
