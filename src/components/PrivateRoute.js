// import React from 'react'
// import { useAuth } from './AuthProvider'
// import { Navigate } from 'react-router-dom'

// const PrivateRoute = ({ element }) => {
//     const {isAuthenticated} = useAuth()
//     console.log('PrivateRoute isAuthenticated:', isAuthenticated);
    
//    return  isAuthenticated  ? element  : <Navigate to='/login'/>
    
  
// }

// export default PrivateRoute
import React from 'react';
import { useAuth } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    console.log('PrivateRoute isAuthenticated:', isAuthenticated);

    return isAuthenticated ? React.cloneElement(element) : <Navigate to='/login' />;
};

export default PrivateRoute;