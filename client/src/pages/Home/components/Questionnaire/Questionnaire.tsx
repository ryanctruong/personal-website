import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { FAQS } from './faq';

const questionAnchor = (id: string) => `questions/${id}`;

const Questionnaire = () => {
    const answersRef = useRef<HTMLDivElement>(null);
    const [activeId, setActiveId] = useState(questionAnchor(FAQS[0].id));

    const [openId, setOpenId] = useState<string | null>(null);

    useEffect(() => {
        const revealLinkedAnswer = () => {
            const linked = FAQS.find(({ id }) => window.location.hash === `#${questionAnchor(id)}`);
            if (linked) setOpenId(linked.id);
        };
        revealLinkedAnswer();
        window.addEventListener('hashchange', revealLinkedAnswer);
        return () => window.removeEventListener('hashchange', revealLinkedAnswer);
    }, []);

    useEffect(() => {
        const answers = Array.from(answersRef.current?.querySelectorAll('article') ?? []);
        let frame: number | null = null;

        const updateActiveQuestion = () => {
            frame = null;
            const readingLine = window.innerHeight * 0.5;
            let current = questionAnchor(FAQS[0].id);

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
        <section id="questions" className="home-section home-grid items-start gap-y-6 py-8">
            <h2 className="text-2xl font-semibold text-stone-900 md:hidden">Questions</h2>
            <div className="hidden min-w-0 flex-col text-stone-900 md:col-span-4 md:flex md:sticky md:top-24 md:max-h-[calc(100dvh-7.5rem)] md:overflow-y-auto">
                <div className="flex items-center justify-between border-b border-[#CED8CF] pb-5">
                    <p id="question-list-heading" className="text-sm font-semibold uppercase tracking-[0.16em]">Questions</p>
                    <span className="text-xs tabular-nums text-stone-500">{String(FAQS.length).padStart(2, '0')}</span>
                </div>
                <nav aria-labelledby="question-list-heading" className="grid divide-y divide-[#CED8CF]">
                    {FAQS.map(({ id, question }, index) => (
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

            <div ref={answersRef} className="grid min-w-0 gap-0 md:col-span-8 md:gap-8">
                {FAQS.map(({ id, question, answer }) => (
                    <article key={id} id={questionAnchor(id)} tabIndex={-1} className="grid scroll-mt-6 gap-2 border-b border-[#CED8CF] py-3 first:border-t last:border-b-0 md:border-t-0 md:pt-0 md:pb-8 md:first:border-t-0 md:last:pb-0">
                        <h3 className="md:hidden">
                            <button
                                type="button"
                                id={`question-toggle-${id}`}
                                aria-expanded={openId === id}
                                aria-controls={`question-answer-${id}`}
                                onClick={() => setOpenId((current) => current === id ? null : id)}
                                className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-4 rounded-lg px-2 py-3 text-left text-base font-semibold text-stone-900 hover:bg-[#F7F5EF]/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8412C]"
                            >
                                <span>{question}</span>
                                {openId === id ? <Minus size={18} className="shrink-0 text-[#E8412C]" aria-hidden="true" /> : <Plus size={18} className="shrink-0 text-stone-600" aria-hidden="true" />}
                            </button>
                        </h3>
                        <p className="hidden text-2xl font-semibold md:block">{question}</p>
                        <div id={`question-answer-${id}`} className={`${openId === id ? 'block' : 'hidden'} px-2 pb-3 md:block md:p-0`}>
                            <p className="max-w-[65ch] leading-relaxed text-stone-600">{answer}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Questionnaire;
