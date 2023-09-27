import  {  useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <h1>Lodding</h1>
    }
    if (user) {
        return children
    }

    return <Navigate state={{ from: location }} to='/login'></Navigate>
};

export default PrivetRoute;