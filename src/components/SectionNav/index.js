import React from "react"

const SectionNav = ({ goTo, current, type, totalItems }) => {
  return (
    <>
      <nav
        className={`${type} sectionNav sectionNav-fillup ${
          type === "vertical" ? "hidden md:block" : "mb-6 md:mb-10"
        }`}
      >
        <ul className="flex flex-col">
          {[...Array(totalItems)].map((e, i) => (
            <li className={`${current === i ? "current" : ""}`} key={i}>
              <button onClick={e => goTo(e, i)} role="link" tabIndex="0">
                item {i}{" "}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
export default SectionNav
