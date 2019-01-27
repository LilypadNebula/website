import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import './layout.css'
import MobileFooter from '../components/MobileFooter'
require('typeface-montserrat')
require('typeface-montserrat-alternates')

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          defaultTitle={data.site.siteMetadata.title}
          titleTemplate={`%s - ${data.site.siteMetadata.title}`}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="w-full md:w-4/5 mx-auto p-3">{children}</div>
        <MobileFooter />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
