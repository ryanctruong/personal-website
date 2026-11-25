import { isValidElement, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Check, Copy } from 'lucide-react'

const languageNames: Record<string, string> = {
    ts: 'TypeScript', typescript: 'TypeScript', tsx: 'TSX',
    js: 'JavaScript', javascript: 'JavaScript', jsx: 'JSX',
    py: 'Python', python: 'Python', yaml: 'YAML', yml: 'YAML',
    json: 'JSON', html: 'HTML', xml: 'XML', css: 'CSS',
    bash: 'Bash', sh: 'Shell', shell: 'Shell', sql: 'SQL',
    text: 'Plain text', plaintext: 'Plain text', txt: 'Plain text',
}

const CodeBlock = ({ children }: { children?: ReactNode }) => {
    const preRef = useRef<HTMLPreElement>(null)
    const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle')
    const className = isValidElement<{ className?: string }>(children) ? children.props.className : ''
    const language = className?.match(/language-([^\s]+)/)?.[1]
    const label = language ? languageNames[language] ?? language : 'Plain text'

    useEffect(() => {
        if (status === 'idle') return
        const timer = window.setTimeout(() => setStatus('idle'), 3000)
        return () => window.clearTimeout(timer)
    }, [status])

    const copy = async () => {
        const code = preRef.current?.textContent
        if (code === undefined || code === null) return
        try {
            await navigator.clipboard.writeText(code)
            setStatus('copied')
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="article-code min-w-0 rounded-xl bg-[#EEF0E9]">
            <div className="flex min-w-0 items-center justify-between gap-4 border-b border-[#9DBEB7]/50 px-4 py-1 text-sm text-stone-600">
                <span className="min-w-0">{label}</span>
                <button type="button" onClick={copy}
                    className="inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-md px-2 font-medium hover:bg-[#9DBEB7]/25 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8412C]">
                    {status === 'copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                    {status === 'copied' ? 'Copied' : 'Copy code'}
                </button>
            </div>
            <span role="status" className={status === 'error' ? 'block px-4 pt-3 text-sm text-[#A82D1E]' : 'sr-only'}>
                {status === 'copied' ? 'Code copied to clipboard.' : status === 'error' ? 'Could not copy. Select the code and copy it manually.' : ''}
            </span>
            <pre ref={preRef} tabIndex={0} aria-label={`${label} code`}>{children}</pre>
        </div>
    )
}

export default CodeBlock
