import React from 'react'
import Chibi from '../components/chibi'
import FadingContent from '../components/FadingContent'

const IndexPage = () => (
  <FadingContent className="flex flex-col-reverse items-center md:flex-row">
    <div className="w-full md:w-1/3">
      <Chibi />
    </div>
    <div className="font-mont text-2xl md:text-4xl w-full md:w-2/3 text-center">
      <h1 className="font-montAlt">Welcome!</h1>
      <p>My name is Lily. Here you can check out some of the things I do</p>
    </div>
  </FadingContent>
)

export default IndexPage
