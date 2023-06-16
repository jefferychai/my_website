import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const str = 'About me'
  const strArray = [...str]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              idx={15}
            />
          </h1>
          <p>
            I am a self-taught front-end developer 🤓 seeking a role in an
            established IT business with opportunities to prove 💪 my skills in
            problem solving and project management.
          </p>
          <p align="LEFT">
            I love ❤️ building the aesthetics of web pages and looking for a
            better and cleaner code.
          </p>
          <p>
            If I need to define myself in one sentence which would be an
            ambitious 🔥 and curious person, passionate about 3D printing and
            obsessed with technology.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#61DBFB" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#DE4B25" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#258CC7" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#E8D44C" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faBootstrap} color="#7912F2" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#1A1E22" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}
