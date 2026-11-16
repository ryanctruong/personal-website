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
            const readingLine = window.innerHeight * 0.5;
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

        updateActiveQuestion();
        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);

        return () => {
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
            if (frame !== null) window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <section id="questions" aria-label="Questions about Ryan" className="grid w-full max-w-6xl items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10 p-8">
            <div className="flex flex-col gap-4 rounded-4xl bg-[#9DBEB7] p-6 text-stone-900 md:sticky md:top-6 md:max-h-[calc(100dvh-3rem)] md:overflow-y-auto">
                <h2 id="question-list-heading" className="px-3 text-lg font-semibold">Questions</h2>
                <nav aria-labelledby="question-list-heading" className="grid gap-1">
                    {FAQs.map(({ id, question }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            aria-current={activeId === id ? 'location' : undefined}
                            className="rounded-xl border-l-4 border-transparent px-3 py-2 text-left hover:bg-[#F7F5EF]/60 aria-[current=location]:border-[#C0392B] aria-[current=location]:bg-[#F7F5EF] aria-[current=location]:font-medium"
                        >
                            {question}
                        </a>
                    ))}
                </nav>
            </div>

            <div ref={answersRef} className="grid min-w-0 gap-6 md:gap-8">
                {FAQs.map(({ id, question, answer }) => (
                    <article key={id} id={id} tabIndex={-1} className="grid scroll-mt-6 gap-2 border-b border-[#CED8CF] pb-6 last:border-b-0 last:pb-0 md:pb-8">
                        <h2 className="text-2xl font-semibold">{question}</h2>
                        <p className="max-w-[65ch] leading-relaxed text-stone-600">{answer}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Questionnaire;
