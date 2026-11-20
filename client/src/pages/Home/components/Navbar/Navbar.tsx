import { LayoutGroup } from 'motion/react'
import { useLocation } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import { House, BadgeQuestionMark, Ellipsis, Route, Mail } from 'lucide-react'
import NavLink from './NavLink'
import ExpandedNavigation from './ExpandedNavigation'

const sections = [
    { id: 'questions', href: '#questions' },
    { id: 'timeline', href: '#timeline' },
    { id: 'contact-me', href: '#contact-me' },
]

const Navbar = () => {
    const { pathname } = useLocation()
    const [activeHref, setActiveHref] = useState('/')
    const [isExpanded, setIsExpanded] = useState(false)
    const navigationRef = useRef<HTMLElement>(null)
    const toggleRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (pathname !== '/') return
        let frame = 0
        const update = () => {
            frame = 0
            const readingLine = Math.max(
                navigationRef.current?.getBoundingClientRect().bottom ?? 0,
                Math.min(window.innerHeight * 0.25, 200),
            )
            let current = '/'
            for (const { id, href } of sections) {
                const section = document.getElementById(id)
                if (section && section.getBoundingClientRect().top <= readingLine) current = href
            }
            // The final section may be too short to reach the reading line.
            if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
                current = '#contact-me'
            }
            setActiveHref(current)
        }
        const scheduleUpdate = () => {
            if (!frame) frame = window.requestAnimationFrame(update)
        }
        const observer = new ResizeObserver(scheduleUpdate)
        const main = document.querySelector('main')
        if (main) observer.observe(main)
        update()
        window.addEventListener('scroll', scheduleUpdate, { passive: true })
        window.addEventListener('resize', scheduleUpdate)
        return () => {
            observer.disconnect()
            window.cancelAnimationFrame(frame)
            window.removeEventListener('scroll', scheduleUpdate)
            window.removeEventListener('resize', scheduleUpdate)
        }
    }, [pathname])

    useEffect(() => {
        if (!isExpanded) return
        const dismiss = (event: PointerEvent) => {
            if (!navigationRef.current?.contains(event.target as Node)) setIsExpanded(false)
        }
        document.addEventListener('pointerdown', dismiss)
        return () => document.removeEventListener('pointerdown', dismiss)
    }, [isExpanded])

    return (
        <nav
            ref={navigationRef}
            aria-label="Main navigation"
            onKeyDown={(event) => {
                if (event.key === 'Escape' && isExpanded) {
                    setIsExpanded(false)
                    toggleRef.current?.focus()
                }
            }}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsExpanded(false)
            }}
            className="sticky top-0 z-20 border-b border-[#9DBEB7]/50 bg-[#F7F5EF] px-4 md:px-8"
        >
            <LayoutGroup>
            <div className="relative mx-auto grid w-full max-w-6xl grid-cols-5 items-center gap-1 py-2 sm:flex sm:justify-end sm:gap-2">
                <NavLink active={pathname === '/' && activeHref === '/'} href="/" icon={House} label="Home" />
                <NavLink active={pathname === '/' && activeHref === '#questions'} href="#questions" icon={BadgeQuestionMark} label="FAQ" />
                <NavLink active={pathname === '/' && activeHref === '#timeline'} href="#timeline" icon={Route} label="Career" />
                <NavLink active={pathname === '/' && activeHref === '#contact-me'} href="#contact-me" icon={Mail} label="Contact" />
                <button
                    ref={toggleRef}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls="expanded-navigation"
                    onClick={() => setIsExpanded((expanded) => !expanded)}
                    className="flex min-h-11 min-w-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-xs font-medium text-stone-700 hover:bg-[#EEF0E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8412C] aria-expanded:bg-[#EEF0E9] sm:flex-row sm:gap-2 sm:px-4 sm:text-sm"
                >
                    <Ellipsis size={18} aria-hidden="true" />
                    <span>More</span>
                </button>
                <ExpandedNavigation isExpanded={isExpanded} onNavigate={() => setIsExpanded(false)} />
            </div>
            </LayoutGroup>
        </nav>
    )
}

export default Navbar
