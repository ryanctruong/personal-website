import { useState, type SubmitEvent } from 'react'
import { ArrowRight } from 'lucide-react'

const inputClass = 'min-w-0 w-full rounded-xl border border-[#9DBEB7] bg-[#F7F5EF] px-4 py-3 text-base font-normal text-stone-900 transition-colors focus:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8392a] disabled:opacity-70'

const Contact = () => {
    const [pending, setPending] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const submit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (pending) return

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
        <section id="contact-me" aria-labelledby="contact-heading" className="grid w-full max-w-6xl scroll-mt-6 items-start gap-8 py-10 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10 md:py-14">
            <header className="border-t-2 border-[#9DBEB7] pt-5">
                <h2 id="contact-heading" className="text-3xl font-semibold">Contact Me</h2>
                <p className="mt-2 max-w-xs leading-relaxed text-stone-600">
                    Have a project in mind or just want to say hello? I’d love to hear from you.
                </p>
            </header>

            <form className="min-w-0" onSubmit={submit} onChange={() => setSuccess(false)}>
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
                    <button type="submit" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#E8412C] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#A93226] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#92291d] disabled:cursor-wait disabled:opacity-70 sm:w-fit">
                        {pending ? 'Sending…' : 'Send message'}
                        <ArrowRight aria-hidden="true" size={16} />
                    </button>
                </fieldset>
                <p role="status" className={success ? 'mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-900' : 'sr-only'}>
                    {success && 'Thanks for reaching out. Your message was sent.'}
                </p>
                {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-900">{error}</p>}
            </form>
        </section>
    )
}

export default Contact
