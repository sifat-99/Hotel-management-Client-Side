
import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../SharedComponents/Navbar/Navbar";
import { FooterWithLogo } from "../SharedComponents/Footer/Footer";

const Root = () => {
    return (
        <div className="mx-auto font-poppins"  data-aos="zoom-in">
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
            <FooterWithLogo></FooterWithLogo>
        </div>
    );
};

export default Root;