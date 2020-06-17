import React from "react"
// import LazyLoad from "react-lazyload"
import { ParallaxLayer } from "react-spring/renderprops-addons"
import SectionNavBtns from "../SectionNavBtns"

const Product = ({
  title,
  acf: {
    slika_proizvoda: { source_url, alt_text },
    opis_proizvoda,
    pakovanje,
    upotreba,
  },
  i,
  goTo,
  current,
  totalItems,
}) => (
  <ParallaxLayer
    factor={1}
    offset={i + 1}
    speed={1}
    className="flex justify-center mx-auto"
  >
    <div className="relative self-center max-w-md mb-10 xl:max-w-xl md:mb-14">
      <div className="flex justify-between">
        <div className="w-full">
          <h2 className="ml-10 md:text-xl">{title}</h2>
        </div>
      </div>
      <div className="max-w-md p-3 mx-6 md:mx-5 lg:max-w-2xl md:p-4 card">
        <div className="relative">
          <img
            src={source_url}
            alt={alt_text}
            title={alt_text}
            className="w-full"
          />
          <ul className="absolute top-0 left-0 m-3">
            {pakovanje.map(size => (
              <li
                key={size}
                className="px-3 py-1 mb-2 text-sm text-black bg-gray-300 rounded-lg"
              >
                <span>{size}</span>
              </li>
            ))}
          </ul>
          <ul className="absolute top-0 right-0 flex flex-col justify-end m-3">
            {upotreba.map(size => (
              <li
                key={size}
                className="px-3 py-1 mb-2 ml-auto text-sm text-white rounded-lg bg-barocco-yellow"
              >
                <span>{size}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-1 rounded-lg info">
          <div
            className="pt-3 md:pt-5 lg:block"
            dangerouslySetInnerHTML={{ __html: opis_proizvoda }}
          />
        </div>
      </div>
      <SectionNavBtns
        goTo={goTo}
        current={current}
        i={i}
        totalItems={totalItems}
        intro={true}
      />
    </div>
  </ParallaxLayer>
)

export default Product
