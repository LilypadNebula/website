import React from 'react'
import { Link } from 'gatsby'
import Banner from './banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Header = ({ siteTitle }) => (
  <div className="bg-myGray-dark shadow-md">
    <div className="w-4/5 mx-auto flex items-center">
      <div className="mr-auto w-full md:w-1/3">
        <Link to="/">
          <Banner />
        </Link>
      </div>
      <div className="hidden ml-auto md:flex justify-around items-center font-montAlt">
        <div className="mr-6 font-bold">
          <Link to="/schedule" className="text-main no-underline mx-3 text-3xl">
            Schedule
          </Link>
          <Link to="/webdev" className="text-main no-underline mx-3 text-3xl">
            Web Dev
          </Link>
          <Link to="/games" className="text-main no-underline mx-3 text-3xl">
            Games
          </Link>
        </div>
        <div>
          <a href="https://github.com/lilypadnebula">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-main mx-2"
              size="2x"
            />
          </a>
          <a href="https://twitter.com/lilypadnebula">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-main mx-2"
              size="2x"
            />
          </a>
          <a href="https://twitch.tv/lilypadnebula">
            <FontAwesomeIcon
              icon={faTwitch}
              className="text-main mx-2"
              size="2x"
            />
          </a>
          <button className="focus:outline-none">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-main mx-2"
              size="2x"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Header
