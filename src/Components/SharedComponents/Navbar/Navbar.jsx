import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

// const {user} = useContext(AuthContext);
// profile menu component
const profileMenuItems = [
  {
    label: "Settings",
    icon: Cog6ToothIcon,
    href: "/settings",
  },
  {
    label: "My Profile",
    icon: UserCircleIcon,
    href: "/profile",
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
    href: "/inbox",
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
    href: "/help",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const { logOut } = useContext(AuthContext);

  const handleSighnOut = () => {
    console.log("sign out");
    logOut()
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={`${user?.photoURL}`}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, href }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="a"
                href={href}
                variant="small"
                className="font-normal"
                onClick={isLastItem ? handleSighnOut : null}
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    id: "Standard",
    title: "Standard Rooms",

    href: "/standard-rooms",
  },
  {
    id: "Deluxe",
    title: "Deluxe Rooms",

    href: "/Premier-rooms",
  },
  {
    id: "Premier",
    title: "Premier Rooms",
    href: "/Premier-rooms",
  },
  {
    id: "Pacific",
    title: "Pacific Club Rooms",

    href: "/pacific-club-rooms",
  },
  {
    id: "Suites",
    title: "Suites",
    href: "/suites",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title,id }) => (
    <a href={`${id}`} key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        {/* <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography> */}
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-normal text-red-500"
          >
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              ROOMS AND SUITES{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/28Kf2BS/breakfast-buffet-full-continental-english-coffee-orange-juice-salad-croissant-fruit-77238300.webp')",
            }}
          >
            <span></span>
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        ROOMS AND SUITES{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Account",
    icon: UserCircleIcon,
    href: "/account",
  },
  {
    label: "My Bookings",
    icon: CubeTransparentIcon,
    href: "/myBookings",
  },
  {
    label: "Docs",
    icon: CodeBracketSquareIcon,
    href: "/docs",
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon, href }) => (
        <Typography
          key={label}
          as="a"
          href={href}
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export function StickyNavbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { user } = useContext(AuthContext);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-2xl p-2 px-4 lg:rounded-full lg:pl-6 sticky inset-0 z-10 ">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <div>
          <Link>
            <img className="h-12" src="/Hotel.png" alt="" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <div>
          {theme === "light" ? (
            <button
              onClick={handleToggle}
              className="btn normal-case btn-neutral sm:btn-sm md:btn-sm lg:btn-sm"
            >
              Dark
            </button>
          ) : (
            <button
              onClick={handleToggle}
              className="btn normal-case btn-active sm:btn-sm md:btn-sm lg:btn-sm"
            >
              Light
            </button>
          )}
        </div>

        {user ? (
          <div className="flex gap-2 items-center">
            <h2 className="text-black flex-wrap">{user?.displayName}</h2> <ProfileMenu />
          </div>
        ) : (
          <Button size="sm" variant="text">
            <Link to={"/login"}>
              <span>Log In</span>
            </Link>
          </Button>
        )}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
