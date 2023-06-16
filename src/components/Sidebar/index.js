import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faBriefcase,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import LogoJ from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo_sub_jeffery.png'
import './index.scss'

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link to="/my_website" className="logo">
        <img src={LogoJ} alt="logo" />
        <img src={LogoSubtitle} alt="slobodan" className="sub-logo" />
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/my_website">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="project-link"
          to="project"
        >
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/chang-jing-chai/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://github.com/jefferychai"
          >
            <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}
