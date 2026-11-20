import { Link } from 'react-router'
import Timeline from '../../components/Timeline/Timeline';
import Graph from '../../components/Graph/Graph';

const ChangeLog = () => {
    return (
        <main className="min-h-screen p-8">
            <Link to="/" className="underline">Back to home</Link>
            <div className="flex flex-col items-center justify-center gap-12 w-full">
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-3xl font-semibold">My Career Journey</p>
                    <p className="text-stone-600">From building computers to developing software solutions, I've grown both technically and professionally.</p>
                </div>
                <Timeline layout="one-sided"
                    items={[
                        { id: "event-1", date: "2026", content: <Graph /> },
                        { id: "event-1", date: "2026", content: <Graph /> },
                        { id: "event-1", date: "2026", content: <Graph /> },
                        { id: "event-1", date: "2026", content: <Graph /> },
                        { id: "event-1", date: "2026", content: <Graph /> },
                        { id: "event-1", date: "2026", content: <Graph /> },
                        { id: "event-1", date: "2026", content: <Graph /> },
                        { id: "event-1", date: "2026", content: <Graph /> },
                        { id: "event-1", date: "2026", content: <Graph /> },
                        { id: "event-1", date: "2026", content: <Graph /> },
                        { id: "event-1", date: "2026", content: <Graph /> },
                        { id: "event-1", date: "2026", content: <Graph /> },
                        { id: "event-1", date: "2026", content: <Graph /> },
                        { id: "event-1", date: "2026", content: <Graph /> },

                    ]}
                />
            </div>

        </main>
    );
};

export default ChangeLog;