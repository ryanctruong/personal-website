import { useEffect, useRef, useState } from 'react';
import { FAQs } from './faq';

const questionAnchor = (id: string) => `questions/${id}`;

const Questionnaire = () => {
    const answersRef = useRef<HTMLDivElement>(null);
    const [activeId, setActiveId] = useState(questionAnchor(FAQs[0].id));

    useEffect(() => {
        const answers = Array.from(answersRef.current?.querySelectorAll('article') ?? []);
        let frame: number | null = null;

        const updateActiveQuestion = () => {
            frame = null;
            const readingLine = window.innerHeight * 0.5;
            let current = questionAnchor(FAQs[0].id);

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
        <section id="questions" className="grid w-full max-w-6xl items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10 py-8">
            <div className="flex flex-col gap-4 rounded-4xl bg-[#9DBEB7] p-6 text-stone-900 md:sticky md:top-6 md:max-h-[calc(100dvh-3rem)] md:overflow-y-auto">
                <p id="question-list-heading" className="text-lg font-semibold underline">Questions</p>
                <nav className="grid gap-1">
                    {FAQs.map(({ id, question }) => (
                        <a
                            key={id}
                            href={`#${questionAnchor(id)}`}
                            aria-current={activeId === questionAnchor(id) ? 'location' : undefined}
                            className="rounded-xl border-l-4 border-transparent px-3 py-2 text-left hover:bg-[#F7F5EF]/60 aria-[current=location]:border-[#E8412C] aria-[current=location]:bg-[#F7F5EF] aria-[current=location]:font-medium"
                        >
                            {question}
                        </a>
                    ))}
                </nav>
            </div>

            <div ref={answersRef} className="grid min-w-0 gap-6 md:gap-8">
                {FAQs.map(({ id, question, answer }) => (
                    <article key={id} id={questionAnchor(id)} tabIndex={-1} className="grid scroll-mt-6 gap-2 border-b border-[#CED8CF] pb-6 last:border-b-0 last:pb-0 md:pb-8">
                        <p className="text-2xl font-semibold">{question}</p>
                        <p className="max-w-[65ch] leading-relaxed text-stone-600">{answer}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Questionnaire;
