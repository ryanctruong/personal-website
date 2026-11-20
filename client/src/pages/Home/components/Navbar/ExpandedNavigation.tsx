import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'

const expandedLinks = [
    { label: 'Articles', href: '/articles', external: false },
    { label: 'Change Log', href: '/change-log', external: false },
    { label: 'GitHub', href: 'https://github.com/ryanctruong', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ryanctruong/', external: true },
]

type ExpandedNavigationProps = {
    isExpanded: boolean
    onNavigate: () => void
}

const ExpandedNavigation = ({ isExpanded, onNavigate }: ExpandedNavigationProps) => (
    <div
        id="expanded-navigation"
        hidden={!isExpanded}
        className="absolute top-full right-0 mt-2 w-56 max-w-full rounded-xl border border-[#9DBEB7] bg-[#F7F5EF] p-2 shadow-lg shadow-black/10"
    >
        {expandedLinks.map(({ label, href, external }) => {
            const classes = 'flex min-h-11 items-center justify-between gap-4 rounded-lg px-3 py-3 text-sm font-medium text-stone-900 hover:bg-[#EEF0E9] focus-visible:outline-2 focus-visible:outline-[#E8412C]'
            return external ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" onClick={onNavigate} className={classes}>
                    {label}<ArrowUpRight size={16} aria-hidden="true" />
                </a>
            ) : (
                <Link key={label} to={href} onClick={onNavigate} className={classes}>{label}</Link>
            )
        })}
    </div>
)

export default ExpandedNavigation
