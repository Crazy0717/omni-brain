import React from "react"
import Markdown from "react-markdown"

const MarkdownRenderer = ({ children }: { children: string }) => {
  return <Markdown className="flex flex-col gap-2">{children}</Markdown>
}

export default MarkdownRenderer
