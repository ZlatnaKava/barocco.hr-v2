import React from "react"
// import LazyLoad from "react-lazyload"

const noop = () => null

const ProductNav = ({
  acf: {
    slika_proizvoda: { source_url, alt_text },
  },
  i,
  goToProduct,
  currentProduct,
  currentSection,
}) => (
  <div
    className={`${
      currentProduct === i + 1 && currentSection === 2
        ? "border-b-2 border-barocco-red shadow-sm"
        : "border-b-2 border-transparent"
    } relative inline-block w-1/4 pb-1 md:p-2 outline-none cursor-pointer md:w-1/4 lg:w-1/5`}
    onClick={e => goToProduct(e, i + 1)}
    onKeyPress={() => noop}
    role="button"
    tabIndex="0"
  >
    <img src={source_url} title={alt_text} alt={alt_text} />
  </div>
)

export default ProductNav
