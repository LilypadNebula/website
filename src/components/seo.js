import React from 'react'
import {Helmet} from 'react-helmet'

const SEO = props => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    title={props.title}
    titleTemplate={`%s | Lilypad Nebula`}
    meta={[
      {
        name: `description`,
        content: props.description,
      },
      {
        property: `og:title`,
        content: props.title,
      },
      {
        property: `og:description`,
        content: props.description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        property: 'twitter:image',
        content: '/chibi_no_bg.png',
      },
      {
        property: 'og:image',
        content: '/chibi_no_bg.png',
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: '@lilypadnebula',
      },
      {
        name: `twitter:title`,
        content: props.title,
      },
      {
        name: `twitter:description`,
        content: props.description,
      },
    ]}
  />
)

export default SEO
