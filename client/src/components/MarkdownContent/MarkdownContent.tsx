import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import CodeBlock from './CodeBlock'

const MarkdownContent = ({ children, className = '' }: { children: string; className?: string }) => (
    <div className={`article-prose min-w-0 ${className}`}>
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={{
            pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
            table: ({ children }) => <div className="article-table" tabIndex={0} role="region" aria-label="Scrollable table"><table>{children}</table></div>,
        }}>{children}</Markdown>
    </div>
)

export default MarkdownContent
