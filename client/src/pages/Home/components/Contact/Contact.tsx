import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState, type SubmitEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import RedButton from '../../../../components/Button/RedButton'

const inputClass = 'min-w-0 w-full rounded-xl border border-[#66877F] bg-[#F7F5EF] px-4 py-3 text-base font-normal text-stone-900 transition-colors focus:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8392a] disabled:opacity-70'

const Contact = () => {
    const reduceMotion = useReducedMotion()
    const feedback = {
        initial: { opacity: 0, y: reduceMotion ? 0 : 4 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: reduceMotion ? 0 : 0.18 },
    }
    const [pending, setPending] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const buttonState = pending ? 'sending' : success ? 'sent' : 'idle'
    const buttonLabel = pending ? 'Sending…' : success ? 'Message sent' : 'Send message'

    const submit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (pending || success) return

        const form = event.currentTarget
        const details = Object.fromEntries(new FormData(form))
        setPending(true)
        setSuccess(false)
        setError('')

        const fallbackError = 'Your submission could not be confirmed. Please try again.'
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(details),
            })
            if (response.status !== 201) {
                const result = await response.json().catch(() => null)
                setError(typeof result?.error === 'string' ? result.error : fallbackError)
                return
            }
            form.reset()
            setSuccess(true)
        } catch {
            setError(fallbackError)
        } finally {
            setPending(false)
        }
    }

    return (
        <section id="contact-me" className="home-section home-grid scroll-mt-6 items-start gap-y-8 py-8">
            <header className="min-w-0 border-t-2 border-[#9DBEB7] pt-4 flex flex-col gap-2 md:col-span-4">
                <p id="contact-heading" className="text-3xl font-semibold">Contact Me</p>
                <p className="max-w-xs leading-relaxed text-stone-600">
                    Have a project in mind or just want to say hello? I’d love to hear from you.
                </p>
            </header>

            <form aria-busy={pending} className="min-w-0 md:col-span-8" onSubmit={submit} onChange={() => setSuccess(false)}>
                <fieldset disabled={pending} className="grid min-w-0 gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <label className="grid min-w-0 gap-2 text-sm font-semibold">
                            Full name
                            <input className={inputClass} name="full_name" autoComplete="name" maxLength={120} required />
                        </label>
                        <label className="grid min-w-0 gap-2 text-sm font-semibold">
                            Email address
                            <input className={inputClass} name="email_address" type="email" autoComplete="email" maxLength={254} required />
                        </label>
                    </div>
                    <label className="grid gap-2 text-sm font-semibold">
                        <span>Company <span className="font-normal text-stone-600">(optional)</span></span>
                        <input className={inputClass} name="company" autoComplete="organization" maxLength={120} />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold">
                        Message
                        <textarea className={inputClass + ' min-h-32 resize-y'} name="contact_message" rows={4} maxLength={4000} required />
                    </label>
                    <RedButton type="submit" disabled={pending || success} aria-label={buttonLabel}
                        style={{ cursor: success ? 'default' : undefined }}>
                        <span aria-hidden="true" className="grid items-center justify-items-center">
                            {/* Measure every label to keep the button steady between states. */}
                            {['Send message', 'Sending…', 'Message sent'].map((label) => (
                                <span key={label} className="invisible col-start-1 row-start-1 inline-flex items-center gap-2">
                                    {label}<span className="size-4 shrink-0" />
                                </span>
                            ))}
                            <AnimatePresence initial={false}>
                                <motion.span key={buttonState}
                                    initial={{ opacity: 0, y: reduceMotion ? 0 : 3 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: reduceMotion ? 0 : -3 }}
                                    transition={{ duration: reduceMotion ? 0 : 0.14, ease: 'easeOut' }}
                                    className="col-start-1 row-start-1 inline-flex items-center gap-2">
                                    {buttonLabel}
                                    {success ? <Check size={16} className="shrink-0" /> :
                                        <ArrowRight size={16} className={`shrink-0 ${pending ? 'motion-safe:animate-pulse' : ''}`} />}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </RedButton>
                </fieldset>
                <div role="status" aria-atomic="true">
                    {success && <motion.p {...feedback} className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-900">
                        Thanks for reaching out. Your message was sent.
                    </motion.p>}
                </div>
                <div role="alert" aria-atomic="true">
                    {error && <motion.p {...feedback} className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-900">{error}</motion.p>}
                </div>
            </form>
        </section>
    )
}

export default Contact
