import React, { useState, useCallback, useEffect } from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import Lokacije from "../components/Lokacije"
import Proizvodi from "../components/Proizvodi"
import Onama from "../components/Onama"
import Kontakt from "../components/Kontakt"
import MobileNav from "../components/MobileNav"
import Beans from "../components/Beans"
import Pocetna from "../components/Pocetna"
import RotateAlert from "../components/RotateAlert"
import SectionNav from "../components/SectionNav"
import { useViewport } from "../utils"

const SWIPE_BUFFER = 50
const MAX_SECTIONS = 5
const MAX_PRODUCTS = 10
const MAX_LOCATIONS = 5
const SECTION_PRODUCTS_ID = 2
const SECTION_LOCATION_ID = 3

export default () => {
  let parallax = {}

  const [isMenuActive, setMenuActive] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [currentProduct, setCurrentProduct] = useState(0)
  const [currentLocation, setCurrentLocation] = useState(0)
  const [clientY, setClientY] = useState(0)
  const [clientX, setClientX] = useState(0)
  const [swipeLeft, setSwipeLeft] = useState(false)
  const [swipeRight, setSwipeRight] = useState(false)
  const [swipeUp, setSwipeUp] = useState(false)
  const [swipeDown, setSwipeDown] = useState(false)

  const { height, width } = useViewport()

  console.log("height, width", height, width)

  const toggleMenu = useCallback(() => {
    setMenuActive(menuActive => !menuActive)
  }, [])

  const goToSection = useCallback(
    (e, section, close) => {
      if (e) e.preventDefault()
      if (close) toggleMenu()
      // console.log("section", section)
      setCurrentSection(section)
    },
    [toggleMenu]
  )

  const goToProduct = useCallback((e, product) => {
    if (e) e.preventDefault()
    // console.log("product", product)
    setCurrentProduct(product)
  }, [])

  const goToLocation = useCallback((e, location) => {
    if (e) e.preventDefault()
    // console.log("location", location)
    setCurrentLocation(location)
  }, [])

  const swipeUpDown = useCallback(
    e => {
      if (swipeUp && currentSection < MAX_SECTIONS - 1)
        goToSection(e, currentSection + 1)

      if (swipeDown && currentSection > 0) goToSection(e, currentSection - 1)
    },
    [swipeUp, swipeDown, currentSection, goToSection]
  )

  const swipeLeftRight = useCallback(
    e => {
      // swipe on products
      if (
        swipeLeft &&
        currentSection === SECTION_PRODUCTS_ID &&
        currentProduct < MAX_PRODUCTS - 1
      )
        goToProduct(e, currentProduct + 1)

      if (
        swipeRight &&
        currentSection === SECTION_PRODUCTS_ID &&
        currentProduct > 0
      )
        goToProduct(e, currentProduct - 1)

      // swipe on locations
      if (
        swipeLeft &&
        currentSection === SECTION_LOCATION_ID &&
        currentLocation < MAX_LOCATIONS - 1
      )
        goToLocation(e, currentLocation + 1)

      if (
        swipeRight &&
        currentSection === SECTION_LOCATION_ID &&
        currentLocation > 0
      )
        goToLocation(e, currentLocation - 1)
    },
    [
      swipeLeft,
      swipeRight,
      currentProduct,
      currentLocation,
      currentSection,
      goToProduct,
      goToLocation,
    ]
  )

  const handleTouchStart = e => {
    setSwipeLeft(false)
    setSwipeRight(false)
    setSwipeUp(false)
    setSwipeDown(false)

    setClientX(e.touches[0].clientX)
    setClientY(e.touches[0].clientY)
  }

  const handleTouchMove = e => {
    if (e.touches[0].clientX > clientX + SWIPE_BUFFER) setSwipeRight(true)
    if (e.touches[0].clientX < clientX - SWIPE_BUFFER) setSwipeLeft(true)

    if (e.touches[0].clientY > clientY + SWIPE_BUFFER) setSwipeDown(true)
    if (e.touches[0].clientY < clientY - SWIPE_BUFFER) setSwipeUp(true)
  }

  useEffect(() => {
    parallax.scrollTo(currentSection)
  }, [parallax, currentSection])

  useEffect(() => {
    swipeUpDown()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientX, clientY, swipeUp, swipeDown])

  useEffect(() => {
    swipeLeftRight()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientX, clientY, swipeLeft, swipeRight])

  return (
    <>
      <div className="hidden mobile-landscape-iPhone-x:block mobile-landscape-iPhone-6:block mobile-landscape-iPhone-6plus:block">
        <RotateAlert />
      </div>

      <div
        className="mobile-landscape-iPhone-x:hidden mobile-landscape-iPhone-6:hidden mobile-landscape-iPhone-6plus:hidden"
        onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
        onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
      >
        <MobileNav
          toggleMenu={toggleMenu}
          isMenuActive={isMenuActive}
          goToSection={goToSection}
          currentSection={currentSection}
        />

        <SectionNav
          goTo={goToSection}
          current={currentSection}
          type="vertical"
          totalItems={MAX_SECTIONS}
        />

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
            className="flex justify-center align-middle section md:mx-0"
          >
            <Onama goToSection={goToSection} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0}
            factor={1}
            className="lg:p-0 section"
          >
            <Proizvodi
              goToProduct={goToProduct}
              currentProduct={currentProduct}
            />
            <SectionNav
              goTo={goToProduct}
              current={currentProduct}
              type="horizontal"
              totalItems={MAX_PRODUCTS}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={0}
            factor={1}
            className="lg:p-0 section"
          >
            <Lokacije
              goToLocation={goToLocation}
              currentLocation={currentLocation}
            />
            <SectionNav
              goTo={goToLocation}
              current={currentLocation}
              type="horizontal"
              totalItems={MAX_LOCATIONS}
            />
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
              <p>Pronašli ste skriveno jaje!</p>
              <p>Bravo!!!</p>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}
