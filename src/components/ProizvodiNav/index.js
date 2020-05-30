import React from "react"

const noop = () => null

const ProductNav = ({
  acf: {
    slika_proizvoda: { source_url, alt_text },
  },
  i,
  goToProduct,
  currentProduct,
}) => (
  <div
    className="relative outline-none cursor-pointer"
    onClick={e => goToProduct(e, i + 1)}
    onKeyPress={() => noop}
    role="button"
    tabIndex="0"
  >
    <img src={source_url} title={alt_text} alt={alt_text} className="w-full" />
    {currentProduct === i + 1 && (
      <div className="absolute bottom-0 w-full -mb-2 border md:border-2 border-barocco-yellow"></div>
    )}
  </div>
)

export default ProductNav
