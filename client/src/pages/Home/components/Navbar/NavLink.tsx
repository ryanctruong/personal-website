import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router'

type NavLinkProps = {
    href: string
    icon: LucideIcon
}

const NavLink = ({ href, icon: Icon }: NavLinkProps) => href === '/' ? (
    <Link to="/" aria-label="Home" onClick={() => window.scrollTo(0, 0)} className="flex items-center p-3 rounded-4xl text-md bg-[#000000]/80 text-white shadow-lg shadow-[#9dbeb7]/50 w-fit h-fit hover:bg-[#E8412C] cursor-pointer">
        <Icon size={24} aria-hidden="true" />
    </Link>
) : (
    <a href={href} className="flex items-center p-3 rounded-4xl text-md bg-[#000000]/80 text-white shadow-lg shadow-[#9dbeb7]/50 w-fit h-fit hover:bg-[#E8412C] cursor-pointer">
        <Icon size={24} aria-hidden="true" />
    </a>
)

export default NavLink
