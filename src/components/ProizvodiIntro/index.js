import React from "react"
import { useProductsIntro } from "./query"

export default () => {
  const { edges: intro } = useProductsIntro()
  const {
    node: { title, content },
  } = intro[0]
  return (
    <>
      <div className="relative self-center max-w-full max-h-screen mb-10 md:max-w-6xl md:mb-14">
        <div className="inline-block ml-0 md:ml-5">
          <h2 className="text-base md:text-xl">{title}</h2>
        </div>
        <div className="max-w-md p-3 mx-3 md:max-w-xl md:mx-5 md:p-4 card">
          <div className="min-h-0 text-sm bgText md:text-base min-w-1/4">
            <div
              className="px-3 pb-5"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
