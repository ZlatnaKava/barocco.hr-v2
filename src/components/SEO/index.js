import React from "react"
import Helmet from "react-helmet"
const SEO = ({
  lang = "en",
  title = "Barocco Caffe",
  description = "Proizvodnja, trgovina i degustacija kave. Barocco caffe proizvodi dobiveni su pažljivim stapanjem nekoliko vrsta zrna kave, koja daju iznenađujuće velik raspon okusa i aroma, kontroliranih od stručnjaka, kako bi svi proizvodi odgovarali visokim standardima!",
  featuredImage = "https://zlatna-kava.hr/cms/wp-content/uploads/2020/06/BaroccoCaffeFeatured.png",
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:image`,
          content: featuredImage,
        },
        {
          property: `og:type`,
          content: "website",
        },
        {
          property: `og:url`,
          content: "http://barocco-v2.netlify.app/",
        },
        {
          name: `twitter:card`,
          content: featuredImage,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    >
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          url: "https://www.barocco.hr",
          name: "Zlatna Kava - Barocco Caffee",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+383(51)275-824",
            contactType: "Barocco Srediste Matulji",
          },
        }`}
      </script>
    </Helmet>
  )
}

export default SEO
