import { useEffect, useRef, useState } from "react";
import { PATHS } from "./milestones";

const CareerTimeline = () => {
    const timelineRef = useRef<HTMLOListElement>(null);
    const progressRef = useRef<HTMLSpanElement>(null);
    const [reachedCount, setReachedCount] = useState(0);
    const [passedCount, setPassedCount] = useState(0);

    useEffect(() => {
        const timeline = timelineRef.current;
        const progress = progressRef.current;
        if (!timeline || !progress) return;

        const dots = Array.from(timeline.querySelectorAll("[data-timeline-dot]"));
        if (dots.length === 0) return;

        const articles = Array.from(timeline.querySelectorAll("article"));
        let frame = 0;

        const update = () => {
            frame = 0;
            const scrollTarget = window.innerHeight * 0.7;
            const centers = dots.map((dot) => {
                const { top, height } = dot.getBoundingClientRect();
                return top + height / 2;
            });
            const first = centers[0];
            const length = centers[centers.length - 1] - first;
            const filled = Math.min(length, Math.max(0, scrollTarget - first));

            timeline.style.setProperty("--timeline-length", `${length}px`);
            progress.style.scale = `1 ${length > 0 ? filled / length : 0}`;
            setReachedCount(centers.filter((center) => center <= scrollTarget).length);
            const fadeOutTarget = window.innerHeight * 0.15;
            setPassedCount(articles.filter((article) => article.getBoundingClientRect().bottom <= fadeOutTarget).length);
        };

        const scheduleUpdate = () => {
            if (!frame) frame = window.requestAnimationFrame(update);
        };

        const observer = new ResizeObserver(scheduleUpdate);
        observer.observe(timeline);
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        scheduleUpdate();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <section id="timeline" className="py-8 w-full flex flex-col gap-8">
            <header className="flex flex-col gap-2 text-center">
                <p className="text-3xl font-semibold">My Career Journey</p>
                <p className="text-stone-600">From building computers to developing software solutions, I've grown both technically and professionally.</p>
            </header>

            <ol ref={timelineRef} className="relative isolate flex flex-col gap-8 px-8 py-4">
                {PATHS.map(({ date, title, subtitle, description }, index) => (
                    <li key={title} className="group flex items-start md:even:flex-row-reverse" data-reached={index < reachedCount} data-timeline-item="true">
                        <div className="hidden flex-1 md:flex motion-safe:opacity-40 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:group-data-[reached=true]:opacity-100" style={{ justifyContent: index % 2 === 0 ? "flex-end" : "flex-start" }}>
                            <span className="rounded-sm bg-[#E8412C]/10 px-2 py-1 text-sm font-medium text-[#A92E20]">
                                {date}
                            </span>
                        </div>

                        <div className="shrink-0 pr-4 md:px-4">
                            <span data-timeline-dot="true" className="flex size-6 items-center justify-center rounded-full bg-[#F7F5EF]">
                                <span
                                    className={`size-3 rounded-full transition-colors duration-200 motion-reduce:transition-none ${index < reachedCount ? "bg-[#E8412C]" : "bg-[#E8412C]/25"}`}
                                />
                            </span>
                        </div>

                        <article className="min-w-0 flex-1">
                            <p className="mb-2 w-fit rounded-sm bg-[#E8412C]/10 px-2 py-1 text-sm font-medium text-[#A92E20] md:sr-only motion-safe:opacity-40 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:group-data-[reached=true]:opacity-100">
                                {date}
                            </p>
                            <div
                                data-visible={index < reachedCount && index >= passedCount}
                                className="flex flex-col gap-1 text-left md:group-even:text-right motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:ease-in-out motion-safe:data-[visible=true]:opacity-100"
                            >
                                <p className="text-lg font-medium">{title}</p>
                                <p className="">{subtitle}</p>
                                <p className="text-stone-600 text-sm">{description}</p>
                            </div>
                        </article>
                    </li>
                ))}
                <li
                    className="pointer-events-none absolute top-7 left-11 -z-10 h-[var(--timeline-length,0px)] w-0.5 -translate-x-1/2 bg-black/20 md:left-1/2"
                >
                    <span ref={progressRef} className="block h-full origin-top scale-y-0 bg-black" />
                </li>
            </ol>
        </section>
    );
}

export default CareerTimeline;
