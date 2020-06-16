import React from "react"

const noop = () => null

const SectionNavBtns = ({ goTo, current, i, totalItems, intro = false }) => {
  // const handleKeyDown = e => {
  //   e.persist()
  //   // arrow up/down button should select next/previous list element
  //   if (e.keyCode === 37) {
  //     goTo(e, "left")
  //   } else if (e.keyCode === 39) {
  //     goTo(e, "right")
  //   } else if (e.keyCode === 38) {
  //     goTo(e, "up")
  //   } else if (e.keyCode === 40) {
  //     goTo(e, "down")
  //   }
  // }
  return (
    <>
      <div className="sectionNavBtns">
        <button
          className={
            i === 0 && !intro
              ? "hidden"
              : "left lg:shadow-lg focus:outline-none px-1 ml-2 md:px-2 md:-ml-3"
          }
          onClick={e => goTo(e, current - 1)}
          onKeyPress={() => noop}
          role="link"
          tabIndex="0"
          aria-label="Prethodna"
        >
          <svg className="w-4 h-4 fill-white" viewBox="0 0 290 512">
            <polygon points="255.791453 0.023 0 255.814453 256.208547 512.023 289.175085 479.072505 65.9009901 255.814453 288.75799 32.973495"></polygon>
          </svg>
        </button>
        <button
          className={
            i === totalItems - 1
              ? "hidden "
              : "right lg:shadow-lg focus:outline-none px-1 mr-2 md:px-2 md:-mr-3"
          }
          onClick={e => goTo(e, current + 1)}
          onKeyPress={() => noop}
          role="link"
          tabIndex="0"
          aria-label="Slijedeća"
        >
          <svg className="w-4 h-4 fill-white" viewBox="0 0 290 512">
            <polygon points="32.9644715 0.023 0 32.9874715 223.260104 256.231534 0.417068739 479.058529 33.3654991 512.023 289.156965 256.247575 256.192493 223.299145"></polygon>
          </svg>
        </button>
      </div>
    </>
  )
}
export default SectionNavBtns
