import { graphql, useStaticQuery } from "gatsby"

export const useLocationsData = () => {
  const { allWordpressPage } = useStaticQuery(
    graphql`
      query {
        allWordpressPage(filter: { template: { eq: "Lokacija.php" } }) {
          edges {
            node {
              id
              acf {
                telefon
                google_map {
                  address
                  lat
                  lng
                  zoom
                  name
                  place_id
                }
              }
              slug
              title
              content
            }
          }
        }
      }
    `
  )
  return allWordpressPage
}
