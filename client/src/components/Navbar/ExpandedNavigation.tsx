import { AnimatePresence, motion, useReducedMotion, useIsPresent } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const expandedLinks = [
    { label: 'GitHub', href: 'https://github.com/ryanctruong' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ryanctruong/' },
]

type ExpandedNavigationProps = {
    isExpanded: boolean
    onNavigate: () => void
}

const MenuPanel = ({ children }: { children: React.ReactNode }) => {
    const isPresent = useIsPresent()
    const reduceMotion = useReducedMotion()
    return <motion.div id="expanded-navigation" inert={!isPresent}
        style={{ pointerEvents: isPresent ? 'auto' : 'none' }}
        initial={{ opacity: 0, y: reduceMotion ? 0 : -4 }} animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: reduceMotion ? 0 : -4 }} transition={{ duration: reduceMotion ? 0 : 0.16 }}
        className="absolute top-full right-0 mt-2 w-56 max-w-full rounded-xl border border-[#9DBEB7] bg-[#F7F5EF] p-2 shadow-lg shadow-black/10">
        {children}
    </motion.div>
}

const ExpandedNavigation = ({ isExpanded, onNavigate }: ExpandedNavigationProps) => {
    const reduceMotion = useReducedMotion()
    return <AnimatePresence initial={false}>
    {isExpanded && <MenuPanel>
        {expandedLinks.map(({ label, href }) => (
            <motion.a key={label} initial="rest" whileHover="active" whileFocus="active"
                href={href} target="_blank" rel="noopener noreferrer" onClick={onNavigate}
                className="flex min-h-11 max-w-full items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-stone-900 underline decoration-[#9DBEB7] underline-offset-4 hover:bg-[#EEF0E9] hover:decoration-[#E8412C] focus-visible:outline-2 focus-visible:outline-[#E8412C]">
                {label}
                <motion.span aria-hidden="true" className="inline-flex shrink-0 text-[#E8412C]"
                    variants={{ rest: { x: 0, y: 0 }, active: { x: reduceMotion ? 0 : 2, y: reduceMotion ? 0 : -2 } }}
                    transition={{ duration: reduceMotion ? 0 : 0.16, ease: 'easeOut' }}>
                    <ArrowUpRight size={16} />
                </motion.span>
            </motion.a>
        ))}
    </MenuPanel>}
    </AnimatePresence>
}

export default ExpandedNavigation
