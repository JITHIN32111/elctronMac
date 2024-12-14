import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import clossingIcon from '../assets/clossingIcon.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { BiSolidCoupon } from "react-icons/bi";
import { PiBagFill } from "react-icons/pi";
import { IoIosNotifications } from "react-icons/io";
import img2 from '../assets/Vector.png';
import { RiShieldUserFill } from "react-icons/ri";
import { RiApps2Fill } from "react-icons/ri";
import { MdOutlinePayments, MdAdminPanelSettings, MdSpaceDashboard } from "react-icons/md";

const AdminAside = ({ open, setOpen }) => {
  const location = useLocation();
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  const Menus = [
    { title: "Overview", path: "/user", icon: <MdSpaceDashboard /> },
    { title: "Employees", path: "/user/calander", icon: <RiShieldUserFill /> },
    { title: "Timesheet", path: "/user/company", icon: <PiBagFill /> },

  ];

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setOpen]);

  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  };

  return (
    <div
  className={`z-50 sidebar ${open ? "sidebar-open shadow-xl px-4  " : "sidebar-closed px-3"} bg-[#022213] text-white h-screen py-5 pt-6 ${window.innerWidth < 768 ? "fixed top-0 p-6" : ""}`}
  style={{
    width: open ? "auto" : "6rem",
    transition: "width 0.3s ease-in-out",
    display: "flex", // Flexbox
    flexDirection: "column", // Stack elements vertically
    justifyContent: "space-between", // Space out children
  }}
  key={location.pathname}
>
<img
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setOpen(!open);
          }
        }}
        src={clossingIcon}
        alt=""
        className={`absolute cursor-pointer left-0 top-20 mt-40 w-2 h-12 text-white shadow-2xl rounded-full ${!open && "rotate-3"} transition-transform duration-300`}
        onClick={() => setOpen(!open)}
      />
  <div>
    {/* Sidebar logo and menu items */}
    <div className="flex gap-x-4 items-center">
      <div className={`flex justify-center items-center text-xl sm:text-2xl pl-4 sm:pl-0 md:pl-5 font-bold -mb-6 md:-mb-0`}>
        <span className={`${!open ? "hidden" : ""} transition-all duration-500 ease-in-out`}>Logo</span>
        <img src={img2} className="w-10" alt="Company logo" aria-label="Company logo" />
        <span className={`${!open ? "hidden" : ""} transition-all duration-500 ease-in-out`}>Ipsum</span>
      </div>
    </div>

    <ul className="pt-6">
      {Menus.map((Menu) => (
        <li
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleMenuClick(e);
            }
          }}
          key={Menu.title}
          className={`flex rounded-md p-2 pl-4 font-normal cursor-pointer hover:bg-light-white text-sm items-center gap-x-4
            ${location.pathname === "/user"
              ? location.pathname === Menu.path
                ? "text-[#72A10F]"
                : "text-white"
              : location.pathname.split("/").includes(Menu.path.split("/user/").pop())
              ? "text-[#72A10F]"
              : "text-white"}
            transition-all duration-300 ease-in-out`}
          onClick={handleMenuClick}
        >
          <Link to={Menu.path} className={`flex items-center gap-x-4 ${open ? "mt-1 xlx:mt-0 " : "mt-1"}`}>
            <span className={`${!open ? "pl-3 text-xl" : "text-xl"} transition-all duration-500 ease-in-out`}>
              {Menu.icon}
            </span>
            <span
              className={`${!open && "opacity-0 w-0 transition-shadow duration-100 ease-in-out"} transition-opacity opacity-0 duration-700 ease-in-out`}
              style={{
                width: open ? "auto" : "0",
                opacity: open ? "1" : "0",
              }}
            >
              {Menu.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Fixed Bottom Section */}

</div>

  );
};

export default AdminAside;
