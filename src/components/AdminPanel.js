import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useAuth } from './AuthProvider'
import '../App.css'

const AdminPanel = () => {
    const {isAuthenticated, logout} =useAuth()
    const [hotels, setHotels]= useState([])
    const [formData, setFormData]= useState({
        image: '',
        location: '',
        hotelName: '',
        price:'',
    })
    const [statusMessage, setStatusMessage] = useState('');
    useEffect(()=>{
       const fetchHotels = async() =>{
        try {
            const res = await fetch('http://localhost:3000/hotels')
            if(!res.ok){
                return('error fetching')
            }
            const data = await res.json()
            setHotels(data)
        } catch (error) {
            
        }
       }
       fetchHotels()
    },[])
    if(!isAuthenticated){
        return <p>Access Denied</p>
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setStatusMessage('')
        if (!formData.image || !formData.location || !formData.hotelName || !formData.price) {
            setStatusMessage('All fields are required');
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/hotels', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to add hotel');
            }

            const data = await response.json();
            setHotels((prevHotels) => [...prevHotels, data]);
            setFormData({
                image: '',
                location: '',
                hotelName: '',
                price: '',
            });
            setStatusMessage('Hotel added successfully');
        } catch (error) {
            setStatusMessage(`Error: ${error.message}`);
        }
    
        

}
    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    const handleDelete =  async (id) =>{
        try {
            const  res  = await fetch(`http://localhost:3000/hotels/${id}`,{
                method: 'DELETE',
            })
            if(!res.ok){
                throw new Error('Failed to delete hotel');
            }
            setHotels((prevHotels)=>prevHotels.filter(hotel=> hotel.id !== id))
            setStatusMessage('Hotel Deleted succesfully')
        } catch (error) {
            
        }
    }

  return (

    <div>
        <NavBar/>
        <div className='admin-container'>
      <h1>Admin panel</h1>
      <button className='logoutbtn' onClick={logout}>logout</button>
    
    <form className='form' onSubmit={handleSubmit}>
        <div>
        <label>Image </label>
        <br></br>
        <input 
        type='text'
         name='image'
        placeholder='image'
        value={formData.image}
        onChange={handleChange}
        />
        </div>
        <div>
        <label>location </label>
        <br></br>
        <input 
        type='text'
        name='location'
        placeholder='location'
        value={formData.location}
        onChange={handleChange}
        />
        </div>
        <div>
        <label>Hotel Name</label>
        <br></br>
        <input 
        type='text'
        name='hotelName'
        placeholder='Name'
        value={formData.hotelName}
        onChange={handleChange}
        />
        </div>
        <div>
        <label>Price </label>
        <br></br>
        <input 
        type='text'
        name='price'
        placeholder='price'
        value={formData.price}
        onChange={handleChange}
        />
        </div>
       
    <input type='submit' value='Add'/>
    </form>
    {statusMessage && <p className='status-message'>{statusMessage}</p>}
    <h2>hotel list</h2>
    <ul className='list'>
                    {hotels.map((hotel, index) => (
                        <li className='lists' key={index}> <strong>{hotel.hotelName}</strong> - ${hotel.price}
                        <button className='delete-btn' onClick={()=>handleDelete(hotel.id)} >Delete</button>
                        </li>
                    ))}
                </ul>
  
   </div>
    </div>
  )
}

export default AdminPanel
