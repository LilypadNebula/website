import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <p className="text-2xl font-montAlt">
      You've found a page that doesn't exist, want to go back{' '}
      <Link to="/">home?</Link>
    </p>
  </Layout>
)

export default NotFoundPage
