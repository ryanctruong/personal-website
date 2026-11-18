import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
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
            <div className="flex flex-col text-stone-900 md:sticky md:top-6 md:max-h-[calc(100dvh-3rem)] md:overflow-y-auto">
                <div className="flex items-center justify-between border-b border-[#CED8CF] pb-5">
                    <p id="question-list-heading" className="text-sm font-semibold uppercase tracking-[0.16em]">Questions</p>
                    <span className="text-xs tabular-nums text-stone-500">{String(FAQs.length).padStart(2, '0')}</span>
                </div>
                <nav aria-labelledby="question-list-heading" className="grid divide-y divide-[#CED8CF]">
                    {FAQs.map(({ id, question }, index) => (
                        <a
                            key={id}
                            href={`#${questionAnchor(id)}`}
                            aria-current={activeId === questionAnchor(id) ? 'location' : undefined}
                            className="group relative grid grid-cols-[1.25rem_minmax(0,1fr)_1rem] items-start gap-3 rounded-r-lg px-3 py-5 text-left transition-colors hover:bg-[#F7F5EF]/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8412C] aria-[current=location]:bg-[#F7F5EF] before:absolute before:inset-y-5 before:left-0 before:w-0.5 before:rounded-full aria-[current=location]:before:bg-[#E8412C]"
                        >
                            <span className="pt-0.5 text-xs leading-6 tabular-nums text-stone-400 group-aria-[current=location]:text-[#E8412C]">{String(index + 1).padStart(2, '0')}</span>
                            <span className="text-md leading-6 text-stone-600 group-hover:text-stone-900 group-aria-[current=location]:font-medium group-aria-[current=location]:text-stone-900">{question}</span>
                            <ArrowUpRight size={16} className="mt-1 text-stone-400 group-hover:text-[#E8412C] group-aria-[current=location]:text-[#E8412C]" />
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
