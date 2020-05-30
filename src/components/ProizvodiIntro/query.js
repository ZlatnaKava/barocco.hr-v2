import { graphql, useStaticQuery } from "gatsby"

export const useProductsIntro = () => {
  const { allWordpressPage } = useStaticQuery(
    graphql`
      query {
        allWordpressPage(filter: { slug: { eq: "proizvodi" } }) {
          edges {
            node {
              title
              title
              content
              slug
            }
          }
        }
      }
    `
  )
  return allWordpressPage
}
