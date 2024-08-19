import React from 'react'
import '../App.css'
const Footer = () => {
  return (
    <div>
    <h2 className='footer-title'>Fiew Travel</h2>
    <div className='contact-section'>
      <h3 className='contact-title'>Contact Us</h3>
      <div className='social-icons'>
        <a href='https://www.facebook.com/' aria-label='Facebook' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='https://github.com/' aria-label='GitHub' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-github'></i>
        </a>
        <a href='https://www.instagram.com/' aria-label='Instagram' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-instagram'></i>
        </a>
      </div>
    </div>
    <p className='copy'> Copyright 2024 &copy; Fiewtravel. All rights reserved.</p>
    </div>
  )
}

export default Footer
