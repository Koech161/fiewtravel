import React, { useState } from 'react'
import { useAuth } from './AuthProvider'
import '../App.css'
import NavBar from './NavBar'
const Login = () => {
    const {login} = useAuth()
    const [username, setUserName]= useState('')
    const [password, setPassword] =useState('')
    const [error, setError] = useState(null)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setError(null)
        if(!username || !password){
            setError('Both fields are required')
            return
        }
        if(username === 'admin1' && password === 'abel'){
            login('mockToken')
            console.log('login succesfull');
            
        }else {
            setError('Invalid username or password')
        }
    }
  return (
    <div className='login-container'>
        <NavBar />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className='error-message'>{error}</p>}
        <div  className='User-input'>
            <label>Username</label>
            <br></br>
            <input
            type='text' 
            value={username}
            onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div  className='pass-input'>
            <label>Password</label>
            <br></br>
            <input
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type='submit' disabled={!username || !password}>Login</button>
      </form>
    </div>
  )
}

export default Login
