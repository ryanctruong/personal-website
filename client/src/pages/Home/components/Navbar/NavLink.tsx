import { motion, useReducedMotion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router'

type NavLinkProps = {
    active?: boolean
    href: string
    icon: LucideIcon
    label: string
}

const NavLink = ({ href, icon: Icon, label, active = false }: NavLinkProps) => {
    const reduceMotion = useReducedMotion()
    const classes = 'relative isolate flex min-h-11 min-w-0 flex-row items-center justify-start gap-2 rounded-lg px-4 py-2 text-sm font-medium text-stone-700 hover:bg-[#EEF0E9] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8412C] lg:flex-row lg:gap-2 lg:px-4 lg:text-sm'
    const content = <>
        {active && (reduceMotion ?
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 rounded-lg bg-[#9DBEB7]/25" /> :
            <motion.span aria-hidden="true" layoutId="active-navigation-indicator"
                transition={{ type: 'spring', stiffness: 420, damping: 38 }}
                className="pointer-events-none absolute inset-0 -z-10 rounded-lg bg-[#9DBEB7]/25" />
        )}
        <Icon size={18} aria-hidden="true" /><span>{label}</span></>

    return href === '/' ? (
        <Link aria-current={active ? 'location' : undefined} to="/" onClick={() => window.scrollTo(0, 0)} className={classes}>{content}</Link>
    ) : (
        <Link aria-current={active ? 'location' : undefined} to={href.startsWith('#') ? `/${href}` : href} className={classes}>{content}</Link>
    )
}

export default NavLink
