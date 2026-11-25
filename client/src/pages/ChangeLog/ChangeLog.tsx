import MarkdownContent from '../../components/MarkdownContent/MarkdownContent'
import { parseMarkdownEntries } from '../../util/markdownContent'

const files = import.meta.glob('./content/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const CHANGES = parseMarkdownEntries(files)

const ChangeLog = () => (
    <div className="flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col items-center gap-8 px-4 pt-4 pb-8 md:px-8 md:pt-8">
            <header className="home-section flex flex-col items-start gap-4 py-4">
                <div className="flex max-w-prose flex-col gap-2">
                    <h1 className="text-3xl font-semibold sm:text-4xl">Changelog</h1>
                    <p className="leading-relaxed text-stone-600">Discover what’s been added, changed, fixed, improved, and updated on the website.</p>
                </div>
            </header>
            <ol aria-label="Releases" className="home-section">
                {CHANGES.map(({ slug, title, date, formattedDate, description, body }, index) => (
                    <li key={slug} className="home-grid gap-y-4 border-t border-[#9DBEB7] py-8">
                        <div className="flex min-w-0 flex-col items-start gap-2 md:col-span-4">
                            {date && <time dateTime={date} className="text-sm font-medium text-stone-600">{formattedDate}</time>}
                            {index === 0 && <span className="rounded-md bg-[#EEF0E9] px-2 py-1 text-xs font-medium text-stone-700">Latest release</span>}
                        </div>
                        <article aria-labelledby={`release-heading-${index}`} className="flex min-w-0 flex-col gap-6 md:col-span-8">
                            <h2 id={`release-heading-${index}`} className="text-2xl font-semibold">{title}</h2>
                            {description && <p className="max-w-prose leading-relaxed text-stone-600">{description}</p>}
                            <MarkdownContent className="max-w-prose">{body}</MarkdownContent>
                        </article>
                    </li>
                ))}
            </ol>
        </main>
    </div>
)

export default ChangeLog
