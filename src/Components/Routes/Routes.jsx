import { createBrowserRouter } from "react-router-dom";


import Home from "../Homepage/Home";
import Root from "../Root/Root";
import { LoginCard } from "../UserAuthentication/Login/Login";
import { RegistrationCard } from "../UserAuthentication/Registration/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";
import Room from "../RoomsDetails/Room";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Account from "../UserInformation/Account";
import UserBookings from "../UserInformation/UserBookings";
import BookingForm from "../RoomsDetails/Booking";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <LoginCard></LoginCard>
            },
            {
                path: "register",
                element: <RegistrationCard></RegistrationCard>
            },
            {
                path: "/:id",
                element: <Room></Room>
            },
            {
                path: "/account",
                element: <PrivateRoute><Account></Account></PrivateRoute>
            },
            {
                path: "/booking",
                element: <PrivateRoute><UserBookings></UserBookings></PrivateRoute>
            },
            {
                path: "/:id/booking",
                element: <PrivateRoute><BookingForm></BookingForm></PrivateRoute>
            }
            
        ]
    },
])

export default routes;