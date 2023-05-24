import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className='contact-us-container'>
        
        <div className='form-elements'>
        <h1>Contact Us</h1>
        <form>
        <input type='text' placeholder='First Name'/>
        <br/>
        <input type='text'placeholder='Last Name'/>
        <br/>
        <textarea type='text' placeholder='Write your message here'/>
        <br/>  
        <button className='submit-btn'>Submit</button> 
        </form>
        </div>  
    </div>
  )
}

export default ContactUs