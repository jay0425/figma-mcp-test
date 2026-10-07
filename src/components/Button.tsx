import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { ArrowUpRightIcon } from './icons'
import { cn } from '../lib/cn'

const base =
  'inline-flex items-center justify-center rounded-full px-[22px] py-3.5 type-link outline-offset-2 focus-visible:outline-2 focus-visible:outline-accent-1'

/** Figma "Button" (Type=Primary → Type=Hover). Used for in-page links. */
export function Button({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        base,
        'bg-accent-2 text-black transition-colors duration-1000 ease-out hover:bg-accent-3 hover:text-white',
        className,
      )}
      {...props}
    />
  )
}

/** Figma "Button linkout" (State=Default → State=Hover): label followed by a ↗ arrow. */
export function ButtonLinkout({
  children,
  className,
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={cn(
        base,
        'cursor-pointer gap-0.5 bg-accent-1 text-white transition-colors duration-[900ms] ease-out hover:bg-accent-3 disabled:cursor-wait disabled:opacity-70',
        className,
      )}
      {...props}
    >
      {children}
      <span className="flex h-5 w-[7px] items-center">
        <ArrowUpRightIcon className="size-1.5" />
      </span>
    </button>
  )
}
