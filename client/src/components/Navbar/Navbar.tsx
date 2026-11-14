import { useEffect, useState } from 'react'
import { House, DiagramFlowHorizontal, Route, Mail } from 'lucide-react'

const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState(false)

    useEffect(() => {
        let scrollTimeout: number

        const handleScroll = () => {
            setIsScrolling(true)
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
            <div className="flex justify-center gap-12 py-2 px-8 rounded-4xl text-md bg-[#000000]/80 text-white shadow-lg shadow-[#9dbeb7]/50">
                <a href="#about-me" className="flex items-center gap-2 cursor-pointer">
                    <House size={24} />
                </a>
                <a href="#timeline" className="flex items-center gap-2">
                    <Route size={24} />
                </a>
                <div className="flex items-center gap-2 cursor-pointer">
                    <DiagramFlowHorizontal size={24} />
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Mail size={24} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar