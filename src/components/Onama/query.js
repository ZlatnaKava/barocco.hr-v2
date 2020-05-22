import { graphql, useStaticQuery } from "gatsby"

export const useOnamaData = () => {
  const { allWordpressPage } = useStaticQuery(
    graphql`
      query {
        allWordpressPage(filter: { slug: { eq: "o-nama" } }) {
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
