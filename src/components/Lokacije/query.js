import { graphql, useStaticQuery } from "gatsby"

export const useLocationsData = () => {
  const { allWordpressWpLokacija } = useStaticQuery(
    graphql`
      query {
        allWordpressWpLokacija(sort: { fields: acf___redoslijed }) {
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
                slika_1 {
                  description
                  source_url
                  mime_type
                  date
                }
                slika_2 {
                  description
                  source_url
                  mime_type
                  date
                }
                slika_3 {
                  description
                  source_url
                  mime_type
                  date
                }
                slika_4 {
                  description
                  source_url
                  mime_type
                  date
                }
                slika_5 {
                  description
                  source_url
                  mime_type
                  date
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
