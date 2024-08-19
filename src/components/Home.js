import React from 'react'
import assets from '../assets/lakeElementaita.webp'
import NavBar from './NavBar'
import pic from '../assets/pridelnn.webp'
import '../App.css'
import Footer from './Footer'
const Home = () => {
    return (
        <div className='home-container'>
            <NavBar/>
            <h1 className='home-title'>Fiew Travel</h1>
            <p className='des'>Your highly customized holidays have never been easier to curate and enjoy.
                 Fiewtravel has exclusive offers and new holiday inspirations, which we will send directly to you via email.
                  Sign up with us to experience unique destinations and accommodation options, and mind-blowing fun with our
                   things to do. Worry no more about your next flight, airport transfers or car hire. We are here to ensure that 
                   your experience creates lasting memories shared with others through your lenses.</p>
                    <div className='home-card'>
                    <img src={assets}  alt=''/>
                    <img src={pic}  alt=''/>
                    </div>
                    <hr></hr>
                   
                  <Footer/> 
        </div>
    )
}

export default Home
