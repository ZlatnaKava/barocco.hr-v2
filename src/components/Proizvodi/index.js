import React, { useEffect } from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import { useProductsData } from "./query"
import ProductsIntro from "../ProizvodiIntro"
import Product from "../Proizvod"

export default ({ goToProduct, currentProduct, setCurrentProduct }) => {
  const { edges: proizvodi } = useProductsData()
  let parallaxProducts

  useEffect(() => {
    parallaxProducts.scrollTo(currentProduct)
  }, [parallaxProducts, currentProduct, setCurrentProduct])

  return (
    <>
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
