import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Code2 } from 'lucide-react'

const FeaturedProject = () => {
    const reduceMotion = useReducedMotion()
    return (
    <article aria-labelledby="featured-project-title" className="min-w-0 overflow-hidden rounded-2xl border border-[#9DBEB7] bg-[#EEF0E9]">
        <div aria-hidden="true" className="px-5 pt-6 sm:px-6 sm:pt-8">
            <div className="overflow-hidden rounded-t-xl border border-b-0 border-[#9DBEB7] bg-[#F7F5EF]">
                <div className="flex items-center justify-between gap-3 border-b border-[#9DBEB7]/50 px-4 py-3 text-xs text-stone-600">
                    <span>Ryan Truong</span>
                    <Code2 size={16} />
                </div>
                <div className="p-5 sm:p-6">
                    <p className="text-2xl font-bold italic text-black">Ryan Truong</p>
                    <div className="mt-4 flex flex-col gap-2">
                        <span className="h-1.5 w-full rounded-full bg-[#9DBEB7]/50" />
                        <span className="h-1.5 w-4/5 rounded-full bg-[#9DBEB7]/50" />
                        <span className="h-1.5 w-3/5 rounded-full bg-[#9DBEB7]/50" />
                    </div>
                    <div className="mt-5 flex items-center gap-3 text-xs font-medium text-stone-700">
                        <span className="size-2 shrink-0 rounded-full bg-[#E8412C]" />
                        <span>Software, data, and the journey so far.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-t border-[#9DBEB7] bg-[#F7F5EF] p-5 sm:p-6">
            <p className="mb-2 text-sm font-medium text-stone-600">Featured project</p>
            <h2 id="featured-project-title" className="text-2xl font-semibold">Personal website</h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-stone-600">A home for my career journey, writing, and conversations. Built with React, a Flask API, and PostgreSQL.</p>
            <ul aria-label="Project technologies" className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-stone-700">
                {['React', 'TypeScript', 'Flask', 'PostgreSQL'].map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <motion.a initial="rest" whileHover="active" whileFocus="active" href="https://github.com/ryanctruong/personal-website" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 max-w-full items-center gap-2 rounded-sm py-2 text-sm font-semibold text-stone-900 underline decoration-[#9DBEB7] underline-offset-4 hover:decoration-[#E8412C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8412C]">
                View source on GitHub
                <motion.span aria-hidden="true" className="inline-flex shrink-0 text-[#E8412C]"
                    variants={{ rest: { x: 0, y: 0 }, active: { x: reduceMotion ? 0 : 2, y: reduceMotion ? 0 : -2 } }}
                    transition={{ duration: reduceMotion ? 0 : 0.16, ease: 'easeOut' }}>
                    <ArrowUpRight size={16} />
                </motion.span>
            </motion.a>
        </div>
    </article>
    )
}

export default FeaturedProject
