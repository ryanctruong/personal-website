import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FAQS } from './faq';

const questionAnchor = (id: string) => `questions/${id}`;

const Questionnaire = () => {
    const reduceMotion = useReducedMotion();
    const answersRef = useRef<HTMLDivElement>(null);
    const questionPanelRef = useRef<HTMLDivElement>(null);
    const questionNavRef = useRef<HTMLElement>(null);
    const [marker, setMarker] = useState<{ y: number; height: number } | null>(null);
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

            const panel = questionPanelRef.current;
            if (!panel || panel.clientHeight === 0) return;
            const firstAnswer = answers[0];
            const lastAnswer = answers[answers.length - 1];
            if (!firstAnswer || !lastAnswer) return;

            const firstTop = firstAnswer.getBoundingClientRect().top;
            const lastTop = lastAnswer.getBoundingClientRect().top;
            const distance = lastTop - firstTop;
            const progress = distance > 0
                ? Math.max(0, Math.min(1, (readingLine - firstTop) / distance))
                : 0;

            let target = progress * (panel.scrollHeight - panel.clientHeight);
            const activeLink = panel.querySelector<HTMLAnchorElement>(`a[href="#${current}"]`);
            if (activeLink) {
                const panelTop = panel.getBoundingClientRect().top + panel.clientTop;
                const linkTop = activeLink.getBoundingClientRect().top - panelTop + panel.scrollTop;

                target = Math.max(linkTop + activeLink.offsetHeight - panel.clientHeight,
                    Math.min(target, linkTop));
            }
            panel.scrollTo({ top: target, behavior: 'instant' });
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

    useLayoutEffect(() => {
        const nav = questionNavRef.current;
        if (!nav) return;
        const updateMarker = () => {
            const link = nav.querySelector<HTMLAnchorElement>('[aria-current="location"]');
            if (!link || link.offsetHeight === 0) return;

            const inset = Number.parseFloat(getComputedStyle(link).paddingTop);
            setMarker({ y: link.offsetTop + inset, height: link.offsetHeight - inset * 2 });
        };
        updateMarker();
        const observer = new ResizeObserver(updateMarker);
        observer.observe(nav);
        return () => observer.disconnect();
    }, [activeId]);

    return (
        <section id="questions" className="home-section home-grid items-start gap-y-6 py-8">
            <h2 className="text-2xl font-semibold text-stone-900 md:hidden">Questions</h2>
            <motion.div layoutScroll ref={questionPanelRef} className="hidden min-w-0 flex-col text-stone-900 md:col-span-4 md:flex md:sticky md:top-24 md:max-h-[calc(100dvh-7.5rem)] md:overflow-y-auto">
                <div className="flex items-center justify-between border-b border-[#CED8CF] pb-5">
                    <p id="question-list-heading" className="text-sm font-semibold uppercase tracking-[0.16em]">Questions</p>
                    <span className="text-xs tabular-nums text-stone-500">{String(FAQS.length).padStart(2, '0')}</span>
                </div>
                <nav ref={questionNavRef} aria-labelledby="question-list-heading" className="relative grid divide-y divide-[#CED8CF]">
                    {marker && (
                        <motion.span aria-hidden="true" initial={false}
                            animate={{ y: marker.y, scaleY: marker.height }}
                            transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
                            className="pointer-events-none absolute top-0 left-0 z-10 h-px w-0.5 origin-top rounded-full bg-[#E8412C]" />
                    )}
                    {FAQS.map(({ id, question }, index) => (
                        <a
                            key={id}
                            href={`#${questionAnchor(id)}`}
                            aria-current={activeId === questionAnchor(id) ? 'location' : undefined}
                            className="group relative grid grid-cols-[1.25rem_minmax(0,1fr)_1rem] items-start gap-3 rounded-r-lg px-3 py-5 text-left transition-colors duration-200 motion-reduce:transition-none hover:bg-[#F7F5EF]/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8412C] aria-[current=location]:bg-[#F7F5EF]"
                        >
                            <span className="pt-0.5 text-xs leading-6 tabular-nums text-stone-400 group-aria-[current=location]:text-[#E8412C]">{String(index + 1).padStart(2, '0')}</span>
                            <span className="text-md font-medium leading-6 text-stone-600 transition-colors duration-200 motion-reduce:transition-none group-hover:text-stone-900 group-aria-[current=location]:text-stone-900">{question}</span>
                            <ArrowUpRight size={16} className="mt-1 text-stone-400 group-hover:text-[#E8412C] group-aria-[current=location]:text-[#E8412C]" />
                        </a>
                    ))}
                </nav>
            </motion.div>

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
                                <span aria-hidden="true" className={`relative size-[18px] shrink-0 ${openId === id ? 'text-[#E8412C]' : 'text-stone-600'}`}>
                                    <span className="absolute top-2 left-0.5 h-0.5 w-3.5 rounded-full bg-current" />
                                    <motion.span initial={false} animate={{ scaleY: openId === id ? 0 : 1 }} transition={{ duration: reduceMotion ? 0 : 0.18 }} className="absolute top-0.5 left-2 h-3.5 w-0.5 rounded-full bg-current" />
                                </span>
                            </button>
                        </h3>
                        <p className="hidden text-xl font-semibold md:block">{question}</p>
                        <motion.div id={`question-answer-${id}`} initial={false}
                            data-open={openId === id}
                            animate={{ gridTemplateRows: openId === id ? '1fr' : '0fr' }}
                            transition={{ duration: reduceMotion ? 0 : 0.24, ease: 'easeInOut' }}
                            className="faq-answer grid">
                            <div className="min-h-0 overflow-hidden">
                            <div className="px-2 pb-3 md:p-0">
                            <div className="max-w-[65ch] space-y-4 leading-relaxed text-stone-600">
                                {answer.split(/\n\s*\n/).filter((paragraph) => paragraph.trim()).map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            </div>
                            </div>
                        </motion.div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Questionnaire;
