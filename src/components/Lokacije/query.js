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
                adresa
                google_map
                telefon
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
