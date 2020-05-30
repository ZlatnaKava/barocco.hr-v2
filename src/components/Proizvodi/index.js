import React, { useState, useEffect } from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import { useProductsData } from "./query"
import ProductsIntro from "../ProizvodiIntro"
import ProductNav from "../ProizvodiNav"
import Product from "../Proizvod"

export default () => {
  const { edges: proizvodi } = useProductsData()
  let parallaxProducts

  const [currentProduct, setCurrentProduct] = useState(0)

  const goToProduct = (e, product) => {
    e.preventDefault()
    setCurrentProduct(product)
  }

  useEffect(() => {
    parallaxProducts.scrollTo(currentProduct)
  }, [parallaxProducts, currentProduct, setCurrentProduct])

  return (
    <>
      <div className="absolute bottom-0 z-40 flex flex-wrap content-end justify-center w-full m-auto mx-auto mb-1 mb-5 -mx-2 tablet-landscape:mb-0 md:mb-14">
        <div className="relative self-center max-w-full max-h-screen md:max-w-6xl">
          <div className="max-w-full p-3 mx-3 md:max-w-6xl md:m-5 md:p-4 card">
            <div className="min-h-0 text-sm bgText md:text-base min-w-1/4">
              <div className="flex">
                {proizvodi.map(({ node }, i) => (
                  <ProductNav
                    {...node}
                    key={i}
                    i={i}
                    goToProduct={goToProduct}
                    currentProduct={currentProduct}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Parallax
        pages={proizvodi.length + 1}
        scrolling={false}
        horizontal
        ref={ref => (parallaxProducts = ref)}
        className="-mx-2"
      >
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
          className="flex flex-col justify-center mx-auto"
        >
          <ProductsIntro />
        </ParallaxLayer>
        {proizvodi.map(({ node }, i) => (
          <Product {...node} key={i} i={i} goToProduct={goToProduct} />
        ))}
      </Parallax>
    </>
  )
}
