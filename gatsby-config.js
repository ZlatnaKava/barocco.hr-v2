/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: process.env.GATSBY_WP_BASE_URL,
        protocol: process.env.GATSBY_WP_PROTOCOL,
        hostingWPCOM: false,
        useACF: true,
      },
    },
  ],
}