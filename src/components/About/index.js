import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Geek from '../../assets/images/wfh.webp'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    StrArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <div className='image-container'>
                    <img className='geek-image' src={Geek} alt="person" />
                </div>
                <p>
                    I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                    </p>
                    <p>
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                        </p>
                        <p>
                            If I need to define myself in one sentence that would be a sports fanatic,
                            passionate DJ, pet lover, and tech-obsessed !!!
                            </p>
                            </div>
                            </div>
                            <Loader type="pacman" />
                            </>
                            ) 
                        }
                        export default About 