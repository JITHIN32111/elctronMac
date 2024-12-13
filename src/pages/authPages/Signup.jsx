import React, { useState, useRef } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import icon from "../../assets/icon.png";
import authAPI from "../../apis/authApi";
import { useFormik } from "formik";
import { signupInitialValues, signUpSchema } from "../../schema";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import numbers from "../../config/number";
import useClickOutside from "../../customHooks/useClickOutside";
import LeftSection from "./LeftSection";
// import App from '../../App.css'
// const { doSignUp } = authAPI();

const Signup = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [selectedCode, setSelectedCode] = useState("+91");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);
    const toggleConfirmPassword = () =>
        setShowConfirmPassword(!showConfirmPassword);
    const [selectedImage, setSelectedImage] = useState(
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg"
    );
    const dropdownRef = useRef(null);
    useClickOutside(dropdownRef, () => setIsDropdownOpen(false));


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: signupInitialValues,
            validationSchema: signUpSchema,
            onSubmit: async (values) => {
                try {
                    setLoading(true);
                    const data = {
                        name: values.name,
                        email: values.email,
                        countryCode: selectedCode,
                        phone: values.phone,
                        password: values.password,
                    };

                    console.log(data);


                    //   const res = await doSignUp(data);

                    //   if (res.status === 200) {
                    //     toast.success("Your account has been created successfully!", {
                    //       style: {
                    //         background: "#72A10F",
                    //         color: "#fff",
                    //       },
                    //     });
                    //     setTimeout(() => {
                    //       navigate("/");
                    //     }, 1000);
                    //   }
                    // } catch (err) {
                    //   if (err.response && err.response.status === 403) {
                    //     toast.error(err.response.data.message);
                    //   } else {
                    //     toast.error("Server error");
                    //   }
                } finally {
                    setLoading(false);
                }
            },
        });

    const handleSelectCode = (code, image) => {
        setSelectedCode(code);
        setIsDropdownOpen(false);
        setSelectedImage(image);

    };

    return (
        <div className="bg-white w-full h-screen ">
            <div className="flex flex-row justify-center items-center w-full h-screen bg-white">
                {/* Left Image Section */}
                <LeftSection/>

                {/* Right Form Section */}

                <div className="lg:w-1/2 w-full px-8 sm:px-48 lg:px-16 xlx:px-32 mx-auto">
                    <div className="flex flex-row gap-x-0.5 justify-center items-center xlx:pb-6">
                        <img src={icon} className="xlx:w-auto xlx:h-auto w-6 h-6" alt="" />
                        <span className="text-lg xl:text-xl xlx:text-[24px] font-semibold">
                            Seclob connect
                        </span>
                    </div>
                    <h2 className=" text-xl lg:text-main-heading3 text-customBlack font-semibold lg:font-heavyBold xlx:mb-4 mb-2 text-center lg:text-start">
                        Sign up
                    </h2>

                    <form onSubmit={handleSubmit} >
                        {/* Name Field */}
                        <div className=" relative ">
                            <label
                                className="block font-heavyBold text-sm text-customBlack mb-1"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2  border rounded-lg focus:outline-none focus:border-[#72A10F] focus:border"
                                placeholder="Enter your name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div
                                className={`w-full text-red-500 text-xs pt-1 transition-all duration-300`}
                                style={{ minHeight: "1.25rem" }} // Reserve space for error messages
                            >
                                {touched.name && errors.name ? errors.name : null}
                            </div>

                        </div>

                        {/* Email Field */}
                        <div className="relative ">
                            <label
                                className="block text-sm font-heavyBold text-customBlack mb-1"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2  border rounded-lg focus:outline-none focus:border-[#72A10F] focus:border"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div
                                className={`w-full text-red-500 text-xs  transition-all duration-300`}
                                style={{ minHeight: "1.25rem" }}
                            >
                                {touched.email && errors.email ? errors.email : null}
                            </div>

                        </div>

                        {/* Phone Field */}
                        <div className="relative ">
                            <label className="block text-sm font-heavyBold text-customBlack  pb-2">
                                Mobile Number
                            </label>
                            <div className="flex  items-center border border-gray-200 hover:border-liteGreen rounded-md  ">
                                <div className="relative ">
                                    <button
                                        type="button"
                                        className="w-full p-2 focus:outline-none"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
                                    >
                                        {selectedCode ? (
                                            <div className="flex items-center">
                                                <img
                                                    src={selectedImage}
                                                    alt="flag"
                                                    className="w-5 h-5 inline-block mr-2"
                                                />
                                                <span>{selectedCode}</span>
                                            </div>
                                        ) : (
                                            <span>Select</span>
                                        )}
                                    </button>

                                    {/* Custom Dropdown List */}
                                    {isDropdownOpen && (
                                        <ul
                                            ref={dropdownRef}
                                            className="absolute left-0 mt-1 w-44 max-h-36 overflow-y-auto border border-gray-200 bg-white text-gray-500 text-sm rounded-md shadow-md"
                                            style={{ zIndex: 100 }}
                                        >
                                            {numbers.map((country) => (
                                                <li
                                                    role="button" // Specifies the interactive nature of the element
                                                    tabIndex={0} // Makes the element focusable for keyboard navigation
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter" || e.key === " ") {
                                                            handleSelectCode(
                                                                country.dial_code,
                                                                country.image
                                                            ); // Trigger on click when pressing Enter or Space
                                                        }
                                                    }}
                                                    key={country.code}
                                                    className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
                                                    onClick={() =>
                                                        handleSelectCode(country.dial_code, country.image)
                                                    } // Set selected code on click
                                                >
                                                    <img
                                                        src={country.image}
                                                        alt={country.name}
                                                        className="w-5 h-5 inline-block mr-2"
                                                    />
                                                    {country.dial_code} {country.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <input
                                    type="number"
                                    name="phone" // Add this line
                                    className="w-full p-2   focus:outline-none"
                                    placeholder="Enter mobile number"
                                    onClick={() => {
                                        setIsDropdownOpen(false);
                                    }}
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div
                                className={`w-full text-red-500 text-xs transition-all duration-300`}
                                style={{ minHeight: "1.25rem" }}
                            >
                                {touched.phone && errors.phone ? errors.phone : null}
                            </div>

                        </div>

                        {/* Password Field */}
                        <div className="relative ">
                            <label
                                className="block text-sm font-heavyBold text-customBlack mb-1"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="w-full p-2  border rounded-lg focus:outline-none focus:border-[#72A10F] focus:border"
                                    placeholder="Enter your password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div
                                    className={`w-full text-red-500 text-xs  transition-all duration-300`}
                                    style={{ minHeight: "1.25rem" }}
                                >
                                    {touched.password && errors.password ? errors.password : null}
                                </div>

                                <span
                                    className="absolute right-3 -mt-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                                    onClick={togglePassword}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="relative ">
                            <label
                                className="block text-sm font-heavyBold text-customBlack mb-1"
                                htmlFor="confirmPassword"
                            >
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="w-full p-2  border rounded-lg focus:outline-none focus:border-[#72A10F] focus:border"
                                    placeholder="Confirm your password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div
                                    className={`w-full text-red-500 text-xs  transition-all duration-300`}
                                    style={{ minHeight: "1.25rem" }}
                                >
                                    {touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : null}
                                </div>

                                <span
                                    className="absolute right-3 top-1/2 -mt-2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                                    onClick={toggleConfirmPassword}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-2.5 text-sm xlx:text-sub-heading2 text-white bg-[#022213] rounded-lg font-medium xlx:mt-2 hover:bg-liteGreen transition-all duration-300 skew-x-3"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Sign Up"}
                        </button>

                        {/* Sign In Link */}
                        <p className="text-center mt-3 font-customBold2 text-sm xlx:text-sub-heading2 text-black">
                            Already have an account?{" "}
                            <a
                                onClick={() =>
                                    navigate("/login" )
                                }
                                className="text-liteGreen  cursor-pointer"
                            >
                                Sign in
                            </a>
                        </p>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
