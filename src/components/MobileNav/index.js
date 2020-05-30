import React from "react"
import EasterEgg from "../EasterEgg"

const noop = () => null

const MobileNav = ({ toggleMenu, isMenuActive, goToSection }) => {
  return (
    <>
      <button
        className="absolute top-0 right-0 z-50 p-5 focus:outline-none md:hidden"
        onClick={toggleMenu}
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
        className={`absolute overflow-hidden inset-0 z-10 ${
          isMenuActive ? "bg-black bg-opacity-50" : "left-full"
        }`}
        onClick={isMenuActive ? toggleMenu : noop}
      >
        <nav
          className={`w-full z-40 h-full transform transition-all duration-200 ease-in-out bgText shadow-xl rounded-tl-lg rounded-bl-lg ${
            isMenuActive ? "translate-x-1/3" : "translate-x-full"
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
          <EasterEgg goToSection={goToSection} />
          <img
            className="absolute m-5"
            src={"../../BaroccoCaffeeLogo.png"}
            width="120"
            alt="Barocco Caffee"
            title="Barocco Caffee"
          />
          <ul className="flex flex-col justify-center h-full p-5 text-2xl text-black">
            <li className="border-t border-b border-gray-500 border-dotted">
              <a
                href="#pocetna"
                className="block py-2"
                onClick={e => goToSection(e, 0)}
              >
                Početna
              </a>
            </li>
            <li className="border-b border-gray-500 border-dotted">
              <a
                href="#o-nama"
                className="block py-2"
                onClick={e => goToSection(e, 1)}
              >
                O nama
              </a>
            </li>
            <li className="border-b border-gray-500 border-dotted">
              <a
                href="#proizvodi"
                className="block py-2"
                onClick={e => goToSection(e, 2)}
              >
                Proizvodi
              </a>
            </li>
            <li className="border-b border-gray-500 border-dotted">
              <a
                href="#lokacije"
                className="block py-2"
                onClick={e => goToSection(e, 3)}
              >
                Lokacije
              </a>
            </li>
            <li className="border-b border-gray-500 border-dotted">
              <a
                href="#kontakt"
                className="block py-2"
                onClick={e => goToSection(e, 4)}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
export default MobileNav
