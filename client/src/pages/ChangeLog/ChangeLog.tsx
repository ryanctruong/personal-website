import { Link } from 'react-router'
import Timeline from '../../components/Timeline/Timeline';
import { CHANGES } from "./changes";

const ChangeLog = () => {
    return (
        <main className="min-h-screen p-8">
            <Link to="/" className="underline">Back to home</Link>
            <div className="flex flex-col items-center justify-center gap-12 w-full">
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-4xl font-semibold">Changelog Origin Update</p>
                    <p className="text-stone-600">Discover what’s been added, changed, fixed, improved, and updated in this release.</p>
                </div>
                <div className="w-full max-w-4xl">
                    <Timeline layout="one-sided" items={CHANGES} />
                </div>
            </div>

        </main>
    );
};

export default ChangeLog;