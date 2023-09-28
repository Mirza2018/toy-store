import  {  useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loadding } = useContext(AuthContext)
    const location = useLocation()

    if (loadding) {
        return <center><span className="loading loading-spinner text-secondary"></span></center> 
    }
    if (user) {
        return children
    }

    return <Navigate state={{ from: location }} to='/login'></Navigate>
};

export default PrivetRoute;