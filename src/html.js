import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html
      {...props.htmlAttributes}
      className="fixed overflow-hidden"
      style={{ height: "-webkit-fill-available" }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body
        {...props.bodyAttributes}
        className="fixed overflow-hidden bg-barocco-yellow"
        style={{
          height: "100vh",
          height: 'calc(var(--vh, 1vh) * 100)';
          minHeight: "-webkit-fill-available",
        }}
      >
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
          className="w-screen overflow-y-scroll scrolling-touch"
          style={{
            minHeight: "-webkit-fill-available",
          }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
