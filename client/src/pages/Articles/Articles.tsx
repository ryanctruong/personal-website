import { ArrowLeft } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Link, useLocation } from 'react-router'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { articles } from './articleContent'
import CodeBlock from './components/CodeBlock'

const linkStyle = 'inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-stone-600 hover:text-[#E8412C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8412C]'

const Articles = () => {
    const reduceMotion = useReducedMotion()
    const { hash } = useLocation()
    const slug = hash.startsWith('#articles/') ? hash.slice('#articles/'.length) : ''
    const article = articles.find((entry) => entry.slug === slug || encodeURIComponent(entry.slug) === slug)

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex flex-1 flex-col items-center gap-8 px-4 pt-4 pb-16 md:px-8 md:pt-8">
                {slug ? (
                    <div className="mx-auto w-full min-w-0 max-w-prose">
                        <Link to="/#articles" className={linkStyle}><ArrowLeft size={16} aria-hidden="true" />All articles</Link>
                        {article ? (
                            <motion.article key={article.slug}
                                initial={reduceMotion ? false : { opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: reduceMotion ? 0 : 0.18, ease: 'easeOut' }}
                                className="mx-auto mt-8 w-full max-w-prose">
                                <header className="flex flex-col gap-4 border-b border-[#9DBEB7] pb-8">
                                    <p className="text-sm text-stone-600">{article.date && <><time dateTime={article.date}>{article.formattedDate}</time><span aria-hidden="true"> / </span></>}{article.readingMinutes} min read</p>
                                    <h1 className="text-3xl font-semibold sm:text-4xl">{article.title}</h1>
                                    {article.description && <p className="text-lg leading-relaxed text-stone-600">{article.description}</p>}
                                </header>
                                <div className="article-prose mt-8">
                                    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={{
                                        pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
                                        table: ({ children }) => <div className="article-table" tabIndex={0} role="region" aria-label="Scrollable table"><table>{children}</table></div>,
                                    }}>{article.body}</Markdown>
                                </div>
                                <nav aria-label="Article navigation" className="mt-12 border-t border-[#9DBEB7] pt-4">
                                    <Link to="/#articles" className={linkStyle}><ArrowLeft size={16} aria-hidden="true" />All articles</Link>
                                </nav>
                            </motion.article>
                        ) : (
                            <header className="flex flex-col gap-4 py-8">
                                <h1 className="text-3xl font-semibold sm:text-4xl">Article not found</h1>
                                <p className="text-stone-600">This article may have moved. Browse all articles to find it.</p>
                            </header>
                        )}
                    </div>
                ) : (
                    <>
                        <header className="home-section flex flex-col items-start gap-4 py-4">
                            <h1 className="text-3xl font-semibold sm:text-4xl">Articles</h1>
                            <p className="max-w-prose leading-relaxed text-stone-600">Things I’ve been thinking about, learning, and working on.</p>
                        </header>
                        {articles.length ? <ul aria-label="Articles" className="home-section">
                            {articles.map((entry) => (
                                <li key={entry.slug} className="border-t border-[#9DBEB7]">
                                    <Link to={`/#articles/${entry.slug}`} className="home-grid group relative isolate gap-y-2 rounded-sm py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8412C]">
                                        <span aria-hidden="true" className="pointer-events-none absolute inset-y-2 -inset-x-2 -z-10 rounded-lg group-hover:bg-[#EEF0E9] group-focus-visible:bg-[#EEF0E9]" />
                                        <h2 className="min-w-0 text-2xl font-semibold group-hover:text-[#E8412C] group-focus-visible:text-[#E8412C] md:col-span-9 md:col-start-4 md:row-start-1">{entry.title}</h2>
                                        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-sm text-stone-600 md:col-span-3 md:col-start-1 md:row-span-2 md:row-start-1 md:flex-col md:items-start md:gap-2">
                                            {entry.date && <time dateTime={entry.date}>{entry.formattedDate}</time>}
                                            <span>{entry.readingMinutes} min read</span>
                                        </div>
                                        {entry.description && <p className="min-w-0 max-w-prose leading-relaxed text-stone-600 md:col-span-9 md:col-start-4 md:row-start-2">{entry.description}</p>}
                                    </Link>
                                </li>
                            ))}
                        </ul> : <div className="home-section rounded-xl bg-[#EEF0E9] p-6 sm:p-8">
                            <h2 className="text-xl font-semibold">No articles yet</h2>
                            <p className="mt-2 leading-relaxed text-stone-600">New writing will appear here when it’s published.</p>
                        </div>}
                    </>
                )}
            </main>
        </div>
    )
}

export default Articles
