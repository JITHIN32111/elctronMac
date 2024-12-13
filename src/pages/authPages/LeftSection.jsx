import React from 'react';
import img from "../../assets/Login.png";
import img2 from "../../assets/Group.png";
import Typewriter from "typewriter-effect";
const LeftSection = () => {
    return (
            <div className="relative w-1/2 hidden lg:block">
                
                <img
                    src={img}
                    alt="Admin control panel preview"
                    className="h-screen w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-0 text-white">
      <div className="flex flex-col items-start justify-between space-y-10 h-sm:space-y-24 h-md:space-y-44 h-lg:space-y-56">
        <div className="pl-12">
          {/* Heading with Typewriter Effect */}
          <div className="text-2xl flex flex-col font-semibold text-[32px] xl:text-[46px] xlx:text-[70px] leading-none">
            <span className="font-heavyBold block">
              <Typewriter
                options={{
                    strings: ["Easy To Use", "Built for You,"],
                                      autoStart: true,
                  loop: true,
                //   delay: 75,
                //   deleteSpeed: 50,
                }}
              />
            </span>
            <span className="font-normal xlx:-mt-2">Dashboard</span>
          </div>

          {/* Subheading */}
          <p className="text-start text-[#FFFFFF] text-sub-heading2 xlx:text-sub-heading pt-3 xlx:pt-6 font-customBold3">
            <span>Choose the best of product/services and get a bare metal </span>{" "}
            <br />
            <span>server at the lowest prices.</span>
          </p>
        </div>

        {/* Image */}
        <img
          src={img2}
          className="h-[450px] h-sm:h-[510px] h-md:h-[600px] self-start"
          alt=""
        />
      </div>
    </div>
            </div>
    );
}

export default LeftSection;
