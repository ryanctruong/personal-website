import { useRef, useState } from 'react'
import { ChartNoAxesCombined, Code2, GraduationCap } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useMotionValueEvent } from 'motion/react'
import { CAREER_MILESTONES } from './milestones'

const disciplines = {
    education: { color: '#36796F', icon: GraduationCap },
    analytics: { color: '#496F9A', icon: ChartNoAxesCombined },
    engineering: { color: '#A92E20', icon: Code2 },
} as const

const CareerMilestone = ({ milestone, isLast }: {
    milestone: (typeof CAREER_MILESTONES)[number]
    isLast: boolean
}) => {
    const rowRef = useRef<HTMLLIElement>(null)
    const reduceMotion = useReducedMotion()
    const { date, title, subtitle, description, techStack, discipline } = milestone
    const { color, icon: DisciplineIcon } = disciplines[discipline]
    const { scrollYProgress } = useScroll({ target: rowRef, offset: ['12px 60%', 'end 60%'] })
    const [reached, setReached] = useState(false)
    useMotionValueEvent(scrollYProgress, 'change', (progress) => {
        if (progress > 0 && !reached) setReached(true)
    })
    const activated = reduceMotion || reached
    const isCurrent = date.includes('Present')
    return (
        <li ref={rowRef} className="career-grid relative grid grid-cols-[1rem_minmax(0,1fr)] gap-x-4">
            <motion.p
                initial={false} animate={{ color: activated ? color : '#57534E' }}
                transition={{ duration: reduceMotion ? 0 : 0.24 }}
                className="col-start-2 row-start-1 mb-2 text-sm font-medium leading-6 md:col-start-1 md:col-span-4 md:mb-0 md:text-right">
                {date}
            </motion.p>
            <div aria-hidden="true" className="career-rail absolute inset-y-0 left-0 w-4">
                {!isLast && <span className="absolute top-3 -bottom-3 left-1/2 w-px -translate-x-1/2 bg-[#9DBEB7]/60">
                    <motion.span className="absolute inset-0 origin-top bg-[#66877F]"
                        style={{ scaleY: reduceMotion ? 1 : scrollYProgress }} />
                </span>}
                <span className="absolute top-0 left-1/2 flex size-6 -translate-x-1/2 items-center justify-center rounded-full bg-[#F7F5EF]">
                    <motion.span initial={false}
                        animate={{ opacity: activated ? 1 : 0.4, scale: activated ? 1 : 0.88 }}
                        transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 360, damping: 30 }}
                        style={{ color, borderColor: color }}
                        className="flex size-6 items-center justify-center rounded-full border">
                        <motion.span initial={false} animate={{ opacity: activated ? 0.1 : 0 }}
                            transition={{ duration: reduceMotion ? 0 : 0.24 }}
                            className="absolute inset-0 rounded-full" style={{ backgroundColor: color }} />
                        <DisciplineIcon size={13} strokeWidth={1.75} className="relative" />
                    </motion.span>
                </span>
            </div>
            <article className="col-start-2 row-start-2 min-w-0 pb-10 md:col-start-5 md:col-span-8 md:row-start-1">
                <div className={`flex flex-col gap-1 ${isCurrent ? 'relative rounded-r-xl border-l-2 border-transparent bg-[#E8412C]/5 p-4 sm:p-6' : ''}`}>
                    {isCurrent && <motion.span aria-hidden="true"
                        initial={false} animate={{ scaleY: activated ? 1 : 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.36, ease: 'easeOut' }}
                        className="pointer-events-none absolute inset-y-0 -left-0.5 w-0.5 origin-top bg-[#E8412C]" />}
                    {isCurrent && <p className="mb-2 text-sm font-semibold text-[#A92E20]">Current role</p>}
                    <h3 style={{ color }} className="text-xl font-semibold">{title}</h3>
                    <p className="text-base font-medium text-stone-700">{subtitle}</p>
                    {techStack.length > 0 && (
                        <ul aria-label="Technologies" className="my-3 flex min-w-0 flex-wrap items-center gap-2">
                            {techStack.map((tech) => (
                                <li key={tech.name}
                                    className="inline-flex min-w-0 max-w-full items-center gap-2 rounded-lg border border-stone-300 bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-700">
                                    <img src={tech.icon} alt="" className="size-4 shrink-0 object-contain" />
                                    <span className="min-w-0">{tech.name}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="mt-2 max-w-[65ch] space-y-4 text-sm leading-relaxed text-stone-600">
                        {description.split(/\n\s*\n/).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </article>
        </li>
    )
}

const CareerTimeline = () => (
    <section id="timeline" aria-labelledby="career-heading" className="home-section py-8">
        <header className="mb-8 flex max-w-prose flex-col gap-2">
            <h2 id="career-heading" className="text-3xl font-semibold text-[#C0392B]">My Career Journey</h2>
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
