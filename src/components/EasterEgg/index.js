import React from "react"

const EasterEgg = ({ goToSection, close = true }) => (
  <a
    href="#easter-egg"
    className="absolute bottom-0 left-0 z-40 m-5 opacity-easter-egg"
    onClick={e => goToSection(e, 5, close)}
  >
    <span role="img" aria-label="Easter Egg">
      🥚
    </span>
  </a>
)

export default EasterEgg
