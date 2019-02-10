import React from 'react'
import FadingContent from '../components/FadingContent'
import Layout from '../components/Layout'

const ContactPage = () => {
  return (
    <Layout>
      <FadingContent className="flex items-center flex-col font-mont text-2xl p-16">
        <form
          name="contactForm"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="noInput"
        >
          <p className="hidden">
            <input name="noInput" />
            <input type="hidden" name="form-name" value="contactForm" />
          </p>
          <p>
            <label htmlFor="nameInput" className="flex flex-col items-center">
              What should I call you?
              <input
                required
                type="text"
                id="nameInput"
                name="Name"
                className="p-2 border border-black rounded m-2"
              />
            </label>
          </p>
          <p>
            <label htmlFor="emailInput" className="flex flex-col items-center">
              What email should I respond to?
              <input
                required
                type="email"
                id="emailInput"
                name="Email"
                className="p-2 border border-black rounded m-2"
              />
            </label>
          </p>
          <p>
            <label htmlFor="message" className="flex flex-col items-center">
              What's the message?
              <textarea
                required
                rows="4"
                cols="20"
                id="message"
                name="Message"
                className="p-2 border border-black rounded m-2"
              />
            </label>
          </p>
          <div data-netlify-recaptcha="true" />
          <p className="text-center">
            <button
              type="submit"
              className="p-4 bg-main-light text-center rounded text-white"
            >
              Submit
            </button>
          </p>
        </form>
      </FadingContent>
    </Layout>
  )
}

export default ContactPage
