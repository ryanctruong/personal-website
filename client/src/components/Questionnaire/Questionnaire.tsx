import { useEffect, useRef, useState } from 'react';
import { FAQs } from './faq';

const Questionnaire = () => {
    const answersRef = useRef<HTMLDivElement>(null);
    const [activeId, setActiveId] = useState(FAQs[0].id);

    useEffect(() => {
        const answers = Array.from(answersRef.current?.querySelectorAll('article') ?? []);
        const connectors = Array.from(answersRef.current?.querySelectorAll<HTMLElement>('[data-connector]') ?? []);
        let frame: number | null = null;

        const updateActiveQuestion = () => {
            frame = null;
            const readingLine = window.innerHeight * 0.5;
            let current = FAQs[0].id;

            for (const answer of answers) {
                if (answer.getBoundingClientRect().top > readingLine) break;
                current = answer.id;
            }

            for (const connector of connectors) {
                const { top, height } = connector.getBoundingClientRect();
                const progress = Math.min(1, Math.max(0, (readingLine - top) / height));
                connector.style.setProperty('--connector-progress', String(progress));
            }

            setActiveId(current);
        };

        const scheduleUpdate = () => {
            if (frame === null) frame = window.requestAnimationFrame(updateActiveQuestion);
        };

        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                entry.target.toggleAttribute('data-in-view', entry.isIntersecting);
            }
        }, { rootMargin: '-48px 0px -48px 0px' });

        answers.forEach((answer) => {
            const card = answer.firstElementChild;
            if (card) observer.observe(card);
        });
        updateActiveQuestion();
        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
            if (frame !== null) window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <section className="grid w-full max-w-6xl items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10 p-8">
            <div className="flex flex-col gap-4 rounded-4xl bg-[#9dbeb7] p-6 text-stone-900 md:sticky md:top-6 md:max-h-[calc(100dvh-3rem)] md:overflow-y-auto">
                <nav className="grid gap-1">
                    {FAQs.map(({ id, question }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            aria-current={activeId === id ? 'location' : undefined}
                            className="rounded-xl px-3 py-2 text-left text-white hover:bg-white/15 aria-[current=location]:bg-[#F7F5EF] aria-[current=location]:font-semibold aria-[current=location]:text-stone-900"
                        >
                            {question}
                        </a>
                    ))}
                </nav>
            </div>

            <div ref={answersRef} className="grid min-w-0 gap-4 md:gap-0">
                {FAQs.map(({ id, question, answer }, index) => (
                    <article key={id} id={id} tabIndex={-1} className="flex scroll-mt-[25vh] flex-col md:min-h-[60vh] md:scroll-mt-[60vh]">
                        <div className="flex flex-col gap-2 rounded-3xl motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:data-[in-view]:opacity-100 md:motion-safe:data-[in-view]:opacity-0 md:motion-safe:data-[in-view]:data-[active]:opacity-100"
                            data-active={activeId === id ? '' : undefined}
                        >
                            <p className="text-xl font-medium underline">{question}</p>
                            <p className="leading-relaxed text-stone-600">{answer}</p>
                        </div>
                        {index < FAQs.length - 1 && (
                            <span aria-hidden="true" data-connector className="relative mt-4 min-h-6 w-0.5 flex-1 self-center bg-black/20 md:mb-4">
                                <span className="absolute inset-0 origin-top bg-black motion-safe:scale-y-[var(--connector-progress,0)]" />
                            </span>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Questionnaire;
