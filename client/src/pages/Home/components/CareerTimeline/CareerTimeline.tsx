import { useRef, type RefObject } from 'react'
import { motion, useReducedMotion, useScroll } from 'motion/react'
import { CAREER_MILESTONES } from './milestones'

// Each segment follows its own row so wrapped text and responsive heights
// do not change where the rail reaches the next milestone.
const RailProgress = ({ target }: { target: RefObject<HTMLLIElement | null> }) => {
    const { scrollYProgress } = useScroll({ target, offset: ['12px 60%', 'end 60%'] })
    return <motion.span className="absolute inset-0 origin-top bg-[#66877F]" style={{ scaleY: scrollYProgress }} />
}

const CareerMilestone = ({ milestone, isLast }: {
    milestone: (typeof CAREER_MILESTONES)[number]
    isLast: boolean
}) => {
    const rowRef = useRef<HTMLLIElement>(null)
    const reduceMotion = useReducedMotion()
    const { date, title, subtitle, description, techStack } = milestone
    const isCurrent = date.includes('Present')
    return (
        <li ref={rowRef} className="career-grid relative grid grid-cols-[1rem_minmax(0,1fr)] gap-x-4">
            <p className={`col-start-2 mb-2 text-sm font-medium md:col-start-1 md:col-span-4 md:row-start-1 md:pt-1 ${isCurrent ? 'text-[#A92E20]' : 'text-stone-600'}`}>{date}</p>
            <div aria-hidden="true" className="career-rail absolute inset-y-0 left-0 w-4">
                {!isLast && <span className="absolute top-3 -bottom-3 left-1/2 w-px -translate-x-1/2 bg-[#9DBEB7]">
                    {reduceMotion ? <span className="absolute inset-0 bg-[#66877F]" /> : <RailProgress target={rowRef} />}
                </span>}
                <span className={`absolute top-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full border-2 border-[#F7F5EF] ${isCurrent ? 'bg-[#E8412C] ring-1 ring-[#E8412C]' : 'bg-[#9DBEB7]'}`} />
            </div>
            <article className={`col-start-2 min-w-0 pb-10 md:col-start-5 md:col-span-8 md:row-start-1 ${isCurrent ? 'border-l-2 border-[#E8412C] pl-4' : ''}`}>
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-base font-medium text-stone-700">{subtitle}</p>
                    {techStack.length > 0 && (
                        <ul aria-label="Technologies" className="my-3 flex flex-wrap items-center gap-x-5 gap-y-3">
                            {techStack.map((tech) => (
                                <li key={tech.name} className="inline-flex items-center gap-2 text-sm text-stone-700">
                                    <img src={tech.icon} alt="" className="size-4 shrink-0 object-contain" />
                                    <span>{tech.name}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-stone-600">{description}</p>
                </div>
            </article>
        </li>
    )
}

const CareerTimeline = () => (
    <section id="timeline" aria-labelledby="career-heading" className="home-section py-8">
        <header className="mb-8 flex max-w-prose flex-col gap-2">
            <h2 id="career-heading" className="text-3xl font-semibold">My Career Journey</h2>
            <p className="leading-relaxed text-stone-600">From building computers to developing software solutions, I've grown both technically and professionally.</p>
        </header>
        <ol className="flex flex-col">
            {CAREER_MILESTONES.map((milestone, index) => (
                <CareerMilestone key={`${milestone.date}-${milestone.title}`} milestone={milestone}
                    isLast={index === CAREER_MILESTONES.length - 1} />
            ))}
        </ol>
    </section>
)

export default CareerTimeline
