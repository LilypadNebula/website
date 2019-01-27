import React, { useState } from 'react'
import posed from 'react-pose'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faTwitter,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Flipper = posed.div({
  up: { rotate: 0 },
  down: { rotate: 180 },
})

const Slider = posed.div({
  up: { height: 'auto' },
  down: { height: 60 },
})

const Mover = posed.p({
  up: { opacity: 1 },
  down: { opacity: 0 },
})

const MobileFooter = () => {
  const [flip, setFlip] = useState(false)
  return (
    <Slider
      pose={flip ? 'up' : 'down'}
      className="block md:hidden fixed pin-b w-full bg-main p-4 text-white font-montAlt rounded-t"
    >
      <div className=" flex items-center justify-around">
        <a href="https://github.com/lilypadnebula">
          <FontAwesomeIcon icon={faGithub} color="white" size="2x" />
        </a>
        <a href="https://twitter.com/lilypadnebula">
          <FontAwesomeIcon icon={faTwitter} color="white" size="2x" />
        </a>
        <a href="https://twitch.tv/lilypadnebula">
          <FontAwesomeIcon icon={faTwitch} color="white" size="2x" />
        </a>
        <button className="focus:outline-none">
          <FontAwesomeIcon icon={faEnvelope} color="white" size="2x" />
        </button>
        <Flipper onClick={() => setFlip(!flip)}>
          <FontAwesomeIcon icon={faChevronCircleUp} size="2x" />
        </Flipper>
      </div>
      <div className="flex flex-col mt-4">
        <Link to="/schedule" className="text-white no-underline text-2xl my-1">
          <Mover>Schedule</Mover>
        </Link>
        <Link to="/webdev" className="text-white no-underline text-2xl my-1">
          <Mover>Web Dev</Mover>
        </Link>
        <Link to="/games" className="text-white no-underline text-2xl my-1">
          <Mover>Games</Mover>
        </Link>
      </div>
    </Slider>
  )
}

export default MobileFooter
