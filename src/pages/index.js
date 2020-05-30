import React, { useState, useCallback, useEffect } from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import Lokacije from "../components/Lokacije"
import Proizvodi from "../components/Proizvodi"
import Onama from "../components/Onama"
import Kontakt from "../components/Kontakt"
import MobileNav from "../components/MobileNav"
import DesktopNav from "../components/DesktopNav"
import Beans from "../components/Beans"
import Pocetna from "../components/Pocetna"
import RotateAlert from "../components/RotateAlert"

export default () => {
  let parallax = {}

  const [isMenuActive, setMenuActive] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)

  const toggleMenu = useCallback(() => {
    setMenuActive(menuActive => !menuActive)
  }, [])

  const goToSection = (e, section, close) => {
    e.preventDefault()
    if (close) toggleMenu()
    setCurrentSection(section)
  }

  useEffect(() => {
    parallax.scrollTo(currentSection)
  }, [parallax, currentSection])

  return (
    <>
      <div className="hidden mobile-landscape-iPhone-x:block mobile-landscape-iPhone-6:block mobile-landscape-iPhone-6plus:block">
        <RotateAlert />
      </div>

      <div className="mobile-landscape-iPhone-x:hidden mobile-landscape-iPhone-6:hidden mobile-landscape-iPhone-6plus:hidden">
        <MobileNav
          toggleMenu={toggleMenu}
          isMenuActive={isMenuActive}
          goToSection={goToSection}
        />

        <DesktopNav goToSection={goToSection} />

        <Parallax
          className="flex justify-around m-auto mobile-landscape:hidden"
          pages={6}
          scrolling={false}
          ref={ref => (parallax = ref)}
        >
          <Beans />
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={1}
            className="flex flex-col justify-center align-middle section"
          >
            <Pocetna goToSection={goToSection} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0}
            factor={1}
            className="flex justify-center align-middle section"
          >
            <Onama goToSection={goToSection} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0}
            factor={1}
            className="px-2 lg:p-0 section"
          >
            <Proizvodi />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={0}
            factor={1}
            className="px-2 lg:p-0 section"
          >
            <Lokacije />
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={1}
            factor={1}
            className="flex justify-center align-middle section"
          >
            <Kontakt />
          </ParallaxLayer>
          <ParallaxLayer
            offset={5}
            speed={0}
            factor={1}
            className="flex flex-wrap justify-center align-middle section"
          >
            <div className="self-center max-w-sm min-w-0 p-3 mx-16 mb-10 text-center md:p-4 bgText card md:mb-14">
              <p>Pronašli ste Easter Egg!</p>
              <p>Hura!</p>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}
