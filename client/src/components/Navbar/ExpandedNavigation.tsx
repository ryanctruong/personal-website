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
        className={`${isExpanded ? 'flex' : 'hidden'} h-full w-full items-center justify-evenly gap-2 rounded-4xl bg-[#9dbeb7] px-1`}
    >
        {expandedLinks.map(({ label, href, external }) => (
            <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="rounded-4xl px-2 py-3 text-xs font-semibold whitespace-nowrap hover:bg-black/20 focus-visible:outline-2 focus-visible:outline-white sm:text-sm"
            >
                {label}
            </a>
        ))}
    </div>
)

export default ExpandedNavigation
