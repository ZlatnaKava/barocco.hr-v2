import React from "react"
import { useOnamaData } from "./query"

export default () => {
  const { edges: onama } = useOnamaData()
  const { node: {title, content} } = onama[0]
  return (
    <div className="section">
      <h1 className="text-2xl pt-10 pb-4">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
