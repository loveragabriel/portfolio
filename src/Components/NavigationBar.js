import React from 'react'
import StyledComponents from './StyledComponents/StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'



export default function NavigationBar() {
  return (
    <nav>
        <div className='logo'>
            <a href='https://www.linkedin.com/in/loveragabriel/' alt="LinkedIn profile" target="_blank"><FontAwesomeIcon icon={faUser} /></a>
        </div>
        <ul className='nav-link'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about-me'>Contact</a></li>
            <li><a href='#about-me'>About me</a></li>
        </ul>
    </nav>
  )
}