import { useEffect, useRef, useState } from 'react';
import { FAQs } from './faq';

const Questionnaire = () => {
    const answersRef = useRef<HTMLDivElement>(null);
    const [activeId, setActiveId] = useState(FAQs[0].id);

    useEffect(() => {
        const answers = Array.from(answersRef.current?.querySelectorAll('article') ?? []);
        let frame: number | null = null;

        const updateActiveQuestion = () => {
            frame = null;
            const readingLine = window.innerHeight * 0.3;
            let current = FAQs[0].id;

            for (const answer of answers) {
                if (answer.getBoundingClientRect().top > readingLine) break;
                current = answer.id;
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
        <section
            className="grid w-full max-w-5xl items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10"
        >
            <div className="rounded-3xl bg-[#9dbeb7] p-5 text-stone-900 md:sticky md:top-6 md:max-h-[calc(100dvh-3rem)] md:overflow-y-auto">
                <h2 id="faq-heading" className="text-xl font-bold">Frequently asked questions</h2>
                <nav aria-label="FAQ questions" className="mt-4 grid gap-1">
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
                {FAQs.map(({ id, question, answer }) => (
                    <article
                        key={id}
                        id={id}
                        tabIndex={-1}
                        className="scroll-mt-[25vh] md:min-h-[60vh]"
                    >
                        <div className="rounded-3xl border border-stone-200 bg-white p-5 md:p-8 motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:data-[in-view]:opacity-100 md:motion-safe:data-[in-view]:opacity-0 md:motion-safe:data-[in-view]:data-[active]:opacity-100"
                            data-active={activeId === id ? '' : undefined}
                        >
                            <h3 className="text-xl font-semibold text-stone-900 md:text-2xl">{question}</h3>
                            <p className="mt-3 leading-relaxed text-stone-700">{answer}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Questionnaire;
