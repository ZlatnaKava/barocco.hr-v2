import React from "react"
import { useProductsData } from "../Proizvodi/query"
import ProductNav from "../ProizvodiNav"
import EasterEgg from "../EasterEgg"

const noop = () => null

const MobileNav = ({
  currentSection,
  toggleMenu,
  isMenuActive,
  goToSection,
  goToProduct,
  currentProduct,
}) => {
  const { edges: proizvodi } = useProductsData()
  return (
    <>
      <button
        className="absolute top-0 right-0 z-50 p-5 focus:outline-none"
        onClick={toggleMenu}
        tabIndex="0"
        aria-label="menu"
      >
        {isMenuActive ? (
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          </svg>
        ) : (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        )}
      </button>

      <div
        className={`z-40 ${
          isMenuActive
            ? "absolute overflow-hidden inset-0 bg-black bg-opacity-50"
            : "outline-none"
        }`}
        onClick={isMenuActive ? toggleMenu : noop}
        onKeyPress={() => noop}
        role="button"
        tabIndex="0"
        aria-label="menu-background"
      >
        <nav
          className={`w-menu-small md:w-menu-medium lg:w-menu-big z-50 h-full transform transition-all duration-200 ease-in-out bgText shadow-xl right-0 absolute ${
            isMenuActive ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="absolute bottom-0 left-0 mx-5 my-0 text-xs text-gray-500"
            style={{ bottom: "1.5rem" }}
          >
            <div>
              Copyright{" "}
              <span className="font-bold">Zlatna Kava d.o.o. 2020</span>
            </div>
          </div>
          <button
            className="absolute m-5 focus:outline-none"
            onClick={e => goToSection(e, 0)}
          >
            <img
              className="mx-2"
              src={"../../BaroccoCaffeeLogo.png"}
              width="120"
              alt="Barocco Caffee"
              title="Barocco Caffee"
            />
          </button>
          <ul className="flex flex-col justify-center h-full py-5 pl-5 text-xl text-black md:text-2xl bgText">
            <li>
              <a
                href="#o-nama"
                className={`block py-2 px-4 ${
                  currentSection === 1 ? "bg-barocco-red text-white" : ""
                }`}
                onClick={e => goToSection(e, 1)}
              >
                O nama
              </a>
            </li>
            <li>
              <a
                href="#proizvodi"
                className={`block py-2 px-4 ${
                  currentSection === 2 ? "bg-barocco-red text-white" : ""
                }`}
                onClick={e => goToProduct(e, 0)}
              >
                Proizvodi
              </a>

              <div className="w-full pt-2 pr-2 md:pt-4 md:pr-4">
                {proizvodi.map(({ node }, i) => (
                  <ProductNav
                    {...node}
                    key={i}
                    i={i}
                    goToProduct={goToProduct}
                    currentProduct={currentProduct}
                    currentSection={currentSection}
                  />
                ))}
              </div>
            </li>
            <li>
              <a
                href="#lokacije"
                className={`block py-2 px-4 ${
                  currentSection === 3 ? "bg-barocco-red text-white" : ""
                }`}
                onClick={e => goToSection(e, 3)}
              >
                Lokacije
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                className={`block py-2 px-4 ${
                  currentSection === 4 ? "bg-barocco-red text-white" : ""
                }`}
                onClick={e => goToSection(e, 4)}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isMenuActive && <EasterEgg goToSection={goToSection} />}
    </>
  )
}
export default MobileNav
