// @ts-nocheck
import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"
import Markdown from "react-markdown"

const MarkdownRenderer = ({ children }: { children: string }) => {
  return (
    <Markdown
      className="flex flex-col gap-2"
      components={{
        code({ node, inline, className, children }) {
          const match = /language-(\w+)/.exec(className || "")
          return !inline && match ? (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code>
              {children}
            </code>
          )
        },
      }}
    >
      {children}
    </Markdown>
  )
}

export default MarkdownRenderer
