import { NavLink, Link } from "react-router-dom";
import './index.scss'
import LogoP from '../../assets/images/153.-Perspective-Letter-P-Concept-Logo.jpeg'
import LogoSubtitle from '../../assets/images/Screenshot-_155_-removebg-preview.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faCodepen, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoP} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="Praveen"/>
        </Link>
        <nav>
            <NavLink exact="true" className="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"  />
            </NavLink>

            <NavLink exact="true" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"  />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" >
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"  />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"  />
            </NavLink>

        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com" >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"  />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com" >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"  />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com" >
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"  />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com" >
                    <FontAwesomeIcon icon={faCodepen} color="#4d4d4e"  />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar