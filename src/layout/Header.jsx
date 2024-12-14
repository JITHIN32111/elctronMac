import React, { useState, useRef, useEffect } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import "react-datepicker/dist/react-datepicker.css";
import { TiUser } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import logoutImg from '../assets/logout3.png'
import { useNavigate, } from 'react-router-dom'
import logoutImg2 from '../assets/logout2.png'
import profileImg from '../assets/profileImg.png'
import { doLogout } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";
const Header = ({ open, setOpen }) => {






  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [logout, setLogout] = useState(false)
  const [logoutModal, setLogoutModal] = useState(false)

  // Refs for dropdowns
  const dropdownRef = useRef(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //hanlde logout button
  const handleLogoutButton = () => {
    console.log("::::::::::::::::::::::::::::");

    setLogout(true)
  }


  const toggleProfileModal = () => {
    setProfileModalVisible(!profileModalVisible);
  };

  // Handle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  ;




  const logoutHandle = () => {
    setLogoutModal((prev) => !prev);
  };
  const adminLogout = () => {
    dispatch(doLogout()); // Dispatch the logout action
    navigate('/');
  }


  const handleProfile = () => {
    alert('coming soon')
    setProfileModalVisible(false)
  }

  return (
    <header  className="bg-white py-4 pl-64 xl:pl-[310px] text-gray-900 flex justify-end lg:justify-between pr-6 lg:pr-0 items-center w-full fixed top-0 z-50">
      <div className="items-center gap-4 relative hidden lg:flex">

      </div>

      {/* Search bar, notification, and user profile */}
      <div className="relative flex items-center gap-x-4 lg:gap-x-8 pr-0 sm:pr-2 lg:pr-6">

        <div className="relative mr-0 xl:mr-14  md:w-44 lg:w-64 xl:w-[337px] w-52">
          <input
            type="text"
            placeholder="Search anything........."
            className="px-4 py-2 pl-2 border rounded-lg focus:outline-none w-full"
          />
          <div className="absolute inset-y-0 right-3 flex items-center">
            <CiSearch
              className="text-black hover:text-gray-500 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              size={22}
            />
          </div>
        </div>

        <button
        
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-50"
          style={{ zIndex: 1000 }}
        >
          <ImMenu size={24} />
        </button>
        <div className="flex flex-row gap-x-4">

          <button className="items-center flex bg-white  hover:bg-[#022213] hover:text-[#72B800] p-2 rounded-lg -mr-2">
            <FaBell size={20} />
          </button>
          <button
            className="items-center hidden lg:flex  hover:bg-[#022213] hover:text-[#72B800] p-2 rounded-lg"
            onClick={toggleProfileModal}
          >
            <TiUser size={24} />
          </button>

          <button
            onClick={logoutHandle}
            className="items-center hidden lg:flex  hover:bg-white hover:shadow-lg hover:text-[#72B800] p-2 rounded-lg"
          // onClick={toggleProfileModal}
          >
            <img src={logoutImg} alt="" />
          </button>
        </div>
        {logoutModal && <div className="absolute h-[320px]   top-12 mt-2 right-8 bg-white border border-gray-200 rounded-lg shadow-lg w-[294px] p-6 z-50">
          <div
            onClick={() => setLogoutModal(false)}
            className="absolute top-2 right-2 text-2xl rounded-md border hover:skew-x-2 border-gray-500 text-gray-600 hover:text-gray-900"
          >
            <IoIosClose />
          </div>

          {/* Dummy Logout Image */}
          <div className="flex flex-col items-center ">
            <img src={logoutImg2} alt="Logout" className="w-22 h-22 rounded-full mb-4" />
            <div className="justify-center items-center text-center text-[18px] font-semibold text-black">
              <p className="">Are You Sure You Want  </p>
              <p className="-mt-1 ">to Logout  </p>
            </div>


          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-x-2 mt-12  text-base pb-1">
            <button
              onClick={() => setLogoutModal(false)} // Allow going back to profile view
              className="bg-white font-medium text-[12px] xlss:text-sm h-[40px] w-[125px] border border-gray-400 px-10 transition-all duration-200 text-gray-900 py-2 rounded-lg hover:bg-red-600 hover:text-white"
            >
              Cancel
            </button>
            <button

              className="bg-[#022213] text-[12px] xlss:text-sm h-[40px] w-[125px] text-white px-10 py-2 rounded-lg hover:bg-liteGreen transition-all duration-200"
            >
              Logout
            </button>
          </div>
        </div>}



        {/* Profile Modal */}
        {profileModalVisible && (
          <>

            <div className="absolute top-12 mt-2  h-[320px] w-[294px] right-8 bg-white border border-gray-200 rounded-lg shadow-lg  p-6 z-50">
              <div
                onClick={toggleProfileModal}
                className="absolute top-2 right-2 text-2xl rounded-md border-2 border-gray-300 text-gray-600 hover:text-gray-900"
              >
                <IoIosClose />
              </div>

              {/* Dummy Profile Image */}
              <div className="flex flex-col items-center mb-4 pt-8">
                <img src={profileImg} alt="Profile" className="w-24 h-24 rounded-md mb-4" />
                <h2 className="text-lg font-semibold text-[#171717]">Admin Name</h2>

                <p className="text-[#757575] text-sm mt-3">@admin900@gmail.com</p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center mt-6 text-sm px-2">

                <button onClick={handleProfile} className="bg-[#022213] w-full text-white px-4 py-2 rounded-lg hover:bg-liteGreen transition-all duration-300">
                  View profile
                </button>
              </div>
            </div>

          </>
        )}











        {/* User Profile Button */}
        <div className="relative lg:hidden" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="flex items-center gap-2">
            <FaUserCircle size={24} />
          </button>

          {/* Dropdown for Profile */}
          {dropdownVisible && (
            <div className="absolute right-0 mt-3 py-4 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div
                onClick={toggleDropdown}
                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-2xl rounded-md border-2 border-gray-300 text-gray-600 hover:text-gray-900"
              >
                <IoIosClose className="text-lg" /> {/* Adjust size if needed */}
              </div>

              <ul className="py-2">
                <div className="flex flex-col items-center mb-4">
                  <img src={profileImg} alt="Profile" className="w-14 h-14 rounded-md mt-2 mb-4" />
                  <h2 className="text-lg font-semibold text-[#171717]"> Admin Name</h2>
                  <p className="text-[#757575] text-sm">admin900@gmail.com</p>
                </div>




                <div className="flex flex-row gap-x-2  mt-2 text-xs p-2 pb-6 ">
                  <button
                    onClick={handleLogoutButton} // Set the logout state to true
                    className="bg-[#022213] text-white px-4 w-32 py-2 rounded-lg hover:bg-liteGreen transition-all duration-300"
                  >
                    Log out
                  </button>
                  <button onClick={handleProfile} className="bg-[#022213] w-32 text-white px-4 py-2 rounded-lg hover:bg-liteGreen transition-all duration-300  ">
                    Profile
                  </button>

                  {logout && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                      <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg w-72 p-6">
                        <div
                          onClick={() => setLogout(false)}
                          className="absolute top-2 right-2 text-2xl rounded-md border-2 border-gray-300 text-gray-600 hover:text-gray-900 cursor-pointer"
                        >
                          <IoIosClose />
                        </div>

                        {/* Logout Image and Text */}
                        <div className="flex flex-col items-center">
                          <img src={logoutImg2} alt="Logout" className="w-22 h-22 rounded-full mb-4" />
                          <div className="justify-center items-center text-center text-lg font-semibold text-black">
                            <p>Are You Sure You Want</p>
                            <p className="-mt-2">to Logout</p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-center gap-x-6 mt-12 text-base">
                          <button
                            onClick={() => setLogout(false)} // Allow going back to profile view
                            className="bg-white font-medium border px-6 py-2 text-gray-900 rounded-lg hover:bg-liteGreen"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={adminLogout}
                            className="bg-[#022213] text-white px-6 py-2 rounded-lg hover:bg-liteGreen"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  )}



                </div>
              </ul>
            </div>
          )}
        </div>
      </div>

    </header>
  );
};

export default Header;
