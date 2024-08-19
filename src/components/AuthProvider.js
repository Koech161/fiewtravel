import React, { createContext, useContext, useEffect, useState } from 'react'
const AuthContext = createContext()
export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {
        // Check if token exists in localStorage on initial load
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);
    const login = (token) =>{
        console.log('Login function called with token:', token);
        setIsAuthenticated(true)
        localStorage.setItem('token',token)
    }
    const logout =()=>{
        setIsAuthenticated(false)
        localStorage.removeItem('token')
    }
  return (
   <AuthContext.Provider value={{isAuthenticated, login, logout}}>
    {children}
   </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)

