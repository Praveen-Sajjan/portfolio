import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = []
    const jobArray = []

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={letterClass}>i</span>
                    <span className={letterClass}>i</span>
                    <span className={letterClass}>,</span>
                    <br  />
                    <span className={letterClass}>I</span>
                    <span className={letterClass}>'</span>
                    <span className={letterClass}>m</span>
                    <span className={letterClass}> </span>
                    <span className={letterClass}>P</span>
                    <span className={letterClass}>r</span>
                    <span className={letterClass}>a</span>
                    <span className={letterClass}>v</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>n</span>
                    <br  />
                    <span className={letterClass}>F</span>
                    <span className={letterClass}>r</span>
                    <span className={letterClass}>o</span>
                    <span className={letterClass}>n</span>
                    <span className={letterClass}>t</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>n</span>
                    <span className={letterClass}>d</span>
                    <span className={letterClass}> </span>
                    <span className={letterClass}>W</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>b</span>
                    <span className={letterClass}> </span>
                    <span className={letterClass}>D</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>v</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>l</span>
                    <span className={letterClass}>o</span>
                    <span className={letterClass}>p</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>r</span>
                <AnimatedLetters 
                letterClass={letterClass}
                StrArray={nameArray}
                idx={16}  
                />
                <br  />
                <AnimatedLetters 
                letterClass={letterClass}
                StrArray={jobArray}
                idx={22}  
                />
                </h1>
                <Link to="/contact" className='flat-button'>
                    CONTACT ME
                    </Link>
                    </div>
                    <Logo  />
                    </div>
                    <Loader type="pacman"  />
                    </>
    )
}

export default Home 