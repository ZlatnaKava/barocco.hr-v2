import React from "react"
import { useProductsData } from "./query"

const Product = ({ title, content, acf, featured_media }) => (
  <li className="item">
    <img src={featured_media.source_url} alt={title} width="100%" />
    <div className="info px-1 rounded-lg">
      <h2 className="text-xl">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
    <ul className="tags">
      {acf.pakovanje.map(size => (
        <li key={size}>
          <span>{size}</span>
        </li>
      ))}
    </ul>
    <ul className="tags">
      {acf.upotreba.map(size => (
        <li key={size}>
          <span>{size}</span>
        </li>
      ))}
    </ul>
  </li>
)

export default () => {
  const { edges: proizvodi } = useProductsData()
  return (
    <ul className="section">
      <h1 className="text-2xl pt-10 pb-4">Proizvodi</h1>
      {proizvodi.map(({ node }) => (
        <Product {...node} key={node.title} />
      ))}
    </ul>
  )
}
