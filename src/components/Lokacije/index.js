import React from "react"
import { useLocationsData } from "./query"

const Lokacija = ({ title, content, acf }) => (
  <div className="item">
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: content }} />
    {acf.telefon && <div>{acf.telefon}</div>}
    {acf.adresa && <div>{acf.adresa}</div>}
  </div>
)

export default () => {
  const { edges: lokacije } = useLocationsData()
  return (
    <div className="section">
      <h1 className="text-2xl pt-10 pb-4">Lokacije</h1>
      {lokacije.map(({ node }) => (
        <Lokacija {...node} key={node.title} />
      ))}
    </div>
  )
}
