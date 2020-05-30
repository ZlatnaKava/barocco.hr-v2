import React from "react"
import { ParallaxLayer } from "react-spring/renderprops-addons"

const noop = () => null

const Product = ({
  title,
  acf: {
    slika_proizvoda: { source_url, alt_text },
    opis_proizvoda,
    pakovanje,
    upotreba,
  },
  i,
  goToProduct,
}) => (
  <ParallaxLayer
    offset={i + 1}
    speed={1}
    factor={1}
    className="flex justify-center mx-auto"
  >
    <div className="relative self-center max-w-md mb-10 xl:max-w-lg md:mb-14">
      <div className="flex justify-between">
        <div className="w-full">
          <h2 className="inline-block text-base md:text-xl">{title}</h2>
        </div>
        <div
          className="self-end px-3 py-1 mr-8 text-sm text-white bg-opacity-50 border-none rounded-t-lg cursor-pointer md:hover:bg-opacity-100 bg-barocco-gold md:mr-10 focus:outline-none"
          onClick={e => goToProduct(e, 0)}
          onKeyPress={() => noop}
          role="button"
          tabIndex="0"
        >
          x
        </div>
      </div>
      <div className="max-w-md p-3 mx-3 lg:max-w-xl md:mx-5 md:p-4 card">
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
            className="py-3 md:py-5 tablet-landscape:hidden mobile-portrait-iPhone-6:hidden mobile-portrait-iPhone-6plus:hidden lg:block"
            dangerouslySetInnerHTML={{ __html: opis_proizvoda }}
          />
        </div>
      </div>
    </div>
  </ParallaxLayer>
)

export default Product
