import { graphql, useStaticQuery } from "gatsby"

export const useLocationsData = () => {
  const { allWordpressWpLokacija } = useStaticQuery(
    graphql`
      query {
        allWordpressWpLokacija {
          edges {
            node {
              id
              acf {
                opis
                telefon
                google_map {
                  address
                  lat
                  lng
                  zoom
                  place_id
                }
              }
              slug
              title
            }
          }
        }
      }
    `
  )
  return allWordpressWpLokacija
}
