import { PATHS } from "./milestones";

const CareerTimeline = () => {
    return (
        <section id="timeline" className="w-full flex flex-col gap-8">
            <header className="flex flex-col gap-2 text-center">
                <p className="text-3xl font-semibold">My Career Journey</p>
                <p className="text-stone-600">From building computers to developing software solutions, I've grown both technically and professionally.</p>
            </header>

            <ol className="flex flex-col gap-8 py-4 px-8 relative isolate before:pointer-events-none before:absolute before:top-3 before:bottom-0 before:left-3 before:-z-10 before:w-0.5 before:bg-stone-300 md:before:left-1/2 md:before:-translate-x-1/2">
                {PATHS.map(({ date, title, subtitle, description }, index) => (
                    <li key={title} className="group flex items-start md:even:flex-row-reverse" data-timeline-item="true">
                        <div className="hidden flex-1 md:flex" style={{ justifyContent: index % 2 === 0 ? "flex-end" : "flex-start" }}>
                            <span className="rounded-sm bg-[#E8412C]/10 px-2 py-1 text-sm font-medium text-[#A92E20]">
                                {date}
                            </span>
                        </div>

                        <div className="shrink-0 pr-4 md:px-4">
                            <span data-timeline-dot="true" className="flex size-6 items-center justify-center rounded-full bg-[#F7F5EF]">
                                <span className="size-3 rounded-full bg-[#E8412C]" />
                            </span>
                        </div>

                        <article className="min-w-0 flex-1">
                            <p className="mb-2 w-fit rounded-sm bg-[#E8412C]/10 px-2 py-1 text-sm font-medium text-[#A92E20] md:sr-only">
                                {date}
                            </p>
                            <div className="flex flex-col gap-1 text-left md:group-even:text-right">
                                <p className="text-lg font-medium">{title}</p>
                                <p className="">{subtitle}</p>
                                <p className="text-stone-600 text-sm">{description}</p>
                            </div>
                        </article>
                    </li>
                ))}
            </ol>
        </section>
    );
}

export default CareerTimeline;
