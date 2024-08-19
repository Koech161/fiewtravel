import React, { useEffect, useState } from 'react'
import assets from '../assets/divineksm.webp'
import merica from '../assets/merica.webp'
import newb from '../assets/newurban.webp'
import winstar from '../assets/winstar.webp'
import after40 from '../assets/after 40.webp'
import merril from '../assets/merril.webp'
import sarofa from '../assets/sarofa.webp'
import woodland from '../assets/sarova woodland.webp'
import NavBar from './NavBar'
import '../App.css'
import Footer from './Footer'
const Accomodation = () => {
    const [selectedRoom, setSelectedRoom] =useState('1')
    const [childOptions,setChildOptions]= useState([])
    const [numAdults, setNumAdults] =useState('1')
    const [hotels,setHotels]= useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/hotels')
        .then(res=>res.json())
        .then(data=>setHotels(data)
        )
    },[])
    const handleRoomChange =(e) => {
        const roomValue = e.target.value
        setSelectedRoom(roomValue)
    
    switch (roomValue) {
        case '1':
            setChildOptions([0,1,2])
            break;
        case'2':
        setChildOptions([0,1,2,3])
            break;
            case'3':
            setChildOptions([0,1,2,3,4])
                break; 
            case'4':
            setChildOptions([0,1,2,3,4,5])
                 break;       
            default:
      
            setChildOptions([])
    }
}
const handleAdultChange = (e) => {
    setNumAdults(e.target.value);
};
const handleSubmit = (e) => {
    e.preventDefault()
}
  return (
    <div>
        <NavBar />
        <h1 className='acc-title'>Hotel</h1>
        <div className='form'>
        <form onSubmit={handleSubmit}>
            <h3>Guest County</h3>
            <select >
            
                <option value='nairobi'>Nairobi</option>
                <option value='eldoret'>Eldoret</option>
                <option value='kisumu'>Kisumu</option>
                <option value='nakuru'>Nakuru</option>
                <option value='mombasa'>Mombasa</option>
            </select>
            <h3>Your Destination</h3>
            <input type='text'
            placeholder='Type your destination'/>
            <h3>Dates</h3>
            <div className='date-picker'>
           <input type='date'/>to<input type='date'/>
           </div>
           <div className='room-selection'>
           <i className='fas fa-user'></i>
           <label htmlFor="room-selection">Select Room:</label>
           <select 
           value={selectedRoom}
           onChange={handleRoomChange}>
                <option value='' disabled>Select Room</option>
                <option value='1'>1 Room</option>
                <option value='2'>2 Rooms</option>
                <option value='3'>3 Rooms</option>
                <option value='4'>4 Rooms</option>
           </select>
           <label htmlFor="adult-selection">Select Number of Adults:</label>
                        <select id="adult-selection" value={numAdults} onChange={handleAdultChange}>
                            <option value='1'>1 Adult</option>
                            <option value='2'>2 Adults</option>
                            <option value='3'>3 Adults</option>
                            <option value='4'>4 Adults</option>
                        </select>
           <label htmlFor="child-selection">Select Number of Children:</label>
           <select >
            {childOptions.map(option=>(
                <option key={option} value={option}>
                    {option} child{option > 1 ? 'ren': ''}
                </option>
            ))}
           </select>
           </div>
           <div >
           <input className='srch-btn' type='submit' value='Search'/>
           </div>
        </form>
        </div>
        
        <hr></hr>
      <div className='cards'>
        {hotels.map(hotel=>(
            <div key={hotel.id} className='card'>
            <img src={hotel.image} alt=''/>
            <h4 className='location'><i className='fas fa-location-dot'></i> {hotel.location}</h4>
            <h3>{hotel.hotelName}</h3>
            <p className='price'>{hotel.price}</p>
            <button className='book-btn'>Book Now</button>
        </div>
        ))}
        <div className='card'>
            <img src={assets} alt=''/>
            <h4 className='location'><i className='fas fa-location-dot'></i> Kisumu, Kenya</h4>
            <h3>Divine Homes Resort Kisumu</h3>
            <p className='price'>FROM KES 5,500</p>
            <button className='book-btn'>Book Now</button>
        </div>
        <div className='card'>
            <img src={newb} alt=''/>
            <h4 className='location'><i className='fas fa-location-dot'></i> Nairobi, Kenya</h4>
            <h3>New Urban Hotel</h3>
            <p className='price'>FROM KES 1,400</p>
            <button className='book-btn'>Book Now</button>
        </div>
        <div className='card'>
            <img src={merica} alt=''/>
            <h4 className='location'><i className='fas fa-location-dot'></i> Nakuru, Kenya</h4>
            <h3>Merica hotel</h3>
            <p className='price'>FROM KES 9,100</p>
            <button className='book-btn'>Book Now</button>
        </div>
        <div className='card'>
            <img src={winstar} alt=''/>
            <h4 className='location'><i className='fas fa-location-dot'></i> Eldoret, Kenya</h4>
            <h3>Winstar Hotel Limited</h3>
            <p className='price'>FROM KES 3,000</p>
            <button className='book-btn'>Book Now</button>
        </div>
        <div className='card'>
            <img src={after40} alt=''/>
            <h4 className='location'><i className='fas fa-location-dot'></i> Nairobi, Kenya</h4>
            <h3>After 40 Hotel</h3>
            <p className='price'>FROM KES 6,000</p>
            <button className='book-btn'>Book Now</button>
        </div>
        <div className='card'>
            <img src={merril} alt=''/>
            <h4 className='location'><i className='fas fa-location-dot'></i> Eldoret, Kenya</h4>
            <h3>Merril Hotel</h3>
            <p className='price'>FROM KES 3,000</p>
            <button className='book-btn'>Book Now</button>
        </div>
         <div className='card'>
            <img src={sarofa} alt=''/>
            <h4 className='location'><i className='fas fa-location-dot'></i> Nairobi, Kenya</h4>
            <h3>Sarova Panafric</h3>
            <p className='price'>FROM KES 21,000</p>
            <button className='book-btn'>Book Now</button>
        </div>
        <div className='card'>
            <img src={woodland} alt=''/>
            <h4 className='location'><i className='fas fa-location-dot'></i> Nakuru, Kenya</h4>
            <h3>Sarova Woodlands Hotel & Spa</h3>
            <p className='price'>FROM KES 14,500</p>
            <button className='book-btn'>Book Now</button>
        </div>
      </div>
      <hr></hr>
      <Footer/>
    </div>
  )
}

export default Accomodation
