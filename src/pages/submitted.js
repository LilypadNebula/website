import React from 'react'
import { Link } from 'gatsby'
import FadingContent from '../components/FadingContent'

const SubmittedPage = () => {
  return (
    <FadingContent className="flex flex-col items-center p-32">
      <p className="font-montAlt text-3xl">
        Thanks for your message! I'll try to get in touch as soon as I can
      </p>
      <Link to="/" className="font-mont text-2xl">
        Head back home
      </Link>
    </FadingContent>
  )
}

export default SubmittedPage
