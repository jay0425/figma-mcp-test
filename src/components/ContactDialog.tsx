import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { ButtonLinkout } from './Button'
import { CloseIcon } from './icons'

type Status = 'idle' | 'sending' | 'sent'
type Errors = Partial<Record<'name' | 'email', string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const fieldClass =
  'w-full rounded-[14px] border border-divider bg-white px-4 py-3 type-paragraph text-black placeholder:text-accent-6 transition-colors focus:border-accent-1 focus:outline-none aria-[invalid=true]:border-red-700'

/**
 * "Schedule a quick call" form opened by every "Learn More ↗" button.
 * There is no backend yet: submitting validates the fields and shows a confirmation.
 */
export function ContactDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [submittedName, setSubmittedName] = useState('')
  // Bumped on close so a pending submit can't land in a reopened dialog.
  const sessionRef = useRef(0)
  const id = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // Start fresh the next time the dialog opens.
  useEffect(() => {
    if (open) return
    sessionRef.current += 1
    setStatus('idle')
    setErrors({})
  }, [open])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()

    const nextErrors: Errors = {}
    if (!name) nextErrors.name = 'Please tell us your name.'
    if (!email) nextErrors.email = 'Please enter your work email.'
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = 'That email address doesn’t look right.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = nextErrors.name ? 'name' : 'email'
      event.currentTarget.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    const session = sessionRef.current
    setStatus('sending')
    // Placeholder for a real request.
    await new Promise((resolve) => setTimeout(resolve, 800))
    if (session !== sessionRef.current) return
    setSubmittedName(name)
    setStatus('sent')
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={`${id}-title`}
      onClose={onClose}
      onClick={(event) => {
        // Clicks on the dialog element itself land on the backdrop.
        if (event.target === event.currentTarget) onClose()
      }}
      className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[560px] overflow-y-auto rounded-[30px] bg-white p-0 text-black shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-[opacity,translate] duration-300 ease-out backdrop:bg-black/40 backdrop:backdrop-blur-[2px] starting:open:translate-y-3 starting:open:opacity-0"
    >
      <div className="relative flex flex-col gap-8 p-6 md:p-10">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 size-6 cursor-pointer rounded-sm transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-accent-1"
        >
          <CloseIcon className="size-6" />
        </button>

        {status === 'sent' ? (
          <div className="flex flex-col items-start gap-6 pt-6" role="status">
            <p className="type-caption text-caption">Request received</p>
            <h2 id={`${id}-title`} className="type-h2">
              Thanks, {submittedName}.
            </h2>
            <p className="type-paragraph text-paragraph">
              We’ll be in touch within one business day to find a time for your call.
            </p>
            <ButtonLinkout onClick={onClose}>Back to Area</ButtonLinkout>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4 pr-8">
              <p className="type-caption text-caption">Contact</p>
              <h2 id={`${id}-title`} className="type-h2">
                Schedule a quick call
              </h2>
              <p className="type-paragraph text-paragraph">
                Learn how Area can turn your regional data into a powerful advantage.
              </p>
            </div>

            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Field id={`${id}-name`} label="Name" error={errors.name}>
                <input
                  id={`${id}-name`}
                  name="name"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${id}-name-error` : undefined}
                  className={fieldClass}
                />
              </Field>
              <Field id={`${id}-email`} label="Work email" error={errors.email}>
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${id}-email-error` : undefined}
                  className={fieldClass}
                />
              </Field>
              <Field id={`${id}-company`} label="Company (optional)">
                <input
                  id={`${id}-company`}
                  name="company"
                  autoComplete="organization"
                  placeholder="Company name"
                  className={fieldClass}
                />
              </Field>
              <Field id={`${id}-message`} label="What would you like to discuss? (optional)">
                <textarea
                  id={`${id}-message`}
                  name="message"
                  rows={3}
                  placeholder="Regions, team size, goals…"
                  className={`${fieldClass} resize-none`}
                />
              </Field>

              <ButtonLinkout type="submit" className="mt-2 w-full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Request a call'}
              </ButtonLinkout>
            </form>
          </>
        )}
      </div>
    </dialog>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="type-caption text-caption">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="type-caption text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}
