import React from 'react'
import StyledComponents from './StyledComponents/StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'



export default function NavigationBar() {
  return (
    <nav>
        <div className='logo'>
            <FontAwesomeIcon icon={faUser} />
        </div>
        <ul className='nav-link'>
            <li><a href=''>Home</a></li>
            <li><a href=''>Contact</a></li>
            <li><a href=''>About me</a></li>
        </ul>
    </nav>
  )
}