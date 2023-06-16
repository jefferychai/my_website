import React from 'react'
import vanlife from '../../../assets/images/vanlife project.JPG'
import quizzical from '../../../assets/images/quizzical project.JPG'
import notesApp from '../../../assets/images/notes app project.JPG'
import './index.scss'

export default function Gallery() {
  const data = [
    {
      id: 1,
      imgSrc: vanlife,
      webUrl: 'https://jefferychai.github.io/vanlife_react_router/',
      codeUrl: 'https://github.com/jefferychai/vanlife_react_router',
    },
    {
      id: 2,
      imgSrc: quizzical,
      webUrl: 'https://jefferychai.github.io/quizzical_react/',
      codeUrl: 'https://github.com/jefferychai/quizzical_react',
    },
    {
      id: 3,
      imgSrc: notesApp,
      webUrl: 'https://jefferychai.github.io/notes_app_react/',
      codeUrl: 'https://github.com/jefferychai/notes_app_react',
    },
  ]

  const galleryElements = data.map((item, index) => {
    return (
      <div className="pics-container" key={index}>
        <img src={item.imgSrc} alt={`project_${index}`} />
        <div className="middle">
          <a href={item.webUrl} target="_blank" rel="noopener noreferrer">
            <button>Website</button>
          </a>
          <a href={item.codeUrl} target="_blank" rel="noopener noreferrer">
            <button>Code</button>
          </a>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="gallery">{galleryElements}</div>
    </>
  )
}
