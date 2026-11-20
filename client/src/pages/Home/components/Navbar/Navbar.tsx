import { LayoutGroup } from 'motion/react'
import { useLocation } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import { House, BadgeQuestionMark, Ellipsis, Route, Mail, Newspaper, History, Menu, X } from 'lucide-react'
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
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const mobileToggleRef = useRef<HTMLButtonElement>(null)
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
        if (!isExpanded && !isMobileOpen) return
        const dismiss = (event: PointerEvent) => {
            if (!navigationRef.current?.contains(event.target as Node)) {
                setIsExpanded(false)
                setIsMobileOpen(false)
            }
        }
        document.addEventListener('pointerdown', dismiss)
        return () => document.removeEventListener('pointerdown', dismiss)
    }, [isExpanded, isMobileOpen])

    return (
        <nav
            ref={navigationRef}
            aria-label="Main navigation"
            onKeyDown={(event) => {
                if (event.key === 'Escape' && (isExpanded || isMobileOpen)) {
                    setIsExpanded(false)
                    if (isMobileOpen) mobileToggleRef.current?.focus()
                    else toggleRef.current?.focus()
                    setIsMobileOpen(false)
                }
            }}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsExpanded(false)
                    setIsMobileOpen(false)
                }
            }}
            className="sticky top-0 z-20 border-b border-[#9DBEB7]/50 bg-[#F7F5EF] px-4 md:px-8"
        >
            <LayoutGroup>
            <div className="relative mx-auto w-full max-w-6xl py-2">
                <div className="flex justify-end lg:hidden">
                    <button ref={mobileToggleRef} type="button"
                        aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isMobileOpen} aria-controls="navigation-links"
                        onClick={() => { setIsMobileOpen((open) => !open); setIsExpanded(false) }}
                        className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-stone-700 hover:bg-[#EEF0E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8412C]">
                        {isMobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
                    </button>
                </div>
                <div id="navigation-links"
                    onClick={(event) => {
                        if ((event.target as HTMLElement).closest('a')) {
                            setIsMobileOpen(false)
                            setIsExpanded(false)
                        }
                    }}
                    className={`${isMobileOpen ? 'flex' : 'hidden'} max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto pt-2 lg:flex lg:max-h-none lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:overflow-visible lg:pt-0`}>
                <div className="flex flex-col gap-1 lg:flex-row lg:gap-2">
                <NavLink active={pathname === '/' && activeHref === '/'} href="/" icon={House} label="Home" />
                <NavLink active={pathname === '/' && activeHref === '#questions'} href="#questions" icon={BadgeQuestionMark} label="FAQ" />
                <NavLink active={pathname === '/' && activeHref === '#timeline'} href="#timeline" icon={Route} label="Timeline" />
                <NavLink active={pathname === '/' && activeHref === '#contact-me'} href="#contact-me" icon={Mail} label="Contact" />
                </div>
                <div className="flex flex-col gap-1 lg:flex-row lg:gap-2">
                <NavLink active={pathname.startsWith('/articles')} href="/articles" icon={Newspaper} label="Articles" />
                <NavLink active={pathname === '/change-log'} href="/change-log" icon={History} label="Changelog" />
                <button
                    ref={toggleRef}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls="expanded-navigation"
                    onClick={() => setIsExpanded((expanded) => !expanded)}
                    className="flex min-h-11 min-w-0 cursor-pointer flex-row items-center justify-start gap-2 rounded-lg px-4 py-2 text-sm font-medium text-stone-700 hover:bg-[#EEF0E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8412C] aria-expanded:bg-[#EEF0E9] lg:flex-row lg:gap-2 lg:px-4 lg:text-sm"
                >
                    <Ellipsis size={18} aria-hidden="true" />
                    <span>More</span>
                </button>
                </div>
                <ExpandedNavigation isExpanded={isExpanded} onNavigate={() => setIsExpanded(false)} />
                </div>
            </div>
            </LayoutGroup>
        </nav>
    )
}

export default Navbar
