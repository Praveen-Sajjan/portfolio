import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'gmail',
            'template_c9ha7dc',
            refForm.current,
            '_v8vsNzG4fA4tjrw2'
        )
        .then (
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send he message, please try again')
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
                    StrArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
            </form>
            <form>
                <ul>
                <li className="half">
                <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                <input type="E-mail" name="E-mail" placeholder="E-mail" required />
                </li>
                <li>
                <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                    <textarea placeholder="Message" name="message" required >
                    </textarea>
                </li>
                <li>
                    <input type="Submit" className="flat-button" value="SEND" />
                </li>
                </ul>
            </form>
          </div>
          </div>
            </div>
            <div className='info-map'>
                    Praveenkumar Sajjan,
                    <br />
                    India,
                    <br />
                    Karnataka <br />
                    Vijayapura <br />
                    <span> sajjanpraveen01@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[16.804982,75.734660]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[16.804982,75.734660]}>
                        <Popup> Praveen lives here, come over for a cup of coffee :) </Popup>
                    </Marker>
                    </MapContainer>
                </div>
        <Loader type="pacman" />
        </>
    )
    }

export default Contact