import React from 'react'
import FadingContent from '../components/FadingContent'
// import EventList from '../components/EventList'
import EventList from '../components/OtherEventList'
import Layout from '../components/Layout'

class Schedule extends React.Component {
  render() {
    return (
      <Layout>
        <FadingContent className="flex flex-col items-center text-center">
          <p className="text-2xl font-montAlt">
            Below are the things that should occur weekly barring any unforeseen
            stuff. I'll update this when something with a schedule happens,
            otherwise Twitter is where I'll announce anything that randomly
            comes up
          </p>
          <EventList
            title="Recurring"
            events={[
              {
                weekday: 'Sunday',
                time: '1 PM EST',
                name: 'Winds of Chaos, A Warhammer Fantasy 4e Game',
                link: {
                  url: 'https://twitch.tv/welcomepartyrpg',
                  text: 'Welcome To The Party Twitch',
                },
              },
              {
                weekday: 'Wednesday',
                time: '8 PM EST',
                name: 'Fair Wanderings, A D&D 5e game',
                link: {
                  url: 'https://twitch.tv/lilypadnebula',
                  text: 'My Twitch',
                },
              },
            ]}
          />
        </FadingContent>
      </Layout>
    )
  }
}

export default Schedule
