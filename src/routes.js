import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Accomodation from "./components/Accomodation";
import AdminPanel from "./components/AdminPanel";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

const router= createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/accommodations',
        element: <Accomodation />,
    },
    {
        path:'/admin',
        element:( <PrivateRoute element={<AdminPanel/>}/>),
    },
    {
        path:'/login',
        element: <Login />,
    }
])
export default router