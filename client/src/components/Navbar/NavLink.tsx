import type { LucideIcon } from 'lucide-react'

type NavLinkProps = {
    href: string
    icon: LucideIcon
}

const NavLink = ({ href, icon: Icon }: NavLinkProps) => (
    <a href={href} className="flex items-center p-4 rounded-4xl text-md bg-[#000000]/80 text-white shadow-lg shadow-[#9dbeb7]/50 w-fit h-fit hover:bg-[#E8412C] cursor-pointer">
        <Icon size={24} aria-hidden="true" />
    </a>
)

export default NavLink
