import React, { useState, useEffect } from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import { useLocationsData } from "./query"

const noop = () => null

const LokacijaMap = props => {
  let parallaxLocations

  const [currentLocation, setCurrentLocation] = useState(0)

  const goToLocation = (e, location) => {
    e.preventDefault()
    setCurrentLocation(location)
  }

  useEffect(() => {
    parallaxLocations.scrollTo(currentLocation)
  }, [parallaxLocations, currentLocation, setCurrentLocation])

  const { edges: locations } = useLocationsData()

  const onMarkerClick = (lat, lng, map) => {
    console.log(lat, lng, map)
  }

  const mapStyle = []

  const _mapLoaded = (mapProps, map) => {
    map.setOptions({
      styles: mapStyle,
    })
  }

  return (
    <>
      <Parallax
        pages={locations.length + 1}
        scrolling={false}
        speed={1}
        horizontal
        ref={ref => (parallaxLocations = ref)}
        className="-mx-2"
      >
        {locations.map(
          (
            {
              node: {
                title,
                acf: {
                  opis,
                  telefon,
                  google_map: { address, lat, lng },
                  slika_1,
                  slika_2,
                  slika_3,
                  slika_4,
                  slika_5,
                },
              },
            },
            i
          ) => {
            return (
              <ParallaxLayer
                offset={i}
                speed={0}
                factor={1}
                key={i}
                i={i}
                className="flex justify-center mx-auto"
              >
                <div className="relative self-center min-w-full md:mx-16 md:min-w-3/4 md:max-w-6xl">
                  <div className="inline-block ml-0 md:ml-5">
                    <h2 className="text-base md:text-xl">{title}</h2>
                  </div>
                  <div className="p-3 mx-3 md:mx-5 md:p-4 card">
                    <div className="relative w-full min-h-300">
                      <Map
                        initialCenter={{
                          lat,
                          lng,
                        }}
                        zoom={props.zoom}
                        zoomControl={true}
                        minZoom={8}
                        maxZoom={20}
                        mapTypeControl={false}
                        scaleControl={false}
                        streetViewControl={false}
                        rotateControl={false}
                        fullscreenControl={false}
                        gestureHandling={"none"}
                        google={props.google}
                        onClick={map => onMarkerClick(lat, lng, map)}
                        onReady={(mapProps, map) =>
                          _mapLoaded(mapProps, map, lat, lng)
                        }
                      >
                        <Marker
                          onClick={map => onMarkerClick(lat, lng, map)}
                          position={{ lat, lng }}
                        />
                      </Map>
                    </div>

                    <div className="w-full overflow-hidden">
                      {slika_1?.source_url && (
                        <img
                          src={slika_1.source_url}
                          className="float-left w-1/5"
                          alt={slika_5.source_url}
                        />
                      )}
                      {slika_2?.source_url && (
                        <img
                          src={slika_2.source_url}
                          className="float-left w-1/5"
                          alt={slika_5.source_url}
                        />
                      )}
                      {slika_3?.source_url && (
                        <img
                          src={slika_3.source_url}
                          className="float-left w-1/5"
                          alt={slika_5.source_url}
                        />
                      )}
                      {slika_4?.source_url && (
                        <img
                          src={slika_4.source_url}
                          className="float-left w-1/5"
                          alt={slika_5.source_url}
                        />
                      )}
                      {slika_5?.source_url && (
                        <img
                          src={slika_5.source_url}
                          className="float-left w-1/5"
                          alt={slika_5.source_url}
                        />
                      )}
                    </div>
                    <div className="pt-5 text-center">
                      {address && <div>adresa: {address}</div>}
                      {telefon && <div>telefon: {telefon}</div>}
                      <div dangerouslySetInnerHTML={{ __html: opis }} />
                    </div>
                  </div>
                  <div className="w-full">
                    <button
                      className={
                        i === 0
                          ? "hidden"
                          : "text-sm bg-opacity-50 md:hover:bg-opacity-100 bg-barocco-gold text-white ml-8 md:ml-10 py-2 px-3 rounded-b-lg cursor-pointer self-start focus:outline-none border-none float-left"
                      }
                      onClick={e => goToLocation(e, currentLocation - 1)}
                      onKeyPress={() => noop}
                      role="link"
                      tabIndex="0"
                    >
                      prethodna
                    </button>
                    <button
                      className={
                        i === locations.length - 1
                          ? "hidden"
                          : "text-sm bg-opacity-50 md:hover:bg-opacity-100 bg-barocco-gold text-white mr-8 md:mr-10 py-2 px-3 rounded-b-lg cursor-pointer self-end focus:outline-none border-none float-right"
                      }
                      onClick={e => goToLocation(e, currentLocation + 1)}
                      onKeyPress={() => noop}
                      role="link"
                      tabIndex="0"
                    >
                      slijedeća
                    </button>
                  </div>
                </div>
              </ParallaxLayer>
            )
          }
        )}
      </Parallax>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAraRENSHPOtOQSuVgMjkrSENngDnrEh4I",
  // apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(LokacijaMap)
