import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
const NavBar = () => {
  return (
    <div className='navbar'>
      <nav className='nav'>
        <div className='nav-item'>
        <Link  to='/'>
         <i className='fas fa-home'></i>Home</Link> 
        </div>
        <div className='nav-item'>
        <Link to='/accommodations'>
        <i className='fas fa-bed'></i>Accomodation</Link>
        </div>
        <div className='nav-item'>
        <Link to='/admin'>
        <i className='fas fa-user-cog'></i>AdminPanel</Link>
        </div>
        
      </nav>
    </div>
  )
}

export default NavBar
