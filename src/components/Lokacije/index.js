import React from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import { useLocationsData } from "./query"
// import { getMapSrc } from "../../utils"

const Lokacija = props => {
  const { edges: lokacije } = useLocationsData()

  const onMarkerClick = (lat, lng, map) => {
    console.log(lat, lng, map)
  }

  const mapStyle = [
    {
      featureType: "landscape.man_made",
      stylers: [{ color: "red" }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "yellow" }],
    },
  ]

  const _mapLoaded = (mapProps, map) => {
    map.setOptions({
      styles: mapStyle,
    })
  }

  return (
    <div className="section">
      <h1 className="text-2xl pt-10 pb-4">Lokacije</h1>
      {lokacije.map(
        ({
          node: {
            title,
            content,
            acf: {
              telefon,
              google_map: { address, lat, lng, place_id },
            },
          },
        }) => {
          return (
            <div className="item" key={place_id}>
              <h2>{title}</h2>
              {telefon && <div> telefon: {telefon}</div>}
              {address && <div>adresa: {address}</div>}
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <div className="text-sm">
                lat: {lat} lng: {lng}
              </div>
              <div className="relative my-5" style={{ height: "300px" }}>
                <Map
                  initialCenter={{
                    lat,
                    lng,
                  }}
                  zoom={18}
                  zoomControl={true}
                  mapTypeControl={false}
                  scaleControl={false}
                  streetViewControl={false}
                  rotateControl={false}
                  fullscreenControl={false}
                  google={props.google}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "300px",
                  }}
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
            </div>
          )
        }
      )}
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(Lokacija)
