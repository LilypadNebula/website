import React from 'react'
import FadingContent from '../components/FadingContent'
import Layout from '../components/Layout'

const Games = () => {
  return (
    <Layout>
      <FadingContent className="text-center text-3xl font-montAlt">
        <p>
          I do game stuff! Playing them and making them. The things I'm making
          are currently in development, but keep an eye on the stream and you
          might catch me working on them, here's some info about them:
        </p>
        <div className="flex flex-col items-center my-6 font-mont">
          <p className="border-b border-black p-8">
            The Split - Tentative title for a Blades in the Dark hack I'm making
            inspired by Persona, Flip Flappers, Matrix, and other games with
            multiple worlds. It's meant to be hopeful and cool, about the
            players stopping baddies from being baddies
          </p>
          <p className="border-b border-black p-8">
            A Day's Work - Tentative title for a game about paranormal agents
            trying to keep their city from falling apart while also living their
            regular lives. Inspired by modern fantasy media and procedural
            shows.
          </p>
          <p className="border-b border-black p-8">
            Personal Exploits - A hack of Firebrands aimed to be about cyberpunk
            hackers trying to take down corps and deal with their relationships
            through minigames, spending their Coin and Rep for what they want
            and what they need
          </p>
        </div>
      </FadingContent>
    </Layout>
  )
}

export default Games
