import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export interface TimelineItem {
    id: string;
    date: ReactNode;
    content: ReactNode;
}

export interface TimelineProps {
    items: readonly TimelineItem[];
    layout?: "alternating" | "one-sided";
}

const Timeline = ({ items, layout = "alternating" }: TimelineProps) => {
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

        const articles = Array.from(timeline.querySelectorAll("[data-timeline-content]"));
        let frame = 0;

        const update = () => {
            frame = 0;
            const scrollTarget = window.innerHeight * 0.7;
            const centers = dots.map((dot) => {
                const { top, height } = dot.getBoundingClientRect();
                return top + height / 2;
            });
            const timelineBounds = timeline.getBoundingClientRect();
            const firstDotBounds = dots[0].getBoundingClientRect();
            timeline.style.setProperty("--timeline-left", `${firstDotBounds.left + firstDotBounds.width / 2 - timelineBounds.left}px`);
            timeline.style.setProperty("--timeline-top", `${centers[0] - timelineBounds.top}px`);
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
    }, [items, layout]);

    return (
        <ol ref={timelineRef} className={`relative isolate w-full gap-y-8 py-4 md:px-4 ${layout === "alternating" ? "flex flex-col" : "grid grid-cols-[1.5rem_minmax(0,1fr)] md:grid-cols-[max-content_3.5rem_minmax(0,1fr)]"}`}>
            {items.map(({ id, date, content }, index) => (
                <li key={id} className={`group items-start ${layout === "alternating" ? "grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-2 md:flex md:gap-x-0 md:even:flex-row-reverse" : "col-span-2 grid grid-cols-subgrid gap-x-2 md:col-span-3 md:gap-x-0"}`} data-side={layout === "alternating" && index % 2 === 1 ? "left" : "right"} data-reached={index < reachedCount} data-timeline-item="true">
                    <div className={`col-start-2 row-start-1 mb-2 flex min-w-0 justify-start md:col-start-1 md:mb-0 md:justify-end md:group-data-[side=left]:justify-start motion-safe:opacity-40 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:group-data-[reached=true]:opacity-100 ${layout === "alternating" ? "flex-1" : ""}`}>
                        <span className="rounded-sm bg-black/10 px-2 py-1 text-sm font-medium text-black group-data-[reached=true]:bg-[#E8412C]/10 group-data-[reached=true]:text-[#A92E20] motion-safe:transition-colors">
                            {date}
                        </span>
                    </div>

                    <div className="col-start-1 row-start-1 row-span-2 shrink-0 md:col-start-2 md:row-span-1 md:px-4">
                        <span data-timeline-dot="true" className="flex size-6 items-center justify-center rounded-full bg-[#F7F5EF]">
                            <span
                                className={`size-3 rounded-full transition-colors duration-200 motion-reduce:transition-none ${index < reachedCount ? "bg-[#E8412C]" : "bg-black"}`}
                            />
                        </span>
                    </div>

                    <article data-timeline-content="true" className="col-start-2 row-start-2 min-w-0 flex-1 md:col-start-3 md:row-start-1">
                        <div
                            data-visible={index < reachedCount && index >= passedCount}
                            className="flex flex-col gap-4 text-left md:group-data-[side=left]:text-right motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:ease-in-out motion-safe:data-[visible=true]:opacity-100"
                        >
                            {content}
                        </div>
                    </article>
                </li>
            ))}
            {items.length > 0 && <li
                aria-hidden="true"
                className="pointer-events-none absolute top-[var(--timeline-top,0px)] left-[var(--timeline-left,0px)] -z-10 h-[var(--timeline-length,0px)] w-0.5 -translate-x-1/2 bg-black/20"
            >
                <span ref={progressRef} className="block h-full origin-top scale-y-0 bg-black" />
            </li>}
        </ol>
    );
};

export default Timeline;
