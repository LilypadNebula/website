import React from 'react'

const OtherEventList = props => (
  <div className="flex flex-col items-center text-2xl max-w-lg my-4">
    <p className="p-8 font-montAlt">{props.title}</p>
    {props.events.map(e => (
      <div
        className="text-2xl font-mont text-center p-2 border-t border-grey-darker"
        key={e.name}
      >
        <p>{`${e.date || e.weekday} - ${e.time} - ${e.name}`}</p>
        <p>
          <a href={e.link.url}>{e.link.text}</a>
        </p>
      </div>
    ))}
  </div>
)

export default OtherEventList
