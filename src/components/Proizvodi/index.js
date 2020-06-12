import React, { useEffect } from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import { useProductsData } from "./query"
import ProductsIntro from "../ProizvodiIntro"
// import ProductNav from "../ProizvodiNav"
import Product from "../Proizvod"

export default ({ goToProduct, currentProduct, setCurrentProduct }) => {
  const { edges: proizvodi } = useProductsData()
  let parallaxProducts

  useEffect(() => {
    parallaxProducts.scrollTo(currentProduct)
  }, [parallaxProducts, currentProduct, setCurrentProduct])

  return (
    <>
      {/* <div className="absolute bottom-0 z-40 flex flex-wrap content-end justify-center w-full m-auto mx-auto mb-1 mb-2 md:mb-5 tablet-landscape:mx-0 ">
        <div className="relative self-center max-w-full max-h-screen md:max-w-6xl">
          <div className="p-3 mx-3 md:mx-5 md:max-w-xl md:p-4 card">
            <div className="flex justify-between">
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
 */}
      <Parallax
        pages={proizvodi.length + 1}
        scrolling={false}
        horizontal
        ref={ref => (parallaxProducts = ref)}
        className="mx-0"
      >
        <ParallaxLayer
          factor={1}
          offset={0}
          speed={1}
          className="flex flex-col justify-center"
        >
          <ProductsIntro
            i={-1}
            goTo={goToProduct}
            current={currentProduct}
            totalItems={proizvodi.length}
          />
        </ParallaxLayer>
        {proizvodi.map(({ node }, i) => (
          <Product
            {...node}
            key={i}
            i={i}
            goTo={goToProduct}
            current={currentProduct}
            totalItems={proizvodi.length}
          />
        ))}
      </Parallax>
    </>
  )
}
