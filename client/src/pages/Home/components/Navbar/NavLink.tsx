import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router'

type NavLinkProps = {
    href: string
    icon: LucideIcon
    label: string
}

const NavLink = ({ href, icon: Icon, label }: NavLinkProps) => {
    const classes = 'flex min-h-11 min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-xs font-medium text-stone-700 hover:bg-[#EEF0E9] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8412C] sm:flex-row sm:gap-2 sm:px-4 sm:text-sm'
    const content = <><Icon size={18} aria-hidden="true" /><span>{label}</span></>

    return href === '/' ? (
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className={classes}>{content}</Link>
    ) : (
        <Link to={`/${href}`} className={classes}>{content}</Link>
    )
}

export default NavLink
