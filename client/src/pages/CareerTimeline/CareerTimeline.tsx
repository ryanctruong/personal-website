import Timeline from "../../components/Timeline/Timeline";
import { PATHS } from "./milestones";

const CareerTimeline = () => {
    return (
        <section id="timeline" className="p-8 w-full flex flex-col gap-4">
            <header className="flex flex-col gap-2 text-center">
                <p className="text-3xl font-semibold">My Career Journey</p>
                <p className="text-stone-600">From building computers to developing software solutions, I've grown both technically and professionally.</p>
            </header>

            <Timeline
                layout="alternating"
                items={PATHS.map(({ date, title, subtitle, description, techStack }) => ({
                    id: title,
                    date,
                    content: (
                        <>
                            <div className="flex flex-col gap-1">
                                <p className="text-lg font-medium">{title}</p>
                                <p>{subtitle}</p>
                                <p className="text-stone-600 text-sm">{description}</p>
                            </div>
                            {techStack && techStack.length > 0 && (
                                <div className="flex flex-wrap items-center justify-start gap-4 md:group-data-[side=left]:justify-end">
                                    {techStack.map((tech, techIndex) => (
                                        <div className="bg-[#ECEEF0] px-4 py-2 rounded-xl p-1" key={techIndex}>
                                            <img src={tech} alt="" className="h-12 w-12" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    ),
                }))}
            />
        </section>
    );
};

export default CareerTimeline;
