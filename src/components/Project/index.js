import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Gallery from './Gallery'
import './index.scss'

export default function Project() {
  const [letterClass, setLetterClass] = useState('text-animate')

  const str = 'My Projects'
  const strArray = [...str]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              idx={15}
            />
          </h1>
          <Gallery />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}
