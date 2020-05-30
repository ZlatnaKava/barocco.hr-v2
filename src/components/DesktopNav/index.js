import React from "react"
import EasterEgg from "../EasterEgg"

const DesktopNav = ({ goToSection }) => {
  return (
    <>
      <nav className="absolute right-0 z-50 hidden mr-10 transform -translate-y-1/2 dotstyle dotstyle-fillup top-1/2 md:block">
        <ul>
          <li>
            <a href="#Pocetna" onClick={e => goToSection(e, 0)}>
              Početna
            </a>
          </li>
          <li>
            <a href="#o-nama" onClick={e => goToSection(e, 1)}>
              O nama
            </a>
          </li>
          <li>
            <a href="#proizvodi" onClick={e => goToSection(e, 2)}>
              Proizvodi
            </a>
          </li>
          <li>
            <a href="#lokacije" onClick={e => goToSection(e, 3)}>
              Lokacije
            </a>
          </li>
          <li>
            <a href="#kontakt" onClick={e => goToSection(e, 4)}>
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-0 right-0 z-40 hidden md:block">
        <EasterEgg goToSection={goToSection} close={false} />
      </div>
    </>
  )
}
export default DesktopNav
