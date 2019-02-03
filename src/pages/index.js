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
      <p>
        My name is Lily. I'm a trans girl that's just trying to get by and make
        some cool things. Here you can take a look at some of those things!
      </p>
    </div>
  </FadingContent>
)

export default IndexPage
