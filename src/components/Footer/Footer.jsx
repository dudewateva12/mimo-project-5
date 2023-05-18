import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <p>Made with ❤️ by mimo</p>
      <Link to={`/contactus`}>Contact Us</Link>
    </div>
  )
}

export default Footer
