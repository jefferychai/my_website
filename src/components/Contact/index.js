import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.scss'

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const str = 'Contact me'
  const strArray = [...str]
  const formRef = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_17ils48',
        'template_x3nqngg',
        formRef.current,
        'TPd2LDZQqXBxPDJ5b'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, please try again!')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              idx={15}
            />
          </h1>

          <p>
            I am interested in any kind opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>

          <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>

        <div className="info-map">
          Jeffery Chai,
          <br />
          Malaysia,
          <br />
          Jalan Selesa 2, Happy Garden
          <br />
          58200, Kuala Lumpur. <br />
          <span>jing321997@gmail.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer
            center={[3.0836888275126095, 101.68451287205771]}
            zoom={13}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[3.0836888275126095, 101.68451287205771]}>
              <Popup>
                Jeffery lives here 🏠, <br /> come over for a cup of coffee ☕!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}
