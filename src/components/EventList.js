import React from 'react'
import posed from 'react-pose'

const Card = posed.div({
  firstPosition: {
    opacity: 1,
    rotateY: '0deg',
    transition: {
      opacity: { delay: 100, duration: 50 },
      rotateY: { duration: 500, type: 'spring' },
    },
  },
  secondPosition: {
    opacity: 0,
    rotateY: '180deg',
    transition: {
      opacity: { delay: 100, duration: 50 },
      rotateY: { duration: 500, type: 'spring' },
    },
  },
})

const EventList = props => (
  <Card
    pose={props.show}
    className="absolute shadow-md bg-white rounded-lg flex flex-col pb-8 max-w-lg"
  >
    <p className="text-2xl p-4 font-montAlt text-center">{props.title}</p>
    {props.events.map(e => (
      <p
        key={e.name}
        className="text-2xl font-mont text-center px-32 py-2 border-t border-grey-light w-full"
      >
        {`${e.date || e.weekday} - ${e.time} - ${e.name} - on `}{' '}
        <a href={e.link.url}>{e.link.text}</a>
      </p>
    ))}
  </Card>
)

export default EventList
