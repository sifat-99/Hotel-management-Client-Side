import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import { Spinner } from "@material-tailwind/react";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    const location = useLocation();
if(loading){
    return (
    <>
    <div className="flex justify-center items-center text-9xl mt-20"><span className="loading loading-bars loading-lg"></span></div>
    <h2 className="flex justify-center items-center text-9xl mt-20">Please Wait.....</h2>
    <Spinner className="h-16 w-16 text-gray-900/50 mt-20" />;
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