import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState, type SubmitEvent } from 'react'
import { ArrowRight, Check, CircleAlert } from 'lucide-react'
import RedButton from '../../../../components/Button/RedButton'

const inputClass = 'min-w-0 w-full rounded-lg border border-[#66877F]/90 bg-[#F7F5EF] px-4 py-3 text-base font-normal text-stone-900 motion-safe:transition-colors motion-safe:duration-150 focus:border-[#A92E20] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A92E20] disabled:opacity-70'
const labelClass = 'group grid min-w-0 gap-2 text-sm font-semibold text-stone-900'
const labelTextClass = 'motion-safe:transition-colors motion-safe:duration-150 group-focus-within:text-[#A92E20]'

const Contact = () => {
    const reduceMotion = useReducedMotion()
    const feedback = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
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
        <section id="contact-me" aria-labelledby="contact-heading" className="home-section home-grid scroll-mt-6 items-start gap-y-8 py-8">
            <header className="min-w-0 flex flex-col gap-2 md:col-span-4">
                <h2 id="contact-heading" className="text-3xl font-semibold">Contact Me</h2>
                <p className="max-w-xs leading-relaxed text-stone-600">
                    Have a project in mind or just want to say hello? I’d love to hear from you.
                </p>
                <a href="mailto:rtruong.cs@gmail.com"
                    className="inline-flex min-h-11 max-w-full items-center self-start rounded-sm font-semibold text-stone-900 underline decoration-[#9DBEB7] underline-offset-4 hover:decoration-[#E8412C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8412C]">
                    <span className="min-w-0 [overflow-wrap:anywhere]">rtruong.cs@gmail.com</span>
                </a>
            </header>

            <form aria-busy={pending} className="min-w-0 md:col-span-8" onSubmit={submit} onChange={() => setSuccess(false)}>
                <fieldset disabled={pending} className="grid min-w-0 gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <label className={labelClass}>
                            <span className={labelTextClass}>Full name</span>
                            <input className={inputClass} name="full_name" autoComplete="name" maxLength={120} required />
                        </label>
                        <label className={labelClass}>
                            <span className={labelTextClass}>Email address</span>
                            <input className={inputClass} name="email_address" type="email" autoComplete="email" maxLength={254}
                                pattern={'[^\\s@]+@[^\\s@]+\\.[^\\s@]+'}
                                onInvalid={(event) => event.currentTarget.setCustomValidity('Please enter a valid email address, such as name@example.com.')}
                                onInput={(event) => event.currentTarget.setCustomValidity('')}
                                required />
                        </label>
                    </div>
                    <label className={labelClass}>
                        <span className={labelTextClass}>Company <span className="font-normal text-stone-600">(optional)</span></span>
                        <input className={inputClass} name="company" autoComplete="organization" maxLength={120} />
                    </label>
                    <label className={labelClass}>
                        <span className={labelTextClass}>Message</span>
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
                    <AnimatePresence initial={false}>
                        {success && <motion.p key="success" {...feedback}
                            className="mt-4 flex items-start gap-2 rounded-lg border border-[#36796F]/20 bg-[#36796F]/5 px-4 py-3 text-sm leading-relaxed text-[#285C54]">
                            <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
                            <span className="min-w-0">Thanks for reaching out. Your message was sent.</span>
                        </motion.p>}
                    </AnimatePresence>
                </div>
                <div role="alert" aria-atomic="true">
                    <AnimatePresence initial={false}>
                        {error && <motion.p key={error} {...feedback}
                            className="mt-4 flex items-start gap-2 rounded-lg border border-[#A92E20]/20 bg-[#E8412C]/5 px-4 py-3 text-sm leading-relaxed text-[#A92E20]">
                            <CircleAlert size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
                            <span className="min-w-0">{error}</span>
                        </motion.p>}
                    </AnimatePresence>
                </div>
            </form>
        </section>
    )
}

export default Contact
