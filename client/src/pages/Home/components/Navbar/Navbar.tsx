import { useEffect, useState } from 'react'
import { House, BadgeQuestionMark, Ellipsis, Route, Mail } from 'lucide-react'

import NavLink from './NavLink'
import ExpandedNavigation from './ExpandedNavigation'

const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        let scrollTimeout: number

        const handleScroll = () => {
            setIsScrolling(true)
            setIsExpanded(false)
            window.clearTimeout(scrollTimeout)
            scrollTimeout = window.setTimeout(() => setIsScrolling(false), 180)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.clearTimeout(scrollTimeout)
        }
    }, [])

    const visibilityClasses = isScrolling
        ? 'pointer-events-none translate-y-full opacity-0'
        : 'translate-y-0 opacity-100'

    return (
        <nav
            inert={isScrolling}
            className={`fixed inset-x-0 bottom-0 z-10 flex justify-center p-4 text-center transition-[translate,opacity] duration-200 ease-out motion-reduce:transition-none ${visibilityClasses}`}
        >
            <div className="relative h-16 w-88 max-w-full" onMouseLeave={() => setIsExpanded(false)}>
                <div
                    inert={isExpanded}
                    className={`grid h-full grid-cols-[1fr_1fr_4rem_1fr_1fr] items-center justify-items-center gap-4 transition-opacity duration-200 motion-reduce:transition-none ${isExpanded ? 'invisible opacity-0' : 'opacity-100'}`}
                >
                    <NavLink href="/" icon={House} />
                    <NavLink href="#questions" icon={BadgeQuestionMark} />
                    <div/>
                    <NavLink href="#timeline" icon={Route} />
                    <NavLink href="#contact-me" icon={Mail} />
                </div>

                <div
                    onMouseEnter={() => setIsExpanded(true)}
                    className={`absolute top-0 left-1/2 flex h-16 -translate-x-1/2 items-center justify-center rounded-4xl bg-[#000000]/80 p-2 text-white shadow-lg shadow-[#9dbeb7]/50 transition-[width] duration-300 ease-out motion-reduce:transition-none ${isExpanded ? 'w-full' : 'w-16'}`}
                >
                    <button
                        type="button"
                        onClick={() => {
                            setIsExpanded(true)
                            window.requestAnimationFrame(() => {
                                document.querySelector<HTMLAnchorElement>('#expanded-navigation a')?.focus()
                            })
                        }}
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-4xl bg-[#9dbeb7] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9dbeb7] ${isExpanded ? 'hidden' : ''}`}
                    >
                        <Ellipsis size={48} />
                    </button>
                    <ExpandedNavigation isExpanded={isExpanded} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar
