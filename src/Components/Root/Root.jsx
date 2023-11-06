
import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../SharedComponents/Navbar/Navbar";

const Root = () => {
    return (
        <div className="mx-auto font-poppins"  data-aos="zoom-in">
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;