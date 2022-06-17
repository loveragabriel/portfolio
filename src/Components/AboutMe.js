import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faGuitar, faMailBulk, faPhone, faCodeCommit } from '@fortawesome/free-solid-svg-icons'

<FontAwesomeIcon icon="fa-brands " />

export default function AboutMe
() {
  return (
    <>
    <h2 id="about-me">About me</h2>
    <div className='About-container'>
        <div className='details'>
            <img src="/home/loveragabriel/portfolio/src/Media/gabriel.jpg"/>
            <p>Web Design, creating websites for professionals</p>
            <h4>Portfolio</h4>
            <p>I have been learnig about website, the design, functionallity and interaction.The last month a have gain knowled on HTLM, CSS, JavaScript and React<br/>
            Furthermore, I have background experience working with following logistics processes managing the different tasks in order to achieve the object expected. <br/>
            Strong communication and interpersonal skills, that make me feel comfortable working in a team.
            </p>
        </div>
        <div className='Contact' id="contact">
            <h3>Gabriel Lovera</h3>
            <ul className='contact-list'>
                <li>
                    <a href='https://www.linkedin.com/in/loveragabriel/' alt="LinkedIn profile" target="_blank">
                    <FontAwesomeIcon icon={faUser}/></a>
                   
                    <p>LinkedIn</p>
                </li>
                <li>
                    <a href='https://github.com/loveragabriel' alt="LinkedIn profile" target="_blank"><FontAwesomeIcon icon={faCodeCommit} /></a>
                    <p>GitHub</p>
                </li>
                <li>
                    <a href='mailto:loveragabriel20@gmail.com?subject=Portfolio&body=Hola%20Gabriel!%0D%0A%0D%0AEstaba%20revisando%20tu%20perfil%20y%20me%20encontr%C3%A9%20con%20tu%20portfolio.%0D%0ASaludos.'  alt="LinkedIn profile" target="_blank"><FontAwesomeIcon icon={faMailBulk} /></a>
                    <p>loveragabriel20@gmail.com</p>
                </li>
                <li>
                    <a href='https://web.whatsapp.com/' alt="LinkedIn profile" target="_blank"><FontAwesomeIcon icon={faPhone} /></a>
                    <p>+54 0911 2792 0492</p>
                </li>
            </ul>
        </div>

    </div>
    </>
  )
}
