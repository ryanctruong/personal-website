import { Link } from 'react-router'

const expandedLinks = [
    { label: 'Articles', href: '/articles', external: false },
    { label: 'Change Log', href: '/change-log', external: false },
    { label: 'GitHub', href: 'https://github.com/ryanctruong', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ryanctruong/', external: true },
]

type ExpandedNavigationProps = {
    isExpanded: boolean
}

const ExpandedNavigation = ({ isExpanded }: ExpandedNavigationProps) => (
    <div
        id="expanded-navigation"
        className={`${isExpanded ? 'flex' : 'hidden'} h-full w-full items-center justify-evenly gap-0 sm:gap-2 rounded-4xl bg-[#9dbeb7] px-1`}
    >
        {expandedLinks.map(({ label, href, external }) => external ? (
            <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex min-h-11 items-center rounded-4xl px-1 sm:px-2 py-3 text-xs font-semibold whitespace-nowrap hover:bg-black/20 focus-visible:outline-2 focus-visible:outline-white sm:text-sm"
            >
                {label}
            </a>
        ) : (
            <Link
                key={label}
                to={href}
                className="flex min-h-11 items-center rounded-4xl px-1 sm:px-2 py-3 text-xs font-semibold whitespace-nowrap hover:bg-black/20 focus-visible:outline-2 focus-visible:outline-white sm:text-sm"
            >
                {label}
            </Link>
        ))}
    </div>
)

export default ExpandedNavigation
