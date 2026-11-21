import { parse } from 'yaml'

export const slugify = (title: string) => title.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '')

const files = import.meta.glob('./content/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const slugs = new Set<string>()

export const articles = Object.entries(files).map(([path, source]) => {
    const frontmatter = source.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
    const metadata = frontmatter ? parse(frontmatter[1]) ?? {} : {}
    let body = source.slice(frontmatter?.[0].length ?? 0).trim()
    const heading = body.match(/^#\s+(.+?)(?:\r?\n|$)/)
    const title = String(metadata.title ?? heading?.[1] ?? path.split('/').pop()!.replace(/\.md$/, '').replace(/-/g, ' ')).trim()
    if (heading && (!metadata.title || heading[1].trim() === title)) body = body.slice(heading[0].length).trim()
    const slug = slugify(title)
    if (!slug || slugs.has(slug)) throw new Error(`Article titles must have unique URL slugs: ${path}`)
    slugs.add(slug)
    const date = typeof metadata.date === 'string' ? metadata.date : ''
    if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date)) {
        throw new Error(`Use a valid YYYY-MM-DD article date: ${path}`)
    }
    return {
        title, slug, body, date,
        description: typeof metadata.description === 'string' ? metadata.description : '',
        formattedDate: date ? new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(date)) : '',
        readingMinutes: Math.max(1, Math.ceil(body.split(/\s+/).filter(Boolean).length / 200)),
    }
}).sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title))
