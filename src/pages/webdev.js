import React from 'react'
import FadingContent from '../components/FadingContent'

const WebDev = () => (
  <FadingContent className="text-4xl font-montAlt text-center my-4">
    <p>
      One of the things I do is coding, mostly with developing websites or apps.
      Need something done? Get in touch and lets work something out!
    </p>
    <p className="mt-6">
      Below is an idea of what I can do and an estimate of the costs for it. I'm
      absolutely willing to work something out for those in marginalized
      communities or going through difficult times.
    </p>
    <div className="flex flex-col m-8 text-2xl font-mont">
      <p className="border-b border-black p-8">
        <span className="text-3xl">$50</span> - Basic website, like this one
        you're on now! 5 or less pages, we'll work together on the design and
        look, some basic features/animation. Can also handle domain
        name/hosting.
      </p>
      <p className="border-b border-black p-8">
        <span className="text-3xl">$10</span> - Extra page cost on the website,
        things beyond 5 pages or slightly more advanced ones
      </p>
      <p className="border-b border-black p-8">
        <span className="text-3xl">$20</span> - Extra cost on pages or sites
        that require additional setup or more in depth features, i.e. content
        management, custom fancy animation, etc
      </p>
    </div>
  </FadingContent>
)

export default WebDev
