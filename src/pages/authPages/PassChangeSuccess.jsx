import React, { useEffect, useState } from "react";
import LeftSection from "./LeftSection";
import { useLocation, useNavigate } from "react-router-dom";
import authAPI from "../../apis/authApi";
import toast from "react-hot-toast";
import img from '../../assets/tick-circle.png'

const { doSuccessInPaypal } = authAPI();
const PassChangeSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    const paymentId = params.get("paymentId");
    const payerId = params.get("PayerID");
    return { paymentId, payerId };
  };

  const onApprove = async () => {
    try {
      const { paymentId, payerId } = getQueryParams();

      if (!paymentId || !payerId) {
        throw new Error("Missing paymentId or payerId in query parameters.");
      }
  
      const params = {
        payerId,
        paymentId,
      };
  
      const response = await doSuccessInPaypal(params);
  
      if (response.status === 200) {
        toast.success("Your payment completed successfully!", {
          style: {
            background: "#72A10F",
            color: "#fff",
          },
        });

        setTimeout(() => {
         navigate("/admin")
        }, 2000); 
      } else {
        console.error("Error verifying PayPal payment:", response.data.message);
        toast.error("Error verifying PayPal payment. Please try again.", {
          style: {
            background: "#D32F2F",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.error("Error during payment approval:", error);
  
      toast.error("Payment failed. Please try again.", {
        style: {
          background: "#D32F2F",
          color: "#fff",
        },
      });
    }
  };
  

  useEffect(() => {
    onApprove();
  }, [location]);

  return (
    <div className="bg-white w-full h-screen">
      <div className="flex flex-row justify-center items-center w-full h-screen bg-white">
        {/* Left Image Section */}
       
        <LeftSection/>
        {/* Right Form Section */}

        <div className="lg:w-1/2 w-full px-8 sm:px-48 lg:px-16 xlx:px-30 mx-auto">
          <div className="flex flex-col justify-center items-center  gap-y-3 mb-10">
            <img src={img} alt="" />
            <h2 className=" text-xl font-semibold pt-4 xlx:font-bold  text-center lg:text-start">
              Password Updated Successfully
            </h2>
            <span className="text-[#757575] font-customBold text-xs sm:text-sm">
              Your password has been changed. Please use your new password to
              log in
            </span>
            <div className="px-10"></div>
            <button
              type="submit"
              className="w-96   text-sm xlx:text-[16px] mt-5 xlx:mt-4 bg-customGreen hover:bg-liteGreen text-white font-medium py-3  rounded-lg transition duration-300"
              onClick={() => navigate("/", { state: { key: "fromSignUp" } })}
            >
              Login to my account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassChangeSuccess;
