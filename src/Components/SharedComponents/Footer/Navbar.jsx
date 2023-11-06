import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.displayName)
  const handleSignOut = () => {
    console.log("sign out");
    logOut()
      .then((res) => {
        console.log(res);
        swal("Congratulation!", "You have successfully Logged out!", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const NavBarItems = (
    <>
      <li>
        {" "}
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#FF444A] underline text-white font-bold text-xl"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#FF444A] underline text-white font-bold text-xl"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to={"/events"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#FF444A] underline text-white font-bold text-xl"
              : ""
          }
        >
          Events
        </NavLink>
      </li> */}
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky inset-0 z-10 py-5">
      <div className="navbar-start">
        <div className="flex flex-row-reverse ">
          <Link to={"/"}>
            <img className="w-1/2" src={'/openevent.png'} alt="" />
          </Link>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 gap-4 w-80 min-h-full bg-base-200 text-base-content">
                {NavBarItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex items-center gap-4 px-1">
          {NavBarItems}
          {user ? (
            <li>
              <NavLink
                to={"/dashboard"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#FF444A] underline text-white font-bold text-xl"
                    : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
          ) : (
            <NavLink to={"/register"}>
              <button className="btn btn-ghost">Register</button>
            </NavLink>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn btn-circle btn-lg"
                >
                  <img className="rounded-full" src={user?.photoURL} alt="" />
                </label>
              </div>
              <div className="drawer-side mt-20 ">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-auto min-h-full bg-base-200 text-base-content">
                  <li>{user?.displayName}</li>
                  <li className="mt-8">
                    <Link to={'/profile'}><button>Profile</button></Link>
                  </li>
                  <li>
                    <Link to={'/dashboard'}><button>Dashboard</button></Link>
                  </li>
                  <li>
                   <button onClick={handleSignOut}>Sign Out</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-secondary normal-case">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
