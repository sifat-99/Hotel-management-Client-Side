import { createBrowserRouter } from "react-router-dom";


import Home from "../Homepage/Home";
import Root from "../Root/Root";
import { LoginCard } from "../UserAuthentication/Login/Login";
import { RegistrationCard } from "../UserAuthentication/Registration/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
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
                path: "/about",
            }
        ]
    },
])

export default routes;