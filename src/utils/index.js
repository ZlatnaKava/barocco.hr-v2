import { useState, useEffect } from "react"

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    console.log("width, height", width, height)
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    // We listen to the resize event
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    })

    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [width, height])

  // Return both the height and width
  return { width, height }
}

export const getMapSrc = (lat, long) =>
  `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=16&size=800x400&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&scale=1&style=feature:road|color:0xffffFF|visibility:simplified`
