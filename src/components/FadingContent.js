import React from 'react'
import posed from 'react-pose'

const Fader = posed.div({
  show: { opacity: 1, y: 0, transition: { duration: 500 } },
  hide: { opacity: 0, y: 20, transition: { duration: 500 } },
})

const FadingContent = props => (
  <Fader pose="show" initialPose="hide" {...props}>
    {props.children}
  </Fader>
)

export default FadingContent
