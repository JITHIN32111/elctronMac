import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaEdit } from "react-icons/fa";
import img from '../../assets/Ellipse 2536.png'
import phn from '../../assets/phn.png'
import mail from '../../assets/mail.png'
import location from '../../assets/location.png'
import { MdEdit } from "react-icons/md";
import pen from '../../assets/Edit.png'
import bg from '../../assets/13.jpg'
import user from '../../assets/user3.png'
import calender from '../../assets/cal2.png'
import WorkTimeChart from './WorkTimeChart';
const isBirthday = true
const percentage = 100
const Dashboard = () => {
  return (
    <div className='pl-2 pt-6'>
      {/* top cards */}
      <div className={`flex flex-col lg:flex-row  gap-x-3 w-full  `}>
        <div className="  w-full h-[187px] lg:w-1/2 bg-white px-4 rounded-lg">
          {/* Header Section */}
          <div className="flex justify-between pl-5 items-center mb-3">
            <div>
              <h1 className="text-xl xl:text-main-heading2 font-customBold text-[#1E1E1E]">
                Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-500 to-orange-400 ">Robert Smith !</span>
              </h1>
              <p className="text-customGray font-customBold3 pt-2  text-smallHead">Have a good day!</p>
            </div>
            <span className="flex -mt-4 flex-row gap-x-1 cursor-pointer items-center justify-center w-16  rounded-full ">
              <img className="w-4 h-4" src={pen} alt="" />
              <span className="font-customBold text-smallHead" >Edit</span>
            </span>
          </div>

          {/* Profile Section */}
          <div className="flex items-center ">
            <div className='flex flex-col items-center  '>
              <div className="relative w-[67px] h-[67px] mr-4">
                <div className='rounded-full p-1 ' style={{
                  background: `conic-gradient(#8CC63F ${percentage * 3.6}deg, #fff 0deg)`,
                }}>
                  <div className='rounded-full p-1 bg-white'>
                    <img
                      src={img}
                      alt="Profile"
                      className="w-full h-full rounded-full  "
                    />
                  </div>

                </div>

                <div className="absolute -bottom-1 left-3 bg-yellow-500 text-white text-xs font-bold rounded-full px-2 py-1">
                  80%
                </div>
              </div>
              <span className='text-smallHead text-[#8C00EA] font-customBold  pt-2'>Complete Your Profile </span>
            </div>



            <div>
              <h2 className="text-lg xl:text-[24px] font-customBold">Robert Smith</h2>
              <p className="text-gray-500 text-sm font-customBold">Product Designer</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex  justify-end items-center space-x-2 text-gray-500 -mt-5">
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
              <img src={phn} alt="" />
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
              <img src={mail} alt="" />
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
              <img src={location}
                alt="" />        </div>
          </div>
        </div>

        <div className=' w-full h-full lg:w-1/2 flex flex-row gap-x-3'>
          {isBirthday &&
            <div
              className="w-1/2 sm:w-1/3 lg:w-1/2 xl:w-1/3 p-2 h-[187px]  bg-cover bg-center rounded-lg shadow-md text-white"
              style={{
                backgroundImage: `url(${bg})`,
              }}
            >
              <div className="rounded-lg">
                <div className='flex flex-row  justify-between items-center adlam-display'>
                  <h2 className="text-xl   xl:text-[24px] leading-tight">
                    <span className="block">Happy</span>
                    <span className="block -mt-1 ">Birthday</span>
                  </h2>
                  <img src={user} alt="" className='w-auto h-auto   ml-1 xl:w-14 xl:h-auto' />
                </div>
                <div className='flex flex-col justify-center items-center pt-5 mx-auto'>
                  <h3 className="text-lg xl:text-[23px] font-customBold mt-2">Robert Smith</h3>
                  <p className="text-[11px] font-customBold text-center">Product Designer</p>
                </div>

              </div>
            </div>}

            <div
      className={`${
        isBirthday ? "w-2/3" : "w-full"
      } bg-white rounded-lg shadow-md p-4`}
    >
      {/* Top Row */}
      <div className="flex items-center mb-3">
        <div className="   text-white rounded-md">
          <img src={calender} alt="" className='w-8 h-8 xl:w-auto xl:h-auto'/>
        </div>
        <h2 className="text-md xl:text-lg font-heavyBold text-gray-800 ml-2">
          Upcoming Holidays
        </h2>
      </div>

      {/* Holiday Details */}
      <div className='pl-12'>
        <h3 className="text-red-700 text-xl xl:text-main-heading4 font-semibold">Ramzan</h3>
        <p className="text-black font-customBold3 text-smallHead ">Mon 20 May 2024</p>
      </div>

      {/* View All Button */}
      <button className="w-full text-smallHead  bg-customGreen text-white rounded-md py-2.5 mt-4 text-center hover:bg-liteGreen transition">
        View all
      </button>
    </div>
        </div>
      </div>


<div>   
  
</div>

     <WorkTimeChart/>


      {/* top cards */}
    </div>

  );
}

export default Dashboard;
