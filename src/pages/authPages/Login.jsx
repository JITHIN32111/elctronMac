import React, { useState } from "react";
import img from "../../assets/Login.png";
import img2 from "../../assets/Group.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbSquareArrowRightFilled } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import icon from "../../assets/icon.png";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import authAPI from "../../apis/authApi";
import { useLocation, useNavigate } from "react-router-dom";
import { signinInitialValues, signInSchema } from "../../schema";
import toast from "react-hot-toast";
import LeftSection from "./LeftSection";
// import { login } from "../redux/features/authSlice";

const { doLogin } = authAPI();

const Login = () => {
  const navigate = useNavigate();
//   const dispatch = useDispatch();
  const location = useLocation();
  const fromSignUp = location.state?.key === "fromSignUp";
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: signinInitialValues,
      validationSchema: signInSchema,
      onSubmit: async (values) => {
        console.log(values);
        
        // try {
        //   setLoading(true);
        //   validateEmail();
        //   const data = {
        //     email: values.email,
        //     password: values.password,
        //   };
        //   const res = await doLogin(data);
        //   if (res.status === 200) {
        //     toast.success("Login Success!", {
        //       style: {
        //         background: "#72A10F",
        //         color: "#fff",
        //       },
        //     });

        //     // Dispatch the login action
        //     const token = res?.data?.token;
        //     const id = res?.data?.AdminId;
        //     const adminName = res?.data?.Admin;
        //     const taken = res?.data?.isAdminPackage;

        //     dispatch(login({ token, id, adminName, taken }));
        //     const profileFetch = await dispatch(fetchAdminProfile()).unwrap();
        //     console.log(profileFetch, "profileFetch");
        //     navigate("/admin");

        //     // if (profileFetch?.data?.isAdminPackage) {
        //     //   navigate("/admin/");
        //     // } else {
        //     //   navigate("/admin");
        //     // }
        //   }
        // } catch (err) {
        //   if (
        //     err.response &&
        //     (err.response.status === 404 || err.response.status === 401)
        //   ) {
        //     toast.error(err.response.data.message);
        //   } else {
        //     toast.error("Server error");
        //   }
        // } finally {
        //   setLoading(false);
        // }
      },
    });

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(values.email)) {
      setIsEmailValid(true);
      setIsEmailValidated(true);
      setShowPasswordField(true);
    } else {
      setIsEmailValid(false);
      setShowPasswordField(false);
      setIsEmailValidated(false);
    }
  };

  return (
    <div className="bg-white w-full h-screen">
      <div className="flex flex-row justify-center items-center w-full h-screen bg-white">
        {/* Left Image Section */}
       <LeftSection/>
        {/* Right Form Section */}
        <div className="lg:w-1/2 w-full px-8 sm:px-48 lg:px-16 xlx:px-32 mx-auto">
        <div className="flex flex-row gap-x-1 justify-center items-center pb-8">
            <img src={icon} className="xlx:w-auto xlx:h-auto w-6 h-6" alt="" />
            <span className="text-lg xl:text-xl xlx:text-[24px] font-semibold">
              Seclob connect
            </span>
          </div>
          <h2 className="xlx:text-auth-heading text-xl font-semibold xlx:font-bold xlx:mb-8 mb-4 text-center lg:text-start">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-2 xlx:mb-4 relative">
              <label
                className="block text-sm font-customBold     text-black mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isEmailValidated} // Disable the email input after validation
                className="w-full p-2 xlx:p-3 border rounded-md focus:outline-none focus:border-[#72A10F] focus:border-[1.5px]"
                placeholder="Enter your email"
              />
              {/* Conditionally Render Arrow for Email Validation */}
              {!fromSignUp && (
                <span
                  className={`absolute right-3 top-1/2 ${
                    isEmailValid ? "mt-3" : "mt-1"
                  } transform -translate-y-1/2 cursor-pointer text-gray-400`}
                  onClick={validateEmail}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") validateEmail();
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <TbSquareArrowRightFilled
                    className="text-liteGreen"
                    size={20}
                  />
                </span>
              )}
              {!isEmailValid && (
                <p className="text-red-500 text-xs mt-1">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            {/* Password Field (Always Show for Sign Up) */}
            {(showPasswordField || fromSignUp) && (
              <div className="mb-2 relative xlx:mb-4">
                <label
                  className="block text-sm font-customBold   text-black mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full p-2 xlx:p-3 pr-10 rounded-lg border focus:outline-none focus:border-[#72A10F] focus:border-[1.5px]"
                    placeholder="Enter your password"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                    onClick={togglePassword}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") togglePassword();
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <div className="min-h-[10px] flex flex-row justify-between">
                  {/* Increased height for consistent spacing */}
                  {touched.password && errors.password && (
                    <p className="form-error text-smallHead pt-1 sm:text-red-600 text-red-400">
                      {errors.password}
                    </p>
                  )}
                  <span onClick={()=>navigate("/forgot-password")} className="text-customGreen cursor-pointer ml-auto font-customBold text-smallHead pt-1">Forgot password?
                  </span>
                </div>
              </div>
            )}

            {/* Login Button */}
            {(showPasswordField || fromSignUp) && (
              <div>
                <button
                  type="submit"
                  className="w-full text-sm xlx:text-[16px] mt-5 bg-green-950 hover:bg-semiLiteGreen text-white font-medium py-3 rounded-lg shadow-md"
                  disabled={loading}
                >
                  {loading ? "Logging In..." : "Login"}
                </button>
              </div>
            )}

            {/* Google Sign-In Button */}
        

            <p className="text-center font-normal     mt-6 text-sm  text-customBlack">
              Don't have an account?
              <a
                onClick={() => navigate("/signup")}
                className="text-liteGreen font-customBold ml-1 cursor-pointer hover:underline transition-all duration-300 "
              >
                Sign Up
              </a>
            </p>

            {/* <p className="text-center  mt-2 text-sm font-normal  text-customBlack">
              Reset password?
              <a
                onClick={() => navigate("/forgot-password")}
                className="text-liteGreen font-customBold ml-2 hover:underline transition-all duration-300 cursor-pointer"
              >
                Click here
              </a>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
