import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import './layout.css'
import MobileFooter from './MobileFooter'
require('typeface-montserrat')
require('typeface-montserrat-alternates')

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="w-full md:w-4/5 mx-auto p-3">{children}</div>
    <MobileFooter />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
