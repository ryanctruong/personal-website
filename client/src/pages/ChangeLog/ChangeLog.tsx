import { CHANGES } from './changes'

const ChangeLog = () => (
    <div className="flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col items-center gap-8 px-4 pt-4 pb-8 md:px-8 md:pt-8">
            <header className="home-section flex flex-col items-start gap-4 py-4">
                <div className="flex max-w-prose flex-col gap-2">
                    <h1 className="text-3xl font-semibold sm:text-4xl">Changelog Origin Update</h1>
                    <p className="leading-relaxed text-stone-600">Discover what’s been added, changed, fixed, improved, and updated in this release.</p>
                </div>
            </header>
            <ol aria-label="Releases" className="home-section">
                {CHANGES.map(({ id, date, content }, index) => (
                    <li key={`${id}-${index}`} className="home-grid gap-y-4 border-t border-[#9DBEB7] py-8">
                        <div className="flex min-w-0 flex-col items-start gap-2 md:col-span-4">
                            <p className="text-sm font-medium text-stone-600">{date}</p>
                            {index === 0 && <span className="rounded-md bg-[#EEF0E9] px-2 py-1 text-xs font-medium text-stone-700">Latest release</span>}
                        </div>
                        <article aria-labelledby={`release-heading-${index}`} className="flex min-w-0 flex-col gap-6 md:col-span-8">
                            <h2 id={`release-heading-${index}`} className="text-2xl font-semibold">Origin Update</h2>
                            <div className="min-w-0 rounded-xl bg-[#EEF0E9] p-4 sm:p-6">{content}</div>
                        </article>
                    </li>
                ))}
            </ol>
        </main>
    </div>
)

export default ChangeLog
