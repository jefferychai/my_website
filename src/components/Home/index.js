import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { Player } from '@lottiefiles/react-lottie-player'
import LogoTitle from '../../assets/images/logo-j.png'
import './index.scss'

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const name = 'effery,'
  const nameArray = [...name]
  const job = 'web developer.'
  const jobArray = [...job]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="J_logo_img" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / Ex - Mechanical Design Engineer</h2>
          <Link to="contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <Player
          className="animation"
          autoplay
          loop
          hover={true}
          src="https://assets6.lottiefiles.com/packages/lf20_cmaqoazd.json"
          style={{ height: '600px', width: '600px' }}
        ></Player>
      </div>

      <Loader type="pacman" />
    </>
  )
}
