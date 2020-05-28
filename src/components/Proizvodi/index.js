import React from "react"
import { useProductsData } from "./query"

const Product = ({
  title,
  acf: {
    slika_proizvoda: { source_url, alt_text },
    opis_proizvoda,
    pakovanje,
    upotreba,
  },
}) => (
  <li className="item">
    <img src={source_url} alt={alt_text} width="100%" />
    <div className="info px-1 rounded-lg">
      <h2 className="text-xl">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: opis_proizvoda }} />
    </div>
    <ul className="tags">
      {pakovanje.map(size => (
        <li key={size}>
          <span>{size}</span>
        </li>
      ))}
    </ul>
    <ul className="tags">
      {upotreba.map(size => (
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
