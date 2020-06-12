import React, { useEffect } from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import { useLocationsData } from "./query"
import SectionNavBtns from "../SectionNavBtns"

const LokacijaMap = props => {
  let parallaxLocations

  useEffect(() => {
    parallaxLocations.scrollTo(props.currentLocation)
  }, [parallaxLocations, props.currentLocation])

  const { edges: locations } = useLocationsData()

  const onMarkerClick = (lat, lng, map) => {
    // console.log(lat, lng, map)
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
        pages={locations.length}
        scrolling={false}
        speed={1}
        horizontal
        ref={ref => (parallaxLocations = ref)}
        className="mx-0"
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
                factor={1}
                offset={i}
                speed={1}
                key={i}
                i={i}
                className="flex justify-center mx-auto md:mx-0"
              >
                <div className="relative self-center min-w-full sm:mx-24 sm:min-w-3/4 sm:max-w-6xl">
                  <div className="inline-block ml-2 md:ml-5">
                    <h2 className="ml-10 text-base md:ml-5 md:text-xl">
                      {title}
                    </h2>
                  </div>
                  <div className="p-3 mx-6 md:p-4 md:mx-5 card">
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

                    {/* <div className="w-full overflow-hidden">
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
                    </div> */}
                    <div className="pt-5 text-center">
                      {address && <div className="font-bold">{address}</div>}
                      {telefon && (
                        <div>
                          tel: <a href={`tel:${telefon}`}>{telefon}</a>
                        </div>
                      )}
                      <div dangerouslySetInnerHTML={{ __html: opis }} />
                    </div>
                  </div>
                  <SectionNavBtns
                    goTo={props.goToLocation}
                    current={props.currentLocation}
                    i={i}
                    totalItems={locations.length}
                  />
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
