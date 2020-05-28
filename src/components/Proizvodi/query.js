import { graphql, useStaticQuery } from "gatsby"

export const useProductsData = () => {
  const { allWordpressWpProizvod } = useStaticQuery(
    graphql`
      query {
        allWordpressWpProizvod {
          edges {
            node {
              title
              acf {
                opis_proizvoda
                pakovanje
                upotreba
                slika_proizvoda {
                  alt_text
                  media_details {
                    height
                    width
                  }
                  source_url
                }
              }
            }
          }
        }
      }
    `
  )
  return allWordpressWpProizvod
}
