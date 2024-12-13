import React, { useEffect, useState } from "react";

import img3 from "../../assets/finger-cricle.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LeftSection from "./LeftSection";
import { GoArrowLeft } from "react-icons/go";
import { resetinInitialValues, resetInSchema } from "../../schema";
import authAPI from "../../apis/authApi";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const { doResetPassword } = authAPI();

const CreatePassword = () => {
const navigate = useNavigate();
const [token, setToken] = useState(null);
const [loading, setLoading] = useState(false);
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const togglePassword = () => setShowPassword(!showPassword);
const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: resetinInitialValues,
    validationSchema: resetInSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const data = {
          password: values.password,
          encryptedId:token
          
        };
        console.log(data,"data");
        
        const res = await doResetPassword(data);
        console.log(res, "res--------------------------------------");

        if (res.status === 201) {
          toast.success("Your password changed successfully!", {
            style: {
              background: "#72A10F",
              color: "#fff",
            },
          });
          setTimeout(() => {
        
            navigate("/success-page");
          }, 1000);
        }
      } catch (err) {
        if (err.response && err.response.status === 401) {
          toast.error(err.response.data.message);
        } else {
          toast.error("Server error");
        }
      } finally {
        setLoading(false);
      }
    },
  });

//   useEffect(() => {
//     const updateToken = () => {
//         const params = new URLSearchParams(window.location.search);
//         const tokenFromUrl = params.get("token");
//         if (tokenFromUrl) {
//             setToken(tokenFromUrl);
//         } else {
//             navigate("/forgot-password"); 
//         }
//     };

//     updateToken();
//     window.addEventListener("popstate", updateToken);
//     return () => {
//         window.removeEventListener("popstate", updateToken);
//     };
// }, [navigate]);


  return (
    <div className="bg-white w-full h-screen">
      <div className="flex flex-row justify-center items-center w-full h-screen bg-white">
        {/* Left Image Section */}
       <LeftSection/>
        {/* Right Form Section */}
        <div className="lg:w-1/2 w-full px-8 sm:px-48 lg:px-16 xlx:px-32 mx-auto">
        {/* <div className="flex flex-row gap-x-1 justify-center items-center pb-8">
            <img src={icon} className="xlx:w-auto xlx:h-auto w-6 h-6" alt="" />
            <span className="text-lg xl:text-xl xlx:text-[24px] font-semibold">Seclob connect</span>
          </div> */}
          <div className="flex flex-col justify-center items-center xlx:gap-y-4 gap-y-3 mb-10">
            <img src={img3} alt="" />
            <h2 className="xlx:text-auth-heading text-xl font-semibold xlx:font-bold  text-center lg:text-start">
              Set a new password
            </h2>
            <span className="text-customGray text-sm">
              enter a new password to finalize setup          </span>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            {/* Email Field */}
            <div className="mb-3 relative xlx:mb-4">
              <label className="block text-sm font-customBold text-customBlack mb-1" htmlFor="password">
               New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full  p-2 xlx:p-3 pr-10 rounded-lg border focus:outline-none focus:border-[#72A10F] focus:border-[1.5px]"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                   {touched.password && errors.password ? (
                  <div className="absolute left-0 w-full text-red-500 text-xs">
                    {errors.password}
                  </div>
                ) : null}
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                  onClick={togglePassword}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') togglePassword();
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-2 relative xlx:mb-4">
              <label className="block text-sm font-customBold text-customBlack mb-1" htmlFor="confirmPassword">
                Confirm password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="w-full p-2 xlx:p-3 pr-10  rounded-lg border focus:outline-none focus:border-[#72A10F] focus:border-[1.5px]"
                  placeholder="Confirm your password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                     {touched.confirmPassword && errors.confirmPassword ? (
                  <div className="absolute left-0 w-full text-red-500 text-xs">
                    {errors.confirmPassword}
                  </div>
                ) : null}
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                  onClick={toggleConfirmPassword}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') toggleConfirmPassword();
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 bg-customGreen hover:bg-green-800 text-white font-medium py-3 rounded-md transition duration-300"
              disabled={loading}
              

            >
              {loading ? "Reseting..." : "Reset Password"}
              </button>
          </form>
          <button
            type="button"
            onClick={() => navigate("/login")}

            className="mt-6 text-gray-600 text-sm mx-auto flex items-center group"
          >
            <span className="mr-2 transform hover:skew-x-6 transition-transform duration-300 group-hover:-translate-x-1">
              <GoArrowLeft size={20} />
            </span>{" "}
            Back to Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
