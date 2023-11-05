import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    const location = useLocation();
if(loading){
    return (
    <>
    <div className="flex justify-center items-center text-9xl mt-32"><span className="loading loading-bars loading-lg"></span></div>
    <h2 className="flex justify-center items-center text-9xl mt-32">Please Wait.....</h2>
    </>

    ) 
}

    if(user){
        return children;
    }
    else
    {
       return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PrivateRoute;