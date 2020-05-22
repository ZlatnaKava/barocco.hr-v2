import { graphql, useStaticQuery } from "gatsby"

export const useProductsData = () => {
  const { allWordpressPage } = useStaticQuery(
    graphql`
      query {
        allWordpressPage(filter: { template: { eq: "Proizvod.php" } }) {
          edges {
            node {
              title
              acf {
                pakovanje
                upotreba
              }
              featured_media {
                alt_text
                caption
                title
                media_details {
                  height
                  width
                }
                source_url
              }
              content
            }
          }
        }
      }
    `
  )
  return allWordpressPage
}
