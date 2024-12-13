import React, { useState } from "react";
import img from "../../assets/Login.png";
import img2 from "../../assets/Group.png";
import img3 from "../../assets/finger-cricle.png";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import authAPI from "../../apis/authApi";
import { forgotinInitialValues, forgotInSchema } from "../../schema";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import LeftSection from "./LeftSection";
const { doSendMailforReset } = authAPI();

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);



    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: forgotinInitialValues,
            validationSchema: forgotInSchema,
            onSubmit: async (values) => {
                try {
                    setLoading(true);
                    const data = {
                        email: values.email,
                    };
                    const res = await doSendMailforReset(data);
                    console.log(res, "res--------------------------------------");

                    if (res.status === 200) {
                        toast.success("Password reset mail sent to your email successfully!", {
                            style: {
                                background: "#72A10F",
                                color: "#fff",
                            },
                        });

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

    return (
        <div className="bg-white w-full h-screen">
            <div className="flex flex-row justify-center items-center w-full h-screen bg-white">
                {/* Left Image Section */}

                <LeftSection />
                {/* Right Form Section */}
                <div className="lg:w-1/2 w-full px-8 sm:px-48 lg:px-16 xlx:px-32 mx-auto">

                    <div className="flex flex-col justify-center items-center xlx:gap-y-4 gap-y-3 mb-10">
                        <img src={img3} alt="" />
                        <h2 className="xlx:text-auth-heading text-xl font-semibold xlx:font-bold  text-center lg:text-start">
                            Forgot password
                        </h2>
                        <span className="text-[#999999] text-sm font-customBold">
                            need a password reset {""}? just input your email!
                        </span>
                    </div>
                    <form className="w-full" onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div className="mb-1 relative xlx:mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-customBold text-customBlack mb-1"
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
                                className={`w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:border-green-700`}
                                placeholder="Enter your email"
                            />
                            {touched.email && errors.email ? (
                                <div className="absolute left-0 w-full text-red-500 text-xs">
                                    {errors.email}
                                </div>
                            ) : null}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-4 bg-customGreen hover:bg-liteGreen text-white font-medium py-2.5 rounded-md transition duration-300"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send mail"}

                        </button>
                    </form>
                    <button
                        type="button"

                        onClick={() => navigate("/", { state: { key: "fromSignUp" } })}
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

export default ForgotPassword;
